
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MateTipPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a11blHIqdHvKiejxvT7eu5', 'MateTipPanel');
// Scripts/UI/MateTipPanel.js

"use strict";

var ItemType = require("ItemType");
var MateTipPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    mateItem: cc.Prefab,
    mateParent: cc.Node,
    hasInit: false
  },
  ShowPanel: function ShowPanel() {
    if (this.hasInit == true) {
      this.RefreshPanelItems();
      //cc.log("已经初始化了，返回");
      return;
    }
    var MateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Mate);
    var dataList = this.getMateListBySex(cc.Mgr.UserDataMgr.Sex, MateList);
    for (var i = 0; i <= dataList.length - 1; i++) {
      //if() 判断解锁条件  我们会有男女的区别
      var data = dataList[i];
      var obj = cc.instantiate(this.mateItem);
      obj.parent = this.mateParent;
      obj.getComponent("MateItem").init(data);
    }
    this.hasInit = true;
  },
  getMateListBySex: function getMateListBySex(Sex, dataList) {
    var param = [];
    for (var i = 0; i < dataList.length; i++) {
      if (Sex == dataList[i].sex) {
        param.push(dataList[i]);
      }
    }
    return param;
  },
  RefreshPanelItems: function RefreshPanelItems() {
    var children = this.mateParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("MateItem");
      if (sc != null) {
        var data = cc.Mgr.UserDataMgr.getDataByItemTypeAndId(ItemType.Mate, sc.Id);
        sc.RefreshLovePoint(data);
        if (data.canDate) {
          sc.ChangeUnLockState(data);
          //children[i].active = true;
        }
      }
    }
  },

  RefreshPanel: function RefreshPanel(Id) {
    var data = cc.Mgr.UserDataMgr.getDataByItemTypeAndId(ItemType.Mate, Id);
    //cc.log("============" + data.LovePoint);
    var children = this.mateParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("MateItem");
      if (sc != null) {
        if (sc.Id == Id) {
          if (data.canDate) {
            children[i].active = true;
            sc.RefreshLovePoint(data);
          }
          break;
        }
      }
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = MateTipPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1hdGVUaXBQYW5lbC5qcyJdLCJuYW1lcyI6WyJJdGVtVHlwZSIsInJlcXVpcmUiLCJNYXRlVGlwUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1hdGVJdGVtIiwiUHJlZmFiIiwibWF0ZVBhcmVudCIsIk5vZGUiLCJoYXNJbml0IiwiU2hvd1BhbmVsIiwiUmVmcmVzaFBhbmVsSXRlbXMiLCJNYXRlTGlzdCIsIk1nciIsIlVzZXJEYXRhTWdyIiwiZ2V0T3duRGF0YUxpc3RCeVR5cGUiLCJNYXRlIiwiZGF0YUxpc3QiLCJnZXRNYXRlTGlzdEJ5U2V4IiwiU2V4IiwiaSIsImxlbmd0aCIsImRhdGEiLCJvYmoiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsImdldENvbXBvbmVudCIsImluaXQiLCJwYXJhbSIsInNleCIsInB1c2giLCJjaGlsZHJlbiIsInNjIiwiZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZCIsIklkIiwiUmVmcmVzaExvdmVQb2ludCIsImNhbkRhdGUiLCJDaGFuZ2VVbkxvY2tTdGF0ZSIsIlJlZnJlc2hQYW5lbCIsImFjdGl2ZSIsIkNsb3NlUGFuZWwiLCJBdWRpb01nciIsInBsYXlTRlgiLCJub2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN4QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNUQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssTUFBTTtJQUNsQkMsVUFBVSxFQUFDTixFQUFFLENBQUNPLElBQUk7SUFDbEJDLE9BQU8sRUFBQztFQUNYLENBQUM7RUFFREMsU0FBUyxFQUFDLFNBQUFBLFVBQUEsRUFBWTtJQUNsQixJQUFHLElBQUks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QzNDLElBQUlZLEVBQUUsR0FBR0QsUUFBUSxDQUFDWCxDQUFDLENBQUMsQ0FBQ00sWUFBWSxDQUFDLFVBQVUsQ0FBQztNQUM3QyxJQUFHTSxFQUFFLElBQUksSUFBSSxFQUNiO1FBQ0ksSUFBR0EsRUFBRSxDQUFDRSxFQUFFLElBQUlBLEVBQUUsRUFDZDtVQUNJLElBQUdaLElBQUksQ0FBQ2MsT0FBTyxFQUNmO1lBQ0lMLFFBQVEsQ0FBQ1gsQ0FBQyxDQUFDLENBQUNtQixNQUFNLEdBQUcsSUFBSTtZQUN6QlAsRUFBRSxDQUFDRyxnQkFBZ0IsQ0FBQ2IsSUFBSSxDQUFDO1VBQzdCO1VBQ0E7UUFDSjtNQUNKO0lBQ0o7RUFDSixDQUFDO0VBRURrQixVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFVO0lBQ2pCdkMsRUFBRSxDQUFDWSxHQUFHLENBQUM0QixRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLENBQUNKLE1BQU0sR0FBRyxLQUFLO0VBQzVCO0FBRUosQ0FBQyxDQUFDO0FBQ0ZLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHN0MsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgTWF0ZVRpcFBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIG1hdGVJdGVtOmNjLlByZWZhYixcclxuICAgICAgIG1hdGVQYXJlbnQ6Y2MuTm9kZSxcclxuICAgICAgIGhhc0luaXQ6ZmFsc2UsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5oYXNJbml0ID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hQYW5lbEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5bey57uP5Yid5aeL5YyW5LqG77yM6L+U5ZueXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBNYXRlTGlzdCA9IGNjLk1nci5Vc2VyRGF0YU1nci5nZXRPd25EYXRhTGlzdEJ5VHlwZShJdGVtVHlwZS5NYXRlKTtcclxuICAgICAgICB2YXIgZGF0YUxpc3QgPSB0aGlzLmdldE1hdGVMaXN0QnlTZXgoY2MuTWdyLlVzZXJEYXRhTWdyLlNleCwgTWF0ZUxpc3QpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGRhdGFMaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAvL2lmKCkg5Yik5pat6Kej6ZSB5p2h5Lu2ICDmiJHku6zkvJrmnInnlLflpbPnmoTljLrliKtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBkYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWF0ZUl0ZW0pO1xyXG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5tYXRlUGFyZW50O1xyXG4gICAgICAgICAgICBvYmouZ2V0Q29tcG9uZW50KFwiTWF0ZUl0ZW1cIikuaW5pdChkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzSW5pdCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE1hdGVMaXN0QnlTZXg6ZnVuY3Rpb24oU2V4LCBkYXRhTGlzdCl7XHJcbiAgICAgICAgdmFyIHBhcmFtID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihTZXggPT0gZGF0YUxpc3RbaV0uc2V4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKGRhdGFMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICB9LFxyXG5cclxuICAgIFJlZnJlc2hQYW5lbEl0ZW1zOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5tYXRlUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJNYXRlSXRlbVwiKTtcclxuICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZChJdGVtVHlwZS5NYXRlLCBzYy5JZCk7XHJcbiAgICAgICAgICAgICAgICBzYy5SZWZyZXNoTG92ZVBvaW50KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jYW5EYXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjLkNoYW5nZVVuTG9ja1N0YXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBSZWZyZXNoUGFuZWw6ZnVuY3Rpb24oSWQpe1xyXG4gICAgICAgIHZhciBkYXRhID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuTWF0ZSwgSWQpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiPT09PT09PT09PT09XCIgKyBkYXRhLkxvdmVQb2ludCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5tYXRlUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJNYXRlSXRlbVwiKTtcclxuICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc2MuSWQgPT0gSWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jYW5EYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2MuUmVmcmVzaExvdmVQb2ludChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTWF0ZVRpcFBhbmVsO1xyXG4iXX0=