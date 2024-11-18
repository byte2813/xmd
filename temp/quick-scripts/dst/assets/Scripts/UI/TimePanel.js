
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/TimePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '575c9fQPihMwrEcUY5hj7SP', 'TimePanel');
// Scripts/UI/TimePanel.js

"use strict";

var TimePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    ClockAnima: cc.Animation
  },
  PlayAnima: function PlayAnima() {
    this.ClockAnima.play("Clock");
  },
  ClockEnd: function ClockEnd() {
    this.node.active = false;
    cc.director.GlobalEvent.emit(cc.Mgr.Event.ClockEnd, {});
    //cc.log("闹钟结束======================================");
  }
});

module.exports = TimePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFRpbWVQYW5lbC5qcyJdLCJuYW1lcyI6WyJUaW1lUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNsb2NrQW5pbWEiLCJBbmltYXRpb24iLCJQbGF5QW5pbWEiLCJwbGF5IiwiQ2xvY2tFbmQiLCJub2RlIiwiYWN0aXZlIiwiZGlyZWN0b3IiLCJHbG9iYWxFdmVudCIsImVtaXQiLCJNZ3IiLCJFdmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0s7RUFDbEIsQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO0lBQ2hCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ2pDLENBQUM7RUFFREMsUUFBUSxFQUFDLFNBQUFBLFNBQUEsRUFBVTtJQUNmLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUN4QlYsRUFBRSxDQUFDVyxRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDYixFQUFFLENBQUNjLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDUCxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQ7RUFDSjtBQUNKLENBQUMsQ0FBQzs7QUFDRlEsTUFBTSxDQUFDQyxPQUFPLEdBQUdsQixTQUFTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFRpbWVQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQ2xvY2tBbmltYTpjYy5BbmltYXRpb24sXHJcbiAgICB9LFxyXG5cclxuICAgIFBsYXlBbmltYTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuQ2xvY2tBbmltYS5wbGF5KFwiQ2xvY2tcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIENsb2NrRW5kOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50LkNsb2NrRW5kLCB7fSk7XHJcbiAgICAgICAgLy9jYy5sb2coXCLpl7npkp/nu5PmnZ89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuICAgIH0sXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVQYW5lbDtcclxuIl19