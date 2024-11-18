"use strict";
cc._RF.push(module, '12ea3sV9XBJQZFiznCm+/8r', 'EventTipData');
// Scripts/DataMap/EventData/EventTipData.js

"use strict";

var EventCost = require("EventCost");
var EventResult = require("EventResult");
var EventTipData = cc.Class({
  name: "EventTipData",
  properties: {
    name: "",
    Id: cc.Integer,
    desId: cc.Integer,
    cost: [EventCost],
    YResults: [EventResult],
    NResults: [EventResult]
  }
});
module.exports = EventTipData;

cc._RF.pop();