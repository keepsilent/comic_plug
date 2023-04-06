/**
 * 漫画
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlComic = (function () {
    var options = {
        title: '#ddl-comic-title',
        subtitle: '#ddl-comic-subtitle',
        wrap: '#ddl-comic-wrap',
        main: '#ddl-comic-main',
        item: '#ddl-comic-item',
        menu: '#ddl-comic-menu',
        totalPage: '#ddl-comic-total-page',//当前页数
        currentPage: '#ddl-comic-current-page', //总页数
        catalog: '#ddl-comic-catalog', //目录
        catalogSwitch: '#ddl-comic-catalog-switch', //目录开关
        catalogSort : '#ddl-comic-catalog-sort',
        iframe: '#ddl-comic-iframe',

        prevBtn:'#ddl-comic-prev-btn',
        nextBtn:'#ddl-comic-next-btn',
        lightBtn: '#ddl-comic-light-btn',
        favorBtn: '#ddl-comic-favor-btn',
        launchBtn: '#ddl-comic-launch',
        exitBtn: '#ddl-comic-exit-btn',
        playBtn: '#ddl-comic-play-btn',

        testLink: 'https://www.mangareader.net/one-piece/954',
        testPage: '10',

        list: [],
        comic: {},
        catalogList: [],
        setting: { zoom: 100,space: 25},
        bodyScrollTop: 0,
        queue: { list: [], status: 1, count: 0},
        rules: [
            { regular: /^(http|https):\/\/www\.[a-z0-9]?dmzj[0-9]?\.com\/view\/[a-zA-Z0-9]+\/[0-9]+\.html(#@page=[0-9]+)?/, type: 'dmzj'},
            { regular: /^(http|https):\/\/manhua\.[a-z0-9]?dmzj[0-9]?\.com\/[a-zA-Z0-9]+\/[0-9]+\.shtml(#@page=[0-9]+)?/, type: 'manhua_dmzj'},
            { regular: /^(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.com\/comiclist\/[0-9]+\/[0-9]+\/[0-9]+\.htm$/, type: 'ikkdm'},
            { regular: /^(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.com\/comiclist\/[0-9]+\/[0-9]+\/[0-9]+\.htm[\?a-zA-Z0-9=]+$/, type: 'ikkdm'},
            { regular: /^(http|https):\/\/www\.cartoonmad\.com\/comic\/[0-9]+.html/,'type': 'cartoonmad'},
            { regular: /^(http|https):\/\/comic\.acgn\.cc\/view-[0-9]+.htm/, type: 'acgn'},
        ]
    }

    /**
     * 初始化
     * @method init
     */
    var init = function () {
        var page = onWhiteList();
        if(!page.status) { //是否白名单
            console.log('Comic++ not support this websit');
            return false;
        }

        cookie.get('setting',function (page) {
            var setting = page.setting || {};
            var space = setting.space || 25;
            var zoom = setting.zoom || 100;
            options.setting = { zoom: zoom, space: space};
        });

        setTimeout(function () { run(); },100);
    }

    /**
     * 运行程序
     * @method run
     */
    var run = function () {
        var template = 'comic/index';
        var data = getCurrentPageInfo();
        tpl.renderTpl('body',template,data,3);

        options.list = data.list;
        $(options.currentPage).html(1);
        $(options.totalPage).html(data.total);

        loadComic(0);
        listenScroll();
        console.log('data.url',data.url,data.type);
        //getComicInfo(data.url,data.type);
        initLight();
        bindEvent();

        cookie.get('launch',function (data) {
            if(data.launch != 'off') { launch(); }
        });

        $(options.exitBtn).click(exit);
        $(options.playBtn).click(play);
        $(options.launchBtn).click(launch);
        $(options.catalogSwitch).click(switchCatalog);
        $(options.title+','+options.prevBtn+','+options.nextBtn).click(function () {
            var href = $(this).attr('data-href');
            base.jumpUrl(href);
        });

        $(options.lightBtn).click(function () {
            var status = $(this).attr('data-status');
            setLight(status);
        });

        $(options.favorBtn).click(function () {
            var load = $(this).attr('data-load');
            if(load == 0) {
                tipsBox.alert('数据加载中,请稍候...');
                return false;
            }
        });
    }

    /**
     * 加载漫画
     * @method loadComic
     * @param {String} index 索引号
     */
    var loadComic = function (index) {
        //console.log('loadComic',options.list,index);
        if(options.list[index].status) {
            return false;
        }

        var _this = $(options.item + '-'+index);
        var mode = _this.attr('data-mode');
        var data = {
            url : _this.attr('data-url'),
            type: _this.attr('data-type'),
            index: index
        }

        options.list[index].status = true;
        switch (mode) {
            case 'load':
                loadImage(index,data.url);
                break;
            case 'iframe':
                options.queue.list.push(data);
                console.log('options.queue',options.queue);
                if (options.queue.status == 1 && base.getDataLength(options.queue.list) != 0) {
                    loadQueueImage(options.queue.list.pop());
                }
                break;
            case 'curl':
                loadCurlImage(data);
                break;
        }


    }

    /**
     * 加载请求图片
     * @method loadCurlImage
     * @param {Object} data
     */
    var loadCurlImage = function (data) {
        var index = data.index;
        console.log('xxx loadCurlImage');
        ajRequest.post('comic/getComic',data,function (result) {
            console.log('comic/getComic',result);
            loadImage(index,result.data.src);

            if(result.data.next != '') {
                createNextPreviewBox(index);
            }
        },function (result) {
            options.list[index].status = false;
        });
    }

    /**
     * 加载队列图片
     * @method loadQueueImage
     * @param data
     */
    var loadQueueImage = function (data) {
        options.queue.count++;
        options.queue.status = 0;

        var img = '', iframe = '#ddl-comic-iframe-image';
        var config = {
            'ikkdm': 'img:eq(0)',
        }

        if(options.queue.count > 30) { //注消iframe加载失败，进入死循环
            options.queue.count = 0;
            ddlUnit.destroyIframe(iframe);
        }

        if(base.isEmptyElement(iframe)) { //iframe不存在,加载iframe
            ddlUnit.addIframe(iframe.replace('#',''));
        }

        $(iframe).attr('src',data.url);
        setTimeout(function () {
            img = $(iframe).contents().find(config[data.type]).attr('src');
            console.log('img2',data.index,options.queue.count,img);


        if(!base.isEmptyValue(img)) {
            loadImage(data.index,img);
            ddlUnit.destroyIframe(iframe);

            if(base.getDataLength(options.queue.list) != 0) {
                setTimeout(function () { //防止iframe加载重复数据,设置时间间隔
                    options.queue.count = 0;
                    data = options.queue.list.pop();
                    $(iframe).attr('src',data.url);
                    loadQueueImage(data);
                },100);
            } else {
                options.queue.count = 0;
                options.queue.status = 1;
            }
        } else {
            setTimeout(function () {
                loadQueueImage(data);
            },1000);
        }

        }, 1000)
    }


    /**
     * 获取漫画信息
     * @method getComicInfo
     * @param {String} url 链接
     * @param {String} type 类型
     */
    var getComicInfo = function (url,type) {
        var data = {
            url : getComicHomeLink(url,type),
            type: type,
        }

        if(type == 'e_hentai' || type == 'exhentai') {
            var title = $('#i1 h1').html();
            $('.ddl-comic-title').html(title);
            return false;
        }
        
        console.log(url,type);
        ajRequest.post('comic/getComicInfo',data,function (result) {
            console.log('getComicInfo',result);
            var catalogList = ddlUnit.getCurrentCatalogList(result.data.catalog,url,type);
            console.log('catalogList',catalogList);
            //return false;
            var title = result.data.title;
            var catalog = catalogList.list;
            var template = 'comic/catalog';
            var total = base.getDataLength(catalog);

            if(catalogList.title != '正篇'){
                result.data.title += ' '+ catalogList.title;
            }

            //console.log('catalogList',catalogList,catalogList.title);
            result.data.sort = 'asc';
            result.data.total = total;
            result.data.type = type;
            result.data.catalog = setComicSort(catalog,type,url,total);
            options.comic = result.data;
            //console.log('getComicInfo',options.comic);
            tpl.renderTpl(options.catalog,template,result.data);

            console.log('favor',data);
            cookie.get('favor',function(data) { ddlFavor.setDefault(data); });

            $(options.title).html(title).attr('data-url',data.url).attr('title','返回 '+title+' 目录')
            $(options.title).click(function () { base.jumpUrl($(this).attr('data-url')); });
            $(options.menu).find('li.hide').removeClass('hide');
            $(options.catalogSort).click(setCatalogSort);
            $(options.favorBtn).attr('data-index-link',data.url);
            //console.log(result);

            var home = $(options.favorBtn).attr('data-index-link');
            var link = $(options.favorBtn).attr('data-sublink');
            var title = $(options.favorBtn).attr('data-subtitle');


            console.log('uploadCurrentData',home,title,link,options.comic)
            ddlFavor.uploadCurrentData(home,title,link,options.comic); //更新阅读第几话
        },function () {
            setTimeout(function () {
                getComicInfo(url,type)
            },8000)
        });
    }

    /**
     * 获取漫画总页数
     * @method getTotalPageNubmer
     * @params {String} type 类型
     * @return {Nmber}
     */
    var getTotalPageNubmer = function (type) {
        if(window.location.host === 'm.com') { //本地调式
            return options.testPage;
        }

        var total = 0;
        switch (type) {
            case 'dmzj':
            case 'manhua_dmzj':
                total = $('#page_select').children().length;
                break;
            case 'ikkdm':
                var html = $('body').html();
                var reg = /共[0-9]+页/g;
                var arr = html.match(reg);
                var page = arr[0].match(/[0-9]+/g);
                total = page[0];
                break;

            case 'acgn':
                total = $('#select1').children().length;
                break;
            case 'cartoonmad':
                total = $('select').children().length - 1;
                break;
        }

        console.log('page total',total);
        return total;
    }

    /**
     * 生成漫画列表
     * @method createList
     * @param {String} url 链接
     * @param {Number} total 总页数
     * @param {String} type 类型
     * @return {Array}
     */
    var createList = function (url,total,type) {
        var list = [];
        switch (type) {
            case 'dmzj':
            case 'manhua_dmzj':
                $('#page_select option').each(function () {
                    list.push({ url: $(this).attr('value'), type: type, status: false, mode:'load'});
                });
                break;
            case 'ikkdm':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%/i,i+1), type: type, status: false, mode: 'iframe'});
                }
                break;
            case 'acgn':
                $('#pic_list div.pic').each(function () {
                    list.push({url: $(this).attr('_src'), type: type, status: false, mode: 'load'});
                });
                break;
            case 'cartoonmad':
                url = $('table tr:eq(4) td:eq(0) table tr:eq(0) td:eq(0) img').attr('src');
                url = url.substr(0,url.lastIndexOf('/') + 1);
                for(var i = 0; i < total; i++) {
                    var index = i + 1;
                    list.push({url: url + (Array(3).join(0) + index).slice(-3)+'&rimg=1', type: type, status: false, mode: 'load'});
                }
                break;
        }

        console.log('comic list',list);
        return list;
    }


    /**
     * 初始化灯
     * @method initLight
     */
    var initLight = function () {
        cookie.get('light',function (data) {
            var light = data.light || 'on';
            if(light == 'on') {
                setLight('off');
            } else {
                setLight('on');
            }
        });
    }

    /**
     * 设置灯状态
     * @method setLight
     * @param {String} status
     */
    var setLight = function (status) {
        if(status == 'on') {
            cookie.set('light','off');
            $(options.wrap).find('div.ddl-comic-inner').addClass('ddl-close-light-inner');
            $(options.menu).find('ul.ddl-comic-menu-inner').addClass('ddl-close-light-inner');
            $(options.lightBtn).addClass('icon-off-light').removeClass('icon-on-light');
            $(options.lightBtn).attr('data-status','off');
            return false;
        }

        cookie.set('light','on');
        $(options.wrap).find('div.ddl-comic-inner').removeClass('ddl-close-light-inner');
        $(options.menu).find('ul.ddl-comic-menu-inner').removeClass('ddl-close-light-inner');
        $(options.lightBtn).removeClass('icon-off-light').addClass('icon-on-light');
        $(options.lightBtn).attr('data-status','on');
    }

    /**
     * 退出
     * @method exit
     */
    var exit = function () {
        var height = config.getOptions('height');
        var style = $('body').attr('style');
        style = style.replace('height: '+height+'px;','');
        style = style.replace('overflow: hidden;','');
        style = style.replace('display: none;','');

        $('body').attr('style',base.trim(style));
        $(options.wrap).hide();
        $(options.menu).hide();
        $(options.launchBtn).show();
        $('html,body').animate({'scrollTop':options.bodyScrollTop},0);
        cookie.set('launch','off');
    }

    /**
     * 启动
     * @method launch
     */
    var launch = function () {
        var height = config.getOptions('height');
        options.bodyScrollTop = $(document).scrollTop();
        $('html,body').animate({'scrollTop':0},0);

        $('body').css('height',height);
        $('body').css('overflow','hidden');
        $('body').css('display','none');
        $(options.main).css('height',height - 75);
        $(options.wrap).show();
        $(options.menu).show();
        $(options.launchBtn).hide();
        cookie.set('launch','on');
    }

    /**
     * 是否在白名单内
     * @method onWhiteList
     * @return {boolean}
     */
    var onWhiteList = function () {
        var url = window.location.href;
        var data = { type: '', status: 0 };
        for(var i in options.rules) {
            if((options.rules[i].regular).test(url)) {
                data.status = 1;
                data.type = options.rules[i].type;
                return data;
            }
        }

        return data;
    }

    /**
     * 获取当前页面信息
     * @method getCurrentPageInfo
     */
    var getCurrentPageInfo = function () {
        var url = window.location.href;
        var data = { url: '', type: '', total: '', status: 0 };

        if(window.location.host === 'm.com') { //本地调式
            url = options.testLink;
        }

        for(var i in options.rules) {
            var result = (options.rules[i].regular).test(url);
            if(result) {
                data.url = url;
                data.status = 1;
                data.type = options.rules[i].type;
                data.total = getTotalPageNubmer(options.rules[i].type);
                data.list = createList(url,data.total,data.type);
                data.space = 'margin-bottom: '+options.setting.space+'px;';
                data.comic = ddlCaricature.getPageInfo(data.type);
                break;
            }
        }

        console.log('data.comic',data.comic);
        console.log('getCurrentPageInfo',data,url);
        return data;
    }

    /**
     * 设置目录排序
     * @member setCatalogSort
     */
    var setCatalogSort = function () {
        var id = '.ddl-comic-catalog-main';
        var template = 'comic/catalog_item';
        var sort = $(options.catalogSort).attr('data-sort');
        var type = $(options.catalogSort).attr('data-type');
        var object = {
            catalog: options.catalogList.reverse(),
            total: base.getDataLength(options.catalogList),
            type: type
        }

        if(sort == 'desc') {
            object.sort = 'asc';
            tpl.renderTpl(id,template,object);
            $(options.catalogSort).attr('data-sort',object.sort).html('正序');
            return false;
        }

        object.sort = 'desc';
        tpl.renderTpl(id,template,object);
        $(options.catalogSort).attr('data-sort',object.sort).html('倒序');
    }

    /**
     * 打开目录
     * @method switchCatalog
     */
    var switchCatalog = function () {
        var load = $(options.catalogSwitch).attr('data-load');
        if(load == 0) {
            tipsBox.alert('目录正在加载中,请稍候.2..');
            return false;
        }
        var status = $(options.catalogSwitch).attr('data-status');

        if(status == 1) {
            $(options.catalogSwitch).parent().removeClass('active');
            $(options.catalogSwitch).parent().find('i.ddl-comic-right-icon').hide();
            $(options.catalogSwitch).parent().find('div.ddl-comic-catalog').hide();
            $(options.catalogSwitch).attr('data-status',0);
            return false;
        }

        $(options.catalogSwitch).parent().addClass('active');
        $(options.catalogSwitch).parent().find('i.ddl-comic-right-icon').show();
        $(options.catalogSwitch).parent().find('div.ddl-comic-catalog').show();
        $(options.catalogSwitch).attr('data-status',1);

        var height =  $(options.catalog).find('h3').height();
        $('.ddl-comic-catalog-main').css('height',509 - height);
        $('.ddl-comic-catalog-main span').click(function () {
            var href = $(this).attr('data-href');
            base.jumpUrl(href);
        });

        var top = $('.ddl-comic-catalog-main span.active').position().top - 250;
        $('.ddl-comic-catalog-main').animate({'scrollTop':top},0);
    }

    /**
     * 加载图片
     * @method loadImage
     * @param {Number} index 索引
     * @param {String} src 图片地址
     */
    var loadImage = function (index,src) {
        var _this  = $(options.item + '-'+index);
        var img = new Image();
        img.src = src;
        img.onload = function() {
            options.list[index].width = img.width;
            options.list[index].height = img.height;
            $(options.item + '-' + index).css('width', img.width * options.setting.zoom / 100);
            $(options.item + '-' + index).css('height', img.height * options.setting.zoom / 100);
            var html = '<div class="ddl-comic-image-main"><img src="' + src + '" draggable="false"/></div>';
            _this.html(html);
        }

        img.onerror = function () {
            options.list[index].status = false;
            console.log('图片加载失败',index);
        }
    }

    /**
     * 生成下一个预览框
     * @method createNextPreviewBox
     * @param {Number} index 上一个索引号
     */
    var createNextPreviewBox = function (index) {
        var template = 'comic/item';
        var space = 'margin-bottom:'+options.setting.space+'px';
        console.log('options.list',options.list);
        var url = ddlUnit.getPageLinkFormat(options.list[index].url,options.list[index].type);
        var item = { index: parseInt(index)+1, url: url.replace(/%/i,parseInt(index)+1), type: options.list[index].type, status: false, mode:'iframe',space:space};

        options.list.push(item);
        tpl.renderTpl('.ddl-comic-bottom',template,item,4);
        $(options.totalPage).html(base.getDataLength(options.list));
    }

    /**
     * 监听滚动条事件
     * @method listenScroll
     */
    var listenScroll = function () {
        var beforeScrollTop = $(options.main).scrollTop();

        $(options.main).scroll(function() {
            var total = parseInt($(options.totalPage).html()) - 1;
            var scrollTop = $(this).scrollTop();
            var direct = scrollTop - beforeScrollTop;
            if(direct > 0 && scrollTop >= 52) {
                $('.ddl-comic-top').css('background','transparent');
                $('.ddl-comic-top').css('box-shadow','inherit');
                $('.ddl-comic-top').css('z-index','2');
                $('.ddl-comic-top div.ddl-comic-title').hide();
                $('#ddl-comic-exit-btn').hide();
            }

            if(direct < 0 && scrollTop > 52) {
                $('.ddl-comic-top').removeAttr('style');
                $('.ddl-comic-top div.ddl-comic-title').show();
                $('#ddl-comic-exit-btn').show();
            }

            beforeScrollTop = scrollTop;

            // for(var i in options.list) {
            //     if(options.list[i].status == false) {
            //         var id = options.item + '-' + i;
            //         var top = $(id).offset().top;
            //         if(scrollTop > top + 100){
            //             loadComic(i);
            //             console.log('i',i);
            //         }
            //     }
            // }

            for(var i in options.list) {
                var next = (parseInt(i)+1) > total ? total : (parseInt(i)+1);
                var topId = document.getElementById('ddl-comic-item-'+i);
                var bottomId = document.getElementById('ddl-comic-item-'+next);
                var topPosition = ddlUnit.getElementPagePosition(topId);
                var bottomPostion = ddlUnit.getElementPagePosition(bottomId);
                var top = topPosition.y;
                var bottom = bottomPostion.y;
                var offset = parseInt( $(window).height() * 1 / 2);

                if(options.list[i].status == false) {
                    if(scrollTop + $(window).height() > top - ($(window).height() / 4) * 3){
                        loadComic(i);
                        console.log('i',i);
                    }
                }

                if(scrollTop >= top && scrollTop < bottom - offset && i != total ){
                    $(options.currentPage).html(parseInt(i)+1);
                    break;
                }

                if(scrollTop >= bottom - offset && i == total ){
                    $(options.currentPage).html(parseInt(i)+1);
                    break;
                }
            }
        });
    }

    /**
     * 打赏
     * @method play
     */
    var play = function () {
        var object = {template: 'comic/play'};
        tipsBox.floating(object);
        $('#ddl-play-close-btn').click(function () {
            tipsBox.hideFloating();
        })
    }

    /**
     * 设置
     * @method settings
     * @param {String} key 键名
     * @param {String} value 键值
     */
    var settings = function (key,value) {
        options.setting[key] = value;
        switch (key) {
            case 'zoom':
                for(var i in options.list) {
                    $(options.item + '-' + i).css('width', options.list[i].width * options.setting.zoom / 100);
                    $(options.item + '-' + i).css('height', options.list[i].height * options.setting.zoom / 100);
                }
                break;
            case 'space':
                $('.ddl-comic-image-box').css('margin-bottom',value+'px');
                break;
        }
    }


    /**
     * 绑定事件
     * @method bindEvent
     */
    var bindEvent = function () {
        $(options.wrap).click(function (event) {
            event.stopPropagation();
            $(options.catalogSwitch).parent().removeClass('active');
            $(options.catalogSwitch).parent().find('i.ddl-comic-right-icon').hide();
            $(options.catalogSwitch).parent().find('div.ddl-comic-catalog').hide();
            $(options.catalogSwitch).attr('data-status',0);
        });
        $(options.catalog).click(function (event) {
            event.stopPropagation();
        })
    }

    /**
     * 获取hentai 图片
     * @method getHentaiImg
     * @param {Number} index 索引
     * @param {Number} total 总页数
     * @param {String} url 链接
     */
    var getHentaiImg = function (index,total, url) {
        //console.log('getHentaiImg',index,total, url);
        if(index >= total) {
            return false;
        }

        $(options.iframe).attr('src',url);
        getHentaiIframe(index,total);
    }

    /**
     * 获取hentai iframe
     * @method getHentaiIframe
     * @param {Number} index 索引
     * @param {Number} total 总页数
     */
    var getHentaiIframe = function (index,total) {
        //console.log('getHentaiIframe',index,total);
        setTimeout(function () {
            var img = $(options.iframe).contents().find("#img").attr('src');
            var next = $(options.iframe).contents().find("#next").attr('href');
            if(!base.isEmptyValue(img) && !base.isEmptyValue(next)) {
                $('#ddl-comic-item-'+index).attr('data-url',img).attr('data-mode','load');
                options.list[index].url = img;
                options.list[index].mode = 'load';
                //console.log('getHentaiIframe',img,next);
                loadImage(index,img);
                ddlUnit.destroyIframe(options.iframe);
                getHentaiImg(index + 1,total,next);
            } else {
                getHentaiIframe(index,total)
            }
        },1000);
    }

    return {
        init: init,
        settings: settings
    }
})();