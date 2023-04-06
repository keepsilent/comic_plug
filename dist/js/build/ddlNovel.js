/**
 * 小说
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlNovel = (function () {

    var options = {
        type: '',
        main: {
            wrap: '#ddl-novel-wrap',
            inner: '#ddl-novel-inner',
            title: '#ddl-novel-title',
            infoBox: '#ddl-novel-info',
            author: '#ddl-novel-author',
            fontNum: '#dd-novel-font-num',
            time: '#ddl-novel-time',
            content: '#ddl-novel-content',
            launchBtn: '#ddl-comic-launch',
        },
        leftMenu: {
            catalogBox: '#ddl-novel-wrap .ddl-novel-catalog',
            settingBox: '#ddl-novel-wrap .ddl-novel-setting',
            catalogBtn: '#ddl-novel-left-menu .ddl-novel-catalog-btn',
            settingBtn: '#ddl-novel-left-menu .ddl-novel-setting-btn',
            bookBtn: '#ddl-novel-left-menu .ddl-novel-book-btn',
            favorBtn:'#ddl-novel-left-menu .ddl-novel-favoer-btn',
            prevBtn: '#ddl-novel-left-menu .ddl-novel-prev-btn',
            nextBtn: '#ddl-novel-left-menu .ddl-novel-next-btn'
        },
        rightMenu: {
            right: '#ddl-novel-right-menu',
            playBtn: '#ddl-novel-right-menu .ddl-novel-play-btn',
            appraiseBtn: '#ddl-novel-right-menu .ddl-novel-appraise-btn',
            backBtn: '#ddl-novel-right-menu .ddl-novel-back-btn'
        },
        footerMenu: {
            footer: '#ddl-novel-footer-menu',
            prevBtn: '#ddl-novel-footer-menu .ddl-novel-prev-btn',
            catalogBtn: '#ddl-novel-footer-menu .ddl-novel-catalog-btn',
            nextBtn: '#ddl-novel-footer-menu .ddl-novel-next-btn'
        },

        list: [],
        comic: {},
        catalogList: [],
        setting: { langue: 'chinese',fontFamily:1,fontSize: 18,pageWidth: 1},
        page: [640,800,900,1024,1280],
        bodyScrollTop: 0,
        rules: [
            { regular: /^http:\/\/m.com\/comic\/$/, type: 'moe'},
            { regular: /^(http|https):\/\/www\.173kt\.net\/book\/[0-9_]+\/[0-9]+\.html/, type: '173kt'},
            { regular: /^(http|https):\/\/www\.dushuge\.org\/html\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: 'dushuge'},
            { regular: /^(http|https):\/\/www\.biqugewu\.net\/[0-9_]+\/[0-9]+\.html/, type: 'biqugewu'},
            { regular: /^(http|https):\/\/www\.biquge001\.com\/Book\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: 'biquge001'},
            { regular: /^(http|https):\/\/book\.sfacg\.com\/Novel\/[0-9_]+\/[0-9]+\/[0-9]+/, type: 'book_sfacg'},
        ]
    }




    /**
     * 初始化
     * @method init
     */
    var init = function () {
        var data = onWhiteList();
        //console.log('是否白名单',data);
        if(!data.status) { //是否白名单
            return false;
        }

        setNovelSetting();
        setTimeout(function () { run(); },10);
    }

    /**
     * 设置小说缓存设置
     * @method setNovelSetting
     */
    var setNovelSetting = function () {
        cookie.get('novel',function (data) {
            var setting = data.novel || {};
            var langue = setting.langue || 'chinese';
            var fontFamily = setting.fontFamily || 1;
            var fontSize = setting.fontSize || 18;
            var pageWidth = setting.pageWidth || 1;
            options.setting = { langue: langue, fontFamily: fontFamily, fontSize: fontSize, pageWidth: pageWidth};
            renderPageStyle(options.setting);
        });
    }


    /**
     * 运行程序
     * @method run
     */
    var run = function () {
        var template = 'novel/index';
        var data = getCurrentPageInfo();
        //console.log('data',data);
        tpl.renderTpl('body',template,data,3);

        //data.book.content = (data.book.content).replace(/<br>/i, "");
        $(options.main.content).html(base.removeScript(data.book.content));
        $(options.main.content).find('a').attr('style','');

        // options.list = data.list;
        // $(options.currentPage).html(1);
        // $(options.totalPage).html(data.total);

        // loadComic(0);
        listenScroll();
        // getComicInfo(data.url,data.type);
        // initLight();
        // bindEvent();
        cookie.get('launch',function (data) {
            if(data.launch != 'off') { launch(); }
        });

        // $(options.exitBtn).click(exit);


        setNovelSetting();
        $(options.main.launchBtn).click(launch);
        $(options.rightMenu.playBtn).click(play);
        $(options.rightMenu.appraiseBtn).click(jumpAppraise);
        $(options.rightMenu.backBtn).click(backTop);

        nonsupport();
        controlContentStyle();
        $('.ddl-setting-btn').click(function (event) {
            setNovelConfig($(this));
        });
    }

    /**
     * 不支持,禁用功能
     * @method nonsupport
     */
    var nonsupport = function () {
        var key = options.type;
        switch (key) {
            case 'ddxs':
                $(options.leftMenu.catalogBtn).remove();
                $(options.leftMenu.favorBtn).remove();
                break;
        }
    }

    /**
     * 控制内容样式
     * @method controlContentStyle
     */
    var controlContentStyle = function () {
        var key = options.type;
        switch (key) {
            case 'book_sfacg':
                $(options.main.content).find('p').css({'text-indent': '2rem','padding-bottom': '30px'});
                break;
        }
    }

    /**
     * 渲染页面样式
     * @method renderPageStyle
     * @param {Object} setting 设置
     */
    var renderPageStyle = function (setting) {
        for(var i = 1; i <= 3; i++) {
            $(options.main.content).removeClass('ddl-fontFamily'+i);
        }
        for(var i in options.page) {
            $(options.main.wrap).removeClass('ddl-page'+options.page[i]);
        }

        ddlEscape.setLangue(setting.langue);
        $(options.main.content).css('font-size',setting.fontSize);
        $(options.main.content).addClass('ddl-fontFamily'+setting.fontFamily);
        $(options.main.wrap).addClass('ddl-page'+options.page[setting.pageWidth]);
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
        var data = {
            url: '',
            type: '',
            book: { title: '', chapter: '', catalog: '', prev:'', next: '', author: '',num: '', update: '' },
            status: 0
        };

        if(window.location.host === 'm.com') { //本地调式
            url = options.testLink;
        }

        for(var i in options.rules) {
            var result = (options.rules[i].regular).test(url);
            if(result) {
                data.url = url;
                data.status = 1;
                data.type = options.rules[i].type;
                data.book = ddlBook.getPageInfo(data.type);
                break;
            }
        }

        //console.log('getCurrentPageInfo',data,url,options.rules);
        return data;
    }



    /**
     * 启动
     * @method launch
     */
    var launch = function () {
        if($(options.main.wrap).css('display') == 'none') {
            var height = config.getOptions('height');
            options.bodyScrollTop = $(document).scrollTop();
            $('html,body').animate({'scrollTop': 0}, 0);

            $('body').css('height', height);
            $('body').css('overflow', 'hidden');
            $('body').css('display', 'none');
            $(options.main.wrap).show();
            $(options.main.launchBtn).show();
            cookie.set('launch', 'on');
            return false;
        }

        var height = config.getOptions('height');
        var style = $('body').attr('style');
        style = style.replace('height: '+height+'px;','');
        style = style.replace('overflow: hidden;','');
        style = style.replace('display: none;','');

        $('body').attr('style',base.trim(style));
        $(options.main.wrap).hide();
        $(options.main.launchBtn).show();
        $('html,body').animate({'scrollTop':options.bodyScrollTop},0);
        cookie.set('launch','off');
    }

    /**
     * 设置小说配置
     * @method setNovelConfig
     */
    var setNovelConfig = function (_this) {
        var type = _this.attr('data-type');
        var value = _this.attr('data-value');
        switch (type) {
            case 'langue':
                _this.parent().find('span').removeClass('active');
                _this.addClass('active');
                ddlEscape.setLangue(value);
                options.setting.langue = value;
                break;
            case 'font-family':
                _this.parent().find('span').removeClass('active');
                _this.addClass('active');

                options.setting.fontFamily = value;
                for(var i = 1; i <= 3; i++) {
                    $(options.main.content).removeClass('ddl-fontFamily'+i);
                }
                $(options.main.content).addClass('ddl-fontFamily'+value);
                break;
            case 'font-size':
                if(value == 'minus' && options.setting.fontSize > 12) {
                    options.setting.fontSize -= 2;
                }

                if(value == 'plus' && options.setting.fontSize < 48) {
                    options.setting.fontSize += 2;
                }

                $(options.main.content).css('font-size',options.setting.fontSize+'px');
                $('.ddl-font-size-text').html(options.setting.fontSize);
                break;
            case 'page-width':
                if(value == 'minus' && options.setting.pageWidth > 0) {
                    options.setting.pageWidth -= 1;
                }

                if(value == 'plus' && options.setting.pageWidth < 4) {
                    options.setting.pageWidth += 1;
                }
                for(var i in options.page) {
                    $(options.main.wrap).removeClass('ddl-page'+options.page[i]);
                }

                $(options.main.wrap).addClass('ddl-page'+options.page[options.setting.pageWidth]);
                $('.ddl-page-width-text').html(options.page[options.setting.pageWidth]);
                break;
            case 'catalog-box':
                if(value == 0) {
                    $(options.leftMenu.catalogBtn).removeClass('active').attr('data-value',1);
                    $(options.leftMenu.catalogBox).hide();
                }

                if(value == 1) {
                    $(options.leftMenu.settingBtn).removeClass('active').attr('data-value',1);
                    $(options.leftMenu.settingBox).hide();

                    $(options.leftMenu.catalogBtn).addClass('active').attr('data-value',0);
                    $(options.leftMenu.catalogBox).show();
                    setNovelSetting();
                    setfristOpenCatalogPositon();
                }
                break;
            case 'setting-box':
                if(value == 0) {
                    $(options.leftMenu.settingBtn).removeClass('active').attr('data-value',1);
                    $(options.leftMenu.settingBox).hide();
                    setNovelSetting();
                }

                if(value == 1) {
                    $(options.leftMenu.catalogBtn).removeClass('active').attr('data-value',1);
                    $(options.leftMenu.catalogBox).hide();

                    $(options.leftMenu.settingBtn).addClass('active').attr('data-value',0);
                    $(options.leftMenu.settingBox).show();


                    var fontFamily = options.setting.fontFamily - 1;
                    var langue = options.setting.langue == 'chinese' ? 0 : 1;
                    $('.ddl-novel-setting-main li:eq(0)').find('span').removeClass('active');
                    $('.ddl-novel-setting-main li:eq(1)').find('span').removeClass('active');

                    $('.ddl-novel-setting-main li:eq(0)').find('span:eq('+langue+')').addClass('active');
                    $('.ddl-novel-setting-main li:eq(1)').find('span:eq('+fontFamily+')').addClass('active');
                    $('.ddl-font-size-text').html(options.setting.fontSize);
                    $('.ddl-page-width-text').html(options.page[options.setting.pageWidth]);
                }
                break;
            case 'save':

                renderPageStyle(options.setting);
                cookie.set('novel',options.setting);
                $(options.leftMenu.settingBtn).removeClass('active').attr('data-value',1);
                $(options.leftMenu.settingBox).hide();
                break;
        }
    }

    /**
     * 设置首次打开目录定位
     * @method setfristOpenCatalogPositon
     */
    var setfristOpenCatalogPositon = function () {
        var _this = $('.ddl-novel-catalog li a.active');
        if(base.isEmptyValue(_this.offset())) {
            return false;
        }

        var top = _this.offset().top;
        if(top > 656 && _this.attr('data-load') == 0) {
            $('.ddl-novel-catalog-main').animate({scrollTop:top - 215},0);
            _this.attr('data-load',1);
        }
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
     * 跳转好评
     * @method jumpAppraise
     */
    var jumpAppraise = function () {
        base.jumpUrl('https://chrome.google.com/webstore/detail/comic%20%20/mhekhlkmjaleehfnfjfpejhegjieaaef/reviews?utm_source=infinity-rate','_blank')
    }

    /**
     * 返回顶部
     * @method backTop
     */
    var backTop = function () {
        $(options.rightMenu.right).css('bottom','0');
        $(options.main.wrap).animate({scrollTop:0},0);
    }

    /**
     * 监听滚动条事件
     * @method listenScroll
     */
    var listenScroll = function () {
        var beforeScrollTop = $(options.main.wrap).scrollTop();

        $(options.main.wrap).scroll(function() {
            var scrollTop = $(this).scrollTop();
            var direct = scrollTop - beforeScrollTop;
            var bottomId = document.getElementById('ddl-novel-footer-menu');
            var bottomPostion = ddlUnit.getElementPagePosition(bottomId);
            var bottom = bottomPostion.y;

            if(direct > 0 && scrollTop >= 52) {
                $(options.rightMenu.backBtn).show();
                if( scrollTop + config.getOptions('height') >= bottom) {
                    $(options.rightMenu.right).css('bottom','112px');
                    $(options.leftMenu.favorBtn).css('border-width',0);
                    $(options.leftMenu.prevBtn).hide();
                    $(options.leftMenu.nextBtn).hide();
                    nonsupport();
                } else {
                    $(options.rightMenu.right).css('bottom','0');
                    $(options.leftMenu.favorBtn).removeAttr('style');
                    $(options.leftMenu.prevBtn).show();
                    $(options.leftMenu.nextBtn).show();
                    nonsupport();
                }
            } else {
                $(options.rightMenu.backBtn).hide();
            }

        });
    }

    /**
     * 获取参数
     * @method getOptions
     * @param {String} key 键名
     * @return {String}
     */
    var getOptions = function (key) {
        return options[key];
    }


    return {
        init: init,
        getOptions: getOptions,
        //settings: settings
    }
})();

