
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Achieve/AchieveData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQWNoaWV2ZVxcQWNoaWV2ZURhdGEuanMiXSwibmFtZXMiOlsiQWNoaWV2ZUNvbmREYXRhIiwicmVxdWlyZSIsIkFjaGlldmVEYXRhIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIklkIiwiSW50ZWdlciIsImRlc0lkIiwiY29uZExpc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ2hELElBQUlDLFdBQVcsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdkJDLElBQUksRUFBQyxhQUFhO0VBRWxCQyxVQUFVLEVBQUU7SUFDWEQsSUFBSSxFQUFDLEVBQUU7SUFDUEUsSUFBSSxFQUFDLEVBQUU7SUFDSkMsRUFBRSxFQUFDTCxFQUFFLENBQUNNLE9BQU87SUFDYkMsS0FBSyxFQUFDUCxFQUFFLENBQUNNLE9BQU87SUFDaEJFLFFBQVEsRUFBQyxDQUFDWCxlQUFlO0lBQzFCO0VBQ0g7QUFDSixDQUFDLENBQUM7O0FBQ0ZZLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWCxXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWNoaWV2ZUNvbmREYXRhID0gcmVxdWlyZShcIkFjaGlldmVDb25kRGF0YVwiKTtcclxudmFyIEFjaGlldmVEYXRhID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTpcIkFjaGlldmVEYXRhXCIsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRuYW1lOlwiXCIsXHJcbiAgICBcdGljb246XCJcIixcclxuICAgICAgICBJZDpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIGRlc0lkOmNjLkludGVnZXIsXHJcbiAgICAgICAgY29uZExpc3Q6W0FjaGlldmVDb25kRGF0YV0sXHJcbiAgICAgICAvL+mineWkluadoeS7tiBcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEFjaGlldmVEYXRhO1xyXG4iXX0=