
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/ItemType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d410+N2SFPRoQ3E06qQDFC', 'ItemType');
// Scripts/Core/ItemType.js

"use strict";

var ItemType = cc.Enum({
  //现金100  货物101 技能102 公司103 房子104 汽车105 伴侣106
  Cash: 100,
  Goods: 101,
  Skill: 102,
  Company: 103,
  House: 104,
  Car: 105,
  Mate: 106,
  Achieve: 107,
  //成就类型
  EventData: 108 //事件类型
});

module.exports = ItemType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcSXRlbVR5cGUuanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJjYyIsIkVudW0iLCJDYXNoIiwiR29vZHMiLCJTa2lsbCIsIkNvbXBhbnkiLCJIb3VzZSIsIkNhciIsIk1hdGUiLCJBY2hpZXZlIiwiRXZlbnREYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3RCO0VBQ0dDLElBQUksRUFBQyxHQUFHO0VBQ1JDLEtBQUssRUFBQyxHQUFHO0VBQ1RDLEtBQUssRUFBQyxHQUFHO0VBQ1RDLE9BQU8sRUFBQyxHQUFHO0VBQ1hDLEtBQUssRUFBQyxHQUFHO0VBQ1RDLEdBQUcsRUFBQyxHQUFHO0VBQ1BDLElBQUksRUFBQyxHQUFHO0VBQ1JDLE9BQU8sRUFBQyxHQUFHO0VBQUM7RUFDWkMsU0FBUyxFQUFDLEdBQUcsQ0FBQztBQUVsQixDQUFDLENBQUM7O0FBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHYixRQUFRIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEl0ZW1UeXBlID0gY2MuRW51bSh7XHJcblx0Ly/njrDph5ExMDAgIOi0p+eJqTEwMSDmioDog70xMDIg5YWs5Y+4MTAzIOaIv+WtkDEwNCDmsb3ovaYxMDUg5Ly05L6jMTA2XHJcbiAgICBDYXNoOjEwMCxcclxuICAgIEdvb2RzOjEwMSxcclxuICAgIFNraWxsOjEwMixcclxuICAgIENvbXBhbnk6MTAzLFxyXG4gICAgSG91c2U6MTA0LFxyXG4gICAgQ2FyOjEwNSxcclxuICAgIE1hdGU6MTA2LFxyXG4gICAgQWNoaWV2ZToxMDcsLy/miJDlsLHnsbvlnotcclxuICAgIEV2ZW50RGF0YToxMDgsLy/kuovku7bnsbvlnotcclxuICAgIFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBJdGVtVHlwZTsiXX0=