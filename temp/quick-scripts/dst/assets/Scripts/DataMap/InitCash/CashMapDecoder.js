
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/InitCash/CashMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b512H+PV9ParK39iqtZBZ1', 'CashMapDecoder');
// Scripts/DataMap/InitCash/CashMapDecoder.js

"use strict";

var CashData = require("CashData");
var CashMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "cash",
    cashList: {
      "default": [],
      type: [CashData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析现金数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.cash;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var cashD = new CashData();
        cashD.Id = jsonRoot[i].Id;
        cashD.cash = jsonRoot[i].cash;
        cashD.weight = jsonRoot[i].weight;
        self.cashList[i] = cashD;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.cashList.length - 1; i >= 0; i--) {
      if (name == this.cashList[i].name) {
        data = this.cashList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.cashList.length - 1; i >= 0; i--) {
      if (itemId == this.cashList[i].Id) {
        data = this.cashList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.cashList.length;
  }
});
module.exports = CashMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcSW5pdENhc2hcXENhc2hNYXBEZWNvZGVyLmpzIl0sIm5hbWVzIjpbIkNhc2hEYXRhIiwicmVxdWlyZSIsIkNhc2hNYXBEZWNvZGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqc29uTmFtZSIsImNhc2hMaXN0IiwidHlwZSIsIkRlY29kZUpzb24iLCJldmVudCIsInNlbGYiLCJyZUNiIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yIiwib2JqIiwianNvblJvb3QiLCJqc29uIiwiY2FzaCIsImkiLCJsZW5ndGgiLCJjYXNoRCIsIklkIiwid2VpZ2h0IiwiZ2V0RGF0YUJ5TmFtZSIsIm5hbWUiLCJkYXRhIiwiZ2V0RGF0YUJ5SXRlbUlkIiwiaXRlbUlkIiwiZ2V0SnNvbkxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDMUIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDLE1BQU07SUFDZkMsUUFBUSxFQUFDO01BQ0wsV0FBUSxFQUFFO01BQ1ZDLElBQUksRUFBQyxDQUFDVCxRQUFRO0lBQ2xCO0VBQ0osQ0FBQztFQUVEO0VBQ0FVLFVBQVUsRUFBQyxTQUFBQSxXQUFVQyxLQUFLLEVBQUU7SUFDeEI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBSTtJQUNmQSxJQUFJLENBQUNDLElBQUksR0FBR0YsS0FBSztJQUNqQlIsRUFBRSxDQUFDVyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEdBQUNILElBQUksQ0FBQ0wsUUFBUSxFQUFFLFVBQVVTLEtBQUssRUFBRUMsR0FBRyxFQUFFO01BQzNELElBQUdELEtBQUssRUFDUjtRQUNJO1FBQ0FKLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQjtNQUNKO01BRUEsSUFBSUssUUFBUSxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsSUFBSTtNQUM1QjtNQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSUUsS0FBSyxHQUFHLElBQUl2QixRQUFRLEVBQUU7UUFDMUJ1QixLQUFLLENBQUNDLEVBQUUsR0FBR04sUUFBUSxDQUFDRyxDQUFDLENBQUMsQ0FBQ0csRUFBRTtRQUN6QkQsS0FBSyxDQUFDSCxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNELElBQUk7UUFDN0JHLEtBQUssQ0FBQ0UsTUFBTSxHQUFHUCxRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDSSxNQUFNO1FBRWpDYixJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDLEdBQUdFLEtBQUs7TUFDNUI7TUFDQVgsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDtFQUNBYSxhQUFhLEVBQUMsU0FBQUEsY0FBVUMsSUFBSSxFQUFFO0lBQzFCLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2YsS0FBSyxJQUFJUCxDQUFDLEdBQUcsSUFBSSxDQUFDYixRQUFRLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ2hELElBQUdNLElBQUksSUFBSSxJQUFJLENBQUNuQixRQUFRLENBQUNhLENBQUMsQ0FBQyxDQUFDTSxJQUFJLEVBQ2hDO1FBQ0lDLElBQUksR0FBRyxJQUFJLENBQUNwQixRQUFRLENBQUNhLENBQUMsQ0FBQztRQUN2QjtNQUNKO0lBQ0o7SUFDQSxPQUFPTyxJQUFJO0VBQ2YsQ0FBQztFQUVEO0VBQ0FDLGVBQWUsRUFBQyxTQUFBQSxnQkFBU0MsTUFBTSxFQUFDO0lBQzVCLElBQUlGLElBQUksR0FBRyxJQUFJO0lBQ2YsS0FBSyxJQUFJUCxDQUFDLEdBQUcsSUFBSSxDQUFDYixRQUFRLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ2hELElBQUdTLE1BQU0sSUFBSSxJQUFJLENBQUN0QixRQUFRLENBQUNhLENBQUMsQ0FBQyxDQUFDRyxFQUFFLEVBQ2hDO1FBQ0lJLElBQUksR0FBRyxJQUFJLENBQUNwQixRQUFRLENBQUNhLENBQUMsQ0FBQztRQUN2QjtNQUNKO0lBQ0o7SUFDQSxPQUFPTyxJQUFJO0VBQ2YsQ0FBQztFQUVERyxhQUFhLEVBQUMsU0FBQUEsY0FBQSxFQUFVO0lBQ3BCLE9BQU8sSUFBSSxDQUFDdkIsUUFBUSxDQUFDYyxNQUFNO0VBQy9CO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZVLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHL0IsY0FBYyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhc2hEYXRhID0gcmVxdWlyZShcIkNhc2hEYXRhXCIpO1xyXG52YXIgQ2FzaE1hcERlY29kZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGpzb25OYW1lOlwiY2FzaFwiLFxyXG4gICAgICAgIGNhc2hMaXN0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbQ2FzaERhdGFdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Kej5p6Q5pWw5o2uXHJcbiAgICBEZWNvZGVKc29uOmZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiPT096Kej5p6Q546w6YeR5pWw5o2uPT09XCIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnJlQ2IgPSBldmVudDtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImpzb24vXCIrc2VsZi5qc29uTmFtZSwgZnVuY3Rpb24gKGVycm9yLCBvYmopIHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiKysr6Kej5p6Q5Ye66ZSZ77yM5p+l5LiLanNvbisrK1wiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZUNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGpzb25Sb290ID0gb2JqLmpzb24uY2FzaDtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCI9PT3mlbDmja7plb/luqY9PT1cIiArIGpzb25Sb290Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvblJvb3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYXNoRCA9IG5ldyBDYXNoRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgY2FzaEQuSWQgPSBqc29uUm9vdFtpXS5JZDtcclxuICAgICAgICAgICAgICAgIGNhc2hELmNhc2ggPSBqc29uUm9vdFtpXS5jYXNoO1xyXG4gICAgICAgICAgICAgICAgY2FzaEQud2VpZ2h0ID0ganNvblJvb3RbaV0ud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhc2hMaXN0W2ldID0gY2FzaEQ7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYucmVDYih0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgJrov4flkI3lrZfmi7/liLDlvZPliY3nmoTmlbDmja4g5LiN5bu66K6u55So77yM5L2g6KaB55So5oiR5Lmf5rKh5Yqe5rOVXHJcbiAgICBnZXREYXRhQnlOYW1lOmZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNhc2hMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gdGhpcy5jYXNoTGlzdFtpXS5uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5jYXNoTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+mAmui/h2l0ZW1pZOiOt+WPluaVsOaNrlxyXG4gICAgZ2V0RGF0YUJ5SXRlbUlkOmZ1bmN0aW9uKGl0ZW1JZCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNhc2hMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW1JZCA9PSB0aGlzLmNhc2hMaXN0W2ldLklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5jYXNoTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRKc29uTGVuZ3RoOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FzaExpc3QubGVuZ3RoXHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBDYXNoTWFwRGVjb2RlcjtcclxuIl19