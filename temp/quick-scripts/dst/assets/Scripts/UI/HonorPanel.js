
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/HonorPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1e0dyy5PlDzoGSqpu21Es4', 'HonorPanel');
// Scripts/UI/HonorPanel.js

"use strict";

var HonorPanel = cc.Class({
  "extends": cc.Component,
  properties: {
    itemParent: cc.Node,
    itemPre: cc.Prefab
  },
  InitPanel: function InitPanel() {
    var DataList = cc.Mgr.UserDataMgr.AchievementList;
    for (var i = 0; i <= DataList.length - 1; i++) {
      var data = DataList[i];
      var obj = cc.instantiate(this.itemPre);
      obj.parent = this.itemParent;
      obj.active = true;
      obj.getComponent("HonorItem").ShowData(data);
    }
  },
  RefreshPanel: function RefreshPanel() {
    var DataList = cc.Mgr.UserDataMgr.AchievementList;
    var children = this.itemParent.children;
    for (var i = 0; i <= children.length - 1; i++) {
      var data = DataList[i];
      var sc = children[i].getComponent("HonorItem");
      if (sc != null) {
        sc.ShowData(DataList[i]);
      }
    }
  },
  ShowPanel: function ShowPanel() {
    var children = this.itemParent.children;
    if (children.length == 0) {
      this.InitPanel();
    } else {
      this.RefreshPanel();
    }
  },
  ClosePanel: function ClosePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.node.active = false;
  }
});
module.exports = HonorPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEhvbm9yUGFuZWwuanMiXSwibmFtZXMiOlsiSG9ub3JQYW5lbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbVBhcmVudCIsIk5vZGUiLCJpdGVtUHJlIiwiUHJlZmFiIiwiSW5pdFBhbmVsIiwiRGF0YUxpc3QiLCJNZ3IiLCJVc2VyRGF0YU1nciIsIkFjaGlldmVtZW50TGlzdCIsImkiLCJsZW5ndGgiLCJkYXRhIiwib2JqIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJTaG93RGF0YSIsIlJlZnJlc2hQYW5lbCIsImNoaWxkcmVuIiwic2MiLCJTaG93UGFuZWwiLCJDbG9zZVBhbmVsIiwiQXVkaW9NZ3IiLCJwbGF5U0ZYIiwibm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN0QixXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNsQkMsT0FBTyxFQUFDTixFQUFFLENBQUNPO0VBQ2YsQ0FBQztFQUVEQyxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO0lBQ25CLElBQUlDLFFBQVEsR0FBR1QsRUFBRSxDQUFDVSxHQUFHLENBQUNDLFdBQVcsQ0FBQ0MsZUFBZTtJQUNqRCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUosUUFBUSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUM5QyxJQUFJRSxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDO01BQ2hCLElBQUlHLEdBQUcsR0FBR2hCLEVBQUUsQ0FBQ2lCLFdBQVcsQ0FBQyxJQUFJLENBQUNYLE9BQU8sQ0FBQztNQUN0Q1UsR0FBRyxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDZCxVQUFVO01BQzVCWSxHQUFHLENBQUNHLE1BQU0sR0FBRyxJQUFJO01BQ2pCSCxHQUFHLENBQUNJLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUM7SUFDbkQ7RUFDRCxDQUFDO0VBRURPLFlBQVksRUFBQyxTQUFBQSxhQUFBLEVBQVU7SUFDdEIsSUFBSWIsUUFBUSxHQUFHVCxFQUFFLENBQUNVLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDQyxlQUFlO0lBQ2pELElBQUlXLFFBQVEsR0FBRyxJQUFJLENBQUNuQixVQUFVLENBQUNtQixRQUFRO0lBQ3ZDLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJVSxRQUFRLENBQUNULE1BQU0sR0FBRSxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQzdDLElBQUlFLElBQUksR0FBR04sUUFBUSxDQUFDSSxDQUFDLENBQUM7TUFDdEIsSUFBSVcsRUFBRSxHQUFHRCxRQUFRLENBQUNWLENBQUMsQ0FBQyxDQUFDTyxZQUFZLENBQUMsV0FBVyxDQUFDO01BQzlDLElBQUdJLEVBQUUsSUFBSSxJQUFJLEVBQ2I7UUFDQ0EsRUFBRSxDQUFDSCxRQUFRLENBQUNaLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDLENBQUM7TUFDekI7SUFDRDtFQUNELENBQUM7RUFFRFksU0FBUyxFQUFDLFNBQUFBLFVBQUEsRUFBWTtJQUNyQixJQUFJRixRQUFRLEdBQUcsSUFBSSxDQUFDbkIsVUFBVSxDQUFDbUIsUUFBUTtJQUN2QyxJQUFHQSxRQUFRLENBQUNULE1BQU0sSUFBSSxDQUFDLEVBQ3ZCO01BQ0MsSUFBSSxDQUFDTixTQUFTLEVBQUU7SUFDakIsQ0FBQyxNQUVEO01BQ0MsSUFBSSxDQUFDYyxZQUFZLEVBQUU7SUFDcEI7RUFDRCxDQUFDO0VBRURJLFVBQVUsRUFBQyxTQUFBQSxXQUFBLEVBQVU7SUFDakIxQixFQUFFLENBQUNVLEdBQUcsQ0FBQ2lCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJLENBQUNDLElBQUksQ0FBQ1YsTUFBTSxHQUFHLEtBQUs7RUFDekI7QUFHSixDQUFDLENBQUM7QUFDRlcsTUFBTSxDQUFDQyxPQUFPLEdBQUdoQyxVQUFVIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhvbm9yUGFuZWwgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW1QYXJlbnQ6Y2MuTm9kZSxcclxuICAgICAgICBpdGVtUHJlOmNjLlByZWZhYixcclxuICAgIH0sXHJcblxyXG4gICAgSW5pdFBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICBcdHZhciBEYXRhTGlzdCA9IGNjLk1nci5Vc2VyRGF0YU1nci5BY2hpZXZlbWVudExpc3Q7XHJcbiAgICBcdGZvciAodmFyIGkgPSAwOyBpIDw9IERhdGFMaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgXHRcdHZhciBkYXRhID0gRGF0YUxpc3RbaV07XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmUpO1xyXG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5pdGVtUGFyZW50O1xyXG4gICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkhvbm9ySXRlbVwiKS5TaG93RGF0YShkYXRhKTtcclxuICAgIFx0fVxyXG4gICAgfSxcclxuXHJcbiAgICBSZWZyZXNoUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgIFx0dmFyIERhdGFMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLkFjaGlldmVtZW50TGlzdDtcclxuICAgIFx0dmFyIGNoaWxkcmVuID0gdGhpcy5pdGVtUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgXHRmb3IgKHZhciBpID0gMDsgaSA8PSBjaGlsZHJlbi5sZW5ndGggLTE7IGkrKykge1xyXG4gICAgXHRcdHZhciBkYXRhID0gRGF0YUxpc3RbaV07XHJcbiAgICBcdFx0dmFyIHNjID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiSG9ub3JJdGVtXCIpO1xyXG4gICBcdFx0XHRpZihzYyAhPSBudWxsKVxyXG4gICBcdFx0XHR7XHJcbiAgIFx0XHRcdFx0c2MuU2hvd0RhdGEoRGF0YUxpc3RbaV0pO1xyXG4gICBcdFx0XHR9XHJcbiAgICBcdH1cclxuICAgIH0sXHJcblxyXG4gICAgU2hvd1BhbmVsOmZ1bmN0aW9uICgpIHtcclxuICAgIFx0dmFyIGNoaWxkcmVuID0gdGhpcy5pdGVtUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgXHRpZihjaGlsZHJlbi5sZW5ndGggPT0gMClcclxuICAgIFx0e1xyXG4gICAgXHRcdHRoaXMuSW5pdFBhbmVsKCk7XHJcbiAgICBcdH1cclxuICAgIFx0ZWxzZVxyXG4gICAgXHR7XHJcbiAgICBcdFx0dGhpcy5SZWZyZXNoUGFuZWwoKTtcclxuICAgIFx0fVxyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgIFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gSG9ub3JQYW5lbDtcclxuIl19