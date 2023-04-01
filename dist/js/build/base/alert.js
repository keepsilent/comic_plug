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





