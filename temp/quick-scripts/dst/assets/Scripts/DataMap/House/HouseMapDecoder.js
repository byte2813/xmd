
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/House/HouseMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71682ynATpAf4XlApYBy/p8', 'HouseMapDecoder');
// Scripts/DataMap/House/HouseMapDecoder.js

"use strict";

var HouseData = require("HouseData");
var HouseMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "house",
    houseList: {
      "default": [],
      type: [HouseData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析房屋数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.house;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var houseD = new HouseData();
        houseD.Id = jsonRoot[i].Id;
        houseD.icon = jsonRoot[i].icon;
        houseD.name = jsonRoot[i].name;
        houseD.price = jsonRoot[i].price;
        houseD.addBonus = jsonRoot[i].addBonus;
        houseD.addHp = jsonRoot[i].addHp;
        self.houseList[i] = houseD;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.houseList.length - 1; i >= 0; i--) {
      if (name == this.houseList[i].name) {
        data = this.houseList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.houseList.length - 1; i >= 0; i--) {
      if (itemId == this.houseList[i].Id) {
        data = this.houseList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.houseList.length;
  },
  getDataList: function getDataList() {
    return this.houseList;
  }
});
module.exports = HouseMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcSG91c2VcXEhvdXNlTWFwRGVjb2Rlci5qcyJdLCJuYW1lcyI6WyJIb3VzZURhdGEiLCJyZXF1aXJlIiwiSG91c2VNYXBEZWNvZGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqc29uTmFtZSIsImhvdXNlTGlzdCIsInR5cGUiLCJEZWNvZGVKc29uIiwiZXZlbnQiLCJzZWxmIiwicmVDYiIsImxvYWRlciIsImxvYWRSZXMiLCJlcnJvciIsIm9iaiIsImpzb25Sb290IiwianNvbiIsImhvdXNlIiwiaSIsImxlbmd0aCIsImhvdXNlRCIsIklkIiwiaWNvbiIsIm5hbWUiLCJwcmljZSIsImFkZEJvbnVzIiwiYWRkSHAiLCJnZXREYXRhQnlOYW1lIiwiZGF0YSIsImdldERhdGFCeUl0ZW1JZCIsIml0ZW1JZCIsImdldEpzb25MZW5ndGgiLCJnZXREYXRhTGlzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLGVBQWUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDM0IsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDLE9BQU87SUFDaEJDLFNBQVMsRUFBQztNQUNOLFdBQVEsRUFBRTtNQUNWQyxJQUFJLEVBQUMsQ0FBQ1QsU0FBUztJQUNuQjtFQUNKLENBQUM7RUFFRDtFQUNBVSxVQUFVLEVBQUMsU0FBQUEsV0FBVUMsS0FBSyxFQUFFO0lBQ3hCO0lBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUk7SUFDZkEsSUFBSSxDQUFDQyxJQUFJLEdBQUdGLEtBQUs7SUFDakJSLEVBQUUsQ0FBQ1csTUFBTSxDQUFDQyxPQUFPLENBQUMsT0FBTyxHQUFDSCxJQUFJLENBQUNMLFFBQVEsRUFBRSxVQUFVUyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtNQUMzRCxJQUFHRCxLQUFLLEVBQ1I7UUFDSTtRQUNBSixJQUFJLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEI7TUFDSjtNQUVBLElBQUlLLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxJQUFJLENBQUNDLEtBQUs7TUFDN0I7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQUlFLE1BQU0sR0FBRyxJQUFJdkIsU0FBUyxFQUFFO1FBQzVCdUIsTUFBTSxDQUFDQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNHLEVBQUU7UUFDMUJELE1BQU0sQ0FBQ0UsSUFBSSxHQUFHUCxRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDSSxJQUFJO1FBQzlCRixNQUFNLENBQUNHLElBQUksR0FBR1IsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ0ssSUFBSTtRQUM5QkgsTUFBTSxDQUFDSSxLQUFLLEdBQUdULFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNNLEtBQUs7UUFDaENKLE1BQU0sQ0FBQ0ssUUFBUSxHQUFHVixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDTyxRQUFRO1FBQ3RDTCxNQUFNLENBQUNNLEtBQUssR0FBR1gsUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ1EsS0FBSztRQUVoQ2pCLElBQUksQ0FBQ0osU0FBUyxDQUFDYSxDQUFDLENBQUMsR0FBR0UsTUFBTTtNQUM5QjtNQUNBWCxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEO0VBQ0FpQixhQUFhLEVBQUMsU0FBQUEsY0FBVUosSUFBSSxFQUFFO0lBQzFCLElBQUlLLElBQUksR0FBRyxJQUFJO0lBQ2YsS0FBSyxJQUFJVixDQUFDLEdBQUcsSUFBSSxDQUFDYixTQUFTLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ2pELElBQUdLLElBQUksSUFBSSxJQUFJLENBQUNsQixTQUFTLENBQUNhLENBQUMsQ0FBQyxDQUFDSyxJQUFJLEVBQ2pDO1FBQ0lLLElBQUksR0FBRyxJQUFJLENBQUN2QixTQUFTLENBQUNhLENBQUMsQ0FBQztRQUN4QjtNQUNKO0lBQ0o7SUFDQSxPQUFPVSxJQUFJO0VBQ2YsQ0FBQztFQUVEO0VBQ0FDLGVBQWUsRUFBQyxTQUFBQSxnQkFBU0MsTUFBTSxFQUFDO0lBQzVCLElBQUlGLElBQUksR0FBRyxJQUFJO0lBQ2YsS0FBSyxJQUFJVixDQUFDLEdBQUcsSUFBSSxDQUFDYixTQUFTLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ2pELElBQUdZLE1BQU0sSUFBSSxJQUFJLENBQUN6QixTQUFTLENBQUNhLENBQUMsQ0FBQyxDQUFDRyxFQUFFLEVBQ2pDO1FBQ0lPLElBQUksR0FBRyxJQUFJLENBQUN2QixTQUFTLENBQUNhLENBQUMsQ0FBQztRQUN4QjtNQUNKO0lBQ0o7SUFDQSxPQUFPVSxJQUFJO0VBQ2YsQ0FBQztFQUVERyxhQUFhLEVBQUMsU0FBQUEsY0FBQSxFQUFVO0lBQ3BCLE9BQU8sSUFBSSxDQUFDMUIsU0FBUyxDQUFDYyxNQUFNO0VBQ2hDLENBQUM7RUFFRGEsV0FBVyxFQUFDLFNBQUFBLFlBQUEsRUFBVTtJQUNsQixPQUFPLElBQUksQ0FBQzNCLFNBQVM7RUFDekI7QUFFSixDQUFDLENBQUM7QUFDRjRCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbkMsZUFBZSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhvdXNlRGF0YSA9IHJlcXVpcmUoXCJIb3VzZURhdGFcIik7XHJcbnZhciBIb3VzZU1hcERlY29kZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGpzb25OYW1lOlwiaG91c2VcIixcclxuICAgICAgICBob3VzZUxpc3Q6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltIb3VzZURhdGFdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Kej5p6Q5pWw5o2uXHJcbiAgICBEZWNvZGVKc29uOmZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiPT096Kej5p6Q5oi/5bGL5pWw5o2uPT09XCIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnJlQ2IgPSBldmVudDtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImpzb24vXCIrc2VsZi5qc29uTmFtZSwgZnVuY3Rpb24gKGVycm9yLCBvYmopIHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiKysr6Kej5p6Q5Ye66ZSZ77yM5p+l5LiLanNvbisrK1wiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZUNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGpzb25Sb290ID0gb2JqLmpzb24uaG91c2U7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiPT095pWw5o2u6ZW/5bqmPT09XCIgKyBqc29uUm9vdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb25Sb290Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG91c2VEID0gbmV3IEhvdXNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgaG91c2VELklkID0ganNvblJvb3RbaV0uSWQ7XHJcbiAgICAgICAgICAgICAgICBob3VzZUQuaWNvbiA9IGpzb25Sb290W2ldLmljb247XHJcbiAgICAgICAgICAgICAgICBob3VzZUQubmFtZSA9IGpzb25Sb290W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBob3VzZUQucHJpY2UgPSBqc29uUm9vdFtpXS5wcmljZTtcclxuICAgICAgICAgICAgICAgIGhvdXNlRC5hZGRCb251cyA9IGpzb25Sb290W2ldLmFkZEJvbnVzO1xyXG4gICAgICAgICAgICAgICAgaG91c2VELmFkZEhwID0ganNvblJvb3RbaV0uYWRkSHA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNlbGYuaG91c2VMaXN0W2ldID0gaG91c2VEOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnJlQ2IodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCa6L+H5ZCN5a2X5ou/5Yiw5b2T5YmN55qE5pWw5o2uIOS4jeW7uuiurueUqO+8jOS9oOimgeeUqOaIkeS5n+ayoeWKnuazlVxyXG4gICAgZ2V0RGF0YUJ5TmFtZTpmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5ob3VzZUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYobmFtZSA9PSB0aGlzLmhvdXNlTGlzdFtpXS5uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5ob3VzZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgJrov4dpdGVtaWTojrflj5bmlbDmja5cclxuICAgIGdldERhdGFCeUl0ZW1JZDpmdW5jdGlvbihpdGVtSWQpe1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5ob3VzZUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoaXRlbUlkID09IHRoaXMuaG91c2VMaXN0W2ldLklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5ob3VzZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SnNvbkxlbmd0aDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhvdXNlTGlzdC5sZW5ndGhcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0YUxpc3Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ob3VzZUxpc3Q7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gSG91c2VNYXBEZWNvZGVyOyJdfQ==