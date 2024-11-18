
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/StartUpPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50b1fERmNlNX52By1S1GCzm', 'StartUpPanel');
// Scripts/UI/StartUpPanel.js

"use strict";

var StartUpPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    title: cc.Label,
    desLbl: cc.Label,
    costLbl: cc.Label,
    iconSp: cc.Sprite,
    cost: cc.Integer
  },
  ShowPanel: function ShowPanel(data) {
    this.title.string = data.name;
    this.desLbl.string = "升级" + data.name + "****";
    //this.iconSp.spriteFrame = ;
    var cost = cc.Mgr.MapDataMgr.getUpgradeCostByTwoId(data.Id, data.subId, data.toLv);
    this.costLbl.string = cost;
    this.cost = cost;
  },
  ClosePanel: function ClosePanel() {
    this.node.active = false;
  },
  ClickUpgrade: function ClickUpgrade() {}
});
module.exports = StartUpPanel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFN0YXJ0VXBQYW5lbC5qcyJdLCJuYW1lcyI6WyJTdGFydFVwUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlIiwiTGFiZWwiLCJkZXNMYmwiLCJjb3N0TGJsIiwiaWNvblNwIiwiU3ByaXRlIiwiY29zdCIsIkludGVnZXIiLCJTaG93UGFuZWwiLCJkYXRhIiwic3RyaW5nIiwibmFtZSIsIk1nciIsIk1hcERhdGFNZ3IiLCJnZXRVcGdyYWRlQ29zdEJ5VHdvSWQiLCJJZCIsInN1YklkIiwidG9MdiIsIkNsb3NlUGFuZWwiLCJub2RlIiwiYWN0aXZlIiwiQ2xpY2tVcGdyYWRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3hCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxLQUFLO0lBQ2RDLE1BQU0sRUFBQ04sRUFBRSxDQUFDSyxLQUFLO0lBQ2ZFLE9BQU8sRUFBQ1AsRUFBRSxDQUFDSyxLQUFLO0lBQ2hCRyxNQUFNLEVBQUNSLEVBQUUsQ0FBQ1MsTUFBTTtJQUNoQkMsSUFBSSxFQUFDVixFQUFFLENBQUNXO0VBQ1osQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBVUMsSUFBSSxFQUFFO0lBQ3RCLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxNQUFNLEdBQUdELElBQUksQ0FBQ0UsSUFBSTtJQUM3QixJQUFJLENBQUNULE1BQU0sQ0FBQ1EsTUFBTSxHQUFHLElBQUksR0FBQ0QsSUFBSSxDQUFDRSxJQUFJLEdBQUMsTUFBTTtJQUMxQztJQUNBLElBQUlMLElBQUksR0FBR1YsRUFBRSxDQUFDZ0IsR0FBRyxDQUFDQyxVQUFVLENBQUNDLHFCQUFxQixDQUFDTCxJQUFJLENBQUNNLEVBQUUsRUFBRU4sSUFBSSxDQUFDTyxLQUFLLEVBQUVQLElBQUksQ0FBQ1EsSUFBSSxDQUFDO0lBQ2xGLElBQUksQ0FBQ2QsT0FBTyxDQUFDTyxNQUFNLEdBQUdKLElBQUk7SUFDMUIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7RUFDcEIsQ0FBQztFQUVEWSxVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFVO0lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztFQUM1QixDQUFDO0VBRURDLFlBQVksRUFBQyxTQUFBQSxhQUFBLEVBQVUsQ0FFdkI7QUFFSixDQUFDLENBQUM7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUc1QixZQUFZIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFN0YXJ0VXBQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgZGVzTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIGNvc3RMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgaWNvblNwOmNjLlNwcml0ZSxcclxuICAgICAgICBjb3N0OmNjLkludGVnZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzTGJsLnN0cmluZyA9IFwi5Y2H57qnXCIrZGF0YS5uYW1lK1wiKioqKlwiO1xyXG4gICAgICAgIC8vdGhpcy5pY29uU3Auc3ByaXRlRnJhbWUgPSA7XHJcbiAgICAgICAgdmFyIGNvc3QgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXRVcGdyYWRlQ29zdEJ5VHdvSWQoZGF0YS5JZCwgZGF0YS5zdWJJZCwgZGF0YS50b0x2KTtcclxuICAgICAgICB0aGlzLmNvc3RMYmwuc3RyaW5nID0gY29zdDtcclxuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja1VwZ3JhZGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBTdGFydFVwUGFuZWw7XHJcbiJdfQ==