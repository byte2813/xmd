
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Skill/SkillMapDecoder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfb4cSI2vdF4KaViCbkpfOj', 'SkillMapDecoder');
// Scripts/DataMap/Skill/SkillMapDecoder.js

"use strict";

var SkillData = require("SkillData");
var CostData = require("CostData");
var SkillMapDecoder = cc.Class({
  "extends": cc.Component,
  properties: {
    jsonName: "skill",
    skillList: {
      "default": [],
      type: [SkillData]
    }
  },
  //解析数据
  DecodeJson: function DecodeJson(event) {
    //cc.log("===解析技能数据===");
    var self = this;
    self.reCb = event;
    cc.loader.loadRes("json/" + self.jsonName, function (error, obj) {
      if (error) {
        //cc.log("+++解析出错，查下json+++" + error);
        self.reCb(false);
        return;
      }
      var jsonRoot = obj.json.skill;
      //cc.log("===数据长度===" + jsonRoot.length);
      for (var i = 0; i < jsonRoot.length; i++) {
        var skillData = new SkillData();
        skillData.Id = jsonRoot[i].Id;
        skillData.subId = jsonRoot[i].subId;
        skillData.icon = jsonRoot[i].icon;
        skillData.desId = jsonRoot[i].desId;
        skillData.name = jsonRoot[i].name;
        skillData.skillType = jsonRoot[i].skillType;
        skillData.upLevel = jsonRoot[i].upCostList.length; //jsonRoot[i].upLevel;
        for (var j = 0; j < jsonRoot[i].upCostList.length; j++) {
          var costD = new CostData();
          costD.cost = jsonRoot[i].upCostList[j][2];
          costD.toLevel = jsonRoot[i].upCostList[j][0];
          costD.addBonus = jsonRoot[i].upCostList[j][1];
          skillData.upCostList[j] = costD;
        }
        self.skillList[i] = skillData;
      }
      self.reCb(true);
    });
  },
  //通过名字拿到当前的数据 不建议用，你要用我也没办法
  getDataByName: function getDataByName(name) {
    var data = null;
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      if (name == this.skillList[i].name) {
        data = this.skillList[i];
        break;
      }
    }
    return data;
  },
  //通过itemid获取数据
  getDataByItemId: function getDataByItemId(itemId) {
    var data = null;
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      if (itemId == this.skillList[i].Id) {
        data = this.skillList[i];
        break;
      }
    }
    return data;
  },
  getJsonLength: function getJsonLength() {
    return this.skillList.length;
  },
  getDataList: function getDataList() {
    return this.skillList;
  },
  //获取升级技能消费数据 需要提供两个 Id
  getUpgradeCostByTwoId: function getUpgradeCostByTwoId(Id, subId, tolv) {
    var Cost = 20;
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      var data = this.skillList[i];
      if (data.Id == Id && data.subId == subId) {
        for (var i = data.upCostList.length - 1; i >= 0; i--) {
          var dt = data.upCostList[i];
          if (dt.toLevel == tolv) {
            //cc.log("Id subId toLv 花费技能点===================" + dt.cost + " " + tolv);
            Cost = dt.cost;
            return dt.cost;
          }
        }
      }
    }
    return Cost;
  },
  getSkillAddBonusByTwoIdAndLv: function getSkillAddBonusByTwoIdAndLv(Id, subId, lv) {
    var bonus = 0;
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      var data = this.skillList[i];
      if (data.Id == Id && data.subId == subId) {
        for (var i = data.upCostList.length - 1; i >= 0; i--) {
          var dt = data.upCostList[i];
          if (dt.toLevel == lv) {
            bonus = dt.addBonus;
            return dt.addBonus;
          }
        }
      }
    }
    return bonus;
  },
  getSkillDataByTwoId: function getSkillDataByTwoId(Id, subId) {
    var dt = null;
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      var data = this.skillList[i];
      if (data.Id == Id && data.subId == subId) {
        dt = data;
        return data;
      }
    }
    return dt;
  },
  getSkillListById: function getSkillListById(Id) {
    var param = [];
    for (var i = this.skillList.length - 1; i >= 0; i--) {
      var data = this.skillList[i];
      if (data.Id == Id) {
        param.push(data);
      }
    }
    return param;
  }
});
module.exports = SkillMapDecoder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcU2tpbGxcXFNraWxsTWFwRGVjb2Rlci5qcyJdLCJuYW1lcyI6WyJTa2lsbERhdGEiLCJyZXF1aXJlIiwiQ29zdERhdGEiLCJTa2lsbE1hcERlY29kZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpzb25OYW1lIiwic2tpbGxMaXN0IiwidHlwZSIsIkRlY29kZUpzb24iLCJldmVudCIsInNlbGYiLCJyZUNiIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yIiwib2JqIiwianNvblJvb3QiLCJqc29uIiwic2tpbGwiLCJpIiwibGVuZ3RoIiwic2tpbGxEYXRhIiwiSWQiLCJzdWJJZCIsImljb24iLCJkZXNJZCIsIm5hbWUiLCJza2lsbFR5cGUiLCJ1cExldmVsIiwidXBDb3N0TGlzdCIsImoiLCJjb3N0RCIsImNvc3QiLCJ0b0xldmVsIiwiYWRkQm9udXMiLCJnZXREYXRhQnlOYW1lIiwiZGF0YSIsImdldERhdGFCeUl0ZW1JZCIsIml0ZW1JZCIsImdldEpzb25MZW5ndGgiLCJnZXREYXRhTGlzdCIsImdldFVwZ3JhZGVDb3N0QnlUd29JZCIsInRvbHYiLCJDb3N0IiwiZHQiLCJnZXRTa2lsbEFkZEJvbnVzQnlUd29JZEFuZEx2IiwibHYiLCJib251cyIsImdldFNraWxsRGF0YUJ5VHdvSWQiLCJnZXRTa2lsbExpc3RCeUlkIiwicGFyYW0iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlFLGVBQWUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDM0IsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDLE9B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QUNGRSxNQUFNLENBQUNDLE9BQU8sR0FBR3JELGVBQWUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTa2lsbERhdGEgPSByZXF1aXJlKFwiU2tpbGxEYXRhXCIpO1xyXG52YXIgQ29zdERhdGEgPSByZXF1aXJlKFwiQ29zdERhdGFcIik7XHJcbnZhciBTa2lsbE1hcERlY29kZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGpzb25OYW1lOlwic2tpbGxcIixcclxuICAgICAgICBza2lsbExpc3Q6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltTa2lsbERhdGFdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Kej5p6Q5pWw5o2uXHJcbiAgICBEZWNvZGVKc29uOmZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiPT096Kej5p6Q5oqA6IO95pWw5o2uPT09XCIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnJlQ2IgPSBldmVudDtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImpzb24vXCIrc2VsZi5qc29uTmFtZSwgZnVuY3Rpb24gKGVycm9yLCBvYmopIHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiKysr6Kej5p6Q5Ye66ZSZ77yM5p+l5LiLanNvbisrK1wiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZUNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGpzb25Sb290ID0gb2JqLmpzb24uc2tpbGw7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiPT095pWw5o2u6ZW/5bqmPT09XCIgKyBqc29uUm9vdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb25Sb290Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2tpbGxEYXRhID0gbmV3IFNraWxsRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLklkID0ganNvblJvb3RbaV0uSWQ7XHJcbiAgICAgICAgICAgICAgICBza2lsbERhdGEuc3ViSWQgPSBqc29uUm9vdFtpXS5zdWJJZDtcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS5pY29uID0ganNvblJvb3RbaV0uaWNvbjtcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS5kZXNJZCA9IGpzb25Sb290W2ldLmRlc0lkO1xyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLm5hbWUgPSBqc29uUm9vdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgc2tpbGxEYXRhLnNraWxsVHlwZSA9IGpzb25Sb290W2ldLnNraWxsVHlwZTtcclxuICAgICAgICAgICAgICAgIHNraWxsRGF0YS51cExldmVsID0ganNvblJvb3RbaV0udXBDb3N0TGlzdC5sZW5ndGg7Ly9qc29uUm9vdFtpXS51cExldmVsO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBqc29uUm9vdFtpXS51cENvc3RMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvc3REID0gbmV3IENvc3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29zdEQuY29zdCA9IGpzb25Sb290W2ldLnVwQ29zdExpc3Rbal1bMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29zdEQudG9MZXZlbCA9IGpzb25Sb290W2ldLnVwQ29zdExpc3Rbal1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29zdEQuYWRkQm9udXMgPSBqc29uUm9vdFtpXS51cENvc3RMaXN0W2pdWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YS51cENvc3RMaXN0W2pdID0gY29zdEQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNraWxsTGlzdFtpXSA9IHNraWxsRGF0YTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5yZUNiKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+mAmui/h+WQjeWtl+aLv+WIsOW9k+WJjeeahOaVsOaNriDkuI3lu7rorq7nlKjvvIzkvaDopoHnlKjmiJHkuZ/msqHlip7ms5VcclxuICAgIGdldERhdGFCeU5hbWU6ZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuc2tpbGxMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gdGhpcy5za2lsbExpc3RbaV0ubmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuc2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCa6L+HaXRlbWlk6I635Y+W5pWw5o2uXHJcbiAgICBnZXREYXRhQnlJdGVtSWQ6ZnVuY3Rpb24oaXRlbUlkKXtcclxuICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuc2tpbGxMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW1JZCA9PSB0aGlzLnNraWxsTGlzdFtpXS5JZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuc2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEpzb25MZW5ndGg6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5za2lsbExpc3QubGVuZ3RoXHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGFMaXN0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tpbGxMaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+iOt+WPluWNh+e6p+aKgOiDvea2iOi0ueaVsOaNriDpnIDopoHmj5DkvpvkuKTkuKogSWRcclxuICAgIGdldFVwZ3JhZGVDb3N0QnlUd29JZDpmdW5jdGlvbihJZCxzdWJJZCx0b2x2KXtcclxuICAgICAgICB2YXIgQ29zdCA9IDIwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnNraWxsTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuc2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihkYXRhLklkID09IElkICYmIGRhdGEuc3ViSWQgPT0gc3ViSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBkYXRhLnVwQ29zdExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhLnVwQ29zdExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZHQudG9MZXZlbCA9PSB0b2x2KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJJZCBzdWJJZCB0b0x2IOiKsei0ueaKgOiDveeCuT09PT09PT09PT09PT09PT09PT1cIiArIGR0LmNvc3QgKyBcIiBcIiArIHRvbHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3N0ID0gZHQuY29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR0LmNvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb3N0O1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTa2lsbEFkZEJvbnVzQnlUd29JZEFuZEx2OmZ1bmN0aW9uKElkLHN1YklkLGx2KXtcclxuICAgICAgICB2YXIgYm9udXMgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnNraWxsTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuc2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihkYXRhLklkID09IElkICYmIGRhdGEuc3ViSWQgPT0gc3ViSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBkYXRhLnVwQ29zdExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhLnVwQ29zdExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZHQudG9MZXZlbCA9PSBsdilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbnVzID0gZHQuYWRkQm9udXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkdC5hZGRCb251cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvbnVzO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTa2lsbERhdGFCeVR3b0lkOmZ1bmN0aW9uKElkLCBzdWJJZCl7XHJcbiAgICAgICAgdmFyIGR0ID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5za2lsbExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnNraWxsTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoZGF0YS5JZCA9PSBJZCAmJiBkYXRhLnN1YklkID09IHN1YklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNraWxsTGlzdEJ5SWQ6ZnVuY3Rpb24oSWQpe1xyXG4gICAgICAgIHZhciBwYXJhbSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnNraWxsTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuc2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihkYXRhLklkID09IElkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBTa2lsbE1hcERlY29kZXI7Il19