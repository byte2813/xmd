"use strict";
cc._RF.push(module, 'fe15dE7wbtD3KspKLh/Cq0R', 'httpUtil');
// Scripts/utils/httpUtil.js

"use strict";

var HttpUtil = /*#__PURE__*/function () {
  function HttpUtil() {}
  /**
   * GET请求
   *
   * @static
   * @param {string} url
   * @param {object} [params={}]
   * @param {Function} callback
   * @memberof HttpUtil
   */
  HttpUtil.get = function get(url, params, callback) {
    if (params === void 0) {
      params = {};
    }
    var dataStr = '';
    Object.keys(params).forEach(function (key) {
      dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var _response = xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300) {
          var httpStatus = xhr.statusText;
          callback(true, _response);
        } else {
          callback(false, _response);
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
   */;
  HttpUtil.post = function post(url, param, callback) {
    if (param === void 0) {
      param = {};
    }
    var xhr = new XMLHttpRequest();
    var dataStr = '';
    Object.keys(param).forEach(function (key) {
      return dataStr += key + '=' + encodeURIComponent(param[key]) + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
    }
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var _response2 = xhr.responseText;
        if (xhr.status >= 200 && xhr.status < 300) {
          var httpStatus = xhr.statusText;
          callback(true, JSON.parse(_response2));
        } else {
          callback(false, _response2);
        }
      }
    };
    xhr.send(dataStr);
  };
  HttpUtil.postJson = function postJson(url, param, callback) {
    if (param === void 0) {
      param = {};
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(param));
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var json = xhr.responseText; //获取到服务端返回的数据
        if (xhr.status >= 200 && xhr.status < 300) {
          var _response3 = xhr.responseText;
          callback(true, JSON.parse(_response3));
        } else {
          callback(false, response);
        }
      }
    };
  };
  return HttpUtil;
}(); // 导出工具类
/**
 * 延迟多久没回复就返回False
 *
 * @type {number}
 * @memberof HttpUtil
 */
HttpUtil.TimeOut = 200;
module.exports = HttpUtil;

cc._RF.pop();