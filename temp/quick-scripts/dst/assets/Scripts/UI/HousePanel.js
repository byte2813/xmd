
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/HousePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEhvdXNlUGFuZWwuanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiSG91c2VQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaG91c2VJdGVtUHJlIiwiUHJlZmFiIiwiaG91c2VJdGVtUGFyZW50IiwiTm9kZSIsImhhc0luaXQiLCJTaG93UGFuZWwiLCJkYXRhTGlzdCIsIk1nciIsIlVzZXJEYXRhTWdyIiwiZ2V0T3duRGF0YUxpc3RCeVR5cGUiLCJIb3VzZSIsImkiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN0QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUNKLEVBQUUsQ0FBQ0ssTUFBTTtJQUN0QkMsZUFBZSxFQUFDTixFQUFFLENBQUNPLElBQUk7SUFDdkJDLE9BQU8sRUFBQztFQUNaLENBQUM7RUFFREMsU0FBUyxFQUFDLFNBQUFBLFVBQUEsRUFBWTtJQUNsQixJQUFHLElBQUksQ0FBQ0QsT0FBTyxJQUFJLElBQUksRUFDdkI7TUFDSTtNQUNBO0lBQ0o7SUFFQSxJQUFJRSxRQUFRLEdBQUdWLEVBQUUsQ0FBQ1csR0FBRyxDQUFDQyxXQUFXLENBQUNDLG9CQUFvQixDQUFDaEIsUUFBUSxDQUFDaUIsS0FBSyxDQUFDO0lBQ3RFLEtBQUssSUFBSUMsQ0FBQyxHQUFHTCxRQUFRLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLElBQUlFLElBQUksR0FBR1AsUUFBUSxDQUFDSyxDQUFDLENBQUM7TUFDdEIsSUFBSUcsR0FBRyxHQUFHbEIsRUFBRSxDQUFDbUIsV0FBVyxDQUFDLElBQUksQ0FBQ2YsWUFBWSxDQUFDO01BQzNDYyxHQUFHLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUNkLGVBQWU7TUFDakNZLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLElBQUk7TUFDakJILEdBQUcsQ0FBQ0ksWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQztJQUM1QztJQUNBLElBQUksQ0FBQ1QsT0FBTyxHQUFHLElBQUk7RUFDdkI7QUFDSixDQUFDLENBQUM7QUFDRmdCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMUIsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgSG91c2VQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaG91c2VJdGVtUHJlOmNjLlByZWZhYixcclxuICAgICAgICBob3VzZUl0ZW1QYXJlbnQ6Y2MuTm9kZSxcclxuICAgICAgICBoYXNJbml0OmZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaGFzSW5pdCA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCLlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuI3nlKjph43lpI1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhTGlzdCA9IGNjLk1nci5Vc2VyRGF0YU1nci5nZXRPd25EYXRhTGlzdEJ5VHlwZShJdGVtVHlwZS5Ib3VzZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRhdGFMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gZGF0YUxpc3RbaV07XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvdXNlSXRlbVByZSk7XHJcbiAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLmhvdXNlSXRlbVBhcmVudDtcclxuICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoXCJIb3VzZUl0ZW1cIikuaW5pdChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNJbml0ID0gdHJ1ZTtcclxuICAgIH0sIFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBIb3VzZVBhbmVsO1xyXG4iXX0=