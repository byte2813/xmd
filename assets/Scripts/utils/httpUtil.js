class HttpUtil {
    /**
     * 延迟多久没回复就返回False
     *
     * @type {number}
     * @memberof HttpUtil
     */
    static TimeOut = 200;

    /**
     * GET请求
     *
     * @static
     * @param {string} url
     * @param {object} [params={}]
     * @param {Function} callback
     * @memberof HttpUtil
     */
    static get(url, params = {}, callback) {
        let dataStr = '';
        Object.keys(params).forEach(key => {
            dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    let httpStatus = xhr.statusText;
                    callback(true, response);
                } else {
                    callback(false, response);
                }
            }
        };
        xhr.timeout = HttpUtil.TimeOut;
        xhr.send();
    }

    /**
     * POST请求
     *
     * @static
     * @param {string} url
     * @param {object} [param={}]
     * @param {Function} callback
     * @memberof HttpUtil
     */
    static post(url, param = {}, callback) {
        var xhr = new XMLHttpRequest();
        let dataStr = '';
        Object.keys(param).forEach(key => dataStr += key + '=' + encodeURIComponent(param[key]) + '&')
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    let httpStatus = xhr.statusText
                    callback(true, JSON.parse(response));
                } else {
                    callback(false, response);
                }
            }
        };
        xhr.send(dataStr);
    }

    static postJson(url, param = {}, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send(JSON.stringify(param));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var json = xhr.responseText;//获取到服务端返回的数据
                if (xhr.status >= 200 && xhr.status < 300) {
                    let response = xhr.responseText;
                    callback(true, JSON.parse(response));
                } else {
                    callback(false, response);
                }
            }
        };
    }
}

// 导出工具类
module.exports = HttpUtil;