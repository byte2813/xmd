
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Goods/GoodMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08823KuKwxPSq8h7YOSb282', 'GoodMapDecoder');
// Scripts/DataMap/Goods/GoodMapDecoder.js

"use strict";

var GoodsData = require("GoodsData");
var PriceData = require("PriceData");
var GoodMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "goods",
    goodsList: {
      "default": [],
      type: [GoodsData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析物品数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.goods;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var goodsData = new GoodsData();
        goodsData.sex = jsonRoot[i].sex;
        goodsData.Id = jsonRoot[i].itemId;
        goodsData.icon = jsonRoot[i].icon;
        goodsData.name = jsonRoot[i].name;
        for (var j = 0; j < jsonRoot[i].priceList.length; j++) {
          var price = new PriceData();
          var data = jsonRoot[i].priceList[j];
          price.lowprice = data[0];
          price.highprice = data[1];
          price.probability = data[2];
          goodsData.priceList[j] = price;
        }
        self.goodsList[i] = goodsData;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.goodsList.length - 1; i >= 0; i--) {
      if (name == this.goodsList[i].name) {
        data = this.goodsList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.goodsList.length - 1; i >= 0; i--) {
      if (itemId == this.goodsList[i].Id) {
        data = this.goodsList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.goodsList.length;
  },
  getDataList: function getDataList() {
    return this.goodsList;
  },
  getDataListBySex: function getDataListBySex(Sex) {
    var dataList = [];
    //var index = 0;
    for (var i = 0; i < this.goodsList.length; i++) {
      if (this.goodsList[i].sex == Sex || this.goodsList[i].sex == 0) {
        //dataList[index] = this.goodsList[i];
        //index += 1;
        dataList.push(this.goodsList[i]);
      }
    }
    //cc.log("对应性别的玩家展示物品种类 ====== " + dataList.length);
    return dataList;
  }
});
module.exports = GoodMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcR29vZHNcXEdvb2RNYXBEZWNvZGVyLmpzIl0sIm5hbWVzIjpbIkdvb2RzRGF0YSIsInJlcXVpcmUiLCJQcmljZURhdGEiLCJHb29kTWFwRGVjb2RlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianNvbk5hbWUiLCJnb29kc0xpc3QiLCJ0eXBlIiwiRGVjb2RlSnNvbiIsImV2ZW50Iiwic2VsZiIsInJlQ2IiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyb3IiLCJvYmoiLCJqc29uUm9vdCIsImpzb24iLCJnb29kcyIsImkiLCJsZW5ndGgiLCJnb29kc0RhdGEiLCJzZXgiLCJJZCIsIml0ZW1JZCIsImljb24iLCJuYW1lIiwiaiIsInByaWNlTGlzdCIsInByaWNlIiwiZGF0YSIsImxvd3ByaWNlIiwiaGlnaHByaWNlIiwicHJvYmFiaWxpdHkiLCJnZXREYXRhQnlOYW1lIiwiZ2V0RGF0YUJ5SXRlbUlkIiwiZ2V0SnNvbkxlbmd0aCIsImdldERhdGFMaXN0IiwiZ2V0RGF0YUxpc3RCeVNleCIsIlNleCIsImRhdGFMaXN0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQyxPQUFPO0lBQ2hCQyxTQUFTLEVBQUM7TUFDTixXQUFRLEVBQUU7TUFDVkMsSUFBSSxFQUFDLENBQUNWLFNBQVM7SUFDbkI7RUFDSixDQUFDO0VBRUQ7RUFDQVcsVUFBVSxFQUFDLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN4QjtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2ZBLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixLQUFLO0lBQ2pCUixFQUFFLENBQUNXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sR0FBQ0gsSUFBSSxDQUFDTCxRQUFRLEVBQUUsVUFBVVMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7TUFDM0QsSUFBR0QsS0FBSyxFQUNSO1FBQ0k7UUFDQUosSUFBSSxDQUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hCO01BQ0o7TUFFQSxJQUFJSyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLO01BQzdCO01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJRSxTQUFTLEdBQUcsSUFBSXhCLFNBQVMsRUFBRTtRQUMvQndCLFNBQVMsQ0FBQ0MsR0FBRyxHQUFHTixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDRyxHQUFHO1FBQy9CRCxTQUFTLENBQUNFLEVBQUUsR0FBR1AsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ0ssTUFBTTtRQUNqQ0gsU0FBUyxDQUFDSSxJQUFJLEdBQUdULFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNNLElBQUk7UUFDakNKLFNBQVMsQ0FBQ0ssSUFBSSxHQUFHVixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDTyxJQUFJO1FBQ2pDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHWCxRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDUyxTQUFTLENBQUNSLE1BQU0sRUFBRU8sQ0FBQyxFQUFFLEVBQUU7VUFDbkQsSUFBSUUsS0FBSyxHQUFHLElBQUk5QixTQUFTLEVBQUU7VUFDM0IsSUFBSStCLElBQUksR0FBR2QsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ1MsU0FBUyxDQUFDRCxDQUFDLENBQUM7VUFDbkNFLEtBQUssQ0FBQ0UsUUFBUSxHQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ3hCRCxLQUFLLENBQUNHLFNBQVMsR0FBR0YsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUN6QkQsS0FBSyxDQUFDSSxXQUFXLEdBQUdILElBQUksQ0FBQyxDQUFDLENBQUM7VUFDM0JULFNBQVMsQ0FBQ08sU0FBUyxDQUFDRCxDQUFDLENBQUMsR0FBSUUsS0FBSztRQUNuQztRQUNBbkIsSUFBSSxDQUFDSixTQUFTLENBQUNhLENBQUMsQ0FBQyxHQUFHRSxTQUFTO01BQ2pDO01BQ0FYLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7RUFDQXVCLGFBQWEsRUFBQyxTQUFBQSxjQUFVUixJQUFJLEVBQUU7SUFDMUIsSUFBSUksSUFBSSxHQUFHLElBQUk7SUFDZixLQUFLLElBQUlYLENBQUMsR0FBRyxJQUFJLENBQUNiLFNBQVMsQ0FBQ2MsTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDakQsSUFBR08sSUFBSSxJQUFJLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDLENBQUNPLElBQUksRUFDakM7UUFDSUksSUFBSSxHQUFHLElBQUksQ0FBQ3hCLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDO1FBQ3hCO01BQ0o7SUFDSjtJQUNBLE9BQU9XLElBQUk7RUFDZixDQUFDO0VBRUQ7RUFDQUssZUFBZSxFQUFDLFNBQUFBLGdCQUFTWCxNQUFNLEVBQUM7SUFDNUIsSUFBSU0sSUFBSSxHQUFHLElBQUk7SUFDZixLQUFLLElBQUlYLENBQUMsR0FBRyxJQUFJLENBQUNiLFNBQVMsQ0FBQ2MsTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDakQsSUFBR0ssTUFBTSxJQUFJLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDLENBQUNJLEVBQUUsRUFDakM7UUFDSU8sSUFBSSxHQUFHLElBQUksQ0FBQ3hCLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDO1FBQ3hCO01BQ0o7SUFDSjtJQUNBLE9BQU9XLElBQUk7RUFDZixDQUFDO0VBRURNLGFBQWEsRUFBQyxTQUFBQSxjQUFBLEVBQVU7SUFDcEIsT0FBTyxJQUFJLENBQUM5QixTQUFTLENBQUNjLE1BQU07RUFDaEMsQ0FBQztFQUVEaUIsV0FBVyxFQUFDLFNBQUFBLFlBQUEsRUFBVTtJQUNsQixPQUFPLElBQUksQ0FBQy9CLFNBQVM7RUFDekIsQ0FBQztFQUVEZ0MsZ0JBQWdCLEVBQUMsU0FBQUEsaUJBQVNDLEdBQUcsRUFBQztJQUMxQixJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUNqQjtJQUNBLEtBQUssSUFBSXJCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNiLFNBQVMsQ0FBQ2MsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUM1QyxJQUFHLElBQUksQ0FBQ2IsU0FBUyxDQUFDYSxDQUFDLENBQUMsQ0FBQ0csR0FBRyxJQUFJaUIsR0FBRyxJQUFJLElBQUksQ0FBQ2pDLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDLENBQUNHLEdBQUcsSUFBSSxDQUFDLEVBQzdEO1FBQ0k7UUFDQTtRQUNBa0IsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDbkMsU0FBUyxDQUFDYSxDQUFDLENBQUMsQ0FBQztNQUNwQztJQUNKO0lBQ0E7SUFDQSxPQUFPcUIsUUFBUTtFQUNuQjtBQUNKLENBQUMsQ0FBQztBQUNGRSxNQUFNLENBQUNDLE9BQU8sR0FBRzNDLGNBQWMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHb29kc0RhdGEgPSByZXF1aXJlKFwiR29vZHNEYXRhXCIpO1xyXG52YXIgUHJpY2VEYXRhID0gcmVxdWlyZShcIlByaWNlRGF0YVwiKTtcclxudmFyIEdvb2RNYXBEZWNvZGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBqc29uTmFtZTpcImdvb2RzXCIsXHJcbiAgICAgICAgZ29vZHNMaXN0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbR29vZHNEYXRhXSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ino+aekOaVsOaNrlxyXG4gICAgRGVjb2RlSnNvbjpmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIj09Peino+aekOeJqeWTgeaVsOaNrj09PVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5yZUNiID0gZXZlbnQ7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJqc29uL1wiK3NlbGYuanNvbk5hbWUsIGZ1bmN0aW9uIChlcnJvciwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmKGVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIisrK+ino+aekOWHuumUme+8jOafpeS4i2pzb24rKytcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVDYihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBqc29uUm9vdCA9IG9iai5qc29uLmdvb2RzO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIj09PeaVsOaNrumVv+W6pj09PVwiICsganNvblJvb3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uUm9vdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdvb2RzRGF0YSA9IG5ldyBHb29kc0RhdGEoKTtcclxuICAgICAgICAgICAgICAgIGdvb2RzRGF0YS5zZXggPSBqc29uUm9vdFtpXS5zZXg7XHJcbiAgICAgICAgICAgICAgICBnb29kc0RhdGEuSWQgPSBqc29uUm9vdFtpXS5pdGVtSWQ7XHJcbiAgICAgICAgICAgICAgICBnb29kc0RhdGEuaWNvbiA9IGpzb25Sb290W2ldLmljb247XHJcbiAgICAgICAgICAgICAgICBnb29kc0RhdGEubmFtZSA9IGpzb25Sb290W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpzb25Sb290W2ldLnByaWNlTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IG5ldyBQcmljZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGpzb25Sb290W2ldLnByaWNlTGlzdFtqXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZS5sb3dwcmljZSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UuaGlnaHByaWNlID0gZGF0YVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZS5wcm9iYWJpbGl0eSA9IGRhdGFbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNEYXRhLnByaWNlTGlzdFtqXSA9ICBwcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuZ29vZHNMaXN0W2ldID0gZ29vZHNEYXRhOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJlQ2IodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCa6L+H5ZCN5a2X5ou/5Yiw5b2T5YmN55qE5pWw5o2uIOS4jeW7uuiurueUqO+8jOS9oOimgeeUqOaIkeS5n+ayoeWKnuazlVxyXG4gICAgZ2V0RGF0YUJ5TmFtZTpmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYobmFtZSA9PSB0aGlzLmdvb2RzTGlzdFtpXS5uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nb29kc0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgJrov4dpdGVtaWTojrflj5bmlbDmja5cclxuICAgIGdldERhdGFCeUl0ZW1JZDpmdW5jdGlvbihpdGVtSWQpe1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoaXRlbUlkID09IHRoaXMuZ29vZHNMaXN0W2ldLklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nb29kc0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SnNvbkxlbmd0aDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdvb2RzTGlzdC5sZW5ndGhcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0YUxpc3Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nb29kc0xpc3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGFMaXN0QnlTZXg6ZnVuY3Rpb24oU2V4KXtcclxuICAgICAgICB2YXIgZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAvL3ZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdvb2RzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdvb2RzTGlzdFtpXS5zZXggPT0gU2V4IHx8IHRoaXMuZ29vZHNMaXN0W2ldLnNleCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2RhdGFMaXN0W2luZGV4XSA9IHRoaXMuZ29vZHNMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgLy9pbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgZGF0YUxpc3QucHVzaCh0aGlzLmdvb2RzTGlzdFtpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NjLmxvZyhcIuWvueW6lOaAp+WIq+eahOeOqeWutuWxleekuueJqeWTgeenjeexuyA9PT09PT0gXCIgKyBkYXRhTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhTGlzdDtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEdvb2RNYXBEZWNvZGVyO1xyXG4iXX0=