
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/SettingPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91575+sKBJGHor0RR//JfzB', 'SettingPanel');
// Scripts/UI/SettingPanel.js

"use strict";

var SettingPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    togMan: cc.Toggle,
    togWoMan: cc.Toggle
  },
  ShowPanel: function ShowPanel() {
    if (cc.Mgr.UserDataMgr.Sex == 1) this.togMan.isChecked = true;else this.togWoMan.isChecked = true;
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  },
  ConfrimSexMan: function ConfrimSexMan() {
    cc.Mgr.AudioMgr.playSFX("click");
    cc.Mgr.UserDataMgr.Sex = 1;
  },
  ConfrimSexWoMan: function ConfrimSexWoMan() {
    cc.Mgr.AudioMgr.playSFX("click");
    cc.Mgr.UserDataMgr.Sex = 2;
  },
  OpenSound: function OpenSound() {
    cc.Mgr.AudioMgr.resumeAll();
    cc.Mgr.AudioMgr.playSFX("click");
  },
  OffSound: function OffSound() {
    cc.Mgr.AudioMgr.pauseAll();
  }
});
module.exports = SettingPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFNldHRpbmdQYW5lbC5qcyJdLCJuYW1lcyI6WyJTZXR0aW5nUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRvZ01hbiIsIlRvZ2dsZSIsInRvZ1dvTWFuIiwiU2hvd1BhbmVsIiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJTZXgiLCJpc0NoZWNrZWQiLCJDbG9zZVBhbmVsIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwibm9kZSIsImFjdGl2ZSIsIkNvbmZyaW1TZXhNYW4iLCJDb25mcmltU2V4V29NYW4iLCJPcGVuU291bmQiLCJyZXN1bWVBbGwiLCJPZmZTb3VuZCIsInBhdXNlQWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3hCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBQ0osRUFBRSxDQUFDSyxNQUFNO0lBQ2hCQyxRQUFRLEVBQUNOLEVBQUUsQ0FBQ0s7RUFDaEIsQ0FBQztFQUVERSxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO0lBQ2hCLElBQUdQLEVBQUUsQ0FBQ1EsR0FBRyxDQUFDQyxXQUFXLENBQUNDLEdBQUcsSUFBSSxDQUFDLEVBQzFCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBRTdCLElBQUksQ0FBQ0wsUUFBUSxDQUFDSyxTQUFTLEdBQUcsSUFBSTtFQUN0QyxDQUFDO0VBRURDLFVBQVUsRUFBQyxTQUFBQSxXQUFBLEVBQVU7SUFDakJaLEVBQUUsQ0FBQ1EsR0FBRyxDQUFDSyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0VBQzVCLENBQUM7RUFFREMsYUFBYSxFQUFDLFNBQUFBLGNBQUEsRUFBVTtJQUNwQmpCLEVBQUUsQ0FBQ1EsR0FBRyxDQUFDSyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaENkLEVBQUUsQ0FBQ1EsR0FBRyxDQUFDQyxXQUFXLENBQUNDLEdBQUcsR0FBRyxDQUFDO0VBQzlCLENBQUM7RUFFRFEsZUFBZSxFQUFDLFNBQUFBLGdCQUFBLEVBQVU7SUFDdEJsQixFQUFFLENBQUNRLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDZCxFQUFFLENBQUNRLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLEdBQUcsQ0FBQztFQUM5QixDQUFDO0VBRURTLFNBQVMsRUFBQyxTQUFBQSxVQUFBLEVBQVU7SUFDaEJuQixFQUFFLENBQUNRLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDTyxTQUFTLEVBQUU7SUFDM0JwQixFQUFFLENBQUNRLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3BDLENBQUM7RUFFRE8sUUFBUSxFQUFDLFNBQUFBLFNBQUEsRUFBVTtJQUNmckIsRUFBRSxDQUFDUSxHQUFHLENBQUNLLFFBQVEsQ0FBQ1MsUUFBUSxFQUFFO0VBQzlCO0FBRUosQ0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHekIsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBTZXR0aW5nUGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRvZ01hbjpjYy5Ub2dnbGUsXHJcbiAgICAgICAgdG9nV29NYW46Y2MuVG9nZ2xlLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IuU2V4ID09IDEpXHJcbiAgICAgICAgICAgIHRoaXMudG9nTWFuLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRvZ1dvTWFuLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgQ29uZnJpbVNleE1hbjpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlNleCA9IDE7XHJcbiAgICB9LFxyXG5cclxuICAgIENvbmZyaW1TZXhXb01hbjpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlNleCA9IDI7XHJcbiAgICB9LFxyXG5cclxuICAgIE9wZW5Tb3VuZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5yZXN1bWVBbGwoKTtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBPZmZTb3VuZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wYXVzZUFsbCgpO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdQYW5lbDtcclxuIl19