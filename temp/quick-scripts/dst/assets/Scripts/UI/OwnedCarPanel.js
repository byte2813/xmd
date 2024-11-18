
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/OwnedCarPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad9d3CyhUxCh4EiJnGSOdv4', 'OwnedCarPanel');
// Scripts/UI/OwnedCarPanel.js

"use strict";

var ItemType = require("ItemType");
var OwnedCarPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ownedPre: cc.Prefab,
    ownedParent: cc.Node,
    tipLbl: cc.Label
  },
  ShowPanel: function ShowPanel() {
    this.tipLbl.string = "";
    if (this.JudeHasAny() == false) {
      this.tipLbl.string = "您还未拥有任何一辆属于您的座驾,去汽车市场购买吧";
      //return;
    }

    var carList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Car);
    if (this.ownedParent.children.length != 0) {
      //cc.log("不用再实例化，已经有了");
      var children = this.ownedParent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        var sc = children[i].getComponent("BelongItem");
        if (sc != null) {
          for (var j = 0; j < carList.length; j++) {
            if (carList[j].Id == sc.Id) {
              sc.Refresh(carList[j]);
              if (carList[j].ownNum > 0) children[i].active = true;else children[i].active = false;
            }
          }
        }
      }
    } else {
      for (var i = carList.length - 1; i >= 0; i--) {
        //cc.log("实例化汽车");
        var obj = cc.instantiate(this.ownedPre);
        obj.parent = this.ownedParent;
        obj.getComponent("BelongItem").init(carList[i], ItemType.Car);
        if (carList[i].ownNum > 0) {
          obj.active = true;
        } else {
          obj.active = false;
        }
      }
    }
  },
  JudeHasAny: function JudeHasAny() {
    var mateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Car);
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
module.exports = OwnedCarPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE93bmVkQ2FyUGFuZWwuanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiT3duZWRDYXJQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib3duZWRQcmUiLCJQcmVmYWIiLCJvd25lZFBhcmVudCIsIk5vZGUiLCJ0aXBMYmwiLCJMYWJlbCIsIlNob3dQYW5lbCIsInN0cmluZyIsIkp1ZGVIYXNBbnkiLCJjYXJMaXN0IiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJnZXRPd25EYXRhTGlzdEJ5VHlwZSIsIkNhciIsImNoaWxkcmVuIiwibGVuZ3RoIiwiaSIsInNjIiwiZ2V0Q29tcG9uZW50IiwiaiIsIklkIiwiUmVmcmVzaCIsIm93bk51bSIsImFjdGl2ZSIsIm9iaiIsImluc3RhbnRpYXRlIiwicGFyZW50IiwiaW5pdCIsIm1hdGVMaXN0IiwiaGFzQW55IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN6QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssTUFBTTtJQUNsQkMsV0FBVyxFQUFDTixFQUFFLENBQUNPLElBQUk7SUFDbkJDLE1BQU0sRUFBQ1IsRUFBRSxDQUFDUztFQUNkLENBQUM7RUFFREMsU0FBUyxFQUFDLFNBQUFBLFVBQUEsRUFBWTtJQUNsQixJQUFJLENBQUNGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEVBQUU7SUFDdkIsSUFBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxJQUFJLEtBQUssRUFDN0I7TUFDSSxJQUFJLENBQUNKLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLDBCQUEwQjtNQUMvQztJQUNKOztJQUVBLElBQUlFLE9BQU8sR0FBR2IsRUFBRSxDQUFDYyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msb0JBQW9CLENBQUNuQixRQUFRLENBQUNvQixHQUFHLENBQUM7SUFDbkUsSUFBRyxJQUFJLENBQUNYLFdBQVcsQ0FBQ1ksUUFBUSxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUN4QztNQUNJO01BQ0EsSUFBSUQsUUFBUSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDWSxRQUFRO01BQ3hDLEtBQUssSUFBSUUsQ0FBQyxHQUFHRixRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQUlDLEVBQUUsR0FBR0gsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMvQyxJQUFHRCxFQUFFLElBQUksSUFBSSxFQUNiO1VBQ0ksS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdWLE9BQU8sQ0FBQ00sTUFBTSxFQUFFSSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFHVixPQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDQyxFQUFFLElBQUlILEVBQUUsQ0FBQ0csRUFBRSxFQUN6QjtjQUNJSCxFQUFFLENBQUNJLE9BQU8sQ0FBQ1osT0FBTyxDQUFDVSxDQUFDLENBQUMsQ0FBQztjQUN0QixJQUFHVixPQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUNwQlIsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ08sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUUxQlQsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ08sTUFBTSxHQUFHLEtBQUs7WUFDbEM7VUFDSjtRQUNKO01BQ0o7SUFDSixDQUFDLE1BRUQ7TUFDSSxLQUFLLElBQUlQLENBQUMsR0FBR1AsT0FBTyxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUMxQztRQUNBLElBQUlRLEdBQUcsR0FBRzVCLEVBQUUsQ0FBQzZCLFdBQVcsQ0FBQyxJQUFJLENBQUN6QixRQUFRLENBQUM7UUFDdkN3QixHQUFHLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUN4QixXQUFXO1FBQzdCc0IsR0FBRyxDQUFDTixZQUFZLENBQUMsWUFBWSxDQUFDLENBQUNTLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ08sQ0FBQyxDQUFDLEVBQUV2QixRQUFRLENBQUNvQixHQUFHLENBQUM7UUFDN0QsSUFBR0osT0FBTyxDQUFDTyxDQUFDLENBQUMsQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFDeEI7VUFDSUUsR0FBRyxDQUFDRCxNQUFNLEdBQUcsSUFBSTtRQUNyQixDQUFDLE1BRUQ7VUFDSUMsR0FBRyxDQUFDRCxNQUFNLEdBQUcsS0FBSztRQUN0QjtNQUNKO0lBQ0o7RUFDSixDQUFDO0VBRURmLFVBQVUsRUFBQyxTQUFBQSxXQUFBLEVBQVU7SUFDakIsSUFBSW9CLFFBQVEsR0FBR2hDLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLG9CQUFvQixDQUFDbkIsUUFBUSxDQUFDb0IsR0FBRyxDQUFDO0lBQ3BFLElBQUlnQixNQUFNLEdBQUcsS0FBSztJQUNsQixLQUFLLElBQUliLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1ksUUFBUSxDQUFDYixNQUFNLEVBQUVDLENBQUMsRUFBRSxFQUFFO01BQ3RDLElBQUdZLFFBQVEsQ0FBQ1osQ0FBQyxDQUFDLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQ3pCO1FBQ0lPLE1BQU0sR0FBRyxJQUFJO1FBQ2IsT0FBTyxJQUFJO01BQ2Y7SUFDSjtJQUNBLE9BQU9BLE1BQU07RUFDakI7QUFDSixDQUFDLENBQUM7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQyxhQUFhIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbVR5cGUgPSByZXF1aXJlKFwiSXRlbVR5cGVcIik7XHJcbnZhciBPd25lZENhclBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvd25lZFByZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgb3duZWRQYXJlbnQ6Y2MuTm9kZSxcclxuICAgICAgICB0aXBMYmw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aXBMYmwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZih0aGlzLkp1ZGVIYXNBbnkoKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwTGJsLnN0cmluZyA9IFwi5oKo6L+Y5pyq5oul5pyJ5Lu75L2V5LiA6L6G5bGe5LqO5oKo55qE5bqn6am+LOWOu+axvei9puW4guWcuui0reS5sOWQp1wiO1xyXG4gICAgICAgICAgICAvL3JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjYXJMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLkNhcik7XHJcbiAgICAgICAgaWYodGhpcy5vd25lZFBhcmVudC5jaGlsZHJlbi5sZW5ndGggIT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5LiN55So5YaN5a6e5L6L5YyW77yM5bey57uP5pyJ5LqGXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLm93bmVkUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIkJlbG9uZ0l0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpZihzYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJMaXN0W2pdLklkID09IHNjLklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5SZWZyZXNoKGNhckxpc3Rbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FyTGlzdFtqXS5vd25OdW0gPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjYXJMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuWunuS+i+WMluaxvei9plwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm93bmVkUHJlKTtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLm93bmVkUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkJlbG9uZ0l0ZW1cIikuaW5pdChjYXJMaXN0W2ldLCBJdGVtVHlwZS5DYXIpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FyTGlzdFtpXS5vd25OdW0gPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgSnVkZUhhc0FueTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBtYXRlTGlzdCA9IGNjLk1nci5Vc2VyRGF0YU1nci5nZXRPd25EYXRhTGlzdEJ5VHlwZShJdGVtVHlwZS5DYXIpO1xyXG4gICAgICAgIHZhciBoYXNBbnkgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG1hdGVMaXN0W2ldLm93bk51bSA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhc0FueSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzQW55O1xyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gT3duZWRDYXJQYW5lbDtcclxuIl19