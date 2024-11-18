
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/UserState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56bc61URDlPyZpfSEmHzgw+', 'UserState');
// Scripts/Core/UserState.js

"use strict";

//玩家状态
var UserState = cc.Enum({
  OK: 1,
  //健康状态
  NotOK: 2 //非健康状态
});

module.exports = UserState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcVXNlclN0YXRlLmpzIl0sIm5hbWVzIjpbIlVzZXJTdGF0ZSIsImNjIiwiRW51bSIsIk9LIiwiTm90T0siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxFQUFFLENBQUNDLElBQUksQ0FBQztFQUNwQkMsRUFBRSxFQUFDLENBQUM7RUFBQztFQUNMQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDOztBQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBR04sU0FBUyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/njqnlrrbnirbmgIFcclxudmFyIFVzZXJTdGF0ZSA9IGNjLkVudW0oe1xyXG4gICAgT0s6MSwvL+WBpeW6t+eKtuaAgVxyXG4gICAgTm90T0s6MiwvL+mdnuWBpeW6t+eKtuaAgVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBVc2VyU3RhdGU7Il19