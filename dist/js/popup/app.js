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
            return decodeURIComponent(r[2]);
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
    var jumpUrl = function (url,target) {
        var target = target || '';
        if(!base.isEmptyValue(target)) {
            var a = document.createElement('a');
            a.setAttribute('target', target);// href链接
            a.setAttribute('href', url);// href链接
            a.click();
            return false;
        }
        window.location.href = url;
        return false;
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
            case '#':
                regular = /(^#*)/g;
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
    function removeHTMLTag(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/&lt;/ig,'');
        str=str.replace(/&gt;/ig,'');
        str=str.replace(/[div|\/div]/g,'');
        str=str.replace(/&lt;[ -~]*&gt;/ig,'');//去掉替换后的<>标签
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

        ,getVal:getVal
        ,getItemObject: getItemObject

        ,setNumber: setNumber
        ,removeHTMLTag: removeHTMLTag
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
        var page = $('#ddl-comic-page').val();
        switch (page) {
            case 'search':
                ddlSearch.init();
                break;
            case 'reader':
                ddlReader.init();
                console.log('sssss');
                break;
            default:
                ddlFavor.init();
                bindEvent();
        }

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


    /**
     * 绑定事件
     * @method bindEvent
     */
    var bindEvent = function () {
        $('.ddl-comic-foot-tab').click(function () {
            var type = $(this).attr('data-type');

            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            $(this).parent().find('span.iconfont').each(function () {
                $(this).addClass($(this).attr('data-class'));
            });
            $(this).parent().find('span.iconfont').removeClass('icon-shujiaxuanzhong').removeClass('icon-discoverfill').removeClass('icon-wodexuanzhong');

            switch (type) {
                case 'site':
                    ddlSite.init();
                    $(this).find('span.iconfont').removeClass('icon-discover').addClass('icon-discoverfill');
                    break;
                case 'favor':
                    ddlFavor.init();
                    $(this).find('span.iconfont').removeClass('icon-shujia').addClass('icon-shujiaxuanzhong');
                    break;
                case 'user':
                    ddlUser.init();
                    $(this).find('span.iconfont').removeClass('icon-31wode').addClass('icon-wodexuanzhong');
                    break;
                case 'reader':
                    base.jumpUrl('./reader.html', '_blank');
                    break;
            }
        })

        $('#ddl-comic-popup-search-input').bind('keypress',function(event){ //回车搜索
            event.stopPropagation();
            if(event.keyCode == '13') {
                var keyword = $(this).val();
                if(!base.isEmptyValue(keyword)) {
                    var url = './search.html?keyword=' + encodeURIComponent(keyword);
                    base.jumpUrl(url, '_blank');
                }
            }
        });
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
                case 'flushFavor':
                    if($('.ddl-comic-foot li:first-child').hasClass('active')) {
                        ddlFavor.init();
                    }
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
 * 收藏
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlFavor = (function () {

    var options = {
        operaBtn: '#ddl-favor-opera-btn',
        continueBtn: '.ddl-comic-favor span.continue-btn',
        deleteBtn: '.ddl-comic-favor span.delete-btn',
        itemBtn: '.ddl-comic-favor li.item-box'
    }

    /**
     * 初始化
     * @method init
     */
    var init = function () {
        // var favor = [
        //     { id: '16',title: "极主夫道",author: "おおのこうすけ ", type: "manhua_dmzj", cover: "https://images.dmzj.com/webpic/7/fu20190531.jpg", current: {title: "第36话", url: "https://manhua.dmzj.com/jizhufudao/92501.shtml",time: new Date().getTime()}, home: "https://manhua.dmzj.com/jizhufudao/", last: {link: "https://manhua.dmzj.com/jizhufudao/92501.shtml", title: "第36话",total:41}},
        //     { id: '3',title: "看得见的女孩",author: "泉朝树 ", type: "manhua_dmzj", cover: "https://images.dmzj.com/webpic/4/kandejiandenvhai111.jpg", current: {title: "连载15", url: "https://manhua.dmzj.com/kandejiandenvhai/88635.shtml",time: (new Date(" 2018/06/22 08:00:20")).getTime()}, home: "https://manhua.dmzj.com/kandejiandenvhai/", last: {link: "https://manhua.dmzj.com/kandejiandenvhai/88028.shtml", title: "番外篇2",total:26}}
        //     // ,{home: "https://manhua.dmzj.com/kandejiandenvhai/",type: "manhua_dmzj"}
        //     // ,{home: "https://manhua.fzdm.com/146/",type: "fzdm"}
        // ];

        var id = '.ddl-comic-main';
        var template = 'favor/index';

        cookie.get('favor',function (data) {
            var favor = data.favor || [];

            var ids = '';
            for(var i in favor) {
                ids += favor[i].id+',';
            }

            if(!base.isEmptyValue(ids)) {
                ids = base.rtrim(ids,',');
            }

            if(base.getDataLength(favor) <= 0) {
                tpl.renderTpl(id,'favor/nothing');
            } else {
                tpl.renderTpl(id, template, {list: favor});
                loadFavorCoverImg();
            }

            console.log('fff',favor);
            bindEvent();
            return favor;
            ajRequest.post('comic/getComicList',{ids: ids},function (result) {
                var num = 0;
                if(base.getDataLength(result.data) > 0) {
                    //console.log('result.data',result.data);

                    for (var i in favor) {
                        console.log('getComicList',result,result.data[i]);
                        if (!base.isEmptyValue(result.data[i])) { //数据不为空
                            //console.log(' favor[i].current.url', favor[i].current.url);
                            var catalog = ddlUnit.getCurrentCatalogList(result.data[i].comic_catalog, favor[i].current.url, favor[i].type);
                            var total = base.getDataLength(catalog.list);

                            console.log('catalog',catalog);

                            favor[i].updated = false;
                            favor[i].current.type = catalog.title;

                            if (parseInt(favor[i].last.total) < parseInt(total)) {
                                var index = parseInt(total) - 1;
                                favor[i].updated = true;
                                favor[i].last.link = catalog.list[index].link;
                                favor[i].last.title = catalog.list[index].title;
                                num++;
                            }
                        }
                    }
                }

                console.log('fff',favor);
                if(base.getDataLength(favor) <= 0) {
                    tpl.renderTpl(id,'favor/nothing');
                } else {
                    tpl.renderTpl(id, template, {list: favor});
                    $('#ddl-comic-updated-num').html(num+'本');
                    loadFavorCoverImg();
                }

                bindEvent();
            });
        });
    }

    /**
     * 加载喜欢漫画图片
     * @method loadFavorCoverImg
     */
    var loadFavorCoverImg = function () {
        $('.ddl-comic-favor img.cover').each(function () {
            var _this = $(this), src = $(this).attr('data-src');
            if(!base.isEmptyValue(src)) {
                var img = new Image();
                img.src = src;
                if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                    _this.attr('src',src);
                }

                img.onload = function(){
                    _this.attr('src',src);
                }
            }
        });
    }


    /**
     * 绑定事件
     * @method bindEvent
     */
    var bindEvent = function () {
        $(options.continueBtn).click(function (event) { //继续查看阅读按钮
            event.stopPropagation();
            base.jumpUrl($(this).attr('data-url'),'_blank');
        });

        $(options.itemBtn).click(function (event) { //漫画
            event.stopPropagation();
            base.jumpUrl($(this).attr('data-url'),'_blank');
        });

        $(options.deleteBtn).click(function (event) { //删除按钮
            event.stopPropagation();
            $(this).parent().remove();
            var home = $(this).attr('data-url');

            cookie.get('favor',function (data) {
                var favor = data.favor || [];
                for (var i in favor) {
                    if(favor[i].home == home) {
                        favor.splice(i,1);
                    }
                }

                if(base.getDataLength(favor) <= 0) {
                    tpl.renderTpl('.ddl-comic-main','favor/nothing');
                }
                chrome.runtime.sendMessage({type: "removeFavor", key: 'home', value: home});
                cookie.set('favor',favor);
            });
        });

        $(options.operaBtn).click(function () { //编辑按钮
            var status = $(this).attr('data-status');
            if(status == 'normal') {
                $(this).css('color','#ffc459');
                $(this).attr('data-status','opera');
                $('.ddl-comic-favor ul').find('span.continue-btn').hide();
                $('.ddl-comic-favor ul').find('span.delete-btn').show();
                return false;
            }

            $(this).removeAttr('style');
            $(this).attr('data-status','normal');
            $('.ddl-comic-favor ul').find('span.continue-btn').show();
            $('.ddl-comic-favor ul').find('span.delete-btn').hide();
        });
    }

    /**
     * 重设章节名称
     * @method resetChapterName
     * @param {String} chapter 章节名称
     * @param {String} name 漫画名称
     * @return {String}
     */
    var resetChapterName = function (chapter,name) {
        chapter = chapter.replace(base.trim(name),'');
        chapter = base.trim(chapter);
        chapter = chapter.replace(/(^_*)/g,"");
        chapter = chapter.replace(/(^\-*)/g,"");

        return chapter;
    }

    /**
     * 时间之前
     * @method getTimeAgo
     * @param {Nubmer} timestamp 时间戳
     * @return {string}
     */
    var getTimeAgo = function(timestamp){
        var result = '';
        var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var month = day * 30;
        var now = new Date().getTime();   //获取当前时间毫秒
        var diffValue = now - timestamp;//时间差

        if(diffValue < 0){
            return;
        }
        var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
        var hourC = diffValue/hour;
        var dayC = diffValue/day;
        var weekC = diffValue/week;
        var monthC = diffValue/month;
        if(monthC >= 1 && monthC <= 3){
            result = " " + parseInt(monthC) + "月前";
        }else if(weekC >= 1 && weekC <= 3){
            result = " " + parseInt(weekC) + "周前";
        }else if(dayC >= 1 && dayC <= 6){
            result = " " + parseInt(dayC) + "天前";
        }else if(hourC >= 1 && hourC <= 23){
            result = " " + parseInt(hourC) + "小时前";
        }else if(minC >= 1 && minC <= 59){
            result =" " + parseInt(minC) + "分钟前";
        }else if(diffValue >= 0 && diffValue <= minute){
            result = "刚刚";
        }else {
            var datetime = new Date();
            datetime.setTime(timestamp);
            var Nyear = datetime.getFullYear();
            var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            result = Nyear + "-" + Nmonth + "-" + Ndate
        }
        return result;
    }



    return {
        init:init,
        getTimeAgo: getTimeAgo,
        resetChapterName: resetChapterName
    }
})();


/**
 * 阅读器
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlReader = (function () {

    var options = {
        list: [],
        files: [],
        UnZipArchive: '',
        title: '#ddl-comic-title',
        subtitle: '#ddl-comic-subtitle',
        wrap: '#ddl-comic-wrap',
        main: '#ddl-comic-main',
        item: '#ddl-comic-item',
        menu: '#ddl-comic-menu',
        totalPage: '#ddl-comic-total-page',//当前页数
        currentPage: '#ddl-comic-current-page', //总页数
        settingBox: '#ddl-comic-reader-setting', //目录
        sceneBox: '#ddl-comic-reader-scene',

        sceneBtn: '#ddl-comic-reader-scene-btn',
        lightBtn: '#ddl-comic-light-btn',
        settingBtn: '#ddl-comic-setting-btn',
        restoreBtn: '#ddl-comic-restore-btn',
        playBtn: '#ddl-comic-play-btn',
        exitBtn: '#ddl-comic-exit-btn',
        launchBtn: '#ddl-comic-launch',
        uploadBtn: '#ddl-reader-upload-file-btn',
        bugBtn: '#ddl-comic-reader-bug-btn',


        area: '#ddl-comic-reader-area',
        setting: { zoom: 100,space: 25},
        bodyScrollTop: 0,
    }

    /**
     * 初始化
     * @method init
     */
    var init = function () {
        $(options.uploadBtn).change(function(){operateFile(this.files);});
        $(options.sceneBtn).click(function (evnet) { event.stopPropagation(); switchScene($(this));});
        $(options.sceneBox).find('li').click(function () {selectScene($(this));});
        $(options.bugBtn).click(function () {
           tipsBox.alert('请将Bug问题发送到:326311036@qq.com邮箱,谢谢');
        });

        $('body').click( function (event) {
            event.stopPropagation();
            $(options.sceneBox).find('em').hide();
            $(options.sceneBox).find('ul').hide();
            $('#ddl-comic-reader-scene-btn').attr('data-status',0);
        });

        cookie.get('reader_scene',function (data) {
            var object = data.reader_scene || { title: 'Zip压缩包',type: 'zip'};
            setScene(object.title,object.type);
        });

        loadSetting();
        listenDropEvent();
        listenAreaDropEvent();
    }

    /**
     * 开启场景
     * @method switchScene
     * @param {Object} _this 当前对象
     */
    var switchScene = function (_this) {
        var status = _this.attr('data-status');
        showScene(status);
    }

    /**
     * 显示场景
     * @method showScene
     * @param {Number} status 状态
     */
    var showScene = function (status) {
        if(status == 1) {
            $(options.sceneBox).find('em').hide();
            $(options.sceneBox).find('ul').hide();
            $('#ddl-comic-reader-scene-btn').attr('data-status',0);
            return false;
        }

        $(options.sceneBox).find('em').show();
        $(options.sceneBox).find('ul').show();
        $('#ddl-comic-reader-scene-btn').attr('data-status',1);
    }

    /**
     * 选择场景
     * @method selectScene
     * @param {Object} _this 当前对象
     */
    var selectScene = function (_this) {
        var title = _this.html();
        var type = _this.attr('data-type');

        setScene(title,type);
        showScene(0);
    }

    /**
     * 设置场景
     * @method setScene
     * @param {String} title
     * @param {String} type
     */
    var setScene = function (title,type) {
        $(options.uploadBtn).removeAttr('accept').removeAttr('multiple').removeAttr('webkitdirectory');
        switch (type) {
            case 'zip':
                $(options.uploadBtn).attr('accept','application/zip');
                $(options.uploadBtn).parent().find('span').html('选择 Zip压缩文件');
                break;
            case 'file':
                $(options.uploadBtn).attr('webkitdirectory','webkitdirectory');
                $(options.uploadBtn).parent().find('span').html('选择 纯文件夹');
                break;
            case 'image':
                $(options.uploadBtn).attr('multiple','multiple');
                $(options.uploadBtn).parent().find('span').html('选择 批量图片');
                break;
        }

        $('#ddl-comic-reader-scene-title').html(title);
        cookie.set('reader_scene',{ title: title, type: type});
    }

    /**
     * 操作文件
     * @method operateFile
     * @param {Object} files 上传文件对象
     */
    var operateFile = function (files) {
        if (files.length == 0) {
            tipsBox.alert('请选择上传的文件');
            $(options.uploadBtn).val('');
            return false;
        }

        switch (files[0].type) {
            case 'application/zip':
                loadZipFile(files[0]);
                break;
            default:
                loadFiles(files);
                break;
        }
    }

    /**
     * 加载漫画
     * @method loadComic
     * @param {String} index 索引号
     */
    var loadComic = function (index) {
        if(options.list[index].status) {
            return false;
        }

        var _this = $(options.item + '-'+index);
        var type = _this.attr('data-type');
        var data = {
            url : _this.attr('data-url'),
            type: _this.attr('data-type'),
            index: index
        }

        options.list[index].status = true;
        switch(type) {
            case 'drop':
                options.UnZipArchive.loadImage(index,data.url);
                break;
            case 'file':
                loadSingleImage(index,data.url);
                break;
        }
    }



    /**
     * 监听区域拖动事件
     * @method listenAreaDropEvent
     */
    var listenAreaDropEvent = function () {
        var id = base.ltrim(options.area,'#');
        var box = document.getElementById(id); //拖拽区域
        box.addEventListener("drop", function(e) {
            e.preventDefault(); //取消默认浏览器拖拽效果
            var files = e.dataTransfer.files; //获取文件对象
            operateFile(files);
        }, false);
    }


    /**
     * 加载Zip文件
     * @method loadZipFile
     * @param {Object} file 文件
     */
    var loadZipFile = function (file) {
        options.UnZipArchive = new UnZipArchive( file );
        options.UnZipArchive.getData( function() {
            var list = [];
            var arr = options.UnZipArchive.getEntries(); //获取所以的文件和文件夹列表;
            for(var i in arr) {
                if(isImage(arr[i])) {
                    list.push({url: arr[i], type: 'drop', status: false, mode: 'load'});
                }
            }
            var data = {
                list: list,
                total: base.getDataLength(list),
                title: (file.name).replace('.zip',''),
                space: 'margin-bottom: '+options.setting.space+'px;'
            }

            run(data);
        });
    }

    /**
     * 加载文件
     * @method loadFiles
     */
    var loadFiles = function (files) {
        var list = [],title = '';
        options.files = files;
        for(var i in files) {
            console.log('files[i].type',files[i].type,files[i].name,files[i].webkitRelativePath);
            if(isImage(files[i].name)) {
                list.push({url: i, type: 'file', status: false, mode: 'load'});
            }
        }

        if(base.getDataLength(list) > 0) {
            var value = options.files[list[0].url].webkitRelativePath;
            var end = (value).indexOf('/');
            title = (value).substr(0,end);
        }

        title = title || '图片预览';

        console.log('list',list);
        var data = {
            list: list,
            total: base.getDataLength(list),
            title: title,
            space: 'margin-bottom: '+options.setting.space+'px;'
        }

        run(data);
    }

    /**
     * 是否图片
     * @method isImage
     * @param {String} str
     * @param {String} split 分隔符
     * @return {boolean}
     */
    var isImage = function(str,split) {
        if(base.isEmptyValue(str)) {
            return false;
        }

        var split = split || '.';
        var index = str.lastIndexOf(split);
        var ext = str.substr(index+1);
        return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
    }

    /**
     * 运行图片模式
     * @method run
     * @param {Object} data
     */
    var run = function (data) {
        console.log('data',data);

        if(data.total == 0) {
            tipsBox.alert('无法匹配到相对应的文件');
            $(options.uploadBtn).val('');
            return false;
        }

        var template = 'reader/index';
        tpl.renderTpl('body',template,data,3);
        options.list = data.list;

        launch();
        loadComic(0);
        bindEvent();
        loadSkin();
        listenScroll();
    }

    /**
     * 加载皮肤外观
     * @method loadSkin
     */
    var loadSkin = function () {
        cookie.get('reader_light',function (data) {
            var light = data.reader_light || 'on';
            if(light == 'on') {
                setLight('off');
            } else {
                setLight('on');
            }
        });
    }

    /**
     * 加载设置
     * @method loadSetting
     */
    var loadSetting = function () {
        cookie.get('reader_setting',function (data) {
            var setting = data.reader_setting || {};
            var space = setting.space || 25;
            var zoom = setting.zoom || 100;
            options.setting = { zoom: zoom, space: space};
        });
    }

    /**
     * 绑定事件
     * @method bindEvent
     */
    var bindEvent = function () {
        $(options.playBtn).click(play);
        $(options.exitBtn).click(exit);
        $(options.launchBtn).click(launch);
        $(options.settingBtn).click(switchSetting);
        $(options.lightBtn).click(function () {
            var status = $(this).attr('data-status');
            setLight(status);
        });

        $(options.restoreBtn).click(restore);

        $(options.wrap).click(function (event) {
            event.stopPropagation();
            $(options.settingBtn).parent().removeClass('active');
            $(options.settingBtn).parent().find('i.ddl-comic-right-icon').hide();
            $(options.settingBtn).parent().find('div.ddl-comic-reader-setting').hide();
            $(options.settingBtn).attr('data-status',0);
        });

        $(options.settingBox).click(function (event) {
            event.stopPropagation();
        });
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
    }

    /**
     * 设置灯状态
     * @method setLight
     * @param {String} status
     */
    var setLight = function (status) {
        if(status == 'on') {
            cookie.set('reader_light','off');
            $(options.wrap).find('div.ddl-comic-inner').addClass('ddl-close-light-inner');
            $(options.menu).find('ul.ddl-comic-menu-inner').addClass('ddl-close-light-inner');
            $(options.lightBtn).addClass('icon-off-light').removeClass('icon-on-light');
            $(options.lightBtn).attr('data-status','off');
            return false;
        }

        cookie.set('reader_light','on');
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
    }

    /**
     * 打开设置
     * @method switchSetting
     */
    var switchSetting = function () {
        var status = $(options.settingBtn).attr('data-status');

        if(status == 1) {
            $(options.settingBtn).parent().removeClass('active');
            $(options.settingBtn).parent().find('i.ddl-comic-right-icon').hide();
            $(options.settingBtn).parent().find('div.ddl-comic-reader-setting').hide();
            $(options.settingBtn).attr('data-status',0);
            return false;
        }

        $(options.settingBtn).parent().addClass('active');
        $(options.settingBtn).parent().find('i.ddl-comic-right-icon').show();
        $(options.settingBtn).parent().find('div.ddl-comic-reader-setting').show();
        $(options.settingBtn).attr('data-status',1);

        cookie.get('reader_setting',function (data) {
            var setting = data.reader_setting || {};
            var zoom = setting.zoom || 100;
            var space = setting.space || 25;

            powerange('ddl-comic-reader-zoom',zoom,20,300);
            powerange('ddl-comic-reader-space',space,0,100);
        });
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
     * 加载单个文件
     * @method loadSingleImage
     * @param {Number} index 图片显示序号
     * @param {Number} key 文件数组关键字
     */
    var loadSingleImage = function (index,key) {
        var file = options.files[key];

        console.log('files',options.files);
        console.log(key,options.files[key]);
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            loadImage(index,this.result);
        }
    }

    /**
     * 监听拖动事件
     * @method listenDropEvent
     */
    var listenDropEvent = function () {
        $(document).on({
            dragleave:function(e){      //拖离
                e.preventDefault();
            },
            drop:function(e){           //拖后放
                e.preventDefault();
            },
            dragenter:function(e){      //拖进
                e.preventDefault();
            },
            dragover:function(e){       //拖来拖去
                e.preventDefault();
            }
        });
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

            for(var i in options.list) {
                if(options.list[i].status == false) {
                    var id = options.item + '-' + i;
                    var top = $(id).offset().top;
                    if(scrollTop > top + 100){
                        loadComic(i);
                    }
                }
            }

            for(var i in options.list) {
                var next = (parseInt(i)+1) > total ? total : (parseInt(i)+1);
                var topId = document.getElementById('ddl-comic-item-'+i);
                var bottomId = document.getElementById('ddl-comic-item-'+next);
                var topPosition = getElementPagePosition(topId);
                var bottomPostion = getElementPagePosition(bottomId);
                var top = topPosition.y;
                var bottom = bottomPostion.y;
                var offset = parseInt( $(window).height() * 1 / 2);

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
        var object = {template: 'user/play'};
        tipsBox.floating(object);
        $('#ddl-play-close-btn').click(function () {
            tipsBox.hideFloating();
        });
    }

    /**
     * 还原设置
     * @method restore
     */
    var restore = function () {
        var setting = { zoom: 100, space: 25 };
        powerange('ddl-comic-reader-zoom',setting.zoom,20,300);
        setTimeout(function () { powerange('ddl-comic-reader-space',setting.space,0,100);},10);
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
     * 滑动模块
     * @method powerange
     * @param {String} key 关键字
     * @param {Number} start 默认值
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     */
    var powerange = function (key,start,min,max) {
        tpl.renderTpl('#'+key+'-box', 'reader/powerange', {'key': key});
        var selector = document.querySelector('#'+key);
        document.getElementById(key+'-value').innerHTML = start;
        new Powerange(selector, { key: key, start: start, min: min, max: max, hideRange: true, callback: function () {
            var _this = this;
            var value = $('#'+this.key).val();
            document.getElementById(this.key+'-value').innerHTML = value;

            cookie.get('reader_setting',function (data) {
                var setting = data.reader_setting || {};
                var key = (_this.key).replace('ddl-comic-reader-','');
                setting[key] = value;
                settings(key,value);
            });
        }});
    }

    return {
        init: init,
        loadImage: loadImage
    }
})();



/**
 * 搜索
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlSearch = (function () {

    var options = {
        keyword: '#ddl-comic-search-keyword',
        searchBtn: '#ddl-comic-search-btn',
        searchInput: '#ddl-comic-search-input',
        authorBtn:'.search-author-btn',
        unfoldBtn: '.unfold-btn',
        fewerBtn: '.fewer-btn',
        status : true
    }

    var init = function () {
        var keyword = base.getQueryString('keyword');
        if(!base.isEmptyValue(keyword)) {
            keyword = decodeURIComponent(keyword);
        }

        search(keyword);

        $(options.searchBtn).click(function (event) { //搜索
            event.stopPropagation();
            var keyword = $(options.searchInput).val();
            if(base.isEmptyValue(keyword)) {
                return false;
            }

            search(keyword);
        });

        $(options.searchInput).bind('keypress',function(event){ //回车搜索
            event.stopPropagation();
            if(event.keyCode == '13') {
                var keyword = $(this).val();
                if(base.isEmptyValue(keyword)) {
                    return false;
                }
                search(keyword);
            }
        });
    }

    /**
     * 搜索
     * @method search
     * @param {String} keyword
     */
    var search = function (keyword,type) {
        if(options.status  == false) {
            return false;
        }

        var type = type || '';
        var id = '#ddl-comic-search-items-box';
        var data = { keyword: keyword,type: type};

        options.status = false;
        $(options.keyword).html(keyword);
        $(options.searchInput).val(keyword);
        tpl.renderTpl(id,'search/loading');

        ajRequest.post('comic/search',data,function (result) {
            options.status = true;
            var list = [];
            for(var i in result.data) {
                for(var j in result.data[i].comic_catalog) {
                    var total = base.getDataLength(result.data[i].comic_catalog[j].list);
                    result.data[i].comic_catalog[j].list = ddlUnit.setComicSort(result.data[i].comic_catalog[j].list,result.data[i].comic_type,total);
                    result.data[i].comic_catalog[j].list = ddlUnit.resetChapterTitle(result.data[i].comic_catalog[j].list,result.data[i].comic_title);


                    var item = {
                        title: result.data[i].comic_title,
                        cover: result.data[i].comic_cover,
                        author: result.data[i].comic_author,
                        intro: result.data[i].comic_intro,
                        catalog: result.data[i].comic_catalog[j],
                        status: (result.data[i].comic_status) == 0 ? '连载中': '已完结',
                        type: result.data[i].comic_type,
                        total: total,
                        last: (total != 0) ? result.data[i].comic_catalog[j].list[total - 1]: {title:'',url: ''},
                        link: result.data[i].comic_link
                    }


                    list.push(item);
                }
            }

            if(base.getDataLength(list) > 0) {
                tpl.renderTpl(id, 'search/item', {list: list});
                loadCoverImg();
                bindEvent();
            } else {
                tpl.renderTpl(id, 'search/nothing');
            }
        },function (result) {
            options.status = true;
        });
    }



    /**
     * 加载漫画图片
     * @method loadCoverImg
     */
    var loadCoverImg = function () {
        $('.ddl-comic-search-item-box img.cover').each(function () {
            var _this = $(this), src = $(this).attr('data-src');
            if(!base.isEmptyValue(src)) {
                var img = new Image();
                img.src = src;
                if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                    _this.attr('src',src);
                }

                img.onload = function(){
                    _this.attr('src',src);
                }
            }
        });
    }


    /**
     * 绑定事件
     * @method bindEvent
     */
    var bindEvent = function () {
        $(options.unfoldBtn).click(function (event) { //展开
            event.stopPropagation();
            $(this).hide();
            $(this).parent().css('height','auto');
        });


        $(options.fewerBtn).click(function (event) { //收起
            event.stopPropagation();
            $(this).parent().removeAttr('style');
            $(this).prev().show();
        });

        $(options.authorBtn).click(function (event) { //搜索作者
            event.stopPropagation();
            var keyword = $(this).html();
            if(!base.isEmptyValue(keyword)) {
                search(keyword,'author');
            }
        });
    }

    return {
        init: init
    }
})();

/**
 * 站点
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlSite = (function () {

    var options = {
        tabBtn: '.ddl-comic-site-tab',
        siteBtn: '.ddl-comic-site-jump',
    }

    /**
     * 初始化
     * @method init
     */
    var init = function () {
        var id = '.ddl-comic-main';
        var template = 'site/index';

        tpl.renderTpl(id,template,{ list: ddlUnit.getWebList()});
        bindJump();

        $(options.tabBtn).click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            tabs($(this).attr('data-type'));
        });
    }

    /**
     * 设置背景自动大小
     * @method setBackgroundAuto
     * @param {String} type 类型
     */
    var setBackgroundAuto = function (type) {
        switch (type) {
            case 'hhimm':
            case '52wuxing':
                return 'background-size: auto';
                break;
            case 'hhxxee':
            case 'imanhuaw':
            case 'sfacg':
                return 'background-size: 80%';
                break;
            case 'manhuagui':
                return 'background-size: 90%';
                break;
        }

        return '';
    }

    /**
     * 切换标签
     * @method tabs
     * @param type
     */
    var tabs = function (type) {
        var list = {},webList = ddlUnit.getWebList();
        var id = '.ddl-comic-main ul';
        var template = 'site/items';
        if(type == 'all') {
            list = webList;
        } else {
            for(var i in webList) {
                if(webList[i].type == type) {
                    list[i] = webList[i];
                }
            }
        }

        tpl.renderTpl(id,template,{ list: list});
        bindJump();
    }

    /**
     * 绑定跳转事件
     * @method BindJump
     */
    var bindJump = function () {
        $(options.siteBtn).click(function () {
            var url = $(this).attr('data-url');
            base.jumpUrl(url,'_blank');
        });
    }

    /**
     * 获取网站字段
     * @method getSiteField
     * @param {String} type 类型
     * @param {String} key 键名
     */
    var getSiteField = function (type,key) {
        var webList = ddlUnit.getWebList();
        if(!base.isEmptyValue(webList[type])) {
            return webList[type][key];
        }

        if(key == 'title') {
            return '未知';
        }

        return '';
    }

    return {
        init: init,
        tabs: tabs,
        getSiteField: getSiteField,
        setBackgroundAuto: setBackgroundAuto
    }
})();

/**
 * 用户
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlUser = (function () {

    var options = {
        playBtn: '#ddl-comic-user-play',
        versionBtn: '#ddl-comic-version'
    }


    /**
     * 初始化
     * @method init
     */
    var init = function () {
        var id = '.ddl-comic-main';
        var template = 'user/index';

        tpl.renderTpl(id,template);
        cookie.get('setting',function (data) {
            var setting = data.setting || {};
            var zoom = setting.zoom || 100;
            var space = setting.space || 25;

            powerange('ddl-comic-zoom',zoom,20,300);
            powerange('ddl-comic-space',space,0,100);
        });

        $(options.playBtn).click(play);
        ajRequest.get('./manifest.json',{},function (result) {
            $(options.versionBtn).html(result.version);
        });
    }


    /**
     * 滑动模块
     * @method powerange
     * @param {String} key 关键字
     * @param {Number} start 默认值
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     */
    var powerange = function (key,start,min,max) {
        tpl.renderTpl('#'+key+'-box', 'user/powerange', {'key': key});
        var selector = document.querySelector('#'+key);
        document.getElementById(key+'-value').innerHTML = start;
        new Powerange(selector, { key: key, start: start, min: min, max: max, hideRange: true, callback: function () {
            var _this = this;
            var value = $('#'+this.key).val();
            document.getElementById(this.key+'-value').innerHTML = value;

            cookie.get('setting',function (data) {
                var setting = data.setting || {};
                var key = (_this.key).replace('ddl-comic-','');
                setting[key] = value;

                cookie.set('setting',setting);
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    var params = { type: 'personalSetting',key: key,value: value};
                    chrome.tabs.sendMessage(tabs[0].id, params, function(response) {});
                });
            });
        }});
    }

    /**
     * 打赏
     * @method play
     */
    var play = function () {
        var object = {template: 'user/play'};
        tipsBox.floating(object);
        $('#ddl-play-close-btn').click(function () {
            tipsBox.hideFloating();
        })
    }

    return {
        init: init
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

        chrome.extension.sendMessage({url: config.getApiUrl(url), data:data},function(result) {
            if(!base.isEmptyValue(result)) {
                success(result);
            } else {
                error(result);
            }
        });
    }

    /**
     * Post 请求
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


template.helper('setBackgroundAuto', function (type) {
   return ddlSite.setBackgroundAuto(type);
});

template.helper('getSiteField', function (type,key) {
    return ddlSite.getSiteField(type,key);
});

template.helper('getTimeAgo', function (timestamp) {
    return ddlFavor.getTimeAgo(timestamp);
});

template.helper('resetChapterName', function (chapter,name) {
    return ddlFavor.resetChapterName(chapter,name);
});

template.helper('setTitle', function (title) {
    if(base.isEmptyValue(title)) {
        return title;
    }

    return base.trim(title.replace('正文卷',''));
});