
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/CompanyStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c205btXSYJIuaVqivU8/buw', 'CompanyStruct');
// Scripts/OwnData/CompanyStruct.js

"use strict";

//公司
var CompanyStruct = cc.Class({
  name: "CompanyStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    LimitYear: cc.Integer,
    //交易收益开发年限
    isOwned: false,
    bonusRatio: 0.02,
    //收益回报率
    stockNum: cc.Integer,
    //股票数量
    stockCost: 0.00,
    //股票成本
    bankruptPrice: 0.00,
    //破产价格
    stockPrice: 15.25 //股票单价
  },

  //创办或者购买完成后
  RefreshDataAfterOper: function RefreshDataAfterOper(data) {
    var allAss = this.stockCost * this.stockNum + data.price * data.Num;
    this.stockNum += data.Num;
    this.stockCost = Math.floor(allAss / this.stockNum * 100) / 100;
    this.stockPrice = data.price;
    if (this.stockNum > 0) this.isOwned = true;else this.isOwned = false;
    cc.Mgr.UserDataMgr.hasCompany = true;
    var param = {};
    param.Id = this.Id;
    param.stockNum = this.stockNum;
    param.stockPrice = this.stockPrice;
    param.stockCost = this.stockCost;
    return param;
  },
  //出售操作刷新
  RefreshDataAfterSale: function RefreshDataAfterSale(data) {
    this.stockNum -= data.Num;
    this.stockPrice = data.price;
    if (this.stockNum > 0) {
      this.isOwned = true;
      cc.Mgr.UserDataMgr.hasCompany = true;
    } else {
      //cc.log("破产或者卖光了");
      this.stockCost = 0; //全部賣光
      cc.Mgr.UserDataMgr.hasCompany = false;
      cc.Mgr.UserDataMgr.CanGetStockProfit = false;
      this.isOwned = false;
    }
    var param = {};
    param.Id = this.Id;
    param.stockNum = this.stockNum;
    param.stockPrice = this.stockPrice;
    param.stockCost = this.stockCost;
    return param;
  },
  //离婚后操作刷新
  RefreshDataAfterDisvorce: function RefreshDataAfterDisvorce() {
    this.stockNum = Math.floor(this.stockNum * 0.8);
  }
});
module.exports = CompanyStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcQ29tcGFueVN0cnVjdC5qcyJdLCJuYW1lcyI6WyJDb21wYW55U3RydWN0IiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIklkIiwiSW50ZWdlciIsIkxpbWl0WWVhciIsImlzT3duZWQiLCJib251c1JhdGlvIiwic3RvY2tOdW0iLCJzdG9ja0Nvc3QiLCJiYW5rcnVwdFByaWNlIiwic3RvY2tQcmljZSIsIlJlZnJlc2hEYXRhQWZ0ZXJPcGVyIiwiZGF0YSIsImFsbEFzcyIsInByaWNlIiwiTnVtIiwiTWF0aCIsImZsb29yIiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJoYXNDb21wYW55IiwicGFyYW0iLCJSZWZyZXNoRGF0YUFmdGVyU2FsZSIsIkNhbkdldFN0b2NrUHJvZml0IiwiUmVmcmVzaERhdGFBZnRlckRpc3ZvcmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLElBQUlBLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDNUJDLElBQUksRUFBQyxlQUFlO0VBQ3BCQyxVQUFVLEVBQUM7SUFDVkMsSUFBSSxFQUFDLEVBQUU7SUFDUEYsSUFBSSxFQUFDLEVBQUU7SUFDUEcsRUFBRSxFQUFDTCxFQUFFLENBQUNNLE9BQU87SUFDYkMsU0FBUyxFQUFDUCxFQUFFLENBQUNNLE9BQU87SUFBRTtJQUN0QkUsT0FBTyxFQUFDLEtBQUs7SUFDYkMsVUFBVSxFQUFDLElBQUk7SUFBQztJQUNoQkMsUUFBUSxFQUFDVixFQUFFLENBQUNNLE9BQU87SUFBRTtJQUNyQkssU0FBUyxFQUFDLElBQUk7SUFBQztJQUNmQyxhQUFhLEVBQUMsSUFBSTtJQUFFO0lBQ3BCQyxVQUFVLEVBQUMsS0FBSyxDQUFDO0VBQ2xCLENBQUM7O0VBRUQ7RUFDQUMsb0JBQW9CLEVBQUMsU0FBQUEscUJBQVVDLElBQUksRUFBRTtJQUNwQyxJQUFJQyxNQUFNLEdBQUksSUFBSSxDQUFDTCxTQUFTLEdBQUcsSUFBSSxDQUFDRCxRQUFRLEdBQUtLLElBQUksQ0FBQ0UsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUk7SUFDdkUsSUFBSSxDQUFDUixRQUFRLElBQUlLLElBQUksQ0FBQ0csR0FBRztJQUN6QixJQUFJLENBQUNQLFNBQVMsR0FBR1EsSUFBSSxDQUFDQyxLQUFLLENBQUNKLE1BQU0sR0FBRyxJQUFJLENBQUNOLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBQyxHQUFHO0lBQzdELElBQUksQ0FBQ0csVUFBVSxHQUFHRSxJQUFJLENBQUNFLEtBQUs7SUFDNUIsSUFBRyxJQUFJLENBQUNQLFFBQVEsR0FBRyxDQUFDLEVBQ25CLElBQUksQ0FBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUVwQixJQUFJLENBQUNBLE9BQU8sR0FBRyxLQUFLO0lBRXJCUixFQUFFLENBQUNxQixHQUFHLENBQUNDLFdBQVcsQ0FBQ0MsVUFBVSxHQUFHLElBQUk7SUFDcEMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUNuQixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCbUIsS0FBSyxDQUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO0lBQzlCYyxLQUFLLENBQUNYLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7SUFDbENXLEtBQUssQ0FBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUztJQUNoQyxPQUFPYSxLQUFLO0VBQ2IsQ0FBQztFQUNEO0VBQ0FDLG9CQUFvQixFQUFDLFNBQUFBLHFCQUFVVixJQUFJLEVBQUU7SUFDcEMsSUFBSSxDQUFDTCxRQUFRLElBQUlLLElBQUksQ0FBQ0csR0FBRztJQUN6QixJQUFJLENBQUNMLFVBQVUsR0FBR0UsSUFBSSxDQUFDRSxLQUFLO0lBQzVCLElBQUcsSUFBSSxDQUFDUCxRQUFRLEdBQUcsQ0FBQyxFQUNwQjtNQUNDLElBQUksQ0FBQ0YsT0FBTyxHQUFHLElBQUk7TUFDbkJSLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDQyxVQUFVLEdBQUcsSUFBSTtJQUNyQyxDQUFDLE1BRUQ7TUFDQztNQUNBLElBQUksQ0FBQ1osU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNuQlgsRUFBRSxDQUFDcUIsR0FBRyxDQUFDQyxXQUFXLENBQUNDLFVBQVUsR0FBRyxLQUFLO01BQ3JDdkIsRUFBRSxDQUFDcUIsR0FBRyxDQUFDQyxXQUFXLENBQUNJLGlCQUFpQixHQUFHLEtBQUs7TUFDNUMsSUFBSSxDQUFDbEIsT0FBTyxHQUFHLEtBQUs7SUFDckI7SUFFQSxJQUFJZ0IsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUNuQixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCbUIsS0FBSyxDQUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO0lBQzlCYyxLQUFLLENBQUNYLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7SUFDbENXLEtBQUssQ0FBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUztJQUNoQyxPQUFPYSxLQUFLO0VBQ2IsQ0FBQztFQUVEO0VBQ0FHLHdCQUF3QixFQUFDLFNBQUFBLHlCQUFBLEVBQVk7SUFDcEMsSUFBSSxDQUFDakIsUUFBUSxHQUFHUyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNWLFFBQVEsR0FBRyxHQUFHLENBQUM7RUFDaEQ7QUFHRCxDQUFDLENBQUM7QUFDRmtCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHOUIsYUFBYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v5YWs5Y+4XHJcbnZhciBDb21wYW55U3RydWN0ID0gY2MuQ2xhc3Moe1xyXG5cdG5hbWU6XCJDb21wYW55U3RydWN0XCIsXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRpY29uOlwiXCIsXHJcblx0XHRuYW1lOlwiXCIsXHJcblx0XHRJZDpjYy5JbnRlZ2VyLFxyXG5cdFx0TGltaXRZZWFyOmNjLkludGVnZXIsIC8v5Lqk5piT5pS255uK5byA5Y+R5bm06ZmQXHJcblx0XHRpc093bmVkOmZhbHNlLFxyXG5cdFx0Ym9udXNSYXRpbzowLjAyLC8v5pS255uK5Zue5oql546HXHJcblx0XHRzdG9ja051bTpjYy5JbnRlZ2VyLCAvL+iCoeelqOaVsOmHj1xyXG5cdFx0c3RvY2tDb3N0OjAuMDAsLy/ogqHnpajmiJDmnKxcclxuXHRcdGJhbmtydXB0UHJpY2U6MC4wMCwgLy/noLTkuqfku7fmoLxcclxuXHRcdHN0b2NrUHJpY2U6MTUuMjUsLy/ogqHnpajljZXku7dcclxuXHR9LFxyXG5cclxuXHQvL+WIm+WKnuaIluiAhei0reS5sOWujOaIkOWQjlxyXG5cdFJlZnJlc2hEYXRhQWZ0ZXJPcGVyOmZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHR2YXIgYWxsQXNzID0gKHRoaXMuc3RvY2tDb3N0ICogdGhpcy5zdG9ja051bSkgKyAoZGF0YS5wcmljZSAqIGRhdGEuTnVtKTtcclxuXHRcdHRoaXMuc3RvY2tOdW0gKz0gZGF0YS5OdW07XHJcblx0XHR0aGlzLnN0b2NrQ29zdCA9IE1hdGguZmxvb3IoYWxsQXNzIC8gdGhpcy5zdG9ja051bSAqIDEwMCkvMTAwO1xyXG5cdFx0dGhpcy5zdG9ja1ByaWNlID0gZGF0YS5wcmljZVxyXG5cdFx0aWYodGhpcy5zdG9ja051bSA+IDApXHJcblx0XHRcdHRoaXMuaXNPd25lZCA9IHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuaXNPd25lZCA9IGZhbHNlO1xyXG5cclxuXHRcdGNjLk1nci5Vc2VyRGF0YU1nci5oYXNDb21wYW55ID0gdHJ1ZTtcclxuXHRcdHZhciBwYXJhbSA9IHt9O1xyXG5cdFx0cGFyYW0uSWQgPSB0aGlzLklkO1xyXG5cdFx0cGFyYW0uc3RvY2tOdW0gPSB0aGlzLnN0b2NrTnVtO1xyXG5cdFx0cGFyYW0uc3RvY2tQcmljZSA9IHRoaXMuc3RvY2tQcmljZTtcclxuXHRcdHBhcmFtLnN0b2NrQ29zdCA9IHRoaXMuc3RvY2tDb3N0O1xyXG5cdFx0cmV0dXJuIHBhcmFtO1xyXG5cdH0sXHJcblx0Ly/lh7rllK7mk43kvZzliLfmlrBcclxuXHRSZWZyZXNoRGF0YUFmdGVyU2FsZTpmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9ja051bSAtPSBkYXRhLk51bTtcclxuXHRcdHRoaXMuc3RvY2tQcmljZSA9IGRhdGEucHJpY2VcclxuXHRcdGlmKHRoaXMuc3RvY2tOdW0gPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlzT3duZWQgPSB0cnVlO1xyXG5cdFx0XHRjYy5NZ3IuVXNlckRhdGFNZ3IuaGFzQ29tcGFueSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vY2MubG9nKFwi56C05Lqn5oiW6ICF5Y2W5YWJ5LqGXCIpO1xyXG5cdFx0XHR0aGlzLnN0b2NrQ29zdCA9IDA7Ly/lhajpg6jos6PlhYlcclxuXHRcdFx0Y2MuTWdyLlVzZXJEYXRhTWdyLmhhc0NvbXBhbnkgPSBmYWxzZTtcclxuXHRcdFx0Y2MuTWdyLlVzZXJEYXRhTWdyLkNhbkdldFN0b2NrUHJvZml0ID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNPd25lZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwYXJhbSA9IHt9O1xyXG5cdFx0cGFyYW0uSWQgPSB0aGlzLklkO1xyXG5cdFx0cGFyYW0uc3RvY2tOdW0gPSB0aGlzLnN0b2NrTnVtO1xyXG5cdFx0cGFyYW0uc3RvY2tQcmljZSA9IHRoaXMuc3RvY2tQcmljZTtcclxuXHRcdHBhcmFtLnN0b2NrQ29zdCA9IHRoaXMuc3RvY2tDb3N0O1xyXG5cdFx0cmV0dXJuIHBhcmFtO1xyXG5cdH0sXHJcblxyXG5cdC8v56a75ama5ZCO5pON5L2c5Yi35pawXHJcblx0UmVmcmVzaERhdGFBZnRlckRpc3ZvcmNlOmZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuc3RvY2tOdW0gPSBNYXRoLmZsb29yKHRoaXMuc3RvY2tOdW0gKiAwLjgpO1xyXG5cdH0sXHJcblxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcGFueVN0cnVjdDtcclxuIl19