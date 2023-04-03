chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    awaitFetch(request).then(sendResponse);
    return true;
});


/**
 * 等待Fetch请求
 * @method awaitFetch
 * @param {Ojbect} request
 * @return {Object}
 */
var awaitFetch = async function (request) {
    //console.log('request',request);
    var url  = request.url;
    var data = request.data;
    var prom = new Promise(function(resolve, reject) {
        fetch(url, {
            method : 'POST',
            mode : 'cors',
            body : JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            resolve(res.json());
        });
    });

    var result = await prom;
    return result;
}




