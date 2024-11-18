"use strict";
cc._RF.push(module, '70e30r+0Z5MO40fnrAWptL7', 'HousePanel');
// Scripts/UI/HousePanel.js

"use strict";

var ItemType = require("ItemType");
var HousePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    houseItemPre: cc.Prefab,
    houseItemParent: cc.Node,
    hasInit: false
  },
  ShowPanel: function ShowPanel() {
    if (this.hasInit == true) {
      //cc.log("已经初始化过了，不用重复");
      return;
    }
    var dataList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.House);
    for (var i = dataList.length - 1; i >= 0; i--) {
      var data = dataList[i];
      var obj = cc.instantiate(this.houseItemPre);
      obj.parent = this.houseItemParent;
      obj.active = true;
      obj.getComponent("HouseItem").init(data);
    }
    this.hasInit = true;
  }
});
module.exports = HousePanel;

cc._RF.pop();