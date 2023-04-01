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
    
    /*v:56*/
template('dist/template/favor/index',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,item=$data.item,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="ddl-comic-favor"> <p class="ddl-comic-favor-head">今天有<i id="ddl-comic-updated-num">0本</i>漫画更新。<span class="iconfont icon-bianjishujia fr" id="ddl-favor-opera-btn" data-status="normal"></span></p> <ul class="ddl-scrollbar"> ';
$each(list,function(item,$index){
$out+=' <li class="item-box" data-url="';
$out+=$escape(item.home);
$out+='"> <h3 class="title">';
$out+=$escape($helpers. setTitle(item.title ));
$out+='</h3> <p class="from">';
$out+=$escape($helpers. getTimeAgo(item.current.time ));
$out+=' ';
$out+=$escape($helpers. getSiteField(item.type,'title' ));
$out+=' ';
$out+=$escape(item.current.type != '正文卷'? item.current.type: '');
$out+='</p> <p class="updated" style="';
$out+=$escape((item.updated == true) ? 'color: #ffc459;': '');
$out+='">更新至: ';
$out+=$escape($helpers. resetChapterName(item.last.title,item.title ));
$out+='</p> <span class="continue-btn" data-url="';
$out+=$escape(item.current.url);
$out+='">继续阅读</span> <span class="delete-btn" data-url="';
$out+=$escape(item.home);
$out+='">移除</span> <!--<img class="cover" src="';
$out+=$escape(item.cover ? item.cover: './dist/images/default_cover.png');
$out+='" width="70">--> <img class="cover" src="./dist/images/default_cover.png" data-src="';
$out+=$escape(item.cover);
$out+='" width="70"> </li> ';
});
$out+=' </ul> </div>';
return new String($out);
});/*v:2*/
template('dist/template/favor/nothing','<div class="ddl-comic-favor-nothing"> <p class="iconfont icon-meiyoushu"></p> <p>Σ(ﾟдﾟ;) 书架空空～</p> </div>');/*v:51*/
template('dist/template/reader/index',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,item=$data.item,index=$data.index,$index=$data.$index,space=$data.space,total=$data.total,type=$data.type,$out='';$out+='<div class="ddl-comic-plug"> <div class="ddl-comic-wrap" id="ddl-comic-wrap"> <div class="ddl-comic-inner"> <div class="ddl-comic-main" id="ddl-comic-main"> <div class="ddl-comic-top"> <div class="ddl-comic-logo"><span>C</span>omi<span>c</span>++ </div> <div class="ddl-comic-title"> <span id="ddl-comic-title">';
$out+=$escape(title);
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
$out+='"> <div class="ddl-loading-spinner" style="margin-left: -55px;font-size: 60px;"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> index.html item.html play.html powerange.html <div class="rect5"></div> </div> <div class="ddl-logo">Comic++</div> </div> ';
});
$out+=' <div class="ddl-comic-bottom"> <p class="ddl-comic-over-tips" style="display: block;">Σ(ﾟдﾟ;) 没有了</p> </div> </div> <div id="ddl-comic-page"> <span id="ddl-comic-current-page">1</span><em>/</em><span id="ddl-comic-total-page">';
$out+=$escape(total);
$out+='</span> </div> </div> <input type="hidden" id="ddl-comic-type" value="';
$out+=$escape(type);
$out+='"> <input type="hidden" id="ddl-comic-total" value="';
$out+=$escape(total);
$out+='"> </div> <div id="ddl-comic-launch"> <span class="iconfont icon-comic"></span> </div> <div id="ddl-comic-menu"> <ul class="ddl-comic-menu-inner"> <li class="ddl-comic-menu-btn"><span class="iconfont icon-on-light" id="ddl-comic-light-btn" data-status="on"></span></li> <li class="ddl-comic-menu-btn"> <span class="iconfont icon-setting" id="ddl-comic-setting-btn" data-status="0"></span> <i class="ddl-comic-right-icon"></i> <div class="ddl-comic-reader-setting" id="ddl-comic-reader-setting"> <h3>设置</h3> <div class="ddl-comic-reader-setting-inner"> <dl> <dd>缩放<div class="ddl-comic-powerange-box" id="ddl-comic-reader-zoom-box"></div></dd> <dd>间距<div class="ddl-comic-powerange-box" id="ddl-comic-reader-space-box"></div></dd> </dl> <span class="restore-btn" id="ddl-comic-restore-btn">还原设置</span> </div> </div> </li> <li class="ddl-comic-menu-btn"><span class="iconfont icon-shang" id="ddl-comic-play-btn"></span></li> </ul> </div>  <div class="floating-box" id="ddl-floating-box"></div> </div>';
return new String($out);
});/*v:1*/
template('dist/template/reader/item',function($data,$filename
/*``*/) {
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
template('dist/template/reader/play','<div class="ddl-play-wrap user-select"> <span class="iconfont icon-close" id="ddl-play-close-btn"></span> <img src="https://www.didaolan.cn/dist/images/weixin_play.png" title="微信打赏" width="250" height="213" draggable="false"/> <h3 class="tc">微信打赏</h3> <p class="tc">您的支持是我们最大的肯定</p> </div>');/*v:1*/
template('dist/template/reader/powerange',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,key=$data.key,unit=$data.unit,$out='';$out+='<input type="text" id="';
$out+=$escape(key);
$out+='"> <em><i id="';
$out+=$escape(key);
$out+='-value">0</i>';
$out+=$escape(unit);
$out+='</em>';
return new String($out);
});/*v:75*/
template('dist/template/search/item',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,items=$data.items,$index=$data.$index,$escape=$utils.$escape,item=$data.item,$out='';$each(list,function(items,$index){
$out+=' <div class="ddl-comic-search-item-box"> <h3><a href="';
$out+=$escape(items.link);
$out+='" target="_blank">';
$out+=$escape(items.title);
$out+=' ';
$out+=$escape(items.catalog.title != '正文卷'? '- '+items.catalog.title : '');
$out+='</a></h3> <div> <p> <span>作者: </span><a href="javascript:void(0);" class="search-author-btn">';
$out+=$escape(items.author || '--');
$out+='</a> <span class="ml-15">更新至: </span><a href="';
$out+=$escape(items.last.link);
$out+='" target="_blank">';
$out+=$escape(items.last.title);
$out+='</a> </p> <p> <span>状态: </span><a href="';
$out+=$escape(items.link);
$out+='" target="_blank">';
$out+=$escape(items.status);
$out+='</a> <span class="ml-15">来源: </span><a href="';
$out+=$escape($helpers. getSiteField(items.type,'url' ));
$out+='" target="_blank">';
$out+=$escape($helpers. getSiteField(items.type,'title' ));
$out+='</a> </p> <p class="intro">';
$out+=$escape(items.intro);
$out+='</p> <p class="catalog"> ';
$each(items.catalog.list,function(item,$index){
$out+=' <a href="';
$out+=$escape(item.link);
$out+='" target="_blank">';
$out+=$escape(item.title);
$out+='</a> ';
});
$out+=' ';
if(items.total > 16){
$out+=' <a class="unfold-btn" href="javascript:void(0);">展开+</a> <a class="fewer-btn" href="javascript:void(0);">收起-</a> ';
}
$out+=' </p> <a href="';
$out+=$escape(items.link);
$out+='" target="_blank" style="font-size: 0;"><img src="./dist/images/default_cover.png" data-src="';
$out+=$escape(items.cover);
$out+='" class="cover" width="141" height="187"></a> </div> </div> ';
});
return new String($out);
});/*v:2*/
template('dist/template/search/loading','<div class="ddl-loading-spinner" style="margin-left: -55px;font-size: 60px;"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>');/*v:4*/
template('dist/template/search/nothing','<div class="ddl-comic-favor-nothing"> <p class="iconfont icon-meiyoushu" style="margin-top:10%;"></p> <p style="margin-top:20px;">Σ(ﾟдﾟ;) 没有搜索到～</p> </div>');/*v:8*/
template('dist/template/site/index',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,item=$data.item,index=$data.index,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="ddl-comic-site"> <div class="ddl-comic-site-head"> <span class="ddl-comic-site-tab active" data-type="all">全部</span> <span class="ddl-comic-site-tab" data-type="comic">漫画</span> <span class="ddl-comic-site-tab" data-type="novel">小说</span> </div> <ul class="ddl-scrollbar"> ';
$each(list,function(item,index,$index){
$out+=' ';
if(item.type != 'ignore'){
$out+=' <li class="ddl-comic-site-jump" data-url="';
$out+=$escape(item.url);
$out+='"> <h3 class="title">';
$out+=$escape(item.title);
$out+='</h3> <p class="from">';
$out+=$escape(item.describe);
$out+='</p> <div class="cover" style="background-image:url(\'./dist/images/site/';
$out+=$escape(index);
$out+='.png\'); ';
$out+=$escape($helpers. setBackgroundAuto(index ));
$out+='"></div> </li> ';
}
$out+=' ';
});
$out+=' </ul> </div>';
return new String($out);
});/*v:3*/
template('dist/template/site/items',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,item=$data.item,index=$data.index,$index=$data.$index,$escape=$utils.$escape,$out='';$each(list,function(item,index,$index){
$out+=' ';
if(item.type != 'ignore'){
$out+=' <li class="ddl-comic-site-jump" data-url="';
$out+=$escape(item.url);
$out+='"> <h3 class="title">';
$out+=$escape(item.title);
$out+='</h3> <p class="from">';
$out+=$escape(item.describe);
$out+='</p> <div class="cover" style="background-image:url(\'./dist/images/site/';
$out+=$escape(index);
$out+='.png\'); ';
$out+=$escape($helpers. setBackgroundAuto(index ));
$out+='"></div> </li> ';
}
$out+=' ';
});
$out+=' ';
return new String($out);
});/*v:36*/
template('dist/template/user/index','<div class="ddl-comic-use-box ddl-scrollbar"> <div class="ddl-comic-user-item-box mt-5"> <h3>设置</h3> <div class="ddl-comic-user-item-inner"> <ul> <li>缩放<div class="ddl-comic-powerange-box" id="ddl-comic-zoom-box"></div></li> <li>间距<div class="ddl-comic-powerange-box" id="ddl-comic-space-box"></div></li> </ul> </div> </div> <div class="ddl-comic-user-item-box"> <h3>打赏</h3> <div class="ddl-comic-user-item-inner"> <div class="ddl-comic-user-play-tour"> <img src="./dist/images/play.png" width="100%" draggable="false"> <p> <i>您的支持是我们最大的肯定</i> <span id="ddl-comic-user-play">我要打赏</span> </p> </div> </div> </div> <div class="ddl-comic-user-item-box mb-15"> <h3>版本</h3> <div class="ddl-comic-user-item-inner"> <div class="ddl-comic-user-play-tour"> <p style="color: #333;">Version: <i id="ddl-comic-version"></i></p> <p>可以给我们一个五星好评吗？<a href="https://chrome.google.com/webstore/detail/comic%20%20/mhekhlkmjaleehfnfjfpejhegjieaaef/reviews?utm_source=infinity-rate" target="_blank" style="margin-top:-4px;">五星好评</a></p> </div> </div> </div> <div class="ddl-comic-user-item-box mb-15"> <h3>建议与Bug反馈</h3> <div class="ddl-comic-user-item-inner"> <div class="ddl-comic-user-play-tour"> <p style="color: #333;">E-mail: 326311036@qq.com</p> <p>欢迎各位小伙伴前来吐槽，发送到邮箱即可。</p> </div> </div> </div> </div>');/*v:4*/
template('dist/template/user/play','<div class="ddl-play-wrap user-select"> <span class="iconfont icon-close" id="ddl-play-close-btn"></span> <img src="./dist/images/weixin_play.png" title="微信打赏" width="200" height="170" draggable="false"/> <h3 class="tc">微信打赏</h3> <p class="tc">您的支持是我们最大的肯定</p> </div>');/*v:1*/
template('dist/template/user/powerange',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,key=$data.key,unit=$data.unit,$out='';$out+='<input type="text" id="';
$out+=$escape(key);
$out+='"> <em><i id="';
$out+=$escape(key);
$out+='-value">0</i>';
$out+=$escape(unit);
$out+='</em>';
return new String($out);
});

}()