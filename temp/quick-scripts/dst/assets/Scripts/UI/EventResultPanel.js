
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/EventResultPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e12bbpvZJlERLKL1hpHue1M', 'EventResultPanel');
// Scripts/UI/EventResultPanel.js

"use strict";

var EventResultPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    DesLbl: cc.Label,
    CostLbl: cc.Label,
    CostObj: cc.Node
  },
  ShowPanel: function ShowPanel(data) {
    this.DesLbl.string = data.text;
    this.CostLbl.string = data.des;
    this.CostObj.active = true;
    if (data.des == null || data.des == "") {
      this.CostObj.active = false;
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEV2ZW50UmVzdWx0UGFuZWwuanMiXSwibmFtZXMiOlsiRXZlbnRSZXN1bHRQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiRGVzTGJsIiwiTGFiZWwiLCJDb3N0TGJsIiwiQ29zdE9iaiIsIk5vZGUiLCJTaG93UGFuZWwiLCJkYXRhIiwic3RyaW5nIiwidGV4dCIsImRlcyIsImFjdGl2ZSIsIkNsb3NlUGFuZWwiLCJNZ3IiLCJBdWRpb01nciIsInBsYXlTRlgiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGdCQUFnQixHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUM1QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUNKLEVBQUUsQ0FBQ0ssS0FBSztJQUNmQyxPQUFPLEVBQUNOLEVBQUUsQ0FBQ0ssS0FBSztJQUNoQkUsT0FBTyxFQUFDUCxFQUFFLENBQUNRO0VBQ2YsQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBU0MsSUFBSSxFQUFDO0lBQ3BCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsSUFBSTtJQUM5QixJQUFJLENBQUNOLE9BQU8sQ0FBQ0ssTUFBTSxHQUFHRCxJQUFJLENBQUNHLEdBQUc7SUFDOUIsSUFBSSxDQUFDTixPQUFPLENBQUNPLE1BQU0sR0FBRyxJQUFJO0lBQzFCLElBQUdKLElBQUksQ0FBQ0csR0FBRyxJQUFJLElBQUksSUFBSUgsSUFBSSxDQUFDRyxHQUFHLElBQUksRUFBRSxFQUNyQztNQUNJLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxNQUFNLEdBQUcsS0FBSztJQUMvQjtFQUNKLENBQUM7RUFFREMsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFDWDtJQUNJZixFQUFFLENBQUNnQixHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxHQUFHLEtBQUs7RUFDNUI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgRXZlbnRSZXN1bHRQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgRGVzTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIENvc3RMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgQ29zdE9iajpjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5EZXNMYmwuc3RyaW5nID0gZGF0YS50ZXh0O1xyXG4gICAgICAgIHRoaXMuQ29zdExibC5zdHJpbmcgPSBkYXRhLmRlcztcclxuICAgICAgICB0aGlzLkNvc3RPYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZihkYXRhLmRlcyA9PSBudWxsIHx8IGRhdGEuZGVzID09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNvc3RPYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=