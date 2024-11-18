
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/GlobalEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a01avjH0lMCbDFtWsW9kZh', 'GlobalEvent');
// Scripts/Core/GlobalEvent.js

"use strict";

//全局事件处理  分发和监听   相当于一个全局观察者
//这个事件分发处理机制 没有针对每个绑定个体的
cc.director.GlobalEvent = {
  handles_: {},
  //发送事件 事件分发
  emit: function emit(eventName, data) {
    var returns = []; //返回值
    //console.log('事件分发', eventName);
    data.eventName = eventName; //保存一下事件名字

    for (var findEvenName in this.handles_) {
      if (findEvenName == eventName) {
        for (var i = 0; i < this.handles_[findEvenName].length; i++) {
          if (this.handles_[findEvenName][i]) {
            var returnValue = this.handles_[findEvenName][i](data);
            returns.push(returnValue);
          }
        }
      }
    }
    return returns;
  },
  //添加普通事件  监听
  on: function on(eventName, callback, target) {
    //console.log('完成事件注册监听', eventName);
    this.handles_[eventName] = this.handles_[eventName] || [];
    this.handles_[eventName].push(callback.bind(target));
  },
  //通过事件名和target移除一种事件监听
  off: function off(eventName) {
    if (!this.handles_[eventName]) return;
    for (var i = 0; i < this.handles_[eventName].length; i++) {
      this.handles_[eventName][i] = null;
    }
  },
  //一次性清空所有数据
  clear: function clear() {
    for (var findEvenName in this.handles_) {
      for (var i = 0; i < this.handles_[findEvenName].length; i++) {
        this.handles_[findEvenName][i] = null;
      }
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcR2xvYmFsRXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiaGFuZGxlc18iLCJlbWl0IiwiZXZlbnROYW1lIiwiZGF0YSIsInJldHVybnMiLCJmaW5kRXZlbk5hbWUiLCJpIiwibGVuZ3RoIiwicmV0dXJuVmFsdWUiLCJwdXNoIiwib24iLCJjYWxsYmFjayIsInRhcmdldCIsImJpbmQiLCJvZmYiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLEdBQUc7RUFDdEJDLFFBQVEsRUFBRSxDQUFDLENBQUM7RUFDWjtFQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBVUMsU0FBUyxFQUFFQyxJQUFJLEVBQUU7SUFDN0IsSUFBSUMsT0FBTyxHQUFHLEVBQUUsRUFBQztJQUNqQjtJQUNBRCxJQUFJLENBQUNELFNBQVMsR0FBR0EsU0FBUzs7SUFFMUIsS0FBTSxJQUFJRyxZQUFZLElBQUksSUFBSSxDQUFDTCxRQUFRLEVBQUU7TUFDckMsSUFBSUssWUFBWSxJQUFJSCxTQUFTLEVBQUU7UUFDM0IsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixRQUFRLENBQUNLLFlBQVksQ0FBQyxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1VBQ3pELElBQUksSUFBSSxDQUFDTixRQUFRLENBQUNLLFlBQVksQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFDbEM7WUFDSSxJQUFJRSxXQUFXLEdBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNLLFlBQVksQ0FBQyxDQUFDQyxDQUFDLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO1lBQ3REQyxPQUFPLENBQUNLLElBQUksQ0FBQ0QsV0FBVyxDQUFDO1VBQzdCO1FBQ0o7TUFDSjtJQUNKO0lBQ0EsT0FBT0osT0FBTztFQUNsQixDQUFDO0VBQ0Q7RUFDQU0sRUFBRSxFQUFFLFNBQUFBLEdBQVVSLFNBQVMsRUFBRVMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7SUFDdkM7SUFDQSxJQUFJLENBQUNaLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFFekQsSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVMsQ0FBQyxDQUFDTyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNLENBQUMsQ0FBQztFQUN4RCxDQUFDO0VBQ0Q7RUFDQUUsR0FBRyxFQUFFLFNBQUFBLElBQVVaLFNBQVMsRUFBRTtJQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVMsQ0FBQyxFQUN6QjtJQUVKLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ04sUUFBUSxDQUFDRSxTQUFTLENBQUMsQ0FBQ0ssTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0RCxJQUFJLENBQUNOLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDLENBQUNJLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDdEM7RUFDSixDQUFDO0VBRUQ7RUFDQVMsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBVTtJQUNiLEtBQU0sSUFBSVYsWUFBWSxJQUFJLElBQUksQ0FBQ0wsUUFBUSxFQUFFO01BQ3JDLEtBQUssSUFBSU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ04sUUFBUSxDQUFDSyxZQUFZLENBQUMsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUN6RCxJQUFJLENBQUNOLFFBQVEsQ0FBQ0ssWUFBWSxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHLElBQUk7TUFDekM7SUFDSjtFQUNKO0FBQ0osQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhajlsYDkuovku7blpITnkIYgIOWIhuWPkeWSjOebkeWQrCAgIOebuOW9k+S6juS4gOS4quWFqOWxgOinguWvn+iAhVxyXG4vL+i/meS4quS6i+S7tuWIhuWPkeWkhOeQhuacuuWItiDmsqHmnInpkojlr7nmr4/kuKrnu5HlrprkuKrkvZPnmoRcclxuY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQgPSB7XHJcbiAgICBoYW5kbGVzXzoge30sXHJcbiAgICAvL+WPkemAgeS6i+S7tiDkuovku7bliIblj5FcclxuICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgICAgICB2YXIgcmV0dXJucyA9IFtdIC8v6L+U5Zue5YC8XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygn5LqL5Lu25YiG5Y+RJywgZXZlbnROYW1lKTtcclxuICAgICAgICBkYXRhLmV2ZW50TmFtZSA9IGV2ZW50TmFtZS8v5L+d5a2Y5LiA5LiL5LqL5Lu25ZCN5a2XXHJcblxyXG4gICAgICAgIGZvciAoIHZhciBmaW5kRXZlbk5hbWUgaW4gdGhpcy5oYW5kbGVzXyApe1xyXG4gICAgICAgICAgICBpZiAoZmluZEV2ZW5OYW1lID09IGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXNfW2ZpbmRFdmVuTmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVzX1tmaW5kRXZlbk5hbWVdW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVzX1tmaW5kRXZlbk5hbWVdW2ldKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybnMucHVzaChyZXR1cm5WYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybnNcclxuICAgIH0sXHJcbiAgICAvL+a3u+WKoOaZrumAmuS6i+S7tiAg55uR5ZCsXHJcbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRhcmdldCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ+WujOaIkOS6i+S7tuazqOWGjOebkeWQrCcsIGV2ZW50TmFtZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVzX1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVzX1tldmVudE5hbWVdIHx8IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYW5kbGVzX1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2suYmluZCh0YXJnZXQpKVxyXG4gICAgfSxcclxuICAgIC8v6YCa6L+H5LqL5Lu25ZCN5ZKMdGFyZ2V056e76Zmk5LiA56eN5LqL5Lu255uR5ZCsXHJcbiAgICBvZmY6IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlc19bZXZlbnROYW1lXSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlc19bZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXNfW2V2ZW50TmFtZV1baV0gPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S4gOasoeaAp+a4heepuuaJgOacieaVsOaNrlxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yICggdmFyIGZpbmRFdmVuTmFtZSBpbiB0aGlzLmhhbmRsZXNfICl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVzX1tmaW5kRXZlbk5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXNfW2ZpbmRFdmVuTmFtZV1baV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG5cclxuXHJcbiJdfQ==