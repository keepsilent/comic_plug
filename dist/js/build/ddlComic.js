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
        webImgaes: {
            'sfacg': { key: 'picAy', url: '', separator: ',', offset: 0},
            'pufei': { key: 'photosr', url: 'http://res.img.220012.net/', separator: ',', offset: 1},
            'imanhuaw': { key: 'qTcms_S_m_murl', url: '', separator: '$qingtiandy$', offset: 0},
            'hhxxee': { key: 'arrFiles', url: 'http://99.94201314.net/dm08/', separator: ',', offset: 0},
            '52wuxing': { key: 'qTcms_S_m_murl', url: 'http://www.52wuxing.net', separator: '$qingtiandy$', offset: 0},
            'gufengmh': { key: 'chapterImages', url: 'https://res.gufengmh.com/', separator: ',', offset: 0},
            'u17': { key: 'image_config.image_list[1].src', url: '', separator: ',', offset: 0},
            'manhuagui': { key: 'SMH.utils.goPage(1)', url: '', separator: ',', offset: 0},
            '77mh': { key: 'arr', url: '', separator: ',', offset: 0},
            'manhuadb': { key: '$.base64.decode(img_data)', url: '', separator: ',', offset: 0},
            'manhuacat': { key: 'img_data_arr', url: '', separator: ',', offset: 0},
            //'manhuaniu': { key: 'SinTheme.jumpPage(1)', url: '', separator: ',', offset: 0}
        },
        rules: [
            { regular: /^(http|https):\/\/www\.dmzj[0-9]?\.com\/view\/[a-zA-Z0-9]+\/[0-9]+\.html(#@page=[0-9]+)?/, type: 'dmzj'},
            { regular: /^(http|https):\/\/manhua\.[a-z0-9]?dmzj[0-9]?\.com\/[a-zA-Z0-9]+\/[0-9]+\.shtml(#@page=[0-9]+)?/, type: 'manhua_dmzj'},

            { regular: /^(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.com\/comiclist\/[0-9]+\/[0-9]+\/[0-9]+\.htm$/, type: 'ikkdm'},
            { regular: /^(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.com\/comiclist\/[0-9]+\/[0-9]+\/[0-9]+\.htm[\?a-zA-Z0-9=]+$/, type: 'ikkdm'},

            { regular: /^(http|https):\/\/manhua\.fffdm\.com\/[0-9]+\/[\_a-zA-Z0-9\.]+\/(index_[0-9]+.html+)?/, type: 'fzdm'},
            { regular: /^(http|https):\/\/99\.hhxxee\.com\/comics\/[a-zA-Z0-9]+(\/?p=[0-9]+s=[0-9]+)?/, type: 'hhxxee'},
            { regular: /^(http|https):\/\/manhua\.sfacg\.com\/mh\/[A-Za-z]+\/[0-9]+\/(#p=[0-9]+)?/, type: 'sfacg'},
            { regular: /^(http|https):\/\/www\.u17\.com\/chapter\/[0-9]+.html/, type: 'u17'},

            { regular: /^(http|https):\/\/www\.hhimm\.com\/cool[0-9]+\/[0-9]+.html?(.)+/, type: 'hhimm'},
            { regular: /^(http|https):\/\/www\.huhudm\.com\/(hu11|hu)[0-9]+\/[0-9]+.html?(.)+/, type: 'huhudm'},

            { regular: /^(http|https):\/\/www\.cartoonmad\.cc\/comic\/[0-9]+.html/,'type': 'cartoonmad'},
            { regular: /^(http|https):\/\/www\.manhuagui\.com\/comic\/[a-zA-Z0-9]+\/[0-9]+.html(#p=[0-9]+)?/, type: 'manhuagui'},
            { regular: /^(http|https):\/\/comic\.acgn\.cc\/view-[0-9]+.htm/, type: 'acgn'},
            { regular: /^(http|https):\/\/www\.77mh\.xyz\/[0-9]+\/[0-9]+\.html(#@page=[0-9]+)?/, type: '77mh'},
            { regular: /^(http|https):\/\/www\.2nunu\.com\/look-[\%a-zA-Z0-9]+-[0-9]+-[0-9]+-[0-9]+\.html/, type: '2nunu'},
            { regular: /^(http|https):\/\/www\.manhuadb\.com\/manhua\/[0-9]+\/[0-9]+_[0-9]+(_p[0-9]+)?\.html/, type: 'manhuadb'},
            { regular: /^(http|https):\/\/www\.maofly\.com\/manga\/[0-9]+\/[0-9]+(_[0-9]+)?\.html/, type: 'manhuacat'},

            // { regular: /^(http|https):\/\/e-hentai\.org\/s\/[a-zA-Z\-0-9]+\/[0-9]+\-[0-9]/, type: 'e_hentai'},
            // { regular: /^(http|https):\/\/exhentai\.org\/s\/[a-zA-Z\-0-9]+\/[0-9]+\-[0-9]/, type: 'exhentai'}

            //{ regular: /^(http|https):\/\/www\.manhuaniu\.com\/manhua\/[a-zA-Z0-9]+\/[0-9]+.html(\?p=[0-9]+)?/, type: 'manhuaniu'},
            //{ regular: /^(http|https):\/\/www\.imanhuaw\.com\/imanhua\/[a-zA-Z0-9]+\/[0-9]+.html(\?p=[0-9]+)?/, type: 'imanhuaw'},
            //{ regular: /^(http|https):\/\/www\.52wuxing\.net\/[a-zA-Z0-9]+\/[0-9]+\/[0-9]+.html(\?p=[0-9]+)?/, type: '52wuxing'},
            //{ regular: /^(http|https):\/\/www\.fmhuaaa\.net\/manhua\/[0-9]+\/[0-9]+.html/, type: 'fmhuaaa'},

            // { regular: /^(http|https):\/\/www\.mangapanda\.com\/[a-zA-Z\-0-9]+\/[0-9]+(\/[0-9]+)?/, type: 'mangapanda'},
            // { regular: /^(http|https):\/\/www\.mangareader\.net\/[a-zA-Z\-0-9]+\/[0-9]+(\/[0-9]+)?/, type: 'mangareader'},
            // { regular: /^(http|https):\/\/mangahere\.us\/[a-zA-Z\-0-9]+(#[0-9]+)?/, type: 'mangahere'},
        ]
    }

    /**
     * 初始化
     * @method init
     */
    var init = function () {

       var data = onWhiteList();
       //console.log('data',data);
        if(!data.status) { //是否白名单
            console.log('not is white');
            return false;
        }

        console.log('not is white');

        cookie.get('setting',function (data) {
            var setting = data.setting || {};
            var space = setting.space || 25;
            var zoom = setting.zoom || 100;
            options.setting = { zoom: zoom, space: space};
        });

        switch (data.type) {
            case 'sfacg':
            case 'hhxxee':
            case 'gufengmh':
            case 'pufei':
            case 'imanhuaw':
            case '52wuxing':
            case 'u17':
            case 'manhuagui':
            case '77mh':
            case 'manhuadb':
            case 'manhuacat':
                timingRun(data.type,10);
                break;
            default:
                setTimeout(function () { run(); },10);
                break;
        }
    }

    /**
     * 定时运行
     * @method timingRun
     * @param {String} type 类型
     * @param {Number} time 时间
     */
    var timingRun = function (type,time) {
        setTimeout(function () {
            var str ="javascript:document.body.setAttribute('data-images', "+options.webImgaes[type].key+");";
            switch (type) {
                case 'gufengmh':
                    str += "document.body.setAttribute('data-path', chapterPath);";
                    break;
                case 'hhxxee':
                    str += "document.body.setAttribute('data-path', sDS);";
                    break;
                case 'u17':
                    str += ddlUnit.setU17BodyPath();
                    break;
                case '77mh':
                    str += "document.body.setAttribute('data-path', img_qianz);";
                    break;
                case 'manhuadb':
                    str += "document.body.setAttribute('data-path', img_host);";
                    str += "document.body.setAttribute('data-path-part', img_pre);";
                    break;
                case 'manhuacat':
                    str += "document.body.setAttribute('data-path', asset_domain);";
                    str += "document.body.setAttribute('data-path-part', img_pre);";
                    break;
            }
            //console.log('timingRun',str);
            window.location.href = "javascript:" + str;
            if(base.isEmptyValue(document.body.getAttribute('data-images'))) { //防止数据加载失败
                timingRun(type,time);
                return false;
            }
            //console.log('base.isEmptyValue(document.body.getAttribute(\'data-images\')',document.body.getAttribute('data-images'));

            setTimeout(function() { run(); }, time);
        },time);
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

        // if(options.list[index].type  == 'manhuagui') {
        //     ddlUnit.getManhuaguiImageSrc(parseInt(index)+1);
        //     loadImage(index,$('#mangaFile').attr('src'));
        //     return false;
        // }
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
                if(options.list[index].type == 'fzdm') {
                    //console.log('loadComic','fzdm',index+1);
                    loadComic(index+1)
                }
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
            'manhuaniu': '#images img',
            'ikkdm': 'img:eq(0)',
            'hhimm': '#img2391',
            'huhudm': '#img2391',
            'fzdm': '#mhimg0 img',
            '2nunu': '#cpimg'
        }

        if(options.queue.count > 30) { //注消iframe加载失败，进入死循环
            options.queue.count = 0;
            ddlUnit.destroyIframe(iframe);
        }

        if(base.isEmptyElement(iframe)) { //iframe不存在,加载iframe
            ddlUnit.addIframe(iframe.replace('#',''));
        }

        $(iframe).attr('src',data.url);
        img = $(iframe).contents().find(config[data.type]).attr('src');
        console.log('img',data.index,options.queue.count,img);
        if(!base.isEmptyValue(img)) {
            loadImage(data.index,img);

            switch (data.type) {
                case 'fzdm':
                    var pageTotal = 0, total = base.getDataLength(options.list);
                    if( $(iframe).contents().find('.navigation a:last-child').hasClass('pure-button-primary')) {
                        pageTotal = $(iframe).contents().find('.navigation a:last-child').prev().attr('href').replace(/(index_|\.html)/ig,'');
                    } else {
                        pageTotal = $(iframe).contents().find('.navigation a:last-child').attr('href').replace(/(index_|\.html)/ig,'');
                    }

                    if(pageTotal > total) {
                        for(var i = total - 1; i < pageTotal; i++) {
                            createNextPreviewBox(i);
                        }
                    }

                    break;
            }

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
        var total = 0;
        if(window.location.host === 'm.com') { //本地调式
            return options.testPage;
        }
        switch (type) {
            case 'ikkdm':
                var html = $('body').html();
                var reg = /共[0-9]+页/g;
                var arr = html.match(reg);
                var page = arr[0].match(/[0-9]+/g);
                total = page[0];
                break;
            case 'dmzj':
            case 'manhua_dmzj':
                total = $('#page_select').children().length;
                break;
            case 'sfacg':
                total = $('#pageSel option:last-child').val();
                break;
            case 'hhimm':
            case 'huhudm':
                total = $('#hdPageCount').val();
                break;
            case 'pufei':
                total = $('#selectpage1').find('select option:last-child').val();
                break;
            case 'hhxxee':
                total = $('#spPageCount').html();
                break;
            case 'fzdm':
                total = $('.navigation a:last-child').attr('href').replace(/(index_|\.html)/ig,'');
                break;
            case 'imanhuaw':
            case '52wuxing':
                total = $('#k_pageSelect option:last-child').val();
                break;
            case 'manhuagui':
                total = $('#pageSelect option:last-child').val();
                break;
            case 'manhuaniu':
                total = base.removeHTMLTag($('#page').parent().html());
                total = total.replace(/\(|\)/ig,'');
                break;
            case 'gufengmh':
                var html = $('#page').parent().html();
                html = html.replace(/\(<span id="page" class="curPage">[0-9]+<\/span>/g,'');
                total = html.replace(')','');
                break;
            case 'fmhuaaa':
                total = $('select option:last-child').html();
                break;
            case 'u17':
               total = ddlUnit.getU17PageTotal();
               break;
            case 'acgn':
                total = $('#select1').children().length;
                break;
            case 'mangapanda':
            case 'mangareader':
                total = $('#pageMenu option:last-child').html();
                break;
            case 'mangahere':
                total = $('#page_select').children().length;
                break;
            case 'e_hentai':
            case 'exhentai':
                total = $('.sn').find('div span:last-child').html();
                break;
            case 'cartoonmad':
                total = $('select').children().length - 1;
                break;
            case '77mh':
                total = $('.selectTT').children().length;
                break;
            case '2nunu':
                total = $('.page a:last-child').html();
                break;
            case 'manhuadb':
                total = $('#page-selector').children().length;
                break;
            case 'manhuacat':
                var images = document.body.getAttribute('data-images');
                images = images.split(options.webImgaes[type].separator);
                total = base.getDataLength(images);
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
            case 'mangahere':
                $('#page_select option').each(function () {
                    list.push({ url: $(this).attr('value'), type: type, status: false, mode:'load'});
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
            case 'sfacg':
            case 'pufei':
            case 'imanhuaw':
            case 'hhxxee':
            case '52wuxing':
            case 'gufengmh':
            case 'u17':
            case '77mh':
            case 'manhuacat':
                var images = document.body.getAttribute('data-images');
                images = images.split(options.webImgaes[type].separator);

                if(type == 'hhxxee') {
                    options.webImgaes[type].url = ddlUnit.getPhxxeeImagePath(images[0]);
                }
                if(type == 'gufengmh') {
                    options.webImgaes[type].url = ddlUnit.getGufengmhImagePath(images[0],options.webImgaes[type].url);
                }

                if(type == '77mh') {
                    options.webImgaes[type].url = document.body.getAttribute('data-path');
                }

                if(type == 'manhuacat')  {
                    options.webImgaes[type].url = document.body.getAttribute('data-path') + document.body.getAttribute('data-path-part');
                }

                if(type == 'u17') {
                    images = ddlUnit.setU17Images();
                }

                for(var i = 0; i < total; i++) {
                    var index = parseInt(i) + parseInt(options.webImgaes[type].offset);
                    var url = options.webImgaes[type].url + images[index];
                    list[i] = { url: url, type: type, status: false, mode:'load'};
                }
                break;
            case 'manhuadb':
                var images = JSON.parse(document.body.getAttribute('data-images'));
                options.webImgaes[type].url = document.body.getAttribute('data-path') + document.body.getAttribute('data-path-part');
                for(var i = 0; i < total; i++) {
                    var index = parseInt(i) + parseInt(options.webImgaes[type].offset);
                    var url = options.webImgaes[type].url + images[index].img;
                    list[i] = { url: url, type: type, status: false, mode:'load'};
                }
                break;
            case 'mangapanda':
            case 'mangareader':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%/i,i+1), type: type, status: false, mode: 'curl'});
                }
                break;
            case 'fmhuaaa':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%/i,$('select option').eq(i).val()), type: type, status: false, mode: 'curl'});
                }
                break;
            case 'manhuagui':
                var url = ddlUnit.getManhuaguiImageSrc(1);

                for(var i = 0; i < total; i++) {
                    list.push({url: url, type: type, status: false, mode: 'load'});
                }

                ddlUnit.planGetManhuaguiImageSrc(1, total);
                break;
            case 'acgn':
                $('#pic_list div.pic').each(function () {
                    list.push({url: $(this).attr('_src'), type: type, status: false, mode: 'load'});
                });
                break;

            case 'fzdm':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%/i, i), type: type, status: false, mode: 'iframe'});
                }
                break;
            case 'ikkdm':
            case 'hhimm':
            case 'huhudm':
            case 'manhuaniu':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%/i,i+1), type: type, status: false, mode: 'iframe'});
                }
                break;
            case '2nunu':
                url = ddlUnit.getPageLinkFormat(url,type);
                for(var i = 0; i < total; i++) {
                    list.push({url: url.replace(/%\.html/i,i+1)+'.html', type: type, status: false, mode: 'iframe'});
                }
                break;
            case 'e_hentai':
            case 'exhentai':
                for(var i = 0; i < total; i++) {
                    list[i] = { url: url.replace(/%/i,i+1), type: type, status: false, mode:'iframe'};
                }

                var url = $('.sn > a').attr('href');
                ddlUnit.addIframe();
                getHentaiImg(0,total,url);
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