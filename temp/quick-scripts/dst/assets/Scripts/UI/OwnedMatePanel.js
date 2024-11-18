
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/OwnedMatePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bbf4fFQi5LuIwabuh8dbw2', 'OwnedMatePanel');
// Scripts/UI/OwnedMatePanel.js

"use strict";

var ItemType = require("ItemType");
var OwnedMatePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ownedPre: cc.Prefab,
    ownedParent: cc.Node,
    tipLbl: cc.Label
  },
  ShowPanel: function ShowPanel() {
    this.tipLbl.string = "";
    if (this.JudeHasAny() == false) {
      this.tipLbl.string = "您还未与任何一位喜结良缘,去约会圣地约起来吧";
      //return;
    }

    var mateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Mate);
    if (this.ownedParent.children.length != 0) {
      //cc.log("不用再实例化，已经有了");
      var children = this.ownedParent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        var sc = children[i].getComponent("BelongMateItem");
        if (sc != null) {
          for (var j = 0; j < mateList.length; j++) {
            if (mateList[j].Id == sc.Data.Id) {
              //cc.log("+++++++++++++++++++++" + mateList[j].UpLv);
              if (mateList[j].UpLv == true) children[i].active = true;else children[i].active = false;
            }
          }
        }
      }
    } else {
      for (var i = mateList.length - 1; i >= 0; i--) {
        //cc.log("实例化伴侣");
        var obj = cc.instantiate(this.ownedPre);
        obj.parent = this.ownedParent;
        obj.getComponent("BelongMateItem").init(mateList[i], ItemType.Mate);
        if (mateList[i].UpLv == true) {
          obj.active = true;
        } else {
          obj.active = false;
        }
      }
    }
  },
  JudeHasAny: function JudeHasAny() {
    var mateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Mate);
    var hasAny = false;
    for (var i = 0; i < mateList.length; i++) {
      if (mateList[i].UpLv == true) {
        hasAny = true;
        return true;
      }
    }
    return hasAny;
  }
});
module.exports = OwnedMatePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE93bmVkTWF0ZVBhbmVsLmpzIl0sIm5hbWVzIjpbIkl0ZW1UeXBlIiwicmVxdWlyZSIsIk93bmVkTWF0ZVBhbmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvd25lZFByZSIsIlByZWZhYiIsIm93bmVkUGFyZW50IiwiTm9kZSIsInRpcExibCIsIkxhYmVsIiwiU2hvd1BhbmVsIiwic3RyaW5nIiwiSnVkZUhhc0FueSIsIm1hdGVMaXN0IiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJnZXRPd25EYXRhTGlzdEJ5VHlwZSIsIk1hdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImkiLCJzYyIsImdldENvbXBvbmVudCIsImoiLCJJZCIsIkRhdGEiLCJVcEx2IiwiYWN0aXZlIiwib2JqIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJpbml0IiwiaGFzQW55IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsY0FBYyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUMxQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssTUFBTTtJQUNsQkMsV0FBVyxFQUFDTixFQUFFLENBQUNPLElBQUk7SUFDbkJDLE1BQU0sRUFBQ1IsRUFBRSxDQUFDUztFQUNkLENBQUM7RUFFREMsU0FBUyxFQUFDLFNBQUFBLFVBQUEsRUFBWTtJQUNsQixJQUFJLENBQUNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEVBQUU7SUFDdkIsSUFBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxJQUFJLEtBQUssRUFDN0I7TUFDSSxJQUFJLENBQUNKLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLHdCQUF3QjtNQUM3QztJQUNKOztJQUVBLElBQUlFLFFBQVEsR0FBR2IsRUFBRSxDQUFDYyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msb0JBQW9CLENBQUNuQixRQUFRLENBQUNvQixJQUFJLENBQUM7SUFDckUsSUFBRyxJQUFJLENBQUNYLFdBQVcsQ0FBQ1ksUUFBUSxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUN4QztNQUNJO01BQ0EsSUFBSUQsUUFBUSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDWSxRQUFRO01BQ3hDLEtBQUssSUFBSUUsQ0FBQyxHQUFHRixRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQUlDLEVBQUUsR0FBR0gsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQ25ELElBQUdELEVBQUUsSUFBSSxJQUFJLEVBQ2I7VUFDSSxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsUUFBUSxDQUFDTSxNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUdWLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDLENBQUNDLEVBQUUsSUFBSUgsRUFBRSxDQUFDSSxJQUFJLENBQUNELEVBQUUsRUFDL0I7Y0FDSTtjQUNBLElBQUdYLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDLENBQUNHLElBQUksSUFBSSxJQUFJLEVBQ3ZCUixRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBRTFCVCxRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDTyxNQUFNLEdBQUcsS0FBSztZQUNsQztVQUNKO1FBQ0o7TUFDSjtJQUNKLENBQUMsTUFFRDtNQUNJLEtBQUssSUFBSVAsQ0FBQyxHQUFHUCxRQUFRLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzNDO1FBQ0EsSUFBSVEsR0FBRyxHQUFHNUIsRUFBRSxDQUFDNkIsV0FBVyxDQUFDLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQztRQUN2Q3dCLEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ3hCLFdBQVc7UUFDN0JzQixHQUFHLENBQUNOLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUyxJQUFJLENBQUNsQixRQUFRLENBQUNPLENBQUMsQ0FBQyxFQUFFdkIsUUFBUSxDQUFDb0IsSUFBSSxDQUFDO1FBQ25FLElBQUdKLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNNLElBQUksSUFBSSxJQUFJLEVBQzNCO1VBQ0lFLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHLElBQUk7UUFDckIsQ0FBQyxNQUVEO1VBQ0lDLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHLEtBQUs7UUFDdEI7TUFDSjtJQUNKO0VBQ0osQ0FBQztFQUVEZixVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFVO0lBQ2pCLElBQUlDLFFBQVEsR0FBR2IsRUFBRSxDQUFDYyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msb0JBQW9CLENBQUNuQixRQUFRLENBQUNvQixJQUFJLENBQUM7SUFDckUsSUFBSWUsTUFBTSxHQUFHLEtBQUs7SUFDbEIsS0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFFBQVEsQ0FBQ00sTUFBTSxFQUFFQyxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFHUCxRQUFRLENBQUNPLENBQUMsQ0FBQyxDQUFDTSxJQUFJLElBQUksSUFBSSxFQUMzQjtRQUNJTSxNQUFNLEdBQUcsSUFBSTtRQUNiLE9BQU8sSUFBSTtNQUNmO0lBQ0o7SUFDQSxPQUFPQSxNQUFNO0VBQ2pCO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbkMsY0FBYyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgT3duZWRNYXRlUGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG93bmVkUHJlOmNjLlByZWZhYixcclxuICAgICAgICBvd25lZFBhcmVudDpjYy5Ob2RlLFxyXG4gICAgICAgIHRpcExibDpjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRpcExibC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmKHRoaXMuSnVkZUhhc0FueSgpID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aXBMYmwuc3RyaW5nID0gXCLmgqjov5jmnKrkuI7ku7vkvZXkuIDkvY3llpznu5Poia/nvJgs5Y6757qm5Lya5Zyj5Zyw57qm6LW35p2l5ZCnXCI7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hdGVMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLk1hdGUpO1xyXG4gICAgICAgIGlmKHRoaXMub3duZWRQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuS4jeeUqOWGjeWunuS+i+WMlu+8jOW3sue7j+acieS6hlwiKTtcclxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5vd25lZFBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJCZWxvbmdNYXRlSXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKHNjICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRlTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRlTGlzdFtqXS5JZCA9PSBzYy5EYXRhLklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIisrKysrKysrKysrKysrKysrKysrK1wiICsgbWF0ZUxpc3Rbal0uVXBMdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRlTGlzdFtqXS5VcEx2ID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1hdGVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuWunuS+i+WMluS8tOS+o1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm93bmVkUHJlKTtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLm93bmVkUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkJlbG9uZ01hdGVJdGVtXCIpLmluaXQobWF0ZUxpc3RbaV0sIEl0ZW1UeXBlLk1hdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYobWF0ZUxpc3RbaV0uVXBMdiA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIEp1ZGVIYXNBbnk6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgbWF0ZUxpc3QgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0T3duRGF0YUxpc3RCeVR5cGUoSXRlbVR5cGUuTWF0ZSk7XHJcbiAgICAgICAgdmFyIGhhc0FueSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobWF0ZUxpc3RbaV0uVXBMdiA9PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNBbnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc0FueTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE93bmVkTWF0ZVBhbmVsO1xyXG4iXX0=