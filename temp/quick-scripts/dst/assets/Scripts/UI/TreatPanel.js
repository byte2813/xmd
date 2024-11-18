
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/TreatPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7bb2HogENG7ryEv7NMveQT', 'TreatPanel');
// Scripts/UI/TreatPanel.js

"use strict";

var AdsParam = require("AdsParam");
var TreatPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    costLbl: cc.Label
  },
  ShowPanel: function ShowPanel() {
    this.costLbl.string = Math.floor(2000 * Math.pow(1.18, cc.Mgr.UserDataMgr.Age - 20) * (1 - cc.Mgr.UserDataMgr.HpPoint / 100));
  },
  callbackFunc: function callbackFunc() {
    var self = this;
    self.showRewardVideo();
    cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointB, function (out) {
      if (out == 0) {
        cc.Mgr.UserDataMgr.HpPoint = 100;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.TreatSuccess, {});
        self.ClosePanel();
      }
    });
  },
  showRewardVideo: function showRewardVideo() {
    this.js2android('show_reward_video', '1');
  },
  ///激励视频播放完成回调方法 continue_game
  /// Native.android2js("continue_game", ()=>{
  ///     //激励视频播放完成，原生端回调
  /// });
  js2android: function js2android(name, data) {
    console.log("name:" + name + "-data:" + data);
    if (window.injectedObject && window.injectedObject.setJsContent) {
      window.injectedObject.setJsContent(name, data);
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  },
  ClickOpen: function ClickOpen() {
    var needMoney = Math.floor(2000 * Math.pow(1.18, cc.Mgr.UserDataMgr.Age - 20) * (1 - cc.Mgr.UserDataMgr.HpPoint / 100));
    if (cc.Mgr.UserDataMgr.Cash < needMoney) {
      var param = {};
      param.forWhat = "";
      param.text = "金钱不够,连住院接受治疗都是奢侈";
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      return;
    }
    cc.Mgr.UserDataMgr.Cash -= needMoney;
    cc.Mgr.UserDataMgr.HpPoint = 100;
    ////cc.log("---------------------------------------" + cc.Mgr.UserDataMgr.HpPoint);
    cc.director.GlobalEvent.emit(cc.Mgr.Event.TreatSuccess, {});
    this.ClosePanel();
  }
});
module.exports = TreatPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFRyZWF0UGFuZWwuanMiXSwibmFtZXMiOlsiQWRzUGFyYW0iLCJyZXF1aXJlIiwiVHJlYXRQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29zdExibCIsIkxhYmVsIiwiU2hvd1BhbmVsIiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwicG93IiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJBZ2UiLCJIcFBvaW50IiwiY2FsbGJhY2tGdW5jIiwic2VsZiIsInNob3dSZXdhcmRWaWRlbyIsIkFkc01nciIsIlNob3dWaWRlb0FkcyIsIlBvaW50QiIsIm91dCIsImRpcmVjdG9yIiwiR2xvYmFsRXZlbnQiLCJlbWl0IiwiRXZlbnQiLCJUcmVhdFN1Y2Nlc3MiLCJDbG9zZVBhbmVsIiwianMyYW5kcm9pZCIsIm5hbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImluamVjdGVkT2JqZWN0Iiwic2V0SnNDb250ZW50IiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwibm9kZSIsImFjdGl2ZSIsIkNsaWNrT3BlbiIsIm5lZWRNb25leSIsIkNhc2giLCJwYXJhbSIsImZvcldoYXQiLCJ0ZXh0IiwiT3BlbkNvbW1vblRpcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdEIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFDSixFQUFFLENBQUNLO0VBQ2YsQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO0lBQ2hCLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksR0FBRUQs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RUFBRSxDQUFDVyxHQUFHLENBQUNjLEtBQUssQ0FBQ0MsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ3JCO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZvQixNQUFNLENBQUNDLE9BQU8sR0FBR2pELFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBZHNQYXJhbSA9IHJlcXVpcmUoXCJBZHNQYXJhbVwiKTtcclxudmFyIFRyZWF0UGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvc3RMYmw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuY29zdExibC5zdHJpbmcgPSBNYXRoLmZsb29yKDIwMDAqIE1hdGgucG93KDEuMTgsIGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UtMjApICooMS1jYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludC8xMDApKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FsbGJhY2tGdW5jOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuc2hvd1Jld2FyZFZpZGVvKCk7XHJcbiAgICAgICAgY2MuTWdyLkFkc01nci5TaG93VmlkZW9BZHMoQWRzUGFyYW0uUG9pbnRCLCBmdW5jdGlvbihvdXQpe1xyXG4gICAgICAgICAgICBpZihvdXQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5UcmVhdFN1Y2Nlc3MsIHt9KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ2xvc2VQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSxcclxuICAgIHNob3dSZXdhcmRWaWRlbygpIHtcclxuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ3Nob3dfcmV3YXJkX3ZpZGVvJywgJzEnKVxyXG4gICAgfSxcclxuXHJcbiAgICAvLy/mv4DlirHop4bpopHmkq3mlL7lrozmiJDlm57osIPmlrnms5UgY29udGludWVfZ2FtZVxyXG4gICAgLy8vIE5hdGl2ZS5hbmRyb2lkMmpzKFwiY29udGludWVfZ2FtZVwiLCAoKT0+e1xyXG4gICAgLy8vICAgICAvL+a/gOWKseinhumikeaSreaUvuWujOaIkO+8jOWOn+eUn+err+Wbnuiwg1xyXG4gICAgLy8vIH0pO1xyXG4gICAganMyYW5kcm9pZChuYW1lLCBkYXRhKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgbmFtZToke25hbWV9LWRhdGE6JHtkYXRhfWApO1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbmplY3RlZE9iamVjdCAmJiB3aW5kb3cuaW5qZWN0ZWRPYmplY3Quc2V0SnNDb250ZW50KXtcclxuICAgICAgICAgICAgd2luZG93LmluamVjdGVkT2JqZWN0LnNldEpzQ29udGVudChuYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ2xvc2VQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIENsaWNrT3BlbjpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5lZWRNb25leSA9IE1hdGguZmxvb3IoMjAwMCogTWF0aC5wb3coMS4xOCwgY2MuTWdyLlVzZXJEYXRhTWdyLkFnZS0yMCkgKigxLWNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50LzEwMCkpO1xyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoIDwgbmVlZE1vbmV5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIHBhcmFtLmZvcldoYXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYXJhbS50ZXh0ID0gXCLph5HpkrHkuI3lpJ8s6L+e5L2P6Zmi5o6l5Y+X5rK755aX6YO95piv5aWi5L6IXCI7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCAtPSBuZWVkTW9uZXk7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQgPSAxMDA7XHJcbiAgICAgICAgLy8vL2NjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiICsgY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQpO1xyXG5cdCAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5UcmVhdFN1Y2Nlc3MsIHt9KTtcclxuICAgICAgICB0aGlzLkNsb3NlUGFuZWwoKTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWF0UGFuZWw7XHJcbiJdfQ==