
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/SkillItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6879+wYDZNurbu1VwNBr0v', 'SkillItem');
// Scripts/UI/SkillItem.js

"use strict";

var SkillItem = cc.Class({
  "extends": cc.Component,
  properties: {
    StartAtlas: cc.SpriteAtlas,
    Atlas: cc.SpriteAtlas,
    icon: cc.Sprite,
    maskSp: cc.Sprite,
    lvLbl: cc.Label,
    Line: cc.Sprite,
    UpTip: cc.Node,
    Data: null
  },
  ShowData: function ShowData(data, len) {
    this.UpTip.active = false;
    this.Data = data;
    this.lvLbl.string = data.level;
    this.icon.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    if (data.level != 0) {
      //this.icon.setState(0);
      this.maskSp.node.active = false;
      this.Line.setState(0);
    } else {
      //this.icon.setState(1);
      this.maskSp.node.active = true;
      this.Line.setState(1);
    }
    this.Line.node.active = false;
    if (data.subId != len) {
      this.Line.node.active = true;
    }
    this.JudeShowUpTip();
  },
  JudeShowUpTip: function JudeShowUpTip() {
    var isOk = cc.Mgr.UserDataMgr.CanShowUpTip(this.Data.Id, this.Data.subId, this.Data.level + 1);
    this.UpTip.active = isOk;
  },
  ClickOpenUp: function ClickOpenUp() {
    cc.Mgr.AudioMgr.playSFX("click");
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenUpgradeSkill, this.Data);
  }
});
module.exports = SkillItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFNraWxsSXRlbS5qcyJdLCJuYW1lcyI6WyJTa2lsbEl0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlN0YXJ0QXRsYXMiLCJTcHJpdGVBdGxhcyIsIkF0bGFzIiwiaWNvbiIsIlNwcml0ZSIsIm1hc2tTcCIsImx2TGJsIiwiTGFiZWwiLCJMaW5lIiwiVXBUaXAiLCJOb2RlIiwiRGF0YSIsIlNob3dEYXRhIiwiZGF0YSIsImxlbiIsImFjdGl2ZSIsInN0cmluZyIsImxldmVsIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIm5vZGUiLCJzZXRTdGF0ZSIsInN1YklkIiwiSnVkZVNob3dVcFRpcCIsImlzT2siLCJNZ3IiLCJVc2VyRGF0YU1nciIsIkNhblNob3dVcFRpcCIsIklkIiwiQ2xpY2tPcGVuVXAiLCJBdWRpb01nciIsInBsYXlTRlgiLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiT3BlblVwZ3JhZGVTa2lsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNYQyxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0ssV0FBVztJQUN0QkMsS0FBSyxFQUFDTixFQUFFLENBQUNLLFdBQVc7SUFDcEJFLElBQUksRUFBQ1AsRUFBRSxDQUFDUSxNQUFNO0lBQ2RDLE1BQU0sRUFBQ1QsRUFBRSxDQUFDUSxNQUFNO0lBQ2hCRSxLQUFLLEVBQUNWLEVBQUUsQ0FBQ1csS0FBSztJQUNkQyxJQUFJLEVBQUNaLEVBQUUsQ0FBQ1EsTUFBTTtJQUNkSyxLQUFLLEVBQUNiLEVBQUUsQ0FBQ2MsSUFBSTtJQUNiQyxJQUFJLEVBQUM7RUFDVCxDQUFDO0VBRURDLFFBQVEsRUFBQyxTQUFBQSxTQUFVQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUNMLEtBQUssQ0FBQ00sTUFBTSxHQUFHLEtBQUs7SUFDekIsSUFBSSxDQUFDSixJQUFJLEdBQUdFLElBQUk7SUFDaEIsSUFBSSxDQUFDUCxLQUFLLENBQUNVLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxLQUFLO0lBQzlCLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxXQUFXLEdBQUcsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsY0FBYyxDQUFDTixJQUFJLENBQUNWLElBQUksQ0FBQztJQUM1RCxJQUFHVSxJQUFJLENBQUNJLEtBQUssSUFBSSxDQUFDLEVBQ2xCO01BQ0k7TUFDQSxJQUFJLENBQUNaLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDTCxNQUFNLEdBQUcsS0FBSztNQUMvQixJQUFJLENBQUNQLElBQUksQ0FBQ2EsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLE1BRUQ7TUFDSTtNQUNBLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDTCxNQUFNLEdBQUcsSUFBSTtNQUM5QixJQUFJLENBQUNQLElBQUksQ0FBQ2EsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QjtJQUNBLElBQUksQ0FBQ2IsSUFBSSxDQUFDWSxJQUFJLENBQUNMLE1BQU0sR0FBRyxLQUFLO0lBQzdCLElBQUdGLElBQUksQ0FBQ1MsS0FBSyxJQUFJUixHQUFHLEVBQ3BCO01BQ0ksSUFBSSxDQUFDTixJQUFJLENBQUNZLElBQUksQ0FBQ0wsTUFBTSxHQUFHLElBQUk7SUFDaEM7SUFFQSxJQUFJLENBQUNRLGFBQWEsRUFBRTtFQUN4QixDQUFDO0VBRURBLGFBQWEsRUFBQyxTQUFBQSxjQUFBLEVBQVU7SUFDcEIsSUFBSUMsSUFBSSxHQUFHNUIsRUFBRSxDQUFDNkIsR0FBRyxDQUFDQyxXQUFXLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNoQixJQUFJLENBQUNpQixFQUFFLEVBQUUsSUFBSSxDQUFDakIsSUFBSSxDQUFDVyxLQUFLLEVBQUcsSUFBSSxDQUFDWCxJQUFJLENBQUNNLEtBQUssR0FBRyxDQUFDLENBQUU7SUFDaEcsSUFBSSxDQUFDUixLQUFLLENBQUNNLE1BQU0sR0FBR1MsSUFBSTtFQUM1QixDQUFDO0VBRURLLFdBQVcsRUFBQyxTQUFBQSxZQUFBLEVBQVU7SUFDbEJqQyxFQUFFLENBQUM2QixHQUFHLENBQUNLLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQ25DLEVBQUUsQ0FBQ29DLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUN0QyxFQUFFLENBQUM2QixHQUFHLENBQUNVLEtBQUssQ0FBQ0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDekIsSUFBSSxDQUFDO0VBQzFFO0FBQ0osQ0FBQyxDQUFDO0FBQ0YwQixNQUFNLENBQUNDLE9BQU8sR0FBRzNDLFNBQVMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgU2tpbGxJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFx0U3RhcnRBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICBpY29uOmNjLlNwcml0ZSxcclxuICAgICAgICBtYXNrU3A6Y2MuU3ByaXRlLFxyXG4gICAgICAgIGx2TGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIExpbmU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIFVwVGlwOmNjLk5vZGUsXHJcbiAgICAgICAgRGF0YTpudWxsLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93RGF0YTpmdW5jdGlvbiAoZGF0YSAsbGVuKSB7XHJcbiAgICAgICAgdGhpcy5VcFRpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubHZMYmwuc3RyaW5nID0gZGF0YS5sZXZlbDtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEuaWNvbik7XHJcbiAgICAgICAgaWYoZGF0YS5sZXZlbCAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy90aGlzLmljb24uc2V0U3RhdGUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1NwLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuTGluZS5zZXRTdGF0ZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy90aGlzLmljb24uc2V0U3RhdGUoMSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1NwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5MaW5lLnNldFN0YXRlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkxpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihkYXRhLnN1YklkICE9IGxlbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuTGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5KdWRlU2hvd1VwVGlwKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIEp1ZGVTaG93VXBUaXA6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaXNPayA9IGNjLk1nci5Vc2VyRGF0YU1nci5DYW5TaG93VXBUaXAodGhpcy5EYXRhLklkLCB0aGlzLkRhdGEuc3ViSWQsICh0aGlzLkRhdGEubGV2ZWwgKyAxKSk7XHJcbiAgICAgICAgdGhpcy5VcFRpcC5hY3RpdmUgPSBpc09rO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja09wZW5VcDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlblVwZ3JhZGVTa2lsbCwgdGhpcy5EYXRhKTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFNraWxsSXRlbTtcclxuIl19