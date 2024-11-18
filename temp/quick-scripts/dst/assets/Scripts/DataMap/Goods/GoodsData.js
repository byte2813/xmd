
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Goods/GoodsData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a7505TW61P9ZfY7U548dnv', 'GoodsData');
// Scripts/DataMap/Goods/GoodsData.js

"use strict";

var PriceData = require("PriceData");
var GoodsData = cc.Class({
  name: "GoodsData",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    priceList: [PriceData]
  }
});
module.exports = GoodsData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcR29vZHNcXEdvb2RzRGF0YS5qcyJdLCJuYW1lcyI6WyJQcmljZURhdGEiLCJyZXF1aXJlIiwiR29vZHNEYXRhIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIklkIiwiSW50ZWdlciIsInByaWNlTGlzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDeEJDLElBQUksRUFBQyxXQUFXO0VBQ2JDLFVBQVUsRUFBRTtJQUNYQyxJQUFJLEVBQUMsRUFBRTtJQUNQRixJQUFJLEVBQUMsRUFBRTtJQUNQRyxFQUFFLEVBQUNMLEVBQUUsQ0FBQ00sT0FBTztJQUNWQyxTQUFTLEVBQUMsQ0FBQ1YsU0FBUztFQUN4QjtBQUNKLENBQUMsQ0FBQztBQUNGVyxNQUFNLENBQUNDLE9BQU8sR0FBR1YsU0FBUyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaWNlRGF0YSA9IHJlcXVpcmUoXCJQcmljZURhdGFcIik7XHJcbnZhciBHb29kc0RhdGEgPSBjYy5DbGFzcyh7XHJcblx0bmFtZTpcIkdvb2RzRGF0YVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRpY29uOlwiXCIsXHJcbiAgICBcdG5hbWU6XCJcIixcclxuICAgIFx0SWQ6Y2MuSW50ZWdlcixcclxuICAgICAgICBwcmljZUxpc3Q6W1ByaWNlRGF0YV0sXHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBHb29kc0RhdGE7XHJcbiJdfQ==