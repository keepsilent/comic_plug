/**
 * Ajax 请求
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ajRequest = (function () {

    var post = function (object) {
        var url = object.url;
        var data = object.data;
        var sCallback = object.success;
        var eCallback = object.error;
        var cCallback = object.complete;
        var timeout = object.timeout || 5000;

        if(isEmptyValue(url)) {
            return false;
        }

        $.ajax({type: 'post',url: url, data: data, async: false, timeout: timeout, dataType: 'json',success:function (result) {
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

    return {
        post:post
    }
})();


$(document).ready(function(){
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        ajRequest.post({ url:request.url, data:request.data, success: sendResponse});
    });

    chrome.app.runtime.onLaunched.addListener(function() {
        chrome.app.window.create("index.html");
    });
});




