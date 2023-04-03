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

        //console.log('createChildCatalog',item);
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