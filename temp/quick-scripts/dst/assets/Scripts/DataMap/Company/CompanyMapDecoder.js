
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Company/CompanyMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2be05W0/DhDcKVepJyGN9sd', 'CompanyMapDecoder');
// Scripts/DataMap/Company/CompanyMapDecoder.js

"use strict";

var CompanyData = require("CompanyData");
var ProData = require("ProData");
var CompanyMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "company",
    companyList: {
      "default": [],
      type: [CompanyData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析公司数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.company;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var comData = new CompanyData();
        comData.Id = jsonRoot[i].Id;
        comData.icon = jsonRoot[i].icon;
        comData.name = jsonRoot[i].name;
        comData.inPrice = jsonRoot[i].inPrice;
        comData.outPrice = jsonRoot[i].outPrice; //破产点
        comData.LimitYear = jsonRoot[i].LimitYear;
        comData.bonusRatio = jsonRoot[i].bonusRatio;
        //买到后刷这个比例
        for (var j = 0; j < jsonRoot[i].proList.length; j++) {
          var proD = new ProData();
          proD.lowRatio = jsonRoot[i].proList[j][0];
          proD.upRatio = jsonRoot[i].proList[j][1];
          proD.weight = jsonRoot[i].proList[j][2];
          comData.proList[j] = proD;
        }
        //没有买时候刷这个比例
        for (var j = 0; j < jsonRoot[i].unList.length; j++) {
          var proD = new ProData();
          proD.lowRatio = jsonRoot[i].unList[j][0];
          proD.upRatio = jsonRoot[i].unList[j][1];
          proD.weight = jsonRoot[i].unList[j][2];
          comData.unList[j] = proD;
        }
        self.companyList[i] = comData;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.companyList.length - 1; i >= 0; i--) {
      if (name == this.companyList[i].name) {
        data = this.companyList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.companyList.length - 1; i >= 0; i--) {
      if (itemId == this.companyList[i].Id) {
        data = this.companyList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.companyList.length;
  },
  getDataList: function getDataList() {
    return this.companyList;
  }
});
module.exports = CompanyMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQ29tcGFueVxcQ29tcGFueU1hcERlY29kZXIuanMiXSwibmFtZXMiOlsiQ29tcGFueURhdGEiLCJyZXF1aXJlIiwiUHJvRGF0YSIsIkNvbXBhbnlNYXBEZWNvZGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqc29uTmFtZSIsImNvbXBhbnlMaXN0IiwidHlwZSIsIkRlY29kZUpzb24iLCJldmVudCIsInNlbGYiLCJyZUNiIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yIiwib2JqIiwianNvblJvb3QiLCJqc29uIiwiY29tcGFueSIsImkiLCJsZW5ndGgiLCJjb21EYXRhIiwiSWQiLCJpY29uIiwibmFtZSIsImluUHJpY2UiLCJvdXRQcmljZSIsIkxpbWl0WWVhciIsImJvbnVzUmF0aW8iLCJqIiwicHJvTGlzdCIsInByb0QiLCJsb3dSYXRpbyIsInVwUmF0aW8iLCJ3ZWlnaHQiLCJ1bkxpc3QiLCJnZXREYXRhQnlOYW1lIiwiZGF0YSIsImdldERhdGFCeUl0ZW1JZCIsIml0ZW1JZCIsImdldEpzb25MZW5ndGgiLCJnZXREYXRhTGlzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNoQyxJQUFJRSxpQkFBaUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDN0IsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDLFNBQVM7SUFDbEJDLFdBQVcsRUFBQztNQUNSLFdBQVEsRUFBRTtNQUNWQyxJQUFJLEVBQUMsQ0FBQ1YsV0FBVztJQUNyQjtFQUNKLENBQUM7RUFFRDtFQUNBVyxVQUFVLEVBQUMsU0FBQUEsV0FBVUMsS0FBSyxF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QUNsQyxXQUFXLENBQUNjLE1BQU07RUFDbEMsQ0FBQztFQUVEcUIsV0FBVyxFQUFDLFNBQUFBLFlBQUEsRUFBVTtJQUNsQixPQUFPLElBQUksQ0FBQ25DLFdBQVc7RUFDM0I7QUFFSixDQUFDLENBQUM7QUFDRm9DLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHM0MsaUJBQWlCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcGFueURhdGEgPSByZXF1aXJlKFwiQ29tcGFueURhdGFcIik7XHJcbnZhciBQcm9EYXRhID0gcmVxdWlyZShcIlByb0RhdGFcIik7XHJcbnZhciBDb21wYW55TWFwRGVjb2RlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAganNvbk5hbWU6XCJjb21wYW55XCIsXHJcbiAgICAgICAgY29tcGFueUxpc3Q6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltDb21wYW55RGF0YV0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy/op6PmnpDmlbDmja5cclxuICAgIERlY29kZUpzb246ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCI9PT3op6PmnpDlhazlj7jmlbDmja49PT1cIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYucmVDYiA9IGV2ZW50O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwianNvbi9cIitzZWxmLmpzb25OYW1lLCBmdW5jdGlvbiAoZXJyb3IsIG9iaikge1xyXG4gICAgICAgICAgICBpZihlcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCIrKyvop6PmnpDlh7rplJnvvIzmn6XkuItqc29uKysrXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlQ2IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIganNvblJvb3QgPSBvYmouanNvbi5jb21wYW55O1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIj09PeaVsOaNrumVv+W6pj09PVwiICsganNvblJvb3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uUm9vdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbURhdGEgPSBuZXcgQ29tcGFueURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGNvbURhdGEuSWQgPSBqc29uUm9vdFtpXS5JZDtcclxuICAgICAgICAgICAgICAgIGNvbURhdGEuaWNvbiA9IGpzb25Sb290W2ldLmljb247XHJcbiAgICAgICAgICAgICAgICBjb21EYXRhLm5hbWUgPSBqc29uUm9vdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY29tRGF0YS5pblByaWNlID0ganNvblJvb3RbaV0uaW5QcmljZTtcclxuICAgICAgICAgICAgICAgIGNvbURhdGEub3V0UHJpY2UgPSBqc29uUm9vdFtpXS5vdXRQcmljZTsgLy/noLTkuqfngrlcclxuICAgICAgICAgICAgICAgIGNvbURhdGEuTGltaXRZZWFyID0ganNvblJvb3RbaV0uTGltaXRZZWFyO1xyXG4gICAgICAgICAgICAgICAgY29tRGF0YS5ib251c1JhdGlvID0ganNvblJvb3RbaV0uYm9udXNSYXRpbztcclxuICAgICAgICAgICAgICAgIC8v5Lmw5Yiw5ZCO5Yi36L+Z5Liq5q+U5L6LXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpzb25Sb290W2ldLnByb0xpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvRCA9IG5ldyBQcm9EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvRC5sb3dSYXRpbyA9IGpzb25Sb290W2ldLnByb0xpc3Rbal1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvRC51cFJhdGlvID0ganNvblJvb3RbaV0ucHJvTGlzdFtqXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ELndlaWdodCA9IGpzb25Sb290W2ldLnByb0xpc3Rbal1bMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29tRGF0YS5wcm9MaXN0W2pdID0gcHJvRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5rKh5pyJ5Lmw5pe25YCZ5Yi36L+Z5Liq5q+U5L6LXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpzb25Sb290W2ldLnVuTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9EID0gbmV3IFByb0RhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ELmxvd1JhdGlvID0ganNvblJvb3RbaV0udW5MaXN0W2pdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb0QudXBSYXRpbyA9IGpzb25Sb290W2ldLnVuTGlzdFtqXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ELndlaWdodCA9IGpzb25Sb290W2ldLnVuTGlzdFtqXVsyXTtcclxuICAgICAgICAgICAgICAgICAgICBjb21EYXRhLnVuTGlzdFtqXSA9IHByb0Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBhbnlMaXN0W2ldID0gY29tRGF0YTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5yZUNiKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+mAmui/h+WQjeWtl+aLv+WIsOW9k+WJjeeahOaVsOaNriDkuI3lu7rorq7nlKjvvIzkvaDopoHnlKjmiJHkuZ/msqHlip7ms5VcclxuICAgIGdldERhdGFCeU5hbWU6ZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29tcGFueUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYobmFtZSA9PSB0aGlzLmNvbXBhbnlMaXN0W2ldLm5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmNvbXBhbnlMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCa6L+HaXRlbWlk6I635Y+W5pWw5o2uXHJcbiAgICBnZXREYXRhQnlJdGVtSWQ6ZnVuY3Rpb24oaXRlbUlkKXtcclxuICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29tcGFueUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoaXRlbUlkID09IHRoaXMuY29tcGFueUxpc3RbaV0uSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmNvbXBhbnlMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEpzb25MZW5ndGg6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYW55TGlzdC5sZW5ndGhcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0YUxpc3Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYW55TGlzdDtcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBDb21wYW55TWFwRGVjb2RlcjtcclxuIl19