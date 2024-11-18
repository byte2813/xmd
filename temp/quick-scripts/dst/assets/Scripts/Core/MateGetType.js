
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/MateGetType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c875fqeMHlNkZoUD58hrwl0', 'MateGetType');
// Scripts/Core/MateGetType.js

"use strict";

//伴侣解锁条件
var MateGetType = cc.Enum({
  Money: 1,
  //花钱                  1111
  House: 2,
  //有房
  Car: 3,
  //有车
  Asset: 4,
  //资产要求  会对应一定数额   1111
  Reputation: 5,
  //名声达到数值 对应数值
  HP: 6,
  //健康值达到多少
  Company: 7 //是否有一家公司
});

module.exports = MateGetType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcTWF0ZUdldFR5cGUuanMiXSwibmFtZXMiOlsiTWF0ZUdldFR5cGUiLCJjYyIsIkVudW0iLCJNb25leSIsIkhvdXNlIiwiQ2FyIiwiQXNzZXQiLCJSZXB1dGF0aW9uIiwiSFAiLCJDb21wYW55IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLFdBQVcsR0FBR0MsRUFBRSxDQUFDQyxJQUFJLENBQUM7RUFDdEJDLEtBQUssRUFBQyxDQUFDO0VBQUU7RUFDVEMsS0FBSyxFQUFDLENBQUM7RUFBRTtFQUNUQyxHQUFHLEVBQUMsQ0FBQztFQUFDO0VBQ05DLEtBQUssRUFBQyxDQUFDO0VBQUM7RUFDUkMsVUFBVSxFQUFDLENBQUM7RUFBQztFQUNiQyxFQUFFLEVBQUMsQ0FBQztFQUFFO0VBQ05DLE9BQU8sRUFBQyxDQUFDLENBQUU7QUFDZixDQUFDLENBQUM7O0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWCxXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+S8tOS+o+ino+mUgeadoeS7tlxyXG52YXIgTWF0ZUdldFR5cGUgPSBjYy5FbnVtKHtcclxuICAgIE1vbmV5OjEsIC8v6Iqx6ZKxICAgICAgICAgICAgICAgICAgMTExMVxyXG4gICAgSG91c2U6MiwgLy/mnInmiL9cclxuICAgIENhcjozLC8v5pyJ6L2mXHJcbiAgICBBc3NldDo0LC8v6LWE5Lqn6KaB5rGCICDkvJrlr7nlupTkuIDlrprmlbDpop0gICAxMTExXHJcbiAgICBSZXB1dGF0aW9uOjUsLy/lkI3lo7Dovr7liLDmlbDlgLwg5a+55bqU5pWw5YC8XHJcbiAgICBIUDo2LCAvL+WBpeW6t+WAvOi+vuWIsOWkmuWwkVxyXG4gICAgQ29tcGFueTo3LCAvL+aYr+WQpuacieS4gOWutuWFrOWPuFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBNYXRlR2V0VHlwZTsiXX0=