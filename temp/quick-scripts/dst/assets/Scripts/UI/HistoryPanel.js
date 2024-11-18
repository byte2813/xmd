
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/HistoryPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19978Asv5VHRJ2aT2QlyfZs', 'HistoryPanel');
// Scripts/UI/HistoryPanel.js

"use strict";

var HistoryPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    nameLbl: cc.Label,
    personNum: cc.Label,
    assetHigh: cc.Label,
    retireAsset: cc.Label,
    Million: cc.Label,
    TenMillion: cc.Label,
    HundredMillion: cc.Label
  },
  ShowPanel: function ShowPanel() {
    this.nameLbl.string = cc.Mgr.UserDataMgr.playerName;
    this.personNum.string = cc.Mgr.UserDataMgr.playTimes;
    var param = this.getRecordData();
    this.assetHigh.string = param.highAsset;
    this.retireAsset.string = param.as;
    this.Million.string = param.milltimes;
    this.TenMillion.string = param.thousend;
    this.HundredMillion.string = param.hundredmill;
  },
  getRecordData: function getRecordData() {
    //cc.log(JSON.stringify(cc.Mgr.UserDataMgr.RecordList))
    var list = cc.Mgr.UserDataMgr.RecordList;
    var allasset = 0;
    var milltimes = 0;
    var thousend = 0;
    var hundredmill = 0;
    var highAsset = list[0].highAssets;
    for (var i = 0; i < list.length; i++) {
      allasset += list[i].assets;
      if (list[i].highAssets > highAsset) {
        highAsset = list[i].highAssets;
      }
      if (list[i].level == 1) {
        milltimes += 1;
      } else if (list[i].level == 2) {
        thousend += 1;
      } else if (list[i].level == 3) {
        hundredmill += 1;
      }
    }
    var as = Math.floor(allasset / list.length);
    var param = {};
    param.as = as;
    param.milltimes = milltimes;
    param.thousend = thousend;
    param.hundredmill = hundredmill;
    param.highAsset = highAsset;
    return param;
  },
  ChangeName: function ChangeName() {
    //cc.log("===========");
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = HistoryPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEhpc3RvcnlQYW5lbC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5UGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5hbWVMYmwiLCJMYWJlbCIsInBlcnNvbk51bSIsImFzc2V0SGlnaCIsInJldGlyZUFzc2V0IiwiTWlsbGlvbiIsIlRlbk1pbGxpb24iLCJIdW5kcmVkTWlsbGlvbiIsIlNob3dQYW5lbCIsInN0cmluZyIsIk1nciIsIlVzZXJEYXRhTWdyIiwicGxheWVyTmFtZSIsInBsYXlUaW1lcyIsInBhcmFtIiwiZ2V0UmVjb3JkRGF0YSIsImhpZ2hBc3NldCIsImFzIiwibWlsbHRpbWVzIiwidGhvdXNlbmQiLCJodW5kcmVkbWlsbCIsImxpc3QiLCJSZWNvcmRMaXN0IiwiYWxsYXNzZXQiLCJoaWdoQXNzZXRzIiwiaSIsImxlbmd0aCIsImFzc2V0cyIsImxldmVsIiwiTWF0aCIsImZsb29yIiwiQ2hhbmdlTmFtZSIsIkNsb3NlUGFuZWwiLCJBdWRpb01nciIsInBsYXlTRlgiLCJub2RlIiwiYWN0aXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3hCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBQ0osRUFBRSxDQUFDSyxLQUFLO0lBQ2hCQyxTQUFTLEVBQUNOLEVBQUUsQ0FBQ0ssS0FBSztJQUNsQkUsU0FBUyxFQUFDUCxFQUFFLENBQUNLLEtBQUs7SUFDbEJHLFdBQVcsRUFBQ1IsRUFBRSxDQUFDSyxLQUFLO0lBQ3BCSSxPQUFPLEVBQUNULEVBQUUsQ0FBQ0ssS0FBSztJQUNoQkssVUFBVSxFQUFDVixFQUFFLENBQUNLLEtBQUs7SUFDbkJNLGNBQWMsRUFBQ1gsRUFBRSxDQUFDSztFQUN0QixDQUFDO0VB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Q0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHM0MsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIaXN0b3J5UGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG5hbWVMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgcGVyc29uTnVtOmNjLkxhYmVsLFxyXG4gICAgICAgIGFzc2V0SGlnaDpjYy5MYWJlbCxcclxuICAgICAgICByZXRpcmVBc3NldDpjYy5MYWJlbCxcclxuICAgICAgICBNaWxsaW9uOmNjLkxhYmVsLFxyXG4gICAgICAgIFRlbk1pbGxpb246Y2MuTGFiZWwsXHJcbiAgICAgICAgSHVuZHJlZE1pbGxpb246Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIFNob3dQYW5lbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lTGJsLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5wbGF5ZXJOYW1lO1xyXG4gICAgICAgIHRoaXMucGVyc29uTnVtLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5wbGF5VGltZXM7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbSA9IHRoaXMuZ2V0UmVjb3JkRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuYXNzZXRIaWdoLnN0cmluZyA9IHBhcmFtLmhpZ2hBc3NldDtcclxuICAgICAgICB0aGlzLnJldGlyZUFzc2V0LnN0cmluZyA9IHBhcmFtLmFzO1xyXG4gICAgICAgIHRoaXMuTWlsbGlvbi5zdHJpbmcgPSBwYXJhbS5taWxsdGltZXM7XHJcbiAgICAgICAgdGhpcy5UZW5NaWxsaW9uLnN0cmluZyA9IHBhcmFtLnRob3VzZW5kO1xyXG4gICAgICAgIHRoaXMuSHVuZHJlZE1pbGxpb24uc3RyaW5nID0gcGFyYW0uaHVuZHJlZG1pbGw7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFJlY29yZERhdGE6ZnVuY3Rpb24oKXtcclxuICAgICAgICAvL2NjLmxvZyhKU09OLnN0cmluZ2lmeShjYy5NZ3IuVXNlckRhdGFNZ3IuUmVjb3JkTGlzdCkpXHJcbiAgICAgICAgdmFyIGxpc3QgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVjb3JkTGlzdDtcclxuICAgICAgICB2YXIgYWxsYXNzZXQgPSAwO1xyXG4gICAgICAgIHZhciBtaWxsdGltZXMgPSAwO1xyXG4gICAgICAgIHZhciB0aG91c2VuZCA9IDA7XHJcbiAgICAgICAgdmFyIGh1bmRyZWRtaWxsID0gMDtcclxuICAgICAgICB2YXIgaGlnaEFzc2V0ID0gbGlzdFswXS5oaWdoQXNzZXRzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxhc3NldCArPSBsaXN0W2ldLmFzc2V0cztcclxuICAgICAgICAgICAgaWYobGlzdFtpXS5oaWdoQXNzZXRzID4gaGlnaEFzc2V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoaWdoQXNzZXQgPSBsaXN0W2ldLmhpZ2hBc3NldHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGlzdFtpXS5sZXZlbCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaWxsdGltZXMgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGxpc3RbaV0ubGV2ZWwgPT0gMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhvdXNlbmQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGxpc3RbaV0ubGV2ZWwgPT0gMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHVuZHJlZG1pbGwgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFzID0gTWF0aC5mbG9vcihhbGxhc3NldCAvIGxpc3QubGVuZ3RoKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5hcyA9IGFzO1xyXG4gICAgICAgIHBhcmFtLm1pbGx0aW1lcyA9IG1pbGx0aW1lcztcclxuICAgICAgICBwYXJhbS50aG91c2VuZCA9IHRob3VzZW5kO1xyXG4gICAgICAgIHBhcmFtLmh1bmRyZWRtaWxsID0gaHVuZHJlZG1pbGw7XHJcbiAgICAgICAgcGFyYW0uaGlnaEFzc2V0ID0gaGlnaEFzc2V0O1xyXG4gICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2hhbmdlTmFtZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vY2MubG9nKFwiPT09PT09PT09PT1cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5UGFuZWw7XHJcbiJdfQ==