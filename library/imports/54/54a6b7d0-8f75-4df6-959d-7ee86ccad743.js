"use strict";
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