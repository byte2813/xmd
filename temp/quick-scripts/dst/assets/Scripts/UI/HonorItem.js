
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/HonorItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a387GurgBME4n57ivPSuax', 'HonorItem');
// Scripts/UI/HonorItem.js

"use strict";

var HonorItem = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    icon: cc.Sprite,
    nameLbl: cc.Label,
    Data: null
  },
  ShowData: function ShowData(data) {
    this.Data = data;
    this.icon.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    if (data.hasFinish) this.icon.setState(0);else this.icon.setState(1);
    this.nameLbl.string = data.name;
  },
  ClickOpenTip: function ClickOpenTip() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.text = cc.Mgr.global.getTranslation("Cj_" + this.Data.desId);
    cc.director.GlobalEvent.emit(cc.Mgr.Event.AchieveTip, param);
  }
});
module.exports = HonorItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEhvbm9ySXRlbS5qcyJdLCJuYW1lcyI6WyJIb25vckl0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJpY29uIiwiU3ByaXRlIiwibmFtZUxibCIsIkxhYmVsIiwiRGF0YSIsIlNob3dEYXRhIiwiZGF0YSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJoYXNGaW5pc2giLCJzZXRTdGF0ZSIsInN0cmluZyIsIm5hbWUiLCJDbGlja09wZW5UaXAiLCJNZ3IiLCJBdWRpb01nciIsInBsYXlTRlgiLCJwYXJhbSIsInRleHQiLCJnbG9iYWwiLCJnZXRUcmFuc2xhdGlvbiIsImRlc0lkIiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIkFjaGlldmVUaXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDckIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFDSixFQUFFLENBQUNLLFdBQVc7SUFDcEJDLElBQUksRUFBQ04sRUFBRSxDQUFDTyxNQUFNO0lBQ2RDLE9BQU8sRUFBQ1IsRUFBRSxDQUFDUyxLQUFLO0lBQ2hCQyxJQUFJLEVBQUM7RUFDVCxDQUFDO0VBRURDLFFBQVEsRUFBQyxTQUFBQSxTQUFVQyxJQUFJLEVBQUU7SUFDckIsSUFBSSxDQUFDRixJQUFJLEdBQUdFLElBQUk7SUFDaEIsSUFBSSxDQUFDTixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsY0FBYyxDQUFDRixJQUFJLENBQUNOLElBQUksQ0FBQztJQUM1RCxJQUFHTSxJQUFJLENBQUNHLFNBQVMsRUFDYixJQUFJLENBQUNULElBQUksQ0FBQ1UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBRXRCLElBQUksQ0FBQ1YsSUFBSSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQ1IsT0FBTyxDQUFDUyxNQUFNLEdBQUdMLElBQUksQ0FBQ00sSUFBSTtFQUNuQyxDQUFDO0VBRURDLFlBQVksRUFBQyxTQUFBQSxhQUFBLEVBQVU7SUFDbkJuQixFQUFFLENBQUNvQixHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2RBLEtBQUssQ0FBQ0MsSUFBSSxHQUFHeEIsRUFBRSxDQUFDb0IsR0FBRyxDQUFDSyxNQUFNLENBQUNDLGNBQWMsQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDaEIsSUFBSSxDQUFDaUIsS0FBSyxDQUFDO0lBQ2hFM0IsRUFBRSxDQUFDNEIsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQzlCLEVBQUUsQ0FBQ29CLEdBQUcsQ0FBQ1csS0FBSyxDQUFDQyxVQUFVLEVBQUVULEtBQUssQ0FBQztFQUNoRTtBQUVKLENBQUMsQ0FBQztBQUNGVSxNQUFNLENBQUNDLE9BQU8sR0FBR25DLFNBQVMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSG9ub3JJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICBpY29uOmNjLlNwcml0ZSxcclxuICAgICAgICBuYW1lTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIERhdGE6bnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgU2hvd0RhdGE6ZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZGF0YS5pY29uKTtcclxuICAgICAgICBpZihkYXRhLmhhc0ZpbmlzaClcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNldFN0YXRlKDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNldFN0YXRlKDEpO1xyXG4gICAgICAgIHRoaXMubmFtZUxibC5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIENsaWNrT3BlblRpcDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgcGFyYW0udGV4dCA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJDal9cIit0aGlzLkRhdGEuZGVzSWQpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50LkFjaGlldmVUaXAsIHBhcmFtKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBIb25vckl0ZW07XHJcbiJdfQ==