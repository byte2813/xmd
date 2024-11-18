"use strict";
cc._RF.push(module, '1fbafyHMUZGWphXBhh7ao50', 'AddCapacity');
// Scripts/UI/AddCapacity.js

"use strict";

var AdsParam = require("AdsParam");
var AddCapacity = cc.Class({
  "extends": cc.Component,
  properties: {
    AddLbl: cc.Label,
    DesLbl: cc.Label,
    Slider: cc.Slider,
    Progress: cc.ProgressBar,
    AddNum: 10,
    CanAddNum: cc.Integer
  },
  ShowPanel: function ShowPanel() {
    this.AddNum = 10;
    this.AddLbl.string = 10;
    this.DesLbl.string = 200; //this.AddNum * cc.Mgr.global.AddCapacityCost;;
    this.Slider.progress = 0;
    this.Progress.progress = 0;
    this.CanAddNum = Math.floor(cc.Mgr.UserDataMgr.Cash / cc.Mgr.global.AddCapacityCost);
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
  OnSliderChange: function OnSliderChange() {
    this.AddNum = 10; //Math.floor(this.Slider.progress * this.CanAddNum);
    this.Progress.progress = this.Slider.progress;
    var money = this.AddNum * cc.Mgr.global.AddCapacityCost;
    this.DesLbl.string = "需要消耗" + money + "元现金";
    this.AddLbl.string = this.AddNum;
  },
  ClickAdd: function ClickAdd() {
    if (cc.Mgr.UserDataMgr.WareHouseAllCapcity >= 200) {
      this.ClosePanel();
      return;
    }
    var self = this;
    self.showRewardVideo();
    cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointF, function (out) {
      if (out == 0) {
        cc.Mgr.UserDataMgr.WareHouseCapcity += self.AddNum;
        cc.Mgr.UserDataMgr.WareHouseAllCapcity += self.AddNum;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.AddWareHouseCapacity, {});
        self.ClosePanel();
      }
    });
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = AddCapacity;

cc._RF.pop();