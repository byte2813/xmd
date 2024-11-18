"use strict";
cc._RF.push(module, '181c6ZoJ+BJ+7w9O+xMT2d3', 'MateData');
// Scripts/DataMap/Mate/MateData.js

"use strict";

var LovePointCost = require("LovePointCost");
var MateGetCond = require("MateGetCond");
var MateBonus = require("MateBonus");
var MateData = cc.Class({
  name: "MateData",
  properties: {
    Id: cc.Integer,
    icon: "",
    name: "",
    bonusList: [MateBonus],
    unlockCond: cc.Integer,
    getCondList: [MateGetCond],
    sex: cc.Integer,
    lovePointList: [LovePointCost]
  }
});
module.exports = MateData;

cc._RF.pop();