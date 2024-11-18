"use strict";
cc._RF.push(module, 'e12bbpvZJlERLKL1hpHue1M', 'EventResultPanel');
// Scripts/UI/EventResultPanel.js

"use strict";

var EventResultPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    DesLbl: cc.Label,
    CostLbl: cc.Label,
    CostObj: cc.Node
  },
  ShowPanel: function ShowPanel(data) {
    this.DesLbl.string = data.text;
    this.CostLbl.string = data.des;
    this.CostObj.active = true;
    if (data.des == null || data.des == "") {
      this.CostObj.active = false;
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});

cc._RF.pop();