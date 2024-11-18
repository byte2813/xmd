
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/GoodsStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a6bfQj3VN9pWdfuhsytdD', 'GoodsStruct');
// Scripts/OwnData/GoodsStruct.js

"use strict";

//当前拥有物品  
var GoodsStruct = cc.Class({
  name: "GoodsStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    ownNum: cc.Integer,
    buyPrice: cc.Integer,
    //买入价格
    marketPrice: cc.Integer //当前市场价格
  },

  //购买东西后刷新数据
  RefeshDataAfterBuy: function RefeshDataAfterBuy(data) {
    var allAss = this.buyPrice * this.ownNum + data.price * data.Num;
    this.ownNum += data.Num;
    this.buyPrice = Math.floor(allAss / this.ownNum);
    var param = {};
    param.Id = this.Id;
    param.ownNum = this.ownNum;
    param.buyPrice = this.buyPrice;
    return param;
  },
  //出售
  RefeshDataAfterSale: function RefeshDataAfterSale(data) {
    this.ownNum -= data.Num;
    var param = {};
    param.Id = this.Id;
    param.ownNum = this.ownNum;
    param.buyPrice = this.buyPrice;
    return param;
  }
});
module.exports = GoodsStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcR29vZHNTdHJ1Y3QuanMiXSwibmFtZXMiOlsiR29vZHNTdHJ1Y3QiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpY29uIiwiSWQiLCJJbnRlZ2VyIiwib3duTnVtIiwiYnV5UHJpY2UiLCJtYXJrZXRQcmljZSIsIlJlZmVzaERhdGFBZnRlckJ1eSIsImRhdGEiLCJhbGxBc3MiLCJwcmljZSIsIk51bSIsIk1hdGgiLCJmbG9vciIsInBhcmFtIiwiUmVmZXNoRGF0YUFmdGVyU2FsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCQyxJQUFJLEVBQUMsYUFBYTtFQUNsQkMsVUFBVSxFQUFFO0lBQ1hDLElBQUksRUFBQyxFQUFFO0lBQ1BGLElBQUksRUFBQyxFQUFFO0lBQ1BHLEVBQUUsRUFBQ0wsRUFBRSxDQUFDTSxPQUFPO0lBQ2JDLE1BQU0sRUFBQ1AsRUFBRSxDQUFDTSxPQUFPO0lBQ2pCRSxRQUFRLEVBQUNSLEVBQUUsQ0FBQ00sT0FBTztJQUFDO0lBQ3BCRyxXQUFXLEVBQUNULEVBQUUsQ0FBQ00sT0FBTyxDQUFDO0VBQ3hCLENBQUM7O0VBQ0Q7RUFDQUksa0JBQWtCLEVBQUMsU0FBQUEsbUJBQVVDLElBQUksRUFBRTtJQUNsQyxJQUFJQyxNQUFNLEdBQUksSUFBSSxDQUFDSixRQUFRLEdBQUcsSUFBSSxDQUFDRCxNQUFNLEdBQUtJLElBQUksQ0FBQ0UsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUk7SUFDcEUsSUFBSSxDQUFDUCxNQUFNLElBQUlJLElBQUksQ0FBQ0csR0FBRztJQUN2QixJQUFJLENBQUNOLFFBQVEsR0FBR08sSUFBSSxDQUFDQyxLQUFLLENBQUNKLE1BQU0sR0FBRyxJQUFJLENBQUNMLE1BQU0sQ0FBQztJQUNoRCxJQUFJVSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2RBLEtBQUssQ0FBQ1osRUFBRSxHQUFHLElBQUksQ0FBQ0EsRUFBRTtJQUNsQlksS0FBSyxDQUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO0lBQzFCVSxLQUFLLENBQUNULFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVE7SUFDOUIsT0FBT1MsS0FBSztFQUNiLENBQUM7RUFDRDtFQUNBQyxtQkFBbUIsRUFBQyxTQUFBQSxvQkFBVVAsSUFBSSxFQUFFO0lBQ25DLElBQUksQ0FBQ0osTUFBTSxJQUFJSSxJQUFJLENBQUNHLEdBQUc7SUFDdkIsSUFBSUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUNaLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7SUFDbEJZLEtBQUssQ0FBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtJQUMxQlUsS0FBSyxDQUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO0lBQzlCLE9BQU9TLEtBQUs7RUFDYjtBQUNELENBQUMsQ0FBQztBQUNGRSxNQUFNLENBQUNDLE9BQU8sR0FBR3JCLFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL+W9k+WJjeaLpeacieeJqeWTgSAgXHJcbnZhciBHb29kc1N0cnVjdCA9IGNjLkNsYXNzKHtcclxuXHRuYW1lOlwiR29vZHNTdHJ1Y3RcIixcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRpY29uOlwiXCIsXHJcblx0XHRuYW1lOlwiXCIsXHJcblx0XHRJZDpjYy5JbnRlZ2VyLFxyXG5cdFx0b3duTnVtOmNjLkludGVnZXIsXHJcblx0XHRidXlQcmljZTpjYy5JbnRlZ2VyLC8v5Lmw5YWl5Lu35qC8XHJcblx0XHRtYXJrZXRQcmljZTpjYy5JbnRlZ2VyLC8v5b2T5YmN5biC5Zy65Lu35qC8XHJcblx0fSxcclxuXHQvL+i0reS5sOS4nOilv+WQjuWIt+aWsOaVsOaNrlxyXG5cdFJlZmVzaERhdGFBZnRlckJ1eTpmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0dmFyIGFsbEFzcyA9ICh0aGlzLmJ1eVByaWNlICogdGhpcy5vd25OdW0pICsgKGRhdGEucHJpY2UgKiBkYXRhLk51bSk7XHJcblx0XHR0aGlzLm93bk51bSArPSBkYXRhLk51bTtcclxuXHRcdHRoaXMuYnV5UHJpY2UgPSBNYXRoLmZsb29yKGFsbEFzcyAvIHRoaXMub3duTnVtKTtcclxuXHRcdHZhciBwYXJhbSA9IHt9O1xyXG5cdFx0cGFyYW0uSWQgPSB0aGlzLklkO1xyXG5cdFx0cGFyYW0ub3duTnVtID0gdGhpcy5vd25OdW07XHJcblx0XHRwYXJhbS5idXlQcmljZSA9IHRoaXMuYnV5UHJpY2U7XHJcblx0XHRyZXR1cm4gcGFyYW07XHJcblx0fSxcclxuXHQvL+WHuuWUrlxyXG5cdFJlZmVzaERhdGFBZnRlclNhbGU6ZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdHRoaXMub3duTnVtIC09IGRhdGEuTnVtO1xyXG5cdFx0dmFyIHBhcmFtID0ge307XHJcblx0XHRwYXJhbS5JZCA9IHRoaXMuSWQ7XHJcblx0XHRwYXJhbS5vd25OdW0gPSB0aGlzLm93bk51bTtcclxuXHRcdHBhcmFtLmJ1eVByaWNlID0gdGhpcy5idXlQcmljZTtcclxuXHRcdHJldHVybiBwYXJhbTtcclxuXHR9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBHb29kc1N0cnVjdDtcclxuIl19