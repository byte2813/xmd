
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/CommonTipPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34709sQva1EMoBVrzPj89V0', 'CommonTipPanel');
// Scripts/UI/CommonTipPanel.js

"use strict";

var Event = require("Event");
var MateUnLockType = require("MateUnLockType");
var CommonTipPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    titleLbl: cc.Sprite,
    TipLbl: cc.RichText,
    forWhat: "",
    cost: cc.Integer,
    videoPath: ""
  },
  ShowPanel: function ShowPanel(data) {
    if (data.forWhat != null && data.forWhat != "") this.forWhat = data.forWhat;else this.forWhat = "";

    //this.titleLbl.string = "提示说明";

    this.cost = 0;
    if (this.forWhat == "StockBonus") {
      var companyName = cc.Mgr.global.getTranslation("company_" + data.Id);
      this.TipLbl.string = "<color=#696969>股票市场-" + companyName + "-获得收益</c>" + "<color=#e77122>" + data.bonus + "</c>" + "<color=#696969>元</c>";
    } else if (this.forWhat == "Treat") {
      this.cost = data.needMoney - Math.floor(data.needMoney * cc.Mgr.UserDataMgr.TreatBonus);
      this.TipLbl.string = "花费" + this.cost + "治疗，以恢复健康";
    } else if (this.forWhat == "shareVideo") {
      this.videoPath = data.videoPath;
      this.TipLbl.string = "<color=#696969>" + data.text + "</c>";
    } else {
      this.TipLbl.string = "<color=#696969>" + data.text + "</c>";
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    if (this.forWhat == "HealthLine") {
      cc.Mgr.UserDataMgr.UnLockMateByInHospital(MateUnLockType.InHospital, cc.Mgr.UserDataMgr.Sex);
    } else if (this.forWhat == "DateLater") {
      if (cc.Mgr.UserDataMgr.tutorialMatePoint == false) cc.director.GlobalEvent.emit(cc.Mgr.Event.DateLater, {});
    }
    this.forWhat = "";
    this.node.active = false;
    //cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenEventTip, {});
  },

  ClickConfirm: function ClickConfirm() {
    if (this.forWhat == "Treat") {
      //计算下所需要的钱 消耗金额=2000*1.18^(当前年龄-20)*（1-当前健康度/100），向上取整
      var needMoney = this.cost; //Math.floor(2000* Math.pow(1.18, cc.Mgr.UserDataMgr.Age-20) *(1-cc.Mgr.UserDataMgr.HpPoint/100));
      if (cc.Mgr.UserDataMgr.Cash < needMoney) {
        this.TipLbl.string = "你的钱不够啊,等有钱了再来吧";
        return;
      }
      cc.Mgr.UserDataMgr.Cash -= needMoney;
      cc.Mgr.UserDataMgr.HpPoint = 100;
      cc.director.GlobalEvent.emit(cc.Mgr.Event.TreatSuccess, {});
    } else if (this.forWhat == "Retire") {
      cc.director.GlobalEvent.emit(cc.Mgr.Event.Retire, {});
    } else if (this.forWhat == "HealthLine") {
      cc.Mgr.UserDataMgr.UnLockMateByInHospital(MateUnLockType.InHospital, cc.Mgr.UserDataMgr.Sex);
    } else if (this.forWhat == "OpenDate") {
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenEnjoy, {});
    } else if (this.forWhat == "Login") {
      cc.Mgr.PlatformController.Login();
    } else if (this.forWhat == "shareVideo") {
      cc.director.GlobalEvent.emit(cc.Mgr.Event.ShareVideo, {
        videoPath: this.videoPath
      });
    }
    this.ClosePanel();
  }
});
module.exports = CommonTipPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXENvbW1vblRpcFBhbmVsLmpzIl0sIm5hbWVzIjpbIkV2ZW50IiwicmVxdWlyZSIsIk1hdGVVbkxvY2tUeXBlIiwiQ29tbW9uVGlwUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTGJsIiwiU3ByaXRlIiwiVGlwTGJsIiwiUmljaFRleHQiLCJmb3JXaGF0IiwiY29zdCIsIkludGVnZXIiLCJ2aWRlb1BhdGgiLCJTaG93UGFuZWwiLCJkYXRhIiwiY29tcGFueU5hbWUiLCJNZ3IiLCJnbG9iYWwiLCJnZXRUcmFuc2xhdGlvbiIsIklkIiwic3RyaW5nIiwiYm9udXMiLCJuZWVkTW9uZXkiLCJNYXRoIiwiZmxvb3IiLCJVc2VyRGF0YU1nciIsIlRyZWF0Qm9udXMiLCJ0ZXh0IiwiQ2xvc2VQYW5lbCIsIkF1ZGlvTWdyIiwicGxheVNGWCIsIlVuTG9ja01hdGVCeUluSG9zcGl0YWwiLCJJbkhvc3BpdGFsIiwiU2V4IiwidHV0b3JpYWxNYXRlUG9pbnQiLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkRhdGVMYXRlciIsIm5vZGUiLCJhY3RpdmUiLCJDbGlja0NvbmZpcm0iLCJDYXNoIiwiSHBQb2ludCIsIlRyZWF0U3VjY2VzcyIsIlJldGlyZSIsIk9wZW5FbmpveSIsIlBsYXRmb3JtQ29udHJvbGxlciIsIkxvZ2luIiwiU2hhcmVWaWRlbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzVCLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLElBQUlFLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDMUIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFD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Q25CLEtBQUssQ0FBQ2lELFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLE1BQ0ksSUFBRyxJQUFJLENBQUNyQyxPQUFPLElBQUksT0FBTyxFQUMvQjtNQUNJUixFQUFFLENBQUNlLEdBQUcsQ0FBQytCLGtCQUFrQixDQUFDQyxLQUFLLEVBQUU7SUFDckMsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDdkMsT0FBTyxJQUFJLFlBQVksRUFBRTtNQUNuQ1IsRUFBRSxDQUFDa0MsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQ3BDLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDbkIsS0FBSyxDQUFDb0QsVUFBVSxFQUFFO1FBQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDQTtNQUFTLENBQUMsQ0FBQztJQUN0RjtJQUVBLElBQUksQ0FBQ2dCLFVBQVUsRUFBRTtFQUNyQjtBQUVKLENBQUMsQ0FBQztBQUNGc0IsTUFBTSxDQUFDQyxPQUFPLEdBQUduRCxjQUFjIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRXZlbnQgPSByZXF1aXJlKFwiRXZlbnRcIik7XHJcbnZhciBNYXRlVW5Mb2NrVHlwZSA9IHJlcXVpcmUoXCJNYXRlVW5Mb2NrVHlwZVwiKTtcclxudmFyIENvbW1vblRpcFBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0aXRsZUxibDpjYy5TcHJpdGUsXHJcbiAgICAgICAgVGlwTGJsOmNjLlJpY2hUZXh0LFxyXG4gICAgICAgIGZvcldoYXQ6XCJcIixcclxuICAgICAgICBjb3N0OmNjLkludGVnZXIsXHJcblxyXG4gICAgICAgIHZpZGVvUGF0aDogXCJcIixcclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5mb3JXaGF0ICE9IG51bGwgJiYgZGF0YS5mb3JXaGF0ICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZm9yV2hhdCA9IGRhdGEuZm9yV2hhdDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZm9yV2hhdCA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8vdGhpcy50aXRsZUxibC5zdHJpbmcgPSBcIuaPkOekuuivtOaYjlwiO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb3N0ID0gMDtcclxuICAgICAgICBpZih0aGlzLmZvcldoYXQgPT0gXCJTdG9ja0JvbnVzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29tcGFueU5hbWUgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiY29tcGFueV9cIiArZGF0YS5JZCk7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwTGJsLnN0cmluZyA9IFwiPGNvbG9yPSM2OTY5Njk+6IKh56Wo5biC5Zy6LVwiK2NvbXBhbnlOYW1lK1wiLeiOt+W+l+aUtuebijwvYz5cIitcIjxjb2xvcj0jZTc3MTIyPlwiICsgZGF0YS5ib251cyArXCI8L2M+XCIrXCI8Y29sb3I9IzY5Njk2OT7lhYM8L2M+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5mb3JXaGF0ID09IFwiVHJlYXRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29zdCA9IGRhdGEubmVlZE1vbmV5IC0gTWF0aC5mbG9vcihkYXRhLm5lZWRNb25leSAqIGNjLk1nci5Vc2VyRGF0YU1nci5UcmVhdEJvbnVzKTtcclxuICAgICAgICAgICAgdGhpcy5UaXBMYmwuc3RyaW5nID0gXCLoirHotLlcIiArIHRoaXMuY29zdCArIFwi5rK755aX77yM5Lul5oGi5aSN5YGl5bq3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5mb3JXaGF0ID09IFwic2hhcmVWaWRlb1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QYXRoID0gZGF0YS52aWRlb1BhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwTGJsLnN0cmluZyA9IFwiPGNvbG9yPSM2OTY5Njk+XCIrIGRhdGEudGV4dCArXCI8L2M+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwTGJsLnN0cmluZyA9IFwiPGNvbG9yPSM2OTY5Njk+XCIrIGRhdGEudGV4dCArXCI8L2M+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5mb3JXaGF0ID09IFwiSGVhbHRoTGluZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlVuTG9ja01hdGVCeUluSG9zcGl0YWwoTWF0ZVVuTG9ja1R5cGUuSW5Ib3NwaXRhbCwgY2MuTWdyLlVzZXJEYXRhTWdyLlNleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5mb3JXaGF0ID09IFwiRGF0ZUxhdGVyXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IudHV0b3JpYWxNYXRlUG9pbnQgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5EYXRlTGF0ZXIsIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JXaGF0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuRXZlbnRUaXAsIHt9KTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tDb25maXJtOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5mb3JXaGF0ID09IFwiVHJlYXRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v6K6h566X5LiL5omA6ZyA6KaB55qE6ZKxIOa2iOiAl+mHkeminT0yMDAwKjEuMTheKOW9k+WJjeW5tOm+hC0yMCkq77yIMS3lvZPliY3lgaXlurfluqYvMTAw77yJ77yM5ZCR5LiK5Y+W5pW0XHJcbiAgICAgICAgICAgIHZhciBuZWVkTW9uZXkgPSB0aGlzLmNvc3Q7IC8vTWF0aC5mbG9vcigyMDAwKiBNYXRoLnBvdygxLjE4LCBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlLTIwKSAqKDEtY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQvMTAwKSk7XHJcbiAgICAgICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoIDwgbmVlZE1vbmV5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpcExibC5zdHJpbmcgPSBcIuS9oOeahOmSseS4jeWkn+WViiznrYnmnInpkrHkuoblho3mnaXlkKdcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCAtPSBuZWVkTW9uZXk7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50ID0gMTAwO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5UcmVhdFN1Y2Nlc3MsIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmZvcldoYXQgPT0gXCJSZXRpcmVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50LlJldGlyZSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZm9yV2hhdCA9PSBcIkhlYWx0aExpbmVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5VbkxvY2tNYXRlQnlJbkhvc3BpdGFsKE1hdGVVbkxvY2tUeXBlLkluSG9zcGl0YWwsIGNjLk1nci5Vc2VyRGF0YU1nci5TZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZm9yV2hhdCA9PSBcIk9wZW5EYXRlXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuRW5qb3ksIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmZvcldoYXQgPT0gXCJMb2dpblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuTWdyLlBsYXRmb3JtQ29udHJvbGxlci5Mb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvcldoYXQgPT0gXCJzaGFyZVZpZGVvXCIpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuU2hhcmVWaWRlbywge3ZpZGVvUGF0aDogdGhpcy52aWRlb1BhdGh9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ2xvc2VQYW5lbCgpO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblRpcFBhbmVsO1xyXG4iXX0=