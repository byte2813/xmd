"use strict";
cc._RF.push(module, '3a387GurgBME4n57ivPSuax', 'HonorItem');
// Scripts/UI/HonorItem.js

"use strict";

var HonorItem = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    icon: cc.Sprite,
    nameLbl: cc.Label,
    Data: null
  },
  ShowData: function ShowData(data) {
    this.Data = data;
    this.icon.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    if (data.hasFinish) this.icon.setState(0);else this.icon.setState(1);
    this.nameLbl.string = data.name;
  },
  ClickOpenTip: function ClickOpenTip() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.text = cc.Mgr.global.getTranslation("Cj_" + this.Data.desId);
    cc.director.GlobalEvent.emit(cc.Mgr.Event.AchieveTip, param);
  }
});
module.exports = HonorItem;

cc._RF.pop();