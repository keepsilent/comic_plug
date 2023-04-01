/**
 * 书
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlBook = (function () {

    var options = {
        iframe: '#ddl-novel-iframe',
        favorBtn: '#ddl-comic-favor-btn',
        config: {
            'biquge': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'biquduo': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'dushuge': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            '23txt': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'zwdu': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)',status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'biqugetv': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)',status:'#info p:eq(1)', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},

            'loubiqu': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'paoshuzw': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            '173kt': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            '2952': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list li',cover: '#fmimg img'},
            'biqugewu': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'paoshu8': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'guibuyu': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'biquge001': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},


            '37zw': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'dingdiann': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'mcmssc': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'hehuamei': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'ddxs': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(1)', next: '.bottem1 a:eq(3)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},

            'bswtan': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem2 a:eq(1)', next: '.bottem2 a:eq(3)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},

            'xsbooktxt': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'biqugg': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},

            'biquge_tv': { title: '.con_top a:eq(1)', chapter: '.bookname h1', catalog: '.con_top a:eq(1)', content: '#content', prev: '.bottem1 a:eq(2)', next: '.bottem1 a:eq(4)', author: '#info p:eq(0)',status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},

            'sizhicn': { title: '.path div.p a:eq(1)', chapter: '.content h1', catalog: '.path div.p a:eq(1)', content: '#content', prev: '.page_chapter ul li:eq(0) a', next: '.page_chapter ul li:eq(2) a', author: '.small span:eq(0)',status:'.small span:eq(2)', updated: '.small span:eq(4)',intro:'.intro',catalog_box: '.listmain dd',cover: '.cover img'},
            'biqulu_net': { title: '.path div.p a:eq(1)', chapter: '.content h1', catalog: '.path div.p a:eq(1)', content: '#content', prev: '.page_chapter ul li:eq(0) a', next: '.page_chapter ul li:eq(2) a', author: '.small span:eq(0)', status:'.small span:eq(2)', updated: '.small span:eq(4)',intro:'.intro',catalog_box: '.listmain dd',cover: '.cover img'},
            'bqkan': { title: '.path div.p a:eq(1)', chapter: '.content h1', catalog: '.path div.p a:eq(1)', content: '#content', prev: '.page_chapter ul li:eq(0) a', next: '.page_chapter ul li:eq(2) a', author: '.small span:eq(0)',status:'.small span:eq(2)', updated: '.small span:eq(4)',intro:'.intro',catalog_box: '.listmain dd',cover: '.cover img'},

            'sbiquge': { title: '.path div.p a:eq(1)', chapter: '.content h1', catalog: '.path div.p a:eq(1)', content: '#content', prev: '.page_chapter ul li:eq(0) a', next: '.page_chapter ul li:eq(2) a', author: '#info p:eq(2)', status:'.small span:eq(2)', updated: '.small span:eq(4)',intro:'#intro',catalog_box: '.listmain dd',cover: '#fmimg img'},

            'cnoz': { title: '.con_top a:eq(2)', chapter: '.bookname h1', catalog: '.con_top a:eq(2)', content: '#content', prev: '.bottem1 a:eq(0)', next: '.bottem1 a:eq(2)', author: '#info p:eq(0)', status:'', updated: '#info p:eq(2)',intro:'#intro',catalog_box: '#list dd',cover: '#fmimg img'},
            'suixw': { title: '#linkleft a:eq(2)', chapter: '#title', catalog: '#footlink a:eq(1)', content: '#content', prev: '#footlink a:eq(0)', next: '#footlink a:eq(2)', author: '#info', update: '',intro:'',catalog_box: 'table tr td',cover: '#fmimg img'},
            'book_sfacg': { title: '.crumbs a:eq(2)', chapter: '.article-title', catalog: '#ctrlBtnArea a:eq(0)', content: '#ChapterBody', prev: '#pageBtnArea a:eq(3)', next: '#pageBtnArea a:eq(2)', author: '.author-name span', status:'.text-row span:eq(1)', updated: '.text-row span:eq(3)',intro:'.introduce',catalog_box: '.story-catalog',cover: '.summary-pic img',page:'.crumbs a:eq(2)'},
        }
    }

    /**
     *  获取页面信息
     *  @method getPageInfo
     *  @param {String} key 关键字
     */
    var getPageInfo = function (key) {
        var title = getTitle(key,'title');
        var chapter = getTitle(key,'chapter');
        var catalog = getLink(key,'catalog');
        var content = getTitle(key,'content');
        var prev = getLink(key,'prev');
        var next = getLink(key,'next');
        var num = getWordsNum(content);

        if(!base.isEmptyValue(content)) {
            content = base.ltrim(content,'br');
        }

        // switch (key) {
        //     case 'biquge_tw':
        //         catalog = (window.location.href).replace(/[0-9]?\.html/gi,'');
        //         break;
        // }

        var book = { title: title, chapter: chapter, catalog: catalog,content: content,prev: prev, next:next,num: num};
        addIframe(book,key,catalog);
        return book;
    }

    /**
     * 添加Iframe
     * @method addIframe
     */
    var addIframe = function (book,key,src) {
        var iframe = 'ddl-novel-iframe';
        var html = '<iframe src="'+src+'" width="0" height="0" id="'+iframe+'" name="'+iframe+'" frameborder="no"></iframe>';
        $('body').append(html);
        //console.log('iframe',key,src);
        var iframe = document.getElementById(iframe);
        $(iframe).load(function(){
            //console.log('iframe.load');
            switch (key) {
                case 'book_sfacg':
                    getNovelPageCatalogue(book,key,src);
                    break;
                default:
                    //console.log('addIframe',book,key,src);
                    getNovelPageInfo(book,key,src);
                    break;
            }
        });
    }


    /**
     * 获取小说页面信息
     * @method getNovelPageInfo
     */
    var getNovelPageInfo  = function (book,key,src) {
        var id = '#ddl-novel-iframe';
        var author = $(id).contents().find(options.config[key]['author']).html();
        var intro = $(id).contents().find(options.config[key]['intro']).html();
        var status = $(id).contents().find(options.config[key]['status']).html();
        var updated = $(id).contents().find(options.config[key]['updated']).html();
        var cover = $(id).contents().find(options.config[key]['cover']).attr('src');
        var catalog = getCatalog(key);

        renderCatalog(catalog);

        book.author = getAuthor(author);
        book.intro = getIntro(intro);
        book.cover = getFullCoverPath(key,cover);
        book.link = getFullCatalogPath(key,src);
        book.catalog = JSON.stringify(catalog);
        book.status = getStatus(status);
        book.updated = getUpdated(updated);
        book.type = key;

        $('.ddl-novel-loaded-box').show();
        $('#ddl-novel-author').html(book.author);
        $('#ddl-novel-status').html(book.status? '已完结': '连载中');

        // console.log('status',book.status);
        // console.log('updated',book.updated);
        // console.log('cover',book.cover);
        // console.log('link',book.link);

        getNovelInfo(book);
        //console.log('book',book);
    }

    /**
     * 获取小说页面目录
     * @method getNovelPageCatalogue
     */
    var getNovelPageCatalogue = function (book,key) {
        var id = '#ddl-novel-iframe';
        var catalog = getCatalog(key);
        var iframe = 'ddl-novel-iframe';
        var src = $(id).contents().find(options.config[key]['page']).attr('href');
        var html = '<iframe src="'+src+'" width="0" height="0" id="'+iframe+'" name="'+iframe+'" frameborder="no"></iframe>';
        $(id).remove();
        renderCatalog(catalog);
        $('body').append(html);
        //console.log('src',src);
        var iframe = document.getElementById(iframe);
        $(iframe).load(function(){
            var author = $(id).contents().find(options.config[key]['author']).html();
            var intro = $(id).contents().find(options.config[key]['intro']).html();
            var status = $(id).contents().find(options.config[key]['status']).html();
            var updated = $(id).contents().find(options.config[key]['updated']).html();
            var cover = $(id).contents().find(options.config[key]['cover']).attr('src');


            //console.log('aaaaaa',author,intro,status,updated,cover);
            book.author = getAuthor(author);
            book.intro = getIntro(intro);
            book.cover = getFullCoverPath(key,cover);
            book.link = getFullCatalogPath(key,src);
            book.catalog = JSON.stringify(catalog);
            book.status = getStatus(status);
            book.updated = getUpdated(updated);
            book.type = key;

            $('.ddl-novel-loaded-box').show();
            $('.ddl-novel-book-btn a').attr('href',book.link);
            $('#ddl-novel-author').html(book.author);
            $('#ddl-novel-status').html(book.status? '已完结': '连载中');
            // console.log('status',book.status);
            // console.log('updated',book.updated);
            // console.log('cover',book.cover);
            // console.log('link',book.link);

            getNovelInfo(book);
        });
    }

    /**
     * 获取完整的封面路径
     * @method getFullCoverPath
     * @param {String} key 关键字
     * @param {String} src 图片数径
     */
    var getFullCoverPath = function (key,src) {
        if(base.isEmptyValue(src)) {
            return '';
        }
        var origin = window.location.origin;
        if(src.indexOf('http://') == -1 && src.indexOf('https://') == -1) {
            return origin + src;
        }

        return src;
    }

    /**
     * 获取完整的目录路径
     * @method getFullCatalogPath
     * @param {String} key 关键字
     * @param {String} url 图片数径
     */
    var getFullCatalogPath = function (key,url) {
        var origin = window.location.origin;
        if(url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
            return origin + url;
        }

        return url;
    }

    /**
     * 获取小说信息
     * @method getNovelInfo
     * @param {String} url 链接
     */
    var getNovelInfo = function (data) {
        //console.log('getComicInfo',data);
        ajRequest.post('comic/getNovelInfo',data,function (result) {
           // console.log('getComicInfo',result);
            var url = data.link;
            var type = data.type;
            var catalogList = getCurrentCatalogList(result.data.catalog);
           // console.log('catalogList',catalogList);
            var catalog = catalogList.list;
            var total = base.getDataLength(catalog);
            var favor = { url: url, type: type};
            var home = data.link;
            var link = window.location.href;
            var title = data.chapter;

            result.data.sort = 'asc';
            result.data.total = total;
            result.data.type = type;
            result.data.catalog = catalog;
            //result.data.catalog = ddlUnit.setComicSort(catalog,type,total);


            $(options.favorBtn).attr('data-load',1);
            $(options.favorBtn).attr('data-index-link',data.link);
            $(options.favorBtn).attr('data-sublink',window.location.href);
            //console.log('favor',favor);
            cookie.get('favor',function(favor) { ddlFavor.setDefault(favor); });

            // console.log('uploadCurrentData',home,title,link,result.data);
            // console.log('result.data222',result.data);
            ddlFavor.uploadCurrentData(home,title,link,result.data); //更新阅读第几话

            $(options.favorBtn).click(function () {
                var select = $(this).attr('data-select');
                var load = $(this).attr('data-load');
                //console.log('load',load);
                if(load == 0) {
                    tipsBox.autoClose('数据加载中，请稍候','center');
                    return false;
                }

                if(select == '') {
                    ddlFavor.add(result.data);
                } else {
                    ddlFavor.remove(result.data);
                }
            });
        },function (resutl) {
            console.log(resutl);
            // setTimeout(function () {
            //     getComicInfo(url,type)
            // },8000)
        });
    }

    /**
     * 控制目录样式
     * @method renderCatalog
     * @param {Object} catalog
     */
    var renderCatalog = function (catalog) {
        tpl.renderTpl('.ddl-novel-catalog-main','novel/catalog_item',{catalog: catalog});
        $('.ddl-catalog-subtitle-btn').click(function (event) {
            setCatalogSubtitle($(this));
        });

        $('.ddl-novel-catalog-main a').each(function () {
            if($(this).attr('href') == window.location.href) {
                $(this).addClass('active');
                $(this).attr('data-load',0);
                $(this).parent().parent().show();
                $(this).parent().parent().parent().find('span.iconfont').removeClass('icon-fanhui3').addClass('icon-fanhui4');
            }
        });
    }

    /**
     * 获取作者
     * @method getAuthor
     * @param {String} author 作者
     */
    var getAuthor = function (author) {
        if(base.isEmptyValue(author)) {
            return '';
        }
        author = base.removeHTMLTag(author);
        author = author.replace(/(作者|作　　者|：|:)?/gi,'');
        return base.ltrim(author);
    }

    /**
     * 获取状态
     * @method getStatus
     * @param {String} status 状态
     */
    var getStatus = function (status) {
        if(base.isEmptyValue(status)) {
            return 0;
        }
        status = base.removeHTMLTag(status);
        status = status.replace(/(状态|：|:|,|，)?/gi,'');
        status = status.replace(/(加入书架|直达底部)?/gi,'');
        status = status.replace(/(字数[0-9]+字)?/gi,'');

        status = base.ltrim(status);
        //console.log('status',status);
        switch (status) {
            case '连载':
            case '连载中':
            case '[连载中]':
                return 0;
                break;
            default:
                return 1;
        }
    }

    /**
     * 获取更新时间
     * @method getUpdated
     * @param {String} update 时间
     */
    var getUpdated = function (updated) {
        if(base.isEmptyValue(updated)) {
            return '';
        }

        // updated = base.removeHTMLTag(updated);
        updated = updated.replace(/&nbsp;/ig,'');
        updated = updated.replace(/(最后更新：|最后更新:|更新：)?/gi,'');
        updated = updated.replace(/(更新时间：|更新时间:)?/gi,'');
        return base.ltrim(updated);
    }

    /**
     * 获取简介
     * @method getIntro
     * @param {String} intro 简介
     */
    var getIntro = function (intro) {
        if(base.isEmptyValue(intro)) {
            return '';
        }

        intro = filterStr(intro);
        intro = base.removeHTMLTag(intro);
        intro = intro.replace(/(简介：|简介:)?/gi,'');
        return base.ltrim(intro);
    }

    /**
     * 获取目录
     * @method getCatalog
     * @param {String} key 关键字
     * @return {Array}
     */
    var getCatalog = function (key) {
        var id = '#ddl-novel-iframe';
        var catalog = [],host = getHostUrl(key);
        switch (key) {
            case 'biquge':
            case 'bswtan':
            case 'paoshuzw':
            case 'loubiqu':
            case 'hehuamei':
            case 'biquduo':
            case 'dushuge':
            case '2952':
            case 'sbiquge':
            case '37zw':
            case '23txt':
            case 'zwdu':
            case 'dingdiann':
            case 'paoshu8':
            case 'guibuyu':
            case 'biqugetv':
            case 'biqugg':
            case 'biquge001':

                var list = [];
                // console.log('getCatalog');
                // console.log('$(id).contents()',$(id).contents());
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this).find('a'),list,host);
                });
                catalog = makeUpCatalog(catalog,list);
                break;
            case 'biquge_tv':
            case 'biqulu_net':
            case 'xsbooktxt':
            case 'sizhicn':
            case 'cnoz':
            case '173kt':
            case 'bqkan':
            case 'biqugewu':
            case 'mcmssc':
                var catalog_box = base.ltrim(options.config[key]['catalog_box'].replace(' dd',''));
                var html = $(id).contents().find(catalog_box).html();
                if(base.isEmptyValue(html)) {
                    return [];
                }
                var arr = html.split('<dt>');
                for(var i in arr) {
                    if(i == 0) {
                        continue;
                    }

                    var list = [],title = '';
                    var postition = arr[i].indexOf('</dt>');
                    var aReg = /<a(.*?)href=("|')(.*?)("|')(.*?)>(.*?)<\/a>/gi;
                    var match = arr[i].match(aReg);

                    for(var j in match) {
                        var aReg = /<a(.*?)href=("|')(.*?)("|')(.*?)>(.*?)<\/a>/gi;
                        var a = aReg.exec(match[j]);
                        if(!base.isEmptyValue(a)) {
                            var item = {
                                link: host + a[3],
                                title: a[6]
                            }
                            list.push(item);
                        }
                    }

                    if(postition != -1) {
                        title = (arr[i]).substring(0,postition);
                        title = base.removeHTMLTag(title);
                        title = title.replace(/（(.*?)）/,'');
                    }

                    catalog = makeUpCatalog(catalog,list,title);
                }
                //console.log('catalog',catalog);
                break;
            case 'suixw':
                var list = [], title = '',index = 0;
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    if($(this).hasClass('vcss')) {
                        if(index != 0) {
                            catalog = makeUpCatalog(catalog,list,title);
                        }
                        list = [];index ++;
                        title = $(this).html();
                        title = title.replace(/<!--.*-->/gi,'');
                        title = filterStr(title);
                    } else {
                        list = createChildCatalog($(this).find('a'), list);
                    }
                });
                catalog = makeUpCatalog(catalog,list,title);
                break;
            case 'book_sfacg':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    var list = [];
                    var title = $(this).find('.catalog-title').html();
                    $(this).find('.catalog-list li').each(function () {
                        list = createChildCatalog($(this).find('a'),list,host);
                    });

                    catalog = makeUpCatalog(catalog,list,title);
                });
                break;
        }

        for(var i in catalog) { //过滤空值
            var list = [];
            for(var j in catalog[i].list) {
                if(!base.isEmptyValue(catalog[i].list[j].title)) {
                     list.push(catalog[i].list[j]);
                }
            }
            catalog[i].list = list;
        }
        return catalog;
    }

    /**
     *  获取主Url
     *  @method getHostUrl
     */
    var getHostUrl = function (key) {
        var host = '';
        switch (key) {
            case 'bswtan':
            case 'loubiqu':
            case 'xsbooktxt':
            case 'booktxt_tw':
            case 'booktxt_tv':
            case 'sizhicn':
            case '37zw':
            case 'biqugg':
                host = (window.location.href).replace(/[0-9]+\.html/gi,'');
                break;
            // case 'tianxiabachang':
            //     host = (window.location.href).replace(/\/[0-9_]+\/[0-9]+\.html/gi,'');
            //     break;
            default:
                host = window.location.origin;
                break
        }

        return host;
    }

    /**
     * 生成子目录
     * @method createChildCatalog
     * @param {Objrct} _this 当前对象
     * @param {Array} list 数组
     * @param {}
     */
    var createChildCatalog = function (_this,list, host) {
        var host = host || '';
        var item = {
            link: host + _this.attr('href'),
            title: base.removeHTMLTag(_this.html())
        }
        list.push(item);
        return list;
    }


    /**
     * 构造目录
     * @method makeUpCatalog
     * @param {Array} catalog 目录数组
     * @param {Array} list 子目录
     * @param {String} title 标题
     */
    var makeUpCatalog = function (catalog,list,title) {
        var title = title || '正文卷';
        var item = { 'title': title, list: list, count: base.getDataLength(list)};
        catalog.push(item);
        return catalog;
    }
    /**
     * 获取文本
     * @method getTitle
     * @param {String} key 关键字
     * @param {String} prop 属性
     */
    var getTitle = function (key,prop) {
        return $(options.config[key][prop]).html();
    }

    /**
     * 获取链接
     * @method getTitle
     * @param {String} key 关键字
     * @param {String} prop 属性
     */
    var getLink = function (key,prop) {
        return $(options.config[key][prop]).attr('href');
    }


    /**
     * 获取字数
     * @method getWordsNum
     * @param {String} html
     * @return {Number}
     */
    var getWordsNum = function (html) {
        if(base.isEmptyValue(html)) {
            return 0;
        }

        var W = new Object();
        var iNumwords = 0,sNumwords = 0;
        var sTotal = 0,iTotal = 0,eTotal = 0,inum = 0;
        var html = base.removeHTMLTag(html);
        var wTotal = html.length;

        for (var i = 0; i < wTotal; i++) {
            var c = html.charAt(i);
            if (c.match(/[\u4e00-\u9fa5]/)) {
                if (isNaN(W[c])) {
                    iNumwords++;
                    W[c] = 1;
                }
                iTotal++;
            }
        }
        for (var i = 0; i < wTotal; i++) {
            var c = html.charAt(i);
            if (c.match(/[^\x00-\xff]/)) {
                if (isNaN(W[c])) {
                    sNumwords++;
                }
                sTotal++;
            } else {
                eTotal++;
            }
            if (c.match(/[0-9]/)) {
                inum++;
            }
        }

        return inum + iTotal;
    }

    /**
     * 过滤字符串
     * @method filterStr
     */
    var filterStr = function (str) {
        if(base.isEmptyValue(str)) {
            return '';
        }
        str = str.replace(/(\r\n|\n|\r)/gm,'');
        str = base.ltrim(str);
        str = base.rtrim(str);
        return str;
    }

    /**
     * 设置目录副标题
     * @method setCatalogSubtitle
     * @param {String} _this
     */
    var setCatalogSubtitle = function (_this) {
        if(_this.find('span.iconfont').hasClass('icon-fanhui3')) {
            _this.find('span.iconfont').removeClass('icon-fanhui3').addClass('icon-fanhui4');
            _this.next().show();
        } else {
            _this.find('span.iconfont').removeClass('icon-fanhui4').addClass('icon-fanhui3');
            _this.next().hide();
        }
    }

    /**
     * 获取当前目录列表
     * @method getCurrentCatalogList
     * @param {Array} catalog 目录数组
     * @param {String} url 链接
     * @param {String} type 类型
     */
    var getCurrentCatalogList = function (catalog) {
        var link = window.location.href;
        link = link.replace(/(https:|http:)/i, '');
        for(var i in catalog) {
            for(var j in catalog[i].list) {
                if (link == (catalog[i].list[j].link).replace(/(https:|http:)/i, '')) {
                    return catalog[i];
                }
            }
        }

        return [];
    }

    return {
        getPageInfo: getPageInfo,
        addIframe: addIframe
    }
})();
/**
 * 漫画信息
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlCaricature = (function () {

    var options = {
        menu: '#ddl-comic-menu',
        catalog: '#ddl-comic-catalog', //目录
        catalogSwitch: '#ddl-comic-catalog-switch', //目录开关
        catalogSort : '#ddl-comic-catalog-sort',
        favorBtn: '#ddl-comic-favor-btn',
        iframe: '#ddl-comic-iframe',
        prevBtn:'#ddl-comic-prev-btn',
        nextBtn:'#ddl-comic-next-btn',
        comic: {},
        config: {
            'dmzj': { title: '.head_wz a:eq(1)', chapter: '.head_title h2',  prev: '.wrap_last_mid span.pre a', next: '.wrap_last_mid span.next a', author: '.comic_deCon_liO li:eq(0)', status:'.comic_deCon_liO li:eq(1)', updated: '.zj_list_head_dat',intro:'.comic_deCon_d',catalog_box: '.zj_list div.tab-content:eq(0) .list_con_li li',cover: '.comic_i_img img'},
            'manhua_dmzj': { title: '.hotrmtexth1 a.redhotl', chapter: '.display_middle span.redhotl',  prev: '#prev_chapter', next: '#next_chapter', author: '.anim-main_list table tr:eq(2) a:first-child', status:'.anim-main_list table tr:eq(4) a:first-child', updated: '.anim-main_list table tr span.update2',intro:'.line_height_content',catalog_box: '.cartoon_online_border li',cover: '.anim_intro_ptext img'},
            'sfacg': { title: '#AD_j1 span', chapter: '#AD_j1 span', prev: '.wrap .page_turning:eq(0) a:eq(1)', next: '.wrap .page_turning:eq(0) a:eq(4)', author: '.synopsises_font li:eq(1) a:eq(1)', status:'.synopsises_font li:eq(1)', updated: '.synopsises_font li:eq(1)',intro:'.synopsises_font li:eq(1)',catalog_box: '.comic_Serial_list a',cover: '.synopsises_font img'},
            'fzdm': { title: '#weizhi a:eq(2)', chapter: '#pjax-container h1',  prev: '', next: '', author: '', status:'', updated: '',intro:'',catalog_box: '#content li',cover: ''},
            'hhxxee': { title: '#spt1', chapter: '#spt2',  prev: '', next: '', author: '.en_info li:eq(0) a', status:'.en_info li:eq(3) b:eq(1)', updated: '.en_info li:eq(7)',intro:'#titleDiv h2',catalog_box: '.cVolList div',cover: '.img_div img'},
            'u17': { title: '.comic_name', chapter: '#current_chapter_name',  prev: '', next: '', author: '.right div.info a:eq(0)', status:'.info span.comic_infor_status span.color_green:eq(0)', updated: '',intro:'#words',catalog_box: '#chapter li',cover: '#cover img'},
            'ikkdm': { title: 'title', chapter: '', prev: '', next: '', author: '', status:'', updated: '',intro:'#ComicInfo',catalog_box: '#comiclistn dd',cover: 'img:eq(3)'},

            'hhimm': { title: 'title', chapter: '', prev: '', next: '', author: '#about_kit li:eq(1)', status:'#about_kit li:eq(2)', updated: '#about_kit li:eq(4)',intro:'#about_kit li:eq(7)',catalog_box: '.cVolList ul.cVolUl',cover: '#about_style img'},
            'huhudm': { title: 'title', chapter: '', prev: '', next: '', author: '#about_kit li:eq(1)', status:'#about_kit li:eq(2)', updated: '#about_kit li:eq(4)',intro:'#about_kit li:eq(7)',catalog_box: '.cVolList ul.cVolUl',cover: '#about_style img'},

            'manhuaniu': { title: '.title h1 a', chapter: '.title h2', prev: '.prevC', next: '.nextC', author: '#about_kit li:eq(1)', status:'#about_kit li:eq(2)', updated: '#about_kit li:eq(4)',intro:'#about_kit li:eq(7)',catalog_box: '.cVolList ul.cVolUl',cover: '#about_style img'},


            'acgn': { title: '#breadcrumb a:eq(2)', chapter: '#breadcrumb h1', prev: '.display_left a', next: '.display_right a', author: '.load01_r li:eq(0) span', status:'.load01_r li:eq(1) span', updated: '.load01_r li:eq(4) span',intro:'.gameshows dd:last-child',catalog_box: '#comic_chapter ul li',cover: '.gameshows img'},
            'manhuagui': { title: '.title h1 a', chapter: '.title h2', prev: '.prevC', next: '.nextC', author: '#about_kit li:eq(1)', status:'#about_kit li:eq(2)', updated: '#about_kit li:eq(4)',intro:'#about_kit li:eq(7)',catalog_box: '.cVolList ul.cVolUl',cover: '#about_style img'},
            'cartoonmad': { title: 'table tr:eq(1) td:eq(0) table tr:eq(0) td:eq(1) a:eq(0)', chapter: 'table tr:eq(1) td:eq(0) table tr:eq(0) td:eq(1) a:eq(1)', prev: 'table tr:eq(1) td:eq(0) table tr:eq(0) td:eq(0) a:eq(0)', next: 'table tr:eq(1) td:eq(0) table tr:eq(0) td:eq(2) a:eq(0)', author: '', status:'', updated: '',intro:'',catalog_box: '',cover: ''},
            '77mh': { title: 'h1 a', chapter: 'h1 a', prev: '#pnpage a:eq(0)', next: '#pnpage a:eq(1)', author: '.ar_list_coc li:eq(1) a', status:'.ar_list_coc li:eq(2) a', updated: '.ar_list_coc li:eq(4)',intro:'#det',catalog_box: '.ar_rlos_bor li',cover: '.ar_list_coc img'},
            '2nunu': { title: '.path a:eq(2)', chapter: 'h1', prev: '.page a:eq(0)', next: '.page a:eq(1)', author: '.sy_k22  li:eq(2) a', status:'.sy_k22  li:eq(1) a', updated: '.sy_k22  li:eq(6) font',intro:'.sy_k22  li:last-child',catalog_box: '.zjlist ul.fx li',cover: '.sy_k1 img'},
            'manhuadb': { title: '.breadcrumb li:eq(1) a', chapter: '.breadcrumb li:eq(2) a', prev: '.form-inline a.pre', next: '.form-inline a.next', author: '.creators  li a', status:'.tags  li:eq(0) a', updated: '',intro:'.comic_story',catalog_box: '.links-of-books li',cover: '.comic-cover img'},
            'manhuacat': { title: '.links ol li:eq(1) a', chapter: '.links ol li:eq(2)', prev: '.form-inline a.pre', next: '.form-inline a.next', author: '.links ol li:eq(2) a', status:'.tags  li:eq(0) a', updated: '.comic-meta-data-table tr:last-child td.comic-titles',intro:'.comic_story',catalog_box: '.links-of-books li',cover: '.comic-cover img'},
        }
    }




    /**
     *  获取页面信息
     *  @method getPageInfo
     *  @param {String} key 关键字
     */
    var getPageInfo = function (key) {
        var title = getTitle(key,'title');
        var chapter = getTitle(key,'chapter');
        var prev = getLink(key,'prev');
        var next = getLink(key,'next');
        var home = getComicHomeLink(window.location.href,key);

        switch (key) {
            case 'dmzj':
                prev = prev ? getFullLink(prev) : '';
                next = next ? getFullLink(next) : '';
                break;
            case 'manhua_dmzj':
                prev = prev ? home + prev : '';
                next = next ? home + next : '';
                break;
            case 'sfacg':
            case 'hhimm':
            case 'huhudm':
            case '77mh':
                var str = base.removeHTMLTag(title);
                var data = str.split(' ');
                title = data[0];
                title = base.trim(title.replace('↵',''));
                chapter = data[1];
                break;
            case 'ikkdm':
                var str = base.removeHTMLTag(title);
                var regular = /^(.*)\s(.*)/;
                if(regular.test(str)) {
                    var data = str.split(' ');
                    title = data[0];
                    chapter = data[1];
                } else {
                    var position = str.indexOf('_');
                    title = str.substring(0,position);
                    chapter = str.substring(position+1, str.length);
                }

                break;
            case 'cartoonmad':
                var url = window.location.href.replace(/\/[0-9]+\.html/i,'/');
                prev = prev ? url + prev : undefined;
                next = next ? url + next : undefined;
                break;
            case 'manhuagui':
                prev = 'javascript:SMH.prevC()';
                next = 'javascript:SMH.nextC()';
                break;
            case 'acgn':
                chapter = base.trim(chapter.replace(title,''));
                chapter = chapter.replace(/(【|】)?/gi,'');
                break;
            case '2nunu':
                var data = base.trim(chapter.replace(title,'')).split(' ');
                chapter = data[0];
                break;
            case 'manhuadb':
            case 'manhuacat':
                prev = 'javascript:goNumPage(\'pre\');';
                next = 'javascript:goNumPage(\'next\');';
                break;
        }

        console.log('home',home);
        var iframe = isAllowIframe(key)
        var book = { title: title, chapter: chapter, home: home, prev: prev, next:next,iframe: iframe};

        if(iframe == true) { //支持iframe
            addIframe(book, key, home);
        }
        return book;
    }

    /**
     * 获取目录
     * @method getCatalog
     * @param {String} key 关键字
     * @return {Array}
     */
    var getCatalog = function (key) {
        var list = [];
        var id = '#ddl-comic-iframe';
        var catalog = [],host = getHostUrl(key);
        console.log('host',host);
        switch (key) {
            case 'u17':
            case 'dmzj':
            case '2nunu':
            case 'manhuacat':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this).find('a'), list);
                });
                catalog = makeUpCatalog(catalog,list);
                break;
            case 'fzdm':
            case 'hhxxee':
            case 'ikkdm':
            case '77mh':
            case 'manhuadb':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this).find('a'), list, host);
                });
                catalog = makeUpCatalog(catalog,list);
                break;
            case 'manhua_dmzj':
                var name =  $(id).contents().find('.anim_title_text').find('h1').html();
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this).find('a'), list, host);
                });
                catalog = makeUpCatalog(catalog,list);
                $(id).contents().find('.cartoon_online_border_other').each(function () {
                    var list = [];
                    var title =  $(this).prev().find('h2').html();
                    title = title.replace('漫画其它版本：','');
                    title = title.replace(name,'');

                    $(this).find('li').each(function () {
                        list = createChildCatalog($(this).find('a'), list, host);
                    });

                    catalog = makeUpCatalog(catalog,list,title);
                });

                break;
            case 'acgn':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this).find('a'), list, host, '/');
                });
                catalog = makeUpCatalog(catalog,list);
                break;
            case 'sfacg':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    list = createChildCatalog($(this), list, host);
                });
                catalog = makeUpCatalog(catalog,list);
                break;
            case 'hhimm':
            case 'huhudm':
                $(id).contents().find(options.config[key]['catalog_box']).each(function () {
                    var list = [];
                    var title = $(this).prev().html();
                    title = title.replace('周刊杂志每周每月连载单集','');
                    title = title.replace('漫画正片外的剧情之','');
                    $(this).find('li').each(function () {
                        list = createChildCatalog($(this).find('a'), list, host);
                    });

                    catalog = makeUpCatalog(catalog,list,title);
                });
                break;
        }

        console.log('catalog',catalog);
        for(var i in catalog) { //过滤空值
            var list = [];
            for(var j in catalog[i].list) {
                if(!base.isEmptyValue(catalog[i].list[j].title)) {
                    list.push(catalog[i].list[j]);
                }
            }
            catalog[i].list = list;
        }
        return catalog;
    }

    /**
     * 是否充许引入iframe
     * @method isAllowIframe
     * @param {String} key 类型
     * @return {Boolen}
     */
    var isAllowIframe = function (key) {
        var data = ['manhuagui', 'cartoonmad'];
        for(var i in data) {
            if(data[i] == key) {
                return false;
            }
        }

        return true;
    }

    /**
     * 添加Iframe
     * @method addIframe
     */
    var addIframe = function (book,key,src) {
        if(!isAllowIframe(key)) {
            return false;
        }

        var iframe = 'ddl-comic-iframe';
        var html = '<iframe src="'+src+'" width="0" height="0" id="'+iframe+'" name="'+iframe+'" frameborder="no"></iframe>';
        $('body').append(html);
        console.log('addIframe',key,src);
        var iframe = document.getElementById(iframe);
        $(iframe).load(function() {
            //console.log('iframe.load');
            switch (key) {
                case 'book_sfacg':
                    getNovelPageCatalogue(book,key,src);
                    break;
                default:
                    //console.log('addIframe',book,key,src);
                    getNovelPageInfo(book,key,src);
                    break;
            }
        });
    }


    /**
     * 获取小说页面信息
     * @method getNovelPageInfo
     */
    var getNovelPageInfo  = function (book,key,src) {
        var id = '#ddl-comic-iframe',reg = '';
        var author = $(id).contents().find(options.config[key]['author']).html() || '';
        var intro = $(id).contents().find(options.config[key]['intro']).html() || '';
        var status = $(id).contents().find(options.config[key]['status']).html() || 0;
        var updated = $(id).contents().find(options.config[key]['updated']).html() || '';
        var cover = $(id).contents().find(options.config[key]['cover']).attr('src') || '';
        var catalog = getCatalog(key);

        switch (key) {
            case 'sfacg':
                reg = /<span>更新时间：<\/span>(.*?)<div class="interaction_Focus"/is;
                updated = intro.match(reg)[1];

                reg = /<\/span>\[(.*?)\]　<span>点击数：/is;
                status = intro.match(reg)[1];

                reg = /<br>(.*?)<br>/is;
                intro = intro.match(reg)[1];
                break;
            case 'ikkdm':
                var html = $(id).contents().find('#ComicInfo').parent().parent().next().next().html();
                html = html.split('：');
                author = html[1].replace(' | 漫画状态','');
                status = html[2].replace(' | 漫画更新','');
                updated = html[3].replace('</td>','');
                break;
        }

        book.author = getAuthor(author);
        book.intro = getIntro(intro);
        book.cover = getFullCoverPath(key,cover);
        book.link = getFullCatalogPath(key,src);
        book.catalog = JSON.stringify(catalog);
        book.status = getStatus(status);
        book.updated = getUpdated(updated);
        book.type = key;

        // console.log('status',book.status);
        // console.log('updated',book.updated);
        // console.log('cover',book.cover);
        // console.log('link',book.link);

        getComidInfo(book);
        console.log('book',book);
    }

    /**
     * 获取小说页面目录
     * @method getNovelPageCatalogue
     */
    var getNovelPageCatalogue = function (book,key) {
        var id = '#ddl-comic-iframe';
        var catalog = getCatalog(key);
        var iframe = 'ddl-comic-iframe';
        var src = $(id).contents().find(options.config[key]['page']).attr('href');
        var html = '<iframe src="'+src+'" width="0" height="0" id="'+iframe+'" name="'+iframe+'" frameborder="no"></iframe>';
        $(id).remove();
        renderCatalog(catalog);
        $('body').append(html);
        //console.log('src',src);
        var iframe = document.getElementById(iframe);
        $(iframe).load(function(){
            var author = $(id).contents().find(options.config[key]['author']).html();
            var intro = $(id).contents().find(options.config[key]['intro']).html();
            var status = $(id).contents().find(options.config[key]['status']).html();
            var updated = $(id).contents().find(options.config[key]['updated']).html();
            var cover = $(id).contents().find(options.config[key]['cover']).attr('src');


            //console.log('aaaaaa',author,intro,status,updated,cover);
            book.author = getAuthor(author);
            book.intro = getIntro(intro);
            book.cover = getFullCoverPath(key,cover);
            book.link = getFullCatalogPath(key,src);
            book.catalog = JSON.stringify(catalog);
            book.status = getStatus(status);
            book.updated = getUpdated(updated);
            book.type = key;



            // console.log('status',book.status);
            // console.log('updated',book.updated);
            // console.log('cover',book.cover);
            // console.log('link',book.link);

            getComidInfo(book);
        });
    }

    /**
     * 获取完整的封面路径
     * @method getFullCoverPath
     * @param {String} key 关键字
     * @param {String} src 图片数径
     */
    var getFullCoverPath = function (key,src) {
        if(base.isEmptyValue(src)) {
            return '';
        }
        var origin = window.location.origin;
        if(src.indexOf('http://') == -1 && src.indexOf('https://') == -1) {
            return origin + src;
        }

        return src;
    }

    /**
     * 获取完整的目录路径
     * @method getFullCatalogPath
     * @param {String} key 关键字
     * @param {String} url 图片数径
     */
    var getFullCatalogPath = function (key,url) {
        var origin = window.location.origin;
        if(url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
            return origin + url;
        }

        return url;
    }


    /**
     * 获取完整链接
     * @method getFullLink
     * @param {String} url 链接
     * @param {String} separator 分隔符
     */
    var getFullLink = function (url,separator) {
        var separator = separator || '';
        return '//'+window.location.host+separator+url;
    }

    /**
     * 获取小说信息
     * @method getComidInfo
     * @param {String} url 链接
     */
    var getComidInfo = function (data) {
        console.log('getComicInfo',data);
        var url = window.location.href;
        var type = data.type;
        ajRequest.post('comic/getNovelInfo',data,function (result) {
            console.log('API 请求成功,getComicInfo',result);
            var catalogList = ddlUnit.getCurrentCatalogList(result.data.catalog, url, type);
            var catalog = catalogList.list;
            var template = 'comic/catalog';
            var total = base.getDataLength(catalog);

            if(catalogList.title != '正篇'){
                result.data.title += ' '+ catalogList.title;
            }

            //console.log('catalogList',catalogList,catalogList.title);
            //result.data.title = data.title
            result.data.sort = 'asc';
            result.data.total = total;
            result.data.type = type;
            result.data.catalog = setComicSort(catalog,type,url,total);
            options.comic = result.data;

            console.log('getComicInfo',options.comic);
            tpl.renderTpl(options.catalog,template,result.data);

            $(options.favorBtn).unbind();
            $(options.favorBtn).attr('data-load',1);
            $(options.catalogSwitch).attr('data-load',1);
            $(options.catalogSort).click(setCatalogSort);
            loadFavorInfo(data);
        },function (resutl) {
            console.log('请求API失败，原因：',resutl);
        });
    }

    /**
     * 加载喜欢信息
     * @method loadFavorInfo
     */
    var loadFavorInfo = function (data) {
        console.log('favor',data);
        var home = $(options.favorBtn).attr('data-index-link');
        var link = $(options.favorBtn).attr('data-sublink');
        var title = $(options.favorBtn).attr('data-subtitle');
        console.log('uploadCurrentData',home,title,link,options.comic)
        cookie.get('favor',function(data) { ddlFavor.setDefault(data); });
        ddlFavor.uploadCurrentData(home,title,link,options.comic); //更新阅读第几话

        $(options.favorBtn).click(function () {
            var select = $(this).attr('data-select');
            if(select == '') {
                ddlFavor.add(options.comic);
                return false;
            }

            ddlFavor.remove(options.comic);
        });
    }

    /**
     * 设置漫画排序
     * @method setComicSort
     * @param {Array} catalog 目录
     * @param {String} type 类型
     * @param {String} url 链接
     * @param {String} total 数量
     * @return {Array}
     */
    var setComicSort = function (catalog,type,url,total) {
        var arr = ddlUnit.setComicSort(catalog,type,total);
        setPage(arr,url,type);
        options.catalogList = arr;
        return options.catalogList;
    }


    /**
     * 设置分页
     * @method setPage
     * @param {Array} catalog 目录数组
     * @param {String} url 链接
     * @param {String} type 类型
     */
    var setPage = function (catalog,url,type) {
        var link = ddlUnit.getPageLink(url,type);
        var catalogLen = base.getDataLength(catalog);
        link = link.replace(/(https:|http:)/i, '');
        console.log('setPage link',link,catalog);

        for(var i in catalog) {
            if(link == (catalog[i].link).replace(/(https:|http:)/i, '')) {
                var index = parseInt(i);
                $(options.subtitle).html(catalog[i].title);
                $(options.favorBtn).attr('data-sublink',catalog[i].link);
                $(options.favorBtn).attr('data-subtitle',catalog[i].title);

                //ddlFavor.uploadCurrentData(getComicHomeLink(catalog[i].link,type),catalog[i].title,catalog[i].link,options.comic); //更新阅读第几话


                if(index == 0 && catalogLen - 1 == 0) {
                    $(options.prevBtn).parent().hide();
                    $(options.nextBtn).parent().hide();
                    $('.ddl-comic-bottom p.ddl-comic-over-tips').show();
                } else if(index == 0) {
                    $(options.prevBtn).parent().hide();
                    $(options.nextBtn).attr('data-href',catalog[index+1].link).parent().show()

                    $('.ddl-comic-bottom p.ddl-comic-next-tips').show();
                    $('.ddl-comic-bottom p.ddl-comic-next-tips a').attr('href',catalog[index+1].link);
                }else if (index == catalogLen - 1) {
                    $(options.nextBtn).parent().hide();
                    $(options.prevBtn).attr('data-href',catalog[index-1].link).parent().show();

                    $('.ddl-comic-bottom p.ddl-comic-over-tips').show();
                } else {
                    $(options.prevBtn).attr('data-href',catalog[index-1].link).parent().show();
                    $(options.nextBtn).attr('data-href',catalog[index+1].link).parent().show();

                    $('.ddl-comic-bottom p.ddl-comic-next-tips').show();
                    $('.ddl-comic-bottom p.ddl-comic-next-tips a').attr('href',catalog[index+1].link);
                }
                break;
            }
        }
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
     * 获取漫画首页链接
     * @method getComicHomeLink
     * @param {String} url 链接
     * @param {String} type 类型
     */
    var getComicHomeLink = function (url,type) {
        var link = '';
        switch (type) {
            case 'ikkdm':
                link = url.replace(/[0-9]+\/[0-9]+\.htm/i, '');
                break;
            case 'dmzj':
                link = url.replace(/\/view\//i, '/info/');
                link = link.replace(/#@page=[0-9]+/i, '');
                link = link.replace(/\/[0-9]+\.html/i, '.html');
                break;
            case 'manhua_dmzj':
                link = url.replace(/#@page=[0-9]+/i, '');
                link = link.replace(/\/[0-9]+\.shtml/i, '/');
                break;
            case 'fzdm':
                if(url.indexOf(".html") != -1) {
                    link = url.replace(/[0-9]+\/index_[0-9]+\.html/i,'');
                } else {
                    link = base.rtrim(url);
                    link = link.substr(0,link.lastIndexOf('/'));
                    link = link.substr(0,link.lastIndexOf('/'));
                    link += '/';
                }
                break;
            case 'sfacg':
                link = url.replace(/#p=[0-9]+/i, '');
                link = link.replace(/[0-9]+/i, '');
                break;
            case 'hhimm':
            case 'huhudm':
                link = 'http://www.'+type+'.com'+$('.cH1 span').next().next().attr('href');
                break;
            case 'pufei':
                link = url.replace(/\?page=[0-9]+/i, '');
                link = link.replace(/\/[0-9]+\.html/i, '/');
                break;
            case 'imanhuaw':
            case '52wuxing':
            case 'fmhuaaa':
            case 'manhuagui':
            case 'manhuaniu':
                link = url.replace(/(\?|\#)p=[0-9]+/i, '');
                link = link.replace(/\/[0-9]+\.html/i, '/');
                break;
            case 'hhxxee':
                link = 'http://99.hhxxee.com'+$('#spt1').parent().attr('href');
                break;
            case 'gufengmh':
                link = url.replace(/\#p=[0-9]+/i, '');
                link = link.replace(/\/[0-9]+\.html/i, '/');
                break;
            case 'u17':
                link = $('#readtop h1 a').attr('href');
                break;

            case 'mangapanda':
            case 'mangareader':
                link = url.replace(/\/[0-9]+/i, '');
                link = link.replace(/\/[0-9]+/i, '');
                break;
            case 'mangahere':
                link = $('h2.chapter-title a').attr('href');
                break;
            case 'e_hentai':
            case 'exhentai':
                link = $('.sb a').attr('href');
                break;
            case 'acgn':
                link = getHost() + $('#breadcrumb').find('a').eq(2).attr('href');
                break;
            case 'cartoonmad':
                link = $('table tr:eq(1) > td table tr:eq(0) td:eq(1) li a').attr('href').replace('http','https');
                break;
            case '77mh':
                link = getHost() + $('h1 a').attr('href');
                break;
            case '2nunu':
                link = $('.path a:eq(2)').attr('href');
                break;
            case 'manhuadb':
                link = getHost() + $('.breadcrumb li a:eq(1)').attr('href');
                break;
            case 'manhuacat':
                link = $('.links ol li:eq(1) a').attr('href');
                break;

        }

        //console.log('homeLink',link);
        return link;
    }


    /**
     * 获到Http/Https域名
     * @method getHost
     */
    var getHost = function (host) {
        var host = host || window.location.host;
        return window.location.protocol + '//'+ host;
    }



    /**
     * 获取作者
     * @method getAuthor
     * @param {String} author 作者
     */
    var getAuthor = function (author) {
        if(base.isEmptyValue(author)) {
            return '';
        }
        author = base.removeHTMLTag(author);
        author = author.replace(/(作者|作　　者|：|:)?/gi,'');
        return base.ltrim(author);
    }

    /**
     * 获取状态
     * @method getStatus
     * @param {String} status 状态
     */
    var getStatus = function (status) {
        if(base.isEmptyValue(status)) {
            return 0;
        }
        status = base.removeHTMLTag(status);
        status = status.replace(/(状态|：|:|,|，)?/gi,'');
        status = status.replace(/(加入书架|直达底部)?/gi,'');
        status = status.replace(/(字数[0-9]+字)?/gi,'');

        status = base.ltrim(status);
        //console.log('status',status);
        switch (status) {
            case '连载':
            case '连载中':
            case '[连载中]':
                return 0;
                break;
            default:
                return 1;
        }
    }

    /**
     * 获取更新时间
     * @method getUpdated
     * @param {String} update 时间
     */
    var getUpdated = function (updated) {
        if(base.isEmptyValue(updated)) {
            return '';
        }

        updated = base.removeHTMLTag(updated);
        updated = updated.replace(/&nbsp;/ig,'');
        updated = updated.replace(/(最后更新：|最后更新:|更新：|更新:|更新)?/gi,'');
        updated = updated.replace(/(更新时间：|更新时间:|更新日期：)?/gi,'');
        updated = updated.replace(/(\[|\])?/gi,'');
        return base.ltrim(updated);
    }

    /**
     * 获取简介
     * @method getIntro
     * @param {String} intro 简介
     */
    var getIntro = function (intro) {
        if(base.isEmptyValue(intro)) {
            return '';
        }

        intro = filterStr(intro);
        intro = base.removeHTMLTag(intro);
        intro = intro.replace(/(简介：|简介:)?/gi,'');
        return base.ltrim(intro);
    }

    /**
     *  获取主Url
     *  @method getHostUrl
     */
    var getHostUrl = function (key) {
        var host = '';
        switch (key) {
            case 'fzdm':
                host = getComicHomeLink(window.location.href,key);
                break;
            default:
                host = window.location.origin;
                break
        }

        return host;
    }

    /**
     * 生成子目录
     * @method createChildCatalog
     * @param {Objrct} _this 当前对象
     * @param {Array} list 数组
     * @param {String} connector 连接符
     * @param {}
     */
    var createChildCatalog = function (_this, list, host, connector) {
        var host = host || '';
        var connector = connector || '';
        var item = {
            link: host + connector + _this.attr('href'),
            title: base.removeHTMLTag(_this.html())
        }

        console.log('createChildCatalog',item);
        list.push(item);
        return list;
    }


    /**
     * 构造目录
     * @method makeUpCatalog
     * @param {Array} catalog 目录数组
     * @param {Array} list 子目录
     * @param {String} title 标题
     */
    var makeUpCatalog = function (catalog,list,title) {
        var title = title || '正文卷';
        var item = { 'title': title, list: list, count: base.getDataLength(list)};
        catalog.push(item);
        return catalog;
    }

    /**
     * 获取文本
     * @method getTitle
     * @param {String} key 关键字
     * @param {String} prop 属性
     */
    var getTitle = function (key,prop) {
        var title = $(options.config[key][prop]).html();
        title = base.removeHTMLTag(title);
        title = title.replace(/(漫畫|漫画)?/gi,'');

        return title;
    }

    /**
     * 获取链接
     * @method getTitle
     * @param {String} key 关键字
     * @param {String} prop 属性
     */
    var getLink = function (key,prop) {
        return $(options.config[key][prop]).attr('href');
    }


    /**
     * 过滤字符串
     * @method filterStr
     */
    var filterStr = function (str) {
        if(base.isEmptyValue(str)) {
            return '';
        }
        str = str.replace(/(\r\n|\n|\r)/gm,'');
        str = base.ltrim(str);
        str = base.rtrim(str);
        return str;
    }


    return {
        getPageInfo: getPageInfo,
        addIframe: addIframe,
        isAllowIframe: isAllowIframe
    }
})();
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
/**
 * 转义字符
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlEscape= (function () {

    var options = {
        chineseStr: '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座',
        traditionalStr: '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鼈憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟産闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充衝沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕凋刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦複傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘杆柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鈎勾溝苟狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡挂褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑迹激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際妓繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競淨炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫琅榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬狸離漓理李裏鯉禮莉荔吏栗麗厲勵礫曆利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟眯醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪呐鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬你匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽齧鑷鎳涅您檸獰凝甯擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖抛咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啓契砌器氣迄棄汽泣訖掐洽牽扡釺鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌牆薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺刹沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陝擅贍膳善汕扇繕墒傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡台泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探歎炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔縧萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟爲濰維葦萎委偉僞尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄凶胸匈洶雄熊休修羞朽嗅鏽秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勳熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒岩延言顔閻炎沿奄掩眼衍演豔堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液一壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤于盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓髒葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟眞甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀症鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙志摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鍾衷終種腫重仲衆舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住注祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄准捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鑽纂嘴醉最罪尊遵昨左佐柞做作坐座'
    }

    /**
     * 转义成简体
     * @method chinese
     * @param {String} text 文本
     * @return {string}
     */
    var chinese = function (text) {
        if(base.isEmptyValue(text)) {
            return '';
        }

        var str = '';
        var ss = options.chineseStr;
        var tt = options.traditionalStr;
        var len = text.length;

        for( var i=0 ; i < len ; i++) {
            if( text.charCodeAt(i) > 10000 && tt.indexOf( text.charAt(i) ) != -1 ) {
                str += ss.charAt(tt.indexOf(text.charAt(i)));
            } else {
                str += text.charAt(i);
            }
        }
        return str;
    }

    /**
     * 转义成繁体
     * @method traditional
     * @param {String} text 文本
     * @return {string}
     */
    var traditional = function (text) {
        if(base.isEmptyValue(text)) {
            return '';
        }

        var str = '';
        var ss = options.chineseStr;
        var tt = options.traditionalStr;
        var len = text.length

        for(var i = 0 ; i < len ; i++ ) {
            if( text.charCodeAt(i) > 10000 && ss.indexOf( text.charAt(i) ) != -1 ) {
                str += tt.charAt(ss.indexOf(text.charAt(i)));
            } else {
                str += text.charAt(i);
            }
        }

        return str;
    }

    /**
     * 设置语言
     * @method setLangue
     * @param {String} langue
     * @param {String} element 选择元素
     */
    var setLangue = function (langue,element) {
        var element = element || '#ddl-novel-wrap .ddl-text';
        $(element).each(function () {
            var text = $(this).html();
            if(langue == 'chinese') {
                text = chinese(text);
            }

            if(langue == 'traditional') {
                text = traditional(text);
            }

            $(this).html(text);
            //console.log('text',text);
        });
    }

    return {
        chinese: chinese,
        traditional: traditional,
        setLangue: setLangue
    }
})();
/**
 * 收藏
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlFavor = (function () {

    var options = {
        favorBtn: '#ddl-comic-favor-btn'
    }

    /**
     * 设置默认
     * @method setDefault
     */
    var setDefault = function (data) {
        //console.log('data.favor',data.favor);
        var home = $(options.favorBtn).attr('data-index-link');
        var favor = data.favor || [];
        for(var i in favor) {
            if(favor[i].home == home) {
                $(options.favorBtn).attr('data-select','selected');
                $(options.favorBtn).parent().addClass('active');
            }
        }
    }

    /**
     * 添加
     * @method add
     * @param {Object} comic
     */
    var add = function (comic) {
        var item = {
            id: comic.id,
            title: comic.title,
            cover: comic.cover,
            author: comic.author,
            status: comic.status,
            type: comic.type,
            home: $(options.favorBtn).attr('data-index-link'),
            current: { title: $(options.favorBtn).attr('data-subtitle'),url: $(options.favorBtn).attr('data-sublink'),time: new Date().getTime()},
            last: comic.catalog[comic.total - 1],
            //total: comic.total
            //updated: comic.updated
        }

        item.last.total = comic.total;
        cookie.get('favor',function (data) {
            var has = false;
            var favor = data.favor || [];

            if(base.getDataLength(favor) >= 20) {
                tipsBox.alert('Comic++ 目前最多只能支持20个收藏');
                return false;
            }

            for (var i in favor) {
                if(favor[i].home == item.home) {
                    has = true;
                    favor[i] = $.extend(favor[i],item);
                }
            }

            if(has == false) {
                favor.push(item);
            }

            cookie.set('favor',favor);
            chrome.runtime.sendMessage({type: "flushFavor"});
            $(options.favorBtn).attr('data-select','selected');
            $(options.favorBtn).parent().addClass('active');
        });
    }

    /**
     * 移除
     * @method remove
     * @param {Object} comic
     */
    var remove = function () {
        var home = $(options.favorBtn).attr('data-index-link');
        $(options.favorBtn).attr('data-select','');
        $(options.favorBtn).parent().removeClass('active');

        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor.splice(i,1);
                }
            }

            cookie.set('favor',favor);
            chrome.runtime.sendMessage({type: "flushFavor"});
        });
    }

    /**
     * 更新当前数据
     * @method uploadCurrentData
     * @param {String} home 漫画目录连接
     * @param {String} title 标题
     * @param {String} url 连接
     * @param {Object} comic
     */
    var uploadCurrentData = function (home, title, url,comic) {
        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor[i].current = { title: title,url: url,time: new Date().getTime()};
                    favor[i].last = comic.catalog[comic.total - 1];
                    favor[i].last.total = comic.total;
                    cookie.set('favor',favor);
                    chrome.runtime.sendMessage({type: "flushFavor"});
                }
            }
        });
    }

    /**
     * 更新最新数据
     * @method uploadLastData
     * @param {String} home 漫画目录连接
     * @param {Object} comic
     */
    var uploadLastData = function (home,comic) {
        console.log('uploadCurrentData',comic);
        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor[i].last = comic.catalog[comic.total - 1];
                    favor[i].last.total = comic.total;
                    cookie.set('favor',favor);
                    chrome.runtime.sendMessage({type: "flushFavor"});
                }
            }
        });
    }

    return {
        add: add,
        remove: remove,
        setDefault: setDefault,
        uploadCurrentData: uploadCurrentData,
        uploadLastData: uploadLastData
    }
})();


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
            { regular: /^(http|https):\/\/www\.biquge\.biz\/[0-9_]+\/[0-9]+\.html/, type: 'biquge'},
            { regular: /^(http|https):\/\/www\.bswtan\.com\/[0-9_]+\/[0-9]+\/[0-9]+\.html/, type: 'bswtan'},
            { regular: /^(http|https):\/\/www\.paoshuzw\.com\/[0-9_]+\/[0-9]+\/[0-9]+\.html/, type: 'paoshuzw'},
            { regular: /^(http|https):\/\/www\.xsbooktxt\.com\/[0-9_]+\/[0-9]+\.html/, type: 'xsbooktxt'},
            { regular: /^(http|https):\/\/www\.loubiqu\.com\/[0-9_]+\/[0-9]+\.html/, type: 'loubiqu'},
            { regular: /^(http|https):\/\/www\.hehuamei\.com\/[0-9_]+\/[0-9_]+\/[0-9]+\.html/, type: 'hehuamei'},
           // { regular: /^(http|https):\/\/www\.booktxt\.net\/[0-9_]+\/[0-9]+\.html/, type: 'booktxt_net'},
            { regular: /^(http|https):\/\/www\.biqulu\.net\/book\/[0-9_]+\/[0-9]+\.html/, type: 'biqulu_net'},
            //{ regular: /^(http|https):\/\/www\.biquge\.tw\/[0-9_]+\/[0-9]+\.html/, type: 'biquge_tw'},
            { regular: /^(http|https):\/\/www\.biquge\.tv\/[0-9_]+\/[0-9]+\.html/, type: 'biquge_tv'},
            { regular: /^(http|https):\/\/www\.biquduo\.com\/biquge\/[0-9_]+\/[a-zA-Z0-9]+\.html/, type: 'biquduo'},

            { regular: /^(http|https):\/\/www\.dushuge\.org\/html\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: 'dushuge'},
            { regular: /^(http|https):\/\/www\.shuquge\.com\/txt\/[0-9]+\/[0-9]+\.html/, type: 'sizhicn'},
            { regular: /^(http|https):\/\/www\.cnoz\.org\/[0-9_]+\/[0-9]+\.html/, type: 'cnoz'},
            { regular: /^(http|https):\/\/www\.173kt\.net\/book\/[0-9_]+\/[0-9]+\.html/, type: '173kt'},
            { regular: /^(http|https):\/\/www\.bqkan\.com\/[0-9_]+\/[0-9]+\.html/, type: 'bqkan'},
            { regular: /^(http|https):\/\/www\.2952\.cc\/b\/[0-9_]+\/[0-9_]+\/[0-9]+\.html/, type: '2952'},
            { regular: /^(http|https):\/\/www\.sbiquge\.com\/[0-9_]+\/[0-9]+\.html/, type: 'sbiquge'},
            { regular: /^(http|https):\/\/www\.37zw\.[a-z]+\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: '37zw'},
            { regular: /^(http|https):\/\/xs\.23sk\.com\/files\/article\/html\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: '23txt'},
            { regular: /^(http|https):\/\/www\.zwdu\.com\/book\/[0-9_]+\/[0-9]+\.html/, type: 'zwdu'},
            { regular: /^(http|https):\/\/www\.dingdiann\.net\/[a-z0-9]+\/[0-9]+\.html/, type: 'dingdiann'},
            { regular: /^(http|https):\/\/www\.mcmssc\.com\/[0-9_]+\/[0-9]+\.html/, type: 'mcmssc'},
            //{ regular: /^(http|https):\/\/www\.tianxiabachang\.cn\/[0-9_]+\/[0-9]+\.html/, type: 'tianxiabachang'},
            //{ regular: /^(http|https):\/\/www\.biqiuge\.com\/book\/[0-9]+\/[0-9]+\.html/, type: 'biqiuge'},
            //{ regular: /^(http|https):\/\/www\.yqxs\.cc\/html\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: 'yqxs'},
            { regular: /^(http|https):\/\/www\.biqugewu\.net\/[0-9_]+\/[0-9]+\.html/, type: 'biqugewu'},

            { regular: /^(http|https):\/\/www\.paoshu8\.com\/[0-9_]+\/[0-9]+\.html/, type: 'paoshu8'},
            { regular: /^(http|https):\/\/www\.guibuyu\.org\/[0-9_]+\/[0-9]+\.html/, type: 'guibuyu'},
            { regular: /^(http|https):\/\/book\.suixw\.com\/modules\/article\/reader\.php\?aid=[0-9]+&cid=[0-9]+/, type: 'suixw'},
            { regular: /^(http|https):\/\/book\.sfacg\.com\/Novel\/[0-9_]+\/[0-9]+\/[0-9]+/, type: 'book_sfacg'},
            { regular: /^(http|https):\/\/www\.biqugetv\.com\/[0-9_]+\/[0-9]+\.html/, type: 'biqugetv'},
            { regular: /^(http|https):\/\/www\.biqugg\.com\/xs\/[0-9]+\/[0-9]+\.html/, type: 'biqugg'},
            { regular: /^(http|https):\/\/www\.biquge001\.com\/Book\/[0-9]+\/[0-9]+\/[0-9]+\.html/, type: 'biquge001'},
            { regular: /^(http|https):\/\/www\.ddxs\.cc\/ddxs\/[0-9]+\/[0-9]+\.html/, type: 'ddxs'},
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
        options.type = data.type;
        switch (data.type) {
            case 'manhuagui':
                timingRun(data.type,10);
                break;
            default:
                setTimeout(function () { run(); },10);
                break;
        }
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
                case 'u17':
                    str += ddlUnit.setU17BodyPath();
                    break;
            }

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


/**
 * 部件
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlUnit = (function () {

    var options = {
        webList: {
            'manhua_dmzj': { title: '动漫之家',url: 'https://manhua.dmzj.com/',describe: '动漫之家为您提供最新更新的在线漫画、原创漫画、好看的漫画，最新最快的在线漫画更新、漫画大全尽在动漫之家漫画网。',type: 'comic'},
            'u17': { title: '有妖气',url: 'http://www.u17.com/',describe: '中国唯一且最大的纯原创漫画网站，数千名中国原创漫画作者汇聚于此，在线连载最热门的全新漫画作品，为中国原创漫画作者提供最肥沃的漫画创作土壤。',type: 'comic'},
            'sfacg': { title: 'SF动漫',url: 'https://manhua.sfacg.com/',describe: 'SF漫画提供海量漫画,更新最快在线漫画欣赏、无弹窗清爽阅读环境，老牌漫画网站一直陪伴在你身旁。',type: 'comic'},
            'ikkdm': { title: 'KuKu动漫',url: 'https://manhua.kukudm.com/',describe: 'KuKu动漫,提供海量漫画,更新最快在线漫画欣赏,是动漫爱好者的交流互动平台',type: 'comic'},
            'fzdm': {  title: '风之动漫',url: 'https://www.fffdm.com/',describe: '在线漫画 日本动漫 火影忍者漫画 海贼王漫画',type: 'comic'},
            'manhuagui': { title: '漫画柜',url: 'https://www.manhuagui.com/',describe: '看漫画网站拥有海量的国产漫画、日韩漫画、欧美漫画等丰富漫画资源，免费为漫画迷提供及时的更新、清新的界面和舒适的体验,努力打造属于漫画迷的漫画乐园。 ',type: 'comic'},
            '77mh': { title: '新新漫画',url: 'https://www.77mh.xyz/',describe: '集齐漫画资源相当丰富，只有你想不到的，没有看不到的，每天更新百部漫画 ',type: 'comic'},
            'manhuadb': { title: '漫画DB',url: 'https://www.manhuadb.com/',describe: '漫画DB是全网最专业的日本漫画大全资料库。网站上的所有漫画均可免费在线看，同时每部漫画都有丰富的资料，包括登场人物、用语、设定、改编作品及创作幕后等深层的内容。 ',type: 'comic'},
            'manhuacat': { title: '漫画猫',url: 'https://www.maofly.com/',describe: '漫画猫为您提供海量的优质漫画作品在线阅读观看，其中不乏一些优质的日本漫画大作，剧情题材各异、画风自成一派、内容自然有趣，可谓是舒适而又愉悦的漫画体验。 ',type: 'comic'},
            'acgn': { title: '動漫戲說',url: 'https://comic.acgn.cc/',describe: '提供免費在線漫畫、線上漫畫(Comic) ~ 線上觀看! ',type: 'comic'},
            'cartoonmad': { title: '動漫狂',url: 'https://www.cartoonmad.com/',describe: '免費動畫漫畫分享社群 !  ',type: 'comic'},

            'book_sfacg': { title: 'SF轻小说',url: 'https://book.sfacg.com/',describe: 'SF轻小说网提供海量日本轻小说,国产轻小说,动漫小说,轻小说TXT下载,轻小说在线阅读',type: 'novel'},
            'suixw':{ title: '随想轻小说',url: 'http://book.suixw.com/',describe: '日本轻小说,动漫小说网站,免费提供轻小说在线观看,TXT与电子书下载,并支持手机WAP访问',type: 'ignore'},
            'biquge':{ title: '笔趣阁',url: 'https://www.biquge.biz/',describe: '笔趣阁是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',type: 'novel'},
            'dushuge':{ title: '读书阁',url: 'https://www.dushuge.org/',describe: '读书阁是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',type: 'novel'},
            'sizhicn':{ title: '书趣阁',url: 'http://www.shuquge.com/',describe: '打眼新书神藏发布，来书趣阁看神藏最新章节。书趣阁_笔趣阁是笔趣阁的备用网站，网站已经全新改版，提供超快更新VIP小说免费首发，网站干净无任何广告，阅读环境好。',type: 'novel'},
            '233txt':{ title: '天籁小说网',url: 'https://xs.23sk.com/',describe: '天籁小说网是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',type: 'novel'},

            'dmzj': { title: '动漫之家',url: 'https://www.dmzj.com/',describe: '',type: 'ignore'},
            'hhxxee': { title: '九九漫畫',url: 'http://99.hhxxee.com/',describe: '',type: 'ignore'},
            'hhimm': { title: '汗汗酷漫',url: 'http://www.hhimm.com/',describe: '',type: 'ignore'},
            'huhudm': { title: '虎虎漫画',url: 'http://www.huhudm.com',describe: '',type: 'ignore'},

            'biquge_lu':{ title: '笔趣阁',url: 'https://www.biquge.lu/',describe: '',type: 'ignore'},
            'biquge_tv':{ title: '笔趣阁',url: 'http://www.biquge.tv/',describe: '',type: 'ignore'},
            'bswtan':{ title: '笔趣阁',url: 'http://www.bswtan.com',describe: '',type: 'ignore'},
            'loubiqu':{ title: '笔趣阁',url: 'http://www.loubiqu.com/',describe: '',type: 'ignore'},
            'cnoz':{ title: '笔趣阁',url: 'https://www.cnoz.org/',describe: '',type: 'ignore'},
            '173kt':{ title: '笔趣阁',url: 'http://www.173kt.net/',describe: '',type: 'ignore'},
            'bqkan':{ title: '笔趣看',url: 'https://www.bqkan.com/',describe: '',type: 'ignore'},
            '37zw':{ title: '三七中文网',url: 'https://www.37zw.la/',describe: '',type: 'ignore'},
            'biduo':{ title: '笔趣阁',url: 'https://www.biduo.cc/',describe: '',type: 'ignore'},
            'dingdiann':{ title: '顶点小说',url: 'https://www.dingdiann.net/',describe: '',type: 'ignore'},
            'zwdu':{ title: '八一中文网',url: 'https://www.zwdu.com/',describe: '',type: 'ignore'},
            'paoshuzw':{ title: '新笔趣阁',url: 'http://www.paoshuzw.com/',describe: '',type: 'ignore'},
            'xsbooktxt':{ title: '顶点小说',url: 'https://www.xsbooktxt.com/',describe: '',type: 'ignore'},

            'biqugewu':{ title: '笔趣阁',url: 'http://www.biqugewu.net/',describe: '',type: 'ignore'},
            'mcmssc':{ title: '笔趣阁',url: 'https://www.biquge.biz/',describe: '',type: 'ignore'},
            'biqugetv':{ title: '笔趣阁',url: 'https://www.biqugetv.com/',describe: '',type: 'ignore'},
            'biqugg':{ title: '笔趣阁',url: 'https://www.biqugg.com/',describe: '',type: 'ignore'},
            'biquge001':{ title: '笔趣阁',url: 'http://www.biquge001.com/',describe: '',type: 'ignore'}
        }
    }

    /**
     * 设置漫画排序
     * @method setComicSort
     * @param {Array} catalog 目录
     * @param {String} type 类型
     * @param {Number} total 数量
     * @return {Array}
     */
    var setComicSort = function (catalog,type,total) {
        var arr = [];
        switch (type) {
            case 'ikkdm':
            case 'manhua_dmzj':
            case 'mangapanda':
            case 'mangareader':
            case 'gufengmh':
            case 'fmhuaaa':
            case 'u17':
            case 'manhuadb':
                for(var i in catalog) {
                    arr.push(catalog[i]);
                }
                break;
            default:
                for(var i = total - 1 ; i >= 0; i--) {
                    arr.push(catalog[i]);
                }
                break;
        }

        return arr;
    }

    /**
     * 获取分页链接
     * @member getPageLink
     * @param {String} url 链接
     * @param {String} type 类型
     * @return {String}
     */
    var getPageLink = function (url,type) {
        var linkFormat = getPageLinkFormat(url,type);
        var link = linkFormat.replace(/%/i,1);

        console.log('getPageLink',linkFormat,link);
        switch(type) {
            case 'ikkdm':
                link = window.location.href.replace(/\?[a-zA-Z0-9=]+/i, '');
                link = link.replace(/[0-9]+\.htm/i, '1.htm');
                break;
            case 'dmzj':
            case 'manhua_dmzj':
            case '77mh':
                link = link.replace(/#@page=[0-9]+/i, '');
                break;
            case 'fzdm':
                link = link.replace(/index_[0-9]+.html/i, '');
                break;
            case 'sfacg':
            case 'gufengmh':
            case 'manhuagui':
                link = link.replace(/#p=[0-9]+/i, '');
                break;
            case 'manhuaniu':
            case 'imanhuaw':
            case '52wuxing':
                link = link.replace(/\?\/p=[0-9]+/i, '');
                break;
            case '2nunu':
                link = link.replace(/[0-9]+\.html/i, '1.html');
                break;
            case 'mangapanda':
            case 'mangareader':
                link = link.substr(0,link.lastIndexOf('/'));
                break;
            case 'hhimm':
            case 'huhudm':
                link = link.substr(0, link.lastIndexOf('?')) + '?s='+base.getQueryString('s');
                break;
            case 'pufei':
                link = link.replace(/\?\/page=[0-9]+/i, '');
                break;
            case 'hhxxee':
                if(link.lastIndexOf('?') != -1) {
                    link = link.substr(0, link.lastIndexOf('?'));
                }
                break;
            case 'fmhuaaa':
                link = link.replace(/[0-9]+.html/i, '');
                link += $('select option:first-child').val()+'.html';
                break;
            case 'u17':
                link = link.replace(/#image_id=[0-9]+/i, '');
                break;
            case 'mangahere':
                link = link.replace(/#[0-9]+/i, '');
                break;
            case 'acgn':
                link = link.replace(/#show/i, '');
                break;
            case 'manhuadb':
                link = link.replace(/_p[0-9]+/i, '');
                break;
            case 'manhuacat':
                link = link.replace(/_[0-9]+/i, '');
                break;
        }


        //console.log('link',link);
        return link;
    }

    /**
     * 获取页面链接格式
     * @method getPageLinkFormat
     * @param {String} url 连接
     * @param {String} type 类型
     */
    var getPageLinkFormat = function (url,type) {
        switch (type) {
            case 'ikkdm':
            case 'acgn':
                url = url.replace(/\/[0-9]+\.htm/i,'/%.htm');
                break;
            case 'fzdm':
                if(url.indexOf("html") != -1) {
                    url = url.replace(/\/index_[0-9]+\.html/i,'/index_%.html');
                } else {
                    url += 'index_%.html';
                }
                break;
            case 'mangapanda':
                var reg = /^https:\/\/www\.mangapanda\.com\/[a-zA-Z\-0-9]+\/[0-9]+\/[0-9]+/i;
                if(reg.test(url)) {
                    url = url.substr(0,url.lastIndexOf('/'));
                    url += '/%';
                } else {
                    url += '/%';
                }
                break;
            case 'mangareader':
                var reg = /^https:\/\/www\.mangareader\.com\/[a-zA-Z\-0-9]+\/[0-9]+\/[0-9]+/i;
                if(reg.test(url)) {
                    url = url.substr(0,url.lastIndexOf('/'));
                    url += '/%';
                } else {
                    url += '/%';
                }
                break;
            case 'hhimm':
            case 'huhudm':
            case 'fmhuaaa':
                url = url.replace(/\/[0-9]+\.html/i,'/%.html');
                break;
            case 'pufei':
                url = url.replace(/page=[0-9]+/i,'/page=%');
                break;
            case 'imanhuaw':
            case 'hhxxee':
            case '52wuxing':
            case 'gufengmh':
                url = url.replace(/p=[0-9]+/i,'/p=%');
                break;
            case 'mangahere':
                url = url.replace(/#[0-9]+/i,'#%');
                break;
            case 'manhuagui':
                url = url.replace(/#p=[0-9]+/i,'');
                break;
            case 'manhuaniu':
                url = url.replace(/p=[0-9]+/i,'p=%');
                break;
            case '2nunu':
                url = url.replace(/[0-9]+\.html/i,'%.html');
                break;
            case 'cartoonmad':
                url = url.replace(/[0-9]+\.html/i,'');
                break;
            case 'manhuadb':
                url = url.replace(/_p[0-9]+\.html/i,'.html');
                break;
            case 'manhuacat':
                url = url.replace(/_[0-9]+\.html/i,'.html');
                break;
        }

        console.log('getPageLinkFormat',url);
        return url;
    }

    /**
     * 获取当前目录列表
     * @method getCurrentCatalogList
     * @param {Array} catalog 目录数组
     * @param {String} url 链接
     * @param {String} type 类型
     */
    var getCurrentCatalogList = function (catalog,url,type) {
        var link = getPageLink(url,type);
        console.log('link',catalog,link);
        link = link.replace(/(https:|http:)/i, '');
        link = decodeURIComponent(link);
        for(var i in catalog) {
            for(var j in catalog[i].list) {
                if (link == (catalog[i].list[j].link).replace(/(https:|http:)/i, '')) {
                    return catalog[i];
                }
            }
        }


        return [];
    }

    /**
     * 汗汗酷漫解释图片名字
     * @member hhimmUnsuan
     * @param {String} s 加密字符
     * @return {string}
     */
    var hhimmUnsuan = function(s ,type) {
        var sw = (type == "hhimm") ? "44123.com|hhcool.com|hhimm.com" : "huhudm.com|huhumh.com";

        var su = location.hostname.toLowerCase();
        //var su = "www.hhimm.com";
        var b = false;
        var len = sw.split("|").length;
        for(var i=0;i< len;i++) {
            if(su.indexOf(sw.split("|")[i])>-1) {
                b=true;
                break;
            }
        }
        if(!b)return "";

        var x = s.substring(s.length-1);
        var w = "abcdefghijklmnopqrstuvwxyz";
        var xi = w.indexOf(x)+1;
        var sk = s.substring(s.length-xi-12,s.length-xi-1);
        var s = s.substring(0,s.length-xi-12);
        var k = sk.substring(0,sk.length-1);
        var f = sk.substring(sk.length-1);
        for(i=0;i<k.length;i++) {
            eval("s=s.replace(/"+ k.substring(i,i+1) +"/g,'"+ i +"')");
        }

        var ss = s.split(f);
        var s = "";
        for(var i=0;i<ss.length;i++) {
            s+=String.fromCharCode(ss[i]);
        }

        return s;
    }


    /**
     *  获取元素的绝对位置坐标（像对于页面左上角）
     *  @member  getElementPagePosition
     *  @param {String} element 元素id
     */
    var getElementPagePosition = function(element){
        //计算x坐标
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        while (current !== null){
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        //计算y坐标
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null){
            actualTop += (current.offsetTop+current.clientTop);
            current = current.offsetParent;
        }
        //返回结果
        return {x: actualLeft, y: actualTop};
    }

    /**
     * 获得九九漫画图片路径
     * @member getPhxxeeImagePath
     * @param {String} img
     * @return {String}
     */
    var getPhxxeeImagePath = function (img) {
        var s = base.getQueryString("s");
        var paths = $('body').attr('data-path');
        paths = paths.split('|');

        if(!base.isEmptyValue(s)) {
            return paths[parseInt(s) - 1];
        }

        if($('#hdCuD') != null) {
            s = $('#hdCuD').val();
            if(!base.isEmptyValue(s)) {
                return paths[parseInt(s) - 1];
            }
        }

        img = img.substr(1,img.length);
        img = img.substr(0,img.indexOf('/'));
        img = img.replace(/[a-zA-z\-]+/i,'');
        return  paths[parseInt(img) - 1 ];
    }

    /**
     * 获取古风漫画图片路径
     * @method getGufengmhImagePath
     * @param {String} domain 域名
     * @return {String}
     */
    var getGufengmhImagePath = function (img,domain) {
        var path = document.body.getAttribute('data-path');

        if(img.indexOf('http') == -1) {
            return domain+path;
        }

        return '';
    }

    /**
     * 获得有妖气页面总数
     * @method getU17PageTotal
     */
    var getU17PageTotal = function () {
        var html = $('.pagenum').html();
        return html.replace(/<em>[0-9]+<\/em>\//g,'');
    }

    /**
     * 设置有妖气Body路径
     * @method setU17BodyPath
     */
    var setU17BodyPath = function () {
        var str = '';
        var total = getU17PageTotal();
        for(var i = 1; i<= total; i++) {
            str += "document.body.setAttribute('data-path"+i+"', image_config.image_list["+i+"].src);";
        }

        return str;
    }

    /**
     * 获取有妖气图片
     * @method setU17Images
     */
    var setU17Images = function () {
        var arr = [];
        var total = getU17PageTotal();
        for(var i = 1; i<= total; i++) {
           arr[parseInt(i)-1] = base64.decode($('body').attr('data-path'+i));
        }

        return arr;
    }


    /**
     * 添加Iframe
     * @method addIframe
     */
    var addIframe = function (id) {
        var id = id || 'ddl-comic-iframe'
        var html = '<iframe src="" width="0" height="0" id="'+id+'" name="'+id+'" frameborder="no" style="display: none;"></iframe>';
        $('body').append(html);
    }

    /**
     * 销毁Iframe
     * @method destroyIframe
     * @param {String} id 元素id
     */
    var destroyIframe = function(id) {
        var iframe = $(id).prop('contentWindow');

        $(id).attr('src', 'about:blank');

        try{
            iframe.document.write('');
            iframe.document.clear();
        } catch(e){

        }

        //把iframe从页面移除
        //$(id).remove();
    }

    /**
     * 获取网站列表
     * @method getWebList
     */
    var getWebList = function () {
        return options.webList;
    }

    /**
     * 重设章节标题
     * @method resetChapterTitle
     * @param {Array} list 目录
     * @param {String} title 标题
     * @return {Array}
     */
    var resetChapterTitle = function (list,title) {
        for(var i in list) {
            list[i].title = base.trim(list[i].title);
            list[i].title = list[i].title.replace(title,'');
            list[i].title = base.trim(list[i].title);
            list[i].title = list[i].title.replace(/(^_*)/g,"");
            list[i].title = list[i].title.replace(/(^\-*)/g,"");
        }

        return list;
    }

    /**
     * 获取看漫画图片地址
     * @method getManhuaguiImageSrc
     * @param {Number} index
     */
    var getManhuaguiImageSrc = function (index) {
        var a = document.createElement('a');
        a.setAttribute('href', 'javascript:SMH.utils.goPage('+index+')');// href链接
        a.click();

       return $('#mangaFile').attr('src');
    }

    /**
     *  获取看漫画图片地址
     */
    var planGetManhuaguiImageSrc = function (index,total) {
        if(index > total) {
            return false;
        }

        getManhuaguiImageSrc(parseInt(index));
        setTimeout(function () {
            var src = $('#mangaFile').attr('src');
            $('#ddl-comic-item-' + (parseInt(index) - 1)).attr('data-url', src);
            planGetManhuaguiImageSrc(parseInt(index)+1,total);
        },10);
    }

    return {
        hhimmUnsuan: hhimmUnsuan,
        getElementPagePosition: getElementPagePosition,
        getGufengmhImagePath: getGufengmhImagePath,
        getPhxxeeImagePath: getPhxxeeImagePath,
        getU17PageTotal: getU17PageTotal,
        setU17BodyPath: setU17BodyPath,
        setU17Images: setU17Images,


        getPageLink: getPageLink,
        setComicSort: setComicSort,
        getPageLinkFormat: getPageLinkFormat,
        getCurrentCatalogList: getCurrentCatalogList,

        addIframe: addIframe,
        destroyIframe: destroyIframe,
        getWebList: getWebList,
        resetChapterTitle: resetChapterTitle,
        getManhuaguiImageSrc: getManhuaguiImageSrc,
        planGetManhuaguiImageSrc: planGetManhuaguiImageSrc
    }
})();



/**
 * 提示框
 * 生成单选框 和 复选框
 *
 * @author keepsilent
 * @version 1.0.0
 */
var tipsBox = (function () {

    var options = {
        tips: '#ddl-tips-box'
        ,floating: '#ddl-floating-box'
        ,duration: 300
    }

    /**
     * 单选框
     * @param {String} tips 提示文字
     * @param {String} sure 按钮提示
     * @param {String} url 跳转链接
     */
    var alert = function (tips, sure, url) {
        var sure = sure || '知道了';
        var url = url || 'javascript:void(0);';

        var html = '<div class="alert-wrap"><h3>' + tips + '</h3><p id="tips-alert-close-btn"><a href="' + url + '" title="' + sure + '">' + sure + '</a></p></div>';
        $(options.tips).html(html);
        $(options.tips).show();
        tipsBox.center(options.tips + ' > div.alert-wrap');

        $('#tips-alert-close-btn').off('click').on('click', function () { tipsBox.hide();});
    }

    /**
     * 复选框
     * @param {String} tips 提示文字
     * @param {String} name 函数名
     * @param {String} param 函数参数
     * @param {String} sure 确认按钮
     * @param {String} cancel 取消按钮
     */
    var confirm = function (tips, name, param, sure, cancel) {
        var sure = sure || '确定';
        var cancel = cancel || '取消';
        var html = '<div class="confirm-wrap"><h3 >' + tips + '</h3><table border-collapse="0" border-spacing="0"><tr><td><a href="javascript:tipsBox.hide();" title="' + cancel + '">' + cancel + '</a></td><td><a href="javascript:tipsBox.dynamicFunction(\'' + name + '\',\'' + param + '\');" title="' + sure + '">' + sure + '</a></td></tr></tabel></div></div>';
        $(options.tips).html(html);
        $(options.tips).show();
        tipsBox.center(options.tips + ' > div.confirm-wrap');
    }

    /**
     * 提示框
     * @param {String} tips 提示文字
     */
    var autoClose = function (tips,algin) {
        var algin = algin || 'left';
        var html = '<div class="alert-wrap" style="text-align: '+algin+'"><h3>' + tips + '</h3></div>';
        $(options.tips).html(html);
        $(options.tips).show();
        tipsBox.center(options.tips + ' > div.alert-wrap');

        setTimeout(function () {
            hide();
        },1000)
    }

    /**
     * 加载动画
     * @method loading
     * @param {Number} status 状态
     */
    var loading = function (status) {
        if(status == 1) {
            tpl.renderTpl(options.tips, 'alert/loading', config.options);
            $(options.tips).show();
            tipsBox.center(options.tips + ' > div.loading-wrap');
            return false;
        }

        $(options.tips).hide();
    }

    /**
     * 元素上下居中
     * @param {String} _this
     */
    var center = function (_this) {
        var windowHeight = $(window).height();
        var _thisHeight = $(_this).css('height').replace('px', '');
        var top = parseFloat(windowHeight - _thisHeight) / 2;

        $(_this).css('marginTop', top);
    }

    /**
     * 显示提示框
     * @method show
     */
    var show = function () {
        var begin = { 'opacity': 0, 'visibility': 'hidden'};
        var end = { 'opacity': 1, 'visibility': 'visible'};

        $(options.tips).show();
        center(options.tips + ' > div');
        transition(options.tips , begin , end );

        begin = { 'transform': 'translateY(-50px)' };
        end = { 'transform': 'translateY(0)'};
        transition(options.tips + ' > div' , begin , end );
    }

    /**
     * 清空提示框
     * @method hide
     */
    var hide = function () {
        var begin = { 'opacity': 1, 'visibility': 'visible'};
        var end =  { 'opacity': 0, 'visibility': 'hidden'};

        transition(options.tips , begin , end );

        begin = { 'transform': 'translateY(0)' };
        end = { 'transform': 'translateY(-50px)'};
        transition(options.tips + ' > div' , begin , end );
        setTimeout(function () {
            $(options.tips).removeAttr('style');
            $(options.tips).html('');
        }, options.duration);
    }


    /**
     * 清空提示框
     * @method hide
     */
    var clean = function () {
        $(options.tips).removeAttr('style');
        $(options.tips).html('');
    }

    /**
     * 动态生成函数
     * @param {String} name 函数名字
     * @param {String} param 函数参数
     * @returns {*}
     */
    var dynamicFunction = function (name, param) {
        var param = param || '';
        var paramStr = "";
        var paramArr = param.split(",");

        for (var key in paramArr) {
            paramStr += '\"' + paramArr[key] + '\",';
        }

        paramStr = paramStr.substring(0, paramStr.length - 1);
        return Function('return ' + name + '(' + paramStr + ')')();
    }


    var transition = function (id, from, to, options) {
        var defaults = {
            easing: 'linear',
            duration: 300
        };

        options = $.extend( {}, defaults, options );

        $(id).css(from);
        setTimeout(function () {
            var effect = [ 'all',  options.duration + 'ms',  options.easing ].join(' ');
            var props = $.extend( {transition: effect}, to);

            $(id).css(props);
            setTimeout('tipsBox.callback(\''+id+'\')', options.duration);
        },1);
    };

    var callback = function (id) {
        $(id).css('transition', '');
    }

    /**
     * 浮动框
     * @method floating
     * @param {Object} object 参数
     */
    var floating = function (object) {
        var object = object || { 'title': '提示' ,'width': 450 ,'height': 200, 'template': '','data':{} };

        object.btnClose = object.btnClose || 1; //充许关闭
        object.bgClose = object.bgClose || 1; //充许背景并闭

        tpl.renderTpl(options.floating,object.template, {data: object.data });
        center(options.floating + ' > div');

        showFloating();
        return false;
    }

    /**
     * 显示浮动框
     * @method showFloating
     */
    var showFloating = function () {
        var begin = { 'opacity': 0, 'visibility': 'hidden'};
        var end = { 'opacity': 1, 'visibility': 'visible'};

        $(options.floating).show();
        tipsBox.center(options.floating + '> div');
        tipsBox.transition(options.floating , begin , end );

        begin = { 'transform': 'translateY(-50px)' };
        end = { 'transform': 'translateY(0)'};
        tipsBox.transition(options.floating + ' > div' , begin , end );
        $(options.floating + '> div').click(function (event) {
            event.stopPropagation();
        });

        $(options.floating).click(function (event) {
            event.stopPropagation();
            hideFloating();
        });
    }

    /**
     * 隐藏浮动框
     * @method hideFloating
     */
    var hideFloating = function () {
        var begin = { 'opacity': 1, 'visibility': 'visible'};
        var end =  { 'opacity': 0, 'visibility': 'hidden'};
        transition(options.floating , begin , end);
        begin = { 'transform': 'translateY(0)' };
        end = { 'transform': 'translateY(-50px)'};
        transition(options.floating + ' > div' , begin , end );
        setTimeout(function () {
            $(options.floating).removeAttr('style');
            $(options.floating).html('');
        },options.duration);
    }

    return {
        alert: alert
        ,confirm: confirm
        ,center: center
        ,hide: hide
        ,show: show
        ,loading: loading
        ,transition: transition
        ,callback: callback
        ,floating: floating
        ,hideFloating: hideFloating
        ,dynamicFunction: dynamicFunction
        ,clean: clean
        ,autoClose: autoClose
    }
})();






/**
 * base64 加密
 *
 * @author keepsilent
 * @version 1.0.0
 */

var base64 = function (){

    var base64EncodeChars = function(){
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    }

    var base64DecodeChars = function(){
        var dataDeco = new Array(
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
            52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
            -1,　0,　1,　2,　3,  4,　5,　6,　7,　8,　9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        return dataDeco;
    }

    var base64encode = function (str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if(i == len)
            {
                out += base64EncodeChars().charAt(c1 >> 2);
                out += base64EncodeChars().charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if(i == len)
            {
                out += base64EncodeChars().charAt(c1 >> 2);
                out += base64EncodeChars().charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars().charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars().charAt(c1 >> 2);
            out += base64EncodeChars().charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars().charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
            out += base64EncodeChars().charAt(c3 & 0x3F);
        }
        return out;
    }

    var base64decode = function (str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
            do {
                c1 = base64DecodeChars()[str.charCodeAt(i++) & 0xff];
            } while(i < len && c1 == -1);
            if(c1 == -1)
                break;
            do {
                c2 = base64DecodeChars()[str.charCodeAt(i++) & 0xff];
            } while(i < len && c2 == -1);
            if(c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if(c3 == 61)
                    return out;
                c3 = base64DecodeChars()[c3];
            } while(i < len && c3 == -1);
            if(c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if(c4 == 61)
                    return out;
                c4 = base64DecodeChars()[c4];
            } while(i < len && c4 == -1);
            if(c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }

    var utf16to8 = function (str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >>　6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >>　0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >>　6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >>　0) & 0x3F));
            }
        }
        return out;
    }

    var utf8to16 = function(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while(i < len) {
            c = str.charCodeAt(i++);
            switch(c >> 4)
            {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += str.charAt(i-1);
                break;
                case 12: case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
                case 14:
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }

    var encode = function (a) {
        return base64encode(utf16to8(a));
    }

    var decode = function (a) {
        return utf8to16(base64decode(a));
    }

    return{
        encode : encode,
        decode : decode
    }
}();
/**
 * 基础类函数
 *
 * @author keepsilent
 * @version 1.0.0
 */
var base = (function () {

    /**
     * 字符串是否在数组里
     * @method base.inArray
     * @param {Array} arr 数组
     * @param {String} obj 字符串
     * @returns {boolean}
     */
    var inArray = function (arr, obj) {
        for (var i in arr) {
            if (arr[i] == obj) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取url的get参数
     * @param  {String} name 参数名称
     * @return {String}
     */
    var getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    /**
     * 不四舍五入保留所需要的小数位数,如果是小数位都是0，格式化为正整数
     * @method setNumberDecimals
     * @param {Number} number 需要格式化的数字
     * @param {Number} decimal 保留小数位，10是一位，100是两位，默认是两位小数
     * @return {Number}
     */
    var setNumberDecimals = function(number,decimal){
        decimal = decimal || 2;
        number = (number != undefined && number != null && number != '') ? number : 0;

        if(number > parseInt(number) && number > 0) {
            number = getRound(number,decimal);
            return number.toFixed(decimal);
        }

        if(number < parseInt(number) && number < 0) {
            number = getRound(number,decimal);
            return number.toFixed(decimal);
        }

        return (parseInt(number)).toFixed(decimal);
    }

    var getRound = function (num, len) {
        return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
    }

    /**
     * 获取日期
     * @method getDateStr
     * @param {Number} offset 日期偏移量,0:代表今天, 1:代表明天
     * @return {String}
     */
    var getDate = function(offset) {
        var date = new Date();
        date.setDate(date.getDate() + offset); //获取offset天后的日期
        var y = date.getFullYear();
        var m = date.getMonth() + 1;//获取当前月份的日期
        var d = date.getDate();

        if(parseInt(m) < 10) {
            m =  '0'+m;
        }

        if(parseInt(d) < 10) {
            d =  '0'+d;
        }

        return y + "-" + m + "-" + d;
    }



    /**
     * 对日期进行格式化，
     * @param date 要格式化的日期
     * @param format 进行格式化的模式字符串
     *     支持的模式字母有：
     *     y:年,
     *     M:年中的月份(1-12),
     *     d:月份中的天(1-31),
     *     h:小时(0-23),
     *     i:分(0-59),
     *     s:秒(0-59),
     *     S:毫秒(0-999),
     *     q:季度(1-4)
     * @return String
     */
    var setDateFormat = function(format,time) {
        //time = time.replace(/-/g,':').replace(' ',':');
        //time = time.split(':');

        //var date = new Date(time[0],(time[1]-1),time[2],time[3],time[4],time[5]);
        var date = new Date(time);
        var map = {
            'Y': date.getFullYear(), //年
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "i": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        format = format.replace(/([yYMdhisqS])+/g, function(all, t){
            var v = map[t];
            if(v !== undefined){
                if(all.length > 1){
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                if(t === 'M' || t === 'd' || t === 'h' || t === 'i' || t === 's') {//时分秒
                    if(parseInt(map[t]) < 10 ) {
                        v = '0' + parseInt(map[t]);
                    }
                }
                return v;
            } else if(t === 'y'){
                return (date.getFullYear() + '').substr(3 - all.length);
            }
            return all;
        });
        return format;
    }


    /**
     * 获取数据长度
     * @method getDataLength
     * @param {Object} data
     */
    var getDataLength = function (data) {
        var len = 0;
        for(var i in data){
            len++;
        }
        return len;
    }

    /**
     * 跳转url
     * @method jumpUrl
     * @param {String} url 链接
     * @param {String} type 类型
     * @return {Bloon}
     */
    var jumpUrl = function (url, target) {
        var target = target || '_self';
        var a = document.createElement('a');
        a.setAttribute('target', target);// 设置跳转方式
        a.setAttribute('href', url);// 设置跳转链接
        a.click();
    }

    /**
     * 获取字符长度
     * @method getStrLen
     * @param {String} str 字符串
     */
    var getStrLen = function (str){
        var totallength = 0;
        for (var i = 0;i < str.length; i++) {
            var intCode = str.charCodeAt(i);
            if(intCode >= 0 && intCode <= 128) {
                totallength = totallength + 1;//非中文单个字符长度加 1
            } else {
                totallength = totallength + 2;//中文字符长度则加 2
            }
        }
        return totallength;
    }


    /**
     * 数组元素互换
     * @method swapItems
     * @param {Array} data 数组
     * @param {Number} index 数组索引
     * @return Array
     */
    var swapItems = function(data, index1, index2){
        data[index1] = data.splice(index2,1,data[index1])[0];
        return data;
    }

    /**
     * 删除左右两端的空格
     * @param {String} str 字符
     * @param {String} type 删除类型
     * @return {String}
     */
    var trim = function(str,type) {
        var regular = '';
        switch (type) {
            case ',':
                regular = /(^,*)|(,*$)/g;
                break;
            default:
                regular = /(^\s*)|(\s*$)/g;
                break;
        }

        return str.replace(regular, "");
    }

    /**
     * 删除左边的空格
     * @param {String} str 字符
     * @param {String} type 删除类型
     * @return {String}
     */
    var ltrim = function(str,type) {
        var regular = '';
        switch (type) {
            case ',':
                regular = /(^,*)/g;
                break;
            case 'br':
                regular = /(^[\<br\>]*)/g;
                break;
            default:
                regular = /(^\s*)/g;
                break;
        }

        return str.replace(regular,"");
    }

    /**
     * 删除右边的空格
     * @param {String} str 字符
     * @param {String} type 删除类型
     * @return {String}
     */
    var rtrim = function(str,type) {
        var regular = '';
        switch (type) {
            case ',':
                regular = /(,*$)/g;
                break;
            case ';':
                regular = /(;*$)/g;
                break;
            default:
                regular = /(\s*$)/g;
                break;
        }
        return str.replace(regular,"");
    }


    /**
     * 首字母大写
     * @method capitalize
     * @param {String} str 字符串
     * @return {String}
     */
    var capitalize = function (str) {
        return str.substring(0,1).toUpperCase()+str.substring(1);
    }

    /**
     * 是否空对象
     * @member isEmptyObject
     * @param {Object} obj 对象
     * @return boolen
     */
    var isEmptyObject = function (obj) {
        for(var key in obj){
            return false;
        }

        return true;
    }

    /**
     * 是否空值
     * @method isEmptyValue
     * @param {String} value 值
     * @return {Bloen}
     */
    var isEmptyValue = function (value) {
        if(value != '' && value != undefined && value != null) {
            return false;
        }

        return true;
    }

    /**
     * 是否空元素
     * @method isEmptyElement
     * @param {String} key 关键字
     */
    var isEmptyElement = function (key) {
        key = key.replace(/(^(\.|#)*)/g,"");
        var element = document.getElementById(key);
        if(element != null) {
            return false;
        }
        return true;
    }

    /**
     * 是否数字
     * @method isNumber
     * @param {Number} val 值
     * @return {boolean}
     */
    var isNumber = function(val,type) {
        var type = type || 'number';
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数

        if(type == 'decimal') {
            regPos = /^\d+(\.)?$/;
        }

        if(regPos.test(val)) {
            return true;
        }

        return false;
    }

    /**
     * 是否整数
     * @method isIntNum
     * @param {Number} val 值
     * @return {boolean}
     */
    var isIntNum = function(val){
        var regPos = /^\d+$/;
        if(regPos.test(val)){
            return true;
        }

        return false;
    }

    /**
     * 获取对象数据
     * @method getItemObject
     * @param {Object} item
     */
    var getItemObject = function (item) {
        var object = {};
        for(var i in item) {
            object[i] = '';
        }

        return object;
    }

    /**
     * 设置数字
     * @method setNumber
     * @param {Number} value 值
     * @param {Sting} type 类型
     * @return {Number}
     */
    var setNumber = function (value,type) {
        if(isEmptyValue(value)) {
            return  0;
        }

        type = type || 'int';
        if(type == 'int') {
            return parseInt(value);
        }

        return parseFloat(value);
    }

    /**
     * 获取值
     * @method getVal
     * @param {String} id
     * @param {String} type
     * @return {String}
     */
    var getVal = function (id,type) {
        var type = type || '';
        switch (type) {
            default:
                return $(id).val();
        }
    }

    /**
     * 移除HTML标签
     * @member removeHTMLTag
     * @param {String} str 字符
     * @return {String}
     */
    var removeHTMLTag = function(str) {
        if(isEmptyValue(str)) {
            return '';
        }
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/&lt;/ig,'');
        str=str.replace(/&gt;/ig,'');
        str=str.replace(/[div|\/div]/g,'');
        str=str.replace(/&lt;[ -~]*&gt;/ig,'');//去掉替换后的<>标签
        return str;
    }

    /**
     * 移除脚本
     * @return removeScript
     * @param {String} str 字符
     * @return {String}
     */
    var removeScript = function (str) {
        if(isEmptyValue(str)) {
            return '';
        }

        str=str.replace(/<script.*?>.*?<\/script>/ig,'');
        return str;
    }


    return {
        inArray: inArray
        ,getDate: getDate
        ,getQueryString: getQueryString
        ,setNumberDecimals: setNumberDecimals
        ,setDateFormat: setDateFormat
        ,getDataLength: getDataLength

        ,jumpUrl: jumpUrl
        ,getStrLen: getStrLen

        ,swapItems: swapItems
        ,trim: trim
        ,ltrim: ltrim
        ,rtrim: rtrim
        ,capitalize: capitalize

        ,isNumber: isNumber
        ,isIntNum: isIntNum
        ,isEmptyValue: isEmptyValue
        ,isEmptyObject: isEmptyObject
        ,isEmptyElement: isEmptyElement

        ,getVal:getVal
        ,getItemObject: getItemObject

        ,setNumber: setNumber
        ,removeHTMLTag: removeHTMLTag
        ,removeScript: removeScript
    }
})();

/**
 * 系统配置
 *
 * @author keepsilent
 * @version 1.0.0
 */
var config = (function () {

    var options = {
        width: $(window).width()
        ,height: $(window).height()
        ,domain: 'www.didaolan.cn'
        ,templateUrl: 'dist/template/'
        ,apiUrl: 'https://api.didaolan.cn/v1/'
        //,apiUrl: 'http://m.com/api/public/v1/'
        ,debug: (window.location.host == 'm.com') ? 1 : 0
    }

     /**
     * 系统初始化
     * @method init
     */
    var init = function () {
        ddlComic.init();
        ddlNovel.init();

        window.onresize = function() {
            options.width = $(window).width();
            options.height = $(window).height();
        }

        window.addEventListener('online',  function(){});//在线中
        window.addEventListener('offline', function(){});//离线中
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

    /**
     * 获取 Api 地址
     * @method getApiUrl
     * @param {String} url 地址
     * @return {String}
     */
    var getApiUrl = function (url) {
        return options.apiUrl+url;
    }

    return {
        init: init
        ,getOptions: getOptions
        ,getApiUrl: getApiUrl
    }
})();


$(document).ready(function(){
    config.init();
    if(!base.isEmptyValue(chrome.runtime)) {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            switch (request.type) {
                case 'personalSetting':
                    ddlComic.settings(request.key,request.value);
                    break;
            }
        });
    }
});

/**
 * cookie
 * 操作cookie的添加、修改和删除
 *
 * @author keepsilent
 * @version 1.0.0
 */
var cookie = (function () {

    /**
     * 设置cookie的数据
     * @param {String} key 关键字
     * @param {String} value 值
     */
    var set = function (key, value) {
        if(!base.isEmptyValue(chrome.storage)) {
            var object = {};
            object[key] = value;
            chrome.storage.local.set(object);
        }
    }

    /**
     * 获得cookie值
     * @param {String} key 关键字
     * @returns {null}
     */
    var get = function (key,callback) {
        if(!base.isEmptyValue(chrome.storage)) {
            chrome.storage.local.get(key, function (data) {
                callback(data);
            });
        }
    }

    /**
     * 删除cookie值
     * @param {String} key 关键字
     */
    var del = function (key) {
        var val = get(key);
        var exp = new Date();
        exp.setTime(exp.getTime() - 1000);
        if (val != null) {
            document.cookie = key + "=" + val + ";expires=" + exp.toGMTString() + ";path=/;domain=" + window.location.host;
        }
    }

    return {
        set: set,
        get: get,
        del: del
    }
})();

/**
 * Ajax 请求
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ajRequest = (function () {

    /**
     * Post 请求
     * @method post
     * @param {String} url 链接
     * @param {String} data 数据
     * @param {Function} callback 回调函数
     */
    var post = function (url,data,success,error,complete) {
        if(window.location.host === 'm.com') { //本地调式
            ajaxPost({url: config.getApiUrl(url),data: data,success:success,error:error,complete: complete});
            return false;
        }


        chrome.runtime.sendMessage({url: config.getApiUrl(url), data:data},function(result) {
            console.log('chrome.runtime.sendMessage result',result);
            if(!base.isEmptyValue(result)) {
                success(result);
            } else {
                error(result);
            }
        });
    }

    /**
     * get 请求
     * @method post
     * @param {String} url 链接
     * @param {String} data 数据
     * @param {Function} callback 回调函数
     */
    var get = function (url,data,callback) {
        if(window.location.host === 'm.com') { //本地调式
            ajaxGet({url: url,data: data,success:callback});
            return false;
        }

        chrome.extension.sendMessage({url: url, data:data},function(result) {
            callback(result);
        });
    }

    /**
     * Ajax Post 请求
     * @method ajaxPost
     * @param {Obejct} object
     */
    var ajaxPost = function (object) {
        var url = object.url;
        var data = object.data;
        var sCallback = object.success;
        var eCallback = object.error;
        var cCallback = object.complete;
        var timeout = object.timeout || 5000;

        $.ajax({type: 'post',url: url, data: data, timeout: timeout, dataType: 'json',success:function (result) {
            if(typeof sCallback === "function") {
                sCallback(result);
            }

        }, error: function (result) {
            if(typeof eCallback === "function") {
                eCallback(result);
            }
        }, complete: function () {
            if(typeof cCallback === "function") {
                cCallback();
            }
        }});
    }


    /**
     * Ajax Get 请求
     * @method ajaxGet
     * @param {Obejct} object
     */
    var ajaxGet = function (object) {
        var url = object.url;
        var data = object.data;
        var sCallback = object.success;
        var eCallback = object.error;
        var cCallback = object.complete;


        $.ajax({type: 'get',url: url, data: data, dataType: 'jsonp',success:function (result) {
            if(typeof sCallback === "function") {
                sCallback(result);
            }

        }, error: function (result) {
            if(typeof eCallback === "function") {
                eCallback(result);
            }
        }, complete: function () {
            if(typeof cCallback === "function") {
                cCallback();
            }
        }});
    }

    /**
     * 信息处理
     * @method message
     * @param {Array} data 数组数据
     */
    var message = function (data) {
        var status = data['status'];
        switch (status) {
            default:
                tipsBox.alert(data['msg']);
                break;
        }
    }


    return {
        get: get
        ,post: post
    }
})();







/**
 * 模板 渲染
 *
 * @author keepsilent
 * @version 1.0.0
 */
var tpl = (function () {

    var options = {}

    /**
     * 渲染模板
     * @method renderTpl
     * @param {Stinrg} id  元素标识
     * @param {String} tpl 模板名称
     * @param {Object} data 数据
     * @param {String} type 类型
     */
    var renderTpl = function (id, tpl, data, type) {
        var data = data || {};
        var tpl = config.getOptions('templateUrl') + tpl;
        var html = template(tpl, data);
        var type = type || 0;

        // console.log(id, tpl, data, type);
        switch (type) {
            case 0: //替换元素
                $(id).html(html);
                break;
            case 1: //插入元素到尾部
                $(id).append(html);
                break;
            case 2: //插件元素到头部
                $(id).prepend(html);
                break;
            case 3: //插入元素之后
                $(id).after(html);
                break;
            case 4: //插入元素之前
                $(id).before(html);
                break;
        }
    }

    /**
     * 获取模版路径
     * @method getTplUrl
     * @param {String} url
     */
    var getTpl = function (tpl,data) {
        var tpl = config.getOptions('templateUrl') + tpl;
        return template(tpl, data);


    }

    return {
        getTpl: getTpl
        ,renderTpl: renderTpl
    }
})();


template.helper('setCatalogCurrentPage', function (link,type) {
    var url = ddlUnit.getPageLink(window.location.href,type);

    if(type != 'fmhuaaa' &&  type != 'acgn' && type != 'ikkdm') {
        link = ddlUnit.getPageLink(link,type);
    }

    link = link.replace(/(https:|http:)/i, '');
    url = url.replace(/(https:|http:)/i, '');

    if(url == link) {
        return 'active';
    }

    return '';
});

template.helper('setTitle', function (title) {
    if(base.isEmptyValue(title)) {
        return title;
    }

    return base.trim(title.replace('正文卷',''));
});
