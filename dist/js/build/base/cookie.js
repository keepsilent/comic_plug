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
