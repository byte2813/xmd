
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/RetirePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '393298qS/VMIY4kEK8N31J9', 'RetirePanel');
// Scripts/UI/RetirePanel.js

"use strict";

var AchieveCond = require("AchieveCond");
var RecordStruct = require("RecordStruct");
var AdsParam = require("AdsParam");
var RetirePanel = cc.Class({
  "extends": cc.Component,
  properties: {
    desLbl: cc.RichText,
    crCode: cc.Sprite,
    SkillGetLbl: cc.Label,
    ReGetLbl: cc.Label,
    roundGetSkillPoint: 0,
    skillPointPanel: cc.Node,
    nameLbl: cc.Label,
    zongjieLbl: cc.Label,
    InitMoneyLbl: cc.Label,
    CompanyNode: cc.Node,
    CompanyLbl: cc.Label,
    MarryNode: cc.Node,
    MarryLbl: cc.Label,
    MillionNode: cc.Node,
    MillionLbl: cc.Label,
    TenMillionNode: cc.Node,
    TenMillionLabel: cc.Label,
    HundredMillionNode: cc.Node,
    HundredMillionLbl: cc.Label,
    RetireAgeLbl: cc.Label,
    RetireAssetLbl: cc.Label,
    HighAssetsLbl: cc.Label
  },
  ShowPanel: function ShowPanel() {
    var _this = this;
    var playerName = cc.Mgr.UserDataMgr.playerName;
    var Assets = cc.Mgr.UserDataMgr.AssetsMoney;
    var hasMarry = cc.Mgr.UserDataMgr.JudeHasMarryCond();
    var hasCar = cc.Mgr.UserDataMgr.JudeHasCar();
    var hasHouse = cc.Mgr.UserDataMgr.JudeHasHouse();
    var HasFLL = cc.Mgr.UserDataMgr.JudeHasCarById(2);
    var HasGuBao = cc.Mgr.UserDataMgr.JudeHasHouseById(1); //古堡的id
    var seed = 0; //Math.floor(Math.random()*2);
    var ast = Math.floor(Assets / 10000);
    if (ast < 100 && !hasMarry) {
      seed = 0;
    } else if (ast < 100 && hasMarry) {
      seed = 1;
    } else if (ast > 100 && ast < 1000) {
      seed = 2;
    } else if (ast > 1000 && ast < 10000 && (!hasCar || !hasHouse)) {
      seed = 3;
    } else if (ast > 1000 && ast < 10000 && hasCar && hasHouse) {
      seed = 4;
    } else if (ast > 10000 && (!HasFLL || !HasGuBao)) {
      seed = 5;
    } else if (ast > 10000 && HasFLL && HasGuBao) {
      seed = 6;
    }
    var str = cc.Mgr.global.getTranslation("Retire_" + seed);
    var age = cc.Mgr.UserDataMgr.Age;
    if (cc.Mgr.global.useRetireAds == false) age -= 1;
    var HighAssets = cc.Mgr.UserDataMgr.HighAssets;
    var k = 0;
    this.zongjieLbl.string = "";
    this.schedule(function () {
      k++;
      _this.zongjieLbl.string = str.substring(0, k);
    }, 0.3, str.length + 1, 0.3);
    this.nameLbl.string = playerName;
    this.InitMoneyLbl.string = cc.Mgr.global.getTranslation("CashInit_" + cc.Mgr.global.InitGetMoneyId);
    if (cc.Mgr.UserDataMgr.MarryAge != 0) {
      this.MarryNode.active = true;
      var marryage = cc.Mgr.UserDataMgr.MarryAge;
      var marryrole = cc.Mgr.global.getTranslation("role_" + cc.Mgr.UserDataMgr.MarryRoleId);
      this.MarryLbl.string = marryage + "岁时同: " + marryrole + "结成伴侣";
    } else {
      this.MarryNode.active = false;
    }

    //if(cc.Mgr.UserDataMgr.DivorceAge != 0)
    //{
    //    var marryage = cc.Mgr.UserDataMgr.DivorceAge;
    //}

    if (cc.Mgr.UserDataMgr.FundationAge != 0) {
      this.CompanyNode.active = true;
      var marryage = cc.Mgr.UserDataMgr.FundationAge;
      var companyName = cc.Mgr.global.getTranslation("company_" + cc.Mgr.UserDataMgr.FundationCompanyId);
      this.CompanyLbl.string = marryage + "岁时创办: " + companyName;
    } else {
      this.CompanyNode.active = false;
    }

    //if(cc.Mgr.UserDataMgr.BankruptAge != 0)
    //{
    //    var marryage = cc.Mgr.UserDataMgr.BankruptAge;
    //}

    if (cc.Mgr.UserDataMgr.MillionAge != 0) {
      this.MillionNode.active = true;
      var marryage = cc.Mgr.UserDataMgr.MillionAge;
      this.MillionLbl.string = marryage + "岁时资产突破百万";
    } else {
      this.MillionNode.active = false;
    }
    if (cc.Mgr.UserDataMgr.TenMillionAge != 0) {
      this.TenMillionNode.active = true;
      var marryage = cc.Mgr.UserDataMgr.TenMillionAge;
      this.TenMillionLabel.string = marryage + "岁时资产突破千万";
    } else {
      this.TenMillionNode.active = false;
    }
    if (cc.Mgr.UserDataMgr.HundredMillionAge != 0) {
      this.HundredMillionNode.active = true;
      var marryage = cc.Mgr.UserDataMgr.HundredMillionAge;
      this.HundredMillionLbl.string = marryage + "岁时进入亿万富豪榜";
    } else {
      this.HundredMillionNode.active = false;
    }
    this.RetireAgeLbl.string = age + "退休时资产:";
    this.RetireAssetLbl.string = cc.Mgr.global.FormatNum(Assets);
    this.HighAssetsLbl.string = cc.Mgr.global.FormatNum(HighAssets);
    this.desLbl.string = "";
    cc.Mgr.UserDataMgr.playTimes += 1; //玩家的游戏次数增加

    cc.Mgr.UserDataMgr.CreateRecord();
    this.CaculateSkillPoint();
    this.CaculateAchieveState();
  },
  showRewardVideo: function showRewardVideo() {
    this.js2android('show_reward_video', '1');
  },
  ///激励视频播放完成回调方法 continue_game
  /// Native.android2js("continue_game", ()=>{
  ///     //激励视频播放完成，原生端回调
  /// });
  js2android: function js2android(name, data) {
    console.log("name:" + name + "-data:" + data);
    if (window.injectedObject && window.injectedObject.setJsContent) {
      window.injectedObject.setJsContent(name, data);
    }
  },
  ClickConfirm: function ClickConfirm() {
    cc.Mgr.AudioMgr.playSFX("click");
    if (cc.Mgr.UserDataMgr.HistoryHighAssets < cc.Mgr.UserDataMgr.AssetsMoney) {
      cc.Mgr.UserDataMgr.RefreshHistoryHighAsset(cc.Mgr.UserDataMgr.AssetsMoney);
      cc.Mgr.PlatformController.setUserCloudStorage(cc.Mgr.UserDataMgr.AssetsMoney);
    }
    cc.Mgr.UserDataMgr.SaveUserData();
    cc.director.loadScene("start_scene");
  },
  ClickShare: function ClickShare() {
    cc.Mgr.PlatformController.ShareToFriend(1);
  },
  //结算技能点
  CaculateSkillPoint: function CaculateSkillPoint() {
    var asset = Math.floor(cc.Mgr.UserDataMgr.AssetsMoney / 10000);
    var skillPoint = 0;
    if (asset <= 100) {
      skillPoint = 0;
    } else if (asset > 100 && asset <= 999) {
      skillPoint = Math.floor(asset / 100) * 10;
    } else if (asset >= 1000 && asset <= 9999) {
      skillPoint = 90 + Math.floor(asset / 500) * 10;
    } else if (asset >= 10000 && asset <= 99999) {
      skillPoint = 300 + Math.floor(asset / 5000) * 10;
    } else if (asset >= 100000) {
      skillPoint = 500;
    }
    this.ReGetLbl.node.active = false;
    var reputationSkillPoint = 0;
    if (asset >= 100) {
      reputationSkillPoint = Math.floor(cc.Mgr.UserDataMgr.Reputation / 2);
      if (reputationSkillPoint > 50) {
        this.ReGetLbl.node.active = true;
        reputationSkillPoint = 500;
      }
    }
    this.roundGetSkillPoint += skillPoint + Math.floor(skillPoint * (cc.Mgr.UserDataMgr.SkillPointGetBonus / 100)) + reputationSkillPoint;
    cc.Mgr.UserDataMgr.SkillBonusPoint += this.roundGetSkillPoint;
    this.SkillGetLbl.string = this.roundGetSkillPoint;
    //cc.log("本局获得的技能点 = " + this.roundGetSkillPoint);
    this.skillPointPanel.active = true;
    if (this.roundGetSkillPoint == 0) this.skillPointPanel.active = false;
    //cc.Mgr.UserDataMgr.SkillBonusPoint = skillPoint + Math.floor(skillPoint * (cc.Mgr.UserDataMgr.SkillPointGetBonus / 100));
  },

  DoubleSkillPoint: function DoubleSkillPoint() {
    var self = this;
    self.showRewardVideo();
    cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointE, function (out) {
      if (out == 0) {
        cc.Mgr.UserDataMgr.SkillBonusPoint += self.roundGetSkillPoint;
        self.CloseDoublePanel();
      }
    });

    //var index = Math.floor(Math.random()*6);
    //cc.Mgr.PlatformController.ShareToFriend(index);
  },

  CloseDoublePanel: function CloseDoublePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.skillPointPanel.active = false;
  },
  //结算是否完成了 成就
  CaculateAchieveState: function CaculateAchieveState() {
    var AchievementList = cc.Mgr.UserDataMgr.AchievementList;
    for (var i = 0; i < AchievementList.length; i++) {
      var dt = AchievementList[i];
      if (!dt.hasFinish) {
        cc.Mgr.UserDataMgr.JudeFinishAnyAchievement(dt.Id);
      }
    }
  }
});
module.exports = RetirePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXFJldGlyZVBhbmVsLmpzIl0sIm5hbWVzIjpbIkFjaGlldmVDb25kIiwicmVxdWlyZSIsIlJlY29yZFN0cnVjdCIsIkFkc1BhcmFtIiwiUmV0aXJlUGFuZWwiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRlc0xibCIsIlJpY2hUZXh0IiwiY3JDb2RlIiwiU3ByaXRlIiwiU2tpbGxHZXRMYmwiLCJMYWJlbCIsIlJlR2V0TGJsIiwicm91bmRHZXRTa2lsbFBvaW50Iiwic2tpbGxQb2ludFBhbmVsIiwiTm9kZSIsIm5hbWVMYmwiLCJ6b25namllTGJsIiwiSW5pdE1vbmV5TGJsIiwiQ29tcGFueU5vZGUiLCJDb21wYW55TGJsIiwiTWFycnlOb2RlIiwiTWFycnlMYmwiLCJNaWxsaW9uTm9kZSIsIk1pbGxpb25MYmwiLCJUZW5NaWxsaW9uTm9kZSIsIlRlbk1pbGxpb25MYWJlbCIsIkh1bmRyZWRNaWxsaW9uTm9kZSIsIkh1bmRyZWRNaWxsaW9uTGJsIiwiUmV0aXJlQWdlTGJsIiwiUmV0aXJlQXNzZXRMYmwiLCJIaWdoQXNzZXRzTGJsIiwiU2hvd1BhbmVsIiwiX3RoaXMiLCJwbGF5ZXJOYW1lIiwiTWdyIiwiVXNlckRhdGFNZ3IiLCJBc3NldHMiLCJBc3NldHNNb25leSIsImhhc01hcnJ5IiwiSnVkZUhhc01hcnJ5Q29uZCIsImhhc0NhciIsIkp1ZGVIYXNDYXIiLCJoYXNIb3VzZSIsIkp1ZGVIYXNIb3VzZSIsIkhhc0ZMTCIsIkp1ZGVIYXNDYXJCeUlkIiwiSGFzR3VCYW8iLCJKdWRlSGFzSG91c2VCeUlkIiwic2VlZCIsImFzdCIsIk1hdGgiLCJmbG9vciIsInN0ciIsImdsb2JhbCIsImdldFRyYW5zbGF0aW9uIiwiYWdlIiwiQWdlIiwidXNlUmV0aXJlQWRzIiwiSGlnaEFzc2V0cyIsImsiLCJzdHJpbmciLCJzY2hlZHVsZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIkluaXRHZXRNb25leUlkIiwiTWFycnlBZ2UiLCJhY3RpdmUiLCJtYXJyeWFnZSIsIm1hcnJ5cm9sZSIsIk1hcnJ5Um9sZUlkIiwiRnVuZGF0aW9uQWdlIiwiY29tcGFueU5hbWUiLCJGdW5kYXRpb25Db21wYW55SWQiLCJNaWxsaW9uQWdlIiwiVGVuTWlsbGlvbkFnZSIsIkh1bmRyZWRNaWxsaW9uQWdlIiwiRm9ybWF0TnVtIiwicGxheVRpbWVzIiwiQ3JlYXRlUmVjb3JkIiwiQ2FjdWxhdGVTa2lsbFBvaW50IiwiQ2FjdWxhdGVBY2hpZXZlU3RhdGUiLCJzaG93UmV3YXJkVmlkZW8iLCJqczJhbmRyb2lkIiwibmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaW5qZWN0ZWRPYmplY3QiLCJzZXRKc0NvbnRlbnQiLCJDbGlja0NvbmZpcm0iLCJBdWRpb01nciIsInBsYXlTRlgiLCJIaXN0b3J5SGlnaEFzc2V0cyIsIlJlZnJlc2hIaXN0b3J5SGlnaEFzc2V0IiwiUGxhdGZvcm1Db250cm9sbGVyIiwic2V0VXNlckNsb3VkU3RvcmFnZSIsIlNhdmVVc2VyRGF0YSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiQ2xpY2tTaGFyZSIsIlNoYXJlVG9GcmllbmQiLCJhc3NldCIsInNraWxsUG9pbnQiLCJub2RlIiwicmVwdXRhdGlvblNraWxsUG9pbnQiLCJSZXB1dGF0aW9uIiwiU2tpbGxQb2ludEdldEJvbnVzIiwiU2tpbGxCb251c1BvaW50IiwiRG91YmxlU2tpbGxQb2ludCIsInNlbGYiLCJBZHNNZ3IiLCJTaG93VmlkZW9BZHMiLCJQb2ludEUiLCJvdXQiLCJDbG9zZURvdWJsZVBhbmVsIiwiQWNoaWV2ZW1lbnRMaXN0IiwiaSIsImR0IiwiaGFzRmluaXNoIiwiSnVkZUZpbmlzaEFueUFjaGlldmVtZW50IiwiSWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDMUMsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlHLFdBQVcsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdkIsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFDSixFQUFFLENBQUNLLFFBQVE7SUFDbEJDLE1BQU0sRUFBQ04sRUFBRSxDQUFDTyxNQUFNO0lBQ2hCQyxXQUFXLEVBQUNSLEVBQUUsQ0FBQ1MsS0FBSztJQUNwQkMsUUFBUSxFQUFDVixFQUFFLENBQUNTLEtBQUs7SUFDakJFLGtCQUFrQixFQUFDLENBQUM7SUFDcEJDLGVBQWUsRUFBQ1osRUFBRSxDQUFDYSxJQUFJO0lBRXZCQyxPQUFPLEVBQUNkLEVBQUUsQ0FBQ1MsS0FBSztJQUNoQk0sVUFBVSxFQUFDZixFQUFFLENBQUNTLEtBQUs7SUFFbkJPLFlBQVksRUFBQ2hCLEVBQUUsQ0FBQ1MsS0FBSztJQUVyQlEsV0FBVyxFQUFDakIsRUFBRSxDQUFDYSxJQUFJO0lBQ25CSyxVQUFVLEVBQUNsQixFQUFFLENBQUNTLEtBQUs7SUFFbkJVLFNBQVMsRUFBQ25CLEVBQUUsQ0FBQ2EsSUFBSTtJQUNqQk8sUUFBUSxFQUFDcEIsRUFBRSxDQUFDUyxLQUFLO0lBRWpCWSxXQUFXLEVBQUNyQixFQUFFLENBQUNhLElBQUk7SUFDbkJTLFVBQVUsRUFBQ3RCLEVBQUUsQ0FBQ1MsS0FBSztJQUVuQmMsY0FBYyxFQUFDdkIsRUFBRSxDQUFDYSxJQUFJO0lBQ3RCVyxlQUFlLEVBQUN4QixFQUFFLENBQUNTLEtBQUs7SUFFeEJnQixrQkFBa0IsRUFBQ3pCLEVBQUUsQ0FBQ2EsSUFBSTtJQUMxQmEsaUJBQWlCLEVBQUMxQixFQUFFLENBQUNTLEtBQUs7SUFFMUJrQixZQUFZLEVBQUMzQixFQUFFLENBQUNTLEtBQUs7SUFDckJtQixjQUFjLEVBQUM1QixFQUFFLENBQUNTLEtBQUs7SUFFdkJvQixhQUFhLEVBQUM3QixFQUFFLENBQUNTO0VBQ3JCLENBQUM7RUFFRHFCLFNBQVMsRUFBQyxTQUFBQSxVQUFBLEVBQVk7SUFBQSxJQUFBQyxLQUFBO0lBQ2xCLElBQUlDLFVBQVUsR0FBR2hDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDRixVQUFVO0lBQzlDLElBQUlHLE1BQU0sR0FBR25DLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDRSxXQUFXO0lBQzNDLElBQUlDLFFBQVEsR0FBR3JDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDSSxnQkFBZ0IsRUFBRTtJQUNwRCxJQUFJQyxNQUFNLEdBQUd2QyxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ00sVUFBVSxFQUFFO0lBQzVDLElBQUlDLFFBQVEsR0FBR3pDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDUSxZQUFZLEVBQUU7SUFDaEQsSUFBSUMsTUFBTSxHQUFHM0MsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNVLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSUMsUUFBUSxHQUFHN0MsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNZLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUlDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDZixNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLElBQUdhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ1gsUUFBUSxFQUN6QjtNQUNJVSxJQUFJLEdBQUcsQ0FBQztJQUNaLENBQUMsTUFDSSxJQUFHQyxHQUFHLEdBQUcsR0FBRyxJQUFJWCxRQUFRLEVBQzdCO01BQ0lVLElBQUksR0FBRyxDQUFDO0lBQ1osQ0FBQyxNQUNJLElBQUdDLEdBQUcsR0FBRyxHQUFHLElBQUlBLEdBQUcsR0FBRyxJQUFJLEVBQy9CO01BQ0lELElBQUksR0FBRyxDQUFDO0lBQ1osQ0FBQyxNQUNJLElBQUdDLEdBQUcsR0FBRyxJQUFJLElBQUlBLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQ1QsTUFBTSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxFQUMzRDtNQUNJTSxJQUFJLEdBQUcsQ0FBQztJQUNaLENBQUMsTUFDSSxJQUFHQyxHQUFHLEdBQUcsSUFBSSxJQUFJQSxHQUFHLEdBQUcsS0FBSyxJQUFJVCxNQUFNLElBQUlFLFFBQVEsRUFDdkQ7TUFDSU0sSUFBSSxHQUFHLENBQUM7SUFDWixDQUFDLE1BQ0ksSUFBR0MsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDTCxNQUFNLElBQUksQ0FBQ0UsUUFBUSxDQUFDLEVBQzdDO01BQ0lFLElBQUksR0FBRyxDQUFDO0lBQ1osQ0FBQyxNQUNJLElBQUdDLEdBQUcsR0FBRyxLQUFLLElBQUlMLE1BQU0sSUFBSUUsUUFBUSxFQUN6QztNQUNJRSxJQUFJLEdBQUcsQ0FBQztJQUNaO0lBRUEsSUFBSUksR0FBRyxHQUFHbkQsRUFBRSxDQUFDaUMsR0FBRyxDQUFDbUIsTUFBTSxDQUFDQyxjQUFjLENBQUMsU0FBUyxHQUFHTixJQUFJLENBQUM7SUFDeEQsSUFBSU8sR0FBRyxHQUFHdEQsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNxQixHQUFHO0lBQ2hDLElBQUd2RCxFQUFFLENBQUNpQyxHQUFHLENBQUNtQixNQUFNLENBQUNJLFlBQVksSUFBSSxLQUFLLEVBQ2xDRixHQUFHLElBQUksQ0FBQztJQUVaLElBQUlHLFVBQVUsR0FBR3pELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDdUIsVUFBVTtJQUU5QyxJQUFJQyxDQUFDLEdBQUMsQ0FBQztJQUNQLElBQUksQ0FBQzNDLFVBQVUsQ0FBQzRDLE1BQU0sR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLFlBQUk7TUFDZEYsQ0FBQyxFQUFFO01BQ0gzQixLQUFJLENBQUNoQixVQUFVLENBQUM0QyxNQUFNLEdBQUdSLEdBQUcsQ0FBQ1UsU0FBUyxDQUFDLENBQUMsRUFBQ0gsQ0FBQyxDQUFDO0lBQy9DLENBQUMsRUFBRSxHQUFHLEVBQUVQLEdBQUcsQ0FBQ1csTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7SUFFNUIsSUFBSSxDQUFDaEQsT0FBTyxDQUFDNkMsTUFBTSxHQUFHM0IsVUFBVTtJQUVoQyxJQUFJLENBQUNoQixZQUFZLENBQUMyQyxNQUFNLEdBQUczRCxFQUFFLENBQUNpQyxHQUFHLENBQUNtQixNQUFNLENBQUNDLGNBQWMsQ0FBQyxXQUFXLEdBQUNyRCxFQUFFLENBQUNpQyxHQUFHLENBQUNtQixNQUFNLENBQUNXLGNBQWMsQ0FBQztJQUVqRyxJQUFHL0QsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUM4QixRQUFRLElBQUksQ0FBQyxFQUNuQztNQUNJLElBQUksQ0FBQzdDLFNBQVMsQ0FBQzhDLE1BQU0sR0FBRyxJQUFJO01BQzVCLElBQUlDLFFBQVEsR0FBR2xFLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDOEIsUUFBUTtNQUMxQyxJQUFJRyxTQUFTLEdBQUduRSxFQUFFLENBQUNpQyxHQUFHLENBQUNtQixNQUFNLENBQUNDLGNBQWMsQ0FBQyxPQUFPLEdBQUNyRCxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ2tDLFdBQVcsQ0FBQztNQUNwRixJQUFJLENBQUNoRCxRQUFRLENBQUN1QyxNQUFNLEdBQUdPLFFBQVEsR0FBQyxPQUFPLEdBQUVDLFNBQVMsR0FBQyxNQUFNO0lBQzdELENBQUMsTUFFRDtNQUNJLElBQUksQ0FBQ2hELFNBQVMsQ0FBQzhDLE1BQU0sR0FBRyxLQUFLO0lBQ2pDOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUdqRSxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ21DLFlBQVksSUFBSSxDQUFDLEVBQ3ZDO01BQ0ksSUFBSSxDQUFDcEQsV0FBVyxDQUFDZ0QsTUFBTSxHQUFHLElBQUk7TUFDOUIsSUFBSUMsUUFBUSxHQUFHbEUsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNtQyxZQUFZO01BQzlDLElBQUlDLFdBQVcsR0FBR3RFLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsR0FBR3JELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDcUMsa0JBQWtCLENBQUM7TUFDbEcsSUFBSSxDQUFDckQsVUFBVSxDQUFDeUMsTUFBTSxHQUFHTyxRQUFRLEdBQUMsUUFBUSxHQUFDSSxXQUFXO0lBQzFELENBQUMsTUFFRDtNQUNJLElBQUksQ0FBQ3JELFdBQVcsQ0FBQ2dELE1BQU0sR0FBRyxLQUFLO0lBQ25DOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUdqRSxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ3NDLFVBQVUsSUFBSSxDQUFDLEVBQ3JDO01BQ0ksSUFBSSxDQUFDbkQsV0FBVyxDQUFDNEMsTUFBTSxHQUFHLElBQUk7TUFDOUIsSUFBSUMsUUFBUSxHQUFHbEUsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNzQyxVQUFVO01BQzVDLElBQUksQ0FBQ2xELFVBQVUsQ0FBQ3FDLE1BQU0sR0FBR08sUUFBUSxHQUFDLFVBQVU7SUFDaEQsQ0FBQyxNQUVEO01BQ0ksSUFBSSxDQUFDN0MsV0FBVyxDQUFDNEMsTUFBTSxHQUFHLEtBQUs7SUFDbkM7SUFFQSxJQUFHakUsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUN1QyxhQUFhLElBQUksQ0FBQyxFQUN4QztNQUNJLElBQUksQ0FBQ2xELGNBQWMsQ0FBQzBDLE1BQU0sR0FBRyxJQUFJO01BQ2pDLElBQUlDLFFBQVEsR0FBR2xFLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDdUMsYUFBYTtNQUMvQyxJQUFJLENBQUNqRCxlQUFlLENBQUNtQyxNQUFNLEdBQUdPLFFBQVEsR0FBQyxVQUFVO0lBQ3JELENBQUMsTUFFRDtNQUNJLElBQUksQ0FBQzNDLGNBQWMsQ0FBQzBDLE1BQU0sR0FBRyxLQUFLO0lBQ3RDO0lBRUEsSUFBR2pFLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDd0MsaUJBQWlCLElBQUksQ0FBQyxFQUM1QztNQUNJLElBQUksQ0FBQ2pELGtCQUFrQixDQUFDd0MsTUFBTSxHQUFHLElBQUk7TUFDckMsSUFBSUMsUUFBUSxHQUFHbEUsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUN3QyxpQkFBaUI7TUFDbkQsSUFBSSxDQUFDaEQsaUJBQWlCLENBQUNpQyxNQUFNLEdBQUdPLFFBQVEsR0FBQyxXQUFXO0lBQ3hELENBQUMsTUFFRDtNQUNJLElBQUksQ0FBQ3pDLGtCQUFrQixDQUFDd0MsTUFBTSxHQUFHLEtBQUs7SUFDMUM7SUFFQSxJQUFJLENBQUN0QyxZQUFZLENBQUNnQyxNQUFNLEdBQUdMLEdBQUcsR0FBRyxRQUFRO0lBQ3pDLElBQUksQ0FBQzFCLGNBQWMsQ0FBQytCLE1BQU0sR0FBRzNELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ3VCLFNBQVMsQ0FBQ3hDLE1BQU0sQ0FBQztJQUM1RCxJQUFJLENBQUNOLGFBQWEsQ0FBQzhCLE1BQU0sR0FBRzNELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ3VCLFNBQVMsQ0FBQ2xCLFVBQVUsQ0FBQztJQUUvRCxJQUFJLENBQUNyRCxNQUFNLENBQUN1RCxNQUFNLEdBQUcsRUFBRTtJQUN2QjNELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDMEMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUVuQzVFLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDMkMsWUFBWSxFQUFFO0lBQ2pDLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7SUFDekIsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtFQUMvQixDQUFDO0VBQ0RDLGVBQWUsV0FBQUEsZ0JBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0MsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQztFQUM3QyxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQUEsVUFBVSxXQUFBQSxXQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBQztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLFdBQVNILElBQUksY0FBU0MsSUFBSSxDQUFHO0lBQ3hDLElBQUdHLE1BQU0sQ0FBQ0MsY0FBYyxJQUFJRCxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsWUFBWSxFQUFDO01BQzNERixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsWUFBWSxDQUFDTixJQUFJLEVBQUVDLElBQUksQ0FBQztJQUNsRDtFQUNKLENBQUM7RUFFRE0sWUFBWSxFQUFDLFNBQUFBLGFBQUEsRUFBVTtJQUNuQnpGLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ3lELFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFHM0YsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUMwRCxpQkFBaUIsR0FBRzVGLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDRSxXQUFXLEVBQ3hFO01BQ0lwQyxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQzJELHVCQUF1QixDQUFDN0YsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNFLFdBQVcsQ0FBQztNQUMxRXBDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQzZELGtCQUFrQixDQUFDQyxtQkFBbUIsQ0FBQy9GLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDRSxXQUFXLENBQUM7SUFDakY7SUFDQXBDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDOEQsWUFBWSxFQUFFO0lBQ2pDaEcsRUFBRSxDQUFDaUcsUUFBUSxDQUFDQyxTQUFTLENBQUMsYUFBYSxDQUFDO0VBQ3hDLENBQUM7RUFFREMsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtJQUNqQm5HLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQzZELGtCQUFrQixDQUFDTSxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQzlDLENBQUM7RUFFRDtFQUNBdEIsa0JBQWtCLEVBQUMsU0FBQUEsbUJBQUEsRUFBVTtJQUN6QixJQUFJdUIsS0FBSyxHQUFHcEQsSUFBSSxDQUFDQyxLQUFLLENBQUNsRCxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ0UsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM5RCxJQUFJa0UsVUFBVSxHQUFHLENBQUM7SUFDbEIsSUFBR0QsS0FBSyxJQUFJLEdBQUcsRUFDZjtNQUNJQyxVQUFVLEdBQUcsQ0FBQztJQUNsQixDQUFDLE1BQ0ksSUFBR0QsS0FBSyxHQUFHLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFDbkM7TUFDSUMsVUFBVSxHQUFHckQsSUFBSSxDQUFDQyxLQUFLLENBQUNtRCxLQUFLLEdBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRTtJQUN6QyxDQUFDLE1BQ0ksSUFBR0EsS0FBSyxJQUFJLElBQUksSUFBSUEsS0FBSyxJQUFJLElBQUksRUFDdEM7TUFDSUMsVUFBVSxHQUFHLEVBQUUsR0FBR3JELElBQUksQ0FBQ0MsS0FBSyxDQUFDbUQsS0FBSyxHQUFDLEdBQUcsQ0FBQyxHQUFDLEVBQUU7SUFDOUMsQ0FBQyxNQUNJLElBQUdBLEtBQUssSUFBSSxLQUFLLElBQUlBLEtBQUssSUFBSSxLQUFLLEVBQ3hDO01BQ0lDLFVBQVUsR0FBRyxHQUFHLEdBQUdyRCxJQUFJLENBQUNDLEtBQUssQ0FBQ21ELEtBQUssR0FBQyxJQUFJLENBQUMsR0FBQyxFQUFFO0lBQ2hELENBQUMsTUFDSSxJQUFHQSxLQUFLLElBQUksTUFBTSxFQUN2QjtNQUNJQyxVQUFVLEdBQUcsR0FBRztJQUNwQjtJQUNBLElBQUksQ0FBQzVGLFFBQVEsQ0FBQzZGLElBQUksQ0FBQ3RDLE1BQU0sR0FBRyxLQUFLO0lBQ2pDLElBQUl1QyxvQkFBb0IsR0FBRyxDQUFDO0lBQzVCLElBQUdILEtBQUssSUFBSSxHQUFHLEVBQ2Y7TUFDSUcsb0JBQW9CLEdBQUd2RCxJQUFJLENBQUNDLEtBQUssQ0FBQ2xELEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDdUUsVUFBVSxHQUFHLENBQUMsQ0FBQztNQUNwRSxJQUFJRCxvQkFBb0IsR0FBRyxFQUFFLEVBQzdCO1FBQ0ksSUFBSSxDQUFDOUYsUUFBUSxDQUFDNkYsSUFBSSxDQUFDdEMsTUFBTSxHQUFHLElBQUk7UUFDaEN1QyxvQkFBb0IsR0FBRyxHQUFHO01BQzlCO0lBQ0o7SUFFQSxJQUFJLENBQUM3RixrQkFBa0IsSUFBSTJGLFVBQVUsR0FBR3JELElBQUksQ0FBQ0MsS0FBSyxDQUFDb0QsVUFBVSxJQUFJdEcsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUN3RSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHRixvQkFBb0I7SUFDckl4RyxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ3lFLGVBQWUsSUFBSSxJQUFJLENBQUNoRyxrQkFBa0I7SUFDN0QsSUFBSSxDQUFDSCxXQUFXLENBQUNtRCxNQUFNLEdBQUcsSUFBSSxDQUFDaEQsa0JBQWtCO0lBQ2pEO0lBQ0EsSUFBSSxDQUFDQyxlQUFlLENBQUNxRCxNQUFNLEdBQUcsSUFBSTtJQUNsQyxJQUFHLElBQUksQ0FBQ3RELGtCQUFrQixJQUFJLENBQUMsRUFDM0IsSUFBSSxDQUFDQyxlQUFlLENBQUNxRCxNQUFNLEdBQUcsS0FBSztJQUN2QztFQUNKLENBQUM7O0VBRUQyQyxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBQSxFQUFVO0lBQ3ZCLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2ZBLElBQUksQ0FBQzdCLGVBQWUsRUFBRTtJQUN0QmhGLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQzZFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDakgsUUFBUSxDQUFDa0gsTUFBTSxFQUFFLFVBQVNDLEdBQUcsRUFBQztNQUNyRCxJQUFHQSxHQUFHLElBQUksQ0FBQyxFQUNYO1FBQ0lqSCxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ3lFLGVBQWUsSUFBSUUsSUFBSSxDQUFDbEcsa0JBQWtCO1FBQzdEa0csSUFBSSxDQUFDSyxnQkFBZ0IsRUFBRTtNQUMzQjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0VBQ0osQ0FBQzs7RUFFREEsZ0JBQWdCLEVBQUMsU0FBQUEsaUJBQUEsRUFBVTtJQUN2QmxILEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQ3lELFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUMvRSxlQUFlLENBQUNxRCxNQUFNLEdBQUcsS0FBSztFQUN2QyxDQUFDO0VBRUQ7RUFDQWMsb0JBQW9CLEVBQUMsU0FBQUEscUJBQUEsRUFDckI7SUFDSSxJQUFJb0MsZUFBZSxHQUFHbkgsRUFBRSxDQUFDaUMsR0FBRyxDQUFDQyxXQUFXLENBQUNpRixlQUFlO0lBQ3hELEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxlQUFlLENBQUNyRCxNQUFNLEVBQUVzRCxDQUFDLEVBQUUsRUFBRTtNQUM3QyxJQUFJQyxFQUFFLEdBQUdGLGVBQWUsQ0FBQ0MsQ0FBQyxDQUFDO01BQzNCLElBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxTQUFTLEVBQ2hCO1FBQ0l0SCxFQUFFLENBQUNpQyxHQUFHLENBQUNDLFdBQVcsQ0FBQ3FGLHdCQUF3QixDQUFDRixFQUFFLENBQUNHLEVBQUUsQ0FBQztNQUN0RDtJQUNKO0VBQ0o7QUFHSixDQUFDLENBQUM7QUFDRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUczSCxXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWNoaWV2ZUNvbmQgPSByZXF1aXJlKFwiQWNoaWV2ZUNvbmRcIik7XHJcbnZhciBSZWNvcmRTdHJ1Y3QgPSByZXF1aXJlKFwiUmVjb3JkU3RydWN0XCIpO1xyXG52YXIgQWRzUGFyYW0gPSByZXF1aXJlKFwiQWRzUGFyYW1cIik7XHJcbnZhciBSZXRpcmVQYW5lbCA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZGVzTGJsOmNjLlJpY2hUZXh0LFxyXG4gICAgICAgIGNyQ29kZTpjYy5TcHJpdGUsXHJcbiAgICAgICAgU2tpbGxHZXRMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgUmVHZXRMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgcm91bmRHZXRTa2lsbFBvaW50OjAsXHJcbiAgICAgICAgc2tpbGxQb2ludFBhbmVsOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIG5hbWVMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgem9uZ2ppZUxibDpjYy5MYWJlbCxcclxuXHJcbiAgICAgICAgSW5pdE1vbmV5TGJsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICBDb21wYW55Tm9kZTpjYy5Ob2RlLFxyXG4gICAgICAgIENvbXBhbnlMYmw6Y2MuTGFiZWwsXHJcblxyXG4gICAgICAgIE1hcnJ5Tm9kZTpjYy5Ob2RlLFxyXG4gICAgICAgIE1hcnJ5TGJsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICBNaWxsaW9uTm9kZTpjYy5Ob2RlLFxyXG4gICAgICAgIE1pbGxpb25MYmw6Y2MuTGFiZWwsXHJcblxyXG4gICAgICAgIFRlbk1pbGxpb25Ob2RlOmNjLk5vZGUsXHJcbiAgICAgICAgVGVuTWlsbGlvbkxhYmVsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICBIdW5kcmVkTWlsbGlvbk5vZGU6Y2MuTm9kZSxcclxuICAgICAgICBIdW5kcmVkTWlsbGlvbkxibDpjYy5MYWJlbCxcclxuXHJcbiAgICAgICAgUmV0aXJlQWdlTGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIFJldGlyZUFzc2V0TGJsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICBIaWdoQXNzZXRzTGJsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93UGFuZWw6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwbGF5ZXJOYW1lID0gY2MuTWdyLlVzZXJEYXRhTWdyLnBsYXllck5hbWU7XHJcbiAgICAgICAgdmFyIEFzc2V0cyA9IGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leTtcclxuICAgICAgICB2YXIgaGFzTWFycnkgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSnVkZUhhc01hcnJ5Q29uZCgpO1xyXG4gICAgICAgIHZhciBoYXNDYXIgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSnVkZUhhc0NhcigpO1xyXG4gICAgICAgIHZhciBoYXNIb3VzZSA9IGNjLk1nci5Vc2VyRGF0YU1nci5KdWRlSGFzSG91c2UoKTtcclxuICAgICAgICB2YXIgSGFzRkxMID0gY2MuTWdyLlVzZXJEYXRhTWdyLkp1ZGVIYXNDYXJCeUlkKDIpO1xyXG4gICAgICAgIHZhciBIYXNHdUJhbyA9IGNjLk1nci5Vc2VyRGF0YU1nci5KdWRlSGFzSG91c2VCeUlkKDEpOy8v5Y+k5aCh55qEaWRcclxuICAgICAgICB2YXIgc2VlZCA9IDA7Ly9NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XHJcbiAgICAgICAgdmFyIGFzdCA9IE1hdGguZmxvb3IoQXNzZXRzIC8gMTAwMDApO1xyXG4gICAgICAgIGlmKGFzdCA8IDEwMCAmJiAhaGFzTWFycnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZWVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhc3QgPCAxMDAgJiYgaGFzTWFycnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZWVkID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhc3QgPiAxMDAgJiYgYXN0IDwgMTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlZWQgPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFzdCA+IDEwMDAgJiYgYXN0IDwgMTAwMDAgJiYgKCFoYXNDYXIgfHwgIWhhc0hvdXNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlZWQgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFzdCA+IDEwMDAgJiYgYXN0IDwgMTAwMDAgJiYgaGFzQ2FyICYmIGhhc0hvdXNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VlZCA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYXN0ID4gMTAwMDAgJiYgKCFIYXNGTEwgfHwgIUhhc0d1QmFvKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlZWQgPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFzdCA+IDEwMDAwICYmIEhhc0ZMTCAmJiBIYXNHdUJhbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlZWQgPSA2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN0ciA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJSZXRpcmVfXCIgKyBzZWVkKTtcclxuICAgICAgICB2YXIgYWdlID0gY2MuTWdyLlVzZXJEYXRhTWdyLkFnZTtcclxuICAgICAgICBpZihjYy5NZ3IuZ2xvYmFsLnVzZVJldGlyZUFkcyA9PSBmYWxzZSlcclxuICAgICAgICAgICAgYWdlIC09IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIEhpZ2hBc3NldHMgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSGlnaEFzc2V0cztcclxuXHJcbiAgICAgICAgdmFyIGs9MDtcclxuICAgICAgICB0aGlzLnpvbmdqaWVMYmwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgdGhpcy56b25namllTGJsLnN0cmluZyA9IHN0ci5zdWJzdHJpbmcoMCxrKTtcclxuICAgICAgICB9LCAwLjMsIHN0ci5sZW5ndGggKyAxLCAwLjMpOyBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5hbWVMYmwuc3RyaW5nID0gcGxheWVyTmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5Jbml0TW9uZXlMYmwuc3RyaW5nID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcIkNhc2hJbml0X1wiK2NjLk1nci5nbG9iYWwuSW5pdEdldE1vbmV5SWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5NYXJyeUFnZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5NYXJyeU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIG1hcnJ5YWdlID0gY2MuTWdyLlVzZXJEYXRhTWdyLk1hcnJ5QWdlO1xyXG4gICAgICAgICAgICB2YXIgbWFycnlyb2xlID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcInJvbGVfXCIrY2MuTWdyLlVzZXJEYXRhTWdyLk1hcnJ5Um9sZUlkKTtcclxuICAgICAgICAgICAgdGhpcy5NYXJyeUxibC5zdHJpbmcgPSBtYXJyeWFnZStcIuWygeaXtuWQjDogXCIrIG1hcnJ5cm9sZStcIue7k+aIkOS8tOS+o1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLk1hcnJ5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkRpdm9yY2VBZ2UgIT0gMClcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICB2YXIgbWFycnlhZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuRGl2b3JjZUFnZTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkZ1bmRhdGlvbkFnZSAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Db21wYW55Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbWFycnlhZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuRnVuZGF0aW9uQWdlO1xyXG4gICAgICAgICAgICB2YXIgY29tcGFueU5hbWUgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiY29tcGFueV9cIiArIGNjLk1nci5Vc2VyRGF0YU1nci5GdW5kYXRpb25Db21wYW55SWQpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbXBhbnlMYmwuc3RyaW5nID0gbWFycnlhZ2UrXCLlsoHml7bliJvlip46IFwiK2NvbXBhbnlOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNvbXBhbnlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZihjYy5NZ3IuVXNlckRhdGFNZ3IuQmFua3J1cHRBZ2UgIT0gMClcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICB2YXIgbWFycnlhZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQmFua3J1cHRBZ2U7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5NaWxsaW9uQWdlICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLk1pbGxpb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtYXJyeWFnZSA9IGNjLk1nci5Vc2VyRGF0YU1nci5NaWxsaW9uQWdlO1xyXG4gICAgICAgICAgICB0aGlzLk1pbGxpb25MYmwuc3RyaW5nID0gbWFycnlhZ2UrXCLlsoHml7botYTkuqfnqoHnoLTnmb7kuIdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5NaWxsaW9uTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5UZW5NaWxsaW9uQWdlICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRlbk1pbGxpb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtYXJyeWFnZSA9IGNjLk1nci5Vc2VyRGF0YU1nci5UZW5NaWxsaW9uQWdlO1xyXG4gICAgICAgICAgICB0aGlzLlRlbk1pbGxpb25MYWJlbC5zdHJpbmcgPSBtYXJyeWFnZStcIuWygeaXtui1hOS6p+eqgeegtOWNg+S4h1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRlbk1pbGxpb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkh1bmRyZWRNaWxsaW9uQWdlICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkh1bmRyZWRNaWxsaW9uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbWFycnlhZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSHVuZHJlZE1pbGxpb25BZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuSHVuZHJlZE1pbGxpb25MYmwuc3RyaW5nID0gbWFycnlhZ2UrXCLlsoHml7bov5vlhaXkur/kuIflr4zosarmppxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5IdW5kcmVkTWlsbGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlJldGlyZUFnZUxibC5zdHJpbmcgPSBhZ2UgKyBcIumAgOS8keaXtui1hOS6pzpcIjtcclxuICAgICAgICB0aGlzLlJldGlyZUFzc2V0TGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKEFzc2V0cyk7XHJcbiAgICAgICAgdGhpcy5IaWdoQXNzZXRzTGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKEhpZ2hBc3NldHMpO1xyXG5cclxuICAgICAgICB0aGlzLmRlc0xibC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5wbGF5VGltZXMgKz0gMTsgLy/njqnlrrbnmoTmuLjmiI/mrKHmlbDlop7liqBcclxuICAgICAgICBcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ3JlYXRlUmVjb3JkKCk7XHJcbiAgICAgICAgdGhpcy5DYWN1bGF0ZVNraWxsUG9pbnQoKTtcclxuICAgICAgICB0aGlzLkNhY3VsYXRlQWNoaWV2ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jld2FyZFZpZGVvKCkge1xyXG4gICAgICAgIHRoaXMuanMyYW5kcm9pZCgnc2hvd19yZXdhcmRfdmlkZW8nLCAnMScpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vL+a/gOWKseinhumikeaSreaUvuWujOaIkOWbnuiwg+aWueazlSBjb250aW51ZV9nYW1lXHJcbiAgICAvLy8gTmF0aXZlLmFuZHJvaWQyanMoXCJjb250aW51ZV9nYW1lXCIsICgpPT57XHJcbiAgICAvLy8gICAgIC8v5r+A5Yqx6KeG6aKR5pKt5pS+5a6M5oiQ77yM5Y6f55Sf56uv5Zue6LCDXHJcbiAgICAvLy8gfSk7XHJcbiAgICBqczJhbmRyb2lkKG5hbWUsIGRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBuYW1lOiR7bmFtZX0tZGF0YToke2RhdGF9YCk7XHJcbiAgICAgICAgaWYod2luZG93LmluamVjdGVkT2JqZWN0ICYmIHdpbmRvdy5pbmplY3RlZE9iamVjdC5zZXRKc0NvbnRlbnQpe1xyXG4gICAgICAgICAgICB3aW5kb3cuaW5qZWN0ZWRPYmplY3Quc2V0SnNDb250ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tDb25maXJtOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IuSGlzdG9yeUhpZ2hBc3NldHMgPCBjYy5NZ3IuVXNlckRhdGFNZ3IuQXNzZXRzTW9uZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaEhpc3RvcnlIaWdoQXNzZXQoY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5KTtcclxuICAgICAgICAgICAgY2MuTWdyLlBsYXRmb3JtQ29udHJvbGxlci5zZXRVc2VyQ2xvdWRTdG9yYWdlKGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5TYXZlVXNlckRhdGEoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFydF9zY2VuZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xpY2tTaGFyZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5QbGF0Zm9ybUNvbnRyb2xsZXIuU2hhcmVUb0ZyaWVuZCgxKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/nu5PnrpfmioDog73ngrlcclxuICAgIENhY3VsYXRlU2tpbGxQb2ludDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBhc3NldCA9IE1hdGguZmxvb3IoY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5IC8gMTAwMDApO1xyXG4gICAgICAgIHZhciBza2lsbFBvaW50ID0gMDtcclxuICAgICAgICBpZihhc3NldCA8PSAxMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBza2lsbFBvaW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhc3NldCA+IDEwMCAmJiBhc3NldCA8PSA5OTkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBza2lsbFBvaW50ID0gTWF0aC5mbG9vcihhc3NldC8xMDApKjEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFzc2V0ID49IDEwMDAgJiYgYXNzZXQgPD0gOTk5OSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNraWxsUG9pbnQgPSA5MCArIE1hdGguZmxvb3IoYXNzZXQvNTAwKSoxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhc3NldCA+PSAxMDAwMCAmJiBhc3NldCA8PSA5OTk5OSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNraWxsUG9pbnQgPSAzMDAgKyBNYXRoLmZsb29yKGFzc2V0LzUwMDApKjEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGFzc2V0ID49IDEwMDAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNraWxsUG9pbnQgPSA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuUmVHZXRMYmwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgcmVwdXRhdGlvblNraWxsUG9pbnQgPSAwO1xyXG4gICAgICAgIGlmKGFzc2V0ID49IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcHV0YXRpb25Ta2lsbFBvaW50ID0gTWF0aC5mbG9vcihjYy5NZ3IuVXNlckRhdGFNZ3IuUmVwdXRhdGlvbiAvIDIpO1xyXG4gICAgICAgICAgICBpZiAocmVwdXRhdGlvblNraWxsUG9pbnQgPiA1MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZUdldExibC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXB1dGF0aW9uU2tpbGxQb2ludCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3VuZEdldFNraWxsUG9pbnQgKz0gc2tpbGxQb2ludCArIE1hdGguZmxvb3Ioc2tpbGxQb2ludCAqIChjYy5NZ3IuVXNlckRhdGFNZ3IuU2tpbGxQb2ludEdldEJvbnVzIC8gMTAwKSkgKyByZXB1dGF0aW9uU2tpbGxQb2ludDtcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuU2tpbGxCb251c1BvaW50ICs9IHRoaXMucm91bmRHZXRTa2lsbFBvaW50O1xyXG4gICAgICAgIHRoaXMuU2tpbGxHZXRMYmwuc3RyaW5nID0gdGhpcy5yb3VuZEdldFNraWxsUG9pbnQ7XHJcbiAgICAgICAgLy9jYy5sb2coXCLmnKzlsYDojrflvpfnmoTmioDog73ngrkgPSBcIiArIHRoaXMucm91bmRHZXRTa2lsbFBvaW50KTtcclxuICAgICAgICB0aGlzLnNraWxsUG9pbnRQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMucm91bmRHZXRTa2lsbFBvaW50ID09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxQb2ludFBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vY2MuTWdyLlVzZXJEYXRhTWdyLlNraWxsQm9udXNQb2ludCA9IHNraWxsUG9pbnQgKyBNYXRoLmZsb29yKHNraWxsUG9pbnQgKiAoY2MuTWdyLlVzZXJEYXRhTWdyLlNraWxsUG9pbnRHZXRCb251cyAvIDEwMCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBEb3VibGVTa2lsbFBvaW50OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuc2hvd1Jld2FyZFZpZGVvKCk7XHJcbiAgICAgICAgY2MuTWdyLkFkc01nci5TaG93VmlkZW9BZHMoQWRzUGFyYW0uUG9pbnRFLCBmdW5jdGlvbihvdXQpe1xyXG4gICAgICAgICAgICBpZihvdXQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlNraWxsQm9udXNQb2ludCArPSBzZWxmLnJvdW5kR2V0U2tpbGxQb2ludDtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ2xvc2VEb3VibGVQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdmFyIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xyXG4gICAgICAgIC8vY2MuTWdyLlBsYXRmb3JtQ29udHJvbGxlci5TaGFyZVRvRnJpZW5kKGluZGV4KTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VEb3VibGVQYW5lbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5za2lsbFBvaW50UGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v57uT566X5piv5ZCm5a6M5oiQ5LqGIOaIkOWwsVxyXG4gICAgQ2FjdWxhdGVBY2hpZXZlU3RhdGU6ZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBBY2hpZXZlbWVudExpc3QgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQWNoaWV2ZW1lbnRMaXN0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQWNoaWV2ZW1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBkdCA9IEFjaGlldmVtZW50TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoIWR0Lmhhc0ZpbmlzaClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkp1ZGVGaW5pc2hBbnlBY2hpZXZlbWVudChkdC5JZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBSZXRpcmVQYW5lbDsiXX0=