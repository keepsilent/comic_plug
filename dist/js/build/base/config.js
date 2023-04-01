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
        ddlComic.init();
        ddlNovel.init();

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
                case 'personalSetting':
                    ddlComic.settings(request.key,request.value);
                    break;
            }
        });
    }
});
