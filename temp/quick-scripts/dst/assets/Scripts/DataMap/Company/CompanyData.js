
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Company/CompanyData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e61cjcHeVApKXn3yzx/j6m', 'CompanyData');
// Scripts/DataMap/Company/CompanyData.js

"use strict";

var ProData = require("ProData");
var CompanyData = cc.Class({
  name: "CompanyData",
  properties: {
    Id: cc.Integer,
    icon: "",
    name: "",
    inPrice: 15.20,
    // 价格
    outPrice: 15.20,
    //破产点
    LimitYear: cc.Integer,
    //限制交易年限
    bonusRatio: 0.02,
    proList: [ProData],
    //盈亏
    unList: [ProData] //没有买到时候的盈亏刷新比例
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQ29tcGFueVxcQ29tcGFueURhdGEuanMiXSwibmFtZXMiOlsiUHJvRGF0YSIsInJlcXVpcmUiLCJDb21wYW55RGF0YSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIklkIiwiSW50ZWdlciIsImljb24iLCJpblByaWNlIiwib3V0UHJpY2UiLCJMaW1pdFllYXIiLCJib251c1JhdGlvIiwicHJvTGlzdCIsInVuTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDaEMsSUFBSUMsV0FBVyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN2QkMsSUFBSSxFQUFDLGFBQWE7RUFDbEJDLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUNKLEVBQUUsQ0FBQ0ssT0FBTztJQUNiQyxJQUFJLEVBQUMsRUFBRTtJQUNQSixJQUFJLEVBQUMsRUFBRTtJQUNQSyxPQUFPLEVBQUMsS0FBSztJQUFDO0lBQ2RDLFFBQVEsRUFBQyxLQUFLO0lBQUM7SUFDZkMsU0FBUyxFQUFDVCxFQUFFLENBQUNLLE9BQU87SUFBRTtJQUN0QkssVUFBVSxFQUFDLElBQUk7SUFDZkMsT0FBTyxFQUFDLENBQUNkLE9BQU8sQ0FBQztJQUFFO0lBQ25CZSxNQUFNLEVBQUMsQ0FBQ2YsT0FBTyxDQUFDLENBQUM7RUFDckI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcm9EYXRhID0gcmVxdWlyZShcIlByb0RhdGFcIik7XHJcbnZhciBDb21wYW55RGF0YSA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6XCJDb21wYW55RGF0YVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIElkOmNjLkludGVnZXIsXHJcbiAgICAgICAgaWNvbjpcIlwiLFxyXG4gICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICBpblByaWNlOjE1LjIwLC8vIOS7t+agvFxyXG4gICAgICAgIG91dFByaWNlOjE1LjIwLC8v56C05Lqn54K5XHJcbiAgICAgICAgTGltaXRZZWFyOmNjLkludGVnZXIsIC8v6ZmQ5Yi25Lqk5piT5bm06ZmQXHJcbiAgICAgICAgYm9udXNSYXRpbzowLjAyLFxyXG4gICAgICAgIHByb0xpc3Q6W1Byb0RhdGFdLCAvL+ebiOS6j1xyXG4gICAgICAgIHVuTGlzdDpbUHJvRGF0YV0sLy/msqHmnInkubDliLDml7blgJnnmoTnm4jkuo/liLfmlrDmr5TkvotcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=