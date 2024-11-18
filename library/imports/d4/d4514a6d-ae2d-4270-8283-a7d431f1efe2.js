"use strict";
cc._RF.push(module, 'd4514ptri1CcIKDp9Qx8e/i', 'HouseData');
// Scripts/DataMap/House/HouseData.js

"use strict";

var HouseData = cc.Class({
  name: "HouseData",
  properties: {
    Id: cc.Integer,
    price: cc.Integer,
    icon: "",
    name: "",
    addBonus: cc.Integer,
    //增加名声
    addHp: cc.Integer //增加健康值
  }
});

module.exports = HouseData;

cc._RF.pop();