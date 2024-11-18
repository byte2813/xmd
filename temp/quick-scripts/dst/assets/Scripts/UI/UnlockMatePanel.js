
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/UnlockMatePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bbd2ZpGbFOe7CAGZkMPc2h', 'UnlockMatePanel');
// Scripts/UI/UnlockMatePanel.js

"use strict";

var UnlockMatePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    Sp: cc.Sprite,
    desLbl: cc.RichText
  },
  ShowPanel: function ShowPanel(data) {
    this.Sp.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    this.desLbl.string = "<color=#16a0e8>" + data.des + "</c>";
  },
  ClosePanel: function ClosePanel() {
    this.node.active = false;
  }
});
module.exports = UnlockMatePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFVubG9ja01hdGVQYW5lbC5qcyJdLCJuYW1lcyI6WyJVbmxvY2tNYXRlUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJTcCIsIlNwcml0ZSIsImRlc0xibCIsIlJpY2hUZXh0IiwiU2hvd1BhbmVsIiwiZGF0YSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpY29uIiwic3RyaW5nIiwiZGVzIiwiQ2xvc2VQYW5lbCIsIm5vZGUiLCJhY3RpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGVBQWUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDM0IsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFDSixFQUFFLENBQUNLLFdBQVc7SUFDcEJDLEVBQUUsRUFBQ04sRUFBRSxDQUFDTyxNQUFNO0lBQ1pDLE1BQU0sRUFBQ1IsRUFBRSxDQUFDUztFQUVkLENBQUM7RUFFREMsU0FBUyxFQUFDLFNBQUFBLFVBQVNDLElBQUksRUFBQztJQUNwQixJQUFJLENBQUNMLEVBQUUsQ0FBQ00sV0FBVyxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxjQUFjLENBQUNGLElBQUksQ0FBQ0csSUFBSSxDQUFDO0lBQzFELElBQUksQ0FBQ04sTUFBTSxDQUFDTyxNQUFNLEdBQUcsaUJBQWlCLEdBQUNKLElBQUksQ0FBQ0ssR0FBRyxHQUFHLE1BQU07RUFDNUQsQ0FBQztFQUVEQyxVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFZO0lBQ25CLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztFQUM1QjtBQUdKLENBQUMsQ0FBQztBQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBR3RCLGVBQWUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgVW5sb2NrTWF0ZVBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICBTcDpjYy5TcHJpdGUsXHJcbiAgICAgICAgZGVzTGJsOmNjLlJpY2hUZXh0LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuU3Auc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEuaWNvbik7XHJcbiAgICAgICAgdGhpcy5kZXNMYmwuc3RyaW5nID0gXCI8Y29sb3I9IzE2YTBlOD5cIitkYXRhLmRlcyArIFwiPC9jPlwiO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBVbmxvY2tNYXRlUGFuZWw7XHJcbiJdfQ==