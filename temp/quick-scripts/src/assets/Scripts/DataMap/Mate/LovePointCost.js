"use strict";
cc._RF.push(module, 'd1b08gbpslOm72d/yYbHuaE', 'LovePointCost');
// Scripts/DataMap/Mate/LovePointCost.js

"use strict";

var LovePointCost = cc.Class({
  name: "LovePointCost",
  properties: {
    curLevel: cc.Integer,
    //当前等级
    LovePoint: cc.Integer,
    //好感度
    cost: cc.Integer //升级好感度消耗
  }
});

module.exports = LovePointCost;

cc._RF.pop();