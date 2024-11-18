
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/RecordStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c9a12JEohPFq+M5dJulvCd', 'RecordStruct');
// Scripts/OwnData/RecordStruct.js

"use strict";

//需要更多源码联系Q:3038745955
//游戏记录
var RecordStruct = cc.Class({
  name: "RecordStruct",
  properties: {
    retireAge: cc.Integer,
    level: cc.Integer,
    // 1 表示百万富翁 2 表示千万 3 表示亿   0 表示低于百万 
    assets: cc.Integer,
    //达到的资产数额
    highAssets: cc.Integer
  }
});
module.exports = RecordStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcUmVjb3JkU3RydWN0LmpzIl0sIm5hbWVzIjpbIlJlY29yZFN0cnVjdCIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsInJldGlyZUFnZSIsIkludGVnZXIiLCJsZXZlbCIsImFzc2V0cyIsImhpZ2hBc3NldHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzNCQyxJQUFJLEVBQUMsY0FBYztFQUNuQkMsVUFBVSxFQUFDO0lBQ1ZDLFNBQVMsRUFBQ0osRUFBRSxDQUFDSyxPQUFPO0lBQ3BCQyxLQUFLLEVBQUNOLEVBQUUsQ0FBQ0ssT0FBTztJQUFHO0lBQ25CRSxNQUFNLEVBQUNQLEVBQUUsQ0FBQ0ssT0FBTztJQUFFO0lBQ25CRyxVQUFVLEVBQUNSLEVBQUUsQ0FBQ0s7RUFDZjtBQUNELENBQUMsQ0FBQztBQUNGSSxNQUFNLENBQUNDLE9BQU8sR0FBR1gsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/pnIDopoHmm7TlpJrmupDnoIHogZTns7tROjMwMzg3NDU5NTVcclxuLy/muLjmiI/orrDlvZVcclxudmFyIFJlY29yZFN0cnVjdCA9IGNjLkNsYXNzKHtcclxuXHRuYW1lOlwiUmVjb3JkU3RydWN0XCIsXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRyZXRpcmVBZ2U6Y2MuSW50ZWdlcixcclxuXHRcdGxldmVsOmNjLkludGVnZXIsICAvLyAxIOihqOekuueZvuS4h+WvjOe/gSAyIOihqOekuuWNg+S4hyAzIOihqOekuuS6vyAgIDAg6KGo56S65L2O5LqO55m+5LiHIFxyXG5cdFx0YXNzZXRzOmNjLkludGVnZXIsIC8v6L6+5Yiw55qE6LWE5Lqn5pWw6aKdXHJcblx0XHRoaWdoQXNzZXRzOmNjLkludGVnZXIsXHJcblx0fSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gUmVjb3JkU3RydWN0O1xyXG4iXX0=