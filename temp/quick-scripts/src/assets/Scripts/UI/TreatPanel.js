"use strict";
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