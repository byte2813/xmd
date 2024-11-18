
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/SkillStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0b063Aeh1DZKzAUPvVTiFN', 'SkillStruct');
// Scripts/OwnData/SkillStruct.js

"use strict";

//技能天赋
var SkillStruct = cc.Class({
  name: "SkillStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    subId: cc.Integer,
    level: cc.Integer,
    Uplv: cc.Integer,
    desId: cc.Integer,
    skillType: cc.Integer
  }
});
module.exports = SkillStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcU2tpbGxTdHJ1Y3QuanMiXSwibmFtZXMiOlsiU2tpbGxTdHJ1Y3QiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpY29uIiwiSWQiLCJJbnRlZ2VyIiwic3ViSWQiLCJsZXZlbCIsIlVwbHYiLCJkZXNJZCIsInNraWxsVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCQyxJQUFJLEVBQUMsYUFBYTtFQUNmQyxVQUFVLEVBQUU7SUFDWEMsSUFBSSxFQUFDLEVBQUU7SUFDUEYsSUFBSSxFQUFDLEVBQUU7SUFDUEcsRUFBRSxFQUFDTCxFQUFFLENBQUNNLE9BQU87SUFDYkMsS0FBSyxFQUFDUCxFQUFFLENBQUNNLE9BQU87SUFDYkUsS0FBSyxFQUFDUixFQUFFLENBQUNNLE9BQU87SUFDaEJHLElBQUksRUFBQ1QsRUFBRSxDQUFDTSxPQUFPO0lBQ2ZJLEtBQUssRUFBQ1YsRUFBRSxDQUFDTSxPQUFPO0lBQ2hCSyxTQUFTLEVBQUNYLEVBQUUsQ0FBQ007RUFDakI7QUFDSixDQUFDLENBQUM7QUFDRk0sTUFBTSxDQUFDQyxPQUFPLEdBQUdkLFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL+aKgOiDveWkqei1i1xyXG52YXIgU2tpbGxTdHJ1Y3QgPSBjYy5DbGFzcyh7XHJcblx0bmFtZTpcIlNraWxsU3RydWN0XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBcdGljb246XCJcIixcclxuICAgIFx0bmFtZTpcIlwiLFxyXG4gICAgXHRJZDpjYy5JbnRlZ2VyLFxyXG4gICAgXHRzdWJJZDpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIGxldmVsOmNjLkludGVnZXIsXHJcbiAgICAgICAgVXBsdjpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIGRlc0lkOmNjLkludGVnZXIsXHJcbiAgICAgICAgc2tpbGxUeXBlOmNjLkludGVnZXIsXHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBTa2lsbFN0cnVjdDtcclxuIl19