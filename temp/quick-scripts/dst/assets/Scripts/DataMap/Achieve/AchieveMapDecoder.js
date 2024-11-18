
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Achieve/AchieveMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63e14JvuXxIE4rXB3/Zgd5X', 'AchieveMapDecoder');
// Scripts/DataMap/Achieve/AchieveMapDecoder.js

"use strict";

var AchieveCondData = require("AchieveCondData");
var AchieveData = require("AchieveData");
var AchieveMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "achieve",
    achieveList: {
      "default": [],
      type: [AchieveData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析成就数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.achieve;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var comData = new AchieveData();
        comData.Id = jsonRoot[i].Id;
        comData.name = jsonRoot[i].name;
        comData.icon = jsonRoot[i].icon;
        comData.desId = jsonRoot[i].desId;
        //完成条件
        for (var j = 0; j < jsonRoot[i].condList.length; j++) {
          var condData = new AchieveCondData();
          var dt = jsonRoot[i].condList[j];
          condData.condType = dt[0];
          condData.value = dt[1];
          comData.condList[j] = condData;
        }
        self.achieveList[i] = comData;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.achieveList.length - 1; i >= 0; i--) {
      if (name == this.achieveList[i].name) {
        data = this.achieveList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.achieveList.length - 1; i >= 0; i--) {
      if (itemId == this.achieveList[i].Id) {
        data = this.achieveList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.achieveList.length;
  },
  getDataList: function getDataList() {
    return this.achieveList;
  }
});
module.exports = AchieveMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQWNoaWV2ZVxcQWNoaWV2ZU1hcERlY29kZXIuanMiXSwibmFtZXMiOlsiQWNoaWV2ZUNvbmREYXRhIiwicmVxdWlyZSIsIkFjaGlldmVEYXRhIiwiQWNoaWV2ZU1hcERlY29kZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpzb25OYW1lIiwiYWNoaWV2ZUxpc3QiLCJ0eXBlIiwiRGVjb2RlSnNvbiIsImV2ZW50Iiwic2VsZiIsInJlQ2IiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyb3IiLCJvYmoiLCJqc29uUm9vdCIsImpzb24iLCJhY2hpZXZlIiwiaSIsImxlbmd0aCIsImNvbURhdGEiLCJJZCIsIm5hbWUiLCJpY29uIiwiZGVzSWQiLCJqIiwiY29uZExpc3QiLCJjb25kRGF0YSIsImR0IiwiY29uZFR5cGUiLCJ2YWx1ZSIsImdldERhdGFCeU5hbWUiLCJkYXRhIiwiZ2V0RGF0YUJ5SXRlbUlkIiwiaXRlbUlkIiwiZ2V0SnNvbkxlbmd0aCIsImdldERhdGFMaXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxlQUFlLEdBQUdDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRCxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUUsaUJBQWlCLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQzdCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQyxTQUFTO0lBQ2xCQyxXQUFXLEVBQUM7TUFDUixXQUFRLEVBQUU7TUFDVkMsSUFBSSxFQUFDLENBQUNSLFdBQVc7SUFDckI7RUFDSixDQUFDO0VBRUQ7RUFDQVMsVUFBVSxFQUFDLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN4QjtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFJO0lB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QUNmLENBQUM7RUFFREcsYUFBYSxFQUFDLFNBQUFBLGNBQUEsRUFBVTtJQUNwQixPQUFPLElBQUksQ0FBQzlCLFdBQVcsQ0FBQ2MsTUFBTTtFQUNsQyxDQUFDO0VBRURpQixXQUFXLEVBQUMsU0FBQUEsWUFBQSxFQUFVO0lBQ2xCLE9BQU8sSUFBSSxDQUFDL0IsV0FBVztFQUMzQjtBQUNKLENBQUMsQ0FBQztBQUNGZ0MsTUFBTSxDQUFDQyxPQUFPLEdBQUd2QyxpQkFBaUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBY2hpZXZlQ29uZERhdGEgPSByZXF1aXJlKFwiQWNoaWV2ZUNvbmREYXRhXCIpO1xyXG52YXIgQWNoaWV2ZURhdGEgPSByZXF1aXJlKFwiQWNoaWV2ZURhdGFcIik7XHJcbnZhciBBY2hpZXZlTWFwRGVjb2RlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAganNvbk5hbWU6XCJhY2hpZXZlXCIsXHJcbiAgICAgICAgYWNoaWV2ZUxpc3Q6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltBY2hpZXZlRGF0YV0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy/op6PmnpDmlbDmja5cclxuICAgIERlY29kZUpzb246ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCI9PT3op6PmnpDmiJDlsLHmlbDmja49PT1cIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYucmVDYiA9IGV2ZW50O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwianNvbi9cIitzZWxmLmpzb25OYW1lLCBmdW5jdGlvbiAoZXJyb3IsIG9iaikge1xyXG4gICAgICAgICAgICBpZihlcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCIrKyvop6PmnpDlh7rplJnvvIzmn6XkuItqc29uKysrXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlQ2IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIganNvblJvb3QgPSBvYmouanNvbi5hY2hpZXZlO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIj09PeaVsOaNrumVv+W6pj09PVwiICsganNvblJvb3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uUm9vdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbURhdGEgPSBuZXcgQWNoaWV2ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGNvbURhdGEuSWQgPSBqc29uUm9vdFtpXS5JZDtcclxuICAgICAgICAgICAgICAgIGNvbURhdGEubmFtZSA9IGpzb25Sb290W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb21EYXRhLmljb24gPSBqc29uUm9vdFtpXS5pY29uO1xyXG4gICAgICAgICAgICAgICAgY29tRGF0YS5kZXNJZCA9IGpzb25Sb290W2ldLmRlc0lkO1xyXG4gICAgICAgICAgICAgICAgLy/lrozmiJDmnaHku7ZcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwganNvblJvb3RbaV0uY29uZExpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZERhdGEgPSBuZXcgQWNoaWV2ZUNvbmREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR0ID0ganNvblJvb3RbaV0uY29uZExpc3Rbal07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZERhdGEuY29uZFR5cGUgPSBkdFswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25kRGF0YS52YWx1ZSA9IGR0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbURhdGEuY29uZExpc3Rbal0gPSBjb25kRGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2VsZi5hY2hpZXZlTGlzdFtpXSA9IGNvbURhdGE7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYucmVDYih0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgJrov4flkI3lrZfmi7/liLDlvZPliY3nmoTmlbDmja4g5LiN5bu66K6u55So77yM5L2g6KaB55So5oiR5Lmf5rKh5Yqe5rOVXHJcbiAgICBnZXREYXRhQnlOYW1lOmZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFjaGlldmVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gdGhpcy5hY2hpZXZlTGlzdFtpXS5uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5hY2hpZXZlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+mAmui/h2l0ZW1pZOiOt+WPluaVsOaNrlxyXG4gICAgZ2V0RGF0YUJ5SXRlbUlkOmZ1bmN0aW9uKGl0ZW1JZCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFjaGlldmVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW1JZCA9PSB0aGlzLmFjaGlldmVMaXN0W2ldLklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5hY2hpZXZlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRKc29uTGVuZ3RoOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNoaWV2ZUxpc3QubGVuZ3RoXHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGFMaXN0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNoaWV2ZUxpc3Q7XHJcbiAgICB9LFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBBY2hpZXZlTWFwRGVjb2RlcjtcclxuIl19