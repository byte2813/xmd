
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/BetPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e414miwcVCzL4CUcTU1Wbf', 'BetPanel');
// Scripts/UI/BetPanel.js

"use strict";

var TempBonus = require("TempBonus");
var BetPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    CashLbl: cc.Label,
    costLbl: cc.Label,
    cost: cc.Integer,
    CoinNode: cc.Node,
    CoinEffect: cc.Animation,
    zhenNode: cc.Node,
    stateBet: false,
    rate: 0,
    IsWin: false,
    tmpWinRatio: 0 //临时赢钱概率
  },

  ShowPanel: function ShowPanel(data) {
    this.CoinNode.active = false;
    this.stateBet = false;
    this.tmpWinRatio = 0;
    this.zhenNode.rotation = 0;
    this.costLbl.string = "花费金额:" + cc.Mgr.global.BetInitCost;
    this.CashLbl.string = cc.Mgr.UserDataMgr.Cash;
  },
  ClickBet: function ClickBet() {
    cc.Mgr.AudioMgr.playSFX("click");
    if (this.stateBet == true) return;
    if (cc.Mgr.UserDataMgr.Cash < cc.Mgr.global.BetInitCost) {
      var param = {};
      param.forWhat = "";
      param.text = cc.Mgr.global.getTranslation("MoneyNotEnough");
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      return;
    }
    this.stateBet = true;
    this.GoToBet();
  },
  CaculateWinRatio: function CaculateWinRatio() {
    var seed = Math.random();
    this.IsWin = true;
    this.zhenNode.rotation / 60 % 6;
    var rotateAngle = 360 * 6;
    if (seed < cc.Mgr.global.BetWinNullRatio) {
      this.IsWin = false;
      this.rate = 0;
      var sd = Math.random();
      if (sd < 0.33) rotateAngle += 0;else if (sd < 0.66) rotateAngle += 2 * 60;else rotateAngle += 4 * 60;
    } else if (seed < cc.Mgr.global.BetWinThreeRatio) {
      this.rate = 3;
      rotateAngle += 1 * 60;
    } else if (seed < cc.Mgr.global.BetWinFourRatio) {
      this.rate = 4;
      rotateAngle += 3 * 60;
    } else {
      this.rate = 5;
      rotateAngle += 5 * 60;
    }
    return rotateAngle;
  },
  //0 2 4 位置是 谢谢惠顾
  //1 3 5 是win
  GoToBet: function GoToBet() {
    var _this = this;
    var self = this;
    var seed = Math.floor(Math.random() * 6) + 1;
    cc.Mgr.UserDataMgr.Cash -= cc.Mgr.global.BetInitCost;
    var x = this.CaculateWinRatio();
    var rotation = cc.rotateTo(3, x).easing(cc.easeSineInOut());
    var finished = cc.callFunc(function () {
      cc.log("这就是结局================" + _this.zhenNode.rotation);
      self.EndBet();
    }, this);
    var action = cc.sequence(rotation, finished);
    this.zhenNode.runAction(action);
  },
  ShowResult: function ShowResult() {
    if (this.IsWin) {
      var param = {};
      var getMoney = cc.Mgr.global.BetInitCost * this.rate;
      if (cc.Mgr.global.TempAdsBetBonus == TempBonus.BetBonus) {
        getMoney = Math.floor(cc.Mgr.global.BetInitCost * this.rate * 1.2);
        //cc.Mgr.global.TempAdsBetBonus = TempBonus.NULL;
      }

      cc.Mgr.UserDataMgr.Cash += getMoney;
      param.text = cc.Mgr.global.getTranslation("BetWin") + "\n奖励:" + getMoney;
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      this.tmpWinRatio = 0; //临时概率清零
    } else {
      var param = {};
      param.text = cc.Mgr.global.getTranslation("BetLose");
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      this.tmpWinRatio += 0.05;
      if (this.tmpWinRatio > 0.25) {
        this.tmpWinRatio = 0.25;
      }
    }
    cc.Mgr.global.BetInitCost = cc.Mgr.global.BetInitCost * 2;
    cc.director.GlobalEvent.emit(cc.Mgr.Event.RefreshCashAsset, {});
    this.costLbl.string = "花费金额:" + cc.Mgr.global.BetInitCost;
    this.CashLbl.string = cc.Mgr.UserDataMgr.Cash;
  },
  EndBet: function EndBet() {
    if (this.IsWin) {
      this.CoinNode.active = true;
      this.CoinEffect.play("betCoin");
      cc.Mgr.AudioMgr.playSFX("goods_4");
    } else {
      this.stateBet = false;
      cc.Mgr.AudioMgr.playSFX("lose");
      this.ShowResult();
    }
  },
  EndCoinEffect: function EndCoinEffect() {
    this.CoinNode.active = false;
    this.stateBet = false;
    this.ShowResult();
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = BetPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEJldFBhbmVsLmpzIl0sIm5hbWVzIjpbIlRlbXBCb251cyIsInJlcXVpcmUiLCJCZXRQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQXRsYXMiLCJTcHJpdGVBdGxhcyIsIkNhc2hMYmwiLCJMYWJlbCIsImNvc3RMYmwiLCJjb3N0IiwiSW50ZWdlciIsIkNvaW5Ob2RlIiwiTm9kZSIsIkNvaW5FZmZlY3QiLCJBbmltYXRpb24iLCJ6aGVuTm9kZSIsInN0YXRlQmV0IiwicmF0ZSIsIklzV2luIiwidG1wV2luUmF0aW8iLCJTaG93UGFuZWwiLCJkYXRhIiwiYWN0aXZlIiwicm90YXRpb24iLCJzdHJpbmciLCJNZ3IiLCJnbG9iYWwiLCJCZXRJbml0Q29zdCIsIlVzZXJEYXRhTWdyIiwiQ2FzaCIsIkNsaWNrQmV0IiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwicGFyYW0iLCJmb3JXaGF0IiwidGV4dCIsImdldFRyYW5zbGF0aW9uIiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIk9wZW5Db21tb25UaXAiLCJHb1RvQmV0IiwiQ2FjdWxhdGVXaW5SYXRpbyIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwicm90YXRlQW5nbGUiLCJCZXRXaW5OdWxsUmF0aW8iLCJzZCIsIkJldFdpblRocmVlUmF0aW8iLCJCZXRXaW5Gb3VyUmF0aW8iLCJfdGhpcyIsInNlbGYiLCJmbG9vciIsIngiLCJyb3RhdGVUbyIsImVhc2luZyIsImVhc2VTaW5lSW5PdXQiLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwibG9nIiwiRW5kQmV0IiwiYWN0aW9uIiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJTaG93UmVzdWx0IiwiZ2V0TW9uZXkiLCJUZW1wQWRzQmV0Qm9udXMiLCJCZXRCb251cyIsIlJlZnJlc2hDYXNoQXNzZXQiLCJwbGF5IiwiRW5kQ29pbkVmZmVjdCIsIkNsb3NlUGFuZWwiLCJub2Rl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QyxXQUFXO0lBQ3ZELElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ2tCLE1BQU0sR0FBR3hCLEVBQUUsQ0FBQ3lCLEdBQUcsQ0FBQ0csV0FBVyxDQUFDQyxJQUFJO0VBQ2pELENBQUM7RUFFRGlDLE1BQU0sRUFBQyxTQUFBQSxPQUFBLEVBQVU7SUFDYixJQUFHLElBQUksQ0FBQzVDLEtBQUssRUFDYjtNQUNDLElBQUksQ0FBQ1AsUUFBUSxDQUFDVyxNQUFNLEdBQUcsSUFBSTtNQUN4QixJQUFJLENBQUNULFVBQVUsQ0FBQzBELElBQUksQ0FBQyxTQUFTLENBQUM7TUFDL0J2RSxFQUFFLENBQUN5QixHQUFHLENBQUNNLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDLE1BRUQ7TUFDQyxJQUFJLENBQUNoQixRQUFRLEdBQUcsS0FBSztNQUNsQmhCLEVBQUUsQ0FBQ3lCLEdBQUcsQ0FBQ00sUUFBUSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO01BQy9CLElBQUksQ0FBQ2tDLFVBQVUsRUFBRTtJQUNyQjtFQUNKLENBQUM7RUFFRE0sYUFBYSxFQUFDLFNBQUFBLGNBQUEsRUFBVTtJQUN2QixJQUFJLENBQUM3RCxRQUFRLENBQUNXLE1BQU0sR0FBRyxLQUFLO0lBQzVCLElBQUksQ0FBQ04sUUFBUSxHQUFHLEtBQUs7SUFDbEIsSUFBSSxDQUFDa0QsVUFBVSxFQUFFO0VBQ3JCLENBQUM7RUFFRE8sVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQnpFLEVBQUUsQ0FBQ3lCLEdBQUcsQ0FBQ00sUUFBUSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQzBDLElBQUksQ0FBQ3BELE1BQU0sR0FBRyxLQUFLO0VBQzVCO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZxRCxNQUFNLENBQUNDLE9BQU8sR0FBRzdFLFFBQVEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUZW1wQm9udXMgPSByZXF1aXJlKFwiVGVtcEJvbnVzXCIpO1xyXG52YXIgQmV0UGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICBDYXNoTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgY29zdExibDpjYy5MYWJlbCxcclxuICAgICAgIGNvc3Q6Y2MuSW50ZWdlcixcclxuXHJcbiAgICAgICBDb2luTm9kZTpjYy5Ob2RlLFxyXG4gICAgICAgQ29pbkVmZmVjdDpjYy5BbmltYXRpb24sXHJcblxyXG4gIFx0ICAgemhlbk5vZGU6Y2MuTm9kZSxcclxuICAgICAgIHN0YXRlQmV0OmZhbHNlLFxyXG4gICAgICAgcmF0ZTowLFxyXG4gICAgICAgSXNXaW46ZmFsc2UsXHJcbiAgICAgICB0bXBXaW5SYXRpbzowLC8v5Li05pe26LWi6ZKx5qaC546HXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgXHR0aGlzLkNvaW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLnN0YXRlQmV0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50bXBXaW5SYXRpbyA9IDA7XHJcbiAgICAgICAgdGhpcy56aGVuTm9kZS5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3N0TGJsLnN0cmluZyA9IFwi6Iqx6LS56YeR6aKdOlwiK2NjLk1nci5nbG9iYWwuQmV0SW5pdENvc3Q7XHJcbiAgICAgICAgdGhpcy5DYXNoTGJsLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoO1xyXG4gICAgfSxcclxuXHJcbiAgICBDbGlja0JldDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZUJldCA9PSB0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggPCBjYy5NZ3IuZ2xvYmFsLkJldEluaXRDb3N0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIHBhcmFtLmZvcldoYXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYXJhbS50ZXh0ID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcIk1vbmV5Tm90RW5vdWdoXCIpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuQ29tbW9uVGlwLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZUJldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Hb1RvQmV0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIENhY3VsYXRlV2luUmF0aW86ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5Jc1dpbiA9IHRydWU7XHJcbiAgICAgICAgKHRoaXMuemhlbk5vZGUucm90YXRpb24gLyA2MCkgJSA2O1xyXG4gICAgICAgIHZhciByb3RhdGVBbmdsZSA9IDM2MCAqIDY7XHJcbiAgICAgICAgaWYoc2VlZCA8IGNjLk1nci5nbG9iYWwuQmV0V2luTnVsbFJhdGlvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jc1dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJhdGUgPSAwO1xyXG4gICAgICAgICAgICB2YXIgc2QgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBpZihzZCA8IDAuMzMpXHJcbiAgICAgICAgICAgICAgICByb3RhdGVBbmdsZSArPSAwO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHNkIDwgMC42NilcclxuICAgICAgICAgICAgICAgIHJvdGF0ZUFuZ2xlICs9IDIgKiA2MDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcm90YXRlQW5nbGUgKz0gNCAqIDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNlZWQgPCBjYy5NZ3IuZ2xvYmFsLkJldFdpblRocmVlUmF0aW8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJhdGUgPSAzO1xyXG4gICAgICAgICAgICByb3RhdGVBbmdsZSArPSAxICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2VlZCA8IGNjLk1nci5nbG9iYWwuQmV0V2luRm91clJhdGlvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yYXRlID0gNDtcclxuICAgICAgICAgICAgcm90YXRlQW5nbGUgKz0gMyAqIDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJhdGUgPSA1O1xyXG4gICAgICAgICAgICByb3RhdGVBbmdsZSArPSA1ICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3RhdGVBbmdsZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8wIDIgNCDkvY3nva7mmK8g6LCi6LCi5oOg6aG+XHJcbiAgICAvLzEgMyA1IOaYr3dpblxyXG4gICAgR29Ub0JldDpmdW5jdGlvbigpe1xyXG4gICAgXHR2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBcdHZhciBzZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG5cclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCAtPSBjYy5NZ3IuZ2xvYmFsLkJldEluaXRDb3N0O1xyXG5cclxuICAgIFx0dmFyIHggPSB0aGlzLkNhY3VsYXRlV2luUmF0aW8oKTtcclxuICAgIFx0dmFyIHJvdGF0aW9uID0gY2Mucm90YXRlVG8oMywgeCkuZWFzaW5nKGNjLmVhc2VTaW5lSW5PdXQoKSk7XHJcbiAgICBcdHZhciBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICBcdFx0Y2MubG9nKFwi6L+Z5bCx5piv57uT5bGAPT09PT09PT09PT09PT09PVwiICsgdGhpcy56aGVuTm9kZS5yb3RhdGlvbik7XHJcbiAgICBcdFx0c2VsZi5FbmRCZXQoKTtcclxuICAgIFx0fSx0aGlzKTtcclxuXHJcbiAgICBcdHZhciBhY3Rpb24gPSBjYy5zZXF1ZW5jZShyb3RhdGlvbiwgZmluaXNoZWQpO1xyXG4gICAgXHR0aGlzLnpoZW5Ob2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UmVzdWx0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc1dpbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgZ2V0TW9uZXkgPSAoY2MuTWdyLmdsb2JhbC5CZXRJbml0Q29zdCAqIHRoaXMucmF0ZSk7IFxyXG4gICAgICAgICAgICBpZihjYy5NZ3IuZ2xvYmFsLlRlbXBBZHNCZXRCb251cyA9PSBUZW1wQm9udXMuQmV0Qm9udXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldE1vbmV5ID0gTWF0aC5mbG9vcihjYy5NZ3IuZ2xvYmFsLkJldEluaXRDb3N0ICogdGhpcy5yYXRlICogMS4yKTtcclxuICAgICAgICAgICAgICAgIC8vY2MuTWdyLmdsb2JhbC5UZW1wQWRzQmV0Qm9udXMgPSBUZW1wQm9udXMuTlVMTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCArPSBnZXRNb25leTtcclxuICAgICAgICAgICAgcGFyYW0udGV4dCA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJCZXRXaW5cIikrIFwiXFxu5aWW5YqxOlwiICsgZ2V0TW9uZXk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuICAgICAgICAgICAgdGhpcy50bXBXaW5SYXRpbyA9IDA7Ly/kuLTml7bmpoLnjofmuIXpm7ZcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIHBhcmFtLnRleHQgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiQmV0TG9zZVwiKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vblRpcCwgcGFyYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnRtcFdpblJhdGlvICs9IDAuMDU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudG1wV2luUmF0aW8gPiAwLjI1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRtcFdpblJhdGlvID0gMC4yNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5NZ3IuZ2xvYmFsLkJldEluaXRDb3N0ID0gY2MuTWdyLmdsb2JhbC5CZXRJbml0Q29zdCAqIDI7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuUmVmcmVzaENhc2hBc3NldCwge30pO1xyXG4gICAgICAgIHRoaXMuY29zdExibC5zdHJpbmcgPSBcIuiKsei0uemHkeminTpcIitjYy5NZ3IuZ2xvYmFsLkJldEluaXRDb3N0O1xyXG4gICAgICAgIHRoaXMuQ2FzaExibC5zdHJpbmcgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaDtcclxuICAgIH0sXHJcblxyXG4gICAgRW5kQmV0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc1dpbilcclxuICAgICAgICB7XHJcbiAgICAgICAgXHR0aGlzLkNvaW5Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ29pbkVmZmVjdC5wbGF5KFwiYmV0Q29pblwiKTtcclxuICAgICAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJnb29kc180XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgIFx0dGhpcy5zdGF0ZUJldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImxvc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuU2hvd1Jlc3VsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgRW5kQ29pbkVmZmVjdDpmdW5jdGlvbigpe1xyXG4gICAgXHR0aGlzLkNvaW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLnN0YXRlQmV0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TaG93UmVzdWx0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sIFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBCZXRQYW5lbDtcclxuIl19