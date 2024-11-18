
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/Event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19fbasFZxBOI4hgnBazod2R', 'Event');
// Scripts/Core/Event.js

"use strict";

var Event = cc.Class({
  "extends": cc.Component,
  statics: {
    ParseFinish: "ParseFinish",
    //解析数据完毕
    //StartScene
    AchieveTip: "AchieveTip",
    OpenUpgradeSkill: "OpenUpgradeSkill",
    AddWareHouseCapacity: "AddWareHouseCapacity",
    //增加仓储容量
    OpenEventTip: "OpenEventTip",
    OpenStockBonus: "OpenStockBonus",
    RefreshCashAsset: "RefreshCashAsset",
    //提醒刷新 现金和资产

    //GameScene
    OpenBuyTip: "OpenBuyTip",
    //打开购买窗口
    OpenSaleTip: "OpenSaleTip",
    //打开出售窗口
    OpenCommonTip: "OpenCommonTip",
    OpenCompanyCreate: "OpenCompanyCreate",
    //创办公司
    OpenStuckBuyTip: "OpenStuckBuyTip",
    //买入公司股票
    OpenStuckSaleTip: "OpenStuckSaleTip",
    //出售公司股票
    BuySuccess: "BuySuccess",
    //
    SaleSuccess: "SaleSuccess",
    //
    CreateCompanySuccess: "CreateCompanySuccess",
    //创办公司成立
    BuyStockSuccess: "BuyStockSuccess",
    //购买股票成立
    SaleStockSuccess: "SaleStockSuccess",
    //抛售股票成立
    OpenMateTip: "OpenMateTip",
    //打开约会提示
    DateSuccess: "DateSuccess",
    //约上了
    OpenCommonBuy: "OpenCommonBuy",
    //打开公用购买 汽车和房子
    CommonBuySaleSuccess: "CommonBuySuccess",
    //通用购买 出售成功
    TreatSuccess: "TreatSuccess",
    //治疗成功
    OpenBetTip: "OpenBetTip",
    //打开赌博
    BetOk: "BetOk",
    //赌博完成
    Retire: "Retire",
    //退休
    OpenEventResult: "OpenEventResult",
    OpenMarry: "OpenMarry",
    OpenTutorial: "OpenTutorial",
    //通知打开引导窗口

    ClockEnd: "ClockEnd",
    //时间转圈结束
    UseRetireAdsSkill: "UseRetireAdsSkill",
    //使用退休广告加持

    RefreshAllUIShow: "RefreshAllUIShow",
    //刷新全部Ui
    OpenUnLockMate: "OpenUnLockMate",
    DateLater: "DateLater",
    ShowRank: "ShowRank",
    OpenEnjoy: "OpenEnjoy",
    //打开花钱面板

    ShareVideo: "ShareVideo" //分享录屏
  }
});

module.exports = Event;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcRXZlbnQuanMiXSwibmFtZXMiOlsiRXZlbnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RhdGljcyIsIlBhcnNlRmluaXNoIiwiQWNoaWV2ZVRpcCIsIk9wZW5VcGdyYWRlU2tpbGwiLCJBZGRXYXJlSG91c2VDYXBhY2l0eSIsIk9wZW5FdmVudFRpcCIsIk9wZW5TdG9ja0JvbnVzIiwiUmVmcmVzaENhc2hBc3NldCIsIk9wZW5CdXlUaXAiLCJPcGVuU2FsZVRpcCIsIk9wZW5Db21tb25UaXAiLCJPcGVuQ29tcGFueUNyZWF0ZSIsIk9wZW5TdHVja0J1eVRpcCIsIk9wZW5TdHVja1NhbGVUaXAiLCJCdXlTdWNjZXNzIiwiU2FsZVN1Y2Nlc3MiLCJDcmVhdGVDb21wYW55U3VjY2VzcyIsIkJ1eVN0b2NrU3VjY2VzcyIsIlNhbGVTdG9ja1N1Y2Nlc3MiLCJPcGVuTWF0ZVRpcCIsIkRhdGVTdWNjZXNzIiwiT3BlbkNvbW1vbkJ1eSIsIkNvbW1vbkJ1eVNhbGVTdWNjZXNzIiwiVHJlYXRTdWNjZXNzIiwiT3BlbkJldFRpcCIsIkJldE9rIiwiUmV0aXJlIiwiT3BlbkV2ZW50UmVzdWx0IiwiT3Blbk1hcnJ5IiwiT3BlblR1dG9yaWFsIiwiQ2xvY2tFbmQiLCJVc2VSZXRpcmVBZHNTa2lsbCIsIlJlZnJlc2hBbGxVSVNob3ciLCJPcGVuVW5Mb2NrTWF0ZSIsIkRhdGVMYXRlciIsIlNob3dSYW5rIiwiT3BlbkVuam95IiwiU2hhcmVWaWRlbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNqQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLE9BQU8sRUFBQztJQUNKQyxXQUFXLEVBQUMsYUFBYTtJQUFDO0lBQzFCO0lBQ0FDLFVBQVUsRUFBQyxZQUFZO0lBQ3ZCQyxnQkFBZ0IsRUFBQyxrQkFBa0I7SUFDbkNDLG9CQUFvQixFQUFDLHNCQUFzQjtJQUFDO0lBQzVDQyxZQUFZLEVBQUMsY0FBYztJQUMzQkMsY0FBYyxFQUFDLGdCQUFnQjtJQUcvQkMsZ0JBQWdCLEVBQUMsa0JBQWtCO0lBQUM7O0lBRXBDO0lBQ0FDLFVBQVUsRUFBQyxZQUFZO0lBQUM7SUFDeEJDLFdBQVcsRUFBQyxhQUFhO0lBQUM7SUFDMUJDLGFBQWEsRUFBQyxlQUFlO0lBQzdCQyxpQkFBaUIsRUFBQyxtQkFBbUI7SUFBQztJQUN0Q0MsZUFBZSxFQUFDLGlCQUFpQjtJQUFDO0lBQ2xDQyxnQkFBZ0IsRUFBQyxrQkFBa0I7SUFBQztJQUNwQ0MsVUFBVSxFQUFDLFlBQVk7SUFBQztJQUN4QkMsV0FBVyxFQUFDLGFBQWE7SUFBQztJQUMxQkMsb0JBQW9CLEVBQUMsc0JBQXNCO0lBQUM7SUFDNUNDLGVBQWUsRUFBQyxpQkFBaUI7SUFBQztJQUNsQ0MsZ0JBQWdCLEVBQUMsa0JBQWtCO0lBQUM7SUFDcENDLFdBQVcsRUFBQyxhQUFhO0lBQUU7SUFDM0JDLFdBQVcsRUFBQyxhQUFhO0lBQUM7SUFDMUJDLGFBQWEsRUFBQyxlQUFlO0lBQUM7SUFDOUJDLG9CQUFvQixFQUFDLGtCQUFrQjtJQUFDO0lBQ3hDQyxZQUFZLEVBQUMsY0FBYztJQUFDO0lBQzVCQyxVQUFVLEVBQUMsWUFBWTtJQUFDO0lBQ3hCQyxLQUFLLEVBQUMsT0FBTztJQUFDO0lBQ2RDLE1BQU0sRUFBQyxRQUFRO0lBQUM7SUFDaEJDLGVBQWUsRUFBQyxpQkFBaUI7SUFFakNDLFNBQVMsRUFBQyxXQUFXO0lBRXJCQyxZQUFZLEVBQUMsY0FBYztJQUFFOztJQUU3QkMsUUFBUSxFQUFDLFVBQVU7SUFBQztJQUNwQkMsaUJBQWlCLEVBQUMsbUJBQW1CO0lBQUM7O0lBRXRDQyxnQkFBZ0IsRUFBQyxrQkFBa0I7SUFBRTtJQUNyQ0MsY0FBYyxFQUFDLGdCQUFnQjtJQUUvQkMsU0FBUyxFQUFDLFdBQVc7SUFFckJDLFFBQVEsRUFBQyxVQUFVO0lBRW5CQyxTQUFTLEVBQUMsV0FBVztJQUFDOztJQUV0QkMsVUFBVSxFQUFDLFlBQVksQ0FBQztFQUM1QjtBQUNKLENBQUMsQ0FBQzs7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUczQyxLQUFLIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEV2ZW50ID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgc3RhdGljczp7XHJcbiAgICAgICAgUGFyc2VGaW5pc2g6XCJQYXJzZUZpbmlzaFwiLC8v6Kej5p6Q5pWw5o2u5a6M5q+VXHJcbiAgICAgICAgLy9TdGFydFNjZW5lXHJcbiAgICAgICAgQWNoaWV2ZVRpcDpcIkFjaGlldmVUaXBcIixcclxuICAgICAgICBPcGVuVXBncmFkZVNraWxsOlwiT3BlblVwZ3JhZGVTa2lsbFwiLFxyXG4gICAgICAgIEFkZFdhcmVIb3VzZUNhcGFjaXR5OlwiQWRkV2FyZUhvdXNlQ2FwYWNpdHlcIiwvL+WinuWKoOS7k+WCqOWuuemHj1xyXG4gICAgICAgIE9wZW5FdmVudFRpcDpcIk9wZW5FdmVudFRpcFwiLFxyXG4gICAgICAgIE9wZW5TdG9ja0JvbnVzOlwiT3BlblN0b2NrQm9udXNcIixcclxuXHJcblxyXG4gICAgICAgIFJlZnJlc2hDYXNoQXNzZXQ6XCJSZWZyZXNoQ2FzaEFzc2V0XCIsLy/mj5DphpLliLfmlrAg546w6YeR5ZKM6LWE5LqnXHJcblxyXG4gICAgICAgIC8vR2FtZVNjZW5lXHJcbiAgICAgICAgT3BlbkJ1eVRpcDpcIk9wZW5CdXlUaXBcIiwvL+aJk+W8gOi0reS5sOeql+WPo1xyXG4gICAgICAgIE9wZW5TYWxlVGlwOlwiT3BlblNhbGVUaXBcIiwvL+aJk+W8gOWHuuWUrueql+WPo1xyXG4gICAgICAgIE9wZW5Db21tb25UaXA6XCJPcGVuQ29tbW9uVGlwXCIsXHJcbiAgICAgICAgT3BlbkNvbXBhbnlDcmVhdGU6XCJPcGVuQ29tcGFueUNyZWF0ZVwiLC8v5Yib5Yqe5YWs5Y+4XHJcbiAgICAgICAgT3BlblN0dWNrQnV5VGlwOlwiT3BlblN0dWNrQnV5VGlwXCIsLy/kubDlhaXlhazlj7jogqHnpahcclxuICAgICAgICBPcGVuU3R1Y2tTYWxlVGlwOlwiT3BlblN0dWNrU2FsZVRpcFwiLC8v5Ye65ZSu5YWs5Y+46IKh56WoXHJcbiAgICAgICAgQnV5U3VjY2VzczpcIkJ1eVN1Y2Nlc3NcIiwvL1xyXG4gICAgICAgIFNhbGVTdWNjZXNzOlwiU2FsZVN1Y2Nlc3NcIiwvL1xyXG4gICAgICAgIENyZWF0ZUNvbXBhbnlTdWNjZXNzOlwiQ3JlYXRlQ29tcGFueVN1Y2Nlc3NcIiwvL+WIm+WKnuWFrOWPuOaIkOeri1xyXG4gICAgICAgIEJ1eVN0b2NrU3VjY2VzczpcIkJ1eVN0b2NrU3VjY2Vzc1wiLC8v6LSt5Lmw6IKh56Wo5oiQ56uLXHJcbiAgICAgICAgU2FsZVN0b2NrU3VjY2VzczpcIlNhbGVTdG9ja1N1Y2Nlc3NcIiwvL+aKm+WUruiCoeelqOaIkOeri1xyXG4gICAgICAgIE9wZW5NYXRlVGlwOlwiT3Blbk1hdGVUaXBcIiwgLy/miZPlvIDnuqbkvJrmj5DnpLpcclxuICAgICAgICBEYXRlU3VjY2VzczpcIkRhdGVTdWNjZXNzXCIsLy/nuqbkuIrkuoZcclxuICAgICAgICBPcGVuQ29tbW9uQnV5OlwiT3BlbkNvbW1vbkJ1eVwiLC8v5omT5byA5YWs55So6LSt5LmwIOaxvei9puWSjOaIv+WtkFxyXG4gICAgICAgIENvbW1vbkJ1eVNhbGVTdWNjZXNzOlwiQ29tbW9uQnV5U3VjY2Vzc1wiLC8v6YCa55So6LSt5LmwIOWHuuWUruaIkOWKn1xyXG4gICAgICAgIFRyZWF0U3VjY2VzczpcIlRyZWF0U3VjY2Vzc1wiLC8v5rK755aX5oiQ5YqfXHJcbiAgICAgICAgT3BlbkJldFRpcDpcIk9wZW5CZXRUaXBcIiwvL+aJk+W8gOi1jOWNmlxyXG4gICAgICAgIEJldE9rOlwiQmV0T2tcIiwvL+i1jOWNmuWujOaIkFxyXG4gICAgICAgIFJldGlyZTpcIlJldGlyZVwiLC8v6YCA5LyRXHJcbiAgICAgICAgT3BlbkV2ZW50UmVzdWx0OlwiT3BlbkV2ZW50UmVzdWx0XCIsXHJcblxyXG4gICAgICAgIE9wZW5NYXJyeTpcIk9wZW5NYXJyeVwiLFxyXG5cclxuICAgICAgICBPcGVuVHV0b3JpYWw6XCJPcGVuVHV0b3JpYWxcIiwgLy/pgJrnn6XmiZPlvIDlvJXlr7znqpflj6NcclxuXHJcbiAgICAgICAgQ2xvY2tFbmQ6XCJDbG9ja0VuZFwiLC8v5pe26Ze06L2s5ZyI57uT5p2fXHJcbiAgICAgICAgVXNlUmV0aXJlQWRzU2tpbGw6XCJVc2VSZXRpcmVBZHNTa2lsbFwiLC8v5L2/55So6YCA5LyR5bm/5ZGK5Yqg5oyBXHJcblxyXG4gICAgICAgIFJlZnJlc2hBbGxVSVNob3c6XCJSZWZyZXNoQWxsVUlTaG93XCIsIC8v5Yi35paw5YWo6YOoVWlcclxuICAgICAgICBPcGVuVW5Mb2NrTWF0ZTpcIk9wZW5VbkxvY2tNYXRlXCIsXHJcblxyXG4gICAgICAgIERhdGVMYXRlcjpcIkRhdGVMYXRlclwiLFxyXG5cclxuICAgICAgICBTaG93UmFuazpcIlNob3dSYW5rXCIsXHJcblxyXG4gICAgICAgIE9wZW5FbmpveTpcIk9wZW5FbmpveVwiLC8v5omT5byA6Iqx6ZKx6Z2i5p2/XHJcblxyXG4gICAgICAgIFNoYXJlVmlkZW86XCJTaGFyZVZpZGVvXCIsLy/liIbkuqvlvZXlsY9cclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xyXG4iXX0=