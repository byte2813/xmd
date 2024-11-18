
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/CarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4a1bB6YoZJyJWAoX/eo/NJ', 'CarItem');
// Scripts/UI/CarItem.js

"use strict";

var ItemType = require("ItemType");
var CarItem = cc.Class({
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
    param.icon = this.Data.icon;
    param.Id = this.Data.Id;
    param.Type = ItemType.Car;
    param.price = this.Data.price;
    param.flag = "Buy";
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonBuy, param);
  }
});
module.exports = CarItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXENhckl0ZW0uanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiQ2FySXRlbSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibmFtZUxibCIsIkxhYmVsIiwiaWNvbiIsIlNwcml0ZSIsIkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJEYXRhIiwiaW5pdCIsImRhdGEiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiQ2xpY2tCdXkiLCJNZ3IiLCJBdWRpb01nciIsInBsYXlTRlgiLCJwYXJhbSIsIm5hbWUiLCJJZCIsIlR5cGUiLCJDYXIiLCJwcmljZSIsImZsYWciLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiT3BlbkNvbW1vbkJ1eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLE9BQU8sR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDbkIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFDSixFQUFFLENBQUNLLEtBQUs7SUFDaEJDLElBQUksRUFBQ04sRUFBRSxDQUFDTyxNQUFNO0lBQ2RDLEtBQUssRUFBQ1IsRUFBRSxDQUFDUyxXQUFXO0lBQ3BCQyxJQUFJLEVBQUM7RUFDVCxDQUFDO0VBRURDLElBQUksRUFBQyxTQUFBQSxLQUFVQyxJQUFJLEVBQUU7SUFDakIsSUFBSSxDQUFDTixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sY0FBYyxDQUFDRixJQUFJLENBQUNOLElBQUksQ0FBQztJQUM1RCxJQUFJLENBQUNJLElBQUksR0FBR0UsSUFBSTtFQUNwQixDQUFDO0VBRURHLFFBQVEsRUFBQyxTQUFBQSxTQUFBLEVBQVk7SUFDakJmLEVBQUUsQ0FBQ2dCLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUlDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZEEsS0FBSyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDVixJQUFJLENBQUNVLElBQUk7SUFDM0JELEtBQUssQ0FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQ0ksSUFBSSxDQUFDSixJQUFJO0lBQzNCYSxLQUFLLENBQUNFLEVBQUUsR0FBRyxJQUFJLENBQUNYLElBQUksQ0FBQ1csRUFBRTtJQUN2QkYsS0FBSyxDQUFDRyxJQUFJLEdBQUd6QixRQUFRLENBQUMwQixHQUFHO0lBQ3pCSixLQUFLLENBQUNLLEtBQUssR0FBRyxJQUFJLENBQUNkLElBQUksQ0FBQ2MsS0FBSztJQUM3QkwsS0FBSyxDQUFDTSxJQUFJLEdBQUcsS0FBSztJQUNsQnpCLEVBQUUsQ0FBQzBCLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUM1QixFQUFFLENBQUNnQixHQUFHLENBQUNhLEtBQUssQ0FBQ0MsYUFBYSxFQUFFWCxLQUFLLENBQUM7RUFDbkU7QUFFSixDQUFDLENBQUM7QUFDRlksTUFBTSxDQUFDQyxPQUFPLEdBQUdqQyxPQUFPIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbVR5cGUgPSByZXF1aXJlKFwiSXRlbVR5cGVcIik7XHJcbnZhciBDYXJJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBuYW1lTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIGljb246Y2MuU3ByaXRlLFxyXG4gICAgICAgIEF0bGFzOmNjLlNwcml0ZUF0bGFzLFxyXG4gICAgICAgIERhdGE6bnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZGF0YS5pY29uKTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja0J1eTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5uYW1lID0gdGhpcy5EYXRhLm5hbWU7XHJcbiAgICAgICAgcGFyYW0uaWNvbiA9IHRoaXMuRGF0YS5pY29uO1xyXG4gICAgICAgIHBhcmFtLklkID0gdGhpcy5EYXRhLklkO1xyXG4gICAgICAgIHBhcmFtLlR5cGUgPSBJdGVtVHlwZS5DYXI7XHJcbiAgICAgICAgcGFyYW0ucHJpY2UgPSB0aGlzLkRhdGEucHJpY2U7XHJcbiAgICAgICAgcGFyYW0uZmxhZyA9IFwiQnV5XCI7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vbkJ1eSwgcGFyYW0pO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENhckl0ZW07XHJcbiJdfQ==