
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/AchieveCond.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d3adUN5n5Hv7wPNOxwCZc9', 'AchieveCond');
// Scripts/Core/AchieveCond.js

"use strict";

var AchieveCond = cc.Enum({
  AssetMoneyUp: 1,
  //资产超过
  InHospital: 2,
  //住院
  Bankrupt: 3,
  //公司破产
  CreateBusiness: 4,
  //创办公司
  AgeCond: 5,
  //年龄限制

  HasMarryCond: 6,
  //是否已婚
  LovePointCond: 7,
  //亲密度要求
  AssetMoneyDown: 8,
  //资产低于
  NoMarryCond: 9,
  //没结婚
  AgeCondUp: 10 //年龄限制
});

module.exports = AchieveCond;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcQWNoaWV2ZUNvbmQuanMiXSwibmFtZXMiOlsiQWNoaWV2ZUNvbmQiLCJjYyIsIkVudW0iLCJBc3NldE1vbmV5VXAiLCJJbkhvc3BpdGFsIiwiQmFua3J1cHQiLCJDcmVhdGVCdXNpbmVzcyIsIkFnZUNvbmQiLCJIYXNNYXJyeUNvbmQiLCJMb3ZlUG9pbnRDb25kIiwiQXNzZXRNb25leURvd24iLCJOb01hcnJ5Q29uZCIsIkFnZUNvbmRVcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFHQyxFQUFFLENBQUNDLElBQUksQ0FBQztFQUN0QkMsWUFBWSxFQUFDLENBQUM7RUFBRTtFQUNoQkMsVUFBVSxFQUFDLENBQUM7RUFBQztFQUNiQyxRQUFRLEVBQUMsQ0FBQztFQUFFO0VBQ1pDLGNBQWMsRUFBQyxDQUFDO0VBQUU7RUFDbEJDLE9BQU8sRUFBQyxDQUFDO0VBQUM7O0VBRVZDLFlBQVksRUFBQyxDQUFDO0VBQUM7RUFDZkMsYUFBYSxFQUFDLENBQUM7RUFBQztFQUNoQkMsY0FBYyxFQUFDLENBQUM7RUFBQztFQUNqQkMsV0FBVyxFQUFDLENBQUM7RUFBRTtFQUNmQyxTQUFTLEVBQUMsRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQzs7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdkLFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgQWNoaWV2ZUNvbmQgPSBjYy5FbnVtKHtcclxuICAgIEFzc2V0TW9uZXlVcDoxLCAvL+i1hOS6p+i2hei/h1xyXG4gICAgSW5Ib3NwaXRhbDoyLC8v5L2P6ZmiXHJcbiAgICBCYW5rcnVwdDozLCAvL+WFrOWPuOegtOS6p1xyXG4gICAgQ3JlYXRlQnVzaW5lc3M6NCwgLy/liJvlip7lhazlj7hcclxuICAgIEFnZUNvbmQ6NSwvL+W5tOm+hOmZkOWItlxyXG5cclxuICAgIEhhc01hcnJ5Q29uZDo2LC8v5piv5ZCm5bey5amaXHJcbiAgICBMb3ZlUG9pbnRDb25kOjcsLy/kurLlr4bluqbopoHmsYJcclxuICAgIEFzc2V0TW9uZXlEb3duOjgsLy/otYTkuqfkvY7kuo5cclxuICAgIE5vTWFycnlDb25kOjksIC8v5rKh57uT5amaXHJcbiAgICBBZ2VDb25kVXA6MTAsLy/lubTpvoTpmZDliLZcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQWNoaWV2ZUNvbmQ7XHJcbiJdfQ==