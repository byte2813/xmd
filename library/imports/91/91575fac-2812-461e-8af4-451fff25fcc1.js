"use strict";
cc._RF.push(module, '91575+sKBJGHor0RR//JfzB', 'SettingPanel');
// Scripts/UI/SettingPanel.js

"use strict";

var SettingPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    togMan: cc.Toggle,
    togWoMan: cc.Toggle
  },
  ShowPanel: function ShowPanel() {
    if (cc.Mgr.UserDataMgr.Sex == 1) this.togMan.isChecked = true;else this.togWoMan.isChecked = true;
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  },
  ConfrimSexMan: function ConfrimSexMan() {
    cc.Mgr.AudioMgr.playSFX("click");
    cc.Mgr.UserDataMgr.Sex = 1;
  },
  ConfrimSexWoMan: function ConfrimSexWoMan() {
    cc.Mgr.AudioMgr.playSFX("click");
    cc.Mgr.UserDataMgr.Sex = 2;
  },
  OpenSound: function OpenSound() {
    cc.Mgr.AudioMgr.resumeAll();
    cc.Mgr.AudioMgr.playSFX("click");
  },
  OffSound: function OffSound() {
    cc.Mgr.AudioMgr.pauseAll();
  }
});
module.exports = SettingPanel;

cc._RF.pop();