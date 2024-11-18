
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/httpUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXGh0dHBVdGlsLmpzIl0sIm5hbWVzIjpbIkh0dHBVdGlsIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwiY2FsbGJhY2siLCJkYXRhU3RyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwic3RhdHVzVGV4dCIsInRpbWVvdXQiLCJUaW1lT3V0Iiwic2VuZCIsInBvc3QiLCJwYXJhbSIsIkpTT04iLCJwYXJzZSIsInBvc3RKc29uIiwic3RyaW5naWZ5IiwianNvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFFBQVE7RUFBQSxTQUFBQSxTQUFBO0VBU1Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUklBLFFBQUEsQ0FTT0MsR0FBRyxHQUFWLFNBQUFBLElBQVdDLEdBQUcsRUFBRUMsTUFBTSxFQUFPQyxRQUFRLEVBQUU7SUFBQSxJQUF2QkQsTUFBTTtNQUFOQSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDdkIsSUFBSUUsT0FBTyxHQUFHLEVBQUU7SUFDaEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUMvQkosT0FBTyxJQUFJSSxHQUFHLEdBQUcsR0FBRyxHQUFHQyxrQkFBa0IsQ0FBQ1AsTUFBTSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7SUFDaEUsQ0FBQyxDQUFDO0lBQ0YsSUFBSUosT0FBTyxLQUFLLEVBQUUs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XHJcbiAgICAgKiDlu7bov5/lpJrkuYXmsqHlm57lpI3lsLHov5Tlm55GYWxzZVxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgSHR0cFV0aWxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRpbWVPdXQgPSAyMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHRVTor7fmsYJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtcz17fV1cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAbWVtYmVyb2YgSHR0cFV0aWxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCh1cmwsIHBhcmFtcyA9IHt9LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBkYXRhU3RyID0gJyc7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGFTdHIgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSArICcmJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChkYXRhU3RyICE9PSAnJykge1xyXG4gICAgICAgICAgICBkYXRhU3RyID0gZGF0YVN0ci5zdWJzdHIoMCwgZGF0YVN0ci5sYXN0SW5kZXhPZignJicpKTtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgZGF0YVN0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0dHBTdGF0dXMgPSB4aHIuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gSHR0cFV0aWwuVGltZU91dDtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUE9TVOivt+axglxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW09e31dXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQG1lbWJlcm9mIEh0dHBVdGlsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwb3N0KHVybCwgcGFyYW0gPSB7fSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IGRhdGFTdHIgPSAnJztcclxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbSkuZm9yRWFjaChrZXkgPT4gZGF0YVN0ciArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ba2V5XSkgKyAnJicpXHJcbiAgICAgICAgaWYgKGRhdGFTdHIgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRhdGFTdHIgPSBkYXRhU3RyLnN1YnN0cigwLCBkYXRhU3RyLmxhc3RJbmRleE9mKCcmJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodHRwU3RhdHVzID0geGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCBKU09OLnBhcnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGFTdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb3N0SnNvbih1cmwsIHBhcmFtID0ge30sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbSkpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IHhoci5yZXNwb25zZVRleHQ7Ly/ojrflj5bliLDmnI3liqHnq6/ov5Tlm57nmoTmlbDmja5cclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCBKU09OLnBhcnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDlr7zlh7rlt6XlhbfnsbtcclxubW9kdWxlLmV4cG9ydHMgPSBIdHRwVXRpbDsiXX0=