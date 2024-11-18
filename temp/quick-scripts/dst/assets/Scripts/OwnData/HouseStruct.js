
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/HouseStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88d77/aClBHkrfCZBnwiNa5', 'HouseStruct');
// Scripts/OwnData/HouseStruct.js

"use strict";

//房子
var HouseStruct = cc.Class({
  name: "HouseStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    ownNum: cc.Integer,
    //拥有数量
    price: cc.Integer,
    addBonus: cc.Integer,
    //增加名声
    addHp: cc.Integer //增加健康值
  },

  RefreshData: function RefreshData(addNum) {
    //为负值表示卖出去
    this.ownNum += addNum;
  }
});
module.exports = HouseStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcSG91c2VTdHJ1Y3QuanMiXSwibmFtZXMiOlsiSG91c2VTdHJ1Y3QiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpY29uIiwiSWQiLCJJbnRlZ2VyIiwib3duTnVtIiwicHJpY2UiLCJhZGRCb251cyIsImFkZEhwIiwiUmVmcmVzaERhdGEiLCJhZGROdW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBSUEsV0FBVyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUMxQkMsSUFBSSxFQUFDLGFBQWE7RUFDbEJDLFVBQVUsRUFBQztJQUNWQyxJQUFJLEVBQUMsRUFBRTtJQUNQRixJQUFJLEVBQUMsRUFBRTtJQUNQRyxFQUFFLEVBQUNMLEVBQUUsQ0FBQ00sT0FBTztJQUNiQyxNQUFNLEVBQUNQLEVBQUUsQ0FBQ00sT0FBTztJQUFDO0lBQ2xCRSxLQUFLLEVBQUNSLEVBQUUsQ0FBQ00sT0FBTztJQUNoQkcsUUFBUSxFQUFDVCxFQUFFLENBQUNNLE9BQU87SUFBRTtJQUNyQkksS0FBSyxFQUFDVixFQUFFLENBQUNNLE9BQU8sQ0FBQztFQUNsQixDQUFDOztFQUVESyxXQUFXLEVBQUMsU0FBQUEsWUFBU0MsTUFBTSxFQUFFO0lBQUU7SUFDOUIsSUFBSSxDQUFDTCxNQUFNLElBQUlLLE1BQU07RUFDdEI7QUFDRCxDQUFDLENBQUM7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdmLFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL+aIv+WtkFxyXG52YXIgSG91c2VTdHJ1Y3QgPSBjYy5DbGFzcyh7XHJcblx0bmFtZTpcIkhvdXNlU3RydWN0XCIsXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRpY29uOlwiXCIsXHJcblx0XHRuYW1lOlwiXCIsXHJcblx0XHRJZDpjYy5JbnRlZ2VyLFxyXG5cdFx0b3duTnVtOmNjLkludGVnZXIsLy/mi6XmnInmlbDph49cclxuXHRcdHByaWNlOmNjLkludGVnZXIsXHJcblx0XHRhZGRCb251czpjYy5JbnRlZ2VyLCAvL+WinuWKoOWQjeWjsFxyXG5cdFx0YWRkSHA6Y2MuSW50ZWdlciwvL+WinuWKoOWBpeW6t+WAvFxyXG5cdH0sXHJcblxyXG5cdFJlZnJlc2hEYXRhOmZ1bmN0aW9uKGFkZE51bSkgeyAvL+S4uui0n+WAvOihqOekuuWNluWHuuWOu1xyXG5cdFx0dGhpcy5vd25OdW0gKz0gYWRkTnVtO1xyXG5cdH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEhvdXNlU3RydWN0O1xyXG4iXX0=