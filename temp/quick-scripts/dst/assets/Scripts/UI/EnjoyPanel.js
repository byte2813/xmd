
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/EnjoyPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6589609fM1OeIJ/a8i4TPj5', 'EnjoyPanel');
// Scripts/UI/EnjoyPanel.js

"use strict";

var JoyPanel = require("JoyPanel");
var HousePanel = require("HousePanel");
var TreatPanel = require("TreatPanel");
var CarPanel = require("CarPanel");
var EnjoyPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    MainAtlas: cc.SpriteAtlas,
    TipNameSp: cc.Sprite,
    joyPanel: JoyPanel,
    housePanel: HousePanel,
    carPanel: CarPanel
    //treatPanel:TreatPanel,
  },

  ShowPanel: function ShowPanel() {
    //this.OpenJoyPanel();
  },
  OpenJoyPanel: function OpenJoyPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = true;
    this.housePanel.node.active = false;
    this.carPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("funny");
    //this.treatPanel.node.active = false;
  },

  OpenHousePanel: function OpenHousePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = true;
    this.carPanel.node.active = false;
    //this.treatPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("house");
    this.housePanel.ShowPanel();
  },
  OpenCarPanel: function OpenCarPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = false;
    this.carPanel.node.active = true;
    //this.treatPanel.node.active = false;
    this.TipNameSp.spriteFrame = this.MainAtlas.getSpriteFrame("text_car");
    this.carPanel.ShowPanel();
  },
  OpenTreatPanel: function OpenTreatPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyPanel.node.active = false;
    this.housePanel.node.active = false;
    this.carPanel.node.active = false;
    //this.treatPanel.node.active = true;
  },

  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = EnjoyPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEVuam95UGFuZWwuanMiXSwibmFtZXMiOlsiSm95UGFuZWwiLCJyZXF1aXJlIiwiSG91c2VQYW5lbCIsIlRyZWF0UGFuZWwiLCJDYXJQYW5lbCIsIkVuam95UGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk1haW5BdGxhcyIsIlNwcml0ZUF0bGFzIiwiVGlwTmFtZVNwIiwiU3ByaXRlIiwiam95UGFuZWwiLCJob3VzZVBhbmVsIiwiY2FyUGFuZWwiLCJTaG93UGFuZWwiLCJPcGVuSm95UGFuZWwiLCJNZ3IiLCJBdWRpb01nciIsInBsYXlTRlgiLCJub2RlIiwiYWN0aXZlIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIk9wZW5Ib3VzZVBhbmVsIiwiT3BlbkNhclBhbmVsIiwiT3BlblRyZWF0UGFuZWwiLCJDbG9zZVBhbmVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlFLFVBQVUsR0FBR0YsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFbEMsSUFBSUksVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN0QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0ssV0FBVztJQUN4QkMsU0FBUyxFQUFDTixFQUFFLENBQUNPLE1BQU07SUFDbkJDLFFBQVEsRUFBQ2QsUUFBUTtJQUNqQmUsVUFBVSxFQUFDYixVQUFVO0lBQ3JCYyxRQUFRLEVBQUNaO0lBQ1Q7RUFDSixDQUFDOztFQUVEYSxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO0lBQ2hCO0VBQUEsQ0FDSDtFQUVEQyxZQUFZLEVBQUMsU0FBQUEsYUFBQSxFQUFZO0lBQ3JCWixFQUFFLENBQUNhLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2hDLElBQUksQ0FBQ1IsVUFBVSxDQUFDTyxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0lBQ25DLElBQUksQ0FBQ1AsUUFBUSxDQUFDTSxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0lBQ2pDLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxXQUFXLEdBQUcsSUFBSSxDQUFDZCxTQUFTLENBQUNlLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDbkU7RUFDSixDQUFDOztFQUVEQyxjQUFjLEVBQUMsU0FBQUEsZUFBQSxFQUFZO0lBQ3ZCcEIsRUFBRSxDQUFDYSxHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUNqQyxJQUFJLENBQUNSLFVBQVUsQ0FBQ08sSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQyxJQUFJLENBQUNQLFFBQVEsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUNqQztJQUNBLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxXQUFXLEdBQUcsSUFBSSxDQUFDZCxTQUFTLENBQUNlLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDbkUsSUFBSSxDQUFDVixVQUFVLENBQUNFLFNBQVMsRUFBRTtFQUMvQixDQUFDO0VBRURVLFlBQVksRUFBQyxTQUFBQSxhQUFBLEVBQVk7SUFDckJyQixFQUFFLENBQUNhLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0lBQ2pDLElBQUksQ0FBQ1IsVUFBVSxDQUFDTyxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0lBQ25DLElBQUksQ0FBQ1AsUUFBUSxDQUFDTSxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2hDO0lBQ0EsSUFBSSxDQUFDWCxTQUFTLENBQUNZLFdBQVcsR0FBRyxJQUFJLENBQUNkLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUN0RSxJQUFJLENBQUNULFFBQVEsQ0FBQ0MsU0FBUyxFQUFFO0VBQzdCLENBQUM7RUFFRFcsY0FBYyxFQUFDLFNBQUFBLGVBQUEsRUFBWTtJQUN2QnRCLEVBQUUsQ0FBQ2EsR0FBRyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDUCxRQUFRLENBQUNRLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFDakMsSUFBSSxDQUFDUixVQUFVLENBQUNPLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFDbkMsSUFBSSxDQUFDUCxRQUFRLENBQUNNLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFDakM7RUFDSixDQUFDOztFQUVETSxVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFVO0lBQ2pCdkIsRUFBRSxDQUFDYSxHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7RUFDNUI7QUFFSixDQUFDLENBQUM7QUFDRk8sTUFBTSxDQUFDQyxPQUFPLEdBQUcxQixVQUFVIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSm95UGFuZWwgPSByZXF1aXJlKFwiSm95UGFuZWxcIik7XHJcbnZhciBIb3VzZVBhbmVsID0gcmVxdWlyZShcIkhvdXNlUGFuZWxcIik7XHJcbnZhciBUcmVhdFBhbmVsID0gcmVxdWlyZShcIlRyZWF0UGFuZWxcIik7XHJcbnZhciBDYXJQYW5lbCA9IHJlcXVpcmUoXCJDYXJQYW5lbFwiKTtcclxuXHJcbnZhciBFbmpveVBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBNYWluQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgVGlwTmFtZVNwOmNjLlNwcml0ZSxcclxuICAgICAgICBqb3lQYW5lbDpKb3lQYW5lbCxcclxuICAgICAgICBob3VzZVBhbmVsOkhvdXNlUGFuZWwsXHJcbiAgICAgICAgY2FyUGFuZWw6Q2FyUGFuZWwsXHJcbiAgICAgICAgLy90cmVhdFBhbmVsOlRyZWF0UGFuZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vdGhpcy5PcGVuSm95UGFuZWwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgT3BlbkpveVBhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMuam95UGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaG91c2VQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FyUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRpcE5hbWVTcC5zcHJpdGVGcmFtZSA9IHRoaXMuTWFpbkF0bGFzLmdldFNwcml0ZUZyYW1lKFwiZnVubnlcIik7XHJcbiAgICAgICAgLy90aGlzLnRyZWF0UGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgT3BlbkhvdXNlUGFuZWw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5qb3lQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaG91c2VQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXJQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vdGhpcy50cmVhdFBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5UaXBOYW1lU3Auc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgIHRoaXMuaG91c2VQYW5lbC5TaG93UGFuZWwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgT3BlbkNhclBhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMuam95UGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhvdXNlUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhclBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMudHJlYXRQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuVGlwTmFtZVNwLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJ0ZXh0X2NhclwiKTtcclxuICAgICAgICB0aGlzLmNhclBhbmVsLlNob3dQYW5lbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBPcGVuVHJlYXRQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLmpveVBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ob3VzZVBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vdGhpcy50cmVhdFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEVuam95UGFuZWw7XHJcbiJdfQ==