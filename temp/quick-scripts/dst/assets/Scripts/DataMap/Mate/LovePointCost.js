
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Mate/LovePointCost.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1b08gbpslOm72d/yYbHuaE', 'LovePointCost');
// Scripts/DataMap/Mate/LovePointCost.js

"use strict";

var LovePointCost = cc.Class({
  name: "LovePointCost",
  properties: {
    curLevel: cc.Integer,
    //当前等级
    LovePoint: cc.Integer,
    //好感度
    cost: cc.Integer //升级好感度消耗
  }
});

module.exports = LovePointCost;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcTWF0ZVxcTG92ZVBvaW50Q29zdC5qcyJdLCJuYW1lcyI6WyJMb3ZlUG9pbnRDb3N0IiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiY3VyTGV2ZWwiLCJJbnRlZ2VyIiwiTG92ZVBvaW50IiwiY29zdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUM1QkMsSUFBSSxFQUFDLGVBQWU7RUFDakJDLFVBQVUsRUFBRTtJQUNYQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssT0FBTztJQUFDO0lBQ2pCQyxTQUFTLEVBQUNOLEVBQUUsQ0FBQ0ssT0FBTztJQUFDO0lBQ3JCRSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDO0VBQ3BCO0FBQ0osQ0FBQyxDQUFDOztBQUNGRyxNQUFNLENBQUNDLE9BQU8sR0FBR1YsYUFBYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBMb3ZlUG9pbnRDb3N0ID0gY2MuQ2xhc3Moe1xyXG5cdG5hbWU6XCJMb3ZlUG9pbnRDb3N0XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBcdGN1ckxldmVsOmNjLkludGVnZXIsLy/lvZPliY3nrYnnuqdcclxuICAgICAgICBMb3ZlUG9pbnQ6Y2MuSW50ZWdlciwvL+WlveaEn+W6plxyXG4gICAgICAgIGNvc3Q6Y2MuSW50ZWdlciwvL+WNh+e6p+WlveaEn+W6pua2iOiAl1xyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTG92ZVBvaW50Q29zdDtcclxuIl19