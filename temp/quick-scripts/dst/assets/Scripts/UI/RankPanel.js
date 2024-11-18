
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/RankPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eec0cXLqh5Fx73Z9d31Hnh2', 'RankPanel');
// Scripts/UI/RankPanel.js

"use strict";

var RankPanel = cc.Class({
  "extends": cc.Component,
  properties: {},
  ShowPanel: function ShowPanel(DataList) {
    /*
    var index = 0;
    var children = this.itemParent.children;
    for (var j = 0; j <= children.length - 1; j++) {
    var sc = children[i].getComponent("RankItem");
    if(sc != null)
    {
    	if(DataList[j] != null)
    	{
    		sc.ShowData(DataList[j]);
    		index = j;
    	}
    	else
    	{
    		children[i].active = false;
    	}
    }
    }
    //如果需要重新初始化一些实例
    if(index < DataList.length-1)
    {
    for (var i = index + 1; i <= DataList.length-1; i++) {
    	var data = DataList[i];
           var obj = cc.instantiate(this.rankPre);
           obj.parent = this.itemParent;
           obj.active = true;
           obj.getComponent("RankItem").init(data);
    }
    }
    */
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFJhbmtQYW5lbC5qcyJdLCJuYW1lcyI6WyJSYW5rUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlNob3dQYW5lbCIsIkRhdGFMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDckIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUUsQ0FFWixDQUFDO0VBRURDLFNBQVMsRUFBQyxTQUFBQSxVQUFTQyxRQUFRLEVBQUM7SUFDMUI7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBN0JNO0FBK0JOLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBSYW5rUGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICBcdFNob3dQYW5lbDpmdW5jdGlvbihEYXRhTGlzdCl7XHJcbiAgICAgIC8qXHJcbiAgIFx0XHR2YXIgaW5kZXggPSAwO1xyXG4gICBcdFx0dmFyIGNoaWxkcmVuID0gdGhpcy5pdGVtUGFyZW50LmNoaWxkcmVuO1xyXG4gICBcdFx0Zm9yICh2YXIgaiA9IDA7IGogPD0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaisrKSB7XHJcbiAgIFx0XHRcdHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIlJhbmtJdGVtXCIpO1xyXG4gICBcdFx0XHRpZihzYyAhPSBudWxsKVxyXG4gICBcdFx0XHR7XHJcbiAgIFx0XHRcdFx0aWYoRGF0YUxpc3Rbal0gIT0gbnVsbClcclxuICAgXHRcdFx0XHR7XHJcbiAgIFx0XHRcdFx0XHRzYy5TaG93RGF0YShEYXRhTGlzdFtqXSk7XHJcbiAgIFx0XHRcdFx0XHRpbmRleCA9IGo7XHJcbiAgIFx0XHRcdFx0fVxyXG4gICBcdFx0XHRcdGVsc2VcclxuICAgXHRcdFx0XHR7XHJcbiAgIFx0XHRcdFx0XHRjaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgXHRcdFx0XHR9XHJcbiAgIFx0XHRcdH1cclxuICAgXHRcdH1cclxuICAgXHRcdC8v5aaC5p6c6ZyA6KaB6YeN5paw5Yid5aeL5YyW5LiA5Lqb5a6e5L6LXHJcbiAgIFx0XHRpZihpbmRleCA8IERhdGFMaXN0Lmxlbmd0aC0xKVxyXG4gICBcdFx0e1xyXG4gICBcdFx0XHRmb3IgKHZhciBpID0gaW5kZXggKyAxOyBpIDw9IERhdGFMaXN0Lmxlbmd0aC0xOyBpKyspIHtcclxuXHQgICBcdFx0XHR2YXIgZGF0YSA9IERhdGFMaXN0W2ldO1xyXG5cdCAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJhbmtQcmUpO1xyXG5cdCAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLml0ZW1QYXJlbnQ7XHJcblx0ICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XHJcblx0ICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIlJhbmtJdGVtXCIpLmluaXQoZGF0YSk7XHJcblx0ICAgXHRcdH1cclxuICAgXHRcdH1cclxuICAgICAgKi9cclxuICAgXHR9LFxyXG59KTtcclxuIl19