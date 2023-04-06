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
            'cartoonmad': { title: '動漫狂',url: 'https://www.cartoonmad.com/',describe: '免費動畫漫畫分享社群 !  ',type: 'comic'},
            'ikkdm': { title: 'KuKu动漫',url: 'https://manhua.kukudm.com/',describe: 'KuKu动漫,提供海量漫画,更新最快在线漫画欣赏,是动漫爱好者的交流互动平台',type: 'comic'},
            'acgn': { title: '動漫戲說',url: 'https://comic.acgn.cc/',describe: '提供免費在線漫畫、線上漫畫(Comic) ~ 線上觀看! ',type: 'comic'},
            'book_sfacg': { title: 'SF轻小说',url: 'https://book.sfacg.com/',describe: 'SF轻小说网提供海量日本轻小说,国产轻小说,动漫小说,轻小说TXT下载,轻小说在线阅读',type: 'novel'},
            '173kt':{ title: '笔趣阁',url: 'http://www.173kt.net/',describe: '笔趣阁是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',type: 'novel'},
            'dushuge':{ title: '读书阁',url: 'https://www.dushuge.org/',describe: '读书阁是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',type: 'novel'},

            'dmzj': { title: '动漫之家',url: 'https://www.dmzj.com/',describe: '',type: 'ignore'},
            'biqugewu':{ title: '笔趣阁',url: 'http://www.biqugewu.net/',describe: '',type: 'ignore'},
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
                link = link.replace(/#@page=[0-9]+/i, '');
                break;
            case 'acgn':
                link = link.replace(/#show/i, '');
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
            case 'cartoonmad':
                url = url.replace(/[0-9]+\.html/i,'');
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


