
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/MateStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbed69g4iBKe5LAi0Lvhozn', 'MateStruct');
// Scripts/OwnData/MateStruct.js

"use strict";

var ItemType = require("ItemType");
var MateUnLockType = require("MateUnLockType");
//约会对象//需要更多源码联系Q:3038745955
var MateStruct = cc.Class({
  name: "MateStruct",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    sex: cc.Integer,
    //性别 1表示男  2 表示女
    canDate: false,
    // 当前是否可以直接约会了
    curLevel: cc.Integer,
    unlockCond: cc.Integer,
    //可约条件
    LovePoint: cc.Integer,
    //好感度
    UpLv: false //是否满级
  },

  //离婚后会让伴侣状态恢复为初始状态
  ReturnInitState: function ReturnInitState() {
    this.LovePoint = 0;
    this.canDate = false;
    if (this.unlockCond == MateUnLockType.NULL) this.canDate = true;
    this.curLevel = 0;
    this.UpLv = false;
  },
  //改变当前可约状态
  ChangeCanDateState: function ChangeCanDateState(flag) {
    this.canDate = flag;
  },
  RefreshAfterLvUp: function RefreshAfterLvUp() {
    var outpar = {};
    if (this.UpLv == true) {
      //cc.log("已经可以滚床单了,还约什么");
      outpar.isFull = false;
      outpar.LovePoint = 100;
      return true;
    }
    var mateData = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Mate, this.Id);
    var lovePointList = mateData.lovePointList;
    var bonusList = mateData.bonusList;
    this.curLevel += 1;
    var index = 0;
    for (var i = lovePointList.length - 1; i >= 0; i--) {
      if (lovePointList[i].curLevel == this.curLevel) {
        index = i;
        break;
      }
    }
    this.LovePoint = lovePointList[index].LovePoint;
    if (this.LovePoint == 100) {
      this.UpLv = true; //满级了
      outpar.isFull = true;
    } else {
      outpar.isFull = false;
    }
    outpar.LovePoint = this.LovePoint;
    return outpar;
  }
});
module.exports = MateStruct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcTWF0ZVN0cnVjdC5qcyJdLCJuYW1lcyI6WyJJdGVtVHlwZSIsInJlcXVpcmUiLCJNYXRlVW5Mb2NrVHlwZSIsIk1hdGVTdHJ1Y3QiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJpY29uIiwiSWQiLCJJbnRlZ2VyIiwic2V4IiwiY2FuRGF0ZSIsImN1ckxldmVsIiwidW5sb2NrQ29uZCIsIkxvdmVQb2ludCIsIlVwTHYiLCJSZXR1cm5Jbml0U3RhdGUiLCJOVUxMIiwiQ2hhbmdlQ2FuRGF0ZVN0YXRlIiwiZmxhZyIsIlJlZnJlc2hBZnRlckx2VXAiLCJvdXRwYXIiLCJpc0Z1bGwiLCJtYXRlRGF0YSIsIk1nciIsIk1hcERhdGFNZ3IiLCJnZXREYXRhQnlJdGVtVHlwZUFuZElkIiwiTWF0ZSIsImxvdmVQb2ludExpc3QiLCJib251c0xpc3QiLCJpbmRleCIsImkiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QztBQUNBLElBQUlFLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDekJDLElBQUksRUFBQyxZQUFZO0VBQ2pCQyxVQUFVLEVBQUM7SUFDVkMsSUFBSSxFQUFDLEVBQUU7SUFDUEYsSUFBSSxFQUFDLEVBQUU7SUFDUEcsRUFBRSxFQUFDTCxFQUFFLENBQUNNLE9BQU87SUFDYkMsR0FBRyxFQUFDUCxFQUFFLENBQUNNLE9BQU87SUFBRTtJQUNoQkUsT0FBTyxFQUFDLEtBQUs7SUFBQztJQUNkQyxRQUFRLEVBQUNULEVBQUUsQ0FBQ00sT0FBTztJQUNuQkksVUFBVSxFQUFDVixFQUFFLENBQUNNLE9BQU87SUFBQztJQUN0QkssU0FBUyxFQUFDWCxFQUFFLENBQUNNLE9BQU87SUFBRztJQUN2Qk0sSUFBSSxFQUFDLEtBQUssQ0FBQztFQUNaLENBQUM7O0VBRUQ7RUFDQUMsZUFBZSxFQUFDLFNBQUFBLGdCQUFBLEVBQVU7SUFDekIsSUFBSSxDQUFDRixTQUFTLEdBQUcsQ0FBQztJQUNsQixJQUFJLENBQUNILE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUcsSUFBSSxDQUFDRSxVQUFVLElBQUlaLGNBQWMsQ0FBQ2dCLElBQUksRUFDeEMsSUFBSSxDQUFDTixPQUFPLEdBQUcsSUFBSTtJQUVwQixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0lBQ2pCLElBQUksQ0FBQ0csSUFBSSxHQUFHLEtBQUs7RUFDbEIsQ0FBQztFQUVEO0VBQ0FHLGtCQUFrQixFQUFDLFNBQUFBLG1CQUFXQyxJQUFJLEVBQUU7SUFDbkMsSUFBSSxDQUFDUixPQUFPLEdBQUdRLElBQUk7RUFDcEIsQ0FBQztFQUVEQyxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBQSxFQUFZO0lBQzVCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFHLElBQUksQ0FBQ04sSUFBSSxJQUFJLElBQUksRUFDcEI7TUFDQztNQUNBTSxNQUFNLENBQUNDLE1BQU0sR0FBRyxLQUFLO01BQ3JCRCxNQUFNLENBQUNQLFNBQVMsR0FBRyxHQUFHO01BQ3RCLE9BQU8sSUFBSTtJQUNaO0lBQ0EsSUFBSVMsUUFBUSxHQUFHcEIsRUFBRSxDQUFDcUIsR0FBRyxDQUFDQyxVQUFVLENBQUNDLHNCQUFzQixDQUFDM0IsUUFBUSxDQUFDNEIsSUFBSSxFQUFFLElBQUksQ0FBQ25CLEVBQUUsQ0FBQztJQUM1RSxJQUFJb0IsYUFBYSxHQUFHTCxRQUFRLENBQUNLLGFBQWE7SUFDMUMsSUFBSUMsU0FBUyxHQUFHTixRQUFRLENBQUNNLFNBQVM7SUFFckMsSUFBSSxDQUFDakIsUUFBUSxJQUFJLENBQUM7SUFDbEIsSUFBSWtCLEtBQUssR0FBRyxDQUFDO0lBQ2IsS0FBSyxJQUFJQyxDQUFDLEdBQUdILGFBQWEsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDbkQsSUFBR0gsYUFBYSxDQUFDRyxDQUFDLENBQUMsQ0FBQ25CLFFBQVEsSUFBSSxJQUFJLENBQUNBLFFBQVEsRUFDN0M7UUFDQ2tCLEtBQUssR0FBR0MsQ0FBQztRQUNUO01BQ0Q7SUFDRDtJQUNBLElBQUksQ0FBQ2pCLFNBQVMsR0FBR2MsYUFBYSxDQUFDRSxLQUFLLENBQUMsQ0FBQ2hCLFNBQVM7SUFDL0MsSUFBRyxJQUFJLENBQUNBLFNBQVMsSUFBSSxHQUFHLEVBQ3hCO01BQ0MsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDbEJNLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDckIsQ0FBQyxNQUVEO01BQ0NELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFDdEI7SUFDQUQsTUFBTSxDQUFDUCxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTO0lBQ2pDLE9BQU9PLE1BQU07RUFDZDtBQUNELENBQUMsQ0FBQztBQUNGWSxNQUFNLENBQUNDLE9BQU8sR0FBR2hDLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtVHlwZSA9IHJlcXVpcmUoXCJJdGVtVHlwZVwiKTtcclxudmFyIE1hdGVVbkxvY2tUeXBlID0gcmVxdWlyZShcIk1hdGVVbkxvY2tUeXBlXCIpO1xyXG4vL+e6puS8muWvueixoS8v6ZyA6KaB5pu05aSa5rqQ56CB6IGU57O7UTozMDM4NzQ1OTU1XHJcbnZhciBNYXRlU3RydWN0ID0gY2MuQ2xhc3Moe1xyXG5cdG5hbWU6XCJNYXRlU3RydWN0XCIsXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRpY29uOlwiXCIsXHJcblx0XHRuYW1lOlwiXCIsXHJcblx0XHRJZDpjYy5JbnRlZ2VyLFxyXG5cdFx0c2V4OmNjLkludGVnZXIsIC8v5oCn5YirIDHooajnpLrnlLcgIDIg6KGo56S65aWzXHJcblx0XHRjYW5EYXRlOmZhbHNlLC8vIOW9k+WJjeaYr+WQpuWPr+S7peebtOaOpee6puS8muS6hlxyXG5cdFx0Y3VyTGV2ZWw6Y2MuSW50ZWdlcixcclxuXHRcdHVubG9ja0NvbmQ6Y2MuSW50ZWdlciwvL+WPr+e6puadoeS7tlxyXG5cdFx0TG92ZVBvaW50OmNjLkludGVnZXIsICAvL+WlveaEn+W6plxyXG5cdFx0VXBMdjpmYWxzZSwvL+aYr+WQpua7oee6p1xyXG5cdH0sXHJcblxyXG5cdC8v56a75ama5ZCO5Lya6K6p5Ly05L6j54q25oCB5oGi5aSN5Li65Yid5aeL54q25oCBXHJcblx0UmV0dXJuSW5pdFN0YXRlOmZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLkxvdmVQb2ludCA9IDA7XHJcblx0XHR0aGlzLmNhbkRhdGUgPSBmYWxzZTtcclxuXHRcdGlmKHRoaXMudW5sb2NrQ29uZCA9PSBNYXRlVW5Mb2NrVHlwZS5OVUxMKVxyXG5cdFx0XHR0aGlzLmNhbkRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuY3VyTGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5VcEx2ID0gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0Ly/mlLnlj5jlvZPliY3lj6/nuqbnirbmgIFcclxuXHRDaGFuZ2VDYW5EYXRlU3RhdGU6ZnVuY3Rpb24gKCBmbGFnKSB7XHJcblx0XHR0aGlzLmNhbkRhdGUgPSBmbGFnO1xyXG5cdH0sXHJcblxyXG5cdFJlZnJlc2hBZnRlckx2VXA6ZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIG91dHBhciA9IHt9O1xyXG5cdFx0aWYodGhpcy5VcEx2ID09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdC8vY2MubG9nKFwi5bey57uP5Y+v5Lul5rua5bqK5Y2V5LqGLOi/mOe6puS7gOS5iFwiKTtcclxuXHRcdFx0b3V0cGFyLmlzRnVsbCA9IGZhbHNlO1xyXG5cdFx0XHRvdXRwYXIuTG92ZVBvaW50ID0gMTAwO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHZhciBtYXRlRGF0YSA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuTWF0ZSwgdGhpcy5JZCk7XHJcbiAgICBcdHZhciBsb3ZlUG9pbnRMaXN0ID0gbWF0ZURhdGEubG92ZVBvaW50TGlzdDtcclxuICAgIFx0dmFyIGJvbnVzTGlzdCA9IG1hdGVEYXRhLmJvbnVzTGlzdDtcclxuICAgIFx0XHJcblx0XHR0aGlzLmN1ckxldmVsICs9IDE7XHJcblx0XHR2YXIgaW5kZXggPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IGxvdmVQb2ludExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYobG92ZVBvaW50TGlzdFtpXS5jdXJMZXZlbCA9PSB0aGlzLmN1ckxldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW5kZXggPSBpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLkxvdmVQb2ludCA9IGxvdmVQb2ludExpc3RbaW5kZXhdLkxvdmVQb2ludDtcclxuXHRcdGlmKHRoaXMuTG92ZVBvaW50ID09IDEwMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5VcEx2ID0gdHJ1ZTsgLy/mu6HnuqfkuoZcclxuXHRcdFx0b3V0cGFyLmlzRnVsbCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdG91dHBhci5pc0Z1bGwgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdG91dHBhci5Mb3ZlUG9pbnQgPSB0aGlzLkxvdmVQb2ludDtcclxuXHRcdHJldHVybiBvdXRwYXI7XHJcblx0fSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTWF0ZVN0cnVjdDtcclxuIl19