/*TMODJS:{"version":"1.0.0"}*/
!function () {

    function template (filename, content) {
        return (
            /string|function/.test(typeof content)
            ? compile : renderFile
        )(filename, content);
    };


    var cache = template.cache = {};
    var String = this.String;

    function toString (value, type) {

        if (typeof value !== 'string') {

            type = typeof value;
            if (type === 'number') {
                value += '';
            } else if (type === 'function') {
                value = toString(value.call(value));
            } else {
                value = '';
            }
        }

        return value;

    };


    var escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    };


    function escapeFn (s) {
        return escapeMap[s];
    }


    function escapeHTML (content) {
        return toString(content)
        .replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    };


    var isArray = Array.isArray || function(obj) {
        return ({}).toString.call(obj) === '[object Array]';
    };


    function each (data, callback) {
        if (isArray(data)) {
            for (var i = 0, len = data.length; i < len; i++) {
                callback.call(data, data[i], i, data);
            }
        } else {
            for (i in data) {
                callback.call(data, data[i], i);
            }
        }
    };


    function resolve (from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/;
        var dirname = ('./' + from).replace(/[^/]+$/, "");
        var filename = dirname + to;
        filename = filename.replace(/\/\.\//g, "/");
        while (filename.match(DOUBLE_DOT_RE)) {
            filename = filename.replace(DOUBLE_DOT_RE, "/");
        }
        return filename;
    };


    var utils = template.utils = {

        $helpers: {},

        $include: function (filename, data, from) {
            filename = resolve(from, filename);
            return renderFile(filename, data);
        },

        $string: toString,

        $escape: escapeHTML,

        $each: each
        
    };


    var helpers = template.helpers = utils.$helpers;


    function renderFile (filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: 'Render Error',
            message: 'Template not found'
        });
        return data ? fn(data) : fn; 
    };


    function compile (filename, fn) {

        if (typeof fn === 'string') {
            var string = fn;
            fn = function () {
                return new String(string);
            };
        }

        var render = cache[filename] = function (data) {
            try {
                return new fn(data, filename) + '';
            } catch (e) {
                return showDebugInfo(e)();
            }
        };

        render.prototype = fn.prototype = utils;
        render.toString = function () {
            return fn + '';
        };

        return render;
    };


    function showDebugInfo (e) {

        var type = "{Template Error}";
        var message = e.stack || '';

        if (message) {
            // 利用报错堆栈信息
            message = message.split('\n').slice(0,2).join('\n');
        } else {
            // 调试版本，直接给出模板语句行
            for (var name in e) {
                message += "<" + name + ">\n" + e[name] + "\n\n";
            }  
        }

        return function () {
            if (typeof console === "object") {
                console.error(type + "\n\n" + message);
            }
            return type;
        };
    };


    template.get = function (filename) {
        return cache[filename.replace(/^\.\//, '')];
    };


    template.helper = function (name, helper) {
        helpers[name] = helper;
    };


    if (typeof define === 'function') {define(function() {return template;});} else if (typeof exports !== 'undefined') {module.exports = template;} else {this.template = template;}
    
    /*v:1*/
template('dist/template/comic/catalog',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$each=$utils.$each,catalog=$data.catalog,item=$data.item,index=$data.index,$index=$data.$index,type=$data.type,sort=$data.sort,total=$data.total,$out='';$out+='<h3>';
$out+=$escape($helpers. setTitle(title ));
$out+='<i></i></h3> <div class="ddl-comic-catalog-main-wrap"> <div class="ddl-comic-catalog-main ddl-scrollbar"> ';
$each(catalog,function(item,index,$index){
$out+=' <span data-href="';
$out+=$escape(item.link);
$out+='" class="';
$out+=$escape($helpers. setCatalogCurrentPage(item.link,type ));
$out+='">「';
$out+=$escape(sort == 'desc' ? total - index : index + 1);
$out+='」';
$out+=$escape(item.title);
$out+='</span> ';
});
$out+=' </div> </div> <p>共<i class="num">';
$out+=$escape(total);
$out+='</i>话<i class="ddl-icon-up"></i><em id="ddl-comic-catalog-sort" data-sort="';
$out+=$escape(sort);
$out+='" data-type="';
$out+=$escape(type);
$out+='">';
$out+=$escape(sort == 'desc' ? '倒序' : '正序');
$out+='</em></p>';
return new String($out);
});/*v:1*/
template('dist/template/comic/catalog_item',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,catalog=$data.catalog,item=$data.item,index=$data.index,$index=$data.$index,$escape=$utils.$escape,type=$data.type,sort=$data.sort,total=$data.total,$out='';$each(catalog,function(item,index,$index){
$out+=' <span data-href="';
$out+=$escape(item.link);
$out+='" class="';
$out+=$escape($helpers. setCatalogCurrentPage(item.link,type ));
$out+='">「';
$out+=$escape(sort == 'desc' ? total - index : index + 1);
$out+='」';
$out+=$escape(item.title);
$out+='</span> ';
});
return new String($out);
});/*v:1*/
template('dist/template/comic/index',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,comic=$data.comic,$each=$utils.$each,list=$data.list,item=$data.item,index=$data.index,$index=$data.$index,space=$data.space,type=$data.type,total=$data.total,$out='';$out+='<div class="ddl-comic-plug"> <div class="ddl-comic-wrap" id="ddl-comic-wrap"> <div class="ddl-comic-inner"> <div class="ddl-comic-main" id="ddl-comic-main"> <div class="ddl-comic-top"> <div class="ddl-comic-logo"><span>C</span>omi<span>c</span>++ </div> <div class="ddl-comic-title"> <span id="ddl-comic-title" data-href="';
$out+=$escape(comic.home);
$out+='" title="返回 ';
$out+=$escape(comic.title);
$out+=' 目录">';
$out+=$escape(comic.title);
$out+='</span> - <span id="ddl-comic-subtitle">';
$out+=$escape(comic.chapter);
$out+='</span> </div> <span id="ddl-comic-exit-btn" class="iconfont icon-exit" title="退出"></span> </div> ';
$each(list,function(item,index,$index){
$out+=' <div class="ddl-comic-image-box" id="ddl-comic-item-';
$out+=$escape(index);
$out+='" data-url="';
$out+=$escape(item.url);
$out+='" data-type="';
$out+=$escape(item.type);
$out+='" data-status="';
$out+=$escape(item.status);
$out+='" data-mode="';
$out+=$escape(item.mode);
$out+='" style="';
$out+=$escape(space);
$out+='"> <div class="ddl-loading-spinner" style="margin-left: -55px;font-size: 60px;"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div> <div class="ddl-logo">Comic++</div> </div> ';
});
$out+=' <div class="ddl-comic-bottom"> <p class="ddl-comic-over-tips">已是最后一话</p> <p class="ddl-comic-next-tips"><a href="">点击进入下一话<span class="iconfont icon-fanhui2"></span></a></p> </div> </div> <div id="ddl-comic-page"> <span id="ddl-comic-current-page">1</span><em>/</em><span id="ddl-comic-total-page">1</span> </div> </div> <input type="hidden" id="ddl-comic-type" value="';
$out+=$escape(type);
$out+='"> <input type="hidden" id="ddl-comic-total" value="';
$out+=$escape(total);
$out+='"> </div> <div id="ddl-comic-menu"> <ul class="ddl-comic-menu-inner"> <li class="ddl-comic-menu-btn ';
$out+=$escape(comic.prev == undefined ? 'hide': '');
$out+='"><span class="iconfont icon-up" id="ddl-comic-prev-btn" data-href="';
$out+=$escape(comic.prev);
$out+='"></span></li> <li class="ddl-comic-menu-btn ';
$out+=$escape(comic.next == undefined ? 'hide': '');
$out+='"><span class="iconfont icon-down" id="ddl-comic-next-btn" data-href="';
$out+=$escape(comic.next);
$out+='"></span></li> <li class="ddl-comic-menu-btn"><span class="iconfont icon-on-light" id="ddl-comic-light-btn" data-status="on"></span></li> ';
if(comic.iframe == true){
$out+=' <li class="ddl-comic-menu-btn"><span class="iconfont icon-favorfill" id="ddl-comic-favor-btn" data-load="0" data-select="" data-index-link="';
$out+=$escape(comic.home);
$out+='" ></span></li> <li class="ddl-comic-menu-btn"> <span class="iconfont icon-map" id="ddl-comic-catalog-switch" data-load="0" data-status="0"></span> <i class="ddl-comic-right-icon"></i> <div class="ddl-comic-catalog" id="ddl-comic-catalog"></div> </li> ';
}
$out+=' <li class="ddl-comic-menu-btn"><span class="iconfont icon-shang" id="ddl-comic-play-btn"></span></li> </ul> </div> <div id="ddl-comic-launch"> <span class="iconfont icon-comic"></span> </div> <div class="tips-box" id="ddl-tips-box"></div> <div class="floating-box" id="ddl-floating-box"></div> </div>';
return new String($out);
});/*v:1*/
template('dist/template/comic/item',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,index=$data.index,url=$data.url,type=$data.type,status=$data.status,mode=$data.mode,space=$data.space,$out='';$out+='<div class="ddl-comic-image-box" id="ddl-comic-item-';
$out+=$escape(index);
$out+='" data-url="';
$out+=$escape(url);
$out+='" data-type="';
$out+=$escape(type);
$out+='" data-status="';
$out+=$escape(status);
$out+='" data-mode="';
$out+=$escape(mode);
$out+='" style="';
$out+=$escape(space);
$out+='"> <div class="ddl-loading-spinner" style="margin-left: -55px;font-size: 60px;"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div> <div class="ddl-logo">Comic++</div> </div>';
return new String($out);
});/*v:1*/
template('dist/template/comic/play','<div class="ddl-play-wrap user-select"> <span class="iconfont icon-close" id="ddl-play-close-btn"></span> <img src="https://www.didaolan.cn/dist/images/weixin_play.png" title="微信打赏" width="250" height="213" draggable="false"/> <h3 class="tc">微信打赏</h3> <p class="tc">您的支持是我们最大的肯定</p> </div>');/*v:1*/
template('dist/template/novel/catalog_item',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,catalog=$data.catalog,items=$data.items,$index=$data.$index,$escape=$utils.$escape,item=$data.item,$out='';$each(catalog,function(items,$index){
$out+=' <div class="ddl-novel-catalog-item"> <div class="ddl-catalog-subtitle-btn"><p class="ddl-text">';
$out+=$escape(items.title);
$out+='<span class="iconfont icon-fanhui3"></span></p></div> <ul style="display: none;"> ';
$each(items.list,function(item,$index){
$out+=' ';
if(item.title != '' && item.title != undefined && item.title != null){
$out+=' <li><a class="ddl-text" href="';
$out+=$escape(item.link);
$out+='">';
$out+=$escape(item.title);
$out+='</a></li> ';
}
$out+=' ';
});
$out+=' </ul> </div> ';
});
return new String($out);
});/*v:1*/
template('dist/template/novel/index',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,book=$data.book,$out='';$out+='<div class="ddl-novel-wrap" id="ddl-novel-wrap"> <div class="ddl-novel-inner" id="ddl-novel-inner"> <div class="ddl-novel-header"> <div class="ddl-novel-title ddl-text" id="ddl-novel-title">';
$out+=$escape(book.chapter);
$out+='</div> <div class="ddl-novel-info" id="ddl-novel-info"> <span class="ddl-text">小说: <em id="ddl-novel-book-name">';
$out+=$escape(book.title);
$out+='</em></span> <span class="ddl-text">字数: <em id="ddl-novel-font-num">';
$out+=$escape(book.num);
$out+='</em> 字</span> <span class="ddl-novel-loaded-box" style="display: none;" > <span class="ddl-text">作者: <em id="ddl-novel-author">--</em></span> <span class="ddl-text">状态: <em id="ddl-novel-status">--</em></span> </span>  </div> </div> <div class="ddl-novel-content ddl-text" id="ddl-novel-content"></div> </div>  <div class="ddl-novel-footer-menu" id="ddl-novel-footer-menu"> <ul> <li class="ddl-novel-prev-btn"> <a class="ddl-text" href="';
$out+=$escape(book.prev);
$out+='">上一章</a> </li> <li class="ddl-novel-catalog-btn"> <span class="ddl-left-line"></span> <a class="ddl-text" href="';
$out+=$escape(book.catalog);
$out+='" target="_blank">目录</a> <span class="ddl-right-line"></span> </li> <li class="ddl-novel-next-btn"> <a class="ddl-text" href="';
$out+=$escape(book.next);
$out+='">下一章</a> </li> </ul> </div>  <div class="ddl-novel-left-menu" id="ddl-novel-left-menu"> <ul> <li class="ddl-novel-catalog-btn ddl-setting-btn" data-type="catalog-box" data-value="1"> <div> <p class="iconfont icon-fenleimulu"></p> <p class="ddl-text">目录</p> </div> </li> <li class="ddl-novel-setting-btn ddl-setting-btn" data-type="setting-box" data-value="1"> <div> <p class="iconfont icon-setup_icon"></p> <p class="ddl-text">设置</p> </div> </li> <li class="ddl-novel-book-btn" > <a href="';
$out+=$escape(book.catalog);
$out+='" target="_blank"> <p class="iconfont icon-shu2"></p> <p class="ddl-text">书页</p> </a> </li> <li class="ddl-novel-favoer-btn" id="ddl-comic-favor-box"> <a id="ddl-comic-favor-btn" data-load="0" data-select href="javascript:void(0);"> <p class="iconfont icon-favor"></p> <p class="ddl-text">追书</p> </a> </li> <li class="ddl-novel-prev-btn"> <a href="';
$out+=$escape(book.prev);
$out+='"> <p class="iconfont icon-up"></p> <p class="ddl-text">上章</p> </a> </li> <li class="ddl-novel-next-btn"> <a href="';
$out+=$escape(book.next);
$out+='"> <p class="iconfont icon-down"></p> <p class="ddl-text">下章</p> </a> </li> </ul> </div>  <div class="ddl-novel-right-menu" id="ddl-novel-right-menu"> <ul> <li class="ddl-novel-play-btn"> <p class="iconfont icon-shang1"></p> <p class="ddl-text">打赏</p> </li> <li class="ddl-novel-appraise-btn"> <p class="iconfont icon-haoping4"></p> <p class="ddl-text">好评</p> </li> <li class="ddl-novel-back-btn"> <p class="iconfont icon-xiangshang"></p> </li> </ul> </div>  <div class="ddl-novel-catalog" > <div class="ddl-novel-catalog-inner"> <div class="ddl-novel-catalog-header"> <span class="catalog-title ddl-text">目录</span> <span class="iconfont icon-close catalog-close-btn ddl-setting-btn" title="关闭" data-type="catalog-box" data-value="0"></span> </div> <div class="ddl-novel-catalog-main"> <div class="ddl-loading-spinner" style="margin-left: -55px;font-size: 60px;"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div> </div> </div> </div>  <div class="ddl-novel-setting"> <div class="ddl-novel-setting-inner"> <div class="ddl-novel-setting-header"> <span class="setting-title ddl-text">设置</span> <span class="iconfont icon-close setting-close-btn ddl-setting-btn" title="关闭" data-type="setting-box" data-value="0"></span> </div> <div class="ddl-novel-setting-main"> <ul> <li> <label class="ddl-text">使用语言</label> <span class="ddl-setting-btn" data-type="langue" data-value="chinese">简体</span> <span class="ddl-setting-btn" data-type="langue" data-value="traditional">繁體</span> </li> <li> <label class="ddl-text">正文字体</label> <span class="ddl-setting-btn ddl-text" data-type="font-family" data-value="1">雅黑</span> <span class="ddl-setting-btn ddl-text" data-type="font-family" data-value="2">宋体</span> <span class="ddl-setting-btn ddl-text" data-type="font-family" data-value="3">楷书</span> </li> <li> <label class="ddl-text">字体大小</label> <div class="ddl-novel-set-box"> <em class="ddl-setting-btn iconfont icon-yueduye_zitijianxiao" data-type="font-size" data-value="minus"></em> <em class="ddl-font-size-text">18</em> <em class="ddl-setting-btn iconfont icon-yueduye_zitizengda" data-type="font-size" data-value="plus"></em> <i></i> <i></i> </div> </li> <li> <label class="ddl-text">页面宽度</label> <div class="ddl-novel-set-box"> <em class="ddl-setting-btn iconfont icon-yueduye_yemiansuoxiao" data-type="page-width" data-value="minus"></em> <em class="ddl-page-width-text">800</em> <em class="ddl-setting-btn iconfont icon-yueduye_yemianzengda" data-type="page-width" data-value="plus"></em> <i></i> <i></i> </div> </li> </ul> <div class="ddl-save-box"> <span class="ddl-setting-btn ddl-text" data-type="save" data-value="1">保存</span> <span class="ddl-setting-btn ddl-text" data-type="setting-box" data-value="0">取消</span> </div> </div> </div> </div> </div> <div id="ddl-comic-launch"> <span class="iconfont icon-comic"></span> </div> <div class="tips-box" id="ddl-tips-box"></div> <div class="floating-box" id="ddl-floating-box"></div>';
return new String($out);
});

}()