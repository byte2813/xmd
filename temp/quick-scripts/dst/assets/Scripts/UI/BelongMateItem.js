
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/BelongMateItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3523bgLbAlC/K+QW+EAUwjh', 'BelongMateItem');
// Scripts/UI/BelongMateItem.js

"use strict";

var ItemType = require("ItemType");
var MateBonusType = require("MateBonusType");
var BelongMateItem = cc.Class({
  "extends": cc.Component,
  properties: {
    Atals: cc.SpriteAtlas,
    Icon: cc.Sprite,
    nameSp: cc.Sprite,
    desLbl: cc.Label,
    itemType: {
      "default": ItemType.Car,
      type: ItemType
    },
    Data: null
  },
  init: function init(data, itemType) {
    this.itemType = itemType;
    this.Data = data;
    this.Icon.spriteFrame = this.Atals.getSpriteFrame(data.icon);
    this.nameSp.spriteFrame = this.Atals.getSpriteFrame(data.name);
    var bonusList = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Mate, data.Id).bonusList;
    var str = "";
    for (var i = 0; i < bonusList.length; i++) {
      switch (bonusList[i].bonusType) {
        case MateBonusType.HP:
          if (bonusList[i].bonusNum > 0) str = str + " " + "每年健康:+" + bonusList[i].bonusNum;else str = str + " " + "每年健康:" + bonusList[i].bonusNum;
          break;
        case MateBonusType.Reputation:
          str = str + " " + "每年名声:+" + bonusList[i].bonusNum;
          break;
        case MateBonusType.Money:
          str = str + " " + "每年现金:+" + bonusList[i].bonusNum;
          break;
        case MateBonusType.WareHouseCapcity:
          str = str + " " + "仓储:+" + bonusList[i].bonusNum;
          break;
        case MateBonusType.Treat:
          str = str + " " + "治疗降费:+" + bonusList[i].bonusNum * 100 + "%";
          break;
      }
    }
    this.desLbl.string = str;
  },
  clickOpen: function clickOpen() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.icon = this.Data.icon;
    param.name = this.Data.name;
    param.Id = this.Data.Id;
    param.Type = ItemType.Mate;
    param.price = 0;
    param.flag = "Sale";
    cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonBuy, param);
  }
});
module.exports = BelongMateItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEJlbG9uZ01hdGVJdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW1UeXBlIiwicmVxdWlyZSIsIk1hdGVCb251c1R5cGUiLCJCZWxvbmdNYXRlSXRlbSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQXRhbHMiLCJTcHJpdGVBdGxhcyIsIkljb24iLCJTcHJpdGUiLCJuYW1lU3AiLCJkZXNMYmwiLCJMYWJlbCIsIml0ZW1UeXBlIiwiQ2FyIiwidHlwZSIsIkRhdGEiLCJpbml0IiwiZGF0YSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpY29uIiwibmFtZSIsImJvbnVzTGlzdCIsIk1nciIsIk1hcERhdGFNZ3IiLCJnZXREYXRhQnlJdGVtVHlwZUFuZElkIiwiTWF0ZSIsIklkIiwic3RyIiwiaSIsImxlbmd0aCIsImJvbnVzVHlwZSIsIkhQIiwiYm9udXNOdW0iLCJSZXB1dGF0aW9uIiwiTW9uZXkiLCJXYXJlSG91c2VDYXBjaXR5IiwiVHJlYXQiLCJzdHJpbmciLCJjbGlja09wZW4iLCJBdWRpb01nciIsInBsYXlTRlgiLCJwYXJhbSIsIlR5cGUiLCJwcmljZSIsImZsYWciLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50IiwiZW1pdCIsIkV2ZW50IiwiT3BlbkNvbW1vbkJ1eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJRSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxXQUFXO0lBQ3BCQyxJQUFJLEVBQUNOLEVBQUUsQ0FBQ08sTUFBTTtJQUNkQyxNQUFNLEVBQUNSLEVBQUUsQ0FBQ08sTUFBTTtJQUNoQkUsTUFBTSxFQUFDVCxFQUFFLENBQUNVLEtBQUs7SUFDZkMsUUFBUSxFQUFDO01BQ0wsV0FBUWYsUUFBUSxDQUFDZ0IsR0FBRztNQUNwQkMsSUFBSSxFQUFDakI7SUFDVCxDQUFDO0lBQ0RrQixJQUFJLEVBQUM7RUFDVCxDQUFDO0VBRURDLElBQUksRUFBQyxTQUFBQSxLQUFTQyxJQUFJLEVBQUVMLFFBQVEsRUFBQztJQUN6QixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNHLElBQUksR0FBR0UsSUFBSTtJQUNoQixJQUFJLENBQUNWLElBQUksQ0FBQ1csV0FBVyxHQUFHLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxjQUFjLENBQUNGLElBQUksQ0FBQ0csSUFBSSxDQUFDO0lBQzVELElBQUksQ0FBQ1gsTUFBTSxDQUFDUyxXQUFXLEdBQUcsSUFBSSxDQUFDYixLQUFLLENBQUNjLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDSSxJQUFJLENBQUM7SUFDOUQsSUFBSUMsU0FBUyxHQUFHckIsRUFBRSxDQUFDc0IsR0FBRyxDQUFDQyxVQUFVLENBQUNDLHNCQUFzQixDQUFDNUIsUUFBUSxDQUFDNkIsSUFBSSxFQUFFVCxJQUFJLENBQUNVLEVBQUUsQ0FBQyxDQUFDTCxTQUFTO0lBQzFGLElBQUlNLEdBQUcsR0FBRyxFQUFFO0lBQ1osS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFNBQVMsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN2QyxRQUFPUCxTQUFTLENBQUNPLENBQUMsQ0FBQyxDQUFDRSxTQUFTO1FBRXpCLEtBQUtoQyxhQUFhLENBQUNpQyxFQUFFO1VBQ2pCLElBQUdWLFNBQVMsQ0FBQ08sQ0FBQyxDQUFDLENBQUNJLFFBQVEsR0FBQyxDQUFDLEVBQ3RCTCxHQUFHLEdBQUdBLEdBQUcsR0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHTixTQUFTLENBQUNPLENBQUMsQ0FBQyxDQUFDSSxRQUFRLENBQUMsS0FFakRMLEdBQUcsR0FBR0EsR0FBRyxHQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUdOLFNBQVMsQ0FBQ08sQ0FBQyxDQUFDLENBQUNJLFFBQVE7VUFDbkQ7UUFDSixLQUFLbEMsYUFBYSxDQUFDbUMsVUFBVTtVQUN6Qk4sR0FBRyxHQUFHQSxHQUFHLEdBQUMsR0FBRyxHQUFJLFFBQVEsR0FBR04sU0FBUyxDQUFDTyxDQUFDLENBQUMsQ0FBQ0ksUUFBUTtVQUNqRDtRQUNKLEtBQUtsQyxhQUFhLENBQUNvQyxLQUFLO1VBQ3BCUCxHQUFHLEdBQUdBLEdBQUcsR0FBQyxHQUFHLEdBQUksUUFBUSxHQUFHTixTQUFTLENBQUNPLENBQUMsQ0FBQyxDQUFDSSxRQUFRO1VBQ2pEO1FBQ0osS0FBS2xDLGFBQWEsQ0FBQ3FDLGdCQUFnQjtVQUMvQlIsR0FBRyxHQUFHQSxHQUFHLEdBQUMsR0FBRyxHQUFJLE1BQU0sR0FBR04sU0FBUyxDQUFDTyxDQUFDLENBQUMsQ0FBQ0ksUUFBUTtVQUMvQztRQUNKLEtBQUtsQyxhQUFhLENBQUNzQyxLQUFLO1VBQ3BCVCxHQUFHLEdBQUdBLEdBQUcsR0FBQyxHQUFHLEdBQUksUUFBUSxHQUFHTixTQUFTLENBQUNPLENBQUMsQ0FBQyxDQUFDSSxRQUFRLEdBQUMsR0FBRyxHQUFHLEdBQUc7VUFDM0Q7TUFBTTtJQUVsQjtJQUNBLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQzRCLE1BQU0sR0FBR1YsR0FBRztFQUM1QixDQUFDO0VBRURXLFNBQVMsRUFBQyxTQUFBQSxVQUFBLEVBQVU7SUFDaEJ0QyxFQUFFLENBQUNzQixHQUFHLENBQUNpQixRQUFRLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDTCxJQUFJLENBQUNLLElBQUk7SUFDM0JzQixLQUFLLENBQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUNNLElBQUk7SUFDM0JxQixLQUFLLENBQUNmLEVBQUUsR0FBRyxJQUFJLENBQUNaLElBQUksQ0FBQ1ksRUFBRTtJQUN2QmUsS0FBSyxDQUFDQyxJQUFJLEdBQUc5QyxRQUFRLENBQUM2QixJQUFJO0lBQzFCZ0IsS0FBSyxDQUFDRSxLQUFLLEdBQUcsQ0FBQztJQUNmRixLQUFLLENBQUNHLElBQUksR0FBRyxNQUFNO0lBQ25CNUMsRUFBRSxDQUFDNkMsUUFBUSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQy9DLEVBQUUsQ0FBQ3NCLEdBQUcsQ0FBQzBCLEtBQUssQ0FBQ0MsYUFBYSxFQUFFUixLQUFLLENBQUM7RUFDbkU7QUFDSixDQUFDLENBQUM7QUFDRlMsTUFBTSxDQUFDQyxPQUFPLEdBQUdwRCxjQUFjIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbVR5cGUgPSByZXF1aXJlKFwiSXRlbVR5cGVcIik7XHJcbnZhciBNYXRlQm9udXNUeXBlID0gcmVxdWlyZShcIk1hdGVCb251c1R5cGVcIik7XHJcbnZhciBCZWxvbmdNYXRlSXRlbSA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQXRhbHM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgSWNvbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgbmFtZVNwOmNjLlNwcml0ZSxcclxuICAgICAgICBkZXNMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgaXRlbVR5cGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Okl0ZW1UeXBlLkNhcixcclxuICAgICAgICAgICAgdHlwZTpJdGVtVHlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIERhdGE6bnVsbCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbihkYXRhLCBpdGVtVHlwZSl7XHJcbiAgICAgICAgdGhpcy5pdGVtVHlwZSA9IGl0ZW1UeXBlXHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF0YWxzLmdldFNwcml0ZUZyYW1lKGRhdGEuaWNvbik7XHJcbiAgICAgICAgdGhpcy5uYW1lU3Auc3ByaXRlRnJhbWUgPSB0aGlzLkF0YWxzLmdldFNwcml0ZUZyYW1lKGRhdGEubmFtZSk7XHJcbiAgICAgICAgdmFyIGJvbnVzTGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuTWF0ZSAsZGF0YS5JZCkuYm9udXNMaXN0O1xyXG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9udXNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaChib251c0xpc3RbaV0uYm9udXNUeXBlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1hdGVCb251c1R5cGUuSFA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9udXNMaXN0W2ldLmJvbnVzTnVtPjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0citcIiBcIiArIFwi5q+P5bm05YGl5bq3OitcIiArIGJvbnVzTGlzdFtpXS5ib251c051bTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0citcIiBcIiArIFwi5q+P5bm05YGl5bq3OlwiICsgYm9udXNMaXN0W2ldLmJvbnVzTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNYXRlQm9udXNUeXBlLlJlcHV0YXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyK1wiIFwiICArIFwi5q+P5bm05ZCN5aOwOitcIiArIGJvbnVzTGlzdFtpXS5ib251c051bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWF0ZUJvbnVzVHlwZS5Nb25leTpcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIrXCIgXCIgICsgXCLmr4/lubTnjrDph5E6K1wiICsgYm9udXNMaXN0W2ldLmJvbnVzTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNYXRlQm9udXNUeXBlLldhcmVIb3VzZUNhcGNpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyK1wiIFwiICArIFwi5LuT5YKoOitcIiArIGJvbnVzTGlzdFtpXS5ib251c051bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTWF0ZUJvbnVzVHlwZS5UcmVhdDpcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIrXCIgXCIgICsgXCLmsrvnlpfpmY3otLk6K1wiICsgYm9udXNMaXN0W2ldLmJvbnVzTnVtKjEwMCArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVzTGJsLnN0cmluZyA9IHN0cjtcclxuICAgIH0sXHJcblxyXG4gICAgY2xpY2tPcGVuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5pY29uID0gdGhpcy5EYXRhLmljb247XHJcbiAgICAgICAgcGFyYW0ubmFtZSA9IHRoaXMuRGF0YS5uYW1lO1xyXG4gICAgICAgIHBhcmFtLklkID0gdGhpcy5EYXRhLklkO1xyXG4gICAgICAgIHBhcmFtLlR5cGUgPSBJdGVtVHlwZS5NYXRlO1xyXG4gICAgICAgIHBhcmFtLnByaWNlID0gMDtcclxuICAgICAgICBwYXJhbS5mbGFnID0gXCJTYWxlXCI7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vbkJ1eSwgcGFyYW0pO1xyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQmVsb25nTWF0ZUl0ZW07XHJcbiJdfQ==