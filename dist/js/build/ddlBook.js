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