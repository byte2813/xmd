
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Mate/MateData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcTWF0ZVxcTWF0ZURhdGEuanMiXSwibmFtZXMiOlsiTG92ZVBvaW50Q29zdCIsInJlcXVpcmUiLCJNYXRlR2V0Q29uZCIsIk1hdGVCb251cyIsIk1hdGVEYXRhIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiSWQiLCJJbnRlZ2VyIiwiaWNvbiIsImJvbnVzTGlzdCIsInVubG9ja0NvbmQiLCJnZXRDb25kTGlzdCIsInNleCIsImxvdmVQb2ludExpc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlHLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdkJDLElBQUksRUFBQyxVQUFVO0VBQ1pDLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUNKLEVBQUUsQ0FBQ0ssT0FBTztJQUNiQyxJQUFJLEVBQUMsRUFBRTtJQUNQSixJQUFJLEVBQUMsRUFBRTtJQUNQSyxTQUFTLEVBQUMsQ0FBQ1QsU0FBUyxDQUFDO0lBQ3JCVSxVQUFVLEVBQUNSLEVBQUUsQ0FBQ0ssT0FBTztJQUNyQkksV0FBVyxFQUFDLENBQUNaLFdBQVcsQ0FBQztJQUN6QmEsR0FBRyxFQUFDVixFQUFFLENBQUNLLE9BQU87SUFDZE0sYUFBYSxFQUFDLENBQUNoQixhQUFhO0VBQ2hDO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZpQixNQUFNLENBQUNDLE9BQU8sR0FBR2QsUUFBUSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIExvdmVQb2ludENvc3QgPSByZXF1aXJlKFwiTG92ZVBvaW50Q29zdFwiKTtcclxudmFyIE1hdGVHZXRDb25kID0gcmVxdWlyZShcIk1hdGVHZXRDb25kXCIpO1xyXG52YXIgTWF0ZUJvbnVzID0gcmVxdWlyZShcIk1hdGVCb251c1wiKTtcclxudmFyIE1hdGVEYXRhID0gY2MuQ2xhc3Moe1xyXG5cdG5hbWU6XCJNYXRlRGF0YVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIElkOmNjLkludGVnZXIsXHJcbiAgICAgICAgaWNvbjpcIlwiLFxyXG4gICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICBib251c0xpc3Q6W01hdGVCb251c10sXHJcbiAgICAgICAgdW5sb2NrQ29uZDpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIGdldENvbmRMaXN0OltNYXRlR2V0Q29uZF0sXHJcbiAgICAgICAgc2V4OmNjLkludGVnZXIsXHJcbiAgICAgICAgbG92ZVBvaW50TGlzdDpbTG92ZVBvaW50Q29zdF0sXHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBNYXRlRGF0YTtcclxuIl19