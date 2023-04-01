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


        chrome.runtime.sendMessage({url: config.getApiUrl(url), data:data},function(result) {
            console.log('chrome.runtime.sendMessage result',result);
            if(!base.isEmptyValue(result)) {
                success(result);
            } else {
                error(result);
            }
        });
    }

    /**
     * get 请求
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






