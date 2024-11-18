
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MarketTipItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a0a3U2JNhPMKUbl49888uN', 'MarketTipItem');
// Scripts/UI/MarketTipItem.js

"use strict";

var ItemType = require("ItemType");
var MarketTipItem = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    iconAtlas: cc.SpriteAtlas,
    Des: cc.Label,
    Icon: cc.Sprite,
    updown: cc.Sprite
  },
  SetData: function SetData(param) {
    var data = cc.Mgr.UserDataMgr.getDataByItemTypeAndId(ItemType.Goods, param.Id);
    this.Des.string = cc.Mgr.global.getTranslation(param.des.desId);
    this.Icon.spriteFrame = this.iconAtlas.getSpriteFrame(data.icon);
    //this.Icon.setState(1);
    if (param.des.State == 0) this.updown.spriteFrame = this.Atlas.getSpriteFrame("sdown");else this.updown.spriteFrame = this.Atlas.getSpriteFrame("dup");
  }
});
module.exports = MarketTipItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1hcmtldFRpcEl0ZW0uanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiTWFya2V0VGlwSXRlbSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQXRsYXMiLCJTcHJpdGVBdGxhcyIsImljb25BdGxhcyIsIkRlcyIsIkxhYmVsIiwiSWNvbiIsIlNwcml0ZSIsInVwZG93biIsIlNldERhdGEiLCJwYXJhbSIsImRhdGEiLCJNZ3IiLCJVc2VyRGF0YU1nciIsImdldERhdGFCeUl0ZW1UeXBlQW5kSWQiLCJHb29kcyIsIklkIiwic3RyaW5nIiwiZ2xvYmFsIiwiZ2V0VHJhbnNsYXRpb24iLCJkZXMiLCJkZXNJZCIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpY29uIiwiU3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3pCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxXQUFXO0lBQ3BCQyxTQUFTLEVBQUNOLEVBQUUsQ0FBQ0ssV0FBVztJQUN4QkUsR0FBRyxFQUFDUCxFQUFFLENBQUNRLEtBQUs7SUFDWkMsSUFBSSxFQUFFVCxFQUFFLENBQUNVLE1BQU07SUFDZkMsTUFBTSxFQUFDWCxFQUFFLENBQUNVO0VBQ2QsQ0FBQztFQUVERSxPQUFPLEVBQUMsU0FBQUEsUUFBU0MsS0FBSyxFQUN0QjtJQUNJLElBQUlDLElBQUksR0FBR2QsRUFBRSxDQUFDZSxHQUFHLENBQUNDLFdBQVcsQ0FBQ0Msc0JBQXNCLENBQUNwQixRQUFRLENBQUNxQixLQUFLLEVBQUNMLEtBQUssQ0FBQ00sRUFBRSxDQUFDO0lBQzdFLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxNQUFNLEdBQUdwQixFQUFFLENBQUNlLEdBQUcsQ0FBQ00sTUFBTSxDQUFDQyxjQUFjLENBQUNULEtBQUssQ0FBQ1UsR0FBRyxDQUFDQyxLQUFLLENBQUM7SUFDL0QsSUFBSSxDQUFDZixJQUFJLENBQUNnQixXQUFXLEdBQUcsSUFBSSxDQUFDbkIsU0FBUyxDQUFDb0IsY0FBYyxDQUFDWixJQUFJLENBQUNhLElBQUksQ0FBQztJQUNoRTtJQUNBLElBQUdkLEtBQUssQ0FBQ1UsR0FBRyxDQUFDSyxLQUFLLElBQUksQ0FBQyxFQUNuQixJQUFJLENBQUNqQixNQUFNLENBQUNjLFdBQVcsR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FFN0QsSUFBSSxDQUFDZixNQUFNLENBQUNjLFdBQVcsR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixjQUFjLENBQUMsS0FBSyxDQUFDO0VBQ2xFO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHL0IsYUFBYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgTWFya2V0VGlwSXRlbSA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgaWNvbkF0bGFzOmNjLlNwcml0ZUF0bGFzLFxyXG4gICAgICAgIERlczpjYy5MYWJlbCxcclxuICAgICAgICBJY29uOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgdXBkb3duOmNjLlNwcml0ZSxcclxuICAgIH0sXHJcblxyXG4gICAgU2V0RGF0YTpmdW5jdGlvbihwYXJhbSlcclxuICAgIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGNjLk1nci5Vc2VyRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKEl0ZW1UeXBlLkdvb2RzLHBhcmFtLklkKTtcclxuICAgICAgICB0aGlzLkRlcy5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKHBhcmFtLmRlcy5kZXNJZCk7XHJcbiAgICAgICAgdGhpcy5JY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZGF0YS5pY29uKTtcclxuICAgICAgICAvL3RoaXMuSWNvbi5zZXRTdGF0ZSgxKTtcclxuICAgICAgICBpZihwYXJhbS5kZXMuU3RhdGUgPT0gMClcclxuICAgICAgICAgICAgdGhpcy51cGRvd24uc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKFwic2Rvd25cIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnVwZG93bi5zcHJpdGVGcmFtZSA9IHRoaXMuQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJkdXBcIik7XHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBNYXJrZXRUaXBJdGVtOyJdfQ==