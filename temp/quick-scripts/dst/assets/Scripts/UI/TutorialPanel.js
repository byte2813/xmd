
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/TutorialPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9be414DADdLBatqtP6i0G8v', 'TutorialPanel');
// Scripts/UI/TutorialPanel.js

"use strict";

var TutorialStep = require("TutorialStep");
var TutorialPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    DesLbl: cc.Label,
    step: 1,
    //记录引导步骤

    Finger: cc.Node,
    EffectCircle: cc.Node,
    TpObj: cc.Node,
    DesObj: cc.Node,
    //下面是引导点位置
    pos11: cc.Node,
    pos12: cc.Node,
    pos13: cc.Node,
    pos14: cc.Node,
    pos15: cc.Node,
    pos21: cc.Node,
    pos22: cc.Node,
    pos31: cc.Node,
    pos32: cc.Node,
    callFunc: null
  },
  ShowPanel: function ShowPanel(dt) {
    this.step = dt.step;
    //cc.log("设定位置============" + this.step);
    var des = "tutorial_" + this.step;
    this.DesLbl.string = cc.Mgr.global.getTranslation(des);
    switch (this.step) {
      case 11:
        this.SetTpObjPos(this.pos11.getPosition(), 11);
        break;
      case 12:
        this.SetTpObjPos(this.pos12.getPosition(), 12);
        break;
      case 13:
        this.SetTpObjPos(this.pos13.getPosition(), 13);
        break;
      case 14:
        this.SetTpObjPos(this.pos14.getPosition(), 14);
        break;
      case 15:
        this.SetTpObjPos(this.pos15.getPosition(), 15);
        break;
      case 21:
        this.SetTpObjPos(this.pos21.getPosition(), 21);
        break;
      case 22:
        this.SetTpObjPos(this.pos22.getPosition(), 22);
        break;
      case 31:
        this.SetTpObjPos(this.pos31.getPosition(), 31);
        break;
      case 32:
        this.SetTpObjPos(this.pos32.getPosition(), 32);
        break;
      case 41:
        this.SetTpObjPos(this.pos32.getPosition(), 41);
        break;
      case 51:
        this.SetTpObjPos(this.pos32.getPosition(), 51);
        break;
      default:
        this.ClosePanel();
        break;
    }
  },
  ClosePanel: function ClosePanel() {
    this.node.active = false;
  },
  SetCallFunc: function SetCallFunc(func) {
    this.callFunc = null;
    this.callFunc = func;
  },
  SetTpObjPos: function SetTpObjPos(pos, tutorrialId) {
    //cc.log("设定位置============");
    this.TpObj.setPosition(pos);
    if (tutorrialId == 12 || tutorrialId == 15) this.DesObj.setPosition(30, 145);else this.DesObj.setPosition(-110, 145);
    if (tutorrialId == TutorialStep.DateToMarry_1 || tutorrialId == TutorialStep.MateDate_2 || tutorrialId == TutorialStep.Business_2 || tutorrialId == TutorialStep.StockBonus_1) {
      this.Finger.active = false;
      this.EffectCircle.active = false;
    } else {
      this.Finger.active = true;
      this.EffectCircle.active = true;
    }
  },
  StartTutorialStep: function StartTutorialStep() {
    if (this.callFunc != null && typeof this.callFunc == "function") {
      this.callFunc();
      //cc.log("_________________________________________");
    }
  },

  StartSpNextTutorialStep: function StartSpNextTutorialStep() {
    if (this.step == TutorialStep.DateToMarry_1 || this.step == TutorialStep.MateDate_2 || this.step == TutorialStep.Business_2 || this.step == TutorialStep.StockBonus_1) {
      cc.Mgr.AudioMgr.playSFX("click");
      if (this.callFunc != null && typeof this.callFunc == "function") {
        this.callFunc();
      }
    }
  }
});
module.exports = TutorialPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFR1dG9yaWFsUGFuZWwuanMiXSwibmFtZXMiOlsiVHV0b3JpYWxTdGVwIiwicmVxdWlyZSIsIlR1dG9yaWFsUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkRlc0xibCIsIkxhYmVsIiwic3RlcCIsIkZpbmdlciIsIk5vZGUiLCJFZmZlY3RDaXJjbGUiLCJUcE9iaiIsIkRlc09iaiIsInBvczExIiwicG9zMTIiLCJwb3MxMyIsInBvczE0IiwicG9zMTUiLCJwb3MyMSIsInBvczIyIiwicG9zMzEiLCJwb3MzMiIsImNhbGxGdW5jIiwiU2hvd1BhbmVsIiwiZHQiLCJkZXMiLCJzdHJpbmciLCJNZ3IiLCJnbG9iYWwiLCJnZXRUcmFuc2xhdGlvbiIsIlNldFRwT2JqUG9zIiwiZ2V0UG9zaXRpb24iLCJDbG9zZVBhbmVsIiwibm9kZSIsImFjdGl2ZSIsIlNldENhbGxGdW5jIiwiZnVuYyIsInBvcyIsInR1dG9ycmlhbElkIiwic2V0UG9zaXRpb24iLCJEYXRlVG9NYXJyeV8xIiwiTWF0ZURhdGVfMiIsIkJ1c2luZXNzXzIiLCJTdG9ja0JvbnVzXzEiLCJTdGFydFR1dG9yaWFsU3RlcCIsIlN0YXJ0U3BOZXh0VHV0b3JpYWxTdGVwIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDMUMsSUFBSUMsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN6QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUNKLEVBQUUsQ0FBQ0ssS0FBSztJQUNmQyxJQUFJLEVBQUMsQ0FBQztJQUFFOztJQUVSQyxNQUFNLEVBQUNQLEVBQUUsQ0FBQ1EsSUFBSTtJQUNkQyxZQUFZLEVBQUNULEVB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QUksQ0FBQ0EsUUFBUSxJQUFJLFVBQVUsRUFDOUQ7TUFDSSxJQUFJLENBQUNBLFFBQVEsRUFBRTtNQUNmO0lBQ0o7RUFDSixDQUFDOztFQUVEdUIsdUJBQXVCLEVBQUMsU0FBQUEsd0JBQUEsRUFDeEI7SUFDSSxJQUFHLElBQUksQ0FBQ3RDLElBQUksSUFBSVQsWUFBWSxDQUFDMEMsYUFBYSxJQUFJLElBQUksQ0FBQ2pDLElBQUksSUFBSVQsWUFBWSxDQUFDMkMsVUFBVSxJQUFJLElBQUksQ0FBQ2xDLElBQUksSUFBSVQsWUFBWSxDQUFDNEMsVUFBVSxJQUFJLElBQUksQ0FBQ25DLElBQUksSUFBSVQsWUFBWSxDQUFDNkMsWUFBWSxFQUNwSztNQUNJMUMsRUFBRSxDQUFDMEIsR0FBRyxDQUFDbUIsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQ2hDLElBQUcsSUFBSSxDQUFDekIsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQ0EsUUFBUSxJQUFJLFVBQVUsRUFDOUQ7UUFDSSxJQUFJLENBQUNBLFFBQVEsRUFBRTtNQUNuQjtJQUNKO0VBQ0o7QUFDSixDQUFDLENBQUM7QUFDRjBCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHakQsYUFBYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFR1dG9yaWFsU3RlcCA9IHJlcXVpcmUoXCJUdXRvcmlhbFN0ZXBcIik7IFxyXG52YXIgVHV0b3JpYWxQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgRGVzTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIHN0ZXA6MSwgLy/orrDlvZXlvJXlr7zmraXpqqRcclxuXHJcbiAgICAgICAgRmluZ2VyOmNjLk5vZGUsXHJcbiAgICAgICAgRWZmZWN0Q2lyY2xlOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIFRwT2JqOmNjLk5vZGUsXHJcbiAgICAgICAgRGVzT2JqOmNjLk5vZGUsXHJcbiAgICAgICAgLy/kuIvpnaLmmK/lvJXlr7zngrnkvY3nva5cclxuICAgICAgICBwb3MxMTpjYy5Ob2RlLFxyXG4gICAgICAgIHBvczEyOmNjLk5vZGUsXHJcbiAgICAgICAgcG9zMTM6Y2MuTm9kZSxcclxuICAgICAgICBwb3MxNDpjYy5Ob2RlLFxyXG4gICAgICAgIHBvczE1OmNjLk5vZGUsXHJcblxyXG4gICAgICAgIHBvczIxOmNjLk5vZGUsXHJcbiAgICAgICAgcG9zMjI6Y2MuTm9kZSxcclxuXHJcbiAgICAgICAgcG9zMzE6Y2MuTm9kZSxcclxuICAgICAgICBwb3MzMjpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBjYWxsRnVuYzpudWxsLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24oZHQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gZHQuc3RlcDtcclxuICAgICAgICAvL2NjLmxvZyhcIuiuvuWumuS9jee9rj09PT09PT09PT09PVwiICsgdGhpcy5zdGVwKTtcclxuICAgICAgICB2YXIgZGVzID0gXCJ0dXRvcmlhbF9cIit0aGlzLnN0ZXA7XHJcbiAgICAgICAgdGhpcy5EZXNMYmwuc3RyaW5nID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihkZXMpO1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnN0ZXApe1xyXG4gICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMTEuZ2V0UG9zaXRpb24oKSwxMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMTIuZ2V0UG9zaXRpb24oKSwxMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMTMuZ2V0UG9zaXRpb24oKSwxMyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMTQuZ2V0UG9zaXRpb24oKSwxNCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMTUuZ2V0UG9zaXRpb24oKSwgMTUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgdGhpcy5TZXRUcE9ialBvcyh0aGlzLnBvczIxLmdldFBvc2l0aW9uKCksMjEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgdGhpcy5TZXRUcE9ialBvcyh0aGlzLnBvczIyLmdldFBvc2l0aW9uKCksMjIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzMTpcclxuICAgICAgICAgICAgdGhpcy5TZXRUcE9ialBvcyh0aGlzLnBvczMxLmdldFBvc2l0aW9uKCksIDMxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VHBPYmpQb3ModGhpcy5wb3MzMi5nZXRQb3NpdGlvbigpLCAzMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQxOlxyXG4gICAgICAgICAgICB0aGlzLlNldFRwT2JqUG9zKHRoaXMucG9zMzIuZ2V0UG9zaXRpb24oKSwgNDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1MTpcclxuICAgICAgICAgICAgdGhpcy5TZXRUcE9ialBvcyh0aGlzLnBvczMyLmdldFBvc2l0aW9uKCksIDUxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMuQ2xvc2VQYW5lbCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIFNldENhbGxGdW5jOmZ1bmN0aW9uKGZ1bmMpe1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1bmMgPSBmdW5jO1xyXG4gICAgfSxcclxuXHJcbiAgICBTZXRUcE9ialBvczpmdW5jdGlvbihwb3MsIHR1dG9ycmlhbElkKVxyXG4gICAge1xyXG4gICAgICAgIC8vY2MubG9nKFwi6K6+5a6a5L2N572uPT09PT09PT09PT09XCIpO1xyXG4gICAgICAgIHRoaXMuVHBPYmouc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBpZih0dXRvcnJpYWxJZCA9PSAxMiB8fCB0dXRvcnJpYWxJZCA9PSAxNSlcclxuICAgICAgICAgICAgdGhpcy5EZXNPYmouc2V0UG9zaXRpb24oMzAsMTQ1KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuRGVzT2JqLnNldFBvc2l0aW9uKC0xMTAsMTQ1KTtcclxuXHJcblxyXG4gICAgICAgIGlmKHR1dG9ycmlhbElkID09IFR1dG9yaWFsU3RlcC5EYXRlVG9NYXJyeV8xIHx8IHR1dG9ycmlhbElkID09IFR1dG9yaWFsU3RlcC5NYXRlRGF0ZV8yIHx8IHR1dG9ycmlhbElkID09IFR1dG9yaWFsU3RlcC5CdXNpbmVzc18yIHx8IHR1dG9ycmlhbElkID09IFR1dG9yaWFsU3RlcC5TdG9ja0JvbnVzXzEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkZpbmdlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5FZmZlY3RDaXJjbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuRmluZ2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuRWZmZWN0Q2lyY2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBTdGFydFR1dG9yaWFsU3RlcDpmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5jYWxsRnVuYyAhPSBudWxsICYmIHR5cGVvZiB0aGlzLmNhbGxGdW5jID09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFN0YXJ0U3BOZXh0VHV0b3JpYWxTdGVwOmZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnN0ZXAgPT0gVHV0b3JpYWxTdGVwLkRhdGVUb01hcnJ5XzEgfHwgdGhpcy5zdGVwID09IFR1dG9yaWFsU3RlcC5NYXRlRGF0ZV8yIHx8IHRoaXMuc3RlcCA9PSBUdXRvcmlhbFN0ZXAuQnVzaW5lc3NfMiB8fCB0aGlzLnN0ZXAgPT0gVHV0b3JpYWxTdGVwLlN0b2NrQm9udXNfMSlcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FsbEZ1bmMgIT0gbnVsbCAmJiB0eXBlb2YgdGhpcy5jYWxsRnVuYyA9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFR1dG9yaWFsUGFuZWw7XHJcbiJdfQ==