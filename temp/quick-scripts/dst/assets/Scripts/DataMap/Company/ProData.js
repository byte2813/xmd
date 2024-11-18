
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DataMap/Company/ProData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e1b05PteZAdI9Ijj7OZHcm', 'ProData');
// Scripts/DataMap/Company/ProData.js

"use strict";

var ProData = cc.Class({
  name: "ProData",
  properties: {
    lowRatio: 0.8,
    //盈利亏损比例
    upRatio: 0.9,
    weight: 0.5 //权值
  }
});

module.exports = ProData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRGF0YU1hcFxcQ29tcGFueVxcUHJvRGF0YS5qcyJdLCJuYW1lcyI6WyJQcm9EYXRhIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwibG93UmF0aW8iLCJ1cFJhdGlvIiwid2VpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ25CQyxJQUFJLEVBQUMsU0FBUztFQUNkQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDLEdBQUc7SUFBRTtJQUNkQyxPQUFPLEVBQUMsR0FBRztJQUNYQyxNQUFNLEVBQUMsR0FBRyxDQUFDO0VBQ2Y7QUFDSixDQUFDLENBQUM7O0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHVCxPQUFPIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJvRGF0YSA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6XCJQcm9EYXRhXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbG93UmF0aW86MC44LCAvL+ebiOWIqeS6j+aNn+avlOS+i1xyXG4gICAgICAgIHVwUmF0aW86MC45LFxyXG4gICAgICAgIHdlaWdodDowLjUsLy/mnYPlgLxcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFByb0RhdGE7XHJcbiJdfQ==