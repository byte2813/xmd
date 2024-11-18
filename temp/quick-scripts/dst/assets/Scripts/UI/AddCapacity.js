
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/AddCapacity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fbafyHMUZGWphXBhh7ao50', 'AddCapacity');
// Scripts/UI/AddCapacity.js

"use strict";

var AdsParam = require("AdsParam");
var AddCapacity = cc.Class({
  "extends": cc.Component,
  properties: {
    AddLbl: cc.Label,
    DesLbl: cc.Label,
    Slider: cc.Slider,
    Progress: cc.ProgressBar,
    AddNum: 10,
    CanAddNum: cc.Integer
  },
  ShowPanel: function ShowPanel() {
    this.AddNum = 10;
    this.AddLbl.string = 10;
    this.DesLbl.string = 200; //this.AddNum * cc.Mgr.global.AddCapacityCost;;
    this.Slider.progress = 0;
    this.Progress.progress = 0;
    this.CanAddNum = Math.floor(cc.Mgr.UserDataMgr.Cash / cc.Mgr.global.AddCapacityCost);
  },
  showRewardVideo: function showRewardVideo() {
    this.js2android('show_reward_video', '1');
  },
  ///激励视频播放完成回调方法 continue_game
  /// Native.android2js("continue_game", ()=>{
  ///     //激励视频播放完成，原生端回调
  /// });
  js2android: function js2android(name, data) {
    console.log("name:" + name + "-data:" + data);
    if (window.injectedObject && window.injectedObject.setJsContent) {
      window.injectedObject.setJsContent(name, data);
    }
  },
  OnSliderChange: function OnSliderChange() {
    this.AddNum = 10; //Math.floor(this.Slider.progress * this.CanAddNum);
    this.Progress.progress = this.Slider.progress;
    var money = this.AddNum * cc.Mgr.global.AddCapacityCost;
    this.DesLbl.string = "需要消耗" + money + "元现金";
    this.AddLbl.string = this.AddNum;
  },
  ClickAdd: function ClickAdd() {
    if (cc.Mgr.UserDataMgr.WareHouseAllCapcity >= 200) {
      this.ClosePanel();
      return;
    }
    var self = this;
    self.showRewardVideo();
    cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointF, function (out) {
      if (out == 0) {
        cc.Mgr.UserDataMgr.WareHouseCapcity += self.AddNum;
        cc.Mgr.UserDataMgr.WareHouseAllCapcity += self.AddNum;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.AddWareHouseCapacity, {});
        self.ClosePanel();
      }
    });
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = AddCapacity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEFkZENhcGFjaXR5LmpzIl0sIm5hbWVzIjpbIkFkc1BhcmFtIiwicmVxdWlyZSIsIkFkZENhcGFjaXR5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJBZGRMYmwiLCJMYWJlbCIsIkRlc0xibCIsIlNsaWRlciIsIlByb2dyZXNzIiwiUHJvZ3Jlc3NCYXIiLCJBZGROdW0iLCJDYW5BZGROdW0iLCJJbnRlZ2VyIiwiU2hvd1BhbmVsIiwic3RyaW5nIiwicHJvZ3Jlc3MiLCJNYXRoIiwiZmxvb3IiLCJNZ3IiLCJVc2VyRGF0YU1nciIsIkNhc2giLCJnbG9iYWwiLCJBZGRDYXBhY2l0eUNvc3QiLCJzaG93UmV3YXJkVmlkZW8iLCJqczJhbmRyb2lkIiwibmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaW5qZWN0ZWRPYmplY3QiLCJzZXRKc0NvbnRlbnQiLCJPblNsaWRlckNoYW5nZSIsIm1vbmV5IiwiQ2xpY2tBZGQiLCJXYXJlSG91c2VBbGxDYXBjaXR5IiwiQ2xvc2VQYW5lbCIsInNlbGYiLCJBZHNNZ3IiLCJTaG93VmlkZW9BZHMiLCJQb2ludEYiLCJvdXQiLCJXYXJlSG91c2VDYXBjaXR5IiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIkFkZFdhcmVIb3VzZUNhcGFjaXR5IiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwibm9kZSIsImFjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLFdBQVcsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdkIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFDSixFQUFFLENBQUNLLEtBQUs7SUFDZkMsTUFBTSxF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Q0FBQyxDQUFDLENBQUM7UUFDbkVWLElBQUksQ0FBQ0QsVUFBVSxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEQSxVQUFVLEVBQUMsU0FBQUEsV0FBQSxFQUFVO0lBQ3BCcEMsRUFBRSxDQUFDa0IsR0FBRyxDQUFDOEIsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztFQUM1QjtBQUVKLENBQUMsQ0FBQztBQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBR3RELFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBZHNQYXJhbSA9IHJlcXVpcmUoXCJBZHNQYXJhbVwiKTtcclxudmFyIEFkZENhcGFjaXR5ID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBZGRMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgRGVzTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIFNsaWRlcjpjYy5TbGlkZXIsXHJcbiAgICAgICAgUHJvZ3Jlc3M6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgQWRkTnVtOjEwLFxyXG4gICAgICAgIENhbkFkZE51bTpjYy5JbnRlZ2VyLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLkFkZE51bSA9IDEwO1xyXG4gICAgICAgIHRoaXMuQWRkTGJsLnN0cmluZyA9IDEwO1xyXG4gICAgICAgIHRoaXMuRGVzTGJsLnN0cmluZyA9IDIwMCA7Ly90aGlzLkFkZE51bSAqIGNjLk1nci5nbG9iYWwuQWRkQ2FwYWNpdHlDb3N0OztcclxuICAgICAgICB0aGlzLlNsaWRlci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5DYW5BZGROdW0gPSBNYXRoLmZsb29yKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoIC8gY2MuTWdyLmdsb2JhbC5BZGRDYXBhY2l0eUNvc3QpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXdhcmRWaWRlbygpIHtcclxuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ3Nob3dfcmV3YXJkX3ZpZGVvJywgJzEnKVxyXG4gICAgfSxcclxuXHJcbiAgICAvLy/mv4DlirHop4bpopHmkq3mlL7lrozmiJDlm57osIPmlrnms5UgY29udGludWVfZ2FtZVxyXG4gICAgLy8vIE5hdGl2ZS5hbmRyb2lkMmpzKFwiY29udGludWVfZ2FtZVwiLCAoKT0+e1xyXG4gICAgLy8vICAgICAvL+a/gOWKseinhumikeaSreaUvuWujOaIkO+8jOWOn+eUn+err+Wbnuiwg1xyXG4gICAgLy8vIH0pO1xyXG4gICAganMyYW5kcm9pZChuYW1lLCBkYXRhKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgbmFtZToke25hbWV9LWRhdGE6JHtkYXRhfWApO1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbmplY3RlZE9iamVjdCAmJiB3aW5kb3cuaW5qZWN0ZWRPYmplY3Quc2V0SnNDb250ZW50KXtcclxuICAgICAgICAgICAgd2luZG93LmluamVjdGVkT2JqZWN0LnNldEpzQ29udGVudChuYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIE9uU2xpZGVyQ2hhbmdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLkFkZE51bSA9IDEwOy8vTWF0aC5mbG9vcih0aGlzLlNsaWRlci5wcm9ncmVzcyAqIHRoaXMuQ2FuQWRkTnVtKTtcclxuICAgICAgICB0aGlzLlByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5TbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgdmFyIG1vbmV5ID0gdGhpcy5BZGROdW0gKiBjYy5NZ3IuZ2xvYmFsLkFkZENhcGFjaXR5Q29zdDtcclxuXHJcbiAgICAgICAgdGhpcy5EZXNMYmwuc3RyaW5nID0gXCLpnIDopoHmtojogJdcIittb25leStcIuWFg+eOsOmHkVwiO1xyXG4gICAgICAgIHRoaXMuQWRkTGJsLnN0cmluZyA9IHRoaXMuQWRkTnVtO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja0FkZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5XYXJlSG91c2VBbGxDYXBjaXR5ID49IDIwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xvc2VQYW5lbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnNob3dSZXdhcmRWaWRlbygpO1xyXG4gICAgICAgIGNjLk1nci5BZHNNZ3IuU2hvd1ZpZGVvQWRzKEFkc1BhcmFtLlBvaW50RiwgZnVuY3Rpb24ob3V0KXtcclxuICAgICAgICAgICAgaWYob3V0ID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5XYXJlSG91c2VDYXBjaXR5ICs9IHNlbGYuQWRkTnVtO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLldhcmVIb3VzZUFsbENhcGNpdHkgKz0gc2VsZi5BZGROdW07XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5BZGRXYXJlSG91c2VDYXBhY2l0eSwge30pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5DbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgXHRjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBBZGRDYXBhY2l0eTtcclxuIl19