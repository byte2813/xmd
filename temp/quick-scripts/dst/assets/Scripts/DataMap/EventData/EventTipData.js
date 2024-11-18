
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/EventData/EventTipData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcRXZlbnREYXRhXFxFdmVudFRpcERhdGEuanMiXSwibmFtZXMiOlsiRXZlbnRDb3N0IiwicmVxdWlyZSIsIkV2ZW50UmVzdWx0IiwiRXZlbnRUaXBEYXRhIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiSWQiLCJJbnRlZ2VyIiwiZGVzSWQiLCJjb3N0IiwiWVJlc3VsdHMiLCJOUmVzdWx0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3hCQyxJQUFJLEVBQUMsY0FBYztFQUNuQkMsVUFBVSxFQUFFO0lBQ1JELElBQUksRUFBQyxFQUFFO0lBQ1BFLEVBQUUsRUFBQ0osRUFBRSxDQUFDSyxPQUFPO0lBQ2JDLEtBQUssRUFBQ04sRUFBRSxDQUFDSyxPQUFPO0lBQ25CRSxJQUFJLEVBQUMsQ0FBQ1gsU0FBUyxDQUFDO0lBQ2hCWSxRQUFRLEVBQUMsQ0FBQ1YsV0FBVyxDQUFDO0lBQ3RCVyxRQUFRLEVBQUMsQ0FBQ1gsV0FBVztFQUN0QjtBQUNKLENBQUMsQ0FBQztBQUNGWSxNQUFNLENBQUNDLE9BQU8sR0FBR1osWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEV2ZW50Q29zdCA9IHJlcXVpcmUoXCJFdmVudENvc3RcIik7XHJcbnZhciBFdmVudFJlc3VsdCA9IHJlcXVpcmUoXCJFdmVudFJlc3VsdFwiKTtcclxudmFyIEV2ZW50VGlwRGF0YSA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6XCJFdmVudFRpcERhdGFcIixcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBuYW1lOlwiXCIsXHJcbiAgICAgICAgSWQ6Y2MuSW50ZWdlcixcclxuICAgICAgICBkZXNJZDpjYy5JbnRlZ2VyLFxyXG4gICAgXHRjb3N0OltFdmVudENvc3RdLFxyXG4gICAgXHRZUmVzdWx0czpbRXZlbnRSZXN1bHRdLFxyXG4gICAgXHROUmVzdWx0czpbRXZlbnRSZXN1bHRdLFxyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnRUaXBEYXRhO1xyXG4iXX0=