
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/CompanyBuyTipPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4cf1ZNYClHfZlhOyWm3IZa', 'CompanyBuyTipPanel');
// Scripts/UI/CompanyBuyTipPanel.js

"use strict";

var CompanyBuyTipPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    Atlas: cc.SpriteAtlas,
    IconSp: cc.Sprite,
    TitleName: cc.Sprite,
    BuyNumLbl: cc.Label,
    DesLbl: cc.Label,
    Slider: cc.Slider,
    InPutBox: cc.EditBox,
    Progress: cc.ProgressBar,
    BuyNum: 0,
    Data: null
  },
  ShowPanel: function ShowPanel(data) {
    this.Data = data;
    this.IconSp.spriteFrame = this.Atlas.getSpriteFrame(data.icon);
    this.TitleName.spriteFrame = this.Atlas.getSpriteFrame(data.name);
    this.BuyNum = Math.floor(cc.Mgr.UserDataMgr.Cash / (this.Data.stockPrice * 100));
    var money = Math.floor(this.BuyNum * 100 * this.Data.stockPrice);
    this.DesLbl.string = cc.Mgr.global.FormatNum(money);
    this.BuyNumLbl.string = this.BuyNum;
    this.InPutBox.string = this.BuyNum;
    this.Slider.progress = 1;
    this.Progress.progress = 1;
  },
  ClickBuyBtn: function ClickBuyBtn() {
    if (this.BuyNum <= 0) {
      cc.Mgr.AudioMgr.playSFX("click");
      return;
    }
    cc.Mgr.UserDataMgr.Cash -= Math.floor(this.Data.stockPrice * (this.BuyNum * 100));
    var param = {};
    param.Num = this.BuyNum * 100;
    param.price = this.Data.stockPrice;
    param.Id = this.Data.Id;
    var data = cc.Mgr.UserDataMgr.BuyStocks(param);
    //通知刷新现金
    cc.director.GlobalEvent.emit(cc.Mgr.Event.BuyStockSuccess, data);
    this.ClosePanel();
  },
  OnSliderChange: function OnSliderChange() {
    this.BuyNum = Math.floor(this.Slider.progress * cc.Mgr.UserDataMgr.Cash / (this.Data.stockPrice * 100));
    this.Progress.progress = this.Slider.progress;
    this.DesLbl.string = cc.Mgr.global.FormatNum(Math.floor(this.BuyNum * this.Data.stockPrice * 100));
    this.BuyNumLbl.string = this.BuyNum;
    this.InPutBox.string = this.BuyNum;
  },
  OnInputBoxEnd: function OnInputBoxEnd() {
    var MaxNum = Math.floor(cc.Mgr.UserDataMgr.Cash / (this.Data.stockPrice * 100));
    if (this.InPutBox.string != "") {
      if (Number(this.InPutBox.string) != null) {
        if (Number(this.InPutBox.string) > MaxNum) {
          this.InPutBox.string = MaxNum;
          this.BuyNum = MaxNum;
          this.Progress.progress = 1;
          this.Slider.progress = 1;
        } else {
          this.BuyNum = Number(this.InPutBox.string);
          this.Slider.progress = this.BuyNum / MaxNum;
          this.Progress.progress = this.Slider.progress;
        }
      }
    } else {
      this.InPutBox.string = "0";
      this.BuyNum = 0;
      this.Progress.progress = 0;
      this.Slider.progress = 0;
    }
    this.DesLbl.string = cc.Mgr.global.FormatNum(Math.floor(this.BuyNum * this.Data.stockPrice * 100));
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = CompanyBuyTipPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXENvbXBhbnlCdXlUaXBQYW5lbC5qcyJdLCJuYW1lcyI6WyJDb21wYW55QnV5VGlwUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJJY29uU3AiLCJTcHJpdGUiLCJUaXRsZU5hbWUiLCJCdXlOdW1MYmwiLCJMYWJlbCIsIkRlc0xibCIsIlNsaWRlciIsIkluUHV0Qm94IiwiRWRpdEJveCIsIlByb2dyZXNzIiwiUHJvZ3Jlc3NCYXIiLCJCdXlOdW0iLCJEYXRhIiwiU2hvd1BhbmVsIiwiZGF0YSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpY29uIiwibmFtZSIsIk1hdGgiLCJmbG9vciIsIk1nciIsIlVzZXJEYXRhTWdyIiwiQ2FzaCIsInN0b2NrUHJpY2UiLCJtb25leSIsInN0cmluZyIsImdsb2JhbCIsIkZvcm1hdE51bSIsInByb2dyZXNzIiwiQ2xpY2tCdXlCdG4iLCJBdWRpb01nciIsInBsYXlTRlgiLCJwYXJhbSIsIk51bSIsInByaWNlIiwiSWQiLCJCdXlTdG9ja3MiLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiQnV5U3RvY2tTdWNjZXNzIiwiQ2xvc2VQYW5lbCIsIk9uU2xpZGVyQ2hhbmdlIiwiT25JbnB1dEJveEVuZCIsIk1heE51bSIsIk51bWJlciIsIm5vZGUiLCJhY3RpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGtCQUFrQixHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUM5QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUNKLEVBQUUsQ0FBQ0ssV0FBVztJQUNwQkMsTUFBTSxFQUFDTixFQUFFLENBQUNPLE1BQU07SUFDaEJDLFNBQVMsRUFBQ1IsRUFBRSxD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LENBQUNnQixJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0VBQzVCO0FBRUosQ0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMUQsa0JBQWtCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIENvbXBhbnlCdXlUaXBQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgSWNvblNwOmNjLlNwcml0ZSxcclxuICAgICAgICBUaXRsZU5hbWU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIEJ1eU51bUxibDpjYy5MYWJlbCxcclxuICAgICAgICBEZXNMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgU2xpZGVyOmNjLlNsaWRlcixcclxuICAgICAgICBJblB1dEJveDpjYy5FZGl0Qm94LFxyXG4gICAgICAgIFByb2dyZXNzOmNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgIEJ1eU51bTowLFxyXG4gICAgICAgIERhdGE6bnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBcdHRoaXMuRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5JY29uU3Auc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEuaWNvbik7XHJcbiAgICAgICAgdGhpcy5UaXRsZU5hbWUuc3ByaXRlRnJhbWUgPSB0aGlzLkF0bGFzLmdldFNwcml0ZUZyYW1lKGRhdGEubmFtZSk7XHJcbiAgICAgICAgdGhpcy5CdXlOdW0gPSBNYXRoLmZsb29yKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoIC8gKHRoaXMuRGF0YS5zdG9ja1ByaWNlICogMTAwKSk7XHJcbiAgICAgICAgdmFyIG1vbmV5ID0gTWF0aC5mbG9vcih0aGlzLkJ1eU51bSAqIDEwMCAqIHRoaXMuRGF0YS5zdG9ja1ByaWNlKTtcclxuICAgICAgICB0aGlzLkRlc0xibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShtb25leSk7XHJcbiAgICAgICAgdGhpcy5CdXlOdW1MYmwuc3RyaW5nID0gdGhpcy5CdXlOdW07XHJcbiAgICAgICAgdGhpcy5JblB1dEJveC5zdHJpbmcgPSB0aGlzLkJ1eU51bTtcclxuICAgICAgICB0aGlzLlNsaWRlci5wcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcy5wcm9ncmVzcyA9IDE7XHJcbiAgICB9LFxyXG5cclxuICAgIENsaWNrQnV5QnRuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5CdXlOdW0gPD0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggLT0gTWF0aC5mbG9vcih0aGlzLkRhdGEuc3RvY2tQcmljZSAqICh0aGlzLkJ1eU51bSAqIDEwMCkpO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHBhcmFtLk51bSA9IHRoaXMuQnV5TnVtICogMTAwO1xyXG4gICAgICAgIHBhcmFtLnByaWNlID0gdGhpcy5EYXRhLnN0b2NrUHJpY2U7XHJcbiAgICAgICAgcGFyYW0uSWQgPSB0aGlzLkRhdGEuSWQ7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQnV5U3RvY2tzKHBhcmFtKTtcclxuICAgICAgICAvL+mAmuefpeWIt+aWsOeOsOmHkVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50LkJ1eVN0b2NrU3VjY2VzcywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5DbG9zZVBhbmVsKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIE9uU2xpZGVyQ2hhbmdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5CdXlOdW0gPSBNYXRoLmZsb29yKHRoaXMuU2xpZGVyLnByb2dyZXNzICogY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggLyAodGhpcy5EYXRhLnN0b2NrUHJpY2UgKiAxMDApKTtcclxuICAgICAgICB0aGlzLlByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5TbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5EZXNMYmwuc3RyaW5nID0gY2MuTWdyLmdsb2JhbC5Gb3JtYXROdW0oTWF0aC5mbG9vcih0aGlzLkJ1eU51bSAqIHRoaXMuRGF0YS5zdG9ja1ByaWNlICogMTAwKSk7XHJcbiAgICAgICAgdGhpcy5CdXlOdW1MYmwuc3RyaW5nID0gdGhpcy5CdXlOdW07XHJcbiAgICAgICAgdGhpcy5JblB1dEJveC5zdHJpbmcgPSB0aGlzLkJ1eU51bTtcclxuICAgIH0sXHJcblxyXG4gICAgT25JbnB1dEJveEVuZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBNYXhOdW0gPSBNYXRoLmZsb29yKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoIC8gKHRoaXMuRGF0YS5zdG9ja1ByaWNlICogMTAwKSk7XHJcbiAgICAgICAgaWYodGhpcy5JblB1dEJveC5zdHJpbmcgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKE51bWJlcih0aGlzLkluUHV0Qm94LnN0cmluZykgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRoaXMuSW5QdXRCb3guc3RyaW5nKSA+IE1heE51bSkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JblB1dEJveC5zdHJpbmcgPSBNYXhOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CdXlOdW0gPSBNYXhOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcm9ncmVzcy5wcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TbGlkZXIucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQnV5TnVtID0gTnVtYmVyKHRoaXMuSW5QdXRCb3guc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNsaWRlci5wcm9ncmVzcyA9ICB0aGlzLkJ1eU51bSAvIE1heE51bTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5TbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5JblB1dEJveC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5CdXlOdW0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlByb2dyZXNzLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TbGlkZXIucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkRlc0xibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShNYXRoLmZsb29yKHRoaXMuQnV5TnVtICogdGhpcy5EYXRhLnN0b2NrUHJpY2UgKiAxMDApKTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhbnlCdXlUaXBQYW5lbDtcclxuIl19