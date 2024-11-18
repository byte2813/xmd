
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Skill/SkillData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7075dYkjClIUqCS4DjP/847', 'SkillData');
// Scripts/DataMap/Skill/SkillData.js

"use strict";

var CostData = require("CostData");
var SkillData = cc.Class({
  name: "SkillData",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    subId: cc.Integer,
    upLevel: cc.Integer,
    desId: cc.Integer,
    upCostList: [CostData],
    // 升级消耗
    skillType: cc.Integer
  }
});
module.exports = SkillData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcU2tpbGxcXFNraWxsRGF0YS5qcyJdLCJuYW1lcyI6WyJDb3N0RGF0YSIsInJlcXVpcmUiLCJTa2lsbERhdGEiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpY29uIiwiSWQiLCJJbnRlZ2VyIiwic3ViSWQiLCJ1cExldmVsIiwiZGVzSWQiLCJ1cENvc3RMaXN0Iiwic2tpbGxUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN4QkMsSUFBSSxFQUFDLFdBQVc7RUFDYkMsVUFBVSxFQUFFO0lBQ1RDLElBQUksRUFBQyxFQUFFO0lBQ1BGLElBQUksRUFBQyxFQUFFO0lBQ1BHLEVBQUUsRUFBQ0wsRUFBRSxDQUFDTSxPQUFPO0lBQ2JDLEtBQUssRUFBQ1AsRUFBRSxDQUFDTSxPQUFPO0lBQ2hCRSxPQUFPLEVBQUNSLEVBQUUsQ0FBQ00sT0FBTztJQUNsQkcsS0FBSyxFQUFDVCxFQUFFLENBQUNNLE9BQU87SUFDaEJJLFVBQVUsRUFBQyxDQUFDYixRQUFRLENBQUM7SUFBQztJQUN0QmMsU0FBUyxFQUFDWCxFQUFFLENBQUNNO0VBQ2hCO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZNLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHZCxTQUFTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29zdERhdGEgPSByZXF1aXJlKFwiQ29zdERhdGFcIik7XHJcbnZhciBTa2lsbERhdGEgPSBjYy5DbGFzcyh7XHJcblx0bmFtZTpcIlNraWxsRGF0YVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgaWNvbjpcIlwiLFxyXG4gICAgICAgbmFtZTpcIlwiLFxyXG4gICAgICAgSWQ6Y2MuSW50ZWdlcixcclxuICAgICAgIHN1YklkOmNjLkludGVnZXIsXHJcbiAgICAgICB1cExldmVsOmNjLkludGVnZXIsXHJcbiAgICAgICBkZXNJZDpjYy5JbnRlZ2VyLFxyXG4gICAgICAgdXBDb3N0TGlzdDpbQ29zdERhdGFdLC8vIOWNh+e6p+a2iOiAl1xyXG4gICAgICAgc2tpbGxUeXBlOmNjLkludGVnZXIsXHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBTa2lsbERhdGE7XHJcbiJdfQ==