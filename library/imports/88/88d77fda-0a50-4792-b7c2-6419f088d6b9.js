"use strict";
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