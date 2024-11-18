"use strict";
cc._RF.push(module, '575c9fQPihMwrEcUY5hj7SP', 'TimePanel');
// Scripts/UI/TimePanel.js

"use strict";

var TimePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ClockAnima: cc.Animation
  },
  PlayAnima: function PlayAnima() {
    this.ClockAnima.play("Clock");
  },
  ClockEnd: function ClockEnd() {
    this.node.active = false;
    cc.director.GlobalEvent.emit(cc.Mgr.Event.ClockEnd, {});
    //cc.log("闹钟结束======================================");
  }
});

module.exports = TimePanel;

cc._RF.pop();