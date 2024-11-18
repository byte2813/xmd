
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/MateUnLockType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3aeadbC8Q9Ke6gBVyyYRv+I', 'MateUnLockType');
// Scripts/Core/MateUnLockType.js

"use strict";

//伴侣解锁方式
var MateUnLockType = cc.Enum({
  NULL: 0,
  //直接初始解锁
  InHospital: 1,
  //住院了
  ToDate: 2 //去约会
});

module.exports = MateUnLockType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcTWF0ZVVuTG9ja1R5cGUuanMiXSwibmFtZXMiOlsiTWF0ZVVuTG9ja1R5cGUiLCJjYyIsIkVudW0iLCJOVUxMIiwiSW5Ib3NwaXRhbCIsIlRvRGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxJQUFJLEVBQUMsQ0FBQztFQUFFO0VBQ1JDLFVBQVUsRUFBQyxDQUFDO0VBQUU7RUFDZEMsTUFBTSxFQUFDLENBQUMsQ0FBRTtBQUNkLENBQUMsQ0FBQzs7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdQLGNBQWMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5Ly05L6j6Kej6ZSB5pa55byPXHJcbnZhciBNYXRlVW5Mb2NrVHlwZSA9IGNjLkVudW0oe1xyXG4gICAgTlVMTDowLCAvL+ebtOaOpeWIneWni+ino+mUgVxyXG4gICAgSW5Ib3NwaXRhbDoxLCAvL+S9j+mZouS6hlxyXG4gICAgVG9EYXRlOjIsIC8v5Y6757qm5LyaXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGVVbkxvY2tUeXBlO1xyXG4iXX0=