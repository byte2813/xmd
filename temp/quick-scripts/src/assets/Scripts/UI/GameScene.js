"use strict";
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