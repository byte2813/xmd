
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/CommonBuyPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6183kj8RFBUqr5fDHnNMDY', 'CommonBuyPanel');
// Scripts/UI/CommonBuyPanel.js

"use strict";

var ItemType = require("ItemType");
var UserState = require("UserState");
var CommonBuyPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    MainAtlas: cc.SpriteAtlas,
    Atlas: cc.SpriteAtlas,
    titleLbl: cc.Sprite,
    carhosueDes: cc.Node,
    des1: cc.Label,
    des2: cc.Label,
    des3: cc.Label,
    des4: cc.Label,
    disdesLbl: cc.Label,
    iconSp: cc.Sprite,
    nameSp: cc.Sprite,
    price: cc.Integer,
    Id: cc.Integer,
    flag: "",
    Type: {
      "default": ItemType.Car,
      type: ItemType
    }
  },
  ShowPanel: function ShowPanel(param) {
    var data = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(param.Type, param.Id);
    this.nameSp.spriteFrame = this.Atlas.getSpriteFrame(param.name);
    var price = param.price;
    if (param.flag == "Buy") {
      if (param.Type == ItemType.Car) {
        this.des4.node.active = true;
        this.des1.node.active = false;
        this.des4.string = "+" + data.addDate * 100 + "%";
        this.titleLbl.spriteFrame = this.MainAtlas.getSpriteFrame("text_buycar");
        price = param.price - Math.floor(param.price * cc.Mgr.UserDataMgr.CarBuyBonus);
      } else if (param.Type == ItemType.House) {
        this.des4.node.active = false;
        this.des1.node.active = true;
        this.des1.string = "+" + data.addHp;
        this.titleLbl.spriteFrame = this.MainAtlas.getSpriteFrame("text_buyhouse");
        price = param.price - Math.floor(param.price * cc.Mgr.UserDataMgr.HouseBuyBonuse);
      }
      this.des2.string = "+" + data.addBonus;
      this.des3.string = cc.Mgr.global.FormatNum(price);
      this.carhosueDes.active = true;
      this.disdesLbl.node.active = false;
    } else if (param.flag == "Sale") {
      if (param.Type == ItemType.Car || param.Type == ItemType.House) {
        this.titleLbl.spriteFrame = this.MainAtlas.getSpriteFrame("sale_txt");
        if (param.Type == ItemType.Car) {
          this.des4.node.active = true;
          this.des1.node.active = false;
          this.des4.string = "+" + data.addDate * 100 + "%";
        } else {
          this.des1.string = "+" + data.addHp;
          this.des4.node.active = false;
          this.des1.node.active = true;
        }
        this.des2.string = "+" + data.addBonus;
        this.des3.string = Math.floor(price / 2);
        this.carhosueDes.active = true;
        this.disdesLbl.node.active = false;
      } else if (param.Type == ItemType.Mate) {
        var name = cc.Mgr.global.getTranslation("role_" + param.Id);
        this.carhosueDes.active = false;
        this.disdesLbl.node.active = true;
        this.titleLbl.spriteFrame = this.MainAtlas.getSpriteFrame("dis_marry");
        var dd = 1 + Math.floor(Math.random() * 5);
        this.disdesLbl.string = name + "说:" + cc.Mgr.global.getTranslation("Disvorce_" + dd);
      }
    }
    this.price = price;
    this.Type = param.Type;
    this.Id = param.Id;
    this.iconSp.spriteFrame = this.Atlas.getSpriteFrame(param.icon);
    if (param.flag != null) this.flag = param.flag;else this.flag = "";
  },
  ClickBuy: function ClickBuy() {
    if (this.flag == "Buy") {
      if (cc.Mgr.UserDataMgr.Cash < this.price) {
        cc.Mgr.AudioMgr.playSFX("click");
        var param = {};
        param.forWhat = "";
        param.text = "<color=#e77122>你的钱不够啊,买不起</c>";
        cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
        return;
      }
    }
    if (this.flag != null && this.flag != "") {
      if (this.Type == ItemType.Car || this.Type == ItemType.House) {
        var par = {};
        par.Type = this.Type;
        par.addNum = 0;
        if (this.flag == "Buy") {
          var data = cc.Mgr.UserDataMgr.getDataByItemTypeAndId(this.Type, this.Id);
          //cc.log("加成属性 ====== 健康 " + data.addHp +"  名声 " + data.addBonus);
          cc.Mgr.UserDataMgr.Reputation += data.addBonus;
          cc.Mgr.UserDataMgr.HpPoint += data.addHp;
          if (cc.Mgr.UserDataMgr.HpPoint > 100) cc.Mgr.UserDataMgr.HpPoint = 100;
          if (cc.Mgr.UserDataMgr.HpPoint >= cc.Mgr.global.HealthLine) {
            cc.Mgr.UserDataMgr.userState = UserState.OK;
            cc.Mgr.UserDataMgr.RecoverYear = 0;
          }
          //cc.log("价格 === " + this.price + " 对应Id " + this.Id);
          cc.Mgr.UserDataMgr.Cash -= this.price;
          par.addNum = 1;
          if (this.Type == ItemType.Car) {
            cc.Mgr.UserDataMgr.DateSuccescRatio += data.addDate;
          }
        } else if (this.flag == "Sale") {
          par.addNum = -1;
          cc.Mgr.UserDataMgr.Cash += Math.floor(this.price / 2);
        }
        par.Id = this.Id;
        par.flag = this.flag;
        cc.Mgr.UserDataMgr.BuySaleCommonItem(par);
        cc.director.GlobalEvent.emit(cc.Mgr.Event.CommonBuySaleSuccess, par);
      } else if (this.Type == ItemType.Mate) {
        if (this.flag == "Sale") {
          if (cc.Mgr.UserDataMgr.DivorceAge == 0) {
            cc.Mgr.UserDataMgr.DivorceAge = cc.Mgr.UserDataMgr.Age;
          }
          var par = {};
          par.flag = this.flag;
          par.Disvorce = true;
          cc.Mgr.UserDataMgr.DisvorceMateById(this.Id);
          cc.director.GlobalEvent.emit(cc.Mgr.Event.CommonBuySaleSuccess, par);
        }
      }
    }
    this.ClosePanel();
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.flag = "";
    this.node.active = false;
  }
});
module.exports = CommonBuyPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXENvbW1vbkJ1eVBhbmVsLmpzIl0sIm5hbWVzIjpbIkl0ZW1UeXBlIiwicmVxdWlyZSIsIlVzZXJTdGF0ZSIsIkNvbW1vbkJ1eVBhbmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJNYWluQXRsYXMiLCJTcHJpdGVBdGxhcyIsIkF0bGFzIiwidGl0bGVMYmwiLCJTcHJpdGUiLCJjYXJob3N1ZURlcyIsIk5vZGUiLCJkZXMxIiwiTGFiZWwiLCJkZXMyIiwiZGVzMyIsImRlczQiLCJkaXNkZXNMYmwiLCJpY29uU3AiLCJuYW1lU3AiLCJwcmljZSIsIkludGVnZXIiLCJJZCIsImZsYWciLCJUeXBlIiwiQ2FyIiwidHlwZSIsIlNob3dQYW5lbCIsInBhcmFtIiwiZGF0YSIsIk1nciIsIk1hcERhdGFNZ3IiLCJnZXREYXRhQnlJdGVtVHlwZUFuZElkIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIm5hbWUiLCJub2RlIiwiYWN0aXZlIiwic3RyaW5nIiwiYWRkRGF0ZSIsIk1hdGgiLCJmbG9vciIsIlVzZXJEYXRhTWdyIiwiQ2FyQnV5Qm9udXMiLCJIb3VzZSIsImFkZEhwIiwiSG91c2VCdXlCb251c2UiLCJhZGRCb251cyIsImdsb2JhbCIsIkZvcm1hdE51bSIsIk1hdGUiLCJnZXRUcmFuc2xhdGlvbiIsImRkIiwicmFuZG9tIiwiaWNvbiIsIkNsaWNrQnV5IiwiQ2FzaCIsIkF1ZGlvTWdyIiwicGxheVNGWCIsImZvcldoYXQiLCJ0ZXh0IiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJFdmVudCIsIk9wZW5Db21tb25UaXAiLCJwYXIiLCJhZGROdW0iLCJSZXB1dGF0aW9uIiwiSHBQb2ludCIsIkhlYWx0aExpbmUiLCJ1c2VyU3RhdGUiLCJPSyIsIlJlY292ZXJZZWFyIiwiRGF0ZVN1Y2Nlc2NSYXRpbyIsIkJ1eVNhbGVDb21tb25JdGVtIiwiQ29tbW9uQnV5U2FsZVN1Y2Nlc3MiLCJEaXZvcmNlQWdlIiwiQWdlIiwiRGlzdm9yY2UiLCJEaXN2b3JjZU1hdGVCeUlkIiwiQ2xvc2VQYW5lbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBQ0osRUFBRSxDQUFDSyxXQUFXO0lBQ3hCQyxLQUFLLEVBQUNOLEVBQUUsQ0FBQ0ssV0FBVztJQUNwQkUsUUFBUSxFQUFDUCxFQUFFLENBQUNRLE1BQU07SUFDbEJDLFdBQVcsRUFBQ1QsRUFBRSxDQUFDVSxJQUFJO0lBRW5CQyxJQUFJLEVBQUNYLEVBQUUsQ0FBQ1ksS0FBSztJQUNiQyxJQUFJLEVBQUNiLEVBQUUsQ0FBQ1ksS0FBSztJQUNiRSxJQUFJLEVBQUNkLEVBQUUsQ0FBQ1ksS0FBSztJQUNiRyxJQUFJLEVBQUNmLEVBQUUsQ0FBQ1ksS0FBSztJQUViSSxTQUFTLEVBQUNoQixFQUFFLENBQUNZLEtBQUs7SUFDbEJLLE1BQU0sRUFBQ2pCLEVBQUUsQ0FBQ1EsTUFBTTtJQUNoQlUsTUFBTSxFQUFDbEIsRUFBRSxDQUFDUSxNQUFNO0lBQ2hCVyxLQUFLLEVBQUNuQixFQUFFLENBQUNvQixPQUFPO0lBQ2hCQyxFQUFFLEVBQUNyQixFQUFFLENBQUNvQixPQUFPO0lBQ2JFLElBQUksRUFBQyxFQUFFO0lBQ1BDLElBQUksRUFBQztNQUNELFdBQVEzQixRQUFRLENBQUM0QixHQUFHO01BQ3BCQyxJQUFJLEVBQUM3QjtJQUNUO0VBQ0osQ0FBQztFQUVEOEIsU0FBUyxFQUFDLFNBQUFBLFVBQVVDLEtBQUssRUFBRTtJQUN2QixJQUFJQyxJQUFJLEdBQUc1QixF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LEdBQUduRixjQUFjIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbVR5cGUgPSByZXF1aXJlKFwiSXRlbVR5cGVcIik7XHJcbnZhciBVc2VyU3RhdGUgPSByZXF1aXJlKFwiVXNlclN0YXRlXCIpO1xyXG52YXIgQ29tbW9uQnV5UGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIE1haW5BdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuICAgICAgICB0aXRsZUxibDpjYy5TcHJpdGUsXHJcbiAgICAgICAgY2FyaG9zdWVEZXM6Y2MuTm9kZSxcclxuXHJcbiAgICAgICAgZGVzMTpjYy5MYWJlbCxcclxuICAgICAgICBkZXMyOmNjLkxhYmVsLFxyXG4gICAgICAgIGRlczM6Y2MuTGFiZWwsXHJcbiAgICAgICAgZGVzNDpjYy5MYWJlbCxcclxuXHJcbiAgICAgICAgZGlzZGVzTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIGljb25TcDpjYy5TcHJpdGUsXHJcbiAgICAgICAgbmFtZVNwOmNjLlNwcml0ZSxcclxuICAgICAgICBwcmljZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIElkOmNjLkludGVnZXIsXHJcbiAgICAgICAgZmxhZzpcIlwiLFxyXG4gICAgICAgIFR5cGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Okl0ZW1UeXBlLkNhcixcclxuICAgICAgICAgICAgdHlwZTpJdGVtVHlwZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24gKHBhcmFtKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKHBhcmFtLlR5cGUsIHBhcmFtLklkKVxyXG4gICAgICAgIHRoaXMubmFtZVNwLnNwcml0ZUZyYW1lID0gdGhpcy5BdGxhcy5nZXRTcHJpdGVGcmFtZShwYXJhbS5uYW1lKVxyXG4gICAgICAgIHZhciBwcmljZSA9IHBhcmFtLnByaWNlO1xyXG4gICAgICAgIGlmKHBhcmFtLmZsYWcgPT0gXCJCdXlcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtLlR5cGUgPT0gSXRlbVR5cGUuQ2FyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlczQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXMxLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlczQuc3RyaW5nID0gXCIrXCIgKyAoZGF0YS5hZGREYXRlICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZUxibC5zcHJpdGVGcmFtZSA9IHRoaXMuTWFpbkF0bGFzLmdldFNwcml0ZUZyYW1lKFwidGV4dF9idXljYXJcIik7XHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IHBhcmFtLnByaWNlIC0gTWF0aC5mbG9vcihwYXJhbS5wcmljZSAqIGNjLk1nci5Vc2VyRGF0YU1nci5DYXJCdXlCb251cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwYXJhbS5UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlczQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzMS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlczEuc3RyaW5nID0gXCIrXCIgKyBkYXRhLmFkZEhwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZUxibC5zcHJpdGVGcmFtZSA9IHRoaXMuTWFpbkF0bGFzLmdldFNwcml0ZUZyYW1lKFwidGV4dF9idXlob3VzZVwiKTtcclxuICAgICAgICAgICAgICAgIHByaWNlPSBwYXJhbS5wcmljZSAtIE1hdGguZmxvb3IocGFyYW0ucHJpY2UgKiBjYy5NZ3IuVXNlckRhdGFNZ3IuSG91c2VCdXlCb251c2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlczIuc3RyaW5nID0gXCIrXCIgKyBkYXRhLmFkZEJvbnVzO1xyXG4gICAgICAgICAgICB0aGlzLmRlczMuc3RyaW5nID0gY2MuTWdyLmdsb2JhbC5Gb3JtYXROdW0ocHJpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmhvc3VlRGVzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzZGVzTGJsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocGFyYW0uZmxhZyA9PSBcIlNhbGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtLlR5cGUgPT0gSXRlbVR5cGUuQ2FyIHx8IHBhcmFtLlR5cGUgPT0gSXRlbVR5cGUuSG91c2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVMYmwuc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcInNhbGVfdHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbS5UeXBlID09IEl0ZW1UeXBlLkNhcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlczQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzNC5zdHJpbmcgPSBcIitcIiArIChkYXRhLmFkZERhdGUgKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXMxLnN0cmluZyA9IFwiK1wiICsgZGF0YS5hZGRIcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlczQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlczEubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzMi5zdHJpbmcgPSBcIitcIiArIGRhdGEuYWRkQm9udXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlczMuc3RyaW5nID0gTWF0aC5mbG9vcihwcmljZS8yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyaG9zdWVEZXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzZGVzTGJsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwYXJhbS5UeXBlID09IEl0ZW1UeXBlLk1hdGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcInJvbGVfXCIrcGFyYW0uSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJob3N1ZURlcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzZGVzTGJsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVMYmwuc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcImRpc19tYXJyeVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBkZCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzZGVzTGJsLnN0cmluZyA9IG5hbWUrXCLor7Q6XCIrY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcIkRpc3ZvcmNlX1wiICsgZGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gcGFyYW0uVHlwZTtcclxuICAgICAgICB0aGlzLklkID0gcGFyYW0uSWQ7XHJcbiAgICAgICAgdGhpcy5pY29uU3Auc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKHBhcmFtLmljb24pO1xyXG4gICAgICAgIGlmKHBhcmFtLmZsYWcgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5mbGFnID0gcGFyYW0uZmxhZztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9IFwiXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIENsaWNrQnV5OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5mbGFnID09IFwiQnV5XCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCA8IHRoaXMucHJpY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICAgICAgICAgIHBhcmFtLmZvcldoYXQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcGFyYW0udGV4dCA9IFwiPGNvbG9yPSNlNzcxMjI+5L2g55qE6ZKx5LiN5aSf5ZWKLOS5sOS4jei1tzwvYz5cIjtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmZsYWcgIT0gbnVsbCAmJiB0aGlzLmZsYWcgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVHlwZSA9PSBJdGVtVHlwZS5DYXIgfHwgdGhpcy5UeXBlID09IEl0ZW1UeXBlLkhvdXNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyID0ge307XHJcbiAgICAgICAgICAgICAgICBwYXIuVHlwZSA9IHRoaXMuVHlwZTtcclxuICAgICAgICAgICAgICAgIHBhci5hZGROdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5mbGFnID09IFwiQnV5XCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZCh0aGlzLlR5cGUsIHRoaXMuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwi5Yqg5oiQ5bGe5oCnID09PT09PSDlgaXlurcgXCIgKyBkYXRhLmFkZEhwICtcIiAg5ZCN5aOwIFwiICsgZGF0YS5hZGRCb251cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlcHV0YXRpb24gKz0gZGF0YS5hZGRCb251cztcclxuICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludCArPSBkYXRhLmFkZEhwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50ID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludCA9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQgPj0gY2MuTWdyLmdsb2JhbC5IZWFsdGhMaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnVzZXJTdGF0ZSA9IFVzZXJTdGF0ZS5PSztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlY292ZXJZZWFyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCLku7fmoLwgPT09IFwiICsgdGhpcy5wcmljZSArIFwiIOWvueW6lElkIFwiICsgdGhpcy5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggLT0gdGhpcy5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICBwYXIuYWRkTnVtID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5UeXBlID09IEl0ZW1UeXBlLkNhcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5EYXRlU3VjY2VzY1JhdGlvICs9IGRhdGEuYWRkRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZmxhZyA9PSBcIlNhbGVcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXIuYWRkTnVtID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggKz0gTWF0aC5mbG9vcih0aGlzLnByaWNlLzIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyLklkID0gdGhpcy5JZDtcclxuICAgICAgICAgICAgICAgIHBhci5mbGFnID0gdGhpcy5mbGFnO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkJ1eVNhbGVDb21tb25JdGVtKHBhcik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5Db21tb25CdXlTYWxlU3VjY2VzcywgcGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuVHlwZSA9PSBJdGVtVHlwZS5NYXRlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmZsYWcgPT0gXCJTYWxlXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkRpdm9yY2VBZ2UgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5EaXZvcmNlQWdlID0gY2MuTWdyLlVzZXJEYXRhTWdyLkFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhci5mbGFnID0gdGhpcy5mbGFnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhci5EaXN2b3JjZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkRpc3ZvcmNlTWF0ZUJ5SWQodGhpcy5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuQ29tbW9uQnV5U2FsZVN1Y2Nlc3MsIHBhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5DbG9zZVBhbmVsKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgQ2xvc2VQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5mbGFnID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uQnV5UGFuZWw7XHJcbiJdfQ==