
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/CarPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92575NnT7tEZ4ByGogjuYD/', 'CarPanel');
// Scripts/UI/CarPanel.js

"use strict";

var ItemType = require("ItemType");
var CarPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    carItemPre: cc.Prefab,
    carItemParent: cc.Node,
    hasInit: false
  },
  ShowPanel: function ShowPanel() {
    if (this.hasInit == true) {
      //cc.log("已经初始化过了，不用重复");
      return;
    }
    var dataList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Car);
    for (var i = dataList.length - 1; i >= 0; i--) {
      var data = dataList[i];
      var obj = cc.instantiate(this.carItemPre);
      obj.parent = this.carItemParent;
      obj.active = true;
      obj.getComponent("CarItem").init(data);
    }
    this.hasInit = true;
  }
});
module.exports = CarPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXENhclBhbmVsLmpzIl0sIm5hbWVzIjpbIkl0ZW1UeXBlIiwicmVxdWlyZSIsIkNhclBhbmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYXJJdGVtUHJlIiwiUHJlZmFiIiwiY2FySXRlbVBhcmVudCIsIk5vZGUiLCJoYXNJbml0IiwiU2hvd1BhbmVsIiwiZGF0YUxpc3QiLCJNZ3IiLCJVc2VyRGF0YU1nciIsImdldE93bkRhdGFMaXN0QnlUeXBlIiwiQ2FyIiwiaSIsImxlbmd0aCIsImRhdGEiLCJvYmoiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsImluaXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3BCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBQ0osRUFBRSxDQUFDSyxNQUFNO0lBQ3BCQyxhQUFhLEVBQUNOLEVBQUUsQ0FBQ08sSUFBSTtJQUNyQkMsT0FBTyxFQUFDO0VBQ1osQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFZO0lBQ2xCLElBQUcsSUFBSSxDQUFDRCxPQUFPLElBQUksSUFBSSxFQUN2QjtNQUNJO01BQ0E7SUFDSjtJQUVBLElBQUlFLFFBQVEsR0FBR1YsRUFBRSxDQUFDVyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msb0JBQW9CLENBQUNoQixRQUFRLENBQUNpQixHQUFHLENBQUM7SUFDcEUsS0FBSyxJQUFJQyxDQUFDLEdBQUdMLFFBQVEsQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDM0MsSUFBSUUsSUFBSSxHQUFHUCxRQUFRLENBQUNLLENBQUMsQ0FBQztNQUN0QixJQUFJRyxHQUFHLEdBQUdsQixFQUFFLENBQUNtQixXQUFXLENBQUMsSUFBSSxDQUFDZixVQUFVLENBQUM7TUFDekNjLEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ2QsYUFBYTtNQUMvQlksR0FBRyxDQUFDRyxNQUFNLEdBQUcsSUFBSTtNQUNqQkgsR0FBRyxDQUFDSSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUNDLElBQUksQ0FBQ04sSUFBSSxDQUFDO0lBQzFDO0lBQ0EsSUFBSSxDQUFDVCxPQUFPLEdBQUcsSUFBSTtFQUN2QjtBQUNKLENBQUMsQ0FBQztBQUNGZ0IsTUFBTSxDQUFDQyxPQUFPLEdBQUcxQixRQUFRIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbVR5cGUgPSByZXF1aXJlKFwiSXRlbVR5cGVcIik7XHJcbnZhciBDYXJQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2FySXRlbVByZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgY2FySXRlbVBhcmVudDpjYy5Ob2RlLFxyXG4gICAgICAgIGhhc0luaXQ6ZmFsc2UsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5oYXNJbml0ID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuW3sue7j+WIneWni+WMlui/h+S6hu+8jOS4jeeUqOmHjeWkjVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGFMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLkNhcik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRhdGFMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gZGF0YUxpc3RbaV07XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhckl0ZW1QcmUpO1xyXG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5jYXJJdGVtUGFyZW50O1xyXG4gICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkNhckl0ZW1cIikuaW5pdChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNJbml0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENhclBhbmVsO1xyXG4iXX0=