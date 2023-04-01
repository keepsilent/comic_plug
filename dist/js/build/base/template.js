/**
 * 模板 渲染
 *
 * @author keepsilent
 * @version 1.0.0
 */
var tpl = (function () {

    var options = {}

    /**
     * 渲染模板
     * @method renderTpl
     * @param {Stinrg} id  元素标识
     * @param {String} tpl 模板名称
     * @param {Object} data 数据
     * @param {String} type 类型
     */
    var renderTpl = function (id, tpl, data, type) {
        var data = data || {};
        var tpl = config.getOptions('templateUrl') + tpl;
        var html = template(tpl, data);
        var type = type || 0;

        // console.log(id, tpl, data, type);
        switch (type) {
            case 0: //替换元素
                $(id).html(html);
                break;
            case 1: //插入元素到尾部
                $(id).append(html);
                break;
            case 2: //插件元素到头部
                $(id).prepend(html);
                break;
            case 3: //插入元素之后
                $(id).after(html);
                break;
            case 4: //插入元素之前
                $(id).before(html);
                break;
        }
    }

    /**
     * 获取模版路径
     * @method getTplUrl
     * @param {String} url
     */
    var getTpl = function (tpl,data) {
        var tpl = config.getOptions('templateUrl') + tpl;
        return template(tpl, data);


    }

    return {
        getTpl: getTpl
        ,renderTpl: renderTpl
    }
})();


template.helper('setCatalogCurrentPage', function (link,type) {
    var url = ddlUnit.getPageLink(window.location.href,type);

    if(type != 'fmhuaaa' &&  type != 'acgn' && type != 'ikkdm') {
        link = ddlUnit.getPageLink(link,type);
    }

    link = link.replace(/(https:|http:)/i, '');
    url = url.replace(/(https:|http:)/i, '');

    if(url == link) {
        return 'active';
    }

    return '';
});

template.helper('setTitle', function (title) {
    if(base.isEmptyValue(title)) {
        return title;
    }

    return base.trim(title.replace('正文卷',''));
});
