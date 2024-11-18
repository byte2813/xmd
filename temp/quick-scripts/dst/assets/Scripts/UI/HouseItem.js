
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/HouseItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ea48WqAlpBZLuQaiP7A4LU', 'HouseItem');
// Scripts/UI/HouseItem.js

"use strict";

var ItemType = require("ItemType");
var HouseItem = cc.Class({
  "extends": cc.Component,
  properties: {
    nameLbl: cc.Label,
    icon: cc.Sprite,
    Atlas: cc.SpriteAtlas,
    Data: null
  },
  init: function init(data) {
    this.icon.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    this.Data = data;
  },
  ClickBuy: function ClickBuy() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.name = this.Data.name;
    param.Id = this.Data.Id;
    param.icon = this.Data.icon;
    param.Type = ItemType.House;
    param.price = this.Data.price;
    param.flag = "Buy";
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonBuy, param);
  }
});
module.exports = HouseItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEhvdXNlSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtVHlwZSIsInJlcXVpcmUiLCJIb3VzZUl0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5hbWVMYmwiLCJMYWJlbCIsImljb24iLCJTcHJpdGUiLCJBdGxhcyIsIlNwcml0ZUF0bGFzIiwiRGF0YSIsImluaXQiLCJkYXRhIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIkNsaWNrQnV5IiwiTWdyIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwicGFyYW0iLCJuYW1lIiwiSWQiLCJUeXBlIiwiSG91c2UiLCJwcmljZSIsImZsYWciLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiT3BlbkNvbW1vbkJ1eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDckIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDVEMsT0FBTyxFQUFDSixFQUFFLENBQUNLLEtBQUs7SUFDaEJDLElBQUksRUFBQ04sRUFBRSxDQUFDTyxNQUFNO0lBQ2RDLEtBQUssRUFBQ1IsRUFBRSxDQUFDUyxXQUFXO0lBQ3BCQyxJQUFJLEVBQUM7RUFDUixDQUFDO0VBRURDLElBQUksRUFBQyxTQUFBQSxLQUFVQyxJQUFJLEVBQUU7SUFDakIsSUFBSSxDQUFDTixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sY0FBYyxDQUFDRixJQUFJLENBQUNOLElBQUksQ0FBQztJQUM1RCxJQUFJLENBQUNJLElBQUksR0FBR0UsSUFBSTtFQUNwQixDQUFDO0VBRURHLFFBQVEsRUFBQyxTQUFBQSxTQUFBLEVBQVU7SUFDZmYsRUFBRSxDQUFDZ0IsR0FBRyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNWLElBQUksQ0FBQ1UsSUFBSTtJQUMzQkQsS0FBSyxDQUFDRSxFQUFFLEdBQUcsSUFBSSxDQUFDWCxJQUFJLENBQUNXLEVBQUU7SUFDdkJGLEtBQUssQ0FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQ0ksSUFBSSxDQUFDSixJQUFJO0lBQzNCYSxLQUFLLENBQUNHLElBQUksR0FBR3pCLFFBQVEsQ0FBQzBCLEtBQUs7SUFDM0JKLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLElBQUksQ0FBQ2QsSUFBSSxDQUFDYyxLQUFLO0lBQzdCTCxLQUFLLENBQUNNLElBQUksR0FBRyxLQUFLO0lBQ2xCekIsRUFBRSxDQUFDMEIsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQzVCLEVBQUUsQ0FBQ2dCLEdBQUcsQ0FBQ2EsS0FBSyxDQUFDQyxhQUFhLEVBQUVYLEtBQUssQ0FBQztFQUNuRTtBQUNKLENBQUMsQ0FBQztBQUNGWSxNQUFNLENBQUNDLE9BQU8sR0FBR2pDLFNBQVMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtVHlwZSA9IHJlcXVpcmUoXCJJdGVtVHlwZVwiKTtcclxudmFyIEhvdXNlSXRlbSA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICBuYW1lTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgaWNvbjpjYy5TcHJpdGUsXHJcbiAgICAgICBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgIERhdGE6bnVsbCwgXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6ZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEuaWNvbik7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tCdXk6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHBhcmFtLm5hbWUgPSB0aGlzLkRhdGEubmFtZTtcclxuICAgICAgICBwYXJhbS5JZCA9IHRoaXMuRGF0YS5JZDtcclxuICAgICAgICBwYXJhbS5pY29uID0gdGhpcy5EYXRhLmljb247XHJcbiAgICAgICAgcGFyYW0uVHlwZSA9IEl0ZW1UeXBlLkhvdXNlO1xyXG4gICAgICAgIHBhcmFtLnByaWNlID0gdGhpcy5EYXRhLnByaWNlO1xyXG4gICAgICAgIHBhcmFtLmZsYWcgPSBcIkJ1eVwiO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25CdXksIHBhcmFtKTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEhvdXNlSXRlbTtcclxuIl19