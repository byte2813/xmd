
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Car/CarMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f440rFno5GEL3da5tzZDHV', 'CarMapDecoder');
// Scripts/DataMap/Car/CarMapDecoder.js

"use strict";

var CarData = require("CarData");
var CarMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "car",
    carList: {
      "default": [],
      type: [CarData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析汽车数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.car;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var carD = new CarData();
        carD.Id = jsonRoot[i].Id;
        carD.icon = jsonRoot[i].icon;
        carD.name = jsonRoot[i].name;
        carD.price = jsonRoot[i].price;
        carD.addBonus = jsonRoot[i].addBonus;
        carD.addHp = jsonRoot[i].addHp;
        carD.addDate = jsonRoot[i].addDate;
        self.carList[i] = carD;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.carList.length - 1; i >= 0; i--) {
      if (name == this.carList[i].name) {
        data = this.carList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.carList.length - 1; i >= 0; i--) {
      if (itemId == this.carList[i].Id) {
        data = this.carList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.carList.length;
  },
  getDataList: function getDataList() {
    return this.carList;
  }
});
module.exports = CarMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQ2FyXFxDYXJNYXBEZWNvZGVyLmpzIl0sIm5hbWVzIjpbIkNhckRhdGEiLCJyZXF1aXJlIiwiQ2FyTWFwRGVjb2RlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianNvbk5hbWUiLCJjYXJMaXN0IiwidHlwZSIsIkRlY29kZUpzb24iLCJldmVudCIsInNlbGYiLCJyZUNiIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yIiwib2JqIiwianNvblJvb3QiLCJqc29uIiwiY2FyIiwiaSIsImxlbmd0aCIsImNhckQiLCJJZCIsImljb24iLCJuYW1lIiwicHJpY2UiLCJhZGRCb251cyIsImFkZEhwIiwiYWRkRGF0ZSIsImdldERhdGFCeU5hbWUiLCJkYXRhIiwiZ2V0RGF0YUJ5SXRlbUlkIiwiaXRlbUlkIiwiZ2V0SnNvbkxlbmd0aCIsImdldERhdGFMaXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDaEMsSUFBSUMsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN6QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUMsS0FBSztJQUNkQyxPQUFPLEVBQUM7TUFDSixXQUFRLEVBQUU7TUFDVkMsSUFBSSxFQUFDLENBQUNULE9BQU87SUFDakI7RUFDSixDQUFDO0VBRUQ7RUFDQVUsVUFBVSxFQUFDLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN4QjtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2ZBLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixLQUFLO0lBQ2pCUixFQUFFLENBQUNXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sR0FBQ0gsSUFBSSxDQUFDTCxRQUFRLEVBQUUsVUFBVVMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7TUFDM0QsSUFBR0QsS0FBSyxFQUNSO1FBQ0k7UUFDQUosSUFBSSxDQUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hCO01BQ0o7TUFFQSxJQUFJSyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHO01BQzNCO01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJRSxJQUFJLEdBQUcsSUFBSXZCLE9BQU8sRUFBRTtRQUN4QnVCLElBQUksQ0FBQ0MsRUFBRSxHQUFHTixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDRyxFQUFFO1FBQ3hCRCxJQUFJLENBQUNFLElBQUksR0FBR1AsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ0ksSUFBSTtRQUM1QkYsSUFBSSxDQUFDRyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNLLElBQUk7UUFDNUJILElBQUksQ0FBQ0ksS0FBSyxHQUFHVCxRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDTSxLQUFLO1FBQzlCSixJQUFJLENBQUNLLFFBQVEsR0FBR1YsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ08sUUFBUTtRQUNwQ0wsSUFBSSxDQUFDTSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNRLEtBQUs7UUFDOUJOLElBQUksQ0FBQ08sT0FBTyxHQUFHWixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDUyxPQUFPO1FBQ2xDbEIsSUFBSSxDQUFDSixPQUFPLENBQUNhLENBQUMsQ0FBQyxHQUFHRSxJQUFJO01BQzFCO01BQ0FYLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7RUFDQWtCLGFBQWEsRUFBQyxTQUFBQSxjQUFVTCxJQUFJLEVBQUU7SUFDMUIsSUFBSU0sSUFBSSxHQUFHLElBQUk7SUFDZixLQUFLLElBQUlYLENBQUMsR0FBRyxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDL0MsSUFBR0ssSUFBSSxJQUFJLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDLENBQUNLLElBQUksRUFDL0I7UUFDSU0sSUFBSSxHQUFHLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDO1FBQ3RCO01BQ0o7SUFDSjtJQUNBLE9BQU9XLElBQUk7RUFDZixDQUFDO0VBRUQ7RUFDQUMsZUFBZSxFQUFDLFNBQUFBLGdCQUFTQyxNQUFNLEVBQUM7SUFDNUIsSUFBSUYsSUFBSSxHQUFHLElBQUk7SUFDZixLQUFLLElBQUlYLENBQUMsR0FBRyxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDL0MsSUFBR2EsTUFBTSxJQUFJLElBQUksQ0FBQzFCLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDLENBQUNHLEVBQUUsRUFDL0I7UUFDSVEsSUFBSSxHQUFHLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDO1FBQ3RCO01BQ0o7SUFDSjtJQUNBLE9BQU9XLElBQUk7RUFDZixDQUFDO0VBRURHLGFBQWEsRUFBQyxTQUFBQSxjQUFBLEVBQVU7SUFDcEIsT0FBTyxJQUFJLENBQUMzQixPQUFPLENBQUNjLE1BQU07RUFDOUIsQ0FBQztFQUVEYyxXQUFXLEVBQUMsU0FBQUEsWUFBQSxFQUFVO0lBQ2xCLE9BQU8sSUFBSSxDQUFDNUIsT0FBTztFQUN2QjtBQUNKLENBQUMsQ0FBQztBQUNGNkIsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQyxhQUFhIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ2FyRGF0YSA9IHJlcXVpcmUoXCJDYXJEYXRhXCIpO1xyXG52YXIgQ2FyTWFwRGVjb2RlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAganNvbk5hbWU6XCJjYXJcIixcclxuICAgICAgICBjYXJMaXN0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbQ2FyRGF0YV0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy/op6PmnpDmlbDmja5cclxuICAgIERlY29kZUpzb246ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCI9PT3op6PmnpDmsb3ovabmlbDmja49PT1cIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYucmVDYiA9IGV2ZW50O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwianNvbi9cIitzZWxmLmpzb25OYW1lLCBmdW5jdGlvbiAoZXJyb3IsIG9iaikge1xyXG4gICAgICAgICAgICBpZihlcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCIrKyvop6PmnpDlh7rplJnvvIzmn6XkuItqc29uKysrXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlQ2IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIganNvblJvb3QgPSBvYmouanNvbi5jYXI7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiPT095pWw5o2u6ZW/5bqmPT09XCIgKyBqc29uUm9vdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb25Sb290Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FyRCA9IG5ldyBDYXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBjYXJELklkID0ganNvblJvb3RbaV0uSWQ7XHJcbiAgICAgICAgICAgICAgICBjYXJELmljb24gPSBqc29uUm9vdFtpXS5pY29uO1xyXG4gICAgICAgICAgICAgICAgY2FyRC5uYW1lID0ganNvblJvb3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGNhckQucHJpY2UgPSBqc29uUm9vdFtpXS5wcmljZTtcclxuICAgICAgICAgICAgICAgIGNhckQuYWRkQm9udXMgPSBqc29uUm9vdFtpXS5hZGRCb251cztcclxuICAgICAgICAgICAgICAgIGNhckQuYWRkSHAgPSBqc29uUm9vdFtpXS5hZGRIcDtcclxuICAgICAgICAgICAgICAgIGNhckQuYWRkRGF0ZSA9IGpzb25Sb290W2ldLmFkZERhdGU7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhckxpc3RbaV0gPSBjYXJEOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJlQ2IodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCa6L+H5ZCN5a2X5ou/5Yiw5b2T5YmN55qE5pWw5o2uIOS4jeW7uuiurueUqO+8jOS9oOimgeeUqOaIkeS5n+ayoeWKnuazlVxyXG4gICAgZ2V0RGF0YUJ5TmFtZTpmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jYXJMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gdGhpcy5jYXJMaXN0W2ldLm5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmNhckxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgJrov4dpdGVtaWTojrflj5bmlbDmja5cclxuICAgIGdldERhdGFCeUl0ZW1JZDpmdW5jdGlvbihpdGVtSWQpe1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jYXJMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW1JZCA9PSB0aGlzLmNhckxpc3RbaV0uSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmNhckxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SnNvbkxlbmd0aDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhckxpc3QubGVuZ3RoXHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGFMaXN0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyTGlzdDtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENhck1hcERlY29kZXI7XHJcbiJdfQ==