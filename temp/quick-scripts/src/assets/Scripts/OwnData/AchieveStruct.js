"use strict";
cc._RF.push(module, '135359mmUBNzJSKPP8LUpRg', 'AchieveStruct');
// Scripts/OwnData/AchieveStruct.js

"use strict";

//达到成就
var AchieveStruct = cc.Class({
  name: "AchieveStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    desId: cc.Integer,
    hasFinish: false
  }
});
module.exports = AchieveStruct;

cc._RF.pop();