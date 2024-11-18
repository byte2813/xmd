
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/RewardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25306VAhAxP447Ff2c0eJ0v', 'RewardType');
// Scripts/Core/RewardType.js

"use strict";

//事件奖励类型  消耗类型
//无1000 金钱  1001  健康1002  名声1003 
//货物1004 车子1005 房子1006 股票1007数量
//1008 股票价格
var RewardType = cc.Enum({
  NULL: 1000,
  Cash: 1001,
  HP: 1002,
  Reputation: 1003,
  Goods: 1004,
  Car: 1005,
  House: 1006,
  Stock: 1007,
  StockPrice: 1008
});
module.exports = RewardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcUmV3YXJkVHlwZS5qcyJdLCJuYW1lcyI6WyJSZXdhcmRUeXBlIiwiY2MiLCJFbnVtIiwiTlVMTCIsIkNhc2giLCJIUCIsIlJlcHV0YXRpb24iLCJHb29kcyIsIkNhciIsIkhvdXNlIiwiU3RvY2siLCJTdG9ja1ByaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxJQUFJLENBQUM7RUFDckJDLElBQUksRUFBQyxJQUFJO0VBQ1RDLElBQUksRUFBQyxJQUFJO0VBQ1RDLEVBQUUsRUFBQyxJQUFJO0VBQ1BDLFVBQVUsRUFBQyxJQUFJO0VBQ2ZDLEtBQUssRUFBQyxJQUFJO0VBQ1ZDLEdBQUcsRUFBQyxJQUFJO0VBQ1JDLEtBQUssRUFBQyxJQUFJO0VBQ1ZDLEtBQUssRUFBQyxJQUFJO0VBQ1ZDLFVBQVUsRUFBQztBQUNmLENBQUMsQ0FBQztBQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBR2IsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/kuovku7blpZblirHnsbvlnosgIOa2iOiAl+exu+Wei1xyXG4vL+aXoDEwMDAg6YeR6ZKxICAxMDAxICDlgaXlurcxMDAyICDlkI3lo7AxMDAzIFxyXG4vL+i0p+eJqTEwMDQg6L2m5a2QMTAwNSDmiL/lrZAxMDA2IOiCoeelqDEwMDfmlbDph49cclxuLy8xMDA4IOiCoeelqOS7t+agvFxyXG52YXIgUmV3YXJkVHlwZSA9IGNjLkVudW0oe1xyXG4gICAgTlVMTDoxMDAwLFxyXG4gICAgQ2FzaDoxMDAxLFxyXG4gICAgSFA6MTAwMixcclxuICAgIFJlcHV0YXRpb246MTAwMyxcclxuICAgIEdvb2RzOjEwMDQsXHJcbiAgICBDYXI6MTAwNSxcclxuICAgIEhvdXNlOjEwMDYsXHJcbiAgICBTdG9jazoxMDA3LFxyXG4gICAgU3RvY2tQcmljZToxMDA4LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBSZXdhcmRUeXBlO1xyXG4iXX0=