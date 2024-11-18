"use strict";
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