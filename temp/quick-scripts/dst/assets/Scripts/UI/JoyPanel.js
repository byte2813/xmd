
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/JoyPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bac35/yfZAh5YNUjx7LGPG', 'JoyPanel');
// Scripts/UI/JoyPanel.js

"use strict";

var MateUnLockType = require("MateUnLockType");
var JoyTipPanel = require("JoyTipPanel");
var JoyPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    joyTipPanel: JoyTipPanel
  },
  ClickOpenBet: function ClickOpenBet() {
    cc.Mgr.AudioMgr.playSFX("click");
    //如何计算 赌博花费
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenBetTip, {});
    //var param = {};
    //this.joyTipPanel.node.active = true;
    //var seed = 1 + Math.floor(Math.random() * 5);
    //param.text = "人生就像赌博，怕输的人永远赢不了";//cc.Mgr.global.getTranslation("ToDate_" + seed);
    //param.forWhat = "ToBet";

    //this.joyTipPanel.ShowPanel(param);
  },

  ClickOpenDateRation: function ClickOpenDateRation() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.joyTipPanel.node.active = true;
    var param = {};
    var seed = 1 + Math.floor(Math.random() * 5);
    param.text = cc.Mgr.global.getTranslation("ToDate_" + seed);
    param.forWhat = "ToDate";
    this.joyTipPanel.ShowPanel(param);
  },
  ClickAds: function ClickAds() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.text = "现在没有广告，过段时间再来";
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
  }
});
module.exports = JoyPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEpveVBhbmVsLmpzIl0sIm5hbWVzIjpbIk1hdGVVbkxvY2tUeXBlIiwicmVxdWlyZSIsIkpveVRpcFBhbmVsIiwiSm95UGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpveVRpcFBhbmVsIiwiQ2xpY2tPcGVuQmV0IiwiTWdyIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIk9wZW5CZXRUaXAiLCJDbGlja09wZW5EYXRlUmF0aW9uIiwibm9kZSIsImFjdGl2ZSIsInBhcmFtIiwic2VlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRleHQiLCJnbG9iYWwiLCJnZXRUcmFuc2xhdGlvbiIsImZvcldoYXQiLCJTaG93UGFuZWwiLCJDbGlja0FkcyIsIk9wZW5Db21tb25UaXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3BCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBQ047RUFDaEIsQ0FBQztFQUVETyxZQUFZLEVBQUMsU0FBQUEsYUFBQSxFQUFZO0lBQ3JCTCxFQUFFLENBQUNNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ25DO0lBQ0FSLEVBQUUsQ0FBQ1MsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQ1gsRUFBRSxDQUFDTSxHQUFHLENBQUNNLEtBQUssQ0FBQ0MsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3REO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7RUFDSixDQUFDOztFQUVEQyxtQkFBbUIsRUFBQyxTQUFBQSxvQkFBQSxFQUFVO0lBQzFCZCxFQUFFLENBQUNNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQ0osV0FBVyxDQUFDVyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ25DLElBQUlDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJQyxJQUFJLEdBQUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUNKLEtBQUssQ0FBQ0ssSUFBSSxHQUFHdEIsRUFBRSxDQUFDTSxHQUFHLENBQUNpQixNQUFNLENBQUNDLGNBQWMsQ0FBQyxTQUFTLEdBQUdOLElBQUksQ0FBQztJQUMzREQsS0FBSyxDQUFDUSxPQUFPLEdBQUcsUUFBUTtJQUV4QixJQUFJLENBQUNyQixXQUFXLENBQUNzQixTQUFTLENBQUNULEtBQUssQ0FBQztFQUVyQyxDQUFDO0VBRURVLFFBQVEsRUFBQyxTQUFBQSxTQUFBLEVBQVU7SUFDZjNCLEVBQUUsQ0FBQ00sR0FBRyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDbkMsSUFBSVMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNYQSxLQUFLLENBQUNLLElBQUksR0FBRyxlQUFlO0lBQzVCdEIsRUFBRSxDQUFDUyxRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDWCxFQUFFLENBQUNNLEdBQUcsQ0FBQ00sS0FBSyxDQUFDZ0IsYUFBYSxFQUFFWCxLQUFLLENBQUM7RUFDbkU7QUFDSixDQUFDLENBQUM7QUFDRlksTUFBTSxDQUFDQyxPQUFPLEdBQUcvQixRQUFRIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWF0ZVVuTG9ja1R5cGUgPSByZXF1aXJlKFwiTWF0ZVVuTG9ja1R5cGVcIik7XHJcbnZhciBKb3lUaXBQYW5lbCA9IHJlcXVpcmUoXCJKb3lUaXBQYW5lbFwiKTtcclxudmFyIEpveVBhbmVsID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBqb3lUaXBQYW5lbDpKb3lUaXBQYW5lbCxcclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tPcGVuQmV0OmZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgXHQvL+WmguS9leiuoeeulyDotYzljZroirHotLlcclxuICAgIFx0Y2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlbkJldFRpcCwge30pO1xyXG4gICAgICAgIC8vdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgLy90aGlzLmpveVRpcFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL3ZhciBzZWVkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG4gICAgICAgIC8vcGFyYW0udGV4dCA9IFwi5Lq655Sf5bCx5YOP6LWM5Y2a77yM5oCV6L6T55qE5Lq65rC46L+c6LWi5LiN5LqGXCI7Ly9jYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiVG9EYXRlX1wiICsgc2VlZCk7XHJcbiAgICAgICAgLy9wYXJhbS5mb3JXaGF0ID0gXCJUb0JldFwiO1xyXG5cclxuICAgICAgICAvL3RoaXMuam95VGlwUGFuZWwuU2hvd1BhbmVsKHBhcmFtKTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tPcGVuRGF0ZVJhdGlvbjpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5qb3lUaXBQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgdmFyIHNlZWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgcGFyYW0udGV4dCA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJUb0RhdGVfXCIgKyBzZWVkKTtcclxuICAgICAgICBwYXJhbS5mb3JXaGF0ID0gXCJUb0RhdGVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5qb3lUaXBQYW5lbC5TaG93UGFuZWwocGFyYW0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja0FkczpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICBcdHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHBhcmFtLnRleHQgPSBcIueOsOWcqOayoeacieW5v+WRiu+8jOi/h+auteaXtumXtOWGjeadpVwiO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEpveVBhbmVsO1xyXG4iXX0=