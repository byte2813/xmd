
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3605deiEu1OKaROIrlGmbqV', 'Global');
// Scripts/Core/Global.js

"use strict";

var Global = cc.Class({
  "extends": cc.Component,
  statics: {
    InitGetMoneyId: 1,
    //初始获得金钱 是第几个等级

    CompanyCreateCost: 1000,
    //创办公司消耗1000手 1手= 100
    InitWareHouseCapcity: 100,
    //仓库初始容量
    AssetExplorRate: 5,
    //资产暴涨定位 5倍
    AssetExplorDownRate: 0.6,
    //资产暴涨定位 5倍
    AssetBurden: 30,
    //财富暴涨造成健康指数下降
    YearRecover: 1,
    //需要两年恢复健康
    DateSuccescRatio: 0.3,
    //约会到人的概率是 0.2
    LastEventAge: 27,
    //上一次事件发生的年龄
    AddCapacityCost: 10000,
    //扩充一个仓储容量 消耗的金钱
    BetWinRatio: 0.3,
    //赌博赢钱比例 先设定为 15%
    RetireInitAge: 70,
    //退休基础年龄
    HealthLine: 50,
    //健康值红线

    showStockProfit: false,
    //显示股票收益

    HasCompanyReputationAdd: 4,
    //拥有公司时候 会增加的名声 每年

    GoodsForeId: -1,
    //市场前瞻用的保留数据 Id
    //以下是可变动数据

    TempAdsBonus: 0,
    //临时广告加成
    TempAdsBetBonus: 0,
    TempAdsAssetBonus: 0,
    TempAdsStockBonus: 0,
    BetInitCost: 1000,
    //赌博初始花费
    DateInitCost: 1000,
    //约会的最低起价 今后每次递增 2 倍

    tmpRetireAgeBonues: 5,
    //临时广告退休年龄加成
    useRetireAds: false,
    //成就完成所需数据记录
    goToHospital: 0,
    //进入医院次数
    BankruptTimes: 0,
    //破产次数
    CreateCompanyTimes: 0,
    //创业次数

    tutorialGoodsId: -1,
    tutorialStep: -1,
    // -1 表示不在引导序列  采用 11 表示第一个大步骤 第一小步
    tutorialInDate: false,
    tutorialInBus: false,
    HealthSubAge: 40,
    //多少岁开始健康随年龄下降
    //健康状态
    HpStateA: 80,
    HpStateB: 55,
    HpStateC: 54,
    //赌博赢钱的概率 累加形式
    BetWinNullRatio: 0.69,
    BetWinThreeRatio: 0.85,
    BetWinFourRatio: 0.95,
    BetWinFiveRatio: 1.0,
    //是否激活了什么
    hasActiveGuShen: false,
    hasActiveCaiShen: false,
    hasActiveDuShen: false,
    hasActiveAiShen: false,
    InitChangeData: function InitChangeData() {
      this.GoodsForeId = -1;
      this.tutorialGoodsId = -1;
      this.tutorialInBus = false;
      this.tutorialInDate = false;
      this.tutorialStep = -1;
      this.BetInitCost = 1000; //赌博初始花费
      this.DateInitCost = 1000; //约会的最低起价 今后每次递增 2 倍

      this.showStockProfit = false;
      this.useRetireAds = false, this.tmpRetireAgeBonues = 5;
      this.BetWinRatio = 0.25;
      this.TempAdsBonus = 0;
      this.TempAdsStockBonus = 0;
      this.TempAdsAssetBonus = 0;
      this.TempAdsBetBonus = 0;

      //成就完成所需数据记录
      this.goToHospital = 0; //进入医院次数
      this.BankruptTimes = 0; //破产次数
      this.CreateCompanyTimes = 0; //创业次数

      //之前激活
      this.hasActiveAiShen = false;
      this.hasActiveDuShen = false;
      this.hasActiveCaiShen = false;
      this.hasActiveGuShen = false;
    },
    InitEventHappenAge: function InitEventHappenAge() {
      this.LastEventAge = 25 + Math.floor(Math.random() * 6);
    },
    //生成一个随机整数  在 index1 - index2之间
    SpawnSeedBetweenTwoNum: function SpawnSeedBetweenTwoNum(index1, index2) {
      var seed = index1 + Math.floor(Math.random() * (index2 - index1 + 1));
      return seed;
    },
    getTranslation: function getTranslation(desId) {
      for (var prop in cc.director.NoticeText) {
        if (prop.toString() == desId) {
          return cc.director.NoticeText[prop];
        }
      }
      var des = "翻译字段null";
      return des;
    },
    FormatNum: function FormatNum(num) {
      num = num + '';
      var str = "";
      for (var i = num.length - 1, j = 1; i >= 0; i--, j++) {
        if (j % 3 == 0 && i != 0) {
          //每隔三位加逗号，过滤正好在第一个数字的情况  
          str += num[i] + ","; //加千分位逗号  
          continue;
        }
        str += num[i]; //倒着累加数字
      }

      var out = str.split('').reverse().join(""); //字符串=>数组=>反转=>字符串
      if (out[0] == ',') return out.splice(0, 1);
      return out;
    }
  }
});
module.exports = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcR2xvYmFsLmpzIl0sIm5hbWVzIjpbIkdsb2JhbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJzdGF0aWNzIiwiSW5pdEdldE1vbmV5SWQiLCJDb21wYW55Q3JlYXRlQ29zdCIsIkluaXRXYXJlSG91c2VDYXBjaXR5IiwiQXNzZXRFeHBsb3JSYXRlIiwiQXNzZXRFeHBsb3JEb3duUmF0ZSIsIkFzc2V0QnVyZGVuIiwiWWVhclJlY292ZXIiLCJEYXRlU3VjY2VzY1JhdGlvIiwiTGFzdEV2ZW50QWdlIiwiQWRkQ2FwYWNpdHlDb3N0IiwiQmV0V2luUmF0aW8iLCJSZXRpcmVJbml0QWdlIiwiSGVhbHRoTGluZSIsInNob3dTdG9ja1Byb2ZpdCIsIkhhc0NvbXBhbnlSZXB1dGF0aW9uQWRkIiwiR29vZHNGb3JlSWQiLCJUZW1wQWRzQm9udXMiLCJUZW1wQWRzQmV0Qm9udXMiLCJUZW1wQWRzQXNzZXRCb251cyIsIlRlbXBBZHNTdG9ja0JvbnVzIiwiQmV0SW5pdENvc3QiLCJEYXRlSW5pdENvc3QiLCJ0bXBSZXRpcmVBZ2VCb251ZXMiLCJ1c2VSZXRpcmVBZHMiLCJnb1RvSG9zcGl0YWwiLCJCYW5rcnVwdFRpbWVzIiwiQ3JlYXRlQ29tcGFueVRpbWVzIiwidHV0b3JpYWxHb29kc0lkIiwidHV0b3JpYWxTdGVwIiwidHV0b3JpYWxJbkRhdGUiLCJ0dXRvcmlhbEluQnVzIiwiSGVhbHRoU3ViQWdlIiwiSHBTdGF0ZUEiLCJIcFN0YXRlQiIsIkhwU3RhdGVDIiwiQmV0V2luTnVsbFJhdGlvIiwiQmV0V2luVGhyZWVSYXRpbyIsIkJldFdpbkZvdXJSYXRpbyIsIkJldFdpbkZpdmVSYXRpbyIsImhhc0FjdGl2ZUd1U2hlbiIsImhhc0FjdGl2ZUNhaVNoZW4iLCJoYXNBY3RpdmVEdVNoZW4iLCJoYXNBY3RpdmVBaVNoZW4iLCJJbml0Q2hhbmdlRGF0YSIsIkluaXRFdmVudEhhcHBlbkFnZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlNwYXduU2VlZEJldHdlZW5Ud29OdW0iLCJpbmRleDEiLCJpbmRleDIiLCJzZWVkIiwiZ2V0VHJhbnNsYXRpb24iLCJkZXNJZCIsInByb3AiLCJkaXJlY3RvciIsIk5vdGljZVRleHQiLCJ0b1N0cmluZyIsImRlcyIsIkZvcm1hdE51bSIsIm51bSIsInN0ciIsImkiLCJsZW5ndGgiLCJqIiwib3V0Iiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInNwbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNsQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLE9BQU8sRUFBRTtJQUNMQyxjQUFjLEVBQUMsQ0FBQztJQUFDOztJQUVwQkMsaUJBQWlCLEVBQUMsSUFBSTtJQUFDO0lBQ3ZCQyxvQkFBb0IsRUFBQyxHQUFHO0lBQUM7SUFDekJDLGVBQWUsRUFBQyxDQUFDO0lBQUM7SUFDZkMsbUJBQW1CLEVBQUMsR0FBRztJQUFDO0lBQzNCQyxXQUFXLEVBQUMsRUFBRTtJQUFFO0lBQ2hCQyxXQUFXLEVBQUMsQ0FBQztJQUFFO0lBQ2ZDLGdCQUFnQixFQUFDLEdBQUc7SUFBRTtJQUNuQkMsWUFBWSxFQUFDLEVBQUU7SUFBQztJQUNoQkMsZUFBZSxFQUFDLEtBQUs7SUFBQztJQUN6QkMsV0FBVyxFQUFDLEdBQUc7SUFBQztJQUNiQyxhQUFhLEVBQUMsRUFBRTtJQUFDO0lBQ2pCQyxVQUFVLEVBQUMsRUFBRTtJQUFDOztJQUVkQyxlQUFlLEVBQUMsS0FBSztJQUFDOztJQUV0QkMsdUJBQXVCLEVBQUMsQ0FBQztJQUFFOztJQUUzQkMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUFFO0lBQ2hCOztJQUVBQyxZQUFZLEVBQUMsQ0FBQztJQUFFO0lBQ2hCQyxlQUFlLEVBQUMsQ0FBQztJQUNqQkMsaUJBQWlCLEVBQUMsQ0FBQztJQUNuQkMsaUJBQWlCLEVBQUMsQ0FBQztJQUVu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TUFBTSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBHbG9iYWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhdGljczoge1xyXG4gICAgICAgIEluaXRHZXRNb25leUlkOjEsLy/liJ3lp4vojrflvpfph5HpkrEg5piv56ys5Yeg5Liq562J57qnXHJcblxyXG4gICAgXHRDb21wYW55Q3JlYXRlQ29zdDoxMDAwLC8v5Yib5Yqe5YWs5Y+45raI6ICXMTAwMOaJiyAx5omLPSAxMDBcclxuICAgIFx0SW5pdFdhcmVIb3VzZUNhcGNpdHk6MTAwLC8v5LuT5bqT5Yid5aeL5a656YePXHJcbiAgICBcdEFzc2V0RXhwbG9yUmF0ZTo1LC8v6LWE5Lqn5pq05rao5a6a5L2NIDXlgI1cclxuICAgICAgICBBc3NldEV4cGxvckRvd25SYXRlOjAuNiwvL+i1hOS6p+aatOa2qOWumuS9jSA15YCNXHJcbiAgICBcdEFzc2V0QnVyZGVuOjMwLCAvL+i0ouWvjOaatOa2qOmAoOaIkOWBpeW6t+aMh+aVsOS4i+mZjVxyXG4gICAgXHRZZWFyUmVjb3ZlcjoxLCAvL+mcgOimgeS4pOW5tOaBouWkjeWBpeW6t1xyXG4gICAgXHREYXRlU3VjY2VzY1JhdGlvOjAuMywgLy/nuqbkvJrliLDkurrnmoTmpoLnjofmmK8gMC4yXHJcbiAgICAgICAgTGFzdEV2ZW50QWdlOjI3LC8v5LiK5LiA5qyh5LqL5Lu25Y+R55Sf55qE5bm06b6EXHJcbiAgICAgICAgQWRkQ2FwYWNpdHlDb3N0OjEwMDAwLC8v5omp5YWF5LiA5Liq5LuT5YKo5a656YePIOa2iOiAl+eahOmHkemSsVxyXG4gICAgXHRCZXRXaW5SYXRpbzowLjMsLy/otYzljZrotaLpkrHmr5Tkvosg5YWI6K6+5a6a5Li6IDE1JVxyXG4gICAgICAgIFJldGlyZUluaXRBZ2U6NzAsLy/pgIDkvJHln7rnoYDlubTpvoRcclxuICAgICAgICBIZWFsdGhMaW5lOjUwLC8v5YGl5bq35YC857qi57q/XHJcblxyXG4gICAgICAgIHNob3dTdG9ja1Byb2ZpdDpmYWxzZSwvL+aYvuekuuiCoeelqOaUtuebilxyXG5cclxuICAgICAgICBIYXNDb21wYW55UmVwdXRhdGlvbkFkZDo0LCAvL+aLpeacieWFrOWPuOaXtuWAmSDkvJrlop7liqDnmoTlkI3lo7Ag5q+P5bm0XHJcblxyXG4gICAgICAgIEdvb2RzRm9yZUlkOi0xLCAvL+W4guWcuuWJjeeeu+eUqOeahOS/neeVmeaVsOaNriBJZFxyXG4gICAgICAgIC8v5Lul5LiL5piv5Y+v5Y+Y5Yqo5pWw5o2uXHJcblxyXG4gICAgICAgIFRlbXBBZHNCb251czowLCAvL+S4tOaXtuW5v+WRiuWKoOaIkFxyXG4gICAgICAgIFRlbXBBZHNCZXRCb251czowLFxyXG4gICAgICAgIFRlbXBBZHNBc3NldEJvbnVzOjAsXHJcbiAgICAgICAgVGVtcEFkc1N0b2NrQm9udXM6MCxcclxuXHJcbiAgICAgICAgQmV0SW5pdENvc3Q6MTAwMCwvL+i1jOWNmuWIneWni+iKsei0uVxyXG4gICAgICAgIERhdGVJbml0Q29zdDoxMDAwLCAvL+e6puS8mueahOacgOS9jui1t+S7tyDku4rlkI7mr4/mrKHpgJLlop4gMiDlgI1cclxuXHJcbiAgICAgICAgdG1wUmV0aXJlQWdlQm9udWVzOjUsLy/kuLTml7blub/lkYrpgIDkvJHlubTpvoTliqDmiJBcclxuICAgICAgICB1c2VSZXRpcmVBZHM6ZmFsc2UsXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/miJDlsLHlrozmiJDmiYDpnIDmlbDmja7orrDlvZVcclxuICAgICAgICBnb1RvSG9zcGl0YWw6MCwgLy/ov5vlhaXljLvpmaLmrKHmlbBcclxuICAgICAgICBCYW5rcnVwdFRpbWVzOjAsIC8v56C05Lqn5qyh5pWwXHJcbiAgICAgICAgQ3JlYXRlQ29tcGFueVRpbWVzOjAsLy/liJvkuJrmrKHmlbBcclxuXHJcbiAgICAgICAgdHV0b3JpYWxHb29kc0lkOi0xLFxyXG4gICAgICAgIHR1dG9yaWFsU3RlcDotMSwvLyAtMSDooajnpLrkuI3lnKjlvJXlr7zluo/liJcgIOmHh+eUqCAxMSDooajnpLrnrKzkuIDkuKrlpKfmraXpqqQg56ys5LiA5bCP5q2lXHJcbiAgICAgICAgdHV0b3JpYWxJbkRhdGU6ZmFsc2UsXHJcbiAgICAgICAgdHV0b3JpYWxJbkJ1czpmYWxzZSxcclxuXHJcbiAgICAgICAgSGVhbHRoU3ViQWdlOjQwLCAvL+WkmuWwkeWygeW8gOWni+WBpeW6t+maj+W5tOm+hOS4i+mZjVxyXG4gICAgICAgIC8v5YGl5bq354q25oCBXHJcbiAgICAgICAgSHBTdGF0ZUE6ODAsXHJcbiAgICAgICAgSHBTdGF0ZUI6NTUsXHJcbiAgICAgICAgSHBTdGF0ZUM6NTQsXHJcblxyXG4gICAgICAgIC8v6LWM5Y2a6LWi6ZKx55qE5qaC546HIOe0r+WKoOW9ouW8j1xyXG4gICAgICAgIEJldFdpbk51bGxSYXRpbzowLjY5LFxyXG4gICAgICAgIEJldFdpblRocmVlUmF0aW86MC44NSxcclxuICAgICAgICBCZXRXaW5Gb3VyUmF0aW86MC45NSxcclxuICAgICAgICBCZXRXaW5GaXZlUmF0aW86MS4wLFxyXG5cclxuXHJcbiAgICAgICAgLy/mmK/lkKbmv4DmtLvkuobku4DkuYhcclxuICAgICAgICBoYXNBY3RpdmVHdVNoZW46ZmFsc2UsXHJcbiAgICAgICAgaGFzQWN0aXZlQ2FpU2hlbjpmYWxzZSxcclxuICAgICAgICBoYXNBY3RpdmVEdVNoZW46ZmFsc2UsXHJcbiAgICAgICAgaGFzQWN0aXZlQWlTaGVuOmZhbHNlLFxyXG5cclxuICAgICAgICBJbml0Q2hhbmdlRGF0YTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkdvb2RzRm9yZUlkID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxHb29kc0lkID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxJbkJ1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsSW5EYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxTdGVwID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuQmV0SW5pdENvc3QgPSAxMDAwOy8v6LWM5Y2a5Yid5aeL6Iqx6LS5XHJcbiAgICAgICAgICAgIHRoaXMuRGF0ZUluaXRDb3N0ID0gMTAwMDsgLy/nuqbkvJrnmoTmnIDkvY7otbfku7cg5LuK5ZCO5q+P5qyh6YCS5aKeIDIg5YCNXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dTdG9ja1Byb2ZpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVJldGlyZUFkcyA9IGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLnRtcFJldGlyZUFnZUJvbnVlcyA9IDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkJldFdpblJhdGlvID0gMC4yNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGVtcEFkc0JvbnVzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5UZW1wQWRzU3RvY2tCb251cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuVGVtcEFkc0Fzc2V0Qm9udXMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlRlbXBBZHNCZXRCb251cyA9IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL+aIkOWwseWujOaIkOaJgOmcgOaVsOaNruiusOW9lVxyXG4gICAgICAgICAgICB0aGlzLmdvVG9Ib3NwaXRhbCA9IDA7IC8v6L+b5YWl5Yy76Zmi5qyh5pWwXHJcbiAgICAgICAgICAgIHRoaXMuQmFua3J1cHRUaW1lcyA9IDA7IC8v56C05Lqn5qyh5pWwXHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlQ29tcGFueVRpbWVzID0gMDsvL+WIm+S4muasoeaVsFxyXG5cclxuICAgICAgICAgICAgLy/kuYvliY3mv4DmtLtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY3RpdmVBaVNoZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY3RpdmVEdVNoZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY3RpdmVDYWlTaGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWN0aXZlR3VTaGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5pdEV2ZW50SGFwcGVuQWdlOmZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuTGFzdEV2ZW50QWdlID0gMjUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL+eUn+aIkOS4gOS4qumaj+acuuaVtOaVsCAg5ZyoIGluZGV4MSAtIGluZGV4MuS5i+mXtFxyXG4gICAgICAgIFNwYXduU2VlZEJldHdlZW5Ud29OdW06ZnVuY3Rpb24oaW5kZXgxLCBpbmRleDIpe1xyXG4gICAgICAgICAgICB2YXIgc2VlZCA9IGluZGV4MSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpbmRleDIgLSBpbmRleDEgKyAxKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWVkO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBnZXRUcmFuc2xhdGlvbjpmdW5jdGlvbihkZXNJZCl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gY2MuZGlyZWN0b3IuTm90aWNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYocHJvcC50b1N0cmluZygpID09IGRlc0lkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy5kaXJlY3Rvci5Ob3RpY2VUZXh0W3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkZXMgPSBcIue/u+ivkeWtl+autW51bGxcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGRlcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBGb3JtYXROdW06ZnVuY3Rpb24obnVtKXtcclxuICAgICAgICAgICAgbnVtID0gbnVtICsnJztcclxuICAgICAgICAgICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT1udW0ubGVuZ3RoLSAxLGo9MTtpPj0wO2ktLSxqKyspeyAgXHJcbiAgICAgICAgICAgICAgICBpZihqJTM9PTAgJiYgaSE9MCl7Ly/mr4/pmpTkuInkvY3liqDpgJflj7fvvIzov4fmu6TmraPlpb3lnKjnrKzkuIDkuKrmlbDlrZfnmoTmg4XlhrUgIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cis9bnVtW2ldK1wiLFwiOy8v5Yqg5Y2D5YiG5L2N6YCX5Y+3ICBcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgIFxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBzdHIrPW51bVtpXTsvL+WAkuedgOe0r+WKoOaVsOWtl1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgdmFyIG91dCA9IHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oXCJcIik7Ly/lrZfnrKbkuLI9PuaVsOe7hD0+5Y+N6L2sPT7lrZfnrKbkuLJcclxuICAgICAgICAgICAgaWYob3V0WzBdID09ICcsJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQuc3BsaWNlKDAsMSlcclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsO1xyXG4iXX0=