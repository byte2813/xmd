
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/MarryPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb741mIlZRK75k4lUgcl2d+', 'MarryPanel');
// Scripts/UI/MarryPanel.js

"use strict";

var MarryPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    RoleAtlas: cc.SpriteAtlas,
    roleSp: cc.Sprite,
    TipLbl: cc.Label,
    MarryLbl1: cc.Label,
    MarryLbl2: cc.Label
  },
  ShowPanel: function ShowPanel(data) {
    if (cc.Mgr.UserDataMgr.MarryAge == 0) {
      cc.Mgr.UserDataMgr.MarryRoleId = data.Id;
      cc.Mgr.UserDataMgr.MarryAge = cc.Mgr.UserDataMgr.Age;
    }
    this.roleSp.spriteFrame = this.RoleAtlas.getSpriteFrame(data.icon);
    var name = cc.Mgr.global.getTranslation("role_" + data.Id);
    this.TipLbl.string = "恭喜" + cc.Mgr.UserDataMgr.playerName + "&&" + name + "结成伴侣";
    this.MarryLbl1.string = cc.Mgr.UserDataMgr.playerName;
    this.MarryLbl2.string = name;
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  },
  ShareToFriend: function ShareToFriend() {
    cc.Mgr.PlatformController.ShareToFriend(1);
  }
});
module.exports = MarryPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXE1hcnJ5UGFuZWwuanMiXSwibmFtZXMiOlsiTWFycnlQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUm9sZUF0bGFzIiwiU3ByaXRlQXRsYXMiLCJyb2xlU3AiLCJTcHJpdGUiLCJUaXBMYmwiLCJMYWJlbCIsIk1hcnJ5TGJsMSIsIk1hcnJ5TGJsMiIsIlNob3dQYW5lbCIsImRhdGEiLCJNZ3IiLCJVc2VyRGF0YU1nciIsIk1hcnJ5QWdlIiwiTWFycnlSb2xlSWQiLCJJZCIsIkFnZSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpY29uIiwibmFtZSIsImdsb2JhbCIsImdldFRyYW5zbGF0aW9uIiwic3RyaW5nIiwicGxheWVyTmFtZSIsIkNsb3NlUGFuZWwiLCJBdWRpb01nciIsInBsYXlTRlgiLCJub2RlIiwiYWN0aXZlIiwiU2hhcmVUb0ZyaWVuZCIsIlBsYXRmb3JtQ29udHJvbGxlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN0QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNUQyxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0ssV0FBVztJQUN4QkMsTUFBTSxFQUFDTixFQUFFLENBQUNPLE1BQU07SUFDaEJDLE1BQU0sRUFBQ1IsRUFBRSxDQUFDUyxLQUFLO0lBQ2ZDLFNBQVMsRUFBQ1YsRUFBRSxDQUFDUyxLQUFLO0lBQ2xCRSxTQUFTLEVBQUNYLEVBQUUsQ0FBQ1M7RUFDaEIsQ0FBQztFQUVERyxTQUFTLEVBQUMsU0FBQUEsVUFBU0MsSUFBSSxFQUN2QjtJQUNJLElBQUdiLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLFFBQVEsSUFBSSxDQUFDLEVBQ25DO01BQ0VoQixFQUFFLENBQUNjLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDRSxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssRUFBRTtNQUN4Q2xCLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLFFBQVEsR0FBR2hCLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDQyxXQUFXLENBQUNJLEdBQUc7SUFDdEQ7SUFDQSxJQUFJLENBQUNiLE1BQU0sQ0FBQ2MsV0FBVyxHQUFHLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ2lCLGNBQWMsQ0FBQ1IsSUFBSSxDQUFDUyxJQUFJLENBQUM7SUFDbEUsSUFBSUMsSUFBSSxHQUFHdkIsRUFBRSxDQUFDYyxHQUFHLENBQUNVLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sR0FBQ1osSUFBSSxDQUFDSyxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDVixNQUFNLENBQUNrQixNQUFNLEdBQUcsSUFBSSxHQUFDMUIsRUFBRSxDQUFDYyxHQUFHLENBQUNDLFdBQVcsQ0FBQ1ksVUFBVSxHQUFFLElBQUksR0FBQ0osSUFBSSxHQUFFLE1BQU07SUFDMUUsSUFBSSxDQUFDYixTQUFTLENBQUNnQixNQUFNLEdBQUcxQixFQUFFLENBQUNjLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDWSxVQUFVO0lBQ3JELElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ2UsTUFBTSxHQUFHSCxJQUFJO0VBQ2hDLENBQUM7RUFFREssVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQjVCLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDZSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0VBQzVCLENBQUM7RUFFREMsYUFBYSxFQUFDLFNBQUFBLGNBQUEsRUFBVTtJQUN0QmpDLEVBQUUsQ0FBQ2MsR0FBRyxDQUFDb0Isa0JBQWtCLENBQUNELGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDNUM7QUFFSixDQUFDLENBQUM7QUFDRkUsTUFBTSxDQUFDQyxPQUFPLEdBQUdyQyxVQUFVIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIE1hcnJ5UGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgUm9sZUF0bGFzOmNjLlNwcml0ZUF0bGFzLFxyXG4gICAgICAgcm9sZVNwOmNjLlNwcml0ZSxcclxuICAgICAgIFRpcExibDpjYy5MYWJlbCxcclxuICAgICAgIE1hcnJ5TGJsMTpjYy5MYWJlbCxcclxuICAgICAgIE1hcnJ5TGJsMjpjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLk1hcnJ5QWdlID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLk1hcnJ5Um9sZUlkID0gZGF0YS5JZDtcclxuICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5NYXJyeUFnZSA9IGNjLk1nci5Vc2VyRGF0YU1nci5BZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9sZVNwLnNwcml0ZUZyYW1lID0gdGhpcy5Sb2xlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZGF0YS5pY29uKTtcclxuICAgICAgICB2YXIgbmFtZSA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJyb2xlX1wiK2RhdGEuSWQpO1xyXG4gICAgICAgIHRoaXMuVGlwTGJsLnN0cmluZyA9IFwi5oGt5ZacXCIrY2MuTWdyLlVzZXJEYXRhTWdyLnBsYXllck5hbWUgK1wiJiZcIituYW1lICtcIue7k+aIkOS8tOS+o1wiO1xyXG4gICAgICAgIHRoaXMuTWFycnlMYmwxLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5wbGF5ZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuTWFycnlMYmwyLnN0cmluZyA9IG5hbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgU2hhcmVUb0ZyaWVuZDpmdW5jdGlvbigpe1xyXG4gICAgICBjYy5NZ3IuUGxhdGZvcm1Db250cm9sbGVyLlNoYXJlVG9GcmllbmQoMSk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTWFycnlQYW5lbDtcclxuIl19