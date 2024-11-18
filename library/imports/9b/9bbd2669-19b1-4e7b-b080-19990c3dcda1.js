"use strict";
cc._RF.push(module, '9bbd2ZpGbFOe7CAGZkMPc2h', 'UnlockMatePanel');
// Scripts/UI/UnlockMatePanel.js

"use strict";

var UnlockMatePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    Sp: cc.Sprite,
    desLbl: cc.RichText
  },
  ShowPanel: function ShowPanel(data) {
    this.Sp.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    this.desLbl.string = "<color=#16a0e8>" + data.des + "</c>";
  },
  ClosePanel: function ClosePanel() {
    this.node.active = false;
  }
});
module.exports = UnlockMatePanel;

cc._RF.pop();