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

        //console.log('getPageLink',linkFormat,link);
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

            case '77mh':
                url = url.replace(/#@page=[0-9]+/i,'');
                break;
            case 'sfacg':
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

        //console.log('getPageLinkFormat',url);
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


