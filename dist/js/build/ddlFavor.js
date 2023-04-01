/**
 * 收藏
 *
 * @author keepsilent
 * @version 1.0.0
 */
var ddlFavor = (function () {

    var options = {
        favorBtn: '#ddl-comic-favor-btn'
    }

    /**
     * 设置默认
     * @method setDefault
     */
    var setDefault = function (data) {
        //console.log('data.favor',data.favor);
        var home = $(options.favorBtn).attr('data-index-link');
        var favor = data.favor || [];
        for(var i in favor) {
            if(favor[i].home == home) {
                $(options.favorBtn).attr('data-select','selected');
                $(options.favorBtn).parent().addClass('active');
            }
        }
    }

    /**
     * 添加
     * @method add
     * @param {Object} comic
     */
    var add = function (comic) {
        var item = {
            id: comic.id,
            title: comic.title,
            cover: comic.cover,
            author: comic.author,
            status: comic.status,
            type: comic.type,
            home: $(options.favorBtn).attr('data-index-link'),
            current: { title: $(options.favorBtn).attr('data-subtitle'),url: $(options.favorBtn).attr('data-sublink'),time: new Date().getTime()},
            last: comic.catalog[comic.total - 1],
            //total: comic.total
            //updated: comic.updated
        }

        item.last.total = comic.total;
        cookie.get('favor',function (data) {
            var has = false;
            var favor = data.favor || [];

            if(base.getDataLength(favor) >= 20) {
                tipsBox.alert('Comic++ 目前最多只能支持20个收藏');
                return false;
            }

            for (var i in favor) {
                if(favor[i].home == item.home) {
                    has = true;
                    favor[i] = $.extend(favor[i],item);
                }
            }

            if(has == false) {
                favor.push(item);
            }

            cookie.set('favor',favor);
            chrome.runtime.sendMessage({type: "flushFavor"});
            $(options.favorBtn).attr('data-select','selected');
            $(options.favorBtn).parent().addClass('active');
        });
    }

    /**
     * 移除
     * @method remove
     * @param {Object} comic
     */
    var remove = function () {
        var home = $(options.favorBtn).attr('data-index-link');
        $(options.favorBtn).attr('data-select','');
        $(options.favorBtn).parent().removeClass('active');

        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor.splice(i,1);
                }
            }

            cookie.set('favor',favor);
            chrome.runtime.sendMessage({type: "flushFavor"});
        });
    }

    /**
     * 更新当前数据
     * @method uploadCurrentData
     * @param {String} home 漫画目录连接
     * @param {String} title 标题
     * @param {String} url 连接
     * @param {Object} comic
     */
    var uploadCurrentData = function (home, title, url,comic) {
        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor[i].current = { title: title,url: url,time: new Date().getTime()};
                    favor[i].last = comic.catalog[comic.total - 1];
                    favor[i].last.total = comic.total;
                    cookie.set('favor',favor);
                    chrome.runtime.sendMessage({type: "flushFavor"});
                }
            }
        });
    }

    /**
     * 更新最新数据
     * @method uploadLastData
     * @param {String} home 漫画目录连接
     * @param {Object} comic
     */
    var uploadLastData = function (home,comic) {
        console.log('uploadCurrentData',comic);
        cookie.get('favor',function (data) {
            var favor = data.favor || [];
            for (var i in favor) {
                if(favor[i].home == home) {
                    favor[i].last = comic.catalog[comic.total - 1];
                    favor[i].last.total = comic.total;
                    cookie.set('favor',favor);
                    chrome.runtime.sendMessage({type: "flushFavor"});
                }
            }
        });
    }

    return {
        add: add,
        remove: remove,
        setDefault: setDefault,
        uploadCurrentData: uploadCurrentData,
        uploadLastData: uploadLastData
    }
})();

