
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/CarStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90b744v50RCgbdX1aSxHkRW', 'CarStruct');
// Scripts/OwnData/CarStruct.js

"use strict";

//需要更多源码联系Q:3038745955
//拥有的车
var CarStruct = cc.Class({
  name: "CarStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    ownNum: cc.Integer,
    //拥有数量
    price: cc.Integer,
    addBonus: cc.Integer,
    //增加名声
    addHp: cc.Integer,
    //增加健康值
    addDate: 0 //增加约会成功率
  },

  RefreshData: function RefreshData(addNum) {
    //为负值表示卖出去
    this.ownNum += addNum;
  }
});
module.exports = CarStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcQ2FyU3RydWN0LmpzIl0sIm5hbWVzIjpbIkNhclN0cnVjdCIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImljb24iLCJJZCIsIkludGVnZXIiLCJvd25OdW0iLCJwcmljZSIsImFkZEJvbnVzIiwiYWRkSHAiLCJhZGREYXRlIiwiUmVmcmVzaERhdGEiLCJhZGROdW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3hCQyxJQUFJLEVBQUMsV0FBVztFQUNoQkMsVUFBVSxFQUFDO0lBQ1ZDLElBQUksRUFBQyxFQUFFO0lBQ1BGLElBQUksRUFBQyxFQUFFO0lBQ1BHLEVBQUUsRUFBQ0wsRUFBRSxDQUFDTSxPQUFPO0lBQ2JDLE1BQU0sRUFBQ1AsRUFBRSxDQUFDTSxPQUFPO0lBQUM7SUFDbEJFLEtBQUssRUFBQ1IsRUFBRSxDQUFDTSxPQUFPO0lBQ2hCRyxRQUFRLEVBQUNULEVBQUUsQ0FBQ00sT0FBTztJQUFFO0lBQ3JCSSxLQUFLLEVBQUNWLEVBQUUsQ0FBQ00sT0FBTztJQUFDO0lBQ2pCSyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0VBQ1gsQ0FBQzs7RUFFREMsV0FBVyxFQUFDLFNBQUFBLFlBQVNDLE1BQU0sRUFBRTtJQUFFO0lBQzlCLElBQUksQ0FBQ04sTUFBTSxJQUFJTSxNQUFNO0VBQ3RCO0FBQ0QsQ0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHaEIsU0FBUyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/pnIDopoHmm7TlpJrmupDnoIHogZTns7tROjMwMzg3NDU5NTVcclxuLy/mi6XmnInnmoTovaZcclxudmFyIENhclN0cnVjdCA9IGNjLkNsYXNzKHtcclxuXHRuYW1lOlwiQ2FyU3RydWN0XCIsXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRpY29uOlwiXCIsXHJcblx0XHRuYW1lOlwiXCIsXHJcblx0XHRJZDpjYy5JbnRlZ2VyLFxyXG5cdFx0b3duTnVtOmNjLkludGVnZXIsLy/mi6XmnInmlbDph49cclxuXHRcdHByaWNlOmNjLkludGVnZXIsXHJcblx0XHRhZGRCb251czpjYy5JbnRlZ2VyLCAvL+WinuWKoOWQjeWjsFxyXG5cdFx0YWRkSHA6Y2MuSW50ZWdlciwvL+WinuWKoOWBpeW6t+WAvFxyXG5cdFx0YWRkRGF0ZTowLC8v5aKe5Yqg57qm5Lya5oiQ5Yqf546HXHJcblx0fSxcclxuXHJcblx0UmVmcmVzaERhdGE6ZnVuY3Rpb24oYWRkTnVtKSB7IC8v5Li66LSf5YC86KGo56S65Y2W5Ye65Y67XHJcblx0XHR0aGlzLm93bk51bSArPSBhZGROdW07XHJcblx0fSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQ2FyU3RydWN0O1xyXG4iXX0=