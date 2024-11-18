
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/SkillType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78ab2zMYnZOvIXB1cO+StpL', 'SkillType');
// Scripts/Core/SkillType.js

"use strict";

var SkillType = cc.Enum({
  WLNS: 1,
  //仓储                  1111
  THY: 2,
  //约会成功概率
  XSJY: 3,
  //每年获得一定数额金钱
  FGZJ: 4,
  //初始进入社会金钱增加   1111
  GSGL: 5,
  //增加公司收益率
  TPGS: 6,
  //公司股价上涨概率增加
  JZCC: 7,
  //结算时技能点获得增加
  MLSZ: 8,
  //约会花费降低
  DS: 9,
  //赌场赢钱概率怎加
  LDYZ: 10,
  //退休年限增加          1111
  NSCM: 11,
  //增加初始名声          1111
  QCDR: 12,
  //购买汽车价格降低
  HYLL: 13,
  //好运连连
  DCZJ: 14 //购 房价格降低
});

module.exports = SkillType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcU2tpbGxUeXBlLmpzIl0sIm5hbWVzIjpbIlNraWxsVHlwZSIsImNjIiwiRW51bSIsIldMTlMiLCJUSFkiLCJYU0pZIiwiRkdaSiIsIkdTR0wiLCJUUEdTIiwiSlpDQyIsIk1MU1oiLCJEUyIsIkxEWVoiLCJOU0NNIiwiUUNEUiIsIkhZTEwiLCJEQ1pKIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3BCQyxJQUFJLEVBQUMsQ0FBQztFQUFFO0VBQ1JDLEdBQUcsRUFBQyxDQUFDO0VBQUU7RUFDUEMsSUFBSSxFQUFDLENBQUM7RUFBQztFQUNQQyxJQUFJLEVBQUMsQ0FBQztFQUFDO0VBQ1BDLElBQUksRUFBQyxDQUFDO0VBQUM7RUFDUEMsSUFBSSxFQUFDLENBQUM7RUFBQztFQUNQQyxJQUFJLEVBQUMsQ0FBQztFQUFDO0VBQ1BDLElBQUksRUFBQyxDQUFDO0VBQUM7RUFDUEMsRUFBRSxFQUFDLENBQUM7RUFBQztFQUNMQyxJQUFJLEVBQUMsRUFBRTtFQUFDO0VBQ1JDLElBQUksRUFBQyxFQUFFO0VBQUM7RUFDUkMsSUFBSSxFQUFDLEVBQUU7RUFBQztFQUNSQyxJQUFJLEVBQUMsRUFBRTtFQUFDO0VBQ1JDLElBQUksRUFBQyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7O0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEIsU0FBUyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBTa2lsbFR5cGUgPSBjYy5FbnVtKHtcclxuICAgIFdMTlM6MSwgLy/ku5PlgqggICAgICAgICAgICAgICAgICAxMTExXHJcbiAgICBUSFk6MiwgLy/nuqbkvJrmiJDlip/mpoLnjodcclxuICAgIFhTSlk6MywvL+avj+W5tOiOt+W+l+S4gOWumuaVsOminemHkemSsVxyXG4gICAgRkdaSjo0LC8v5Yid5aeL6L+b5YWl56S+5Lya6YeR6ZKx5aKe5YqgICAgMTExMVxyXG4gICAgR1NHTDo1LC8v5aKe5Yqg5YWs5Y+45pS255uK546HXHJcbiAgICBUUEdTOjYsLy/lhazlj7jogqHku7fkuIrmtqjmpoLnjoflop7liqBcclxuICAgIEpaQ0M6NywvL+e7k+eul+aXtuaKgOiDveeCueiOt+W+l+WinuWKoFxyXG4gICAgTUxTWjo4LC8v57qm5Lya6Iqx6LS56ZmN5L2OXHJcbiAgICBEUzo5LC8v6LWM5Zy66LWi6ZKx5qaC546H5oCO5YqgXHJcbiAgICBMRFlaOjEwLC8v6YCA5LyR5bm06ZmQ5aKe5YqgICAgICAgICAgIDExMTFcclxuICAgIE5TQ006MTEsLy/lop7liqDliJ3lp4vlkI3lo7AgICAgICAgICAgMTExMVxyXG4gICAgUUNEUjoxMiwvL+i0reS5sOaxvei9puS7t+agvOmZjeS9jlxyXG4gICAgSFlMTDoxMywvL+Wlvei/kOi/nui/nlxyXG4gICAgRENaSjoxNCwvL+i0rSDmiL/ku7fmoLzpmY3kvY5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gU2tpbGxUeXBlO1xyXG4iXX0=