"use strict";
cc._RF.push(module, 'd509an902dFMKlt6gHvUHp1', 'AchieveData');
// Scripts/DataMap/Achieve/AchieveData.js

"use strict";

var AchieveCondData = require("AchieveCondData");
var AchieveData = cc.Class({
  name: "AchieveData",
  properties: {
    name: "",
    icon: "",
    Id: cc.Integer,
    desId: cc.Integer,
    condList: [AchieveCondData]
    //额外条件 
  }
});

module.exports = AchieveData;

cc._RF.pop();