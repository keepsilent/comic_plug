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

function queryParse(query){

    let queryText = "";

    for(let key in query){

        queryText += key+'='+query[key]+'&';

    }

    return queryText.slice(0,-1);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('chrome.runtime.onMessage.addListener',request,sender,sendResponse);
   // ajRequest.post({ url:request.url, data:request.data, success: sendResponse});
    console.log('request.data',request.data);
    console.log('request.url',request.url);
    var data = request.data;
    var formData = new FormData();
    for(var i in data) {
        console.log('i',i);
        console.log('data[i]',data[i]);
        formData.append(i, data[i]);
    }
    console.log('formData',formData);
    fetch(request.url,{
        method : 'POST',
        mode : 'cors',
        body:formData,
    })
        .then(response => response.json())
        .then(data => console.log(data);
    sendResponse(data);
        );


});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log('request',request);
//     // const {val1, val2} = request;
//     // sendResponse({res: dealwithBigNumber(val1, val2)});
// });


// $(document).ready(function(){
//
//
//     // chrome.app.runtime.onLaunched.addListener(function() {
//     //     chrome.app.window.create("index.html");
//     // });
// });




