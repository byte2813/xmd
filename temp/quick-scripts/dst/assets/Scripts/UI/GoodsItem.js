
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GoodsItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a11a6P8iFNOZlvuPpRuIxV', 'GoodsItem');
// Scripts/UI/GoodsItem.js

"use strict";

var Event = require("Event");
var UserState = require("UserState");
var GoodsItem = cc.Class({
  "extends": cc.Component,
  properties: {
    //UI
    Atlas: cc.SpriteAtlas,
    IconSp: cc.Sprite,
    NameLbl: cc.Sprite,
    PriceLbl: cc.Label,
    State: 1,
    //状态
    //Data
    Id: cc.Integer,
    price: cc.Integer,
    Data: null
  },
  init: function init(data) {
    this.Data = data;
    this.Id = data.Id;
    this.IconSp.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    this.NameLbl.spriteFrame = this.Atlas.getSpriteFrame(data.name);
    this.priceId = 0; //所在的价格区间
    this.refreshPrice();
  },
  refreshLowPrice: function refreshLowPrice() {
    var priceList = this.Data.priceList;
    var price = priceList[0].lowprice;
    this.priceId = 0;
    var d = Math.random();
    price = priceList[0].lowprice + d * (priceList[0].highprice - priceList[0].lowprice);
    this.price = Math.floor(price);
    this.Data.price = this.price;
    cc.Mgr.UserDataMgr.RefreshGoodsMarKetPrice(this.Id, this.price);
    this.PriceLbl.string = this.price.toString();
    var param = {};
    this.State = 0;
    param.State = 0; //-2表示暴跌 -1表示跌了  0 表示稳定  1有所增长 2表示暴涨
    param.Id = this.Id;
    param.icon = this.Data.icon;
    param.name = this.Data.name;
    param.price = this.price;
    return param;
  },
  refreshMidPrice: function refreshMidPrice() {
    var priceList = this.Data.priceList;
    var price = priceList[0].lowprice;
    this.priceId = 1;
    var d = Math.random();
    price = priceList[1].lowprice + d * (priceList[1].highprice - priceList[1].lowprice);
    this.price = Math.floor(price);
    this.Data.price = this.price;
    cc.Mgr.UserDataMgr.RefreshGoodsMarKetPrice(this.Id, this.price);
    this.PriceLbl.string = this.price.toString();
    var param = {};
    this.State = 1;
    param.State = 1; //-2表示暴跌 -1表示跌了  0 表示稳定  1有所增长 2表示暴涨
    param.Id = this.Id;
    param.icon = this.Data.icon;
    param.name = this.Data.name;
    param.price = this.price;
    return param;
  },
  refreshUpPrice: function refreshUpPrice() {
    var priceList = this.Data.priceList;
    var price = priceList[0].lowprice;
    /*
    var seed = 0.99999;
    if(seed < priceList[0].probability)
    {
        change = 0; //-this.priceId;
        this.priceId = 0;
        var d = Math.random();
        price = priceList[0].lowprice + d*(priceList[0].highprice - priceList[0].lowprice);
    }
    else if(seed <= priceList[0].probability + priceList[1].probability)
    {
        change = 1; //-this.priceId;
        this.priceId = 1;
        var d = Math.random();
        price = priceList[1].lowprice + d*(priceList[1].highprice - priceList[1].lowprice);
    }
    else
    {
        change = 2;//-this.priceId;
        this.priceId = 2;
        var d = Math.random();
        price = priceList[2].lowprice + (priceList[2].highprice - priceList[2].lowprice);
    }
    */
    this.priceId = 2;
    var d = Math.random();
    price = priceList[2].lowprice + d * (priceList[2].highprice - priceList[2].lowprice);
    this.State = 2;
    this.price = Math.floor(price);
    this.Data.price = this.price;
    cc.Mgr.UserDataMgr.RefreshGoodsMarKetPrice(this.Id, this.price);
    this.PriceLbl.string = this.price.toString();
    var param = {};
    param.State = 2; //-2表示暴跌 -1表示跌了  0 表示稳定  1有所增长 2表示暴涨
    param.Id = this.Id;
    param.icon = this.Data.icon;
    param.name = this.Data.name;
    param.price = this.price;
    return param;
  },
  //刷新价格信息
  refreshPrice: function refreshPrice() {
    var priceList = this.Data.priceList;
    var price = priceList[0].lowprice;
    var change = 0;
    var seed = Math.random();
    if (seed < priceList[0].probability) {
      change = 0; //-this.priceId;
      this.priceId = 0;
      var d = Math.random();
      price = priceList[0].lowprice + d * (priceList[0].highprice - priceList[0].lowprice);
    } else if (seed <= priceList[0].probability + priceList[1].probability) {
      change = 1; //-this.priceId;
      this.priceId = 1;
      var d = Math.random();
      price = priceList[1].lowprice + d * (priceList[1].highprice - priceList[1].lowprice);
    } else {
      change = 2; //-this.priceId;
      this.priceId = 2;
      var d = Math.random();
      price = priceList[2].lowprice + d * (priceList[2].highprice - priceList[2].lowprice);
    }
    this.State = change;
    this.price = Math.floor(price);
    this.Data.price = this.price;
    cc.Mgr.UserDataMgr.RefreshGoodsMarKetPrice(this.Id, this.price);
    this.PriceLbl.string = this.price.toString();
    var param = {};
    param.State = change; //-2表示暴跌 -1表示跌了  0 表示稳定  1有所增长 2表示暴涨
    param.Id = this.Id;
    param.icon = this.Data.icon;
    param.name = this.Data.name;
    param.price = this.price;
    return param;
  },
  OpenBuyTipPanel: function OpenBuyTipPanel() {
    cc.Mgr.AudioMgr.playSFX("goods_" + this.Id);
    if (cc.Mgr.UserDataMgr.userState == UserState.NotOK) {
      var param = {};
      param.text = "您还处在恢复阶段，目前不能交易";
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      return;
    }
    //cc.log("打开购买窗口 = " + this.Data.name);
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenBuyTip, this.Data);
  }
});
module.exports = GoodsItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdvb2RzSXRlbS5qcyJdLCJuYW1lcyI6WyJFdmVudCIsInJlcXVpcmUiLCJVc2VyU3RhdGUiLCJHb29kc0l0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJJY29uU3AiLCJTcHJpdGUiLCJOYW1lTGJsIiwiUHJpY2VMYmwiLCJMYWJlbCIsIlN0YXRlIiwiSWQiLCJJbnRlZ2VyIiwicHJpY2UiLCJEYXRhIiwiaW5pdCIsImRhdGEiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiaWNvbiIsIm5hbWUiLCJwcmljZUlkIiwicmVmcmVzaFByaWNlIiwicmVmcmVzaExvd1ByaWNlIiwicHJpY2VMaXN0IiwibG93cHJpY2UiLCJkIiwiTWF0aCIsInJhbmRvbSIsImhpZ2hwcmljZSIsImZsb29yIiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJSZWZyZXNoR29vZHNNYXJLZXRQcmljZSIsInN0cmluZyIsInRvU3RyaW5nIiwicGFyYW0iLCJyZWZyZXNoTWlkUHJpY2UiLCJyZWZyZXNoVXBQcmljZSIsImNoYW5nZSIsInNlZWQiLCJwcm9iYWJpbGl0eSIsIk9wZW5CdXlUaXBQYW5lbCIsIkF1ZGlvTWdyIiwicGxheVNGWCIsInVzZXJTdGF0ZSIsIk5vdE9LIiwidGV4dCIsImRpcmVjdG9yIiwiR2xvYmFsRXZlbnQiLCJlbWl0IiwiT3BlbkNvbW1vblRpcCIsIk9wZW5CdXlUaXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM1QixJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxXQUFXO0lBQ3BCQyxNQUFNLEVBQUNOLEVBQUUsQ0FBQ08sTUFBTTtJQUNoQkMsT0FBTyxFQUFDUixFQUFFLENBQUNPLE1BQU07SUFDakJFLFFBQVEsRUFBQ1QsRUFBRSxDQUFDVSxLQUFLO0lBQ2pCQyxLQUFLLEVBQUMsQ0FBQztJQUFFO0lBQ1Q7SUFDQUMsRUFBRSxFQUFDWixFQUFFLENBQUNhLE9BQU87SUFDYkMsS0FBSyxFQUFDZCxFQUFFLENBQUNhLE9BQU87SUFDaEJFLElBQUksRUFBQztFQUNULENBQUM7RUFFREMsSUFBSSxFQUFDLFNBQUFBLEtBQVVDLElBQUksRUFBRTtJQUNqQixJQUFJLENBQUNGLElBQUksR0FBR0UsSUFBSTtJQUNoQixJQUFJLENBQUNMLEVBQUUsR0FBR0ssSUFBSSxDQUFDTCxFQUFFO0lBQ2pCLElBQUksQ0FBQ04sTUFBTSxDQUFDWSxXQUFXLEdBQUcsSUFBSSxDQUFDZCxLQUFLLENBQUNlLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUM7SUFDOUQsSUFBSSxDQUFDWixPQUFPLENBQUNVLFdBQVcsR0FBRyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsY0FBYyxDQUFDRixJQUFJLENBQUNJLElBQUksQ0FBQztJQUMvRCxJQUFJLENBQUNDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFlBQVksRUFBRTtFQUN2QixDQUFDO0VBRURDLGVBQWUsRUFBQyxTQUFBQSxnQkFBQSxFQUFVO0lBQ3RCLElBQUlDLFNBQVMsR0FBRyxJQUFJLENBQUNWLElBQUksQ0FBQ1UsU0FBUztJQUNuQyxJQUFJWCxLQUFLLEdBQUdXLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUTtJQUNqQyxJQUFJLENBQUNKLE9BQU8sR0FBRyxDQUFDO0lBQ2hCLElBQUlLLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7SUFDckJmLEtBQUssR0FBR1csU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUdDLENBQUMsSUFBRUYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxTQUFTLEdBQUdMLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ2xGLElBQUksQ0FBQ1osS0FBSyxHQUFHYyxJQUFJLENBQUNHLEtBQUssQ0FBQ2pCLEtBQUssQ0FBQztJQUM5QixJQUFJLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUM1QmQsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLHVCQUF1QixDQUFDLElBQUksQ0FBQ3RCLEVBQUUsRUFBRSxJQUFJLENBQUNFLEtBQUssQ0FBQztJQUMvRCxJQUFJLENBQUNMLFFBQVEsQ0FBQzBCLE1BQU0sR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixRQUFRLEVBQUU7SUFDNUMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQzFCLEtBQUssR0FBRyxDQUFDO0lBQ2QwQixLQUFLLENBQUMxQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakIwQixLQUFLLENBQUN6QixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCeUIsS0FBSyxDQUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQ0wsSUFBSSxDQUFDSyxJQUFJO0lBQzNCaUIsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxJQUFJO0lBQzNCZ0IsS0FBSyxDQUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUN4QixPQUFPdUIsS0FBSztFQUNoQixDQUFDO0VBRURDLGVBQWUsRUFBQyxTQUFBQSxnQkFBQSxFQUFVO0lBQ3RCLElBQUliLFNBQVMsR0FBRyxJQUFJLENBQUNWLElBQUksQ0FBQ1UsU0FBUztJQUNuQyxJQUFJWCxLQUFLLEdBQUdXLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUTtJQUNqQyxJQUFJLENBQUNKLE9BQU8sR0FBRyxDQUFDO0lBQ2hCLElBQUlLLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7SUFDckJmLEtBQUssR0FBR1csU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUdDLENBQUMsSUFBRUYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxTQUFTLEdBQUdMLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ2xGLElBQUksQ0FBQ1osS0FBSyxHQUFHYyxJQUFJLENBQUNHLEtBQUssQ0FBQ2pCLEtBQUssQ0FBQztJQUM5QixJQUFJLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUM1QmQsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLHVCQUF1QixDQUFDLElBQUksQ0FBQ3RCLEVBQUUsRUFBRSxJQUFJLENBQUNFLEtBQUssQ0FBQztJQUMvRCxJQUFJLENBQUNMLFFBQVEsQ0FBQzBCLE1BQU0sR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixRQUFRLEVBQUU7SUFDNUMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQzFCLEtBQUssR0FBRyxDQUFDO0lBQ2QwQixLQUFLLENBQUMxQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakIwQixLQUFLLENBQUN6QixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCeUIsS0FBSyxDQUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQ0wsSUFBSSxDQUFDSyxJQUFJO0lBQzNCaUIsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxJQUFJO0lBQzNCZ0IsS0FBSyxDQUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUN4QixPQUFPdUIsS0FBSztFQUNoQixDQUFDO0VBRURFLGNBQWMsRUFBQyxTQUFBQSxlQUFBLEVBQVU7SUFDckIsSUFBSWQsU0FBUyxHQUFHLElBQUksQ0FBQ1YsSUFBSSxDQUFDVSxTQUFTO0lBQ25DLElBQUlYLEtBQUssR0FBR1csU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRO0lBQ2pDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0osT0FBTyxHQUFHLENBQUM7SUFDaEIsSUFBSUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtJQUNyQmYsS0FBSyxHQUFHVyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsR0FBR0MsQ0FBQyxJQUFFRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNLLFNBQVMsR0FBR0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUM7SUFDbEYsSUFBSSxDQUFDZixLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0csS0FBSyxHQUFHYyxJQUFJLENBQUNHLEtBQUssQ0FBQ2pCLEtBQUssQ0FBQztJQUM5QixJQUFJLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUM1QmQsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDQyxXQUFXLENBQUNDLHVCQUF1QixDQUFDLElBQUksQ0FBQ3RCLEVBQUUsRUFBRSxJQUFJLENBQUNFLEtBQUssQ0FBQztJQUMvRCxJQUFJLENBQUNMLFFBQVEsQ0FBQzBCLE1BQU0sR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixRQUFRLEVBQUU7SUFDNUMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUMxQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakIwQixLQUFLLENBQUN6QixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCeUIsS0FBSyxDQUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQ0wsSUFBSSxDQUFDSyxJQUFJO0lBQzNCaUIsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxJQUFJO0lBQzNCZ0IsS0FBSyxDQUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUN4QixPQUFPdUIsS0FBSztFQUNoQixDQUFDO0VBRUQ7RUFDQWQsWUFBWSxFQUFDLFNBQUFBLGFBQUEsRUFBVTtJQUNuQixJQUFJRSxTQUFTLEdBQUcsSUFBSSxDQUFDVixJQUFJLENBQUNVLFNBQVM7SUFDbkMsSUFBSVgsS0FBSyxHQUFHVyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVE7SUFDakMsSUFBSWMsTUFBTSxHQUFHLENBQUM7SUFFZCxJQUFJQyxJQUFJLEdBQUdiLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ3hCLElBQUdZLElBQUksR0FBR2hCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2lCLFdBQVcsRUFDbEM7TUFDSUYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ1osSUFBSSxDQUFDbEIsT0FBTyxHQUFHLENBQUM7TUFDaEIsSUFBSUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNyQmYsS0FBSyxHQUFHVyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsR0FBR0MsQ0FBQyxJQUFFRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNLLFNBQVMsR0FBR0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUM7SUFDdEYsQ0FBQyxNQUNJLElBQUdlLElBQUksSUFBSWhCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2lCLFdBQVcsR0FBR2pCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2lCLFdBQVcsRUFDbkU7TUFDSUYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ1osSUFBSSxDQUFDbEIsT0FBTyxHQUFHLENBQUM7TUFDaEIsSUFBSUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNyQmYsS0FBSyxHQUFHVyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsR0FBR0MsQ0FBQyxJQUFFRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNLLFNBQVMsR0FBR0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUM7SUFDdEYsQ0FBQyxNQUVEO01BQ0ljLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDWCxJQUFJLENBQUNsQixPQUFPLEdBQUcsQ0FBQztNQUNoQixJQUFJSyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ3JCZixLQUFLLEdBQUdXLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxHQUFHQyxDQUFDLElBQUVGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssU0FBUyxHQUFHTCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQztJQUN0RjtJQUNBLElBQUksQ0FBQ2YsS0FBSyxHQUFHNkIsTUFBTTtJQUNuQixJQUFJLENBQUMxQixLQUFLLEdBQUdjLElBQUksQ0FBQ0csS0FBSyxDQUFDakIsS0FBSyxDQUFDO0lBQzlCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO0lBQzVCZCxFQUFFLENBQUNnQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0MsdUJBQXVCLENBQUMsSUFBSSxDQUFDdEIsRUFBRSxFQUFFLElBQUksQ0FBQ0UsS0FBSyxDQUFDO0lBQy9ELElBQUksQ0FBQ0wsUUFBUSxDQUFDMEIsTUFBTSxHQUFHLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ3NCLFFBQVEsRUFBRTtJQUM1QyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2RBLEtBQUssQ0FBQzFCLEtBQUssR0FBRzZCLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCSCxLQUFLLENBQUN6QixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQ2xCeUIsS0FBSyxDQUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQ0wsSUFBSSxDQUFDSyxJQUFJO0lBQzNCaUIsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxJQUFJO0lBQzNCZ0IsS0FBSyxDQUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUN4QixPQUFPdUIsS0FBSztFQUNoQixDQUFDO0VBRURNLGVBQWUsRUFBQyxTQUFBQSxnQkFBQSxFQUFVO0lBQ3RCM0MsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDWSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDakMsRUFBRSxDQUFDO0lBQzNDLElBQUdaLEVBQUUsQ0FBQ2dDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDYSxTQUFTLElBQUloRCxTQUFTLENBQUNpRCxLQUFLLEVBQ2xEO01BQ0ksSUFBSVYsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUNkQSxLQUFLLENBQUNXLElBQUksR0FBRyxpQkFBaUI7TUFDOUJoRCxFQUFFLENBQUNpRCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDbkQsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDcEMsS0FBSyxDQUFDd0QsYUFBYSxFQUFFZixLQUFLLENBQUM7TUFDL0Q7SUFDSjtJQUNBO0lBQ0FyQyxFQUFFLENBQUNpRCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDbkQsRUFBRSxDQUFDZ0MsR0FBRyxDQUFDcEMsS0FBSyxDQUFDeUQsVUFBVSxFQUFFLElBQUksQ0FBQ3RDLElBQUksQ0FBQztFQUNwRTtBQUNKLENBQUMsQ0FBQztBQUNGdUMsTUFBTSxDQUFDQyxPQUFPLEdBQUd4RCxTQUFTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRXZlbnQgPSByZXF1aXJlKFwiRXZlbnRcIik7XHJcbnZhciBVc2VyU3RhdGUgPSByZXF1aXJlKFwiVXNlclN0YXRlXCIpO1xyXG52YXIgR29vZHNJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL1VJXHJcbiAgICAgICAgQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgSWNvblNwOmNjLlNwcml0ZSxcclxuICAgICAgICBOYW1lTGJsOmNjLlNwcml0ZSxcclxuICAgICAgICBQcmljZUxibDpjYy5MYWJlbCxcclxuICAgICAgICBTdGF0ZToxLCAvL+eKtuaAgVxyXG4gICAgICAgIC8vRGF0YVxyXG4gICAgICAgIElkOmNjLkludGVnZXIsXHJcbiAgICAgICAgcHJpY2U6Y2MuSW50ZWdlcixcclxuICAgICAgICBEYXRhOm51bGwsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBpbml0OmZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLklkID0gZGF0YS5JZDtcclxuICAgICAgICB0aGlzLkljb25TcC5zcHJpdGVGcmFtZSA9IHRoaXMuQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZGF0YS5pY29uKTtcclxuICAgICAgICB0aGlzLk5hbWVMYmwuc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEubmFtZSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUlkID0gMDsgLy/miYDlnKjnmoTku7fmoLzljLrpl7RcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcmljZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWZyZXNoTG93UHJpY2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcHJpY2VMaXN0ID0gdGhpcy5EYXRhLnByaWNlTGlzdDtcclxuICAgICAgICB2YXIgcHJpY2UgPSBwcmljZUxpc3RbMF0ubG93cHJpY2U7XHJcbiAgICAgICAgdGhpcy5wcmljZUlkID0gMDtcclxuICAgICAgICB2YXIgZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcHJpY2UgPSBwcmljZUxpc3RbMF0ubG93cHJpY2UgKyBkKihwcmljZUxpc3RbMF0uaGlnaHByaWNlIC0gcHJpY2VMaXN0WzBdLmxvd3ByaWNlKTtcclxuICAgICAgICB0aGlzLnByaWNlID0gTWF0aC5mbG9vcihwcmljZSk7XHJcbiAgICAgICAgdGhpcy5EYXRhLnByaWNlID0gdGhpcy5wcmljZTtcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaEdvb2RzTWFyS2V0UHJpY2UodGhpcy5JZCwgdGhpcy5wcmljZSk7XHJcbiAgICAgICAgdGhpcy5QcmljZUxibC5zdHJpbmcgPSB0aGlzLnByaWNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IDA7XHJcbiAgICAgICAgcGFyYW0uU3RhdGUgPSAwOyAvLy0y6KGo56S65pq06LeMIC0x6KGo56S66LeM5LqGICAwIOihqOekuueos+WumiAgMeacieaJgOWinumVvyAy6KGo56S65pq05raoXHJcbiAgICAgICAgcGFyYW0uSWQgPSB0aGlzLklkO1xyXG4gICAgICAgIHBhcmFtLmljb24gPSB0aGlzLkRhdGEuaWNvbjtcclxuICAgICAgICBwYXJhbS5uYW1lID0gdGhpcy5EYXRhLm5hbWU7XHJcbiAgICAgICAgcGFyYW0ucHJpY2UgPSB0aGlzLnByaWNlO1xyXG4gICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVmcmVzaE1pZFByaWNlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHByaWNlTGlzdCA9IHRoaXMuRGF0YS5wcmljZUxpc3Q7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcHJpY2VMaXN0WzBdLmxvd3ByaWNlO1xyXG4gICAgICAgIHRoaXMucHJpY2VJZCA9IDE7XHJcbiAgICAgICAgdmFyIGQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHByaWNlID0gcHJpY2VMaXN0WzFdLmxvd3ByaWNlICsgZCoocHJpY2VMaXN0WzFdLmhpZ2hwcmljZSAtIHByaWNlTGlzdFsxXS5sb3dwcmljZSk7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IE1hdGguZmxvb3IocHJpY2UpO1xyXG4gICAgICAgIHRoaXMuRGF0YS5wcmljZSA9IHRoaXMucHJpY2U7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hHb29kc01hcktldFByaWNlKHRoaXMuSWQsIHRoaXMucHJpY2UpO1xyXG4gICAgICAgIHRoaXMuUHJpY2VMYmwuc3RyaW5nID0gdGhpcy5wcmljZS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHRoaXMuU3RhdGUgPSAxO1xyXG4gICAgICAgIHBhcmFtLlN0YXRlID0gMTsgLy8tMuihqOekuuaatOi3jCAtMeihqOekuui3jOS6hiAgMCDooajnpLrnqLPlrpogIDHmnInmiYDlop7plb8gMuihqOekuuaatOa2qFxyXG4gICAgICAgIHBhcmFtLklkID0gdGhpcy5JZDtcclxuICAgICAgICBwYXJhbS5pY29uID0gdGhpcy5EYXRhLmljb247XHJcbiAgICAgICAgcGFyYW0ubmFtZSA9IHRoaXMuRGF0YS5uYW1lO1xyXG4gICAgICAgIHBhcmFtLnByaWNlID0gdGhpcy5wcmljZTtcclxuICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZnJlc2hVcFByaWNlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHByaWNlTGlzdCA9IHRoaXMuRGF0YS5wcmljZUxpc3Q7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcHJpY2VMaXN0WzBdLmxvd3ByaWNlO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIHNlZWQgPSAwLjk5OTk5O1xyXG4gICAgICAgIGlmKHNlZWQgPCBwcmljZUxpc3RbMF0ucHJvYmFiaWxpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSAwOyAvLy10aGlzLnByaWNlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VJZCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgcHJpY2UgPSBwcmljZUxpc3RbMF0ubG93cHJpY2UgKyBkKihwcmljZUxpc3RbMF0uaGlnaHByaWNlIC0gcHJpY2VMaXN0WzBdLmxvd3ByaWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihzZWVkIDw9IHByaWNlTGlzdFswXS5wcm9iYWJpbGl0eSArIHByaWNlTGlzdFsxXS5wcm9iYWJpbGl0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IDE7IC8vLXRoaXMucHJpY2VJZDtcclxuICAgICAgICAgICAgdGhpcy5wcmljZUlkID0gMTtcclxuICAgICAgICAgICAgdmFyIGQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlTGlzdFsxXS5sb3dwcmljZSArIGQqKHByaWNlTGlzdFsxXS5oaWdocHJpY2UgLSBwcmljZUxpc3RbMV0ubG93cHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSAyOy8vLXRoaXMucHJpY2VJZDtcclxuICAgICAgICAgICAgdGhpcy5wcmljZUlkID0gMjtcclxuICAgICAgICAgICAgdmFyIGQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlTGlzdFsyXS5sb3dwcmljZSArIChwcmljZUxpc3RbMl0uaGlnaHByaWNlIC0gcHJpY2VMaXN0WzJdLmxvd3ByaWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByaWNlSWQgPSAyO1xyXG4gICAgICAgIHZhciBkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBwcmljZSA9IHByaWNlTGlzdFsyXS5sb3dwcmljZSArIGQqKHByaWNlTGlzdFsyXS5oaWdocHJpY2UgLSBwcmljZUxpc3RbMl0ubG93cHJpY2UpO1xyXG4gICAgICAgIHRoaXMuU3RhdGUgPSAyO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBNYXRoLmZsb29yKHByaWNlKTtcclxuICAgICAgICB0aGlzLkRhdGEucHJpY2UgPSB0aGlzLnByaWNlO1xyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoR29vZHNNYXJLZXRQcmljZSh0aGlzLklkLCB0aGlzLnByaWNlKTtcclxuICAgICAgICB0aGlzLlByaWNlTGJsLnN0cmluZyA9IHRoaXMucHJpY2UudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5TdGF0ZSA9IDI7IC8vLTLooajnpLrmmrTot4wgLTHooajnpLrot4zkuoYgIDAg6KGo56S656iz5a6aICAx5pyJ5omA5aKe6ZW/IDLooajnpLrmmrTmtqhcclxuICAgICAgICBwYXJhbS5JZCA9IHRoaXMuSWQ7XHJcbiAgICAgICAgcGFyYW0uaWNvbiA9IHRoaXMuRGF0YS5pY29uO1xyXG4gICAgICAgIHBhcmFtLm5hbWUgPSB0aGlzLkRhdGEubmFtZTtcclxuICAgICAgICBwYXJhbS5wcmljZSA9IHRoaXMucHJpY2U7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtOyBcclxuICAgIH0sXHJcblxyXG4gICAgLy/liLfmlrDku7fmoLzkv6Hmga9cclxuICAgIHJlZnJlc2hQcmljZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwcmljZUxpc3QgPSB0aGlzLkRhdGEucHJpY2VMaXN0O1xyXG4gICAgICAgIHZhciBwcmljZSA9IHByaWNlTGlzdFswXS5sb3dwcmljZTtcclxuICAgICAgICB2YXIgY2hhbmdlID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHNlZWQgPCBwcmljZUxpc3RbMF0ucHJvYmFiaWxpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSAwOyAvLy10aGlzLnByaWNlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VJZCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgcHJpY2UgPSBwcmljZUxpc3RbMF0ubG93cHJpY2UgKyBkKihwcmljZUxpc3RbMF0uaGlnaHByaWNlIC0gcHJpY2VMaXN0WzBdLmxvd3ByaWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihzZWVkIDw9IHByaWNlTGlzdFswXS5wcm9iYWJpbGl0eSArIHByaWNlTGlzdFsxXS5wcm9iYWJpbGl0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IDE7IC8vLXRoaXMucHJpY2VJZDtcclxuICAgICAgICAgICAgdGhpcy5wcmljZUlkID0gMTtcclxuICAgICAgICAgICAgdmFyIGQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlTGlzdFsxXS5sb3dwcmljZSArIGQqKHByaWNlTGlzdFsxXS5oaWdocHJpY2UgLSBwcmljZUxpc3RbMV0ubG93cHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSAyOy8vLXRoaXMucHJpY2VJZDtcclxuICAgICAgICAgICAgdGhpcy5wcmljZUlkID0gMjtcclxuICAgICAgICAgICAgdmFyIGQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlTGlzdFsyXS5sb3dwcmljZSArIGQqKHByaWNlTGlzdFsyXS5oaWdocHJpY2UgLSBwcmljZUxpc3RbMl0ubG93cHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlN0YXRlID0gY2hhbmdlO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBNYXRoLmZsb29yKHByaWNlKTtcclxuICAgICAgICB0aGlzLkRhdGEucHJpY2UgPSB0aGlzLnByaWNlO1xyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoR29vZHNNYXJLZXRQcmljZSh0aGlzLklkLCB0aGlzLnByaWNlKTtcclxuICAgICAgICB0aGlzLlByaWNlTGJsLnN0cmluZyA9IHRoaXMucHJpY2UudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5TdGF0ZSA9IGNoYW5nZTsgLy8tMuihqOekuuaatOi3jCAtMeihqOekuui3jOS6hiAgMCDooajnpLrnqLPlrpogIDHmnInmiYDlop7plb8gMuihqOekuuaatOa2qFxyXG4gICAgICAgIHBhcmFtLklkID0gdGhpcy5JZDtcclxuICAgICAgICBwYXJhbS5pY29uID0gdGhpcy5EYXRhLmljb247XHJcbiAgICAgICAgcGFyYW0ubmFtZSA9IHRoaXMuRGF0YS5uYW1lO1xyXG4gICAgICAgIHBhcmFtLnByaWNlID0gdGhpcy5wcmljZTtcclxuICAgICAgICByZXR1cm4gcGFyYW07IFxyXG4gICAgfSxcclxuXHJcbiAgICBPcGVuQnV5VGlwUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImdvb2RzX1wiICsgdGhpcy5JZCk7XHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLnVzZXJTdGF0ZSA9PSBVc2VyU3RhdGUuTm90T0spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICAgICAgcGFyYW0udGV4dCA9IFwi5oKo6L+Y5aSE5Zyo5oGi5aSN6Zi25q6177yM55uu5YmN5LiN6IO95Lqk5piTXCI7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NjLmxvZyhcIuaJk+W8gOi0reS5sOeql+WPoyA9IFwiICsgdGhpcy5EYXRhLm5hbWUpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5CdXlUaXAsIHRoaXMuRGF0YSk7XHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBHb29kc0l0ZW07XHJcbiJdfQ==