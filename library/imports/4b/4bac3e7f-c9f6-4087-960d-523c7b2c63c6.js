"use strict";
cc._RF.push(module, '4bac35/yfZAh5YNUjx7LGPG', 'JoyPanel');
// Scripts/UI/JoyPanel.js

"use strict";

var MateUnLockType = require("MateUnLockType");
var JoyTipPanel = require("JoyTipPanel");
var JoyPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    joyTipPanel: JoyTipPanel
  },
  ClickOpenBet: function ClickOpenBet() {
    cc.Mgr.AudioMgr.playSFX("click");
    //如何计算 赌博花费
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenBetTip, {});
    //var param = {};
    //this.joyTipPanel.node.active = true;
    //var seed = 1 + Math.floor(Math.random() * 5);
    //param.text = "人生就像赌博，怕输的人永远赢不了";//cc.Mgr.global.getTranslation("ToDate_" + seed);
    //param.forWhat = "ToBet";

    //this.joyTipPanel.ShowPanel(param);
  },

  ClickOpenDateRation: function ClickOpenDateRation() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyTipPanel.node.active = true;
    var param = {};
    var seed = 1 + Math.floor(Math.random() * 5);
    param.text = cc.Mgr.global.getTranslation("ToDate_" + seed);
    param.forWhat = "ToDate";
    this.joyTipPanel.ShowPanel(param);
  },
  ClickAds: function ClickAds() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.text = "现在没有广告，过段时间再来";
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
  }
});
module.exports = JoyPanel;

cc._RF.pop();