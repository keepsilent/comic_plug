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



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('chrome.runtime.onMessage.addListener',request,sender,sendResponse);
    console.log('chrome.runtime.onMessage.addListener sendResponse',sendResponse);
   // ajRequest.post({ url:request.url, data:request.data, success: sendResponse});
    console.log('request.data',request.data);
    console.log('request.url',request.url);
    var data = request.data;
    var formData = new FormData();
    for(var i in data) {
        formData.append(i, data[i]);
    }
    console.log('formData',formData);

    fetch('https://www.baidu.com/').then(res =>  console.log(res)).then(res => console.log(res))

    new Promise(async (resolve, reject) => {

        return fetch(request.url, {
            method : 'POST',
            mode : 'cors',
            body: JSON.stringify(data),
            headers: {
                //'Content-Type': 'application/json'
                "Content-Type": "application/json; charset=UTF-8"
            }
            // body : formData,
            // headers: {
            //     'user-agent': 'Mozilla/4.0 MDN Example',
            //     'content-type': 'application/json'
            // },
            // headers: new Headers({
            //     'Content-Type': 'application/json'
            // })
        })
            .then(function (response) {
                return resolve(response);
                return response.json()
            })
            .then(function(response) {
                console.log('chrome.runtime.onMessage.addListener sendResponse',sendResponse);
                //sendResponse(response)
                return resolve(response);
            })
            .catch(error => console.log(error));
    }).then((response) => {
        sendResponse(response);
        console.log('xxx then',response);

    }).catch(response => {
        console.log('xxx catch');
        sendResponse(response);
    });


    // var result = fetch(request.url, {
    //     method : 'POST',
    //     mode : 'cors',
    //     body: JSON.stringify(data),
    //     headers: {
    //         //'Content-Type': 'application/json'
    //         "Content-Type": "application/json; charset=UTF-8"
    //     }
    //     // body : formData,
    //     // headers: {
    //     //     'user-agent': 'Mozilla/4.0 MDN Example',
    //     //     'content-type': 'application/json'
    //     // },
    //     // headers: new Headers({
    //     //     'Content-Type': 'application/json'
    //     // })
    // })
    //     .then(function (response) {
    //         return response.json()
    //     })
    //     .then(function(response) {
    //         console.log('chrome.runtime.onMessage.addListener sendResponse',sendResponse);
    //         sendResponse(response)
    //          return response;
    //     })
    //     .catch(error => console.log(error));

    //     .then(res=>{
    //
    //     sendResponse(res);
    //     console.log('fetch res2',res);
    //    console.log('fetch res1',res.json());
    //     return res;
    // }).then(data=>{
    //     console.log(data);
    // }).catch(err=>console.log(err));


    // console.log('result', {});
    // sendResponse(result);

    // }).then(function(res){
    //
    //     console.log('res',res);
    //     if(res.ok){
    //         res.json().then(function(data){
    //             console.log('data',data);
    //         })
    //     }else{
    //         console.log('请求失败');
    //         //that.errorFunc();
    //     }
    // }, function(e){
    //     console.log('请求失败');
    //    // that.errorFunc();
    // })

    // fetch(request.url,{
    //     method : 'POST',
    //     mode : 'cors',
    //     body:formData,
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data));


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




