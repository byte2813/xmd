
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca544mVJuxCB4EzJTe1hDmP', 'GameScene');
// Scripts/UI/GameScene.js

"use strict";

var ItemType = require("ItemType");
var UserState = require("UserState");
var GoodsItem = require("GoodsItem");
var BuyTipPanel = require("BuyTipPanel");
var SaleTipPanel = require("SaleTipPanel");
var CommonTipPanel = require("CommonTipPanel");
var CompanyCreateTipPanel = require("CompanyCreateTipPanel");
var CompanyBuyTipPanel = require("CompanyBuyTipPanel");
var CompanySaleTipPanel = require("CompanySaleTipPanel");
var MateTipPanel = require("MateTipPanel");
var MateItemPanel = require("MateItemPanel");
var EnjoyPanel = require("EnjoyPanel");
var CommonBuyPanel = require("CommonBuyPanel");
var OwnedPanel = require("OwnedPanel");
var BetPanel = require("BetPanel");
var RetirePanel = require("RetirePanel");
var AddCapacityPanel = require("AddCapacity");
var MarketTipPanel = require("MarketTipPanel");
var TreatPanel = require("TreatPanel");
var EventTipPanel = require("EventPanel");
var EventResultPanel = require("EventResultPanel");
var WatchAdsPanel = require("WatchAdsPanel");
var MarryPanel = require("MarryPanel");
var TutorialPanel = require("TutorialPanel");
var TimePanel = require("TimePanel");
var AdsRetirePanel = require("AdsRetirePanel");
var UnlockMatePanel = require("UnlockMatePanel");
var RankPanel = require("RankPanel");
var TutorialStep = require("TutorialStep");
var eyouClientTiktok = require('EyouClientTiktok');
var eyouClientKs = require('EyouClientKs');
var GameScene = cc.Class({
  "extends": cc.Component,
  properties: {
    MainAtlas: cc.SpriteAtlas,
    BigApAtlas: cc.SpriteAtlas,
    CashLbl: cc.Label,
    AssetLbl: cc.Label,
    CurAgeLbl: cc.Label,
    TotalAgeLbl: cc.Label,
    HpLbl: cc.Label,
    ReputationLbl: cc.Label,
    CapcityLbl: cc.Label,
    HpIcon: cc.Sprite,
    MarketItem: cc.Prefab,
    OwnItem: cc.Prefab,
    CompanyItem: cc.Prefab,
    MarketParent: cc.Node,
    OwnParent: cc.Node,
    CompanyParent: cc.Node,
    MarketPanel: cc.Node,
    BusinessPanel: cc.Node,
    WatchAdsBtn: cc.Sprite,
    TipCashSp: cc.Sprite,
    MarketTipPanel: MarketTipPanel,
    //市场行情提示
    BuyTip: BuyTipPanel,
    SaleTip: SaleTipPanel,
    CommonTip: CommonTipPanel,
    CompanyCreatePanel: CompanyCreateTipPanel,
    StockBuyTipPanel: CompanyBuyTipPanel,
    StockSaleTipPanel: CompanySaleTipPanel,
    MatePanel: MateTipPanel,
    MateItemTip: MateItemPanel,
    EnjoyTipPanel: EnjoyPanel,
    CommonBuyTipPanel: CommonBuyPanel,
    OwnedTipPanel: OwnedPanel,
    BetTipPanel: BetPanel,
    RetirePanelTip: RetirePanel,
    AdsRetirePanel: AdsRetirePanel,
    UnlockMatePanel: UnlockMatePanel,
    rankPanel: RankPanel,
    TreatPanel: TreatPanel,
    EventPanel: EventTipPanel,
    EventResultPanel: EventResultPanel,
    AddCapPanel: AddCapacityPanel,
    WatchAdsPanel: WatchAdsPanel,
    MarryPanel: MarryPanel,
    TutorialPanel: TutorialPanel,
    TimePanel: TimePanel,
    toggleMarket: cc.Toggle,
    toggleBussiness: cc.Toggle,
    toggleMate: cc.Toggle,
    toggleEnjoy: cc.Toggle,
    MateNewTip: cc.Node,
    AdSp: "aishen",
    wxSubContextView: cc.Node,
    SwanSubContextView: cc.Node,
    marketTipData: null,
    screenRecordingBtn: cc.Node,
    desktopBtn: cc.Node,
    useBtn: cc.Node
  },
  onLoad: function onLoad() {
    //監聽打開購買
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenBuyTip, function (data) {
      this.BuyTip.node.active = true;
      this.BuyTip.ShowPanel(data);
    }, this);
    //監聽購買成功
    cc.director.GlobalEvent.on(cc.Mgr.Event.BuySuccess, function (data) {
      this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshOwnedItems(data);
      this.RefreshUIShow();
    }, this);
    //监听 出售窗口
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenSaleTip, function (data) {
      this.SaleTip.node.active = true;
      this.SaleTip.ShowPanel(data);
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.SaleSuccess, function (data) {
      this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshOwnedItems(data);
      this.RefreshUIShow();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenCommonTip, function (data) {
      if (cc.Mgr.global.tutorialStep != -1) {
        this.CommonTip.node.active = false;
        return;
      }
      if (this.CommonTip.node.active == true) {
        return;
      }
      this.CommonTip.node.active = true;
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.CommonTip.ShowPanel(data);
      if (data.forWhat != null && data.forWhat == "Event_Yes") {
        //cc.log("----------------"+ data.Pdata.Id)
        if (data.Pdata.Id != -1) this.RefreshOwnedItems(data.Pdata);
        this.RefreshUIShow();
      }
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenEventResult, function (data) {
      this.EventResultPanel.node.active = true;
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.EventResultPanel.ShowPanel(data);
      if (data.forWhat != null && data.forWhat == "Event_Yes") {
        if (data.Pdata.Id != -1) this.RefreshOwnedItems(data.Pdata);else if (data.Pdata.companyId != -1) this.RefreshCompanyItemsFromEvent(data.Pdata.companyId);
        this.RefreshUIShow();
      }
    }, this);

    //打开创办公司panel
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenCompanyCreate, function (data) {
      this.CompanyCreatePanel.node.active = true;
      this.CompanyCreatePanel.ShowPanel(data);
    }, this);

    //创办公司
    cc.director.GlobalEvent.on(cc.Mgr.Event.CreateCompanySuccess, function (data) {
      this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
      this.RefreshCompanyItemsAfterBuy(data);
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
      this.CheckTutorialHappen(); //创办玩公司有一次引导
    }, this);

    //打开购买股票panel
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenStuckBuyTip, function (data) {
      this.StockBuyTipPanel.node.active = true;
      this.StockBuyTipPanel.ShowPanel(data);
    }, this);

    //购买股票成功
    cc.director.GlobalEvent.on(cc.Mgr.Event.BuyStockSuccess, function (data) {
      this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
      this.RefreshCompanyItemsAfterBuy(data);
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
    }, this);

    //打开出售股票panel
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenStuckSaleTip, function (data) {
      this.StockSaleTipPanel.node.active = true;
      this.StockSaleTipPanel.ShowPanel(data);
    }, this);

    //出售股票成功
    cc.director.GlobalEvent.on(cc.Mgr.Event.SaleStockSuccess, function (data) {
      this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
      this.RefreshCompanyItemsAfterBuy(data);
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
    }, this);

    //打开约会提示面板
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenMateTip, function (data) {
      this.MateItemTip.node.active = true;
      this.MateItemTip.ShowPanel(data);
    }, this);

    //打开约会完成
    cc.director.GlobalEvent.on(cc.Mgr.Event.DateSuccess, function (data) {
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshMateItemUI(data.Id);
      this.RefreshUIShow();
      //this.StartMateLoveTutorial();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.DateLater, function (data) {
      this.StartMateLoveTutorial();
    }, this);

    //打开共用买
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenCommonBuy, function (data) {
      //cc.log("收到打开");
      this.CommonBuyTipPanel.node.active = true;
      this.CommonBuyTipPanel.ShowPanel(data);
    }, this);

    //共用买mai 成功返回
    cc.director.GlobalEvent.on(cc.Mgr.Event.CommonBuySaleSuccess, function (data) {
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
      if (data.flag == "Sale") this.OwnedTipPanel.ShowPanel();
      if (data.Disvorce && data.Disvorce == true) {
        this.RefreshCompanyItemsAfterDisvorce();
        this.MatePanel.RefreshPanelItems();
        cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      }
    }, this);

    //治疗完成
    cc.director.GlobalEvent.on(cc.Mgr.Event.TreatSuccess, function (data) {
      cc.Mgr.UserDataMgr.userState = UserState.OK;
      cc.Mgr.UserDataMgr.RecoverYear = 0;
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
      ////cc.log("----------------士大夫胜多负少-----------------------" + cc.Mgr.UserDataMgr.HpPoint);
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.RefreshCashAsset, function (data) {
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
    }, this);

    //赌博
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenBetTip, function (data) {
      this.BetTipPanel.node.active = true;
      this.RefreshUIShow();
      this.BetTipPanel.ShowPanel(data);
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenUnLockMate, function (data) {
      this.UnlockMatePanel.node.active = true;
      this.MateNewTip.active = true;
      this.UnlockMatePanel.ShowPanel(data);
      this.MatePanel.RefreshPanelItems();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.Retire, function (data) {
      this.RetirePanelTip.node.active = true;
      this.RetirePanelTip.ShowPanel();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.RefreshAllUIShow, function (data) {
      this.RefreshUIShow();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.UseRetireAdsSkill, function (data) {
      this.AdsRetirePanel.node.active = true;
      this.AdsRetirePanel.ShowPanel();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.AddWareHouseCapacity, function (data) {
      cc.Mgr.UserDataMgr.RefreshUserAssets(false);
      this.RefreshUIShow();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenMarry, function (data) {
      this.MarryPanel.node.active = true;
      this.MarryPanel.ShowPanel(data);
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenTutorial, function (data) {
      this.TutorialPanel.node.active = true;
      this.TutorialPanel.ShowPanel(data);
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.ClockEnd, function (data) {
      this.ToNextYear();
    }, this);
    cc.director.GlobalEvent.on(cc.Mgr.Event.OpenEnjoy, function (data) {
      this.ChooseOpenEnjoy();
    }, this);

    //打开创办公司panel
    cc.director.GlobalEvent.on(cc.Mgr.Event.ShareVideo, function (data) {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.BYTEDANCE_GAME === cc.sys.platform) {
        var shareAppMessageInfo = {
          channel: 'video',
          extra: {
            videoPath: data.videoPath
          }
        };
        eyouClientTiktok.getIns().shareAppMessage(shareAppMessageInfo, function (shareAppMessageCallback) {
          console.log('分享录屏回调:>', shareAppMessageCallback);
        });
      } else if (isKuaiShou) {
        var publishVideoInfo = {
          videoID: data.videoPath
        };
        eyouClientKs.getIns().publishVideo(publishVideoInfo);
      }
    }, this);
  },
  start: function start() {
    this.initTopUIData();
    //初始化市场数据
    this.InitMarketItems();
    //初始化已经有的物品
    this.InitOwnedItems();
    //初始化股市公司数据
    this.InitCompanyItems();
    this.refreshAdsSp(3);
    cc.Mgr.AdsMgr.HideBannerAd();
    this.dealScreenRecordingBtnShow();
    this.desktopUseBtnShow();
  },
  dealScreenRecordingBtnShow: function dealScreenRecordingBtnShow() {
    var _this = this;
    eyouClientTiktok.getIns().screenRecordingFlag = 0;
    eyouClientKs.getIns().screenRecordingFlag = 0;
    this.syncScreenRecordingShow();
    var isKuaiShou = false;
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      isKuaiShou = true;
    }
    if (cc.sys.BYTEDANCE_GAME === cc.sys.platform) {
      var createGameRecorderInfo = {
        onStart: function onStart() {},
        onStop: function onStop(onStopRes) {
          eyouClientTiktok.getIns().screenRecordingFlag = 0;
          if (Date.now() - eyouClientTiktok.getIns().screenRecordingTime < 3000) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录屏时间必须大于3秒'
              });
            }
            return;
          }
          if (_this.CommonTip.node.active !== true) {
            _this.CommonTip.node.active = true;
            _this.CommonTip.ShowPanel({
              text: '是否分享本次录屏',
              forWhat: 'shareVideo',
              videoPath: onStopRes.videoPath
            });
          }
        },
        onError: function onError(errMsg) {
          console.error('录屏异常:>', errMsg);
          eyouClientTiktok.getIns().screenRecordingFlag = 0;
          _this.syncScreenRecordingShow();
        },
        onInterruptionBegin: function onInterruptionBegin() {
          eyouClientTiktok.getIns().screenRecordingFlag = 0;
          _this.syncScreenRecordingShow();
          if (_this.CommonTip.node.active !== true) {
            _this.CommonTip.node.active = true;
            _this.CommonTip.ShowPanel({
              text: '录屏时间必须小于300秒'
            });
          }
        }
      };

      // 创建录屏管理工具
      eyouClientTiktok.getIns().createGameRecorder(createGameRecorderInfo, function (createGameRecorderCallback) {
        console.log('创建录屏管理工具回调:>', createGameRecorderCallback);
        if (createGameRecorderCallback.code === 0) {
          _this.screenRecordingBtn.active = true;
        }
      });
    } else if (isKuaiShou) {
      var _createGameRecorderInfo = {
        onStart: function onStart(res) {
          console.log("录屏开始:", res);
        },
        onStop: function onStop(stopRes) {
          console.log("结束录制:", stopRes);
          eyouClientKs.getIns().screenRecordingFlag = 0;
          if (Date.now() - eyouClientKs.getIns().screenRecordingTime < 3000) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录屏时间必须大于3秒'
              });
            }
            return;
          }
          if (_this.CommonTip.node.active !== true) {
            console.log("是否分享本次录屏:", stopRes);
            _this.CommonTip.node.active = true;
            _this.CommonTip.ShowPanel({
              text: '是否分享本次录屏',
              forWhat: 'shareVideo',
              videoPath: stopRes.videoId
            });
          }
        },
        onError: function onError(errMsg) {
          var error = errMsg.error;
          console.error('录屏错误信息:>', error);
          eyouClientKs.getIns().screenRecordingFlag = 0;
          _this.syncScreenRecordingShow();
          if (error.code === ks.error.GameRecorder_RecordFailedTimeRangeTooShort) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录制结束，录制时间太短'
              });
            }
          }
          if (error.code === ks.error.GameRecorder_RecordFailedTimeRangeTooLong) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录制结束，录制时间太长'
              });
            }
          }
          if (error.code === ks.error.GameRecorder_RecordFailedNoVideo) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录制结束，未录制到视频'
              });
            }
          }
          if (error.code === ks.error.GameRecorder_PublishVideoFailed) {
            if (_this.CommonTip.node.active !== true) {
              _this.CommonTip.node.active = true;
              _this.CommonTip.ShowPanel({
                text: '录屏失败'
              });
            }
          }
        },
        onAbort: function onAbort(res) {
          eyouClientKs.getIns().screenRecordingFlag = 0;
          _this.syncScreenRecordingShow();
          if (_this.CommonTip.node.active !== true) {
            _this.CommonTip.node.active = true;
            _this.CommonTip.ShowPanel({
              text: '录屏时间必须小于300秒'
            });
          }
        }
      };

      // 创建录屏管理工具
      eyouClientKs.getIns().createGameRecorder(_createGameRecorderInfo, function (createGameRecorderCallback) {
        console.log('创建快手录屏管理工具回调:>', createGameRecorderCallback);
        if (createGameRecorderCallback.code === 0) {
          _this.screenRecordingBtn.active = true;
        }
      });
    } else {
      this.screenRecordingBtn.active = false;
    }
  },
  onBtnScreenRecordingClick: function onBtnScreenRecordingClick() {
    var isKuaiShou = false;
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      isKuaiShou = true;
    }
    if (cc.sys.BYTEDANCE_GAME === cc.sys.platform) {
      if (eyouClientTiktok.getIns().screenRecordingFlag === 0) {
        eyouClientTiktok.getIns().gameRecorderStart({
          duration: 300
        });
        eyouClientTiktok.getIns().screenRecordingFlag = 1;
        eyouClientTiktok.getIns().screenRecordingTime = Date.now();
      } else {
        eyouClientTiktok.getIns().gameRecorderStop();
        eyouClientTiktok.getIns().screenRecordingFlag = 0;
      }
    } else {
      if (eyouClientKs.getIns().screenRecordingFlag === 0) {
        eyouClientKs.getIns().gameRecorderStart();
        eyouClientKs.getIns().screenRecordingFlag = 1;
        eyouClientKs.getIns().screenRecordingTime = Date.now();
      } else {
        console.log("按钮点击了停止录屏事件");
        eyouClientKs.getIns().gameRecorderStop();
        eyouClientKs.getIns().screenRecordingFlag = 0;
      }
    }
    this.syncScreenRecordingShow();
  },
  syncScreenRecordingShow: function syncScreenRecordingShow() {
    var _this2 = this;
    var isKuaiShou = false;
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      isKuaiShou = true;
    }
    var index = isKuaiShou ? eyouClientKs.getIns().screenRecordingFlag : eyouClientTiktok.getIns().screenRecordingFlag;
    var path = '/atlas/screenRecording-' + index;
    cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        console.error('set sprite frame failed! err', path, err);
        return;
      }
      _this2.screenRecordingBtn.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  },
  desktopUseBtnShow: function desktopUseBtnShow() {
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      //检查用户是否已经将小游戏设为常用
      var use = this.useBtn;
      ks.checkCommonUse({
        success: function success(res) {
          console.log("\u8BBE\u4E3A\u5E38\u7528\u67E5\u8BE2\u7ED3\u679C\u4E3A\uFF1A" + res.isCommonUse);
          use.active = !res.isCommonUse;
        },
        fail: function fail(err) {
          console.log("小游戏设为常用失败回调:", JSON.stringify(err));
        },
        complete: function complete(res) {
          console.log("小游戏设为常用回调:", JSON.stringify(res));
        }
      });

      //检查小游戏快捷方式是否已添加到手机桌面上，仅 Android 支持
      var desktop = this.desktopBtn;
      ks.checkShortcut({
        success: function success(res) {
          //根据res.installed 来判断是否添加成功
          console.log("是否已添加快捷方式", res.installed);
          desktop.active = !res.installed;
        },
        fail: function fail(err) {
          if (err.code === -10005) {
            console.log("暂不支持检查用户是否已添加手机桌面该功能");
          } else {
            console.log("检查快捷方式失败", err.msg);
            //注意：快捷方式和mini apk的方式，用户装了哪种都算成功走success回调。
            //但是如果都没装的情况下，为兼容以前版本，会先判断快捷方式，再判断mini apk的方式，这种情况最后会走到fail回调
            //所以当err.msg为"apk info is invalid"的情况出现时，也可以在游戏内展示添加桌面的icon提醒用户。
          }
        }
      });
    } else {
      this.desktopBtn.active = false;
      this.useBtn.active = false;
    }
  },
  onDesktopClick: function onDesktopClick() {
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      eyouClientKs.getIns().addShortcut(function (res) {
        console.log("添加桌面快捷方式结果:", JSON.stringify(res));
      });
    }
  },
  onUseClick: function onUseClick() {
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      eyouClientKs.getIns().addCommonUse(function (res) {
        console.log("设为常用结果:", JSON.stringify(res));
      });
    }
  },
  refreshAdsSp: function refreshAdsSp(seed) {
    if (seed == 1) this.AdSp = "aishen";else if (seed == 2) this.AdSp = "dushen";else if (seed == 3) this.AdSp = "caishen";else this.AdSp = "gushen";
    this.WatchAdsBtn.spriteFrame = this.BigApAtlas.getSpriteFrame(this.AdSp);
  },
  //初始化现金
  initCash: function initCash() {
    var seed = Math.random();
    if (cc.Mgr.UserDataMgr.tutorialInMarket == false) {
      seed = 0.999;
    }
    var param = {};
    if (seed <= cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 1).weight) {
      cc.Mgr.global.InitGetMoneyId = 1;
      param.text = cc.Mgr.global.getTranslation("Cash_1"); //cc.director.NoticeText.Cash_1;
      cc.Mgr.UserDataMgr.Cash = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 1).cash;
    } else if (seed <= cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 1).weight + cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 2).weight) {
      cc.Mgr.global.InitGetMoneyId = 2;
      param.text = cc.Mgr.global.getTranslation("Cash_2"); //cc.director.NoticeText.Cash_2;
      cc.Mgr.UserDataMgr.Cash = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 2).cash;
    } else {
      cc.Mgr.global.InitGetMoneyId = 3;
      this.TipCashSp.spriteFrame = this.MainAtlas.getSpriteFrame("bsqj");
      param.text = cc.Mgr.global.getTranslation("Cash_3"); //cc.director.NoticeText.Cash_3;
      cc.Mgr.UserDataMgr.Cash = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Cash, 3).cash;
    }
    if (this.CommonTip.active == true) {
      //cc.log("通用提示已经在展示");
    } else {
      this.CommonTip.node.active = true;
      this.CommonTip.ShowPanel(param);
    }
    cc.Mgr.UserDataMgr.Cash += cc.Mgr.UserDataMgr.InitMoneyBonus; //加上初始加成

    cc.Mgr.UserDataMgr.AssetsMoney = cc.Mgr.UserDataMgr.Cash;
    cc.Mgr.UserDataMgr.HighAssets = cc.Mgr.UserDataMgr.AssetsMoney;
  },
  //初始化Top UI 
  initTopUIData: function initTopUIData() {
    this.initCash();
    this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
    this.AssetLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.AssetsMoney);
    this.CurAgeLbl.string = cc.Mgr.UserDataMgr.Age;
    this.TotalAgeLbl.string = cc.Mgr.UserDataMgr.retireAge;
    this.HpLbl.string = cc.Mgr.UserDataMgr.HpPoint;
    this.ReputationLbl.string = cc.Mgr.UserDataMgr.Reputation;
    var lastCap = cc.Mgr.UserDataMgr.WareHouseAllCapcity - cc.Mgr.UserDataMgr.WareHouseCapcity;
    this.CapcityLbl.string = "(" + lastCap + "/" + cc.Mgr.UserDataMgr.WareHouseAllCapcity + ")";
  },
  //初始化市场 items
  InitMarketItems: function InitMarketItems() {
    cc.Mgr.UserDataMgr.ClearShowGoodsList();
    var DataList = cc.Mgr.MapDataMgr.getDataListBySex(cc.Mgr.UserDataMgr.Sex);
    var showArr = this.getArrayByItems(DataList.length, 5);
    var param = [];
    for (var i = DataList.length - 1; i >= 0; i--) {
      var data = DataList[i];
      var obj = cc.instantiate(this.MarketItem);
      obj.parent = this.MarketParent;
      obj.active = false;
      obj.getComponent("GoodsItem").init(data);
      for (var j = showArr.length - 1; j >= 0; j--) {
        if (i == showArr[j]) {
          var data = null;
          if (cc.Mgr.UserDataMgr.tutorialInMarket == false) {
            data = obj.getComponent("GoodsItem").refreshLowPrice();
          } else {
            data = obj.getComponent("GoodsItem").refreshPrice();
          }
          param.push(data);
          cc.Mgr.UserDataMgr.InsertGoodsIdToList(data.Id);
          obj.active = true;
          break;
        }
      }
    }
    this.MarketTipPanel.node.active = true;
    this.MarketTipPanel.ShowPanel(param);
    if (cc.Mgr.UserDataMgr.tutorialInMarket == false) {
      cc.Mgr.global.tutorialStep = 11; //开始引导第一步
      var self = this;
      this.TutorialPanel.SetCallFunc(function () {
        cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenBuyTip, param[0]);
        cc.Mgr.global.tutorialStep = 12;
        var dt = {};
        dt.step = 12;
        self.TutorialPanel.ShowPanel(dt);
        self.TutorialPanel.SetCallFunc(function () {
          cc.Mgr.global.tutorialGoodsId = self.BuyTip.ClickBuyBtn();
          cc.Mgr.global.tutorialStep = 13;
          var d3 = {};
          d3.step = 13;
          self.TutorialPanel.ShowPanel(d3);
          self.TutorialPanel.SetCallFunc(function () {
            //self.RefreshDataToNextYear();
            self.ToNextYear();
            cc.Mgr.global.tutorialStep = 14;
            var d4 = {};
            d4.step = 14;
            self.TutorialPanel.ShowPanel(d4);
            self.TutorialPanel.SetCallFunc(function () {
              cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenSaleTip, cc.Mgr.UserDataMgr.getGoodsDataById(param[0].Id));
              cc.Mgr.global.tutorialStep = 15;
              var d5 = {};
              d5.step = 15;
              self.TutorialPanel.ShowPanel(d5);
              self.TutorialPanel.SetCallFunc(function () {
                self.SaleTip.ClickSaleBtn();
                cc.Mgr.global.tutorialStep = -1;
                cc.Mgr.UserDataMgr.tutorialInMarket = true;
                self.TutorialPanel.node.active = false;
              });
            });
          });
        });
      });
    }
  },
  //向下刷新一年
  RefreshDataToNextYear: function RefreshDataToNextYear() {
    if (cc.Mgr.global.tutorialStep == 13) {
      //cc.log("引导时间=====================");
      cc.Mgr.UserDataMgr.RefreshUserAge();
      this.RefreshTutorialItems();
    } else {
      this.TimePanel.node.active = true;
      this.TimePanel.PlayAnima();
    }
    /*
    cc.Mgr.UserDataMgr.RefreshUserAge();
    cc.Mgr.AudioMgr.playSFX("click");
    this.CheckTutorialHappen();
      this.RefreshCompanyItems();
    if(cc.Mgr.global.tutorialStep == 13)
    {
        this.RefreshTutorialItems();
    }
    else
    {
        this.RefreshItems();
    }
      this.RefreshOwnedItemsState();
      cc.Mgr.UserDataMgr.RefreshUserAssets(true);
    
    //加成奖励
    cc.Mgr.UserDataMgr.GetBonusRewardEveryYear();
      cc.Mgr.UserDataMgr.RefreshHealthHp();
      this.RefreshUIShow();
      this.CheckEventHappen();
    */
  },

  ToNextYear: function ToNextYear() {
    this.marketTipData = null;
    cc.Mgr.UserDataMgr.RefreshUserAge();
    //cc.Mgr.AudioMgr.playSFX("click");
    this.CheckTutorialHappen();
    this.RefreshCompanyItems();
    if (cc.Mgr.global.tutorialStep == 13) {
      ////cc.log("==============================引导时间==============================");
      this.RefreshTutorialItems();
    } else {
      if (cc.Mgr.UserDataMgr.Age == 22 || cc.Mgr.UserDataMgr.Age == 24 || cc.Mgr.UserDataMgr.Age == 25 || cc.Mgr.UserDataMgr.Age == 27 || cc.Mgr.UserDataMgr.Age == 28 || cc.Mgr.UserDataMgr.Age == 30) {
        this.RefreshItemsForSpecialAge();
      } else {
        this.RefreshItems();
      }
    }
    this.RefreshOwnedItemsState();
    //加成奖励
    cc.Mgr.UserDataMgr.GetBonusRewardEveryYear();
    cc.Mgr.UserDataMgr.RefreshUserAssets(true);
    cc.Mgr.UserDataMgr.RefreshHealthHp();
    this.RefreshUIShow();
    this.CheckEventHappen();
  },
  CheckTutorialHappen: function CheckTutorialHappen() {
    if (cc.Mgr.UserDataMgr.Age == 25 && cc.Mgr.UserDataMgr.tutorialInDate == false) {
      cc.Mgr.global.tutorialStep = TutorialStep.MateDate_1;
      var dt = {};
      dt.step = TutorialStep.MateDate_1;
      this.TutorialPanel.node.active = true;
      this.TutorialPanel.ShowPanel(dt);
      var self = this;
      self.TutorialPanel.SetCallFunc(function () {
        self.ChooseOpenMatePanel();
        cc.Mgr.global.tutorialStep = TutorialStep.MateDate_2;
        var dt = {};
        dt.step = TutorialStep.MateDate_2;
        self.TutorialPanel.ShowPanel(dt);
        self.TutorialPanel.SetCallFunc(function () {
          cc.Mgr.global.tutorialStep = -1;
          self.TutorialPanel.node.active = false;
          cc.Mgr.UserDataMgr.tutorialInDate = true;
        });
      });
    }
    if (cc.Mgr.UserDataMgr.Age == 30 && cc.Mgr.UserDataMgr.tutorialInBus == false) {
      cc.Mgr.global.tutorialStep = TutorialStep.Business_1;
      var dt = {};
      dt.step = TutorialStep.Business_1;
      this.TutorialPanel.node.active = true;
      this.TutorialPanel.ShowPanel(dt);
      var self = this;
      self.TutorialPanel.SetCallFunc(function () {
        self.ChooseOpenBusisness();
        cc.Mgr.global.tutorialStep = TutorialStep.Business_2;
        var dt = {};
        dt.step = TutorialStep.Business_2;
        self.TutorialPanel.ShowPanel(dt);
        self.TutorialPanel.SetCallFunc(function () {
          cc.Mgr.global.tutorialStep = -1;
          self.TutorialPanel.node.active = false;
          cc.Mgr.UserDataMgr.tutorialInBus = true;
        });
      });
    }
    if (cc.Mgr.UserDataMgr.hasCompany == true && cc.Mgr.UserDataMgr.tutorialStockBonus == false) {
      cc.Mgr.global.tutorialStep = TutorialStep.StockBonus_1;
      var dt = {};
      dt.step = TutorialStep.StockBonus_1;
      this.TutorialPanel.node.active = true;
      this.TutorialPanel.ShowPanel(dt);
      var self = this;
      self.TutorialPanel.SetCallFunc(function () {
        cc.Mgr.global.tutorialStep = -1;
        self.TutorialPanel.node.active = false;
        cc.Mgr.UserDataMgr.tutorialStockBonus = true;
      });
    }
  },
  StartMateLoveTutorial: function StartMateLoveTutorial() {
    if (cc.Mgr.UserDataMgr.tutorialMatePoint == false) {
      cc.Mgr.global.tutorialStep = TutorialStep.DateToMarry_1;
      var dt = {};
      dt.step = TutorialStep.DateToMarry_1;
      this.TutorialPanel.node.active = true;
      this.TutorialPanel.ShowPanel(dt);
      var self = this;
      self.TutorialPanel.SetCallFunc(function () {
        cc.Mgr.global.tutorialStep = -1;
        self.TutorialPanel.node.active = false;
        cc.Mgr.UserDataMgr.tutorialMatePoint = true;
      });
    }
  },
  CheckEventHappen: function CheckEventHappen() {
    if (cc.Mgr.global.tutorialStep != -1) {
      return;
    }
    if (cc.Mgr.UserDataMgr.Age <= 25) {
      return;
    }
    if (cc.Mgr.UserDataMgr.EventDataIdList.length == 0) {
      //cc.log("沒有事件Id 了  直接返回");
      return;
    }
    if (cc.Mgr.UserDataMgr.Age == cc.Mgr.global.LastEventAge) {
      var eId = cc.Mgr.UserDataMgr.GetEventDataAndSpliceId();
      this.EventPanel.node.active = true;
      this.EventPanel.ShowPanel(eId);
      cc.Mgr.global.LastEventAge = cc.Mgr.UserDataMgr.Age;
    } else {
      var seed = cc.Mgr.global.SpawnSeedBetweenTwoNum(2, 3);
      //cc.log("cc.Mgr.UserDataMgr.Age = "+  cc.Mgr.UserDataMgr.Age+"   seed = " + seed + "  事件------------------ LastEventAge " + cc.Mgr.global.LastEventAge);
      if (cc.Mgr.UserDataMgr.Age - seed >= cc.Mgr.global.LastEventAge) {
        var eId = cc.Mgr.UserDataMgr.GetEventDataAndSpliceId();
        this.EventPanel.node.active = true;
        this.EventPanel.ShowPanel(eId);
        cc.Mgr.global.LastEventAge = cc.Mgr.UserDataMgr.Age;
      }
    }
  },
  //刷新UI
  RefreshUIShow: function RefreshUIShow() {
    this.ReputationLbl.string = cc.Mgr.UserDataMgr.Reputation;
    this.CashLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.Cash);
    this.AssetLbl.string = cc.Mgr.global.FormatNum(cc.Mgr.UserDataMgr.AssetsMoney);
    this.CurAgeLbl.string = cc.Mgr.UserDataMgr.Age;
    this.TotalAgeLbl.string = cc.Mgr.UserDataMgr.retireAge;
    this.HpLbl.string = cc.Mgr.UserDataMgr.HpPoint;
    this.RefreshHpIconSp();
    var lastCap = cc.Mgr.UserDataMgr.WareHouseAllCapcity - cc.Mgr.UserDataMgr.WareHouseCapcity;
    this.CapcityLbl.string = "(" + lastCap + "/" + cc.Mgr.UserDataMgr.WareHouseAllCapcity + ")";
    if (cc.Mgr.UserDataMgr.AssetsMoney < 100000) {
      this.TipCashSp.spriteFrame = this.MainAtlas.getSpriteFrame("bsqj");
    } else if (cc.Mgr.UserDataMgr.AssetsMoney > 100000 && cc.Mgr.UserDataMgr.AssetsMoney < 1000000) {
      this.TipCashSp.spriteFrame = this.MainAtlas.getSpriteFrame("scxx");
    } else if (cc.Mgr.UserDataMgr.AssetsMoney > 1000000 && cc.Mgr.UserDataMgr.AssetsMoney < 10000000) {
      this.TipCashSp.spriteFrame = this.MainAtlas.getSpriteFrame("sylx");
    } else if (cc.Mgr.UserDataMgr.AssetsMoney > 100000000) {
      this.TipCashSp.spriteFrame = this.MainAtlas.getSpriteFrame("bdzc");
    }
  },
  RefreshHpIconSp: function RefreshHpIconSp() {
    if (cc.Mgr.UserDataMgr.HpPoint >= cc.Mgr.global.HpStateA) {
      this.HpIcon.spriteFrame = this.MainAtlas.getSpriteFrame("state_1");
    } else if (cc.Mgr.UserDataMgr.HpPoint >= cc.Mgr.global.HpStateB) {
      this.HpIcon.spriteFrame = this.MainAtlas.getSpriteFrame("state_2");
    } else if (cc.Mgr.UserDataMgr.HpPoint <= cc.Mgr.global.HpStateC) {
      this.HpIcon.spriteFrame = this.MainAtlas.getSpriteFrame("state_3");
    }
  },
  //约会完成数据刷新返回
  RefreshMateItemUI: function RefreshMateItemUI(Id) {
    this.MatePanel.RefreshPanel(Id);
  },
  //随着年份刷新 刷新展示的物品 只刷出高价
  RefreshTutorialItems: function RefreshTutorialItems() {
    var children = this.MarketParent.children;
    var param = []; //数据
    this.marketTipData = null;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("GoodsItem");
      if (sc != null) {
        var data = null;
        if (children[i].active == true && sc.Id == cc.Mgr.global.tutorialGoodsId) {
          data = sc.refreshUpPrice();
        } else {
          data = sc.refreshPrice();
        }
        param.push(data);
      }
    }
    this.marketTipData = param;
  },
  CheckHasElement: function CheckHasElement(outarr, index) {
    for (var j = 0; j < outarr.length; j++) {
      if (index == outarr[j]) {
        return true;
      }
    }
    return false;
  },
  //随着年份刷新 刷新展示的物品  特别年份
  RefreshItemsForSpecialAge: function RefreshItemsForSpecialAge() {
    cc.Mgr.UserDataMgr.ClearShowGoodsList();
    var children = this.MarketParent.children;
    var outarr = [];
    var stateList = [];
    for (var i = 0; i < children.length; i++) {
      var sc = children[i].getComponent("GoodsItem");
      if (sc != null) {
        var has = cc.Mgr.UserDataMgr.JudeGoodsOwned(sc.Id);
        if (has) {
          var par = {};
          par.Id = sc.Id;
          par.State = sc.State;
          stateList.push(par);
          outarr.push(i);
        }
      }
    }
    var list = [];
    for (var i = children.length - 1; i >= 0; i--) {
      if (this.CheckHasElement(outarr, i) == false) {
        list.push(i);
      }
    }
    var showArr = this.getArrayItems(list, 5 - outarr.length);
    for (var i = outarr.length - 1; i >= 0; i--) {
      showArr.push(outarr[i]);
    }
    var param = []; //数据
    for (var i = children.length - 1; i >= 0; i--) {
      children[i].active = false;
      var sc = children[i].getComponent("GoodsItem");
      if (sc != null) {
        //sc.refreshPrice();
        for (var j = showArr.length - 1; j >= 0; j--) {
          if (i == showArr[j]) {
            var data = null;
            if (sc.Id == 1 || sc.Id == 3) {
              data = sc.refreshMidPrice();
            } else {
              var outdata = this.JudeGoodsHas(stateList, sc.Id);
              if (outdata.has == true) {
                if (outdata.State == 0) {
                  data = sc.refreshMidPrice();
                }
                if (outdata.State >= 1) {
                  data = sc.refreshUpPrice();
                }
              } else {
                data = sc.refreshPrice();
              }
            }
            param.push(data);
            cc.Mgr.UserDataMgr.InsertGoodsIdToList(sc.Id);
            children[i].active = true;
            break;
          }
        }
      }
    }
    if (cc.Mgr.global.tutorialStep != -1)
      //(cc.Mgr.UserDataMgr.Age == 25 && cc.Mgr.UserDataMgr.tutorialInDate == false) || (cc.Mgr.UserDataMgr.Age == 30 && cc.Mgr.UserDataMgr.tutorialInBus == false))
      {
        //cc.log("引导阶段")
      } else {
      this.MarketTipPanel.node.active = true;
      this.MarketTipPanel.ShowPanel(param);
    }
  },
  JudeGoodsHas: function JudeGoodsHas(List, Id) {
    var out = {};
    out.State = 0;
    out.has = false;
    for (var i = 0; i < List.length; i++) {
      if (List[i].Id == Id) {
        out.State = List[i].State;
        out.has = true;
        return out;
      }
    }
    return out;
  },
  //随着年份刷新 刷新展示的物品
  RefreshItems: function RefreshItems() {
    cc.Mgr.UserDataMgr.ClearShowGoodsList();
    //var DataList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Goods);
    var children = this.MarketParent.children;
    var outarr = [];
    if (cc.Mgr.global.GoodsForeId != -1) {
      for (var i = children.length - 1; i >= 0; i--) {
        var sc = children[i].getComponent("GoodsItem");
        if (sc != null) {
          if (cc.Mgr.global.GoodsForeId == sc.Id) {
            outarr.push(i);
            break;
          }
        }
      }
    }
    var list = [];
    for (var i = children.length - 1; i >= 0; i--) {
      if (this.CheckHasElement(outarr, i) == false) {
        list.push(i);
      }
    }
    var showArr = this.getArrayItems(list, 5 - outarr.length);
    for (var i = outarr.length - 1; i >= 0; i--) {
      showArr.push(outarr[i]);
    }
    var param = []; //数据
    for (var i = children.length - 1; i >= 0; i--) {
      children[i].active = false;
      var sc = children[i].getComponent("GoodsItem");
      if (sc != null) {
        for (var j = showArr.length - 1; j >= 0; j--) {
          if (i == showArr[j]) {
            var data = null;
            if (sc.Id == cc.Mgr.global.GoodsForeId) {
              var rat = Math.random();
              if (rat < 0.7) {
                if (sc.State == 0) data = sc.refreshMidPrice();else if (sc.State == 1) data = sc.refreshUpPrice();
              }
              cc.Mgr.global.GoodsForeId = -1;
            } else {
              if (j == 3) data = sc.refreshMidPrice();else data = sc.refreshPrice();
            }
            param.push(data);
            cc.Mgr.UserDataMgr.InsertGoodsIdToList(sc.Id);
            children[i].active = true;
            break;
          }
        }
      }
    }
    if (cc.Mgr.global.tutorialStep != -1)
      //(cc.Mgr.UserDataMgr.Age == 25 && cc.Mgr.UserDataMgr.tutorialInDate == false) || (cc.Mgr.UserDataMgr.Age == 30 && cc.Mgr.UserDataMgr.tutorialInBus == false))
      {
        //cc.log("引导阶段")
      } else {
      this.MarketTipPanel.node.active = true;
      this.MarketTipPanel.ShowPanel(param);
    }
  },
  //0-arrNum 之间随机抽取 num 个数出来
  getArrayByItems: function getArrayByItems(arrNum, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index = 0; index < arrNum; index++) {
      temp_array.push(index);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
      //判断如果数组还有可以取出的元素,以防下标越界
      if (temp_array.length > 0) {
        //在数组中产生一个随机索引
        var arrIndex = Math.floor(Math.random() * temp_array.length);
        //将此随机索引的对应的数组元素值复制出来
        return_array[i] = temp_array[arrIndex];
        ////cc.log("+++++++++++++++++++++++++++" + return_array[i]);
        //然后删掉此索引的数组元素,这时候temp_array变为新的数组
        temp_array.splice(arrIndex, 1);
      } else {
        //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
        break;
      }
    }
    return return_array;
  },
  //从数组arr中随机选取 num 个数
  getArrayItems: function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index = 0; index < arr.length; index++) {
      temp_array.push(arr[index]);
      //cc.log("塞进去的数值 = " + arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
      //判断如果数组还有可以取出的元素,以防下标越界
      if (temp_array.length > 0) {
        //在数组中产生一个随机索引
        var arrIndex = Math.floor(Math.random() * temp_array.length);
        //将此随机索引的对应的数组元素值复制出来
        return_array[i] = temp_array[arrIndex];
        //然后删掉此索引的数组元素,这时候temp_array变为新的数组
        temp_array.splice(arrIndex, 1);
      } else {
        //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
        break;
      }
    }
    return return_array;
  },
  //初始化 已经拥有物品
  InitOwnedItems: function InitOwnedItems() {
    var DataList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Goods);
    for (var i = DataList.length - 1; i >= 0; i--) {
      var data = DataList[i];
      var obj = cc.instantiate(this.OwnItem);
      obj.parent = this.OwnParent;
      obj.active = false;
      if (data.ownNum > 0) {
        obj.active = true;
      }
      obj.getComponent("OwnItem").init(data);
    }
  },
  //购买和出售后刷新已经有的物品
  RefreshOwnedItems: function RefreshOwnedItems(data) {
    var children = this.OwnParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("OwnItem");
      if (sc != null) {
        if (sc.Id == data.Id) {
          sc.refreshData(data);
          if (data.ownNum > 0) {
            children[i].active = true;
          } else {
            children[i].active = false;
          }
          break;
        }
      }
    }
  },
  RefreshOwnedItemsState: function RefreshOwnedItemsState() {
    var children = this.OwnParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("OwnItem");
      if (sc != null && children[i].active == true) {
        sc.RefreshState();
      }
    }
  },
  //初始化股市数据
  InitCompanyItems: function InitCompanyItems() {
    var DataList = cc.Mgr.UserDataMgr.getOwnDataListByType(ItemType.Company);
    for (var i = DataList.length - 1; i >= 0; i--) {
      var data = DataList[i];
      var obj = cc.instantiate(this.CompanyItem);
      obj.parent = this.CompanyParent;
      obj.active = true;
      obj.getComponent("CompanyItem").init(data);
    }
  },
  //刷新股市数据
  RefreshCompanyItems: function RefreshCompanyItems() {
    var children = this.CompanyParent.children;
    var canProfit = false;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("CompanyItem");
      if (sc != null) {
        sc.refreshPrice();
        if (sc.canGetProfit == true) {
          canProfit = true;
        }
      }
    }
    if (canProfit == true) {
      cc.Mgr.UserDataMgr.CanGetStockProfit = true;
      cc.Mgr.global.showStockProfit = true;
    } else {
      cc.Mgr.UserDataMgr.CanGetStockProfit = false;
      cc.Mgr.global.showStockProfit = false;
    }
  },
  //刷新ui显示
  RefreshCompanyItemsAfterBuy: function RefreshCompanyItemsAfterBuy(data) {
    var children = this.CompanyParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("CompanyItem");
      if (sc != null) {
        if (sc.Id == data.Id) {
          sc.RefreshUIShow(data);
          break;
        }
      }
    }
  },
  //刷新ui显示
  RefreshCompanyItemsFromEvent: function RefreshCompanyItemsFromEvent(Id) {
    var children = this.CompanyParent.children;
    var data = cc.Mgr.UserDataMgr.getDataByItemTypeAndId(ItemType.Company, Id);
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("CompanyItem");
      if (sc != null) {
        if (sc.Id == data.Id) {
          sc.RefreshUIShow(data);
          break;
        }
      }
    }
  },
  RefreshCompanyItemsAfterDisvorce: function RefreshCompanyItemsAfterDisvorce() {
    var children = this.CompanyParent.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var sc = children[i].getComponent("CompanyItem");
      if (sc != null) {
        sc.RefreshUIShowAfter();
      }
    }
  },
  ChooseOpenMarket: function ChooseOpenMarket() {
    this.refreshAdsSp(3);
    cc.Mgr.AudioMgr.playSFX("click");
    this.MarketPanel.active = true;
    this.MatePanel.node.active = false;
    this.EnjoyTipPanel.node.active = false;
    this.BusinessPanel.active = false;
    this.toggleBussiness.isChecked = false;
    this.toggleMarket.isChecked = true;
    this.toggleEnjoy.isChecked = false;
    this.toggleMate.isChecked = false;
  },
  ChooseOpenBusisness: function ChooseOpenBusisness() {
    cc.Mgr.UserDataMgr.tutorialInBus = true;
    this.refreshAdsSp(4);
    cc.Mgr.AudioMgr.playSFX("click");
    this.MarketPanel.active = false;
    this.MatePanel.node.active = false;
    this.EnjoyTipPanel.node.active = false;
    this.BusinessPanel.active = true;
    this.toggleBussiness.isChecked = true;
    this.toggleMarket.isChecked = false;
    this.toggleEnjoy.isChecked = false;
    this.toggleMate.isChecked = false;
  },
  ChooseOpenMatePanel: function ChooseOpenMatePanel() {
    cc.Mgr.UserDataMgr.tutorialInDate = true;
    this.MateNewTip.active = false;
    this.refreshAdsSp(1);
    cc.Mgr.AudioMgr.playSFX("click");
    this.MarketPanel.active = false;
    this.MatePanel.node.active = true;
    this.EnjoyTipPanel.node.active = false;
    this.BusinessPanel.active = false;
    this.MatePanel.ShowPanel();
    this.toggleBussiness.isChecked = false;
    this.toggleMarket.isChecked = false;
    this.toggleEnjoy.isChecked = false;
    this.toggleMate.isChecked = true;
  },
  ChooseOpenEnjoy: function ChooseOpenEnjoy() {
    this.refreshAdsSp(2);
    cc.Mgr.AudioMgr.playSFX("click");
    this.MarketPanel.active = false;
    this.MatePanel.node.active = false;
    this.EnjoyTipPanel.node.active = true;
    this.BusinessPanel.active = false;
    this.EnjoyTipPanel.ShowPanel();
    this.toggleBussiness.isChecked = false;
    this.toggleMarket.isChecked = false;
    this.toggleEnjoy.isChecked = true;
    this.toggleMate.isChecked = false;
  },
  ChooseOpenBelong: function ChooseOpenBelong() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.OwnedTipPanel.node.active = true;
    this.OwnedTipPanel.ShowPanel();
  },
  ChooseOpenTreat: function ChooseOpenTreat() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.forWhat = "Treat";
    param.text = "消耗金钱回复健康";
    if (cc.Mgr.UserDataMgr.HpPoint == 100) {
      param.forWhat = "";
      param.text = "健康状况良好，无需治疗";
      this.CommonTip.node.active = true;
      this.CommonTip.ShowPanel(param);
    } else {
      this.TreatPanel.node.active = true;
      this.TreatPanel.ShowPanel();
      //var needMoney = Math.floor(2000* Math.pow(1.18, cc.Mgr.UserDataMgr.Age-20) *(1-cc.Mgr.UserDataMgr.HpPoint/100));
      //param.needMoney = needMoney;
    }
    //if(this.CommonTip.active == true)
    //{
    //    //cc.log("通用提示已经在展示");
    //    return;
    //}
    //this.CommonTip.node.active = true;
    //this.CommonTip.ShowPanel(param);
  },

  ChooseOpenRetirePanel: function ChooseOpenRetirePanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    var param = {};
    param.forWhat = "Retire";
    param.text = "你确定要结束你的奋斗史？？";
    if (this.CommonTip.active == true) {
      //cc.log("通用提示已经在展示");
      return;
    }
    this.CommonTip.node.active = true;
    this.CommonTip.ShowPanel(param);
  },
  ChooseOpenRankPanel: function ChooseOpenRankPanel() {
    // todo 暂时先加上功能未开放
    this.CommonTip.node.active = true;
    this.CommonTip.ShowPanel({
      text: '功能暂未开放, 敬请期待'
    });
    return;
    cc.Mgr.AudioMgr.playSFX("click");
    if (!cc.Mgr.PlatformController.IsLoginSync()) {
      var param = {};
      param.text = "请先登陆手机百度";
      param.forWhat = "Login";
      this.CommonTip.node.active = true;
      this.CommonTip.ShowPanel(param);
      return;
    }
    var isKuaiShou = false;
    if (typeof ks !== 'undefined') {
      //运行在快手平台
      isKuaiShou = true;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) this.wxSubContextView.active = true;else if (cc.sys.platform === cc.sys.BAIDU_GAME) this.SwanSubContextView.active = true;
    cc.Mgr.PlatformController.showSubContentView();
    cc.Mgr.PlatformController.SendMessageToSubView("RankOpen");
    if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou || cc.sys.platform === cc.sys.BAIDU_GAME) {
      this.rankPanel.node.active = true;
    }
  },
  CloseRankView: function CloseRankView() {
    this.rankPanel.node.active = false;
    cc.Mgr.PlatformController.hideSubContentView();
    cc.Mgr.PlatformController.SendMessageToSubView("RankClose");
    this.wxSubContextView.active = false;
    this.SwanSubContextView.active = false;
  },
  OpenAddCapacity: function OpenAddCapacity() {
    cc.Mgr.AudioMgr.playSFX("click");
    if (cc.Mgr.UserDataMgr.WareHouseAllCapcity == 200) {
      var param = {};
      param.forWhat = "";
      param.text = "仓储容量达到上限";
      this.CommonTip.node.active = true;
      this.CommonTip.ShowPanel(param);
      return;
    }
    this.AddCapPanel.node.active = true;
    this.AddCapPanel.ShowPanel();
  },
  OpenMarketTipPanel: function OpenMarketTipPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.MarketTipPanel.node.active = true;
    if (this.marketTipData != null) {
      this.MarketTipPanel.ShowPanel(this.marketTipData);
    }
  },
  OpenWatchAdPanel: function OpenWatchAdPanel() {
    cc.Mgr.AudioMgr.playSFX("click");
    this.WatchAdsPanel.node.active = true;
    var param = {};
    param.Sp = this.AdSp;
    this.WatchAdsPanel.ShowPanel(param);
  }
});
module.exports = GameScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVUlcXEdhbWVTY2VuZS5qcyJdLCJuYW1lcyI6WyJJdGVtVHlwZSIsInJlcXVpcmUiLCJVc2VyU3RhdGUiLCJHb29kc0l0ZW0iLCJCdXlUaXBQYW5lbCIsIlNhbGVUaXBQYW5lbCIsIkNvbW1vblRpcFBhbmVsIiwiQ29tcGFueUNyZWF0ZVRpcFBhbmVsIiwiQ29tcGFueUJ1eVRpcFBhbmVsIiwiQ29tcGFueVNhbGVUaXBQYW5lbCIsIk1hdGVUaXBQYW5lbCIsIk1hdGVJdGVtUGFuZWwiLCJFbmpveVBhbmVsIiwiQ29tbW9uQnV5UGFuZWwiLCJPd25lZFBhbmVsIiwiQmV0UGFuZWwiLCJSZXRpcmVQYW5lbCIsIkFkZENhcGFjaXR5UGFuZWwiLCJNYXJrZXRUaXBQYW5lbCIsIlRyZWF0UGFuZWwiLCJFdmVudFRpcFBhbmVsIiwiRXZlbnRSZXN1bHRQYW5lbCIsIldhdGNoQWRzUGFuZWwiLCJNYXJyeVBhbmVsIiwiVHV0b3JpYWxQYW5lbCIsIlRpbWVQYW5lbCIsIkFkc1JldGlyZVBhbmVsIiwiVW5sb2NrTWF0ZVBhbmVsIiwiUmFua1BhbmVsIiwiVHV0b3JpYWxTdGVwIiwiZXlvdUNsaWVudFRpa3RvayIsImV5b3VDbGllbnRLcyIsIkdhbWVTY2VuZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTWFpbkF0bGFzIiwiU3ByaXRlQXRsYXMiLCJCaWdBcEF0bGFzIiwiQ2FzaExibCIsIkxhYmVsIiwiQXNzZXRMYmwiLCJDdXJBZ2VMYmwiLCJUb3RhbEFnZUxibCIsIkhwTGJsIiwiUmVwdXRhdGlvbkxibCIsIkNhcGNpdHlMYmwiLCJIcEljb24iLCJTcHJpdGUiLCJNYXJrZXRJdGVtIiwiUHJlZmFiIiwiT3duSXRlbSIsIkNvbXBhbnlJdGVtIiwiTWFya2V0UGFyZW50IiwiTm9kZSIsIk93blBhcmVudCIsIkNvbXBhbnlQYXJlbnQiLCJNYXJrZXRQYW5lbCIsIkJ1c2luZXNzUGFuZWwiLCJXYXRjaEFkc0J0biIsIlRpcENhc2hTcCIsIkJ1eVRpcCIsIlNhbGVUaXAiLCJDb21tb25UaXAiLCJDb21wYW55Q3JlYXRlUGFuZWwiLCJTdG9ja0J1eVRpcFBhbmVsIiwiU3RvY2tTYWxlVGlwUGFuZWwiLCJNYXRlUGFuZWwiLCJNYXRlSXRlbVRpcCIsIkVuam95VGlwUGFuZWwiLCJDb21tb25CdXlUaXBQYW5lbCIsIk93bmVkVGlwUGFuZWwiLCJCZXRUaXBQYW5lbCIsIlJldGlyZVBhbmVsVGlwIiwicmFua1BhbmVsIiwiRXZlbnRQYW5lbCIsIkFkZENhcFBhbmVsIiwidG9nZ2xlTWFya2V0IiwiVG9nZ2xlIiwidG9nZ2xlQnVzc2luZXNzIiwidG9nZ2xlTWF0ZSIsInRvZ2dsZUVuam95IiwiTWF0ZU5ld1RpcCIsIkFkU3AiLCJ3eFN1YkNvbnRleHRWaWV3IiwiU3dhblN1YkNvbnRleHRWaWV3IiwibWFya2V0VGlwRGF0YSIsInNjcmVlblJlY29yZGluZ0J0biIsImRlc2t0b3BCdG4iLCJ1c2VCdG4iLCJvbkxvYWQiLCJkaXJlY3RvciIsIkdsb2JhbEV2ZW50Iiwib24iLCJNZ3IiLCJFdmVudCIsIk9wZW5CdXlUaXAiLCJkYXRhIiwibm9kZSIsImFjdGl2ZSIsIlNob3dQYW5lbCIsIkJ1eVN1Y2Nlc3MiLCJzdHJpbmciLCJnbG9iYWwiLCJGb3JtYXROdW0iLCJVc2VyRGF0YU1nciIsIkNhc2giLCJSZWZyZXNoVXNlckFzc2V0cyIsIlJlZnJlc2hPd25lZEl0ZW1zIiwiUmVmcmVzaFVJU2hvdyIsIk9wZW5TYWxlVGlwIiwiU2FsZVN1Y2Nlc3MiLCJPcGVuQ29tbW9uVGlwIiwidHV0b3JpYWxTdGVwIiwiZm9yV2hhdCIsIlBkYXRhIiwiSWQiLCJPcGVuRXZlbnRSZXN1bHQiLCJjb21wYW55SWQiLCJSZWZyZXNoQ29tcGFueUl0ZW1zRnJvbUV2ZW50IiwiT3BlbkNvbXBhbnlDcmVhdGUiLCJDcmVhdGVDb21wYW55U3VjY2VzcyIsIlJlZnJlc2hDb21wYW55SXRlbXNBZnRlckJ1eSIsIkNoZWNrVHV0b3JpYWxIYXBwZW4iLCJPcGVuU3R1Y2tCdXlUaXAiLCJCdXlTdG9ja1N1Y2Nlc3MiLCJPcGVuU3R1Y2tTYWxlVGlwIiwiU2FsZVN0b2NrU3VjY2VzcyIsIk9wZW5NYXRlVGlwIiwiRGF0ZVN1Y2Nlc3MiLCJSZWZyZXNoTWF0ZUl0ZW1VSSIsIkRhdGVMYXRlciIsIlN0YXJ0TWF0ZUxvdmVUdXRvcmlhbCIsIk9wZW5Db21tb25CdXkiLCJDb21tb25CdXlTYWxlU3VjY2VzcyIsImZsYWciLCJEaXN2b3JjZSIsIlJlZnJlc2hDb21wYW55SXRlbXNBZnRlckRpc3ZvcmNlIiwiUmVmcmVzaFBhbmVsSXRlbXMiLCJUcmVhdFN1Y2Nlc3MiLCJ1c2VyU3RhdGUiLCJPSyIsIlJlY292ZXJZZWFyIiwiUmVmcmVzaENhc2hBc3NldCIsIk9wZW5CZXRUaXAiLCJPcGVuVW5Mb2NrTWF0ZSIsIlJldGlyZSIsIlJlZnJlc2hBbGxVSVNob3ciLCJVc2VSZXRpcmVBZHNTa2lsbCIsIkFkZFdhcmVIb3VzZUNhcGFjaXR5IiwiT3Blbk1hcnJ5IiwiT3BlblR1dG9yaWFsIiwiQ2xvY2tFbmQiLCJUb05leHRZZWFyIiwiT3BlbkVuam95IiwiQ2hvb3NlT3BlbkVuam95IiwiU2hhcmVWaWRlbyIsImlzS3VhaVNob3UiLCJrcyIsInN5cyIsIkJZVEVEQU5DRV9HQU1FIiwicGxhdGZvcm0iLCJzaGFyZUFwcE1lc3NhZ2VJbmZvIiwiY2hhbm5lbCIsImV4dHJhIiwidmlkZW9QYXRoIiwiZ2V0SW5zIiwic2hhcmVBcHBNZXNzYWdlIiwic2hhcmVBcHBNZXNzYWdlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwicHVibGlzaFZpZGVvSW5mbyIsInZpZGVvSUQiLCJwdWJsaXNoVmlkZW8iLCJzdGFydCIsImluaXRUb3BVSURhdGEiLCJJbml0TWFya2V0SXRlbXMiLCJJbml0T3duZWRJdGVtcyIsIkluaXRDb21wYW55SXRlbXMiLCJyZWZyZXNoQWRzU3AiLCJBZHNNZ3IiLCJIaWRlQmFubmVyQWQiLCJkZWFsU2NyZWVuUmVjb3JkaW5nQnRuU2hvdyIsImRlc2t0b3BVc2VCdG5TaG93IiwiX3RoaXMiLCJzY3JlZW5SZWNvcmRpbmdGbGFnIiwic3luY1NjcmVlblJlY29yZGluZ1Nob3ciLCJjcmVhdGVHYW1lUmVjb3JkZXJJbmZvIiwib25TdGFydCIsIm9uU3RvcCIsIm9uU3RvcFJlcyIsIkRhdGUiLCJub3ciLCJzY3JlZW5SZWNvcmRpbmdUaW1lIiwidGV4dCIsIm9uRXJyb3IiLCJlcnJNc2ciLCJlcnJvciIsIm9uSW50ZXJydXB0aW9uQmVnaW4iLCJjcmVhdGVHYW1lUmVjb3JkZXIiLCJjcmVhdGVHYW1lUmVjb3JkZXJDYWxsYmFjayIsImNvZGUiLCJyZXMiLCJzdG9wUmVzIiwidmlkZW9JZCIsIkdhbWVSZWNvcmRlcl9SZWNvcmRGYWlsZWRUaW1lUmFuZ2VUb29TaG9ydCIsIkdhbWVSZWNvcmRlcl9SZWNvcmRGYWlsZWRUaW1lUmFuZ2VUb29Mb25nIiwiR2FtZVJlY29yZGVyX1JlY29yZEZhaWxlZE5vVmlkZW8iLCJHYW1lUmVjb3JkZXJfUHVibGlzaFZpZGVvRmFpbGVkIiwib25BYm9ydCIsIm9uQnRuU2NyZWVuUmVjb3JkaW5nQ2xpY2siLCJnYW1lUmVjb3JkZXJTdGFydCIsImR1cmF0aW9uIiwiZ2FtZVJlY29yZGVyU3RvcCIsIl90aGlzMiIsImluZGV4IiwicGF0aCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwidXNlIiwiY2hlY2tDb21tb25Vc2UiLCJzdWNjZXNzIiwiaXNDb21tb25Vc2UiLCJmYWlsIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBsZXRlIiwiZGVza3RvcCIsImNoZWNrU2hvcnRjdXQiLCJpbnN0YWxsZWQiLCJtc2ciLCJvbkRlc2t0b3BDbGljayIsImFkZFNob3J0Y3V0Iiwib25Vc2VDbGljayIsImFkZENvbW1vblVzZSIsInNlZWQiLCJnZXRTcHJpdGVGcmFtZSIsImluaXRDYXNoIiwiTWF0aCIsInJhbmRvbSIsInR1dG9yaWFsSW5NYXJrZXQiLCJwYXJhbSIsIk1hcERhdGFNZ3IiLCJnZXREYXRhQnlJdGVtVHlwZUFuZElkIiwid2VpZ2h0IiwiSW5pdEdldE1vbmV5SWQiLCJnZXRUcmFuc2xhdGlvbiIsImNhc2giLCJJbml0TW9uZXlCb251cyIsIkFzc2V0c01vbmV5IiwiSGlnaEFzc2V0cyIsIkFnZSIsInJldGlyZUFnZSIsIkhwUG9pbnQiLCJSZXB1dGF0aW9uIiwibGFzdENhcCIsIldhcmVIb3VzZUFsbENhcGNpdHkiLCJXYXJlSG91c2VDYXBjaXR5IiwiQ2xlYXJTaG93R29vZHNMaXN0IiwiRGF0YUxpc3QiLCJnZXREYXRhTGlzdEJ5U2V4IiwiU2V4Iiwic2hvd0FyciIsImdldEFycmF5QnlJdGVtcyIsImxlbmd0aCIsImkiLCJvYmoiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsImluaXQiLCJqIiwicmVmcmVzaExvd1ByaWNlIiwicmVmcmVzaFByaWNlIiwicHVzaCIsIkluc2VydEdvb2RzSWRUb0xpc3QiLCJzZWxmIiwiU2V0Q2FsbEZ1bmMiLCJlbWl0IiwiZHQiLCJzdGVwIiwidHV0b3JpYWxHb29kc0lkIiwiQ2xpY2tCdXlCdG4iLCJkMyIsImQ0IiwiZ2V0R29vZHNEYXRhQnlJZCIsImQ1IiwiQ2xpY2tTYWxlQnRuIiwiUmVmcmVzaERhdGFUb05leHRZZWFyIiwiUmVmcmVzaFVzZXJBZ2UiLCJSZWZyZXNoVHV0b3JpYWxJdGVtcyIsIlBsYXlBbmltYSIsIlJlZnJlc2hDb21wYW55SXRlbXMiLCJSZWZyZXNoSXRlbXNGb3JTcGVjaWFsQWdlIiwiUmVmcmVzaEl0ZW1zIiwiUmVmcmVzaE93bmVkSXRlbXNTdGF0ZSIsIkdldEJvbnVzUmV3YXJkRXZlcnlZZWFyIiwiUmVmcmVzaEhlYWx0aEhwIiwiQ2hlY2tFdmVudEhhcHBlbiIsInR1dG9yaWFsSW5EYXRlIiwiTWF0ZURhdGVfMSIsIkNob29zZU9wZW5NYXRlUGFuZWwiLCJNYXRlRGF0ZV8yIiwidHV0b3JpYWxJbkJ1cyIsIkJ1c2luZXNzXzEiLCJDaG9vc2VPcGVuQnVzaXNuZXNzIiwiQnVzaW5lc3NfMiIsImhhc0NvbXBhbnkiLCJ0dXRvcmlhbFN0b2NrQm9udXMiLCJTdG9ja0JvbnVzXzEiLCJ0dXRvcmlhbE1hdGVQb2ludCIsIkRhdGVUb01hcnJ5XzEiLCJFdmVudERhdGFJZExpc3QiLCJMYXN0RXZlbnRBZ2UiLCJlSWQiLCJHZXRFdmVudERhdGFBbmRTcGxpY2VJZCIsIlNwYXduU2VlZEJldHdlZW5Ud29OdW0iLCJSZWZyZXNoSHBJY29uU3AiLCJIcFN0YXRlQSIsIkhwU3RhdGVCIiwiSHBTdGF0ZUMiLCJSZWZyZXNoUGFuZWwiLCJjaGlsZHJlbiIsInNjIiwicmVmcmVzaFVwUHJpY2UiLCJDaGVja0hhc0VsZW1lbnQiLCJvdXRhcnIiLCJzdGF0ZUxpc3QiLCJoYXMiLCJKdWRlR29vZHNPd25lZCIsInBhciIsIlN0YXRlIiwibGlzdCIsImdldEFycmF5SXRlbXMiLCJyZWZyZXNoTWlkUHJpY2UiLCJvdXRkYXRhIiwiSnVkZUdvb2RzSGFzIiwiTGlzdCIsIm91dCIsIkdvb2RzRm9yZUlkIiwicmF0IiwiYXJyTnVtIiwibnVtIiwidGVtcF9hcnJheSIsIkFycmF5IiwicmV0dXJuX2FycmF5IiwiYXJySW5kZXgiLCJmbG9vciIsInNwbGljZSIsImFyciIsImdldE93bkRhdGFMaXN0QnlUeXBlIiwiR29vZHMiLCJvd25OdW0iLCJyZWZyZXNoRGF0YSIsIlJlZnJlc2hTdGF0ZSIsIkNvbXBhbnkiLCJjYW5Qcm9maXQiLCJjYW5HZXRQcm9maXQiLCJDYW5HZXRTdG9ja1Byb2ZpdCIsInNob3dTdG9ja1Byb2ZpdCIsIlJlZnJlc2hVSVNob3dBZnRlciIsIkNob29zZU9wZW5NYXJrZXQiLCJBdWRpb01nciIsInBsYXlTRlgiLCJpc0NoZWNrZWQiLCJDaG9vc2VPcGVuQmVsb25nIiwiQ2hvb3NlT3BlblRyZWF0IiwiQ2hvb3NlT3BlblJldGlyZVBhbmVsIiwiQ2hvb3NlT3BlblJhbmtQYW5lbCIsIlBsYXRmb3JtQ29udHJvbGxlciIsIklzTG9naW5TeW5jIiwiV0VDSEFUX0dBTUUiLCJCQUlEVV9HQU1FIiwic2hvd1N1YkNvbnRlbnRWaWV3IiwiU2VuZE1lc3NhZ2VUb1N1YlZpZXciLCJDbG9zZVJhbmtWaWV3IiwiaGlkZVN1YkNvbnRlbnRWaWV3IiwiT3BlbkFkZENhcGFjaXR5IiwiT3Blbk1hcmtldFRpcFBhbmVsIiwiT3BlbldhdGNoQWRQYW5lbCIsIlNwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUksWUFBWSxHQUFHSixPQUFPLENBQUMsY0FBYyxDQUFDO0FBQzFDLElBQUlLLGNBQWMsR0FBR0wsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLElBQUlNLHFCQUFxQixHQUFHTixPQUFPLENBQUMsdUJBQXVCLENBQUM7QUFDNUQsSUFBSU8sa0JBQWtCLEdBQUdQLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztBQUN0RCxJQUFJUSxtQkFBbUIsR0FBR1IsT0FBTyxDQUFDLHFCQUFxQixDQUFDO0FBQ3hELElBQUlTLFlBQVksR0FBR1QsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUMxQyxJQUFJVSxhQUFhLEdBQUdWLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDNUMsSUFBSVcsVUFBVSxHQUFHWCxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlZLGNBQWMsR0FBR1osT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLElBQUlhLFVBQVUsR0FBR2IsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJYyxRQUFRLEdBQUdkLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbEMsSUFBSWUsV0FBVyxHQUFHZixPQUFPLENBQUMsYUFBYSxDQUFDO0FB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QUFJa0osS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkQSxLQUFLLENBQUMwSSxFQUFFLEdBQUcsSUFBSSxDQUFDNVMsSUFBSTtJQUNwQixJQUFJLENBQUM5RCxhQUFhLENBQUMrRSxTQUFTLENBQUNpSixLQUFLLENBQUM7RUFDdkM7QUFDSixDQUFDLENBQUM7QUFDRjJJLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbFcsU0FBUyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgVXNlclN0YXRlID0gcmVxdWlyZShcIlVzZXJTdGF0ZVwiKTtcclxudmFyIEdvb2RzSXRlbSA9IHJlcXVpcmUoXCJHb29kc0l0ZW1cIik7XHJcbnZhciBCdXlUaXBQYW5lbCA9IHJlcXVpcmUoXCJCdXlUaXBQYW5lbFwiKTtcclxudmFyIFNhbGVUaXBQYW5lbCA9IHJlcXVpcmUoXCJTYWxlVGlwUGFuZWxcIik7XHJcbnZhciBDb21tb25UaXBQYW5lbCA9IHJlcXVpcmUoXCJDb21tb25UaXBQYW5lbFwiKTtcclxudmFyIENvbXBhbnlDcmVhdGVUaXBQYW5lbCA9IHJlcXVpcmUoXCJDb21wYW55Q3JlYXRlVGlwUGFuZWxcIik7XHJcbnZhciBDb21wYW55QnV5VGlwUGFuZWwgPSByZXF1aXJlKFwiQ29tcGFueUJ1eVRpcFBhbmVsXCIpO1xyXG52YXIgQ29tcGFueVNhbGVUaXBQYW5lbCA9IHJlcXVpcmUoXCJDb21wYW55U2FsZVRpcFBhbmVsXCIpO1xyXG52YXIgTWF0ZVRpcFBhbmVsID0gcmVxdWlyZShcIk1hdGVUaXBQYW5lbFwiKTtcclxudmFyIE1hdGVJdGVtUGFuZWwgPSByZXF1aXJlKFwiTWF0ZUl0ZW1QYW5lbFwiKTtcclxudmFyIEVuam95UGFuZWwgPSByZXF1aXJlKFwiRW5qb3lQYW5lbFwiKTtcclxudmFyIENvbW1vbkJ1eVBhbmVsID0gcmVxdWlyZShcIkNvbW1vbkJ1eVBhbmVsXCIpO1xyXG52YXIgT3duZWRQYW5lbCA9IHJlcXVpcmUoXCJPd25lZFBhbmVsXCIpO1xyXG52YXIgQmV0UGFuZWwgPSByZXF1aXJlKFwiQmV0UGFuZWxcIik7XHJcbnZhciBSZXRpcmVQYW5lbCA9IHJlcXVpcmUoXCJSZXRpcmVQYW5lbFwiKTtcclxudmFyIEFkZENhcGFjaXR5UGFuZWwgPSByZXF1aXJlKFwiQWRkQ2FwYWNpdHlcIik7XHJcbnZhciBNYXJrZXRUaXBQYW5lbCA9IHJlcXVpcmUoXCJNYXJrZXRUaXBQYW5lbFwiKTtcclxudmFyIFRyZWF0UGFuZWwgPSByZXF1aXJlKFwiVHJlYXRQYW5lbFwiKTtcclxudmFyIEV2ZW50VGlwUGFuZWwgPSByZXF1aXJlKFwiRXZlbnRQYW5lbFwiKTtcclxudmFyIEV2ZW50UmVzdWx0UGFuZWwgPSByZXF1aXJlKFwiRXZlbnRSZXN1bHRQYW5lbFwiKTtcclxudmFyIFdhdGNoQWRzUGFuZWwgPSByZXF1aXJlKFwiV2F0Y2hBZHNQYW5lbFwiKTtcclxudmFyIE1hcnJ5UGFuZWwgPSByZXF1aXJlKFwiTWFycnlQYW5lbFwiKTtcclxudmFyIFR1dG9yaWFsUGFuZWwgPSByZXF1aXJlKFwiVHV0b3JpYWxQYW5lbFwiKTtcclxudmFyIFRpbWVQYW5lbCA9IHJlcXVpcmUoXCJUaW1lUGFuZWxcIik7XHJcbnZhciBBZHNSZXRpcmVQYW5lbCA9IHJlcXVpcmUoXCJBZHNSZXRpcmVQYW5lbFwiKTtcclxudmFyIFVubG9ja01hdGVQYW5lbCA9IHJlcXVpcmUoXCJVbmxvY2tNYXRlUGFuZWxcIik7XHJcbnZhciBSYW5rUGFuZWwgPSByZXF1aXJlKFwiUmFua1BhbmVsXCIpO1xyXG5cclxudmFyIFR1dG9yaWFsU3RlcCA9IHJlcXVpcmUoXCJUdXRvcmlhbFN0ZXBcIik7XHJcblxyXG5jb25zdCBleW91Q2xpZW50VGlrdG9rID0gcmVxdWlyZSgnRXlvdUNsaWVudFRpa3RvaycpXHJcbmNvbnN0IGV5b3VDbGllbnRLcyA9IHJlcXVpcmUoJ0V5b3VDbGllbnRLcycpXHJcblxyXG52YXIgR2FtZVNjZW5lID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBNYWluQXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgQmlnQXBBdGxhczpjYy5TcHJpdGVBdGxhcyxcclxuXHJcbiAgICAgICAgQ2FzaExibDpjYy5MYWJlbCxcclxuICAgICAgICBBc3NldExibDpjYy5MYWJlbCxcclxuICAgICAgICBDdXJBZ2VMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgVG90YWxBZ2VMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgSHBMYmw6Y2MuTGFiZWwsXHJcbiAgICAgICAgUmVwdXRhdGlvbkxibDpjYy5MYWJlbCxcclxuICAgICAgICBDYXBjaXR5TGJsOmNjLkxhYmVsLFxyXG4gICAgICAgIEhwSWNvbjpjYy5TcHJpdGUsXHJcblxyXG4gICAgICAgIE1hcmtldEl0ZW06Y2MuUHJlZmFiLFxyXG4gICAgICAgIE93bkl0ZW06Y2MuUHJlZmFiLFxyXG4gICAgICAgIENvbXBhbnlJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICAgICAgTWFya2V0UGFyZW50OmNjLk5vZGUsXHJcbiAgICAgICAgT3duUGFyZW50OmNjLk5vZGUsXHJcbiAgICAgICAgQ29tcGFueVBhcmVudDpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBNYXJrZXRQYW5lbDpjYy5Ob2RlLFxyXG4gICAgICAgIEJ1c2luZXNzUGFuZWw6Y2MuTm9kZSxcclxuICAgICAgICBXYXRjaEFkc0J0bjpjYy5TcHJpdGUsXHJcbiAgICAgICAgVGlwQ2FzaFNwOmNjLlNwcml0ZSxcclxuXHJcbiAgICAgICAgTWFya2V0VGlwUGFuZWw6TWFya2V0VGlwUGFuZWwsLy/luILlnLrooYzmg4Xmj5DnpLpcclxuICAgICAgICBCdXlUaXA6QnV5VGlwUGFuZWwsXHJcbiAgICAgICAgU2FsZVRpcDpTYWxlVGlwUGFuZWwsXHJcbiAgICAgICAgQ29tbW9uVGlwOkNvbW1vblRpcFBhbmVsLFxyXG4gICAgICAgIENvbXBhbnlDcmVhdGVQYW5lbDpDb21wYW55Q3JlYXRlVGlwUGFuZWwsXHJcbiAgICAgICAgU3RvY2tCdXlUaXBQYW5lbDpDb21wYW55QnV5VGlwUGFuZWwsXHJcbiAgICAgICAgU3RvY2tTYWxlVGlwUGFuZWw6Q29tcGFueVNhbGVUaXBQYW5lbCxcclxuICAgICAgICBNYXRlUGFuZWw6TWF0ZVRpcFBhbmVsLFxyXG4gICAgICAgIE1hdGVJdGVtVGlwOk1hdGVJdGVtUGFuZWwsXHJcbiAgICAgICAgRW5qb3lUaXBQYW5lbDpFbmpveVBhbmVsLFxyXG4gICAgICAgIENvbW1vbkJ1eVRpcFBhbmVsOkNvbW1vbkJ1eVBhbmVsLFxyXG4gICAgICAgIE93bmVkVGlwUGFuZWw6T3duZWRQYW5lbCxcclxuICAgICAgICBCZXRUaXBQYW5lbDpCZXRQYW5lbCxcclxuICAgICAgICBSZXRpcmVQYW5lbFRpcDpSZXRpcmVQYW5lbCxcclxuICAgICAgICBBZHNSZXRpcmVQYW5lbDpBZHNSZXRpcmVQYW5lbCxcclxuICAgICAgICBVbmxvY2tNYXRlUGFuZWw6VW5sb2NrTWF0ZVBhbmVsLFxyXG4gICAgICAgIHJhbmtQYW5lbDpSYW5rUGFuZWwsXHJcblxyXG4gICAgICAgIFRyZWF0UGFuZWw6VHJlYXRQYW5lbCxcclxuICAgICAgICBFdmVudFBhbmVsOkV2ZW50VGlwUGFuZWwsXHJcbiAgICAgICAgRXZlbnRSZXN1bHRQYW5lbDpFdmVudFJlc3VsdFBhbmVsLFxyXG5cclxuICAgICAgICBBZGRDYXBQYW5lbDpBZGRDYXBhY2l0eVBhbmVsLFxyXG5cclxuICAgICAgICBXYXRjaEFkc1BhbmVsOldhdGNoQWRzUGFuZWwsXHJcbiAgICAgICAgTWFycnlQYW5lbDpNYXJyeVBhbmVsLFxyXG4gICAgICAgIFR1dG9yaWFsUGFuZWw6VHV0b3JpYWxQYW5lbCxcclxuXHJcbiAgICAgICAgVGltZVBhbmVsOlRpbWVQYW5lbCxcclxuXHJcbiAgICAgICAgdG9nZ2xlTWFya2V0OmNjLlRvZ2dsZSxcclxuICAgICAgICB0b2dnbGVCdXNzaW5lc3M6Y2MuVG9nZ2xlLFxyXG4gICAgICAgIHRvZ2dsZU1hdGU6Y2MuVG9nZ2xlLFxyXG4gICAgICAgIHRvZ2dsZUVuam95OmNjLlRvZ2dsZSxcclxuXHJcbiAgICAgICAgTWF0ZU5ld1RpcDpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBBZFNwOlwiYWlzaGVuXCIsXHJcblxyXG4gICAgICAgIHd4U3ViQ29udGV4dFZpZXc6Y2MuTm9kZSxcclxuICAgICAgICBTd2FuU3ViQ29udGV4dFZpZXc6Y2MuTm9kZSxcclxuXHJcbiAgICAgICAgbWFya2V0VGlwRGF0YTpudWxsLFxyXG5cclxuICAgICAgICBzY3JlZW5SZWNvcmRpbmdCdG46IGNjLk5vZGUsXHJcbiAgICAgICAgZGVza3RvcEJ0bjogY2MuTm9kZSxcclxuICAgICAgICB1c2VCdG46IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgXHQvL+ebo+iBveaJk+mWi+izvOiyt1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuQnV5VGlwLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5CdXlUaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkJ1eVRpcC5TaG93UGFuZWwoZGF0YSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgLy/nm6Pogb3os7zosrfmiJDlip9cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuQnV5U3VjY2VzcywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FzaExibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCk7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFzc2V0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaE93bmVkSXRlbXMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIC8v55uR5ZCsIOWHuuWUrueql+WPo1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuU2FsZVRpcCwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuU2FsZVRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuU2FsZVRpcC5TaG93UGFuZWwoZGF0YSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5TYWxlU3VjY2VzcywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FzaExibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCk7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFzc2V0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaE93bmVkSXRlbXMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vblRpcCwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGNjLk1nci5nbG9iYWwudHV0b3JpYWxTdGVwICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgPT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQXNzZXRzKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKGRhdGEpO1xyXG4gICAgICAgICAgICBpZihkYXRhLmZvcldoYXQgIT0gbnVsbCAmJiBkYXRhLmZvcldoYXQgPT0gXCJFdmVudF9ZZXNcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIrIGRhdGEuUGRhdGEuSWQpXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLlBkYXRhLklkICE9IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVmcmVzaE93bmVkSXRlbXMoZGF0YS5QZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlbkV2ZW50UmVzdWx0LCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5FdmVudFJlc3VsdFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQXNzZXRzKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5FdmVudFJlc3VsdFBhbmVsLlNob3dQYW5lbChkYXRhKTtcclxuICAgICAgICAgICAgaWYoZGF0YS5mb3JXaGF0ICE9IG51bGwgJiYgZGF0YS5mb3JXaGF0ID09IFwiRXZlbnRfWWVzXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuUGRhdGEuSWQgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoT3duZWRJdGVtcyhkYXRhLlBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGF0YS5QZGF0YS5jb21wYW55SWQgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoQ29tcGFueUl0ZW1zRnJvbUV2ZW50KGRhdGEuUGRhdGEuY29tcGFueUlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5omT5byA5Yib5Yqe5YWs5Y+4cGFuZWxcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlbkNvbXBhbnlDcmVhdGUsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLkNvbXBhbnlDcmVhdGVQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tcGFueUNyZWF0ZVBhbmVsLlNob3dQYW5lbChkYXRhKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/liJvlip7lhazlj7hcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuQ3JlYXRlQ29tcGFueVN1Y2Nlc3MsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLkNhc2hMYmwuc3RyaW5nID0gY2MuTWdyLmdsb2JhbC5Gb3JtYXROdW0oY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2gpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hDb21wYW55SXRlbXNBZnRlckJ1eShkYXRhKTtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQXNzZXRzKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoVUlTaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hlY2tUdXRvcmlhbEhhcHBlbigpOyAvL+WIm+WKnueOqeWFrOWPuOacieS4gOasoeW8leWvvFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+aJk+W8gOi0reS5sOiCoeelqHBhbmVsXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50Lk9wZW5TdHVja0J1eVRpcCwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuU3RvY2tCdXlUaXBQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuU3RvY2tCdXlUaXBQYW5lbC5TaG93UGFuZWwoZGF0YSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v6LSt5Lmw6IKh56Wo5oiQ5YqfXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LkJ1eVN0b2NrU3VjY2VzcywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FzaExibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaENvbXBhbnlJdGVtc0FmdGVyQnV5KGRhdGEpO1xyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBc3NldHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/miZPlvIDlh7rllK7ogqHnpahwYW5lbFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuU3R1Y2tTYWxlVGlwLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5TdG9ja1NhbGVUaXBQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuU3RvY2tTYWxlVGlwUGFuZWwuU2hvd1BhbmVsKGRhdGEpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+WHuuWUruiCoeelqOaIkOWKn1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5TYWxlU3RvY2tTdWNjZXNzLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5DYXNoTGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoKTtcclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoQ29tcGFueUl0ZW1zQWZ0ZXJCdXkoZGF0YSk7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFzc2V0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+aJk+W8gOe6puS8muaPkOekuumdouadv1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuTWF0ZVRpcCwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuTWF0ZUl0ZW1UaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk1hdGVJdGVtVGlwLlNob3dQYW5lbChkYXRhKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/miZPlvIDnuqbkvJrlrozmiJBcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuRGF0ZVN1Y2Nlc3MsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBc3NldHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hNYXRlSXRlbVVJKGRhdGEuSWQpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuICAgICAgICAgICAgLy90aGlzLlN0YXJ0TWF0ZUxvdmVUdXRvcmlhbCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuRGF0ZUxhdGVyLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5TdGFydE1hdGVMb3ZlVHV0b3JpYWwoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/miZPlvIDlhbHnlKjkubBcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vbkJ1eSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5pS25Yiw5omT5byAXCIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbW1vbkJ1eVRpcFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Db21tb25CdXlUaXBQYW5lbC5TaG93UGFuZWwoZGF0YSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5YWx55So5LmwbWFpIOaIkOWKn+i/lOWbnlxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5Db21tb25CdXlTYWxlU3VjY2VzcywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFzc2V0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgICAgICBpZihkYXRhLmZsYWcgPT0gXCJTYWxlXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLk93bmVkVGlwUGFuZWwuU2hvd1BhbmVsKCk7XHJcblxyXG4gICAgICAgICAgICBpZihkYXRhLkRpc3ZvcmNlICYmIGRhdGEuRGlzdm9yY2UgPT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoQ29tcGFueUl0ZW1zQWZ0ZXJEaXN2b3JjZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5NYXRlUGFuZWwuUmVmcmVzaFBhbmVsSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFzc2V0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/msrvnlpflrozmiJBcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuVHJlYXRTdWNjZXNzLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnVzZXJTdGF0ZSA9IFVzZXJTdGF0ZS5PSztcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlY292ZXJZZWFyID0gMDtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQXNzZXRzKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoVUlTaG93KCk7XHJcbiAgICAgICAgICAgIC8vLy9jYy5sb2coXCItLS0tLS0tLS0tLS0tLS0t5aOr5aSn5aSr6IOc5aSa6LSf5bCRLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiArIGNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LlJlZnJlc2hDYXNoQXNzZXQsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBc3NldHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/otYzljZpcclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlbkJldFRpcCwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuQmV0VGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5CZXRUaXBQYW5lbC5TaG93UGFuZWwoZGF0YSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuVW5Mb2NrTWF0ZSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuVW5sb2NrTWF0ZVBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5NYXRlTmV3VGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuVW5sb2NrTWF0ZVBhbmVsLlNob3dQYW5lbChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5NYXRlUGFuZWwuUmVmcmVzaFBhbmVsSXRlbXMoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LlJldGlyZSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuUmV0aXJlUGFuZWxUaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlJldGlyZVBhbmVsVGlwLlNob3dQYW5lbCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuUmVmcmVzaEFsbFVJU2hvdywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFVJU2hvdygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuVXNlUmV0aXJlQWRzU2tpbGwsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLkFkc1JldGlyZVBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5BZHNSZXRpcmVQYW5lbC5TaG93UGFuZWwoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LkFkZFdhcmVIb3VzZUNhcGFjaXR5LCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQXNzZXRzKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoVUlTaG93KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuTWFycnksIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLk1hcnJ5UGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk1hcnJ5UGFuZWwuU2hvd1BhbmVsKGRhdGEpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5vbihjYy5NZ3IuRXZlbnQuT3BlblR1dG9yaWFsLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5UdXRvcmlhbFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5UdXRvcmlhbFBhbmVsLlNob3dQYW5lbChkYXRhKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LkNsb2NrRW5kLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5Ub05leHRZZWFyKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50Lm9uKGNjLk1nci5FdmVudC5PcGVuRW5qb3ksIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLkNob29zZU9wZW5FbmpveSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+aJk+W8gOWIm+WKnuWFrOWPuHBhbmVsXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQub24oY2MuTWdyLkV2ZW50LlNoYXJlVmlkZW8sIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgaXNLdWFpU2hvdSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy/ov5DooYzlnKjlv6vmiYvlubPlj7BcclxuICAgICAgICAgICAgICAgIGlzS3VhaVNob3UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuQllURURBTkNFX0dBTUUgPT09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoYXJlQXBwTWVzc2FnZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgICAgICAgICBleHRyYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1BhdGg6IGRhdGEudmlkZW9QYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5zaGFyZUFwcE1lc3NhZ2Uoc2hhcmVBcHBNZXNzYWdlSW5mbywgc2hhcmVBcHBNZXNzYWdlQ2FsbGJhY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliIbkuqvlvZXlsY/lm57osIM6PicsIHNoYXJlQXBwTWVzc2FnZUNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGlzS3VhaVNob3Upe1xyXG4gICAgICAgICAgICAgICAgbGV0IHB1Ymxpc2hWaWRlb0luZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9JRDogZGF0YS52aWRlb1BhdGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV5b3VDbGllbnRLcy5nZXRJbnMoKS5wdWJsaXNoVmlkZW8ocHVibGlzaFZpZGVvSW5mbylcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIFx0dGhpcy5pbml0VG9wVUlEYXRhKCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJbluILlnLrmlbDmja5cclxuICAgICAgICB0aGlzLkluaXRNYXJrZXRJdGVtcygpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5bey57uP5pyJ55qE54mp5ZOBXHJcbiAgICAgICAgdGhpcy5Jbml0T3duZWRJdGVtcygpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6IKh5biC5YWs5Y+45pWw5o2uXHJcbiAgICAgICAgdGhpcy5Jbml0Q29tcGFueUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVmcmVzaEFkc1NwKDMpO1xyXG5cclxuICAgICAgICBjYy5NZ3IuQWRzTWdyLkhpZGVCYW5uZXJBZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRlYWxTY3JlZW5SZWNvcmRpbmdCdG5TaG93KCk7XHJcbiAgICAgICAgdGhpcy5kZXNrdG9wVXNlQnRuU2hvdygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWFsU2NyZWVuUmVjb3JkaW5nQnRuU2hvdygpIHtcclxuICAgICAgICBleW91Q2xpZW50VGlrdG9rLmdldElucygpLnNjcmVlblJlY29yZGluZ0ZsYWcgPSAwXHJcbiAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLnNjcmVlblJlY29yZGluZ0ZsYWcgPSAwXHJcbiAgICAgICAgdGhpcy5zeW5jU2NyZWVuUmVjb3JkaW5nU2hvdygpXHJcbiAgICAgICAgbGV0IGlzS3VhaVNob3UgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGtzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvL+i/kOihjOWcqOW/q+aJi+W5s+WPsFxyXG4gICAgICAgICAgICBpc0t1YWlTaG91ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNjLnN5cy5CWVRFREFOQ0VfR0FNRSA9PT0gY2Muc3lzLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdGVHYW1lUmVjb3JkZXJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgb25TdGFydDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICBvblN0b3A6IG9uU3RvcFJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdGbGFnID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdUaW1lIDwgMzAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5b2V5bGP5pe26Ze05b+F6aG75aSn5LqOM+enkid9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5TaG93UGFuZWwoe3RleHQ6ICfmmK/lkKbliIbkuqvmnKzmrKHlvZXlsY8nLCBmb3JXaGF0OiAnc2hhcmVWaWRlbycsIHZpZGVvUGF0aDogb25TdG9wUmVzLnZpZGVvUGF0aH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBlcnJNc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9leWxj+W8guW4uDo+JywgZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgIGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNTY3JlZW5SZWNvcmRpbmdTaG93KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkludGVycnVwdGlvbkJlZ2luOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdGbGFnID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY1NjcmVlblJlY29yZGluZ1Nob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5b2V5bGP5pe26Ze05b+F6aG75bCP5LqOMzAw56eSJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Yib5bu65b2V5bGP566h55CG5bel5YW3XHJcbiAgICAgICAgICAgIGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuY3JlYXRlR2FtZVJlY29yZGVyKGNyZWF0ZUdhbWVSZWNvcmRlckluZm8sIGNyZWF0ZUdhbWVSZWNvcmRlckNhbGxiYWNrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliJvlu7rlvZXlsY/nrqHnkIblt6Xlhbflm57osIM6PicsIGNyZWF0ZUdhbWVSZWNvcmRlckNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUdhbWVSZWNvcmRlckNhbGxiYWNrLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblJlY29yZGluZ0J0bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYgKGlzS3VhaVNob3Upe1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlR2FtZVJlY29yZGVySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZXlsY/lvIDlp4s6XCIsIHJlcylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN0b3A6IHN0b3BSZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57uT5p2f5b2V5Yi2OlwiLHN0b3BSZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLnNjcmVlblJlY29yZGluZ0ZsYWcgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBleW91Q2xpZW50S3MuZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nVGltZSA8IDMwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLlNob3dQYW5lbCh7dGV4dDogJ+W9leWxj+aXtumXtOW/hemhu+Wkp+S6jjPnp5InfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuWIhuS6q+acrOasoeW9leWxjzpcIixzdG9wUmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5piv5ZCm5YiG5Lqr5pys5qyh5b2V5bGPJywgZm9yV2hhdDogJ3NoYXJlVmlkZW8nLCB2aWRlb1BhdGg6IHN0b3BSZXMudmlkZW9JZH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBlcnJNc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZXJyTXNnLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2V5bGP6ZSZ6K+v5L+h5oGvOj4nLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICBleW91Q2xpZW50S3MuZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNTY3JlZW5SZWNvcmRpbmdTaG93KClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0ga3MuZXJyb3IuR2FtZVJlY29yZGVyX1JlY29yZEZhaWxlZFRpbWVSYW5nZVRvb1Nob3J0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLlNob3dQYW5lbCh7dGV4dDogJ+W9leWItue7k+adn++8jOW9leWItuaXtumXtOWkquefrSd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0ga3MuZXJyb3IuR2FtZVJlY29yZGVyX1JlY29yZEZhaWxlZFRpbWVSYW5nZVRvb0xvbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5b2V5Yi257uT5p2f77yM5b2V5Yi25pe26Ze05aSq6ZW/J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBrcy5lcnJvci5HYW1lUmVjb3JkZXJfUmVjb3JkRmFpbGVkTm9WaWRlbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5TaG93UGFuZWwoe3RleHQ6ICflvZXliLbnu5PmnZ/vvIzmnKrlvZXliLbliLDop4bpopEnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IGtzLmVycm9yLkdhbWVSZWNvcmRlcl9QdWJsaXNoVmlkZW9GYWlsZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5b2V5bGP5aSx6LSlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkFib3J0OiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV5b3VDbGllbnRLcy5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdGbGFnID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY1NjcmVlblJlY29yZGluZ1Nob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5b2V5bGP5pe26Ze05b+F6aG75bCP5LqOMzAw56eSJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Yib5bu65b2V5bGP566h55CG5bel5YW3XHJcbiAgICAgICAgICAgIGV5b3VDbGllbnRLcy5nZXRJbnMoKS5jcmVhdGVHYW1lUmVjb3JkZXIoY3JlYXRlR2FtZVJlY29yZGVySW5mbywgY3JlYXRlR2FtZVJlY29yZGVyQ2FsbGJhY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uuW/q+aJi+W9leWxj+euoeeQhuW3peWFt+Wbnuiwgzo+JywgY3JlYXRlR2FtZVJlY29yZGVyQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlR2FtZVJlY29yZGVyQ2FsbGJhY2suY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuUmVjb3JkaW5nQnRuLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuUmVjb3JkaW5nQnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJ0blNjcmVlblJlY29yZGluZ0NsaWNrKCkge1xyXG4gICAgICAgIGxldCBpc0t1YWlTaG91ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy/ov5DooYzlnKjlv6vmiYvlubPlj7BcclxuICAgICAgICAgICAgaXNLdWFpU2hvdSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYy5zeXMuQllURURBTkNFX0dBTUUgPT09IGNjLnN5cy5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAoZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdGbGFnID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBleW91Q2xpZW50VGlrdG9rLmdldElucygpLmdhbWVSZWNvcmRlclN0YXJ0KHtkdXJhdGlvbjogMzAwfSlcclxuICAgICAgICAgICAgICAgIGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZyA9IDFcclxuICAgICAgICAgICAgICAgIGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nVGltZSA9IERhdGUubm93KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuZ2FtZVJlY29yZGVyU3RvcCgpXHJcbiAgICAgICAgICAgICAgICBleW91Q2xpZW50VGlrdG9rLmdldElucygpLnNjcmVlblJlY29yZGluZ0ZsYWcgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChleW91Q2xpZW50S3MuZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLmdhbWVSZWNvcmRlclN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGV5b3VDbGllbnRLcy5nZXRJbnMoKS5zY3JlZW5SZWNvcmRpbmdGbGFnID0gMVxyXG4gICAgICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLnNjcmVlblJlY29yZGluZ1RpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaMiemSrueCueWHu+S6huWBnOatouW9leWxj+S6i+S7tlwiKVxyXG4gICAgICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLmdhbWVSZWNvcmRlclN0b3AoKVxyXG4gICAgICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLnNjcmVlblJlY29yZGluZ0ZsYWcgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3luY1NjcmVlblJlY29yZGluZ1Nob3coKVxyXG4gICAgfSxcclxuXHJcbiAgICBzeW5jU2NyZWVuUmVjb3JkaW5nU2hvdygpIHtcclxuICAgICAgICBsZXQgaXNLdWFpU2hvdSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2Yga3MgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8v6L+Q6KGM5Zyo5b+r5omL5bmz5Y+wXHJcbiAgICAgICAgICAgIGlzS3VhaVNob3UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleCA9IGlzS3VhaVNob3UgPyBleW91Q2xpZW50S3MuZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZyA6IGV5b3VDbGllbnRUaWt0b2suZ2V0SW5zKCkuc2NyZWVuUmVjb3JkaW5nRmxhZ1xyXG4gICAgICAgIGxldCBwYXRoID0gJy9hdGxhcy9zY3JlZW5SZWNvcmRpbmctJyArIGluZGV4O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NldCBzcHJpdGUgZnJhbWUgZmFpbGVkISBlcnInLCBwYXRoLCBlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblJlY29yZGluZ0J0bi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc2t0b3BVc2VCdG5TaG93KCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga3MgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8v6L+Q6KGM5Zyo5b+r5omL5bmz5Y+wXHJcbiAgICAgICAgICAgIC8v5qOA5p+l55So5oi35piv5ZCm5bey57uP5bCG5bCP5ri45oiP6K6+5Li65bi455SoXHJcbiAgICAgICAgICAgIGxldCB1c2UgPSB0aGlzLnVzZUJ0bjtcclxuICAgICAgICAgICAga3MuY2hlY2tDb21tb25Vc2Uoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg6K6+5Li65bi455So5p+l6K+i57uT5p6c5Li677yaJHtyZXMuaXNDb21tb25Vc2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlLmFjdGl2ZSA9ICFyZXMuaXNDb21tb25Vc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWwj+a4uOaIj+iuvuS4uuW4uOeUqOWksei0peWbnuiwgzpcIixKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsI/muLjmiI/orr7kuLrluLjnlKjlm57osIM6XCIsSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy/mo4Dmn6XlsI/muLjmiI/lv6vmjbfmlrnlvI/mmK/lkKblt7Lmt7vliqDliLDmiYvmnLrmoYzpnaLkuIrvvIzku4UgQW5kcm9pZCDmlK/mjIFcclxuICAgICAgICAgICAgbGV0IGRlc2t0b3AgPSB0aGlzLmRlc2t0b3BCdG47XHJcbiAgICAgICAgICAgIGtzLmNoZWNrU2hvcnRjdXQoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+agueaNrnJlcy5pbnN0YWxsZWQg5p2l5Yik5pat5piv5ZCm5re75Yqg5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKblt7Lmt7vliqDlv6vmjbfmlrnlvI9cIiwgcmVzLmluc3RhbGxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcC5hY3RpdmUgPSAhcmVzLmluc3RhbGxlZDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gLTEwMDA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pqC5LiN5pSv5oyB5qOA5p+l55So5oi35piv5ZCm5bey5re75Yqg5omL5py65qGM6Z2i6K+l5Yqf6IO9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5p+l5b+r5o235pa55byP5aSx6LSlXCIsIGVyci5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+azqOaEj++8muW/q+aNt+aWueW8j+WSjG1pbmkgYXBr55qE5pa55byP77yM55So5oi36KOF5LqG5ZOq56eN6YO9566X5oiQ5Yqf6LWwc3VjY2Vzc+Wbnuiwg+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S9huaYr+WmguaenOmDveayoeijheeahOaDheWGteS4i++8jOS4uuWFvOWuueS7peWJjeeJiOacrO+8jOS8muWFiOWIpOaWreW/q+aNt+aWueW8j++8jOWGjeWIpOaWrW1pbmkgYXBr55qE5pa55byP77yM6L+Z56eN5oOF5Ya15pyA5ZCO5Lya6LWw5YiwZmFpbOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aJgOS7peW9k2Vyci5tc2fkuLpcImFwayBpbmZvIGlzIGludmFsaWRcIueahOaDheWGteWHuueOsOaXtu+8jOS5n+WPr+S7peWcqOa4uOaIj+WGheWxleekuua3u+WKoOahjOmdoueahGljb27mj5DphpLnlKjmiLfjgIJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrdG9wQnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudXNlQnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25EZXNrdG9wQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy/ov5DooYzlnKjlv6vmiYvlubPlj7BcclxuICAgICAgICAgICAgZXlvdUNsaWVudEtzLmdldElucygpLmFkZFNob3J0Y3V0KHJlcyA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5re75Yqg5qGM6Z2i5b+r5o235pa55byP57uT5p6cOlwiLEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvblVzZUNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga3MgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8v6L+Q6KGM5Zyo5b+r5omL5bmz5Y+wXHJcbiAgICAgICAgICAgIGV5b3VDbGllbnRLcy5nZXRJbnMoKS5hZGRDb21tb25Vc2UocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7kuLrluLjnlKjnu5Pmnpw6XCIsSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZnJlc2hBZHNTcDpmdW5jdGlvbiAoc2VlZCkge1xyXG4gICAgICAgIGlmKHNlZWQgPT0gMSlcclxuICAgICAgICAgICAgdGhpcy5BZFNwID0gXCJhaXNoZW5cIjtcclxuICAgICAgICBlbHNlIGlmKHNlZWQgPT0gMilcclxuICAgICAgICAgICAgdGhpcy5BZFNwID0gXCJkdXNoZW5cIjtcclxuICAgICAgICBlbHNlIGlmKHNlZWQgPT0gMylcclxuICAgICAgICAgICAgdGhpcy5BZFNwID0gXCJjYWlzaGVuXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLkFkU3AgPSBcImd1c2hlblwiO1xyXG5cclxuICAgICAgICB0aGlzLldhdGNoQWRzQnRuLnNwcml0ZUZyYW1lID0gdGhpcy5CaWdBcEF0bGFzLmdldFNwcml0ZUZyYW1lKHRoaXMuQWRTcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Yid5aeL5YyW546w6YeRXHJcbiAgICBpbml0Q2FzaDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzZWVkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IudHV0b3JpYWxJbk1hcmtldCA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlZWQgPSAwLjk5OTtcclxuICAgICAgICB9XHJcbiAgICBcdFxyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG5cclxuICAgIFx0aWYoc2VlZCA8PSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKEl0ZW1UeXBlLkNhc2gsIDEpLndlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5nbG9iYWwuSW5pdEdldE1vbmV5SWQgPSAxO1xyXG4gICAgICAgICAgICBwYXJhbS50ZXh0ID0gY2MuTWdyLmdsb2JhbC5nZXRUcmFuc2xhdGlvbihcIkNhc2hfMVwiKTsgLy9jYy5kaXJlY3Rvci5Ob3RpY2VUZXh0LkNhc2hfMTtcclxuICAgIFx0XHRjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FzaCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuQ2FzaCwgMSkuY2FzaDtcclxuICAgICAgICB9XHJcbiAgICBcdGVsc2UgaWYoc2VlZCA8PSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKEl0ZW1UeXBlLkNhc2gsIDEpLndlaWdodCArIGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuQ2FzaCwgMikud2VpZ2h0KVxyXG5cdFx0e1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLkluaXRHZXRNb25leUlkID0gMjtcclxuICAgICAgICAgICAgcGFyYW0udGV4dCA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJDYXNoXzJcIik7Ly9jYy5kaXJlY3Rvci5Ob3RpY2VUZXh0LkNhc2hfMjtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKEl0ZW1UeXBlLkNhc2gsIDIpLmNhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgXHRlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLkluaXRHZXRNb25leUlkID0gMztcclxuICAgICAgICAgICAgdGhpcy5UaXBDYXNoU3Auc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcImJzcWpcIik7XHJcbiAgICAgICAgICAgIHBhcmFtLnRleHQgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiQ2FzaF8zXCIpOy8vY2MuZGlyZWN0b3IuTm90aWNlVGV4dC5DYXNoXzM7XHJcbiAgICBcdFx0Y2MuTWdyLlVzZXJEYXRhTWdyLkNhc2ggPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhQnlJdGVtVHlwZUFuZElkKEl0ZW1UeXBlLkNhc2gsIDMpLmNhc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLkNvbW1vblRpcC5hY3RpdmUgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi6YCa55So5o+Q56S65bey57uP5Zyo5bGV56S6XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLlNob3dQYW5lbChwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoICs9IGNjLk1nci5Vc2VyRGF0YU1nci5Jbml0TW9uZXlCb251czsvL+WKoOS4iuWIneWni+WKoOaIkFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leSA9IGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoO1xyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5IaWdoQXNzZXRzID0gY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5O1xyXG4gICAgfSxcclxuICAgIC8v5Yid5aeL5YyWVG9wIFVJIFxyXG4gICAgaW5pdFRvcFVJRGF0YTpmdW5jdGlvbiAoKSB7XHJcbiAgICBcdHRoaXMuaW5pdENhc2goKTtcclxuICAgIFx0dGhpcy5DYXNoTGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoKTtcclxuICAgIFx0dGhpcy5Bc3NldExibC5zdHJpbmcgPSBjYy5NZ3IuZ2xvYmFsLkZvcm1hdE51bShjYy5NZ3IuVXNlckRhdGFNZ3IuQXNzZXRzTW9uZXkpO1xyXG4gICAgXHR0aGlzLkN1ckFnZUxibC5zdHJpbmcgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlO1xyXG4gICAgICAgIHRoaXMuVG90YWxBZ2VMYmwuc3RyaW5nID0gY2MuTWdyLlVzZXJEYXRhTWdyLnJldGlyZUFnZTtcclxuICAgIFx0dGhpcy5IcExibC5zdHJpbmcgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludDtcclxuICAgIFx0dGhpcy5SZXB1dGF0aW9uTGJsLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5SZXB1dGF0aW9uO1xyXG4gICAgICAgIHZhciBsYXN0Q2FwID0gY2MuTWdyLlVzZXJEYXRhTWdyLldhcmVIb3VzZUFsbENhcGNpdHkgLSBjYy5NZ3IuVXNlckRhdGFNZ3IuV2FyZUhvdXNlQ2FwY2l0eTtcclxuICAgIFx0dGhpcy5DYXBjaXR5TGJsLnN0cmluZyA9IFwiKFwiK2xhc3RDYXAgK1wiL1wiK2NjLk1nci5Vc2VyRGF0YU1nci5XYXJlSG91c2VBbGxDYXBjaXR5K1wiKVwiO1xyXG4gICAgfSxcclxuICAgIC8v5Yid5aeL5YyW5biC5Zy6IGl0ZW1zXHJcbiAgICBJbml0TWFya2V0SXRlbXM6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2xlYXJTaG93R29vZHNMaXN0KCk7XHJcblxyXG4gICAgICAgIHZhciBEYXRhTGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFMaXN0QnlTZXgoY2MuTWdyLlVzZXJEYXRhTWdyLlNleCk7XHJcbiAgICAgICAgdmFyIHNob3dBcnIgPSB0aGlzLmdldEFycmF5QnlJdGVtcyhEYXRhTGlzdC5sZW5ndGgsIDUpO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBEYXRhTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IERhdGFMaXN0W2ldO1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gY2MuaW5zdGFudGlhdGUodGhpcy5NYXJrZXRJdGVtKTtcclxuICAgICAgICAgICAgb2JqLnBhcmVudCA9IHRoaXMuTWFya2V0UGFyZW50O1xyXG4gICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoXCJHb29kc0l0ZW1cIikuaW5pdChkYXRhKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IHNob3dBcnIubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gc2hvd0FycltqXSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsSW5NYXJrZXQgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gb2JqLmdldENvbXBvbmVudChcIkdvb2RzSXRlbVwiKS5yZWZyZXNoTG93UHJpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG9iai5nZXRDb21wb25lbnQoXCJHb29kc0l0ZW1cIikucmVmcmVzaFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkluc2VydEdvb2RzSWRUb0xpc3QoZGF0YS5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuTWFya2V0VGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTWFya2V0VGlwUGFuZWwuU2hvd1BhbmVsKHBhcmFtKTtcclxuXHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsSW5NYXJrZXQgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IDExOy8v5byA5aeL5byV5a+856ys5LiA5q2lXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5UdXRvcmlhbFBhbmVsLlNldENhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuQnV5VGlwLCBwYXJhbVswXSk7XHJcbiAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0ge307XHJcbiAgICAgICAgICAgICAgICBkdC5zdGVwID0gMTI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGR0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5TZXRDYWxsRnVuYyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLk1nci5nbG9iYWwudHV0b3JpYWxHb29kc0lkID0gc2VsZi5CdXlUaXAuQ2xpY2tCdXlCdG4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IDEzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGQzLnN0ZXAgPSAxMztcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGQzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLlJlZnJlc2hEYXRhVG9OZXh0WWVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlRvTmV4dFllYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPSAxNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQ0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ0LnN0ZXAgPSAxNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5UdXRvcmlhbFBhbmVsLlNob3dQYW5lbChkNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5TZXRDYWxsRnVuYyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlblNhbGVUaXAsIGNjLk1nci5Vc2VyRGF0YU1nci5nZXRHb29kc0RhdGFCeUlkKHBhcmFtWzBdLklkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQ1ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkNS5zdGVwID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGQ1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5TZXRDYWxsRnVuYyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuU2FsZVRpcC5DbGlja1NhbGVCdG4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbEluTWFya2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WQkeS4i+WIt+aWsOS4gOW5tFxyXG4gICAgUmVmcmVzaERhdGFUb05leHRZZWFyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPT0gMTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuW8leWvvOaXtumXtD09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hVc2VyQWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFR1dG9yaWFsSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5UaW1lUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlRpbWVQYW5lbC5QbGF5QW5pbWEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBZ2UoKTtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMuQ2hlY2tUdXRvcmlhbEhhcHBlbigpO1xyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hDb21wYW55SXRlbXMoKTtcclxuICAgICAgICBpZihjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9PSAxMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFR1dG9yaWFsSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoSXRlbXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuUmVmcmVzaE93bmVkSXRlbXNTdGF0ZSgpO1xyXG5cclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBc3NldHModHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/liqDmiJDlpZblirFcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuR2V0Qm9udXNSZXdhcmRFdmVyeVllYXIoKTtcclxuXHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLlJlZnJlc2hIZWFsdGhIcCgpO1xyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hVSVNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5DaGVja0V2ZW50SGFwcGVuKCk7XHJcbiAgICAgICAgKi9cclxuICAgIH0sXHJcblxyXG4gICAgVG9OZXh0WWVhcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubWFya2V0VGlwRGF0YSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoVXNlckFnZSgpO1xyXG4gICAgICAgIC8vY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLkNoZWNrVHV0b3JpYWxIYXBwZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoQ29tcGFueUl0ZW1zKCk7XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPT0gMTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLy8vY2MubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095byV5a+85pe26Ze0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hUdXRvcmlhbEl0ZW1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPT0gMjIgfHwgY2MuTWdyLlVzZXJEYXRhTWdyLkFnZSA9PSAyNCB8fCBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlID09IDI1XHJcbiAgICAgICAgICAgICAgICB8fCBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlID09IDI3IHx8IGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPT0gMjggfHwgY2MuTWdyLlVzZXJEYXRhTWdyLkFnZSA9PSAzMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWZyZXNoSXRlbXNGb3JTcGVjaWFsQWdlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVmcmVzaEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hPd25lZEl0ZW1zU3RhdGUoKTtcclxuICAgICAgICAvL+WKoOaIkOWlluWKsVxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5HZXRCb251c1Jld2FyZEV2ZXJ5WWVhcigpO1xyXG5cclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuUmVmcmVzaFVzZXJBc3NldHModHJ1ZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5SZWZyZXNoSGVhbHRoSHAoKTtcclxuXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoVUlTaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuQ2hlY2tFdmVudEhhcHBlbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBDaGVja1R1dG9yaWFsSGFwcGVuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkFnZSA9PSAyNSAmJiBjYy5NZ3IuVXNlckRhdGFNZ3IudHV0b3JpYWxJbkRhdGUgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IFR1dG9yaWFsU3RlcC5NYXRlRGF0ZV8xO1xyXG4gICAgICAgICAgICB2YXIgZHQgPSB7fTtcclxuICAgICAgICAgICAgZHQuc3RlcCA9IFR1dG9yaWFsU3RlcC5NYXRlRGF0ZV8xO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGR0KTtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ2hvb3NlT3Blbk1hdGVQYW5lbCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPSBUdXRvcmlhbFN0ZXAuTWF0ZURhdGVfMjtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZHQuc3RlcCA9IFR1dG9yaWFsU3RlcC5NYXRlRGF0ZV8yO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5UdXRvcmlhbFBhbmVsLlNob3dQYW5lbChkdCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbEluRGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPT0gMzAgJiYgY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsSW5CdXMgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IFR1dG9yaWFsU3RlcC5CdXNpbmVzc18xO1xyXG4gICAgICAgICAgICB2YXIgZHQgPSB7fTtcclxuICAgICAgICAgICAgZHQuc3RlcCA9IFR1dG9yaWFsU3RlcC5CdXNpbmVzc18xO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGR0KTtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ2hvb3NlT3BlbkJ1c2lzbmVzcygpO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPSBUdXRvcmlhbFN0ZXAuQnVzaW5lc3NfMjtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZHQuc3RlcCA9IFR1dG9yaWFsU3RlcC5CdXNpbmVzc18yO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5UdXRvcmlhbFBhbmVsLlNob3dQYW5lbChkdCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnR1dG9yaWFsU3RlcCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbEluQnVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5oYXNDb21wYW55ID09IHRydWUgJiYgY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsU3RvY2tCb251cyA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5nbG9iYWwudHV0b3JpYWxTdGVwID0gVHV0b3JpYWxTdGVwLlN0b2NrQm9udXNfMTtcclxuICAgICAgICAgICAgdmFyIGR0ID0ge307XHJcbiAgICAgICAgICAgIGR0LnN0ZXAgPSBUdXRvcmlhbFN0ZXAuU3RvY2tCb251c18xO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlR1dG9yaWFsUGFuZWwuU2hvd1BhbmVsKGR0KTtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwuU2V0Q2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNjLk1nci5nbG9iYWwudHV0b3JpYWxTdGVwID0gLTE7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlR1dG9yaWFsUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbFN0b2NrQm9udXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFN0YXJ0TWF0ZUxvdmVUdXRvcmlhbDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbE1hdGVQb2ludCA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5nbG9iYWwudHV0b3JpYWxTdGVwID0gVHV0b3JpYWxTdGVwLkRhdGVUb01hcnJ5XzE7XHJcbiAgICAgICAgICAgIHZhciBkdCA9IHt9O1xyXG4gICAgICAgICAgICBkdC5zdGVwID0gVHV0b3JpYWxTdGVwLkRhdGVUb01hcnJ5XzE7XHJcbiAgICAgICAgICAgIHRoaXMuVHV0b3JpYWxQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuVHV0b3JpYWxQYW5lbC5TaG93UGFuZWwoZHQpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5TZXRDYWxsRnVuYyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgPSAtMTtcclxuICAgICAgICAgICAgICAgIHNlbGYuVHV0b3JpYWxQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsTWF0ZVBvaW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDaGVja0V2ZW50SGFwcGVuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPD0gMjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjYy5NZ3IuVXNlckRhdGFNZ3IuRXZlbnREYXRhSWRMaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCLmspLmnInkuovku7ZJZCDkuoYgIOebtOaOpei/lOWbnlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPT0gY2MuTWdyLmdsb2JhbC5MYXN0RXZlbnRBZ2UpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICB2YXIgZUlkID0gY2MuTWdyLlVzZXJEYXRhTWdyLkdldEV2ZW50RGF0YUFuZFNwbGljZUlkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuRXZlbnRQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuRXZlbnRQYW5lbC5TaG93UGFuZWwoZUlkKTtcclxuICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC5MYXN0RXZlbnRBZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VlZCA9IGNjLk1nci5nbG9iYWwuU3Bhd25TZWVkQmV0d2VlblR3b051bSgyLDMpO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgPSBcIisgIGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UrXCIgICBzZWVkID0gXCIgKyBzZWVkICsgXCIgIOS6i+S7ti0tLS0tLS0tLS0tLS0tLS0tLSBMYXN0RXZlbnRBZ2UgXCIgKyBjYy5NZ3IuZ2xvYmFsLkxhc3RFdmVudEFnZSk7XHJcbiAgICAgICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5BZ2UgLSBzZWVkID49IGNjLk1nci5nbG9iYWwuTGFzdEV2ZW50QWdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZUlkID0gY2MuTWdyLlVzZXJEYXRhTWdyLkdldEV2ZW50RGF0YUFuZFNwbGljZUlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50UGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudFBhbmVsLlNob3dQYW5lbChlSWQpO1xyXG4gICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC5MYXN0RXZlbnRBZ2UgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v5Yi35pawVUlcclxuICAgIFJlZnJlc2hVSVNob3c6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLlJlcHV0YXRpb25MYmwuc3RyaW5nID0gY2MuTWdyLlVzZXJEYXRhTWdyLlJlcHV0YXRpb247XHJcbiAgICAgICAgdGhpcy5DYXNoTGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKGNjLk1nci5Vc2VyRGF0YU1nci5DYXNoKTtcclxuICAgICAgICB0aGlzLkFzc2V0TGJsLnN0cmluZyA9IGNjLk1nci5nbG9iYWwuRm9ybWF0TnVtKGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leSk7XHJcbiAgICAgICAgdGhpcy5DdXJBZ2VMYmwuc3RyaW5nID0gY2MuTWdyLlVzZXJEYXRhTWdyLkFnZTtcclxuICAgICAgICB0aGlzLlRvdGFsQWdlTGJsLnN0cmluZyA9IGNjLk1nci5Vc2VyRGF0YU1nci5yZXRpcmVBZ2U7XHJcbiAgICAgICAgdGhpcy5IcExibC5zdHJpbmcgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludDtcclxuICAgICAgICB0aGlzLlJlZnJlc2hIcEljb25TcCgpO1xyXG4gICAgICAgIHZhciBsYXN0Q2FwID0gY2MuTWdyLlVzZXJEYXRhTWdyLldhcmVIb3VzZUFsbENhcGNpdHkgLSBjYy5NZ3IuVXNlckRhdGFNZ3IuV2FyZUhvdXNlQ2FwY2l0eTtcclxuICAgICAgICB0aGlzLkNhcGNpdHlMYmwuc3RyaW5nID0gXCIoXCIrbGFzdENhcCArXCIvXCIrY2MuTWdyLlVzZXJEYXRhTWdyLldhcmVIb3VzZUFsbENhcGNpdHkrXCIpXCI7XHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5IDwgMTAwMDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5UaXBDYXNoU3Auc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcImJzcWpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5ID4gMTAwMDAwICYmY2MuTWdyLlVzZXJEYXRhTWdyLkFzc2V0c01vbmV5IDwgMTAwMDAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwQ2FzaFNwLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJzY3h4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leSA+IDEwMDAwMDAgJiZjYy5NZ3IuVXNlckRhdGFNZ3IuQXNzZXRzTW9uZXkgPCAxMDAwMDAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwQ2FzaFNwLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJzeWx4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5Bc3NldHNNb25leSA+IDEwMDAwMDAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVGlwQ2FzaFNwLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJiZHpjXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgUmVmcmVzaEhwSWNvblNwOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2MuTWdyLlVzZXJEYXRhTWdyLkhwUG9pbnQgPj0gY2MuTWdyLmdsb2JhbC5IcFN0YXRlQSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSHBJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJzdGF0ZV8xXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50ID49IGNjLk1nci5nbG9iYWwuSHBTdGF0ZUIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkhwSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTWFpbkF0bGFzLmdldFNwcml0ZUZyYW1lKFwic3RhdGVfMlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjYy5NZ3IuVXNlckRhdGFNZ3IuSHBQb2ludCA8PSBjYy5NZ3IuZ2xvYmFsLkhwU3RhdGVDKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5IcEljb24uc3ByaXRlRnJhbWUgPSB0aGlzLk1haW5BdGxhcy5nZXRTcHJpdGVGcmFtZShcInN0YXRlXzNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+e6puS8muWujOaIkOaVsOaNruWIt+aWsOi/lOWbnlxyXG4gICAgUmVmcmVzaE1hdGVJdGVtVUk6ZnVuY3Rpb24oSWQpe1xyXG4gICAgICAgIHRoaXMuTWF0ZVBhbmVsLlJlZnJlc2hQYW5lbChJZClcclxuICAgIH0sXHJcblxyXG4gICAgLy/pmo/nnYDlubTku73liLfmlrAg5Yi35paw5bGV56S655qE54mp5ZOBIOWPquWIt+WHuumrmOS7t1xyXG4gICAgUmVmcmVzaFR1dG9yaWFsSXRlbXM6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLk1hcmtldFBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgcGFyYW0gPSBbXTsvL+aVsOaNrlxyXG4gICAgICAgIHRoaXMubWFya2V0VGlwRGF0YSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IFxyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJHb29kc0l0ZW1cIik7XHJcbiAgICAgICAgICAgIGlmKHNjICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmFjdGl2ZSA9PSB0cnVlICYmIHNjLklkID09IGNjLk1nci5nbG9iYWwudHV0b3JpYWxHb29kc0lkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoVXBQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoUHJpY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXJrZXRUaXBEYXRhID0gcGFyYW07XHJcbiAgICB9LFxyXG5cclxuICAgIENoZWNrSGFzRWxlbWVudDpmdW5jdGlvbihvdXRhcnIsIGluZGV4KXtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PSBvdXRhcnJbal0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/pmo/nnYDlubTku73liLfmlrAg5Yi35paw5bGV56S655qE54mp5ZOBICDnibnliKvlubTku71cclxuICAgIFJlZnJlc2hJdGVtc0ZvclNwZWNpYWxBZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2xlYXJTaG93R29vZHNMaXN0KCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5NYXJrZXRQYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIG91dGFyciA9IFtdO1xyXG4gICAgICAgIHZhciBzdGF0ZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgdmFyIHNjID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiR29vZHNJdGVtXCIpO1xyXG4gICAgICAgICAgIGlmKHNjICE9IG51bGwpXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhcyA9IGNjLk1nci5Vc2VyRGF0YU1nci5KdWRlR29vZHNPd25lZChzYy5JZCk7XHJcbiAgICAgICAgICAgICAgICBpZihoYXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhci5JZCA9IHNjLklkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhci5TdGF0ZSA9IHNjLlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlTGlzdC5wdXNoKHBhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0YXJyLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLkNoZWNrSGFzRWxlbWVudChvdXRhcnIsIGkpID09IGZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzaG93QXJyID0gdGhpcy5nZXRBcnJheUl0ZW1zKGxpc3QsIDUtb3V0YXJyLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IG91dGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBzaG93QXJyLnB1c2gob3V0YXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhcmFtID0gW107Ly/mlbDmja5cclxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgXHJcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJHb29kc0l0ZW1cIik7XHJcbiAgICAgICAgICAgIGlmKHNjICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vc2MucmVmcmVzaFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gc2hvd0Fyci5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPT0gc2hvd0FycltqXSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2MuSWQgPT0gMSB8fCBzYy5JZCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gc2MucmVmcmVzaE1pZFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3V0ZGF0YSA9IHRoaXMuSnVkZUdvb2RzSGFzKHN0YXRlTGlzdCwgc2MuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3V0ZGF0YS5oYXMgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvdXRkYXRhLlN0YXRlID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gc2MucmVmcmVzaE1pZFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG91dGRhdGEuU3RhdGUgPj0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoVXBQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gc2MucmVmcmVzaFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkluc2VydEdvb2RzSWRUb0xpc3Qoc2MuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgIT0gLTEpLy8oY2MuTWdyLlVzZXJEYXRhTWdyLkFnZSA9PSAyNSAmJiBjYy5NZ3IuVXNlckRhdGFNZ3IudHV0b3JpYWxJbkRhdGUgPT0gZmFsc2UpIHx8IChjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlID09IDMwICYmIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbEluQnVzID09IGZhbHNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5byV5a+86Zi25q61XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFya2V0VGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk1hcmtldFRpcFBhbmVsLlNob3dQYW5lbChwYXJhbSk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH0sXHJcblxyXG4gICAgSnVkZUdvb2RzSGFzOmZ1bmN0aW9uKExpc3QsIElkKXtcclxuICAgICAgICB2YXIgb3V0ID0ge307XHJcbiAgICAgICAgb3V0LlN0YXRlID0gMDsgXHJcbiAgICAgICAgb3V0LmhhcyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihMaXN0W2ldLklkID09IElkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdXQuU3RhdGUgPSBMaXN0W2ldLlN0YXRlOyBcclxuICAgICAgICAgICAgICAgIG91dC5oYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+maj+edgOW5tOS7veWIt+aWsCDliLfmlrDlsZXnpLrnmoTnianlk4FcclxuICAgIFJlZnJlc2hJdGVtczpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5DbGVhclNob3dHb29kc0xpc3QoKTtcclxuICAgICAgICAvL3ZhciBEYXRhTGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFMaXN0QnlJdGVtVHlwZShJdGVtVHlwZS5Hb29kcyk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5NYXJrZXRQYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIG91dGFyciA9W107XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC5Hb29kc0ZvcmVJZCAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiR29vZHNJdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYy5NZ3IuZ2xvYmFsLkdvb2RzRm9yZUlkID09IHNjLklkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0YXJyLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLkNoZWNrSGFzRWxlbWVudChvdXRhcnIsIGkpID09IGZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNob3dBcnIgPSB0aGlzLmdldEFycmF5SXRlbXMobGlzdCwgNS1vdXRhcnIubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gb3V0YXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHNob3dBcnIucHVzaChvdXRhcnJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGFyYW0gPSBbXTsvL+aVsOaNrlxyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgeyBcclxuICAgICAgICAgICAgY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIkdvb2RzSXRlbVwiKTtcclxuICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHNob3dBcnIubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpID09IHNob3dBcnJbal0pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNjLklkID09IGNjLk1nci5nbG9iYWwuR29vZHNGb3JlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYXQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmF0IDwgMC43KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNjLlN0YXRlID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoTWlkUHJpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHNjLlN0YXRlID09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoVXBQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLmdsb2JhbC5Hb29kc0ZvcmVJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaiA9PSAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzYy5yZWZyZXNoTWlkUHJpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gc2MucmVmcmVzaFByaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLkluc2VydEdvb2RzSWRUb0xpc3Qoc2MuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2MuTWdyLmdsb2JhbC50dXRvcmlhbFN0ZXAgIT0gLTEpLy8oY2MuTWdyLlVzZXJEYXRhTWdyLkFnZSA9PSAyNSAmJiBjYy5NZ3IuVXNlckRhdGFNZ3IudHV0b3JpYWxJbkRhdGUgPT0gZmFsc2UpIHx8IChjYy5NZ3IuVXNlckRhdGFNZ3IuQWdlID09IDMwICYmIGNjLk1nci5Vc2VyRGF0YU1nci50dXRvcmlhbEluQnVzID09IGZhbHNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5byV5a+86Zi25q61XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFya2V0VGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk1hcmtldFRpcFBhbmVsLlNob3dQYW5lbChwYXJhbSk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH0sXHJcbiAgICAvLzAtYXJyTnVtIOS5i+mXtOmaj+acuuaKveWPliBudW0g5Liq5pWw5Ye65p2lXHJcbiAgICBnZXRBcnJheUJ5SXRlbXM6ZnVuY3Rpb24oYXJyTnVtLCBudW0pe1xyXG4gICAgICAgIC8v5paw5bu65LiA5Liq5pWw57uELOWwhuS8oOWFpeeahOaVsOe7hOWkjeWItui/h+adpSznlKjkuo7ov5Dnrpcs6ICM5LiN6KaB55u05o6l5pON5L2c5Lyg5YWl55qE5pWw57uEO1xyXG4gICAgICAgIHZhciB0ZW1wX2FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPTA7IGluZGV4IDwgYXJyTnVtIDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0ZW1wX2FycmF5LnB1c2goaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPluWHuueahOaVsOWAvOmhuSzkv53lrZjlnKjmraTmlbDnu4RcclxuICAgICAgICB2YXIgcmV0dXJuX2FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8bnVtOyBpKyspIHtcclxuICAgICAgICAgICAgLy/liKTmlq3lpoLmnpzmlbDnu4Tov5jmnInlj6/ku6Xlj5blh7rnmoTlhYPntKAs5Lul6Ziy5LiL5qCH6LaK55WMXHJcbiAgICAgICAgICAgIGlmICh0ZW1wX2FycmF5Lmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WcqOaVsOe7hOS4reS6p+eUn+S4gOS4qumaj+acuue0ouW8lVxyXG4gICAgICAgICAgICAgICAgdmFyIGFyckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRlbXBfYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8v5bCG5q2k6ZqP5py657Si5byV55qE5a+55bqU55qE5pWw57uE5YWD57Sg5YC85aSN5Yi25Ye65p2lXHJcbiAgICAgICAgICAgICAgICByZXR1cm5fYXJyYXlbaV0gPSB0ZW1wX2FycmF5W2FyckluZGV4XTtcclxuICAgICAgICAgICAgICAgIC8vLy9jYy5sb2coXCIrKysrKysrKysrKysrKysrKysrKysrKysrKytcIiArIHJldHVybl9hcnJheVtpXSk7XHJcbiAgICAgICAgICAgICAgICAvL+eEtuWQjuWIoOaOieatpOe0ouW8leeahOaVsOe7hOWFg+e0oCzov5nml7blgJl0ZW1wX2FycmF55Y+Y5Li65paw55qE5pWw57uEXHJcbiAgICAgICAgICAgICAgICB0ZW1wX2FycmF5LnNwbGljZShhcnJJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aVsOe7hOS4reaVsOaNrumhueWPluWujOWQjizpgIDlh7rlvqrnjq8s5q+U5aaC5pWw57uE5pys5p2l5Y+q5pyJMTDpobks5L2G6KaB5rGC5Y+W5Ye6MjDpobkuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuX2FycmF5O1xyXG4gICAgfSxcclxuICAgIC8v5LuO5pWw57uEYXJy5Lit6ZqP5py66YCJ5Y+WIG51bSDkuKrmlbBcclxuICAgIGdldEFycmF5SXRlbXM6ZnVuY3Rpb24oYXJyLCBudW0pe1xyXG4gICAgICAgIC8v5paw5bu65LiA5Liq5pWw57uELOWwhuS8oOWFpeeahOaVsOe7hOWkjeWItui/h+adpSznlKjkuo7ov5Dnrpcs6ICM5LiN6KaB55u05o6l5pON5L2c5Lyg5YWl55qE5pWw57uEO1xyXG4gICAgICAgIHZhciB0ZW1wX2FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPTA7IGluZGV4IDwgYXJyLmxlbmd0aCA7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGVtcF9hcnJheS5wdXNoKGFycltpbmRleF0pO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuWhnui/m+WOu+eahOaVsOWAvCA9IFwiICsgYXJyW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+W5Ye655qE5pWw5YC86aG5LOS/neWtmOWcqOatpOaVsOe7hFxyXG4gICAgICAgIHZhciByZXR1cm5fYXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTxudW07IGkrKykge1xyXG4gICAgICAgICAgICAvL+WIpOaWreWmguaenOaVsOe7hOi/mOacieWPr+S7peWPluWHuueahOWFg+e0oCzku6XpmLLkuIvmoIfotornlYxcclxuICAgICAgICAgICAgaWYgKHRlbXBfYXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lnKjmlbDnu4TkuK3kuqfnlJ/kuIDkuKrpmo/mnLrntKLlvJVcclxuICAgICAgICAgICAgICAgIHZhciBhcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0ZW1wX2FycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL+WwhuatpOmaj+acuue0ouW8leeahOWvueW6lOeahOaVsOe7hOWFg+e0oOWAvOWkjeWItuWHuuadpVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuX2FycmF5W2ldID0gdGVtcF9hcnJheVthcnJJbmRleF07XHJcbiAgICAgICAgICAgICAgICAvL+eEtuWQjuWIoOaOieatpOe0ouW8leeahOaVsOe7hOWFg+e0oCzov5nml7blgJl0ZW1wX2FycmF55Y+Y5Li65paw55qE5pWw57uEXHJcbiAgICAgICAgICAgICAgICB0ZW1wX2FycmF5LnNwbGljZShhcnJJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aVsOe7hOS4reaVsOaNrumhueWPluWujOWQjizpgIDlh7rlvqrnjq8s5q+U5aaC5pWw57uE5pys5p2l5Y+q5pyJMTDpobks5L2G6KaB5rGC5Y+W5Ye6MjDpobkuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuX2FycmF5O1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIneWni+WMliDlt7Lnu4/mi6XmnInnianlk4FcclxuICAgIEluaXRPd25lZEl0ZW1zOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIERhdGFMaXN0ID0gY2MuTWdyLlVzZXJEYXRhTWdyLmdldE93bkRhdGFMaXN0QnlUeXBlKEl0ZW1UeXBlLkdvb2RzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gRGF0YUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBEYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuT3duSXRlbSk7XHJcbiAgICAgICAgICAgIG9iai5wYXJlbnQgPSB0aGlzLk93blBhcmVudDtcclxuICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihkYXRhLm93bk51bSA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoXCJPd25JdGVtXCIpLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6LSt5Lmw5ZKM5Ye65ZSu5ZCO5Yi35paw5bey57uP5pyJ55qE54mp5ZOBXHJcbiAgICBSZWZyZXNoT3duZWRJdGVtczpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLk93blBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIHNjID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiT3duSXRlbVwiKTtcclxuICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc2MuSWQgPT0gZGF0YS5JZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYy5yZWZyZXNoRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm93bk51bSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBSZWZyZXNoT3duZWRJdGVtc1N0YXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5Pd25QYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIk93bkl0ZW1cIik7XHJcbiAgICAgICAgICAgIGlmKHNjICE9IG51bGwgJiYgY2hpbGRyZW5baV0uYWN0aXZlID09IHRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjLlJlZnJlc2hTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy/liJ3lp4vljJbogqHluILmlbDmja5cclxuICAgIEluaXRDb21wYW55SXRlbXM6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgRGF0YUxpc3QgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0T3duRGF0YUxpc3RCeVR5cGUoSXRlbVR5cGUuQ29tcGFueSlcclxuICAgICAgICBmb3IgKHZhciBpID0gRGF0YUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBEYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ29tcGFueUl0ZW0pO1xyXG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5Db21wYW55UGFyZW50O1xyXG4gICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChcIkNvbXBhbnlJdGVtXCIpLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIt+aWsOiCoeW4guaVsOaNrlxyXG4gICAgUmVmcmVzaENvbXBhbnlJdGVtczpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuQ29tcGFueVBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgY2FuUHJvZml0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIkNvbXBhbnlJdGVtXCIpO1xyXG4gICAgICAgICAgICBpZihzYyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzYy5yZWZyZXNoUHJpY2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKHNjLmNhbkdldFByb2ZpdCA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhblByb2ZpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2FuUHJvZml0ID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5NZ3IuVXNlckRhdGFNZ3IuQ2FuR2V0U3RvY2tQcm9maXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnNob3dTdG9ja1Byb2ZpdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLk1nci5Vc2VyRGF0YU1nci5DYW5HZXRTdG9ja1Byb2ZpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5NZ3IuZ2xvYmFsLnNob3dTdG9ja1Byb2ZpdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WIt+aWsHVp5pi+56S6XHJcbiAgICBSZWZyZXNoQ29tcGFueUl0ZW1zQWZ0ZXJCdXk6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5Db21wYW55UGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgc2MgPSBjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJDb21wYW55SXRlbVwiKTtcclxuICAgICAgICAgICAgaWYoc2MgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc2MuSWQgPT0gZGF0YS5JZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYy5SZWZyZXNoVUlTaG93KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIt+aWsHVp5pi+56S6XHJcbiAgICBSZWZyZXNoQ29tcGFueUl0ZW1zRnJvbUV2ZW50OmZ1bmN0aW9uKElkKXtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLkNvbXBhbnlQYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIGRhdGEgPSBjYy5NZ3IuVXNlckRhdGFNZ3IuZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZChJdGVtVHlwZS5Db21wYW55ICxJZClcclxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIHNjID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiQ29tcGFueUl0ZW1cIik7XHJcbiAgICAgICAgICAgIGlmKHNjICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHNjLklkID09IGRhdGEuSWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2MuUmVmcmVzaFVJU2hvdyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgUmVmcmVzaENvbXBhbnlJdGVtc0FmdGVyRGlzdm9yY2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLkNvbXBhbnlQYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzYyA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcIkNvbXBhbnlJdGVtXCIpO1xyXG4gICAgICAgICAgICBpZihzYyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzYy5SZWZyZXNoVUlTaG93QWZ0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ2hvb3NlT3Blbk1hcmtldDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEFkc1NwKDMpO1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5NYXJrZXRQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTWF0ZVBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5FbmpveVRpcFBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CdXNpbmVzc1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1c3NpbmVzcy5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1hcmtldC5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRW5qb3kuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNYXRlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBDaG9vc2VPcGVuQnVzaXNuZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsSW5CdXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEFkc1NwKDQpO1xyXG4gICAgICAgIGNjLk1nci5BdWRpb01nci5wbGF5U0ZYKFwiY2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5NYXJrZXRQYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk1hdGVQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRW5qb3lUaXBQYW5lbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQnVzaW5lc3NQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1c3NpbmVzcy5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWFya2V0LmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRW5qb3kuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNYXRlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBDaG9vc2VPcGVuTWF0ZVBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLlVzZXJEYXRhTWdyLnR1dG9yaWFsSW5EYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk1hdGVOZXdUaXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQWRzU3AoMSk7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLk1hcmtldFBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTWF0ZVBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkVuam95VGlwUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJ1c2luZXNzUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5NYXRlUGFuZWwuU2hvd1BhbmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlQnVzc2luZXNzLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWFya2V0LmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRW5qb3kuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNYXRlLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgQ2hvb3NlT3BlbkVuam95OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQWRzU3AoMik7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLk1hcmtldFBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTWF0ZVBhbmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5FbmpveVRpcFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkJ1c2luZXNzUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5FbmpveVRpcFBhbmVsLlNob3dQYW5lbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1c3NpbmVzcy5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1hcmtldC5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUVuam95LmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNYXRlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBDaG9vc2VPcGVuQmVsb25nOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLk93bmVkVGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuT3duZWRUaXBQYW5lbC5TaG93UGFuZWwoKTtcclxuICAgIH0sXHJcblxyXG4gICAgQ2hvb3NlT3BlblRyZWF0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7fTtcclxuICAgICAgICBwYXJhbS5mb3JXaGF0ID0gXCJUcmVhdFwiO1xyXG4gICAgICAgIHBhcmFtLnRleHQgPSBcIua2iOiAl+mHkemSseWbnuWkjeWBpeW6t1wiO1xyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50ID09IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmFtLmZvcldoYXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBwYXJhbS50ZXh0ID0gXCLlgaXlurfnirblhrXoia/lpb3vvIzml6DpnIDmsrvnlpdcIjtcclxuICAgICAgICAgICAgdGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5TaG93UGFuZWwocGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRyZWF0UGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlRyZWF0UGFuZWwuU2hvd1BhbmVsKCk7XHJcbiAgICAgICAgICAgIC8vdmFyIG5lZWRNb25leSA9IE1hdGguZmxvb3IoMjAwMCogTWF0aC5wb3coMS4xOCwgY2MuTWdyLlVzZXJEYXRhTWdyLkFnZS0yMCkgKigxLWNjLk1nci5Vc2VyRGF0YU1nci5IcFBvaW50LzEwMCkpO1xyXG4gICAgICAgICAgICAvL3BhcmFtLm5lZWRNb25leSA9IG5lZWRNb25leTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZih0aGlzLkNvbW1vblRpcC5hY3RpdmUgPT0gdHJ1ZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICAvL2NjLmxvZyhcIumAmueUqOaPkOekuuW3sue7j+WcqOWxleekulwiKTtcclxuICAgICAgICAvLyAgICByZXR1cm47XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy90aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLkNvbW1vblRpcC5TaG93UGFuZWwocGFyYW0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBDaG9vc2VPcGVuUmV0aXJlUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHBhcmFtLmZvcldoYXQgPSBcIlJldGlyZVwiO1xyXG4gICAgICAgIHBhcmFtLnRleHQgPSBcIuS9oOehruWumuimgee7k+adn+S9oOeahOWli+aWl+WPsu+8n++8n1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuQ29tbW9uVGlwLmFjdGl2ZSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCLpgJrnlKjmj5DnpLrlt7Lnu4/lnKjlsZXnpLpcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5Db21tb25UaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ29tbW9uVGlwLlNob3dQYW5lbChwYXJhbSk7XHJcbiAgICB9LFxyXG5cclxuICAgIENob29zZU9wZW5SYW5rUGFuZWw6ZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLy8gdG9kbyDmmoLml7blhYjliqDkuIrlip/og73mnKrlvIDmlL5cclxuICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHt0ZXh0OiAn5Yqf6IO95pqC5pyq5byA5pS+LCDmlazor7fmnJ/lvoUnfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG5cclxuICAgICAgICBpZighY2MuTWdyLlBsYXRmb3JtQ29udHJvbGxlci5Jc0xvZ2luU3luYygpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0ge307XHJcbiAgICAgICAgICAgIHBhcmFtLnRleHQgPSBcIuivt+WFiOeZu+mZhuaJi+acuueZvuW6plwiO1xyXG4gICAgICAgICAgICBwYXJhbS5mb3JXaGF0ID0gXCJMb2dpblwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbW1vblRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLlNob3dQYW5lbChwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc0t1YWlTaG91ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy/ov5DooYzlnKjlv6vmiYvlubPlj7BcclxuICAgICAgICAgICAgaXNLdWFpU2hvdSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiAhaXNLdWFpU2hvdSlcclxuICAgICAgICAgICAgdGhpcy53eFN1YkNvbnRleHRWaWV3LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5CQUlEVV9HQU1FKVxyXG4gICAgICAgICAgICB0aGlzLlN3YW5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy5NZ3IuUGxhdGZvcm1Db250cm9sbGVyLnNob3dTdWJDb250ZW50VmlldygpO1xyXG4gICAgICAgIGNjLk1nci5QbGF0Zm9ybUNvbnRyb2xsZXIuU2VuZE1lc3NhZ2VUb1N1YlZpZXcoXCJSYW5rT3BlblwiKTtcclxuICAgICAgICBpZigoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIWlzS3VhaVNob3UpIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJBSURVX0dBTUUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZVJhbmtWaWV3OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yYW5rUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5NZ3IuUGxhdGZvcm1Db250cm9sbGVyLmhpZGVTdWJDb250ZW50VmlldygpO1xyXG4gICAgICAgIGNjLk1nci5QbGF0Zm9ybUNvbnRyb2xsZXIuU2VuZE1lc3NhZ2VUb1N1YlZpZXcoXCJSYW5rQ2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy53eFN1YkNvbnRleHRWaWV3LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuU3dhblN1YkNvbnRleHRWaWV3LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBPcGVuQWRkQ2FwYWNpdHk6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIGlmKGNjLk1nci5Vc2VyRGF0YU1nci5XYXJlSG91c2VBbGxDYXBjaXR5ID09IDIwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgICAgICBwYXJhbS5mb3JXaGF0ID0gXCJcIjtcclxuICAgICAgICAgICAgcGFyYW0udGV4dCA9IFwi5LuT5YKo5a656YeP6L6+5Yiw5LiK6ZmQXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tbW9uVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Db21tb25UaXAuU2hvd1BhbmVsKHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkFkZENhcFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkFkZENhcFBhbmVsLlNob3dQYW5lbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBPcGVuTWFya2V0VGlwUGFuZWw6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5NZ3IuQXVkaW9NZ3IucGxheVNGWChcImNsaWNrXCIpO1xyXG4gICAgICAgIHRoaXMuTWFya2V0VGlwUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMubWFya2V0VGlwRGF0YSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5NYXJrZXRUaXBQYW5lbC5TaG93UGFuZWwodGhpcy5tYXJrZXRUaXBEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBPcGVuV2F0Y2hBZFBhbmVsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuTWdyLkF1ZGlvTWdyLnBsYXlTRlgoXCJjbGlja1wiKTtcclxuICAgICAgICB0aGlzLldhdGNoQWRzUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHt9O1xyXG4gICAgICAgIHBhcmFtLlNwID0gdGhpcy5BZFNwO1xyXG4gICAgICAgIHRoaXMuV2F0Y2hBZHNQYW5lbC5TaG93UGFuZWwocGFyYW0pO1xyXG4gICAgfSxcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVNjZW5lO1xyXG4iXX0=