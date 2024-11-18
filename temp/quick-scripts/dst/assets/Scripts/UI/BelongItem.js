
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/BelongItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b39f0lCkV5LqZLaCiCHm5Zf', 'BelongItem');
// Scripts/UI/BelongItem.js

"use strict";

var ItemType = require("ItemType");
var BelongItem = cc.Class({
  "extends": cc.Component,
  properties: {
    itemType: {
      "default": ItemType.Car,
      type: ItemType
    },
    Id: cc.Integer,
    ItemName: "",
    icon: cc.Sprite,
    Atlas: cc.SpriteAtlas,
    price: cc.Integer,
    nameLbl: cc.Label,
    desLbl: cc.Label,
    Data: null
  },
  init: function init(data, itemType) {
    this.Id = data.Id;
    this.Data = data;
    this.itemType = itemType;
    this.icon.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    //this.nameLbl.string = data.name;
    this.ItemName = data.name;
    if (data.price == null) this.price = 0;else this.price = data.price;
    if (this.itemType == ItemType.Car || this.itemType == ItemType.House) {
      this.desLbl.string = "x" + data.ownNum;
    } else if (this.itemType == ItemType.Mate) {
      this.desLbl.string = "";
    }
  },
  ClickOpen: function ClickOpen() {
    cc.Mgr.AudioMgr.playSFX("click");
    if (this.itemType == ItemType.Car || this.itemType == ItemType.House) {
      var param = {};
      if (this.itemType == ItemType.Car) param.name = cc.Mgr.global.getTranslation("car_" + this.Id);else param.name = cc.Mgr.global.getTranslation("company_" + this.Id);
      param.Id = this.Id;
      param.Type = ItemType.House;
      if (this.itemType == ItemType.Car) param.Type = ItemType.Car;
      param.price = this.price;
      param.icon = this.Data.icon;
      param.flag = "Sale";
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonBuy, param);
    } else if (this.itemType == ItemType.Mate) {
      var param = {};
      param.name = param.name = cc.Mgr.global.getTranslation("role_" + this.Id);
      param.Id = this.Id;
      param.Type = ItemType.Mate;
      param.price = this.price;
      param.flag = "Sale";
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonBuy, param);
    }
  },
  Refresh: function Refresh(data) {
    if (this.itemType == ItemType.Car || this.itemType == ItemType.House) {
      this.desLbl.string = "x" + data.ownNum;
    }
  }
});
module.exports = BelongItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEJlbG9uZ0l0ZW0uanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiQmVsb25nSXRlbSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbVR5cGUiLCJDYXIiLCJ0eXBlIiwiSWQiLCJJbnRlZ2VyIiwiSXRlbU5hbWUiLCJpY29uIiwiU3ByaXRlIiwiQXRsYXMiLCJTcHJpdGVBdGxhcyIsInByaWNlIiwibmFtZUxibCIsIkxhYmVsIiwiZGVzTGJsIiwiRGF0YSIsImluaXQiLCJkYXRhIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIm5hbWUiLCJIb3VzZSIsInN0cmluZyIsIm93bk51bSIsIk1hdGUiLCJDbGlja09wZW4iLCJNZ3IiLCJBdWRpb01nciIsInBsYXlTRlgiLCJwYXJhbSIsImdsb2JhbCIsImdldFRyYW5zbGF0aW9uIiwiVHlwZSIsImZsYWciLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiT3BlbkNvbW1vbkJ1eSIsIlJlZnJlc2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQztNQUNMLFdBQVFQLFFBQVEsQ0FBQ1EsR0FBRztNQUNwQkMsSUFBSSxFQUFDVDtJQUNULENBQUM7SUFDRFUsRUFBRSxFQUFDUCxFQUFFLENBQUNRLE9BQU87SUFDYkMsUUFBUSxFQUFDLEVBQUU7SUFDWEMsSUFBSSxFQUFDVixFQUFFLENBQUNXLE1BQU07SUFDZEMsS0FBSyxFQUFDWixFQUFFLENBQUNhLFdBQVc7SUFDcEJDLEtBQUssRUFBQ2Qs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Q0FBQzhCLElBQUksRUFDdEM7TUFDSSxJQUFJSyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ2RBLEtBQUssQ0FBQ1QsSUFBSSxHQUFHUyxLQUFLLENBQUNULElBQUksR0FBR3ZCLEVBQUUsQ0FBQzZCLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDQyxjQUFjLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQzNCLEVBQUUsQ0FBQztNQUN2RXlCLEtBQUssQ0FBQ3pCLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7TUFDbEJ5QixLQUFLLENBQUNHLElBQUksR0FBR3RDLFFBQVEsQ0FBQzhCLElBQUk7TUFDMUJLLEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7TUFDeEJrQixLQUFLLENBQUNJLElBQUksR0FBRyxNQUFNO01BQ25CcEMsRUFBRSxDQUFDcUMsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQ3ZDLEVBQUUsQ0FBQzZCLEdBQUcsQ0FBQ1csS0FBSyxDQUFDQyxhQUFhLEVBQUVULEtBQUssQ0FBQztJQUNuRTtFQUVKLENBQUM7RUFFRFUsT0FBTyxFQUFDLFNBQUFBLFFBQVN0QixJQUFJLEVBQUM7SUFDbEIsSUFBRyxJQUFJLENBQUNoQixRQUFRLElBQUlQLFFBQVEsQ0FBQ1EsR0FBRyxJQUFJLElBQUksQ0FBQ0QsUUFBUSxJQUFJUCxRQUFRLENBQUMyQixLQUFLLEVBQ25FO01BQ0ksSUFBSSxDQUFDUCxNQUFNLENBQUNRLE1BQU0sR0FBRyxHQUFHLEdBQUdMLElBQUksQ0FBQ00sTUFBTTtJQUMxQztFQUNKO0FBRUosQ0FBQyxDQUFDO0FBQ0ZpQixNQUFNLENBQUNDLE9BQU8sR0FBRzdDLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtVHlwZSA9IHJlcXVpcmUoXCJJdGVtVHlwZVwiKTtcclxudmFyIEJlbG9uZ0l0ZW0gPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW1UeXBlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpJdGVtVHlwZS5DYXIsXHJcbiAgICAgICAgICAgIHR5cGU6SXRlbVR5cGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJZDpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIEl0ZW1OYW1lOlwiXCIsXHJcbiAgICAgICAgaWNvbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgcHJpY2U6Y2MuSW50ZWdlcixcclxuICAgICAgICBuYW1lTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIGRlc0xibDpjYy5MYWJlbCxcclxuICAgICAgICBEYXRhOm51bGwsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6ZnVuY3Rpb24gKGRhdGEsIGl0ZW1UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5JZCA9IGRhdGEuSWQ7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLml0ZW1UeXBlID0gaXRlbVR5cGU7XHJcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5BdGxhcy5nZXRTcHJpdGVGcmFtZShkYXRhLmljb24pO1xyXG4gICAgICAgIC8vdGhpcy5uYW1lTGJsLnN0cmluZyA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLkl0ZW1OYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIGlmKGRhdGEucHJpY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5wcmljZSA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByaWNlID0gZGF0YS5wcmljZTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkNhciB8fCB0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNMYmwuc3RyaW5nID0gXCJ4XCIgKyBkYXRhLm93bk51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLk1hdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc0xibC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tPcGVuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBpZih0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkNhciB8fCB0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbVR5cGUgPT0gSXRlbVR5cGUuQ2FyKVxyXG4gICAgICAgICAgICAgICAgcGFyYW0ubmFtZSA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJjYXJfXCIgKyB0aGlzLklkKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcGFyYW0ubmFtZSA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJjb21wYW55X1wiK3RoaXMuSWQpO1xyXG4gICAgICAgICAgICBwYXJhbS5JZCA9IHRoaXMuSWQ7XHJcbiAgICAgICAgICAgIHBhcmFtLlR5cGUgPSBJdGVtVHlwZS5Ib3VzZTtcclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtVHlwZSA9PSBJdGVtVHlwZS5DYXIpXHJcbiAgICAgICAgICAgICAgICBwYXJhbS5UeXBlID0gSXRlbVR5cGUuQ2FyO1xyXG4gICAgICAgICAgICBwYXJhbS5wcmljZSA9IHRoaXMucHJpY2U7XHJcbiAgICAgICAgICAgIHBhcmFtLmljb24gPSB0aGlzLkRhdGEuaWNvbjtcclxuICAgICAgICAgICAgcGFyYW0uZmxhZyA9IFwiU2FsZVwiO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuQ29tbW9uQnV5LCBwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5pdGVtVHlwZSA9PSBJdGVtVHlwZS5NYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5uYW1lID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcInJvbGVfXCIrdGhpcy5JZCk7XHJcbiAgICAgICAgICAgIHBhcmFtLklkID0gdGhpcy5JZDtcclxuICAgICAgICAgICAgcGFyYW0uVHlwZSA9IEl0ZW1UeXBlLk1hdGU7XHJcbiAgICAgICAgICAgIHBhcmFtLnByaWNlID0gdGhpcy5wcmljZTtcclxuICAgICAgICAgICAgcGFyYW0uZmxhZyA9IFwiU2FsZVwiO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuQ29tbW9uQnV5LCBwYXJhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgUmVmcmVzaDpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBpZih0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkNhciB8fCB0aGlzLml0ZW1UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNMYmwuc3RyaW5nID0gXCJ4XCIgKyBkYXRhLm93bk51bTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQmVsb25nSXRlbTsiXX0=