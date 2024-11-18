"use strict";
cc._RF.push(module, '6589609fM1OeIJ/a8i4TPj5', 'EnjoyPanel');
// Scripts/UI/EnjoyPanel.js

"use strict";

var JoyPanel = require("JoyPanel");
var HousePanel = require("HousePanel");
var TreatPanel = require("TreatPanel");
var CarPanel = require("CarPanel");
var EnjoyPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    MainAtlas: cc.SpriteAtlas,
    TipNameSp: cc.Sprite,
    joyPanel: JoyPanel,
    housePanel: HousePanel,
    carPanel: CarPanel
    //treatPanel:TreatPanel,
  },

  ShowPanel: function ShowPanel() {
    //this.OpenJoyPanel();
  },
  OpenJoyPanel: function OpenJoyPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = true;
    this.housePanel.node.active = false;
    this.carPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("funny");
    //this.treatPanel.node.active = false;
  },

  OpenHousePanel: function OpenHousePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = true;
    this.carPanel.node.active = false;
    //this.treatPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("house");
    this.housePanel.ShowPanel();
  },
  OpenCarPanel: function OpenCarPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = false;
    this.carPanel.node.active = true;
    //this.treatPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("text_car");
    this.carPanel.ShowPanel();
  },
  OpenTreatPanel: function OpenTreatPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = false;
    this.carPanel.node.active = false;
    //this.treatPanel.node.active = true;
  },

  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = EnjoyPanel;

cc._RF.pop();