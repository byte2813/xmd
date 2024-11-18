
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/OwnedHousePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b10caBioeJCtoJguoXBWF9j', 'OwnedHousePanel');
// Scripts/UI/OwnedHousePanel.js

"use strict";

var ItemType = require("ItemType");
var OwnedHousePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ownedPre: cc.Prefab,
    ownedParent: cc.Node,
    tipLbl: cc.Label
  },
  ShowPanel: function ShowPanel() {
    this.tipLbl.string = "";
    if (this.JudeHasAny() == false) {
      this.tipLbl.string = "居无定所,不是您的所想,去房产市场购买一套房产吧";
      //return;
    }

    var houseList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.House);
    if (this.ownedParent.children.length != 0) {
      //cc.log("不用再实例化，已经有了");
      var children = this.ownedParent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        var sc = children[i].getComponent("BelongItem");
        if (sc != null) {
          for (var j = 0; j < houseList.length; j++) {
            if (houseList[j].Id == sc.Id) {
              sc.Refresh(houseList[j]);
              if (houseList[j].ownNum > 0) children[i].active = true;else children[i].active = false;
            }
          }
        }
      }
    } else {
      for (var i = houseList.length - 1; i >= 0; i--) {
        //cc.log("实例化房子");
        var obj = cc.instantiate(this.ownedPre);
        obj.parent = this.ownedParent;
        obj.getComponent("BelongItem").init(houseList[i], ItemType.House);
        if (houseList[i].ownNum > 0) {
          obj.active = true;
        } else {
          obj.active = false;
        }
      }
    }
  },
  JudeHasAny: function JudeHasAny() {
    var mateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.House);
    var hasAny = false;
    for (var i = 0; i < mateList.length; i++) {
      if (mateList[i].ownNum > 0) {
        hasAny = true;
        return true;
      }
    }
    return hasAny;
  }
});
module.exports = OwnedHousePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE93bmVkSG91c2VQYW5lbC5qcyJdLCJuYW1lcyI6WyJJdGVtVHlwZSIsInJlcXVpcmUiLCJPd25lZEhvdXNlUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm93bmVkUHJlIiwiUHJlZmFiIiwib3duZWRQYXJlbnQiLCJOb2RlIiwidGlwTGJsIiwiTGFiZWwiLCJTaG93UGFuZWwiLCJzdHJpbmciLCJKdWRlSGFzQW55IiwiaG91c2VMaXN0IiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJnZXRPd25EYXRhTGlzdEJ5VHlwZSIsIkhvdXNlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJpIiwic2MiLCJnZXRDb21wb25lbnQiLCJqIiwiSWQiLCJSZWZyZXNoIiwib3duTnVtIiwiYWN0aXZlIiwib2JqIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJpbml0IiwibWF0ZUxpc3QiLCJoYXNBbnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzNCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQ0osRUFBRSxDQUFDSyxNQUFNO0lBQ2xCQyxXQUFXLEVBQUNOLEVBQUUsQ0FBQ08sSUFBSTtJQUNuQkMsTUFBTSxFQUFDUixFQUFFLENBQUNTO0VBQ2QsQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFZO0lBQ2xCLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxNQUFNLEdBQUcsRUFBRTtJQUN2QixJQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLElBQUksS0FBSyxFQUM3QjtNQUNJLElBQUksQ0FBQ0osTUFBTSxDQUFDRyxNQUFNLEdBQUcsMEJBQTBCO01BQy9DO0lBQ0o7O0lBRUEsSUFBSUUsU0FBUyxHQUFHYixFQUFFLENBQUNjLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDQyxvQkFBb0IsQ0FBQ25CLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQztJQUN2RSxJQUFHLElBQUksQ0FBQ1gsV0FBVyxDQUFDWSxRQUFRLENBQUNDLE1BQU0sSUFBSSxDQUFDLEVBQ3hDO01BQ0k7TUFDQSxJQUFJRCxRQUFRLEdBQUcsSUFBSSxDQUFDWixXQUFXLENBQUNZLFFBQVE7TUFDeEMsS0FBSyxJQUFJRSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRUMsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBSUMsRUFBRSxHQUFHSCxRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUdELEVBQUUsSUFBSSxJQUFJLEVBQ2I7VUFDSSxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsU0FBUyxDQUFDTSxNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUdWLFNBQVMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUNDLEVBQUUsSUFBSUgsRUFBRSxDQUFDRyxFQUFFLEVBQzNCO2NBQ0lILEVBQUUsQ0FBQ0ksT0FBTyxDQUFDWixTQUFTLENBQUNVLENBQUMsQ0FBQyxDQUFDO2NBQ3hCLElBQUdWLFNBQVMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQ3RCUixRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBRTFCVCxRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDTyxNQUFNLEdBQUcsS0FBSztZQUNsQztVQUNKO1FBQ0o7TUFDSjtJQUNKLENBQUMsTUFFRDtNQUNJLEtBQUssSUFBSVAsQ0FBQyxHQUFHUCxTQUFTLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzVDO1FBQ0EsSUFBSVEsR0FBRyxHQUFHNUIsRUFBRSxDQUFDNkIsV0FBVyxDQUFDLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQztRQUN2Q3dCLEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ3hCLFdBQVc7UUFDN0JzQixHQUFHLENBQUNOLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQ1MsSUFBSSxDQUFDbEIsU0FBUyxDQUFDTyxDQUFDLENBQUMsRUFBRXZCLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQztRQUNqRSxJQUFHSixTQUFTLENBQUNPLENBQUMsQ0FBQyxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUMxQjtVQUNJRSxHQUFHLENBQUNELE1BQU0sR0FBRyxJQUFJO1FBQ3JCLENBQUMsTUFFRDtVQUNJQyxHQUFHLENBQUNELE1BQU0sR0FBRyxLQUFLO1FBQ3RCO01BQ0o7SUFDSjtFQUNKLENBQUM7RUFFRGYsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQixJQUFJb0IsUUFBUSxHQUFHaEMsRUFBRSxDQUFDYyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msb0JBQW9CLENBQUNuQixRQUFRLENBQUNvQixLQUFLLENBQUM7SUFDdEUsSUFBSWdCLE1BQU0sR0FBRyxLQUFLO0lBQ2xCLEtBQUssSUFBSWIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHWSxRQUFRLENBQUNiLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEVBQUU7TUFDdEMsSUFBR1ksUUFBUSxDQUFDWixDQUFDLENBQUMsQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFDekI7UUFDSU8sTUFBTSxHQUFHLElBQUk7UUFDYixPQUFPLElBQUk7TUFDZjtJQUNKO0lBQ0EsT0FBT0EsTUFBTTtFQUNqQjtBQUNKLENBQUMsQ0FBQztBQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBR3BDLGVBQWUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtVHlwZSA9IHJlcXVpcmUoXCJJdGVtVHlwZVwiKTtcclxudmFyIE93bmVkSG91c2VQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb3duZWRQcmU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIG93bmVkUGFyZW50OmNjLk5vZGUsXHJcbiAgICAgICAgdGlwTGJsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGlwTGJsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5KdWRlSGFzQW55KCkgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpcExibC5zdHJpbmcgPSBcIuWxheaXoOWumuaJgCzkuI3mmK/mgqjnmoTmiYDmg7Ms5Y675oi/5Lqn5biC5Zy66LSt5Lmw5LiA5aWX5oi/5Lqn5ZCnXCI7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhvdXNlTGlzdCA9IGNjLk1nci5Vc2VyRGF0YU1nci5nZXRPd25EYXRhTGlzdEJ5VHlwZShJdGVtVHlwZS5Ib3VzZSk7XHJcbiAgICAgICAgaWYodGhpcy5vd25lZFBhcmVudC5jaGlsZHJlbi5sZW5ndGggIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5LiN55So5YaN5a6e5L6L5YyW77yM5bey57uP5pyJ5LqGXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLm93bmVkUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIkJlbG9uZ0l0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpZihzYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaG91c2VMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXNlTGlzdFtqXS5JZCA9PSBzYy5JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuUmVmcmVzaChob3VzZUxpc3Rbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91c2VMaXN0W2pdLm93bk51bSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGhvdXNlTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLlrp7kvovljJbmiL/lrZBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gY2MuaW5zdGFudGlhdGUodGhpcy5vd25lZFByZSk7XHJcbiAgICAgICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5vd25lZFBhcmVudDtcclxuICAgICAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoXCJCZWxvbmdJdGVtXCIpLmluaXQoaG91c2VMaXN0W2ldLCBJdGVtVHlwZS5Ib3VzZSk7XHJcbiAgICAgICAgICAgICAgICBpZihob3VzZUxpc3RbaV0ub3duTnVtID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBcclxuXHJcbiAgICBKdWRlSGFzQW55OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG1hdGVMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLkhvdXNlKTtcclxuICAgICAgICB2YXIgaGFzQW55ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtYXRlTGlzdFtpXS5vd25OdW0gPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNBbnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc0FueTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE93bmVkSG91c2VQYW5lbDtcclxuIl19