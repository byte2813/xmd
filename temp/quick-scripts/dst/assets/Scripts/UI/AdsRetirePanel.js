
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/AdsRetirePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5eb7cNKMpxNWIREVbU5YEO4', 'AdsRetirePanel');
// Scripts/UI/AdsRetirePanel.js

"use strict";

var AdsParam = require("AdsParam");
var AdsRetirePanel = cc.Class({
  "extends": cc.Component,
  properties: {},
  ShowPanel: function ShowPanel() {},
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
  ConfirmUseAds: function ConfirmUseAds() {
    cc.Mgr.AudioMgr.playSFX("click");
    var self = this;
    self.showRewardVideo();
    cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointD, function (out) {
      if (out == 0) {
        cc.Mgr.UserDataMgr.retireAge += cc.Mgr.global.tmpRetireAgeBonues;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.RefreshAllUIShow, {});
        cc.Mgr.global.useRetireAds = true;
        self.node.active = false;
      }
    });
  },
  ShareToFriend: function ShareToFriend() {
    cc.Mgr.PlatformController.ShareToFriend(2);
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
    cc.director.GlobalEvent.emit(cc.Mgr.Event.Retire, {});
  }
});
module.exports = AdsRetirePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEFkc1JldGlyZVBhbmVsLmpzIl0sIm5hbWVzIjpbIkFkc1BhcmFtIiwicmVxdWlyZSIsIkFkc1JldGlyZVBhbmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJTaG93UGFuZWwiLCJzaG93UmV3YXJkVmlkZW8iLCJqczJhbmRyb2lkIiwibmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaW5qZWN0ZWRPYmplY3QiLCJzZXRKc0NvbnRlbnQiLCJDb25maXJtVXNlQWRzIiwiTWdyIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwic2VsZiIsIkFkc01nciIsIlNob3dWaWRlb0FkcyIsIlBvaW50RCIsIm91dCIsIlVzZXJEYXRhTWdyIiwicmV0aXJlQWdlIiwiZ2xvYmFsIiwidG1wUmV0aXJlQWdlQm9udWVzIiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIlJlZnJlc2hBbGxVSVNob3ciLCJ1c2VSZXRpcmVBZHMiLCJub2RlIiwiYWN0aXZlIiwiU2hhcmVUb0ZyaWVuZCIsIlBsYXRmb3JtQ29udHJvbGxlciIsIkNsb3NlUGFuZWwiLCJSZXRpcmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFLENBRVosQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVLENBRXBCLENBQUM7RUFDREMsZUFBZSxXQUFBQSxnQkFBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDO0VBQzdDLENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBQSxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsV0FBU0gsSUFBSSxjQUFTQyxJQUFJLENBQUc7SUFDeEMsSUFBR0csTUFBTSxDQUFDQyxjQUFjLElBQUlELE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxZQUFZLEVBQUM7TUFDM0RGLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxZQUFZLENBQUNOLElBQUksRUFBRUMsSUFBSSxDQUFDO0lBQ2xEO0VBQ0osQ0FBQztFQUNETSxhQUFhLEVBQUMsU0FBQUEsY0FBQSxFQUFZO0lBQ3RCZCxFQUFFLENBQUNlLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2ZBLElBQUksQ0FBQ2IsZUFBZSxFQUFFO0lBQ3RCTCxFQUFFLENBQUNlLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDQyxZQUFZLENBQUN2QixRQUFRLENBQUN3QixNQUFNLEVBQUUsVUFBU0MsR0FBRyxFQUFDO01BQ3JELElBQUdBLEdBQUcsSUFBSSxDQUFDLEVBQ1g7UUFDSXRCLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDUSxXQUFXLENBQUNDLFNBQVMsSUFBSXhCLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDVSxNQUFNLENBQUNDLGtCQUFrQjtRQUNoRTFCLEVBQUUsQ0FBQzJCLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUM3QixFQUFFLENBQUNlLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvRC9CLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDVSxNQUFNLENBQUNPLFlBQVksR0FBRyxJQUFJO1FBQ2pDZCxJQUFJLENBQUNlLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7TUFDNUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURDLGFBQWEsRUFBQyxTQUFBQSxjQUFBLEVBQVU7SUFDcEJuQyxFQUFFLENBQUNlLEdBQUcsQ0FBQ3FCLGtCQUFrQixDQUFDRCxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQzlDLENBQUM7RUFFREUsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQnJDLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDZ0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUN4QmxDLEVBQUUsQ0FBQzJCLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUM3QixFQUFFLENBQUNlLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDUSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDekQ7QUFDSixDQUFDLENBQUM7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUd6QyxjQUFjIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRzUGFyYW0gPSByZXF1aXJlKFwiQWRzUGFyYW1cIik7XHJcbnZhciBBZHNSZXRpcmVQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbigpe1xyXG5cclxuICAgIH0sXHJcbiAgICBzaG93UmV3YXJkVmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy5qczJhbmRyb2lkKCdzaG93X3Jld2FyZF92aWRlbycsICcxJylcclxuICAgIH0sXHJcblxyXG4gICAgLy8v5r+A5Yqx6KeG6aKR5pKt5pS+5a6M5oiQ5Zue6LCD5pa55rOVIGNvbnRpbnVlX2dhbWVcclxuICAgIC8vLyBOYXRpdmUuYW5kcm9pZDJqcyhcImNvbnRpbnVlX2dhbWVcIiwgKCk9PntcclxuICAgIC8vLyAgICAgLy/mv4DlirHop4bpopHmkq3mlL7lrozmiJDvvIzljp/nlJ/nq6/lm57osINcclxuICAgIC8vLyB9KTtcclxuICAgIGpzMmFuZHJvaWQobmFtZSwgZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYG5hbWU6JHtuYW1lfS1kYXRhOiR7ZGF0YX1gKTtcclxuICAgICAgICBpZih3aW5kb3cuaW5qZWN0ZWRPYmplY3QgJiYgd2luZG93LmluamVjdGVkT2JqZWN0LnNldEpzQ29udGVudCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pbmplY3RlZE9iamVjdC5zZXRKc0NvbnRlbnQobmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIENvbmZpcm1Vc2VBZHM6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuc2hvd1Jld2FyZFZpZGVvKCk7XHJcbiAgICAgICAgY2MuTWdyLkFkc01nci5TaG93VmlkZW9BZHMoQWRzUGFyYW0uUG9pbnRELCBmdW5jdGlvbihvdXQpe1xyXG4gICAgICAgICAgICBpZihvdXQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnJldGlyZUFnZSArPSBjYy5NZ3IuZ2xvYmFsLnRtcFJldGlyZUFnZUJvbnVlcztcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50LlJlZnJlc2hBbGxVSVNob3csIHt9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC51c2VSZXRpcmVBZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNoYXJlVG9GcmllbmQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuUGxhdGZvcm1Db250cm9sbGVyLlNoYXJlVG9GcmllbmQoMik7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5SZXRpcmUsIHt9KTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEFkc1JldGlyZVBhbmVsO1xyXG4iXX0=