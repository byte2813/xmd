"use strict";
cc._RF.push(module, 'b1e0dyy5PlDzoGSqpu21Es4', 'HonorPanel');
// Scripts/UI/HonorPanel.js

"use strict";

var HonorPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    itemParent: cc.Node,
    itemPre: cc.Prefab
  },
  InitPanel: function InitPanel() {
    var DataList = cc.Mgr.UserDataMgr.AchievementList;
    for (var i = 0; i <= DataList.length - 1; i++) {
      var data = DataList[i];
      var obj = cc.instantiate(this.itemPre);
      obj.parent = this.itemParent;
      obj.active = true;
      obj.getComponent("HonorItem").ShowData(data);
    }
  },
  RefreshPanel: function RefreshPanel() {
    var DataList = cc.Mgr.UserDataMgr.AchievementList;
    var children = this.itemParent.children;
    for (var i = 0; i <= children.length - 1; i++) {
      var data = DataList[i];
      var sc = children[i].getComponent("HonorItem");
      if (sc != null) {
        sc.ShowData(DataList[i]);
      }
    }
  },
  ShowPanel: function ShowPanel() {
    var children = this.itemParent.children;
    if (children.length == 0) {
      this.InitPanel();
    } else {
      this.RefreshPanel();
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = HonorPanel;

cc._RF.pop();