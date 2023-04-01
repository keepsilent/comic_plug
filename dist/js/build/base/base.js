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
