
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/OwnedPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2261fC2TRNHybMTckS9cQMY', 'OwnedPanel');
// Scripts/UI/OwnedPanel.js

"use strict";

var ItemType = require("ItemType");
var OwnedCarPanel = require("OwnedCarPanel");
var OwnedMatePanel = require("OwnedMatePanel");
var OwnedHousePanel = require("OwnedHousePanel");
var OwnedPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ownedCarScroll: OwnedCarPanel,
    ownedMateScroll: OwnedMatePanel,
    ownedHouseScroll: OwnedHousePanel,
    togMate: cc.Toggle,
    togCar: cc.Toggle,
    togHouse: cc.Toggle
  },
  OpenMatePanel: function OpenMatePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.ownedMateScroll.node.active = true;
    this.ownedHouseScroll.node.active = false;
    this.ownedCarScroll.node.active = false;
    this.ownedMateScroll.ShowPanel();
  },
  OpenHousePanel: function OpenHousePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.ownedMateScroll.node.active = false;
    this.ownedHouseScroll.node.active = true;
    this.ownedCarScroll.node.active = false;
    this.ownedHouseScroll.ShowPanel();
  },
  OpenCarPanel: function OpenCarPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.ownedMateScroll.node.active = false;
    this.ownedHouseScroll.node.active = false;
    this.ownedCarScroll.node.active = true;
    this.ownedCarScroll.ShowPanel();
  },
  ShowPanel: function ShowPanel() {
    if (this.togMate.isChecked == true) {
      this.OpenMatePanel();
    } else if (this.togHouse.isChecked == true) {
      this.OpenHousePanel();
    } else if (this.togCar.isChecked == true) {
      this.OpenCarPanel();
    }

    /*
    var carList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Car);
    for (var i = carList.length - 1; i >= 0; i--) {
        if(this.judeIsInitAndRefresh(ItemType.Car, carList[i]))
        {
            //cc.log("不用再实例化，已经有了");
        }
        else
        {
            //cc.log("实例化车子");
            var obj = cc.instantiate(this.ownedPre);
            obj.parent = this.ownedParent;
            obj.getComponent("BelongItem").init(carList[i], ItemType.Car);
        }
    }
      var houseList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.House);
    for (var i = houseList.length - 1; i >= 0; i--) {
        if(this.judeIsInitAndRefresh(ItemType.House, houseList[i]))
        {
            //cc.log("不用再实例化，已经有了");
        }
        else
        {
            //cc.log("实例化房子");
            var obj = cc.instantiate(this.ownedPre);
            obj.parent = this.ownedParent;
            obj.getComponent("BelongItem").init(houseList[i], ItemType.House);
        }
    }
      var mateList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Mate);
    for (var i = mateList.length - 1; i >= 0; i--) {
        if(this.judeIsInitAndRefresh(ItemType.Mate, mateList[i]))
        {
            //cc.log("不用再实例化，已经有了");
        }
        else
        {
            //cc.log("实例化伴侣");
            var obj = cc.instantiate(this.ownedPre);
            obj.parent = this.ownedParent;
            obj.getComponent("BelongItem").init(mateList[i], ItemType.Mate);
        }
    }
    */
  },

  //判断这个 obj是否已经实例化了
  judeIsInitAndRefresh: function judeIsInitAndRefresh(itemType, data) {
    var flag = false;
    if (itemType == ItemType.Car) {
      if (data.ownNum > 0) flag = true;
    } else if (itemType == ItemType.House) {
      //cc.log("+++++++++++" + data.ownNum);
      if (data.ownNum > 0) flag = true;
    } else if (itemType == ItemType.Mate) {
      if (data.UpLv == true) flag = true;
    }
    var children = this.ownedParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("BelongItem");
      if (sc != null) {
        if (itemType == sc.itemType && data.Id == sc.Id) {
          if (itemType == ItemType.Car || itemType == ItemType.House) {
            if (data.ownNum > 0) {
              children[i].active = true;
              sc.Refresh(data);
            } else {
              children[i].active = false;
            }
          } else if (itemType == ItemType.Mate) {
            if (data.UpLv == true) children[i].active = true;else children[i].active = false;
          }
          return true;
        }
      }
    }
    if (flag == true) return false;else return true;
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = OwnedPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE93bmVkUGFuZWwuanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiT3duZWRDYXJQYW5lbCIsIk93bmVkTWF0ZVBhbmVsIiwiT3duZWRIb3VzZVBhbmVsIiwiT3duZWRQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib3duZWRDYXJTY3JvbGwiLCJvd25lZE1hdGVTY3JvbGwiLCJvd25lZEhvdXNlU2Nyb2xsIiwidG9nTWF0ZSIsIlRvZ2dsZSIsInRvZ0NhciIsInRvZ0hvdXNlIiwiT3Blbk1hdGVQYW5lbCIsIk1nciIsIkF1ZGlvTWdyIiwicGxheVNGWCIsIm5vZGUiLCJhY3RpdmUiLCJTaG93UGFuZWwiLCJPcGVuSG91c2VQYW5lbCIsIk9wZW5DYXJQYW5lbCIsImlzQ2hlY2tlZCIsImp1ZGVJc0luaXRBbmRSZWZyZXNoIiwiaXRlbVR5cGUiLCJkYXRhIiwiZmxhZyIsIkNhciIsIm93bk51bSIsIkhvdXNlIiwiTWF0ZSIsIlVwTHYiLCJjaGlsZHJlbiIsIm93bmVkUGFyZW50IiwiaSIsImxlbmd0aCIsInNjIiwiZ2V0Q29tcG9uZW50IiwiSWQiLCJSZWZyZXNoIiwiQ2xvc2VQYW5lbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QyxJQUFJRyxlQUFlLEdBQUdILE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUVoRCxJQUFJSSxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1RDLGNBQWMsRUFB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QUFDa0MsSUFBSSxFQUNqQztZQUNJLElBQUdMLElBQUksQ0FBQ00sSUFBSSxJQUFJLElBQUksRUFDaEJDLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBRTFCYyxRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDaEIsTUFBTSxHQUFHLEtBQUs7VUFDbEM7VUFDQSxPQUFPLElBQUk7UUFDZjtNQUNKO0lBQ0o7SUFDQSxJQUFHUSxJQUFJLElBQUksSUFBSSxFQUNYLE9BQU8sS0FBSyxDQUFDLEtBRWIsT0FBTyxJQUFJO0VBQ25CLENBQUM7RUFFRGMsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQnRDLEVBQUUsQ0FBQ1ksR0FBRyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0VBQzVCO0FBQ0osQ0FBQyxDQUFDO0FBQ0Z1QixNQUFNLENBQUNDLE9BQU8sR0FBR3pDLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtVHlwZSA9IHJlcXVpcmUoXCJJdGVtVHlwZVwiKTtcclxudmFyIE93bmVkQ2FyUGFuZWwgPSByZXF1aXJlKFwiT3duZWRDYXJQYW5lbFwiKTtcclxudmFyIE93bmVkTWF0ZVBhbmVsID0gcmVxdWlyZShcIk93bmVkTWF0ZVBhbmVsXCIpO1xyXG52YXIgT3duZWRIb3VzZVBhbmVsID0gcmVxdWlyZShcIk93bmVkSG91c2VQYW5lbFwiKTtcclxuXHJcbnZhciBPd25lZFBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIG93bmVkQ2FyU2Nyb2xsOk93bmVkQ2FyUGFuZWwsXHJcbiAgICAgICBvd25lZE1hdGVTY3JvbGw6T3duZWRNYXRlUGFuZWwsXHJcbiAgICAgICBvd25lZEhvdXNlU2Nyb2xsOk93bmVkSG91c2VQYW5lbCxcclxuXHJcbiAgICAgICB0b2dNYXRlOmNjLlRvZ2dsZSxcclxuICAgICAgIHRvZ0NhcjpjYy5Ub2dnbGUsXHJcbiAgICAgICB0b2dIb3VzZTpjYy5Ub2dnbGUsXHJcbiAgICB9LFxyXG5cclxuICAgIE9wZW5NYXRlUGFuZWw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5vd25lZE1hdGVTY3JvbGwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3duZWRIb3VzZVNjcm9sbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3duZWRDYXJTY3JvbGwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5vd25lZE1hdGVTY3JvbGwuU2hvd1BhbmVsKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIE9wZW5Ib3VzZVBhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMub3duZWRNYXRlU2Nyb2xsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vd25lZEhvdXNlU2Nyb2xsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm93bmVkQ2FyU2Nyb2xsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMub3duZWRIb3VzZVNjcm9sbC5TaG93UGFuZWwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgT3BlbkNhclBhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMub3duZWRNYXRlU2Nyb2xsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vd25lZEhvdXNlU2Nyb2xsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vd25lZENhclNjcm9sbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3duZWRDYXJTY3JvbGwuU2hvd1BhbmVsKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhpcy50b2dNYXRlLmlzQ2hlY2tlZCA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5PcGVuTWF0ZVBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50b2dIb3VzZS5pc0NoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuT3BlbkhvdXNlUGFuZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnRvZ0Nhci5pc0NoZWNrZWQgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuT3BlbkNhclBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciBjYXJMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLkNhcik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNhckxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYodGhpcy5qdWRlSXNJbml0QW5kUmVmcmVzaChJdGVtVHlwZS5DYXIsIGNhckxpc3RbaV0pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuS4jeeUqOWGjeWunuS+i+WMlu+8jOW3sue7j+acieS6hlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwi5a6e5L6L5YyW6L2m5a2QXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3duZWRQcmUpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBhcmVudCA9IHRoaXMub3duZWRQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBvYmouZ2V0Q29tcG9uZW50KFwiQmVsb25nSXRlbVwiKS5pbml0KGNhckxpc3RbaV0sIEl0ZW1UeXBlLkNhcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBob3VzZUxpc3QgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0T3duRGF0YUxpc3RCeVR5cGUoSXRlbVR5cGUuSG91c2UpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBob3VzZUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYodGhpcy5qdWRlSXNJbml0QW5kUmVmcmVzaChJdGVtVHlwZS5Ib3VzZSwgaG91c2VMaXN0W2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLkuI3nlKjlho3lrp7kvovljJbvvIzlt7Lnu4/mnInkuoZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuWunuS+i+WMluaIv+WtkFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm93bmVkUHJlKTtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLm93bmVkUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkJlbG9uZ0l0ZW1cIikuaW5pdChob3VzZUxpc3RbaV0sIEl0ZW1UeXBlLkhvdXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hdGVMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLk1hdGUpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBtYXRlTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmp1ZGVJc0luaXRBbmRSZWZyZXNoKEl0ZW1UeXBlLk1hdGUsIG1hdGVMaXN0W2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLkuI3nlKjlho3lrp7kvovljJbvvIzlt7Lnu4/mnInkuoZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIuWunuS+i+WMluS8tOS+o1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm93bmVkUHJlKTtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLm93bmVkUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkJlbG9uZ0l0ZW1cIikuaW5pdChtYXRlTGlzdFtpXSwgSXRlbVR5cGUuTWF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgIH0sXHJcblxyXG4gICAgLy/liKTmlq3ov5nkuKogb2Jq5piv5ZCm5bey57uP5a6e5L6L5YyW5LqGXHJcbiAgICBqdWRlSXNJbml0QW5kUmVmcmVzaDpmdW5jdGlvbihpdGVtVHlwZSxkYXRhKXtcclxuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGl0ZW1UeXBlID09IEl0ZW1UeXBlLkNhcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3duTnVtID4gMClcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGl0ZW1UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCIrKysrKysrKysrK1wiICsgZGF0YS5vd25OdW0pO1xyXG4gICAgICAgICAgICBpZihkYXRhLm93bk51bSA+IDApXHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpdGVtVHlwZSA9PSBJdGVtVHlwZS5NYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZGF0YS5VcEx2ID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMub3duZWRQYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IFxyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJCZWxvbmdJdGVtXCIpO1xyXG4gICAgICAgICAgICBpZihzYyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtVHlwZSA9PSBzYy5pdGVtVHlwZSAmJiBkYXRhLklkID09IHNjLklkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW1UeXBlID09IEl0ZW1UeXBlLkNhciB8fCBpdGVtVHlwZSA9PSBJdGVtVHlwZS5Ib3VzZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEub3duTnVtID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLlJlZnJlc2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGl0ZW1UeXBlID09IEl0ZW1UeXBlLk1hdGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLlVwTHYgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmbGFnID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAgXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE93bmVkUGFuZWw7Il19