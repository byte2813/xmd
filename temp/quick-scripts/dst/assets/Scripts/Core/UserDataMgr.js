
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Core/UserDataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce713zmIxdFJqdsbJKrBLY2', 'UserDataMgr');
// Scripts/Core/UserDataMgr.js

"use strict";

var _cc$Class;
var ItemType = require("ItemType");
var RewardType = require("RewardType");
var MateBonusType = require("MateBonusType");
var SkillType = require("SkillType");
var MateUnLockType = require("MateUnLockType");
var MateGetType = require("MateGetType");
var UserState = require("UserState");
var AchieveCondData = require("AchieveCondData");
var AchieveCond = require("AchieveCond");

//以下的数据要做永久保存
var SkillStruct = require("SkillStruct");
var AchieveStruct = require("AchieveStruct");
var RecordStruct = require("RecordStruct");
//下面的数值是不会永久保存的  指只会当局游戏保存
var GoodsStruct = require("GoodsStruct");
var CarStruct = require("CarStruct");
var HouseStruct = require("HouseStruct");
var CompanyStruct = require("CompanyStruct");
var MateStruct = require("MateStruct");
var eyouClientTiktok = require("EyouClientTiktok");
var eyouClientKs = require("EyouClientKs");
var eyouClient = require("eyouClient");
var httpUtil = require("httpUtil");
var crypto = require("crypto");

//数据操作结构
var UserDataMgr = cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {
    //本地保存数据
    userId: "",
    tutorialInBus: false,
    tutorialInDate: false,
    tutorialInMarket: false,
    tutorialStockBonus: false,
    tutorialMatePoint: false,
    VideoLastTime: "",
    //每天看视频时间记录
    VideoAdsTimes: cc.Integer,
    //次数

    playTimes: cc.Integer,
    //游戏次数
    playerName: "Alex",
    Sex: cc.Integer,
    //1 man  2 woman
    SkillList: {
      "default": [],
      type: [SkillStruct]
    },
    AchievementList: {
      "default": [],
      type: [AchieveStruct]
    },
    RecordList: {
      "default": [],
      type: [RecordStruct]
    },
    MarryAge: cc.Integer,
    MarryRoleId: cc.Integer,
    DivorceAge: cc.Integer,
    FundationAge: cc.Integer,
    FundationCompanyId: cc.Integer,
    BankruptAge: cc.Integer,
    MillionAge: cc.Integer,
    TenMillionAge: cc.Integer,
    HundredMillionAge: cc.Integer,
    //非本地保存数据
    RetireAge: cc.Integer,
    //退休年龄 这个值跟成就有关
    BetWinRatio: 0.15,
    //賭博贏概率
    DateSuccescRatio: 0.2,
    //約會成功概率
    //BetCost:cc.Integer,//赌博花费
    HighAssets: cc.Integer,
    //资产巅峰值
    InitMoney: cc.Integer,
    //刚出来闯荡时候的所有资产
    Cash: cc.Integer,
    //现金
    HpPoint: cc.Integer,
    //健康指数
    Age: cc.Integer,
    //年龄
    Honor: cc.Integer,
    //头衔 1 百万富翁 等等  这个在玩到一亿元之后会有新的玩意
    Reputation: cc.Integer,
    //名声指数
    AssetsMoney: cc.Integer,
    //总资产
    WareHouseCapcity: cc.Integer,
    //仓库剩余容量
    WareHouseAllCapcity: cc.Integer,
    //仓库总容量
    hasCompany: false,
    //是否已经创办公司
    CanGetStockProfit: false,
    //能否计算股票收益了
    RecoverYear: 0,
    // 从恢复健康 剩余年限

    SkillBonusPoint: 0,
    //技能点

    //加成点 伴侣加成  技能加成 
    TreatBonus: 0.0,
    //治疗花费降低百分点
    WareHouseCapcityBonus: 0,
    //仓储加成
    CashBonus: 0,
    //金钱加成 每年加成
    CashRationBonus: 0,
    ReputationBonus: 0,
    //名声加成 每年
    HpPointBonus: 0,
    //健康加成
    WareHouseBonusEveryYear: 0,
    //每年的仓储加成
    RetireBonus: 0,
    //增加退休年限
    DateBonus: 0.0,
    //增加约会成功概率
    InitMoneyBonus: 0,
    //增加初始现金
    StockAddBonus: 0.0,
    //增加公司收益
    StockUpBonus: 0.0,
    //股票上涨 概率增加
    DateMoneyBonus: 0.0,
    //约会花费降低
    BetBonus: 0.0,
    //赌博赢钱概率上升
    SkillPointGetBonus: 0.0,
    //结算技能点获得提升
    ReputationInitBonus: 0,
    //初始名声加成
    CarBuyBonus: 0,
    //购买汽车价格降低
    EventCostBonus: 0,
    //事件消耗金钱降低
    HouseBuyBonuse: 0,
    //购买房屋 价格降低

    HistoryHighAssets: 0,
    // 记录历史退休最高资产

    userState: {
      "default": UserState.OK,
      type: UserState
    },
    // 玩家状态

    EventDataIdList: {
      "default": [],
      type: [cc.Integer]
    },
    //事件弹出 Id列表

    GoodsList: {
      "default": [],
      type: [GoodsStruct]
    },
    CarList: {
      "default": [],
      type: [CarStruct]
    },
    HouseList: {
      "default": [],
      type: [HouseStruct]
    },
    CompanyList: {
      "default": [],
      type: [CompanyStruct]
    },
    MateList: {
      "default": [],
      type: [MateStruct]
    },
    //当前显示的五个物品 每次只显示五个物品  只保存 Id
    ShowGoodsList: {
      "default": [],
      type: [cc.Integer]
    }
  },
  JudeGoodsOwned: function JudeGoodsOwned(Id) {
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (this.GoodsList[i].Id == Id && this.GoodsList[i].ownNum > 0) {
        return true;
      }
    }
    return false;
  },
  //清理市场显示数据
  ClearShowGoodsList: function ClearShowGoodsList() {
    this.ShowGoodsList.splice(0, this.ShowGoodsList.length);
  },
  //向显示数组中插入一个 显示数据 Id
  InsertGoodsIdToList: function InsertGoodsIdToList(Id) {
    this.ShowGoodsList.push(Id);
  },
  //检查Id 是否当前显示
  CheckIdIsInShowList: function CheckIdIsInShowList(Id) {
    var flag = false;
    for (var i = this.ShowGoodsList.length - 1; i >= 0; i--) {
      if (this.ShowGoodsList[i] == Id) {
        flag = true;
        break;
      }
    }
    return flag;
  },
  initData: function initData() {
    var _this = this;
    cc.Mgr.initData = false;
    this.userState = UserState.OK; //健康状态

    cc.Mgr.global.InitEventHappenAge();
    if (!cc.Mgr.UserDataMgr.userId) {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
        eyouClientTiktok.getIns().init(9000009, function (initResp) {
          eyouClientTiktok.getIns().login(function (loginResp) {
            _this.tiktokGameVerifySession(loginResp.data.code).then(function (tiktokOpenId) {
              _this.execAfterObtainAccount(tiktokOpenId);
              cc.Mgr.initData = true;
            })["catch"](function (err) {
              return cc.log('登录失败:>', err);
            });
          });
        });
        return;
      } else if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        eyouClient.getIns().init(9000021, function (initResp) {
          eyouClient.getIns().login(function (loginResp) {
            _this.wechatGameVerifySession(loginResp.data.code).then(function (wxOpenId) {
              _this.execAfterObtainAccount(wxOpenId);
              cc.Mgr.initData = true;
            })["catch"](function (err) {
              return console.log('登录失败:>', err);
            });
          });
        });
        return;
      } else if (isKuaiShou) {
        console.log("运行在快手平台");
        eyouClientKs.getIns().init(9000005, function (initResp) {
          eyouClientKs.getIns().login(function (loginResp) {
            _this.kuaiShouGameVerifySession(loginResp.data.code).then(function (ksOpenId) {
              _this.execAfterObtainAccount(ksOpenId);
              cc.Mgr.initData = true;
            })["catch"](function (err) {
              return cc.log('登录失败:>', err);
            });
          });
        });
        return;
      }
    }
    this.execAfterObtainAccount('default');
    cc.Mgr.initData = true;
  },
  tiktokGameVerifySession: function tiktokGameVerifySession(code) {
    return new Promise(function (resolve, reject) {
      var reqObj = {
        gameId: 9000009,
        platformId: 2,
        code: code,
        timeStamp: Math.floor(Date.now() / 1000)
      };
      var secStr = "c-a-0-0-1-6-e-6-e-e-c-e-a-6-2-e-b-d-1-a-d-e-a-3-f-7-e-2-f-c-b-f-c-1-b-8-6-d-4-2";
      var signStr = reqObj.gameId + "-" + reqObj.platformId + "-" + reqObj.code + "-" + reqObj.timeStamp + "-" + secStr.replaceAll("-", "");
      reqObj.sign = crypto.createHash('md5').update(signStr, 'utf8').digest('hex');
      httpUtil.postJson("https://games.hndibei.com/market-multi-game-server/tiktokServer/verifySession", reqObj, function (reqFlag, resp) {
        if (reqFlag && resp.code === 0) {
          resolve(resp.data.userId);
        } else {
          reject(resp);
        }
      });
    });
  },
  wechatGameVerifySession: function wechatGameVerifySession(code) {
    return new Promise(function (resolve, reject) {
      var reqObj = {
        gameId: 9000021,
        platformId: 1,
        code: code,
        timeStamp: Math.floor(Date.now() / 1000)
      };
      // let secStr = "5-6-e-3-2-2-9-c-5-b-3-2-2-f-2-7-5-e-8-c-e-b-3-8-c-b-6-1-2-5-d-a" //首富养成记
      var secStr = "9-1-e-1-3-a-7-a-5-3-5-1-c-5-2-a-3-9-9-3-3-4-7-2-1-5-5-4-2-9-5-3"; //疯狂挪车王
      var signStr = reqObj.gameId + "-" + reqObj.platformId + "-" + reqObj.code + "-" + reqObj.timeStamp + "-" + secStr.replaceAll("-", "");
      reqObj.sign = crypto.createHash('md5').update(signStr, 'utf8').digest('hex');
      httpUtil.postJson("https://games.hndibei.com/market-wechat-game-server/wxServer/verifySession", reqObj, function (reqFlag, resp) {
        if (reqFlag && resp.code === 0) {
          resolve(resp.data.userId);
        } else {
          reject(resp);
        }
      });
    });
  },
  kuaiShouGameVerifySession: function kuaiShouGameVerifySession(code) {
    return new Promise(function (resolve, reject) {
      var reqObj = {
        gameId: 9000005,
        platformId: 9,
        code: code,
        timeStamp: Math.floor(Date.now() / 1000)
      };
      var secStr = "kki6E0EQWnigLYv272zIRA";
      var signStr = reqObj.gameId + "-" + reqObj.platformId + "-" + reqObj.code + "-" + reqObj.timeStamp + "-" + secStr.replaceAll("-", "");
      reqObj.sign = crypto.createHash('md5').update(signStr, 'utf8').digest('hex');
      httpUtil.post("https://games.hndibei.com/market-multi-game-server/kuaiShouServer/verifySession", reqObj, function (reqFlag, resp) {
        if (reqFlag && resp.code === 0) {
          resolve(resp.data.userId);
        } else {
          reject(resp);
        }
      });
    });
  },
  execAfterObtainAccount: function execAfterObtainAccount(userId) {
    this.userId = userId;

    //本地存储数据
    var StorageData = cc.sys.localStorage.getItem('XMB_userdata_' + this.userId); //作为一个整体保存起来
    if (StorageData == null || StorageData == "") {
      //cc.log("还没有保存过持久数据");
      var userdata = {};
      userdata.SkillList = null;
      userdata.AchievementList = null;
      userdata.playerName = "";
      userdata.Sex = 1;
      userdata.playTimes = 0;
      userdata.SkillBonusPoint = 0;
      userdata.tutorialInBus = false;
      userdata.tutorialInDate = false;
      userdata.tutorialInMarket = false;
      userdata.tutorialStockBonus = false;
      userdata.tutorialMatePoint = false;
      userdata.VideoAdsTimes = 0;
      userdata.VideoLastTime = "";
      userdata.HistoryHighAssets = 0;
      this.VideoLastTime = "";
      this.VideoAdsTimes = 0;
      this.playerName = userdata.playerName;
      this.Sex = userdata.Sex;
      this.playTimes = userdata.playTimes;
      this.tutorialInBus = userdata.tutorialInBus;
      this.tutorialInMarket = userdata.tutorialInMarket;
      this.tutorialInDate = userdata.tutorialInDate;
      this.tutorialStockBonus = userdata.tutorialStockBonus;
      this.tutorialMatePoint = userdata.tutorialMatePoint;
      this.SkillBonusPoint = userdata.SkillBonusPoint;
      var SkillList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Skill);
      for (var i = 0; i < SkillList.length; i++) {
        var data = SkillList[i];
        var sk = new SkillStruct();
        sk.name = data.name;
        sk.icon = data.icon;
        sk.Id = data.Id;
        sk.desId = data.desId;
        sk.subId = data.subId;
        sk.Uplv = data.upLevel;
        sk.skillType = data.skillType;
        sk.level = 0;
        this.SkillList[i] = sk;
      }
      var AchievementList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Achieve);
      for (var i = 0; i < AchievementList.length; i++) {
        var data = AchievementList[i];
        var ac = new AchieveStruct();
        ac.Id = data.Id;
        ac.icon = data.icon;
        ac.name = data.name;
        ac.desId = data.desId;
        ac.hasFinish = false;
        this.AchievementList[i] = ac;
      }
      userdata.SkillList = this.SkillList;
      userdata.AchievementList = this.AchievementList;
      userdata.RecordList = this.RecordList;
      cc.sys.localStorage.setItem('XMB_userdata_' + this.userId, JSON.stringify(userdata));
    } else {
      //cc.log("有之前保存的持久数据存在");
      var Data = JSON.parse(StorageData);
      this.playerName = Data.playerName;
      this.Sex = Data.Sex;
      this.playTimes = Data.playTimes;
      this.tutorialInBus = Data.tutorialInBus;
      this.tutorialInMarket = Data.tutorialInMarket;
      this.tutorialInDate = Data.tutorialInDate;
      this.tutorialStockBonus = Data.tutorialStockBonus;
      this.tutorialMatePoint = Data.tutorialMatePoint;
      this.HistoryHighAssets = Data.HistoryHighAssets;
      this.SkillList = Data.SkillList;
      this.SkillBonusPoint = Data.SkillBonusPoint;
      this.AchievementList = Data.AchievementList;
      this.VideoLastTime = Data.VideoLastTime;
      var testDate = new Date();

      //cc.log("++++++++++++++++++++++++++ " + testDate.toDateString());
      if (Data.VideoLastTime != testDate.toDateString()) {
        this.VideoAdsTimes = 0;
      } else {
        this.VideoAdsTimes = Data.VideoAdsTimes;
      }
      if (Data.RecordList != null) this.RecordList = Data.RecordList;
    }

    //获取其实天赋点加成
    this.GetInitSkillBonus(this.SkillList);
    this.MarryAge = 0;
    this.MarryRoleId = 0;
    this.DivorceAge = 0;
    this.FundationAge = 0;
    this.FundationCompanyId = 0;
    this.BankruptAge = 0;
    this.MillionAge = 0;
    this.TenMillionAge = 0;
    this.HundredMillionAge = 0;

    //初始化 玩一局的数据
    this.retireAge = cc.Mgr.global.RetireInitAge + this.RetireBonus;
    this.BetWinRatio = cc.Mgr.global.BetWinRatio + this.BetBonus / 100; //后面还会要加上加成
    this.DateSuccescRatio = cc.Mgr.global.DateSuccescRatio + this.DateBonus / 100;
    this.Cash = 0;
    this.HighAssets = 0;
    this.HpPoint = 100;
    this.RecoverYear = 0;
    this.userState = UserState.OK;
    this.Age = 20;
    this.Honor = 0; //没有头衔
    this.Reputation = this.ReputationInitBonus; //名声
    this.AssetsMoney = 0; //资产

    this.WareHouseBonusEveryYear = 0;
    this.WareHouseCapcity = cc.Mgr.global.InitWareHouseCapcity + this.WareHouseCapcityBonus; //仓库容量初始定100  这个值到时要根据 成就定
    this.WareHouseAllCapcity = cc.Mgr.global.InitWareHouseCapcity + this.WareHouseCapcityBonus;
    this.hasCompany = false; //没有公司
    this.CanGetStockProfit = false; //还不能计算股票收益

    var GoodsList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Goods);
    for (var i = 0; i < GoodsList.length; i++) {
      var data = GoodsList[i];
      var ac = new GoodsStruct();
      ac.name = data.name;
      ac.Id = data.Id;
      ac.icon = data.icon;
      ac.ownNum = 0;
      ac.buyPrice = 0; //买入价格
      ac.marketPrice = 0; //市场价格
      this.GoodsList[i] = ac;
    }
    var CarList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Car);
    for (var i = 0; i < CarList.length; i++) {
      var data = CarList[i];
      var ac = new CarStruct();
      ac.Id = data.Id;
      ac.icon = data.icon;
      ac.name = data.name;
      ac.ownNum = 0;
      ac.price = data.price;
      ac.addBonus = data.addBonus;
      ac.addHp = data.addHp;
      ac.addDate = data.addDate;
      this.CarList[i] = ac;
    }
    var HouseList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.House);
    for (var i = 0; i < HouseList.length; i++) {
      var data = HouseList[i];
      var ac = new HouseStruct();
      ac.Id = data.Id;
      ac.icon = data.icon;
      ac.name = data.name;
      ac.ownNum = 0;
      ac.price = data.price;
      ac.addBonus = data.addBonus;
      ac.addHp = data.addHp;
      this.HouseList[i] = ac;
    }
    var CompanyList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Company);
    for (var i = 0; i < CompanyList.length; i++) {
      var data = CompanyList[i];
      var ac = new CompanyStruct();
      ac.Id = data.Id;
      ac.icon = data.icon;
      ac.name = data.name;
      ac.bonusRatio = data.bonusRatio;
      ac.isOwned = false;
      ac.stockNum = 0;
      ac.stockCost = 0;
      ac.bankruptPrice = data.outPrice;
      ac.stockPrice = data.inPrice;
      ac.LimitYear = data.LimitYear;
      this.CompanyList[i] = ac;
    }
    var MateList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.Mate);
    for (var i = 0; i < MateList.length; i++) {
      var data = MateList[i];
      var ac = new MateStruct();
      ac.Id = data.Id;
      ac.icon = data.icon;
      ac.name = data.name;
      ac.sex = data.sex;
      ac.LovePoint = 0;
      ac.canDate = false;
      ac.unlockCond = data.unlockCond;
      if (data.unlockCond == MateUnLockType.NULL) {
        ac.canDate = true;
      }
      ////cc.log(data.name + " 是否可以直接约会 " + data.unlockCond);
      ac.curLevel = 0; //等级
      ac.UpLv = false; //没有满级
      this.MateList[i] = ac;
    }
    //保存下 事件Id 每次刷一次事件  就会剔除一次
    var EventList = cc.Mgr.MapDataMgr.getDataListByItemType(ItemType.EventData);
    for (var i = 0; i < EventList.length; i++) {
      var data = EventList[i];
      this.EventDataIdList[i] = data.Id;
    }
  },
  //初始 天赋技能获得加成数据
  GetInitSkillBonus: function GetInitSkillBonus(skillList) {
    this.TreatBonus = 0; //治疗花费降低百分点
    this.WareHouseCapcityBonus = 0; //仓储加成
    this.CashBonus = 0; //金钱加成 每年加成
    this.CashRationBonus = 0;
    this.ReputationBonus = 0; //名声加成 每年
    this.HpPointBonus = 0; //健康加成
    this.RetireBonus = 0; //增加退休年限
    this.DateBonus = 0; //增加约会成功概率
    this.InitMoneyBonus = 0; //增加初始现金
    this.StockAddBonus = 0; //增加公司收益
    this.StockUpBonus = 0; //股票上涨 概率增加
    this.DateMoneyBonus = 0; //约会花费降低
    this.BetBonus = 0; //赌博赢钱概率上升
    this.SkillPointGetBonus = 0; //结算技能点提升
    this.ReputationInitBonus = 0; //初始名声加成
    this.CarBuyBonus = 0; //购买汽车价格降低
    this.EventCostBonus = 0; //事件消耗金钱降低
    this.HouseBuyBonuse = 0; //购买房屋 价格降低

    for (var i = 0; i < skillList.length; i++) {
      var data = skillList[i];
      //获得数据
      var bonus = cc.Mgr.MapDataMgr.getSkillAddBonusByTwoIdAndLv(data.Id, data.subId, data.level);
      ////cc.log(data.skillType + "++++++++++++初始技能加成+++++++++++"+bonus);
      switch (data.skillType) {
        case SkillType.WLNS:
          this.WareHouseCapcityBonus = bonus; //已經計算
          break;
        case SkillType.THY:
          this.DateBonus = bonus; //百分比  已經計算
          break;
        case SkillType.XSJY:
          this.CashRationBonus = bonus; //已经加入计算
          break;
        case SkillType.FGZJ:
          this.InitMoneyBonus = bonus; //已经计算
          break;
        case SkillType.GSGL:
          this.StockAddBonus = bonus; //百分百 已经计算
          break;
        case SkillType.TPGS:
          this.StockUpBonus = bonus; //百分比 已经计算
          break;
        case SkillType.JZCC:
          this.SkillPointGetBonus = bonus; //百分比  已經計算
          break;
        case SkillType.MLSZ:
          this.DateMoneyBonus = bonus; //百分比 一计算
          break;
        case SkillType.DS:
          this.BetBonus = bonus; //百分比 已經計算
          break;
        case SkillType.LDYZ:
          this.RetireBonus = bonus; //已經算進去
          break;
        case SkillType.NSCM:
          this.ReputationInitBonus = bonus; //已經計算
          break;
        case SkillType.QCDR:
          this.CarBuyBonus = bonus; //百分比 一計算
          break;
        case SkillType.HYLL:
          this.EventCostBonus = bonus; //百分比 一计算
          break;
        case SkillType.DCZJ:
          this.HouseBuyBonuse = bonus; //百分比 一計算
          break;
      }
    }
  },
  //获取每年都会获得的加成数额
  GetBonusRewardEveryYear: function GetBonusRewardEveryYear() {
    // 包括 金钱 名声 健康值
    this.Cash += this.CashBonus;
    this.Cash = Math.floor(this.Cash * (1 + this.CashRationBonus));
    if (this.Cash < 100) this.Cash = 0;
    this.Reputation += this.ReputationBonus;
    if (this.Reputation < 0) this.Reputation = 0;
    this.HpPoint += this.HpPointBonus;
    if (this.HpPoint > 100) {
      this.HpPoint = 100;
    }
    this.WareHouseCapcity += this.WareHouseBonusEveryYear;
    this.WareHouseAllCapcity += this.WareHouseBonusEveryYear;
    if (this.WareHouseCapcity > 200) this.WareHouseCapcity = 200;
    if (this.WareHouseAllCapcity > 200) this.WareHouseAllCapcity = 200;
  },
  //获取一次事件id  并从数列中剔除这个 Id
  GetEventDataAndSpliceId: function GetEventDataAndSpliceId() {
    var len = this.EventDataIdList.length;
    //cc.log("11 事件数据剩余个数 = " + len);
    var seed = Math.floor(Math.random() * len);
    var out = this.EventDataIdList[seed];
    this.EventDataIdList.splice(seed, 1);
    //cc.log(out + "  事件数据剩余个数 = " + this.EventDataIdList.length);
    return out;
  },
  RefreshHistoryHighAsset: function RefreshHistoryHighAsset(asset) {
    this.HistoryHighAssets = asset;
  },
  //保存本地数据
  SaveUserData: function SaveUserData() {
    var userdata = {};
    userdata.playerName = this.playerName;
    userdata.Sex = this.Sex;
    userdata.SkillList = this.SkillList;
    //引导步骤
    userdata.tutorialInMarket = this.tutorialInMarket;
    userdata.tutorialInDate = this.tutorialInDate;
    userdata.tutorialInBus = this.tutorialInBus;
    userdata.tutorialStockBonus = this.tutorialStockBonus;
    userdata.tutorialMatePoint = this.tutorialMatePoint;
    userdata.HistoryHighAssets = this.HistoryHighAssets;
    userdata.VideoAdsTimes = this.VideoAdsTimes;
    userdata.VideoLastTime = this.VideoLastTime;
    userdata.playTimes = this.playTimes;
    userdata.AchievementList = this.AchievementList;
    userdata.RecordList = this.RecordList;
    userdata.SkillBonusPoint = this.SkillBonusPoint;
    cc.sys.localStorage.setItem('XMB_userdata_' + this.userId, JSON.stringify(userdata));
  },
  CreateRecord: function CreateRecord() {
    var reD = new RecordStruct();
    var asLv = 0;
    var td = Math.floor(this.AssetsMoney / 1000000);
    if (td > 0 && td < 10) {
      asLv = 1;
    } else if (td > 10 && td < 100) {
      asLv = 2;
    } else if (td > 100) {
      asLv = 3;
    }
    reD.retireAge = this.Age;
    reD.level = asLv;
    reD.assets = this.AssetsMoney;
    reD.highAssets = this.HighAssets;
    this.RecordList.push(reD);
    //this.SaveUserData();
  },

  //升级技能点
  UpGradeSkill: function UpGradeSkill(Id, subId, toLv) {
    var isOk = false;
    var NeedCost = cc.Mgr.MapDataMgr.getUpgradeCostByTwoId(Id, subId, toLv);
    if (this.SkillBonusPoint < NeedCost) return false;

    //不要求升级满技能即可升级下一个技能
    for (var i = 0; i < this.SkillList.length; i++) {
      if (this.SkillList[i].Id == Id && this.SkillList[i].subId + 1 == subId) {
        if (this.SkillList[i].level == 0) {
          //cc.log("上一个技能还没有升级到满级");
          return false;
        }
        //if(this.SkillList[i].level != this.SkillList[i].Uplv)
        //{
        //cc.log("上一个技能还没有升级到满级");
        //	return false;
        //}
      }
    }

    for (var i = 0; i < this.SkillList.length; i++) {
      if (this.SkillList[i].Id == Id && this.SkillList[i].subId == subId) {
        if (this.SkillList[i].level < this.SkillList[i].Uplv) {
          this.SkillList[i].level++;
          this.SkillBonusPoint -= NeedCost;
          isOk = true;
        } else {
          isOk = false;
        }
        break;
      }
    }
    return isOk;
  },
  CanShowUpTip: function CanShowUpTip(Id, subId, toLv) {
    var isOk = false;
    var NeedCost = cc.Mgr.MapDataMgr.getUpgradeCostByTwoId(Id, subId, toLv);
    if (this.SkillBonusPoint < NeedCost) return false;
    for (var i = 0; i < this.SkillList.length; i++) {
      if (this.SkillList[i].Id == Id && this.SkillList[i].subId + 1 == subId) {
        if (this.SkillList[i].level == 0) {
          //cc.log("上一个技能还没有升级到满级");
          return false;
        }
        //if(this.SkillList[i].level != this.SkillList[i].Uplv)
        //{
        //cc.log("上一个技能还没有升级到满级");
        //	return false;
        //}
      }
    }

    for (var i = 0; i < this.SkillList.length; i++) {
      if (this.SkillList[i].Id == Id && this.SkillList[i].subId == subId) {
        if (this.SkillList[i].level < this.SkillList[i].Uplv) {
          isOk = true;
        } else {
          isOk = false;
        }
        break;
      }
    }
    return isOk;
  },
  //完成指定成就
  FinishAchievement: function FinishAchievement(Id) {
    var isOk = false;
    for (var i = 0; i < this.AchievementList.length; i++) {
      if (this.AchievementList[i].Id == Id) {
        this.AchievementList[i].hasFinish = true;
        isOk = true;
        break;
      }
    }
    return isOk;
  },
  //买入物品
  BuyGoods: function BuyGoods(data) {
    //data 包含 Id buyprire buynum
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (data.Id == this.GoodsList[i].Id) {
        return this.GoodsList[i].RefeshDataAfterBuy(data);
      }
    }
  },
  //出售物品
  SaleGoods: function SaleGoods(data) {
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (data.Id == this.GoodsList[i].Id) {
        return this.GoodsList[i].RefeshDataAfterSale(data);
      }
    }
  },
  //创办公司
  CreateCompany: function CreateCompany(data) {
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      if (data.Id == this.CompanyList[i].Id) {
        return this.CompanyList[i].RefreshDataAfterOper(data);
      }
    }
  },
  //查看一下是否已经拥有五種物品
  CheckOwnedGoodsNum: function CheckOwnedGoodsNum() {
    var Num = 0;
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (this.GoodsList[i].ownNum > 0) {
        Num += 1;
      }
    }
    var Isfull = false;
    if (Num == 5) {
      Isfull = true;
    }
    return Isfull;
  },
  //购买股票
  BuyStocks: function BuyStocks(data) {
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      if (data.Id == this.CompanyList[i].Id) {
        return this.CompanyList[i].RefreshDataAfterOper(data);
      }
    }
  },
  //出售股票
  SaleStocks: function SaleStocks(data) {
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      if (data.Id == this.CompanyList[i].Id) {
        return this.CompanyList[i].RefreshDataAfterSale(data);
      }
    }
  },
  BuySaleCommonItem: function BuySaleCommonItem(data) {
    //cc.log("=============" + data.Type + "  Id = "+ data.Id)
    if (data.Type == ItemType.Car) {
      for (var i = this.CarList.length - 1; i >= 0; i--) {
        if (this.CarList[i].Id == data.Id) {
          this.CarList[i].RefreshData(data.addNum);
        }
      }
    } else if (data.Type == ItemType.House) {
      for (var i = this.HouseList.length - 1; i >= 0; i--) {
        if (this.HouseList[i].Id == data.Id) {
          this.HouseList[i].RefreshData(data.addNum);
        }
      }
    }
  },
  //刷新约会的亲密度
  RefreshMateData: function RefreshMateData(Id) {
    for (var i = this.MateList.length - 1; i >= 0; i--) {
      if (Id == this.MateList[i].Id) {
        return this.MateList[i].RefreshAfterLvUp();
      }
    }
  },
  //根據id解除婚姻
  DisvorceMateById: function DisvorceMateById(Id) {
    for (var i = 0; i < this.MateList.length; i++) {
      if (this.MateList[i].Id == Id) {
        this.MateList[i].ReturnInitState();
        var data = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Mate, Id);
        this.DeleteMateBonusReward(data.bonusList);
        //现金 股票减少 名声 健康受损
        this.Cash = Math.floor(this.Cash * 0.8);
        this.HpPoint = Math.floor(this.HpPoint * 0.8);
        this.Reputation = Math.floor(this.Reputation * 0.8);
        this.DisvorceDelStocks();
        break;
      }
    }
  },
  DisvorceDelStocks: function DisvorceDelStocks() {
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      if (this.CompanyList[i].stockNum > 0) {
        this.CompanyList[i].RefreshDataAfterDisvorce();
        return;
      }
    }
  },
  //获得伴侣加成 结婚后获得
  getMateBonusReward: function getMateBonusReward(data) {
    for (var i = 0; i < data.length; i++) {
      var dt = data[i];
      //cc.log("+++++++++++++++++++++oooooo+++++++++++++++++++++++" + dt.bonusNum);
      if (dt.bonusType == MateBonusType.NULL) {
        //cc.log("伴侣加成什么也没有");
      } else if (dt.bonusType == MateBonusType.HP) {
        this.HpPointBonus += dt.bonusNum;
      } else if (dt.bonusType == MateBonusType.Money) {
        this.CashBonus += dt.bonusNum;
      } else if (dt.bonusType == MateBonusType.Reputation) {
        this.ReputationBonus += dt.bonusNum;
      } else if (dt.bonusType == MateBonusType.WareHouseCapcity) {
        this.WareHouseCapcity += dt.bonusNum;
        this.WareHouseAllCapcity += dt.bonusNum;
        this.WareHouseBonusEveryYear += dt.bonusNum;
        if (this.WareHouseAllCapcity > 200) this.WareHouseAllCapcity = 200;
        if (this.WareHouseCapcity > 200) this.WareHouseCapcity = 200;
      } else if (dt.bonusType == MateBonusType.Treat) {
        this.TreatBonus += dt.bonusNum;
      }
    }
  },
  //移除伴侣获得的天赋加成
  DeleteMateBonusReward: function DeleteMateBonusReward(data) {
    for (var i = 0; i < data.length; i++) {
      var dt = data[i];
      //cc.log("+++++++++++++++++++++oooooo+++++++++++++++++++++++" + dt.bonusNum);
      if (dt.bonusType == MateBonusType.NULL) {
        //cc.log("伴侣加成什么也没有");
      } else if (dt.bonusType == MateBonusType.HP) {
        this.HpPointBonus -= dt.bonusNum;
      } else if (dt.bonusType == MateBonusType.Money) {
        this.CashBonus -= dt.bonusNum;
      } else if (dt.bonusType == MateBonusType.Reputation) {
        this.ReputationBonus -= dt.bonusNum;
        if (this.ReputationBonus < 0) this.ReputationBonus = 0;
      } else if (dt.bonusType == MateBonusType.WareHouseCapcity) {
        //this.WareHouseCapcity -= dt.bonusNum;
        //this.WareHouseAllCapcity -= dt.bonusNum;
        this.WareHouseBonusEveryYear -= dt.bonusNum;
        if (this.WareHouseBonusEveryYear < 0) this.WareHouseBonusEveryYear = 0;
      } else if (dt.bonusType == MateBonusType.Treat) {
        this.TreatBonus -= dt.bonusNum;
      }
    }
  },
  getOwnDataListByType: function getOwnDataListByType(itemType) {
    var dataList = null;
    switch (itemType) {
      case ItemType.Goods:
        dataList = this.GoodsList;
        break;
      case ItemType.Skill:
        dataList = this.SkillList;
        break;
      case ItemType.Car:
        dataList = this.CarList;
        break;
      case ItemType.House:
        dataList = this.HouseList;
        break;
      case ItemType.Achieve:
        dataList = this.AchievementList;
        break;
      case ItemType.Company:
        dataList = this.CompanyList;
        break;
      case ItemType.Mate:
        dataList = this.MateList;
        break;
    }
    return dataList;
  },
  //获取已有数据 根据 类型和Id
  getDataByItemTypeAndId: function getDataByItemTypeAndId(itemType, Id) {
    var dataList = null;
    switch (itemType) {
      case ItemType.Goods:
        dataList = this.GoodsList;
        break;
      case ItemType.Skill:
        dataList = this.SkillList;
        break;
      case ItemType.Car:
        dataList = this.CarList;
        break;
      case ItemType.House:
        dataList = this.HouseList;
        break;
      case ItemType.Achieve:
        dataList = this.AchievementList;
        break;
      case ItemType.Company:
        dataList = this.CompanyList;
        break;
      case ItemType.Mate:
        dataList = this.MateList;
        break;
    }
    if (dataList != null) {
      for (var i = dataList.length - 1; i >= 0; i--) {
        if (Id == dataList[i].Id) {
          return dataList[i];
        }
      }
    }
    //如果没有数据 为 null
    return null;
  },
  //刷新物品市场价格
  RefreshGoodsMarKetPrice: function RefreshGoodsMarKetPrice(Id, marketPrice) {
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (Id == this.GoodsList[i].Id) {
        this.GoodsList[i].marketPrice = marketPrice;
        break;
      }
    }
  },
  //刷新股票商场价格和成本
  RefreshStockData: function RefreshStockData(Id, param) {
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      if (Id == this.CompanyList[i].Id) {
        this.CompanyList[i].stockPrice = param.stockPrice;
        this.CompanyList[i].stockCost = param.stockCost;
        break;
      }
    }
  },
  //获取拥有的物品对应数据
  getGoodsDataById: function getGoodsDataById(Id) {
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      if (Id == this.GoodsList[i].Id) {
        return this.GoodsList[i];
      }
    }
  },
  //刷新个人资产  //caculateStock 是否計算股票收益
  RefreshUserAssets: function RefreshUserAssets(caculateStock) {
    var lastAsset = this.AssetsMoney;
    var assets = 0;
    //计算所拥有物品总价
    for (var i = this.GoodsList.length - 1; i >= 0; i--) {
      var data = this.GoodsList[i];
      var flag = this.CheckIdIsInShowList(data.Id);
      if (flag == true) {
        assets += data.ownNum * data.marketPrice;
      } else {
        assets += data.ownNum * data.buyPrice;
      }
    }
    //计算房屋拥有
    for (var i = this.HouseList.length - 1; i >= 0; i--) {
      var dt = this.HouseList[i];
      if (dt.ownNum > 0) {
        ////cc.log(dt.Id + " 房子的数量和价格 " + dt.ownNum + " " + dt.price);
        assets += dt.ownNum * dt.price;
      }
    }
    //计算车子所有
    for (var i = this.CarList.length - 1; i >= 0; i--) {
      var dt = this.CarList[i];
      if (dt.ownNum > 0) {
        assets += dt.ownNum * dt.price;
      }
    }

    //后面再加上 股票收益
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      var da = this.CompanyList[i];
      if (da.stockNum > 0) {
        //this.Reputation += cc.Mgr.global.HasCompanyReputationAdd;
        assets += Math.floor(da.stockNum * da.stockPrice);
        if (this.CanGetStockProfit == true && caculateStock == true) {
          this.Cash += Math.floor(da.stockNum * da.stockPrice * (da.bonusRatio + this.StockAddBonus / 100));
        }
      }
    }
    assets += this.Cash;
    //资产暴涨时候健康迅速下降 暴涨5倍下降30
    this.AssetsMoney = assets;
    this.JudeFinishAnyAchievement(5); //成就 Id = 5 资产相关
    this.JudeFinishAnyAchievement(4); //成就 Id = 6  

    cc.log(lastAsset + " L =========他妈的资产问题======== N " + assets);
    if (assets > this.HighAssets) {
      this.HighAssets = assets;
    }
    if (assets > 1000000 && this.MillionAge == 0) {
      this.MillionAge = this.Age;
    }
    if (assets > 10000000 && this.TenMillionAge == 0) {
      this.TenMillionAge = this.Age;
    }
    if (assets > 100000000 && this.HundredMillionAge == 0) {
      this.HundredMillionAge = this.Age;
    }
    if (Math.floor(assets / lastAsset) >= cc.Mgr.global.AssetExplorRate || assets / lastAsset <= cc.Mgr.global.AssetExplorDownRate) {
      if (this.userState == UserState.NotOK) return;
      this.HpPoint -= cc.Mgr.global.AssetBurden;
      if (this.HpPoint < cc.Mgr.global.HealthLine) {
        this.userState = UserState.NotOK;
        cc.Mgr.global.goToHospital += 1;
        this.RecoverYear = cc.Mgr.global.YearRecover;
        var param = {};
        param.forWhat = "HealthLine";
        param.text = cc.Mgr.global.getTranslation("RecoverHealth");
        cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);

        //this.UnLockMateByInHospital(MateUnLockType.InHospital, this.Sex);
      } else {
        var param = {};
        param.forWhat = "";
        param.text = cc.Mgr.global.getTranslation("RecoverHealthD");
        cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
      }
    }
  },
  JudeFinishAnyAchievement: function JudeFinishAnyAchievement(Id) {
    //cc.log(this.AchievementList.length + "======================判断成就是否完成" + Id);
    for (var i = 0; i < this.AchievementList.length; i++) {
      if (this.AchievementList[i].Id == Id) {
        if (this.AchievementList[i].hasFinish == true) {
          //cc.log("该成就已经完成了");
          return;
        }
      }
    }
    var acD = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Achieve, Id);
    cc.log("======================判断成就是否完成 = " + acD.name);
    var condList = acD.condList;
    var finished = this.JudeCanFinishAchievementByCond(condList);
    if (finished) {
      for (var i = 0; i < this.AchievementList.length; i++) {
        if (this.AchievementList[i].Id == Id) {
          this.AchievementList[i].hasFinish = true;
          return;
        }
      }
    }
  },
  CaculateReputationFromCompany: function CaculateReputationFromCompany() {
    //后面再加上 股票造成的
    for (var i = this.CompanyList.length - 1; i >= 0; i--) {
      var da = this.CompanyList[i];
      if (da.stockNum > 0) {
        this.Reputation += cc.Mgr.global.HasCompanyReputationAdd;
        return;
      }
    }
  },
  JudeCanFinishAchievementByCond: function JudeCanFinishAchievementByCond(condList) {
    var finishedList = [];
    for (var i = 0; i < condList.length; i++) {
      var cond = condList[i];
      var finished = false;
      cc.log("类型要求 = " + cond.condType + "  数值要求 = " + cond.value);
      switch (cond.condType) {
        case AchieveCond.AssetMoneyUp:
          finished = this.JudeAssetCond(cond.value);
          break;
        case AchieveCond.InHospital:
          finished = this.JudegoToHosTimesCond(cond.value);
          break;
        case AchieveCond.Bankrupt:
          finished = this.JudeBankruptTimesCond(cond.value);
          break;
        case AchieveCond.CreateBusiness:
          finished = this.JudeCreateCompanyCond(cond.value);
          break;
        case AchieveCond.AgeCond:
          finished = this.JudeAgeCond(cond.value);
          break;
        case AchieveCond.HasMarryCond:
          finished = this.JudeHasMarryCond();
          break;
        case AchieveCond.LovePointCond:
          finished = this.JudeLovePointCond(cond.value);
          break;
        case AchieveCond.AssetMoneyDown:
          finished = this.JudeAssetDownCond(cond.value);
          break;
        case AchieveCond.NoMarryCond:
          finished = this.JudeNotMarryCond(cond.value);
          break;
        case AchieveCond.AgeCondUp:
          finished = this.JudeAgeCondUp(cond.value);
          break;
      }
      cc.log("是否完成 = " + finished);
      finishedList.push(finished);
    }
    for (var i = 0; i < finishedList.length; i++) {
      if (finishedList[i] == false) return false;
    }
    return true;
  },
  JudeAssetDownCond: function JudeAssetDownCond(value) {
    if (this.AssetsMoney < value * 1000000) return true;else return false;
  },
  //成就完成 资产限制
  JudeAssetCond: function JudeAssetCond(value) {
    if (this.AssetsMoney >= value * 1000000) return true;else return false;
  },
  //成就完成 年龄限制 小于
  JudeAgeCond: function JudeAgeCond(value) {
    if (this.Age <= value) return true;else return false;
  },
  JudeAgeCondUp: function JudeAgeCondUp(value) {
    if (this.Age >= value) return true;else return false;
  },
  //成就完成 进医院次数
  JudegoToHosTimesCond: function JudegoToHosTimesCond(value) {
    if (cc.Mgr.global.goToHospital > value) return true;else return false;
  },
  //成就完成 破产次数
  JudeBankruptTimesCond: function JudeBankruptTimesCond(value) {
    if (cc.Mgr.global.BankruptTimes > value) return true;else return false;
  },
  //成就完成 创业次数
  JudeCreateCompanyCond: function JudeCreateCompanyCond(value) {
    if (cc.Mgr.global.CreateCompanyTimes > value) return true;else return false;
  },
  //成就完成 是否已婚
  JudeHasMarryCond: function JudeHasMarryCond() {
    for (var i = 0; i < this.MateList.length; i++) {
      if (this.MateList[i].LovePoint == 100) {
        return true;
      }
    }
    return false;
  },
  JudeHasCar: function JudeHasCar() {
    for (var i = this.CarList.length - 1; i >= 0; i--) {
      if (this.CarList[i].ownNum > 0) {
        return true;
      }
    }
    return false;
  },
  JudeHasCarById: function JudeHasCarById(Id) {
    for (var i = this.CarList.length - 1; i >= 0; i--) {
      if (this.CarList[i].ownNum > 0 && this.CarList[i].Id == Id) {
        return true;
      }
    }
    return false;
  },
  JudeHasHouse: function JudeHasHouse() {
    for (var i = this.HouseList.length - 1; i >= 0; i--) {
      if (this.HouseList[i].ownNum > 0) {
        return true;
      }
    }
    return false;
  },
  JudeHasHouseById: function JudeHasHouseById(Id) {
    for (var i = this.HouseList.length - 1; i >= 0; i--) {
      if (this.HouseList[i].ownNum > 0 && this.HouseList[i].Id == Id) {
        return true;
      }
    }
    return false;
  },
  //成就完成 是否未婚
  JudeNotMarryCond: function JudeNotMarryCond() {
    for (var i = 0; i < this.MateList.length; i++) {
      if (this.MateList[i].LovePoint == 100) {
        return false;
      }
    }
    return true;
  },
  //成就完成 亲密度人数
  JudeLovePointCond: function JudeLovePointCond(value) {
    var num = 0;
    for (var i = 0; i < this.MateList.length; i++) {
      if (this.MateList[i].LovePoint == 99) {
        num += 1;
      }
    }
    if (num >= value) return true;else return false;
  },
  //刷新用户年龄
  RefreshUserAge: function RefreshUserAge() {
    this.Age += 1;
    if (this.Age == this.retireAge + 1 && cc.Mgr.global.useRetireAds == false) {
      cc.director.GlobalEvent.emit(cc.Mgr.Event.UseRetireAdsSkill, {});
    } else if (this.Age > this.retireAge && cc.Mgr.global.useRetireAds == true) {
      cc.director.GlobalEvent.emit(cc.Mgr.Event.Retire, {});
    }
    this.CaculateReputationFromCompany();
  },
  //刷新个人健康指数
  RefreshHealthHp: function RefreshHealthHp() {
    if (this.RecoverYear > 0 && this.userState == UserState.NotOK) {
      this.RecoverYear -= 1;
      return;
    } else if (this.RecoverYear == 0 && this.userState == UserState.NotOK) {
      this.RecoverYear = 0;
      this.userState = UserState.OK;
      this.HpPoint = 100;
      return;
    }
    if (this.Age >= cc.Mgr.global.HealthSubAge && this.HpPoint > 0) {
      var seed = 2 + Math.floor(Math.random() * 3);
      this.HpPoint -= seed;
      if (this.HpPoint < cc.Mgr.global.HealthLine) {
        this.userState = UserState.NotOK;
        cc.Mgr.global.goToHospital += 1;
        this.RecoverYear = cc.Mgr.global.YearRecover;
        var param = {};
        param.forWhat = "HealthLine";
        param.text = cc.Mgr.global.getTranslation("RecoverHealth");
        cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenCommonTip, param);
        //this.UnLockMateByInHospital(MateUnLockType.InHospital, this.Sex);
      }
    }
  },

  //技能天赋数据获取
  getSkillDataByTwoId: function getSkillDataByTwoId(Id, subId) {
    var dt = null;
    for (var i = this.SkillList.length - 1; i >= 0; i--) {
      var data = this.SkillList[i];
      if (data.Id == Id && data.subId == subId) {
        dt = data;
        return data;
      }
    }
    return dt;
  },
  getSkillListById: function getSkillListById(Id) {
    var param = [];
    for (var i = this.SkillList.length - 1; i >= 0; i--) {
      var data = this.SkillList[i];
      if (data.Id == Id) {
        param.push(data);
      }
    }
    return param;
  },
  //花销和获得根据 
  GetOrCostDataByRewardType: function GetOrCostDataByRewardType(rewardType, num, subId)
  //对于物品  会有一个subId
  {
    var Pdata = {};
    Pdata.Id = -1;
    Pdata.companyId = -1;
    //cc.log("++++++rewardType++++++" + rewardType);
    if (rewardType == RewardType.NULL) {
      //cc.log("啥也没有");
    } else if (rewardType == RewardType.Cash) {
      if (num < 0)
        //好运连连
        {
          num = num + Math.floor(-num * this.EventCostBonus);
        } else {
        num + Math.floor(num * this.EventCostBonus);
      }
      this.Cash += num;
      if (this.Cash < 0) this.Cash = 0;
    } else if (rewardType == RewardType.HP) {
      this.HpPoint += num;
      if (this.HpPoint > 100) this.HpPoint = 100;
    } else if (rewardType == RewardType.Reputation) {
      this.Reputation += num;
      if (this.Reputation < 0) this.Reputation = 0;
    } else if (rewardType == RewardType.Goods) {
      for (var i = 0; i < this.GoodsList.length; i++) {
        if (this.GoodsList[i].Id == subId) {
          if (this.WareHouseCapcity >= num) {
            var averagePrice = Math.floor(this.GoodsList[i].buyPrice * this.GoodsList[i].ownNum / (this.GoodsList[i].ownNum + num));
            this.GoodsList[i].ownNum += num;
            //仓库减少数值
            this.WareHouseCapcity -= num;
            Pdata.Id = subId;
            Pdata.buyPrice = averagePrice; //this.GoodsList[i].buyPrice;
            Pdata.ownNum = this.GoodsList[i].ownNum;
          }
          break;
        }
      }
    } else if (rewardType == RewardType.Car) {
      for (var i = 0; i < this.CarList.length; i++) {
        if (this.CarList[i].Id == subId) {
          this.CarList[i].ownNum += num;
          this.Reputation += this.CarList[i].addBonus;
          this.HpPoint += this.CarList[i].addHp;
          if (this.HpPoint > 100) this.HpPoint = 100;
          break;
        }
      }
    } else if (rewardType == RewardType.House) {
      for (var i = 0; i < this.HouseList.length; i++) {
        if (this.HouseList[i].Id == subId) {
          this.HouseList[i].ownNum += num;
          this.Reputation += this.HouseList[i].addBonus;
          this.HpPoint += this.HouseList[i].addHp;
          if (this.HpPoint > 100) this.HpPoint = 100;
          break;
        }
      }
    } else if (rewardType == RewardType.Stock) {
      for (var i = 0; i < this.CompanyList.length; i++) {
        if (this.CompanyList[i].Id == subId) {
          this.CompanyList[i].stockNum += num;
          Pdata.companyId = subId;
          break;
        }
      }
    } else if (rewardType == RewardType.StockPrice) {
      for (var i = 0; i < this.CompanyList.length; i++) {
        if (this.CompanyList[i].Id == subId) {
          if (this.CompanyList[i].stockNum > 0) {
            this.CompanyList[i].stockPrice += num;
            Pdata.companyId = subId;
            break;
          }
        }
      }
    }
    return Pdata;
  }
}, _cc$Class["JudeHasHouse"] = function JudeHasHouse(value) {
  var flag = false;
  if (value == 0) {
    for (var i = 0; i < this.HouseList.length; i++) {
      if (this.HouseList[i].ownNum > 0) {
        return true;
      }
    }
  } else {
    for (var i = 0; i < this.HouseList.length; i++) {
      if (this.HouseList[i].ownNum > 0 && value == this.HouseList[i].Id) {
        return true;
      }
    }
  }
  return flag;
}, _cc$Class["JudeHasCar"] = function JudeHasCar(value) {
  var flag = false;
  if (value == 0) {
    for (var i = 0; i < this.CarList.length; i++) {
      if (this.CarList[i].ownNum > 0) {
        return true;
      }
    }
  } else {
    for (var i = 0; i < this.CarList.length; i++) {
      if (this.CarList[i].ownNum > 0 && this.CarList[i].Id == value) {
        return true;
      }
    }
  }
  return flag;
}, _cc$Class.JudeAsset = function JudeAsset(needNum) {
  var flag = false;
  if (needNum <= this.AssetsMoney) {
    return true;
  }
  return flag;
}, _cc$Class.JudeReputation = function JudeReputation(needNum) {
  var flag = false;
  if (needNum <= this.Reputation) {
    return true;
  }
  return flag;
}, _cc$Class.JudeHpPoint = function JudeHpPoint(needNum) {
  var flag = false;
  if (needNum <= this.HpPoint) {
    return true;
  }
  return flag;
}, _cc$Class.JudeHasCompany = function JudeHasCompany() {
  return this.hasCompany;
}, _cc$Class.UnLockOneMate = function UnLockOneMate(unlockCond, offSex) {
  var Id = -1;
  for (var i = 0; i < this.MateList.length; i++) {
    //var dt = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Mate , this.MateList[i].Id);
    if (this.MateList[i].sex == offSex && this.MateList[i].canDate == false && this.MateList[i].unlockCond == unlockCond) {
      this.MateList[i].canDate = true;
      Id = this.MateList[i].Id;
      var param = {};
      param.icon = this.MateList[i].icon;
      param.des = cc.Mgr.global.getTranslation("UnLockMate_" + Id);
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenUnLockMate, param);
      return Id;
    }
  }
  return Id;
}, _cc$Class.UnLockMateByInHospital = function UnLockMateByInHospital(unlockCond, offSex) {
  var Id = -1;
  for (var i = 0; i < this.MateList.length; i++) {
    //var dt = cc.Mgr.MapDataMgr.getDataByItemTypeAndId(ItemType.Mate , this.MateList[i].Id);
    if (this.MateList[i].sex == offSex && this.MateList[i].canDate == false && this.MateList[i].unlockCond == unlockCond) {
      this.MateList[i].canDate = true;
      Id = this.MateList[i].Id;
      var param = {};
      param.icon = this.MateList[i].icon;
      param.des = cc.Mgr.global.getTranslation("UnLockMateByInHos");
      cc.director.GlobalEvent.emit(cc.Mgr.Event.OpenUnLockMate, param);
      return Id;
    }
  }
  return Id;
}, _cc$Class.JudeHasAnyMate = function JudeHasAnyMate() {
  var flag = false;
  for (var i = 0; i < this.MateList.length; i++) {
    //cc.log("是否已经结婚了 "+ this.MateList[i].Uplv);
    if (this.MateList[i].UpLv == true) {
      flag = true;
      return flag;
    }
  }
  return flag;
}, _cc$Class));
module.exports = UserDataMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29yZVxcVXNlckRhdGFNZ3IuanMiXSwibmFtZXMiOlsiSXRlbVR5cGUiLCJyZXF1aXJlIiwiUmV3YXJkVHlwZSIsIk1hdGVCb251c1R5cGUiLCJTa2lsbFR5cGUiLCJNYXRlVW5Mb2NrVHlwZSIsIk1hdGVHZXRUeXBlIiwiVXNlclN0YXRlIiwiQWNoaWV2ZUNvbmREYXRhIiwiQWNoaWV2ZUNvbmQiLCJTa2lsbFN0cnVjdCIsIkFjaGlldmVTdHJ1Y3QiLCJSZWNvcmRTdHJ1Y3QiLCJHb29kc1N0cnVjdCIsIkNhclN0cnVjdCIsIkhvdXNlU3RydWN0IiwiQ29tcGFueVN0cnVjdCIsIk1hdGVTdHJ1Y3QiLCJleW91Q2xpZW50VGlrdG9rIiwiZXlvdUNsaWVudEtzIiwiZXlvdUNsaWVudCIsImh0dHBVdGlsIiwiY3J5cHRvIiwiVXNlckRhdGFNZ3IiLCJjYyIsIkNsYXNzIiwiX2NjJENsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInVzZXJJZCIsInR1dG9yaWFsSW5CdXMiLCJ0dXRvcmlhbEluRGF0ZSIsInR1dG9yaWFsSW5NYXJrZXQiLCJ0dXRvcmlhbFN0b2NrQm9udXMiLCJ0dXRvcmlhbE1hdGVQb2ludCIsIlZpZGVvTGFzdFRpbWUiLCJWaWRlb0Fkc1RpbWVzIiwiSW50ZWdlciIsInBsYXlUaW1lcyIsInBsYXllck5hbWUiLCJTZXgiLCJTa2lsbExpc3QiLCJ0eXBlIiwiQWNoaWV2ZW1lbnRMaXN0IiwiUmVjb3JkTGlzdCIsIk1hcnJ5QWdlIiwiTWFycnlSb2xlSWQiLCJEaXZvcmNlQWdlIiwiRnVuZGF0aW9uQWdlIiwiRnVuZGF0aW9uQ29tcGFueUlkIiwiQmFua3J1cHRBZ2UiLCJNaWxsaW9uQWdlIiwiVGVuTWlsbGlvbkFnZSIsIkh1bmRyZWRNaWxsaW9uQWdlIiwiUmV0aXJlQWdlIiwiQmV0V2luUmF0aW8iLCJEYXRlU3VjY2VzY1JhdGlvIiwiSGlnaEFzc2V0cyIsIkluaXRNb25leSIsIkNhc2giLCJIcFBvaW50IiwiQWdlIiwiSG9ub3IiLCJSZXB1dGF0aW9uIiwiQXNzZXRzTW9uZXkiLCJXYXJlSG91c2VDYXBjaXR5IiwiV2FyZUhvdXNlQWxsQ2FwY2l0eSIsImhhc0NvbXBhbnkiLCJDYW5HZXRTdG9ja1Byb2ZpdCIsIlJlY292ZXJZZWFyIiwiU2tpbGxCb251c1BvaW50IiwiVHJlYXRCb251cyIsIldhcmVIb3VzZUNhcGNpdHlCb251cyIsIkNhc2hCb251cyIsIkNhc2hSYXRpb25Cb251cyIsIlJlcHV0YXRpb25Cb251cyIsIkhwUG9pbnRCb251cyIsIldhcmVIb3VzZUJvbnVzRXZlcnlZZWFyIiwiUmV0aXJlQm9udXMiLCJEYXRlQm9udXMiLCJJbml0TW9uZXlCb251cyIsIlN0b2NrQWRkQm9udXMiLCJTdG9ja1VwQm9udXMiLCJEYXRlTW9uZXlCb251cyIsIkJldEJvbnVzIiwiU2tpbGxQb2ludEdldEJvbnVzIiwiUmVwdXRhdGlvbkluaXRCb251cyIsIkNhckJ1eUJvbnVzIiwiRXZlbnRDb3N0Qm9udXMiLCJIb3VzZUJ1eUJvbnVzZSIsIkhpc3RvcnlIaWdoQXNzZXRzIiwidXNlclN0YXRlIiwiT0siLCJFdmVudERhdGFJZExpc3QiLCJHb29kc0xpc3QiLCJDYXJMaXN0IiwiSG91c2VMaXN0IiwiQ29tcGFueUxpc3QiLCJNYXRlTGlzdCIsIlNob3dHb29kc0xpc3QiLCJKdWRlR29vZHNPd25lZCIsIklkIiwiaSIsImxlbmd0aCIsIm93bk51bSIsIkNsZWFyU2hvd0dvb2RzTGlzdCIsInNwbGljZSIsIkluc2VydEdvb2RzSWRUb0xpc3QiLCJwdXNoIiwiQ2hlY2tJZElzSW5TaG93TGlzdCIsImZsYWciLCJpbml0RGF0YSIsIl90aGlzIiwiTWdyIiwiZ2xvYmFsIiwiSW5pdEV2ZW50SGFwcGVuQWdlIiwiaXNLdWFpU2hvdSIsImtzIiwic3lzIiwicGxhdGZvcm0iLCJCWVRFREFOQ0VfR0FNRSIsImdldElucyIsImluaXQiLCJpbml0UmVzcCIsImxvZ2luIiwibG9naW5SZXNwIiwidGlrdG9rR2FtZVZlcmlmeVNlc3Npb24iLCJkYXRhIiwiY29kZSIsInRoZW4iLCJ0aWt0b2tPcGVuSWQiLCJleGVjQWZ0ZXJPYnRhaW5BY2NvdW50IiwiZXJyIiwibG9nIiwiV0VDSEFUX0dBTUUiLCJ3ZWNoYXRHYW1lVmVyaWZ5U2Vzc2lvbiIsInd4T3BlbklkIiwiY29uc29sZSIsImt1YWlTaG91R2FtZVZlcmlmeVNlc3Npb24iLCJrc09wZW5JZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxT2JqIiwiZ2FtZUlkIiwicGxhdGZvcm1JZCIsInRpbWVTdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJzZWNTdHIiLCJzaWduU3RyIiwicmVwbGFjZUFsbCIsInNpZ24iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwicG9zdEpzb24iLCJyZXFGbGFnIiwicmVzcCIsInBvc3QiLCJTdG9yYWdlRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyZGF0YSIsIk1hcERhdGFNZ3IiLCJnZXREYXRhTGlzdEJ5SXRlbVR5cGUiLCJTa2lsbCIsInNrIiwibmFtZSIsImljb24iLCJkZXNJZCIsInN1YklkIiwiVXBsdiIsInVwTGV2ZWwiLCJza2lsbFR5cGUiLCJsZXZlbCIsIkFjaGlldmUiLCJhYyIsImhhc0ZpbmlzaCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0YSIsInBhcnNlIiwidGVzdERhdGUiLCJ0b0RhdGVTdHJpbmciLCJHZXRJbml0U2tpbGxCb251cyIsInJldGlyZUFnZSIsIlJldGlyZUluaXRBZ2UiLCJJbml0V2FyZUhvdXNlQ2FwY2l0eSIsIkdvb2RzIiwiYnV5UHJpY2UiLCJtYXJrZXRQcmljZSIsIkNhciIsInByaWNlIiwiYWRkQm9udXMiLCJhZGRIcCIsImFkZERhdGUiLCJIb3VzZSIsIkNvbXBhbnkiLCJib251c1JhdGlvIiwiaXNPd25lZCIsInN0b2NrTnVtIiwic3RvY2tDb3N0IiwiYmFua3J1cHRQcmljZSIsIm91dFByaWNlIiwic3RvY2tQcmljZSIsImluUHJpY2UiLCJMaW1pdFllYXIiLCJNYXRlIiwic2V4IiwiTG92ZVBvaW50IiwiY2FuRGF0ZSIsInVubG9ja0NvbmQiLCJOVUxMIiwiY3VyTGV2ZWwiLCJVcEx2IiwiRXZlbnRMaXN0IiwiRXZlbnREYXRhIiwic2tpbGxMaXN0IiwiYm9udXMiLCJnZXRTa2lsbEFkZEJvbnVzQnlUd29JZEFuZEx2IiwiV0xOUyIsIlRIWSIsIlhTSlkiLCJGR1pKIiwiR1NHTCIsIlRQR1MiLCJKWkNDIiwiTUxTWiIsIkRTIiwiTERZWiIsIk5TQ00iLCJRQ0RSIiwiSFlMTCIsIkRDWkoiLCJHZXRCb251c1Jld2FyZEV2ZXJ5WWVhciIsIkdldEV2ZW50RGF0YUFuZFNwbGljZUlkIiwibGVuIiwic2VlZCIsInJhbmRvbSIsIm91dCIsIlJlZnJlc2hIaXN0b3J5SGlnaEFzc2V0IiwiYXNzZXQiLCJTYXZlVXNlckRhdGEiLCJDcmVhdGVSZWNvcmQiLCJyZUQiLCJhc0x2IiwidGQiLCJhc3NldHMiLCJoaWdoQXNzZXRzIiwiVXBHcmFkZVNraWxsIiwidG9MdiIsImlzT2siLCJOZWVkQ29zdCIsImdldFVwZ3JhZGVDb3N0QnlUd29JZCIsIkNhblNob3dVcFRpcCIsIkZpbmlzaEFjaGlldmVtZW50IiwiQnV5R29vZHMiLCJSZWZlc2hEYXRhQWZ0ZXJCdXkiLCJTYWxlR29vZHMiLCJSZWZlc2hEYXRhQWZ0ZXJTYWxlIiwiQ3JlYXRlQ29tcGFueSIsIlJlZnJlc2hEYXRhQWZ0ZXJPcGVyIiwiQ2hlY2tPd25lZEdvb2RzTnVtIiwiTnVtIiwiSXNmdWxsIiwiQnV5U3RvY2tzIiwiU2FsZVN0b2NrcyIsIlJlZnJlc2hEYXRhQWZ0ZXJTYWxlIiwiQnV5U2FsZUNvbW1vbkl0ZW0iLCJUeXBlIiwiUmVmcmVzaERhdGEiLCJhZGROdW0iLCJSZWZyZXNoTWF0ZURhdGEiLCJSZWZyZXNoQWZ0ZXJMdlVwIiwiRGlzdm9yY2VNYXRlQnlJZCIsIlJldHVybkluaXRTdGF0ZSIsImdldERhdGFCeUl0ZW1UeXBlQW5kSWQiLCJEZWxldGVNYXRlQm9udXNSZXdhcmQiLCJib251c0xpc3QiLCJEaXN2b3JjZURlbFN0b2NrcyIsIlJlZnJlc2hEYXRhQWZ0ZXJEaXN2b3JjZSIsImdldE1hdGVCb251c1Jld2FyZCIsImR0IiwiYm9udXNUeXBlIiwiSFAiLCJib251c051bSIsIk1vbmV5IiwiVHJlYXQiLCJnZXRPd25EYXRhTGlzdEJ5VHlwZSIsIml0ZW1UeXBlIiwiZGF0YUxpc3QiLCJSZWZyZXNoR29vZHNNYXJLZXRQcmljZSIsIlJlZnJlc2hTdG9ja0RhdGEiLCJwYXJhbSIsImdldEdvb2RzRGF0YUJ5SWQiLCJSZWZyZXNoVXNlckFzc2V0cyIsImNhY3VsYXRlU3RvY2siLCJsYXN0QXNzZXQiLCJkYSIsIkp1ZGVGaW5pc2hBbnlBY2hpZXZlbWVudCIsIkFzc2V0RXhwbG9yUmF0ZSIsIkFzc2V0RXhwbG9yRG93blJhdGUiLCJOb3RPSyIsIkFzc2V0QnVyZGVuIiwiSGVhbHRoTGluZSIsImdvVG9Ib3NwaXRhbCIsIlllYXJSZWNvdmVyIiwiZm9yV2hhdCIsInRleHQiLCJnZXRUcmFuc2xhdGlvbiIsImRpcmVjdG9yIiwiR2xvYmFsRXZlbnQiLCJlbWl0IiwiRXZlbnQiLCJPcGVuQ29tbW9uVGlwIiwiYWNEIiwiY29uZExpc3QiLCJmaW5pc2hlZCIsIkp1ZGVDYW5GaW5pc2hBY2hpZXZlbWVudEJ5Q29uZCIsIkNhY3VsYXRlUmVwdXRhdGlvbkZyb21Db21wYW55IiwiSGFzQ29tcGFueVJlcHV0YXRpb25BZGQiLCJmaW5pc2hlZExpc3QiLCJjb25kIiwiY29uZFR5cGUiLCJ2YWx1ZSIsIkFzc2V0TW9uZXlVcCIsIkp1ZGVBc3NldENvbmQiLCJJbkhvc3BpdGFsIiwiSnVkZWdvVG9Ib3NUaW1lc0NvbmQiLCJCYW5rcnVwdCIsIkp1ZGVCYW5rcnVwdFRpbWVzQ29uZCIsIkNyZWF0ZUJ1c2luZXNzIiwiSnVkZUNyZWF0ZUNvbXBhbnlDb25kIiwiQWdlQ29uZCIsIkp1ZGVBZ2VDb25kIiwiSGFzTWFycnlDb25kIiwiSnVkZUhhc01hcnJ5Q29uZCIsIkxvdmVQb2ludENvbmQiLCJKdWRlTG92ZVBvaW50Q29uZCIsIkFzc2V0TW9uZXlEb3duIiwiSnVkZUFzc2V0RG93bkNvbmQiLCJOb01hcnJ5Q29uZCIsIkp1ZGVOb3RNYXJyeUNvbmQiLCJBZ2VDb25kVXAiLCJKdWRlQWdlQ29uZFVwIiwiQmFua3J1cHRUaW1lcyIsIkNyZWF0ZUNvbXBhbnlUaW1lcyIsIkp1ZGVIYXNDYXIiLCJKdWRlSGFzQ2FyQnlJZCIsIkp1ZGVIYXNIb3VzZSIsIkp1ZGVIYXNIb3VzZUJ5SWQiLCJudW0iLCJSZWZyZXNoVXNlckFnZSIsInVzZVJldGlyZUFkcyIsIlVzZVJldGlyZUFkc1NraWxsIiwiUmV0aXJlIiwiUmVmcmVzaEhlYWx0aEhwIiwiSGVhbHRoU3ViQWdlIiwiZ2V0U2tpbGxEYXRhQnlUd29JZCIsImdldFNraWxsTGlzdEJ5SWQiLCJHZXRPckNvc3REYXRhQnlSZXdhcmRUeXBlIiwicmV3YXJkVHlwZSIsIlBkYXRhIiwiY29tcGFueUlkIiwiYXZlcmFnZVByaWNlIiwiU3RvY2siLCJTdG9ja1ByaWNlIiwiSnVkZUFzc2V0IiwibmVlZE51bSIsIkp1ZGVSZXB1dGF0aW9uIiwiSnVkZUhwUG9pbnQiLCJKdWRlSGFzQ29tcGFueSIsIlVuTG9ja09uZU1hdGUiLCJvZmZTZXgiLCJkZXMiLCJPcGVuVW5Mb2NrTWF0ZSIsIlVuTG9ja01hdGVCeUluSG9zcGl0YWwiLCJKdWRlSGFzQW55TWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUUsYUFBYSxHQUFHRixPQUFPLENBQUMsZUFBZSxDQUFDO0FBQzVDLElBQUlHLFNBQVMsR0FBR0gsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJSSxjQUFjLEdBQUdKLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5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LE1BQU0sQ0FBQ3VNLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztNQUM3RGpTLEVBQUUsQ0FBQ2tTLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUNwUyxFQUFFLENBQUN5RixHQUFHLENBQUM0TSxLQUFLLENBQUM4RCxjQUFjLEVBQUVsRixLQUFLLENBQUM7TUFDN0QsT0FBT3BNLEVBQUU7SUFDVjtFQUNEO0VBQ0EsT0FBT0EsRUFBRTtBQUNWLENBQUMsRUFBQTNFLFNBQUEsQ0FFRG1XLGNBQWMsR0FBQyxTQUFBQSxlQUFBLEVBQVU7RUFDeEIsSUFBSS9RLElBQUksR0FBRyxLQUFLO0VBQ2hCLEtBQUssSUFBSVIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzlDO0lBQ0EsSUFBRyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNvSCxJQUFJLElBQUksSUFBSSxFQUNoQztNQUNDNUcsSUFBSSxHQUFHLElBQUk7TUFDWCxPQUFPQSxJQUFJO0lBQ1o7RUFDRDtFQUNBLE9BQU9BLElBQUk7QUFDWixDQUFDLEVBQUFwRixTQUFBLEVBRUg7QUFFRm9XLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHeFcsV0FBVyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW1UeXBlID0gcmVxdWlyZShcIkl0ZW1UeXBlXCIpO1xyXG52YXIgUmV3YXJkVHlwZSA9IHJlcXVpcmUoXCJSZXdhcmRUeXBlXCIpO1xyXG52YXIgTWF0ZUJvbnVzVHlwZSA9IHJlcXVpcmUoXCJNYXRlQm9udXNUeXBlXCIpO1xyXG52YXIgU2tpbGxUeXBlID0gcmVxdWlyZShcIlNraWxsVHlwZVwiKTtcclxudmFyIE1hdGVVbkxvY2tUeXBlID0gcmVxdWlyZShcIk1hdGVVbkxvY2tUeXBlXCIpO1xyXG52YXIgTWF0ZUdldFR5cGUgPSByZXF1aXJlKFwiTWF0ZUdldFR5cGVcIik7XHJcbnZhciBVc2VyU3RhdGUgPSByZXF1aXJlKFwiVXNlclN0YXRlXCIpO1xyXG52YXIgQWNoaWV2ZUNvbmREYXRhID0gcmVxdWlyZShcIkFjaGlldmVDb25kRGF0YVwiKTtcclxudmFyIEFjaGlldmVDb25kID0gcmVxdWlyZShcIkFjaGlldmVDb25kXCIpO1xyXG5cclxuLy/ku6XkuIvnmoTmlbDmja7opoHlgZrmsLjkuYXkv53lrZhcclxudmFyIFNraWxsU3RydWN0ID0gcmVxdWlyZShcIlNraWxsU3RydWN0XCIpO1xyXG52YXIgQWNoaWV2ZVN0cnVjdCA9IHJlcXVpcmUoXCJBY2hpZXZlU3RydWN0XCIpO1xyXG52YXIgUmVjb3JkU3RydWN0ID0gcmVxdWlyZShcIlJlY29yZFN0cnVjdFwiKTtcclxuLy/kuIvpnaLnmoTmlbDlgLzmmK/kuI3kvJrmsLjkuYXkv53lrZjnmoQgIOaMh+WPquS8muW9k+WxgOa4uOaIj+S/neWtmFxyXG52YXIgR29vZHNTdHJ1Y3QgPSByZXF1aXJlKFwiR29vZHNTdHJ1Y3RcIik7XHJcbnZhciBDYXJTdHJ1Y3QgPSByZXF1aXJlKFwiQ2FyU3RydWN0XCIpO1xyXG52YXIgSG91c2VTdHJ1Y3QgPSByZXF1aXJlKFwiSG91c2VTdHJ1Y3RcIik7XHJcbnZhciBDb21wYW55U3RydWN0ID0gcmVxdWlyZShcIkNvbXBhbnlTdHJ1Y3RcIik7XHJcbnZhciBNYXRlU3RydWN0ID0gcmVxdWlyZShcIk1hdGVTdHJ1Y3RcIik7XHJcblxyXG52YXIgZXlvdUNsaWVudFRpa3RvayA9IHJlcXVpcmUoXCJFeW91Q2xpZW50VGlrdG9rXCIpO1xyXG52YXIgZXlvdUNsaWVudEtzID0gcmVxdWlyZShcIkV5b3VDbGllbnRLc1wiKTtcclxudmFyIGV5b3VDbGllbnQgPSByZXF1aXJlKFwiZXlvdUNsaWVudFwiKTtcclxudmFyIGh0dHBVdGlsID0gcmVxdWlyZShcImh0dHBVdGlsXCIpO1xyXG52YXIgY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcclxuXHJcbi8v5pWw5o2u5pON5L2c57uT5p6EXHJcbnZhciBVc2VyRGF0YU1nciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOntcclxuICAgIFx0Ly/mnKzlnLDkv53lrZjmlbDmja5cclxuXHRcdHVzZXJJZDogXCJcIixcclxuXHJcbiAgICBcdHR1dG9yaWFsSW5CdXM6ZmFsc2UsXHJcbiAgICBcdHR1dG9yaWFsSW5EYXRlOmZhbHNlLFxyXG4gICAgXHR0dXRvcmlhbEluTWFya2V0OmZhbHNlLFxyXG4gICAgXHR0dXRvcmlhbFN0b2NrQm9udXM6ZmFsc2UsXHJcbiAgICBcdHR1dG9yaWFsTWF0ZVBvaW50OmZhbHNlLFxyXG5cclxuICAgIFx0VmlkZW9MYXN0VGltZTpcIlwiLC8v5q+P5aSp55yL6KeG6aKR5pe26Ze06K6w5b2VXHJcbiAgICBcdFZpZGVvQWRzVGltZXM6Y2MuSW50ZWdlciwvL+asoeaVsFxyXG5cclxuICAgIFx0cGxheVRpbWVzOmNjLkludGVnZXIsLy/muLjmiI/mrKHmlbBcclxuXHRcdHBsYXllck5hbWU6XCJBbGV4XCIsXHJcblx0XHRTZXg6Y2MuSW50ZWdlciwgLy8xIG1hbiAgMiB3b21hblxyXG4gICAgICAgIFNraWxsTGlzdDp7XHJcbiAgICAgICAgXHRkZWZhdWx0OltdLFxyXG4gICAgICAgIFx0dHlwZTpbU2tpbGxTdHJ1Y3RdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRMaXN0OntcclxuICAgICAgICBcdGRlZmF1bHQ6W10sXHJcbiAgICAgICAgXHR0eXBlOltBY2hpZXZlU3RydWN0XSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBSZWNvcmRMaXN0OntcclxuICAgICAgICBcdGRlZmF1bHQ6W10sXHJcbiAgICAgICAgXHR0eXBlOltSZWNvcmRTdHJ1Y3RdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE1hcnJ5QWdlOmNjLkludGVnZXIsXHJcbiAgICAgICAgTWFycnlSb2xlSWQ6Y2MuSW50ZWdlcixcclxuICAgICAgICBEaXZvcmNlQWdlOmNjLkludGVnZXIsXHJcbiAgICAgICAgRnVuZGF0aW9uQWdlOmNjLkludGVnZXIsXHJcbiAgICAgICAgRnVuZGF0aW9uQ29tcGFueUlkOmNjLkludGVnZXIsXHJcbiAgICAgICAgQmFua3J1cHRBZ2U6Y2MuSW50ZWdlcixcclxuICAgICAgICBNaWxsaW9uQWdlOmNjLkludGVnZXIsXHJcbiAgICAgICAgVGVuTWlsbGlvbkFnZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIEh1bmRyZWRNaWxsaW9uQWdlOmNjLkludGVnZXIsXHJcblxyXG4gICAgICAgIC8v6Z2e5pys5Zyw5L+d5a2Y5pWw5o2uXHJcbiAgICAgICAgUmV0aXJlQWdlOmNjLkludGVnZXIsIC8v6YCA5LyR5bm06b6EIOi/meS4quWAvOi3n+aIkOWwseacieWFs1xyXG4gICAgICAgIEJldFdpblJhdGlvOjAuMTUsIC8v6LOt5Y2a6LSP5qaC546HXHJcbiAgICAgICAgRGF0ZVN1Y2Nlc2NSYXRpbzowLjIsIC8v57SE5pyD5oiQ5Yqf5qaC546HXHJcbiAgICAgICAgLy9CZXRDb3N0OmNjLkludGVnZXIsLy/otYzljZroirHotLlcclxuICAgICAgICBIaWdoQXNzZXRzOmNjLkludGVnZXIsLy/otYTkuqflt4Xls7DlgLxcclxuICAgICAgICBJbml0TW9uZXk6Y2MuSW50ZWdlciwvL+WImuWHuuadpemXr+iNoeaXtuWAmeeahOaJgOaciei1hOS6p1xyXG4gICAgICAgIENhc2g6Y2MuSW50ZWdlciwvL+eOsOmHkVxyXG5cdFx0SHBQb2ludDpjYy5JbnRlZ2VyLC8v5YGl5bq35oyH5pWwXHJcblx0XHRBZ2U6Y2MuSW50ZWdlciwvL+W5tOm+hFxyXG5cdFx0SG9ub3I6Y2MuSW50ZWdlciwgLy/lpLTooZQgMSDnmb7kuIflr4znv4Eg562J562JICDov5nkuKrlnKjnjqnliLDkuIDkur/lhYPkuYvlkI7kvJrmnInmlrDnmoTnjqnmhI9cclxuXHRcdFJlcHV0YXRpb246Y2MuSW50ZWdlciwgLy/lkI3lo7DmjIfmlbBcclxuXHRcdEFzc2V0c01vbmV5OmNjLkludGVnZXIsIC8v5oC76LWE5LqnXHJcblx0XHRXYXJlSG91c2VDYXBjaXR5OmNjLkludGVnZXIsLy/ku5PlupPliankvZnlrrnph49cclxuXHRcdFdhcmVIb3VzZUFsbENhcGNpdHk6Y2MuSW50ZWdlciwvL+S7k+W6k+aAu+WuuemHj1xyXG5cdFx0aGFzQ29tcGFueTpmYWxzZSwvL+aYr+WQpuW3sue7j+WIm+WKnuWFrOWPuFxyXG5cdFx0Q2FuR2V0U3RvY2tQcm9maXQ6ZmFsc2UsIC8v6IO95ZCm6K6h566X6IKh56Wo5pS255uK5LqGXHJcblx0XHRSZWNvdmVyWWVhcjowLC8vIOS7juaBouWkjeWBpeW6tyDliankvZnlubTpmZBcclxuXHJcblx0XHRTa2lsbEJvbnVzUG9pbnQ6MCwvL+aKgOiDveeCuVxyXG5cclxuXHRcdC8v5Yqg5oiQ54K5IOS8tOS+o+WKoOaIkCAg5oqA6IO95Yqg5oiQIFxyXG5cdFx0VHJlYXRCb251czogMC4wLCAvL+ayu+eWl+iKsei0uemZjeS9jueZvuWIhueCuVxyXG5cdFx0V2FyZUhvdXNlQ2FwY2l0eUJvbnVzOjAsIC8v5LuT5YKo5Yqg5oiQXHJcblx0XHRDYXNoQm9udXM6MCwgLy/ph5HpkrHliqDmiJAg5q+P5bm05Yqg5oiQXHJcblx0XHRDYXNoUmF0aW9uQm9udXM6MCxcclxuXHRcdFJlcHV0YXRpb25Cb251czowLCAvL+WQjeWjsOWKoOaIkCDmr4/lubRcclxuXHRcdEhwUG9pbnRCb251czowLCAvL+WBpeW6t+WKoOaIkFxyXG5cdFx0V2FyZUhvdXNlQm9udXNFdmVyeVllYXI6MCwgLy/mr4/lubTnmoTku5PlgqjliqDmiJBcclxuXHRcdFJldGlyZUJvbnVzOjAsIC8v5aKe5Yqg6YCA5LyR5bm06ZmQXHJcblx0XHREYXRlQm9udXM6MC4wLCAvL+WinuWKoOe6puS8muaIkOWKn+amgueOh1xyXG5cdFx0SW5pdE1vbmV5Qm9udXM6MCwvL+WinuWKoOWIneWni+eOsOmHkVxyXG5cdFx0U3RvY2tBZGRCb251czowLjAsIC8v5aKe5Yqg5YWs5Y+45pS255uKXHJcblx0XHRTdG9ja1VwQm9udXM6MC4wLCAvL+iCoeelqOS4iua2qCDmpoLnjoflop7liqBcclxuXHRcdERhdGVNb25leUJvbnVzOjAuMCwgLy/nuqbkvJroirHotLnpmY3kvY5cclxuXHRcdEJldEJvbnVzOjAuMCwgLy/otYzljZrotaLpkrHmpoLnjofkuIrljYdcclxuXHRcdFNraWxsUG9pbnRHZXRCb251czowLjAgLC8v57uT566X5oqA6IO954K56I635b6X5o+Q5Y2HXHJcblx0XHRSZXB1dGF0aW9uSW5pdEJvbnVzOjAsIC8v5Yid5aeL5ZCN5aOw5Yqg5oiQXHJcblx0XHRDYXJCdXlCb251czowLCAvL+i0reS5sOaxvei9puS7t+agvOmZjeS9jlxyXG5cdFx0RXZlbnRDb3N0Qm9udXM6MCwgLy/kuovku7bmtojogJfph5HpkrHpmY3kvY5cclxuXHRcdEhvdXNlQnV5Qm9udXNlOjAsIC8v6LSt5Lmw5oi/5bGLIOS7t+agvOmZjeS9jlxyXG5cclxuXHRcdEhpc3RvcnlIaWdoQXNzZXRzOjAsLy8g6K6w5b2V5Y6G5Y+y6YCA5LyR5pyA6auY6LWE5LqnXHJcblxyXG5cdFx0dXNlclN0YXRlOntcclxuXHRcdFx0ZGVmYXVsdDpVc2VyU3RhdGUuT0ssXHJcblx0XHRcdHR5cGU6VXNlclN0YXRlLFxyXG5cdFx0fSwvLyDnjqnlrrbnirbmgIFcclxuXHJcblx0XHRFdmVudERhdGFJZExpc3Q6e1xyXG5cdFx0XHRkZWZhdWx0OltdLFxyXG5cdFx0XHR0eXBlOltjYy5JbnRlZ2VyXSxcclxuXHRcdH0sLy/kuovku7blvLnlh7ogSWTliJfooahcclxuXHJcblx0XHRHb29kc0xpc3Q6e1xyXG5cdFx0XHRkZWZhdWx0OltdLFxyXG5cdFx0XHR0eXBlOltHb29kc1N0cnVjdF0sXHJcblx0XHR9LFxyXG5cdFx0Q2FyTGlzdDp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W0NhclN0cnVjdF0sXHJcblx0XHR9LFxyXG5cdFx0SG91c2VMaXN0OntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbSG91c2VTdHJ1Y3RdLFxyXG5cdFx0fSxcclxuXHRcdENvbXBhbnlMaXN0OntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbQ29tcGFueVN0cnVjdF0sXHJcblx0XHR9LFxyXG5cdFx0TWF0ZUxpc3Q6e1xyXG5cdFx0XHRkZWZhdWx0OltdLFxyXG5cdFx0XHR0eXBlOltNYXRlU3RydWN0XSxcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lvZPliY3mmL7npLrnmoTkupTkuKrnianlk4Eg5q+P5qyh5Y+q5pi+56S65LqU5Liq54mp5ZOBICDlj6rkv53lrZggSWRcclxuXHRcdFNob3dHb29kc0xpc3Q6e1xyXG5cdFx0XHRkZWZhdWx0OltdLFxyXG5cdFx0XHR0eXBlOltjYy5JbnRlZ2VyXSxcclxuXHRcdH0sXHJcblxyXG5cdH0sXHJcblxyXG5cdEp1ZGVHb29kc093bmVkOmZ1bmN0aW9uKElkKXtcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkdvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZih0aGlzLkdvb2RzTGlzdFtpXS5JZCA9PSBJZCAmJiB0aGlzLkdvb2RzTGlzdFtpXS5vd25OdW0gPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvL+a4heeQhuW4guWcuuaYvuekuuaVsOaNrlxyXG5cdENsZWFyU2hvd0dvb2RzTGlzdDpmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5TaG93R29vZHNMaXN0LnNwbGljZSgwLCB0aGlzLlNob3dHb29kc0xpc3QubGVuZ3RoKTtcclxuXHR9LFxyXG5cclxuXHQvL+WQkeaYvuekuuaVsOe7hOS4reaPkuWFpeS4gOS4qiDmmL7npLrmlbDmja4gSWRcclxuXHRJbnNlcnRHb29kc0lkVG9MaXN0OmZ1bmN0aW9uKElkKXtcclxuXHRcdHRoaXMuU2hvd0dvb2RzTGlzdC5wdXNoKElkKTtcclxuXHR9LFxyXG5cdC8v5qOA5p+lSWQg5piv5ZCm5b2T5YmN5pi+56S6XHJcblx0Q2hlY2tJZElzSW5TaG93TGlzdDpmdW5jdGlvbihJZCl7XHJcblx0XHR2YXIgZmxhZyA9IGZhbHNlO1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuU2hvd0dvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZih0aGlzLlNob3dHb29kc0xpc3RbaV0gPT0gSWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZsYWc7XHJcblx0fSxcclxuXHJcblx0aW5pdERhdGE6ZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2MuTWdyLmluaXREYXRhID0gZmFsc2U7XHJcblx0XHR0aGlzLnVzZXJTdGF0ZSA9IFVzZXJTdGF0ZS5PSzsvL+WBpeW6t+eKtuaAgVxyXG5cclxuXHRcdGNjLk1nci5nbG9iYWwuSW5pdEV2ZW50SGFwcGVuQWdlKCk7XHJcblxyXG5cdFx0aWYgKCFjYy5NZ3IuVXNlckRhdGFNZ3IudXNlcklkKSB7XHJcblx0XHRcdGxldCBpc0t1YWlTaG91ID0gZmFsc2U7XHJcblx0XHRcdGlmICh0eXBlb2Yga3MgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0Ly/ov5DooYzlnKjlv6vmiYvlubPlj7BcclxuXHRcdFx0XHRpc0t1YWlTaG91ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQllURURBTkNFX0dBTUUpIHtcclxuXHRcdFx0XHRleW91Q2xpZW50VGlrdG9rLmdldElucygpLmluaXQoOTAwMDAwOSwgaW5pdFJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0ZXlvdUNsaWVudFRpa3Rvay5nZXRJbnMoKS5sb2dpbihsb2dpblJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRpa3Rva0dhbWVWZXJpZnlTZXNzaW9uKGxvZ2luUmVzcC5kYXRhLmNvZGUpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4odGlrdG9rT3BlbklkID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZXhlY0FmdGVyT2J0YWluQWNjb3VudCh0aWt0b2tPcGVuSWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuTWdyLmluaXREYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY2MubG9nKCfnmbvlvZXlpLHotKU6PicsIGVycikpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9ZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIWlzS3VhaVNob3UpIHtcclxuXHRcdFx0XHRleW91Q2xpZW50LmdldElucygpLmluaXQoOTAwMDAyMSwgaW5pdFJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0ZXlvdUNsaWVudC5nZXRJbnMoKS5sb2dpbihsb2dpblJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndlY2hhdEdhbWVWZXJpZnlTZXNzaW9uKGxvZ2luUmVzcC5kYXRhLmNvZGUpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4od3hPcGVuSWQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5leGVjQWZ0ZXJPYnRhaW5BY2NvdW50KHd4T3BlbklkKVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuTWdyLmluaXREYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ+eZu+W9leWksei0pTo+JywgZXJyKSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1lbHNlIGlmIChpc0t1YWlTaG91KXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIui/kOihjOWcqOW/q+aJi+W5s+WPsFwiKVxyXG5cdFx0XHRcdGV5b3VDbGllbnRLcy5nZXRJbnMoKS5pbml0KDkwMDAwMDUsIGluaXRSZXNwID0+IHtcclxuXHRcdFx0XHRcdGV5b3VDbGllbnRLcy5nZXRJbnMoKS5sb2dpbihsb2dpblJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmt1YWlTaG91R2FtZVZlcmlmeVNlc3Npb24obG9naW5SZXNwLmRhdGEuY29kZSlcclxuXHRcdFx0XHRcdFx0XHQudGhlbihrc09wZW5JZCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmV4ZWNBZnRlck9idGFpbkFjY291bnQoa3NPcGVuSWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuTWdyLmluaXREYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY2MubG9nKCfnmbvlvZXlpLHotKU6PicsIGVycikpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmV4ZWNBZnRlck9idGFpbkFjY291bnQoJ2RlZmF1bHQnKVxyXG5cdFx0Y2MuTWdyLmluaXREYXRhID0gdHJ1ZTtcclxuXHR9LFxyXG5cclxuXHR0aWt0b2tHYW1lVmVyaWZ5U2Vzc2lvbihjb2RlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgcmVxT2JqID0ge1xyXG5cdFx0XHRcdGdhbWVJZDogOTAwMDAwOSxcclxuXHRcdFx0XHRwbGF0Zm9ybUlkOiAyLFxyXG5cdFx0XHRcdGNvZGU6IGNvZGUsXHJcblx0XHRcdFx0dGltZVN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBzZWNTdHIgPSBcImMtYS0wLTAtMS02LWUtNi1lLWUtYy1lLWEtNi0yLWUtYi1kLTEtYS1kLWUtYS0zLWYtNy1lLTItZi1jLWItZi1jLTEtYi04LTYtZC00LTJcIlxyXG5cdFx0XHRsZXQgc2lnblN0ciA9IHJlcU9iai5nYW1lSWQgKyBcIi1cIiArIHJlcU9iai5wbGF0Zm9ybUlkICsgXCItXCIgKyByZXFPYmouY29kZSArIFwiLVwiICsgcmVxT2JqLnRpbWVTdGFtcCArIFwiLVwiICsgc2VjU3RyLnJlcGxhY2VBbGwoXCItXCIsIFwiXCIpO1xyXG5cdFx0XHRyZXFPYmouc2lnbiA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2lnblN0ciwgJ3V0ZjgnKS5kaWdlc3QoJ2hleCcpO1xyXG5cdFx0XHRodHRwVXRpbC5wb3N0SnNvbihcclxuXHRcdFx0XHRcImh0dHBzOi8vZ2FtZXMuaG5kaWJlaS5jb20vbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL3Rpa3Rva1NlcnZlci92ZXJpZnlTZXNzaW9uXCIsXHJcblx0XHRcdFx0cmVxT2JqLFxyXG5cdFx0XHRcdChyZXFGbGFnLCByZXNwKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVxRmxhZyAmJiByZXNwLmNvZGUgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwLmRhdGEudXNlcklkKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3ApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHdlY2hhdEdhbWVWZXJpZnlTZXNzaW9uKGNvZGUpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGxldCByZXFPYmogPSB7XHJcblx0XHRcdFx0Z2FtZUlkOiA5MDAwMDIxLFxyXG5cdFx0XHRcdHBsYXRmb3JtSWQ6IDEsXHJcblx0XHRcdFx0Y29kZTogY29kZSxcclxuXHRcdFx0XHR0aW1lU3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gbGV0IHNlY1N0ciA9IFwiNS02LWUtMy0yLTItOS1jLTUtYi0zLTItMi1mLTItNy01LWUtOC1jLWUtYi0zLTgtYy1iLTYtMS0yLTUtZC1hXCIgLy/pppblr4zlhbvmiJDorrBcclxuXHRcdFx0bGV0IHNlY1N0ciA9IFwiOS0xLWUtMS0zLWEtNy1hLTUtMy01LTEtYy01LTItYS0zLTktOS0zLTMtNC03LTItMS01LTUtNC0yLTktNS0zXCIgLy/nlq/ni4LmjKrovabnjotcclxuXHRcdFx0bGV0IHNpZ25TdHIgPSByZXFPYmouZ2FtZUlkICsgXCItXCIgKyByZXFPYmoucGxhdGZvcm1JZCArIFwiLVwiICsgcmVxT2JqLmNvZGUgKyBcIi1cIiArIHJlcU9iai50aW1lU3RhbXAgKyBcIi1cIiArIHNlY1N0ci5yZXBsYWNlQWxsKFwiLVwiLCBcIlwiKTtcclxuXHRcdFx0cmVxT2JqLnNpZ24gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNpZ25TdHIsICd1dGY4JykuZGlnZXN0KCdoZXgnKTtcclxuXHRcdFx0aHR0cFV0aWwucG9zdEpzb24oXHJcblx0XHRcdFx0XCJodHRwczovL2dhbWVzLmhuZGliZWkuY29tL21hcmtldC13ZWNoYXQtZ2FtZS1zZXJ2ZXIvd3hTZXJ2ZXIvdmVyaWZ5U2Vzc2lvblwiLFxyXG5cdFx0XHRcdHJlcU9iaixcclxuXHRcdFx0XHQocmVxRmxhZywgcmVzcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcUZsYWcgJiYgcmVzcC5jb2RlID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzcC5kYXRhLnVzZXJJZClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlamVjdChyZXNwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRrdWFpU2hvdUdhbWVWZXJpZnlTZXNzaW9uKGNvZGUpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGxldCByZXFPYmogPSB7XHJcblx0XHRcdFx0Z2FtZUlkOiA5MDAwMDA1LFxyXG5cdFx0XHRcdHBsYXRmb3JtSWQ6IDksXHJcblx0XHRcdFx0Y29kZTogY29kZSxcclxuXHRcdFx0XHR0aW1lU3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHNlY1N0ciA9IFwia2tpNkUwRVFXbmlnTFl2MjcyeklSQVwiXHJcblx0XHRcdGxldCBzaWduU3RyID0gcmVxT2JqLmdhbWVJZCArIFwiLVwiICsgcmVxT2JqLnBsYXRmb3JtSWQgKyBcIi1cIiArIHJlcU9iai5jb2RlICsgXCItXCIgKyByZXFPYmoudGltZVN0YW1wICsgXCItXCIgKyBzZWNTdHIucmVwbGFjZUFsbChcIi1cIiwgXCJcIik7XHJcblx0XHRcdHJlcU9iai5zaWduID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzaWduU3RyLCAndXRmOCcpLmRpZ2VzdCgnaGV4Jyk7XHJcblx0XHRcdGh0dHBVdGlsLnBvc3QoXHJcblx0XHRcdFx0XCJodHRwczovL2dhbWVzLmhuZGliZWkuY29tL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdVNlcnZlci92ZXJpZnlTZXNzaW9uXCIsXHJcblx0XHRcdFx0cmVxT2JqLFxyXG5cdFx0XHRcdChyZXFGbGFnLCByZXNwKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVxRmxhZyAmJiByZXNwLmNvZGUgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwLmRhdGEudXNlcklkKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3ApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cclxuXHRleGVjQWZ0ZXJPYnRhaW5BY2NvdW50KHVzZXJJZCkge1xyXG5cdFx0dGhpcy51c2VySWQgPSB1c2VySWQ7XHJcblxyXG5cdFx0Ly/mnKzlnLDlrZjlgqjmlbDmja5cclxuXHRcdHZhciBTdG9yYWdlRGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnWE1CX3VzZXJkYXRhXycgKyB0aGlzLnVzZXJJZCk7IC8v5L2c5Li65LiA5Liq5pW05L2T5L+d5a2Y6LW35p2lXHJcblx0XHRpZihTdG9yYWdlRGF0YSA9PSBudWxsIHx8IFN0b3JhZ2VEYXRhID09IFwiXCIpXHJcblx0XHR7XHJcblx0XHRcdC8vY2MubG9nKFwi6L+Y5rKh5pyJ5L+d5a2Y6L+H5oyB5LmF5pWw5o2uXCIpO1xyXG5cdFx0XHR2YXIgdXNlcmRhdGEgPSB7fTtcclxuXHRcdFx0dXNlcmRhdGEuU2tpbGxMaXN0ID0gbnVsbDtcclxuXHRcdFx0dXNlcmRhdGEuQWNoaWV2ZW1lbnRMaXN0ID0gbnVsbDtcclxuXHRcdFx0dXNlcmRhdGEucGxheWVyTmFtZSA9IFwiXCI7XHJcblx0XHRcdHVzZXJkYXRhLlNleCA9IDE7XHJcblx0XHRcdHVzZXJkYXRhLnBsYXlUaW1lcyA9IDA7XHJcblx0XHRcdHVzZXJkYXRhLlNraWxsQm9udXNQb2ludCA9IDA7XHJcblxyXG5cdFx0XHR1c2VyZGF0YS50dXRvcmlhbEluQnVzID0gZmFsc2U7XHJcblx0XHRcdHVzZXJkYXRhLnR1dG9yaWFsSW5EYXRlID0gZmFsc2U7XHJcblx0XHRcdHVzZXJkYXRhLnR1dG9yaWFsSW5NYXJrZXQgPSBmYWxzZTtcclxuXHRcdFx0dXNlcmRhdGEudHV0b3JpYWxTdG9ja0JvbnVzID0gZmFsc2U7XHJcblx0XHRcdHVzZXJkYXRhLnR1dG9yaWFsTWF0ZVBvaW50ID0gZmFsc2U7XHJcblxyXG5cdFx0XHR1c2VyZGF0YS5WaWRlb0Fkc1RpbWVzID0gMDtcclxuXHRcdFx0dXNlcmRhdGEuVmlkZW9MYXN0VGltZSA9IFwiXCI7XHJcblx0XHRcdHVzZXJkYXRhLkhpc3RvcnlIaWdoQXNzZXRzID0gMDtcclxuXHJcblx0XHRcdHRoaXMuVmlkZW9MYXN0VGltZSA9IFwiXCI7XHJcblx0XHRcdHRoaXMuVmlkZW9BZHNUaW1lcyA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllck5hbWUgPSB1c2VyZGF0YS5wbGF5ZXJOYW1lO1xyXG5cdFx0XHR0aGlzLlNleCA9IHVzZXJkYXRhLlNleDtcclxuXHRcdFx0dGhpcy5wbGF5VGltZXMgPSB1c2VyZGF0YS5wbGF5VGltZXM7XHJcblx0XHRcdHRoaXMudHV0b3JpYWxJbkJ1cyA9IHVzZXJkYXRhLnR1dG9yaWFsSW5CdXM7XHJcblx0XHRcdHRoaXMudHV0b3JpYWxJbk1hcmtldCA9IHVzZXJkYXRhLnR1dG9yaWFsSW5NYXJrZXQ7XHJcblx0XHRcdHRoaXMudHV0b3JpYWxJbkRhdGUgPSB1c2VyZGF0YS50dXRvcmlhbEluRGF0ZTtcclxuXHRcdFx0dGhpcy50dXRvcmlhbFN0b2NrQm9udXMgPSB1c2VyZGF0YS50dXRvcmlhbFN0b2NrQm9udXM7XHJcblx0XHRcdHRoaXMudHV0b3JpYWxNYXRlUG9pbnQgPSB1c2VyZGF0YS50dXRvcmlhbE1hdGVQb2ludDtcclxuXHJcblxyXG5cdFx0XHR0aGlzLlNraWxsQm9udXNQb2ludCA9IHVzZXJkYXRhLlNraWxsQm9udXNQb2ludDtcclxuXHJcblx0XHRcdHZhciBTa2lsbExpc3QgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhTGlzdEJ5SXRlbVR5cGUoSXRlbVR5cGUuU2tpbGwpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IFNraWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBkYXRhID0gU2tpbGxMaXN0W2ldO1xyXG5cdFx0XHRcdHZhciBzayA9IG5ldyBTa2lsbFN0cnVjdCgpO1xyXG5cdFx0XHRcdHNrLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHRcdFx0c2suaWNvbiA9IGRhdGEuaWNvbjtcclxuXHRcdFx0XHRzay5JZCA9IGRhdGEuSWQ7XHJcblx0XHRcdFx0c2suZGVzSWQgPSBkYXRhLmRlc0lkO1xyXG5cdFx0XHRcdHNrLnN1YklkID0gZGF0YS5zdWJJZDtcclxuXHRcdFx0XHRzay5VcGx2ID0gZGF0YS51cExldmVsO1xyXG5cdFx0XHRcdHNrLnNraWxsVHlwZSA9IGRhdGEuc2tpbGxUeXBlO1xyXG5cdFx0XHRcdHNrLmxldmVsID0gMDtcclxuXHRcdFx0XHR0aGlzLlNraWxsTGlzdFtpXSA9IHNrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBBY2hpZXZlbWVudExpc3QgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhTGlzdEJ5SXRlbVR5cGUoSXRlbVR5cGUuQWNoaWV2ZSk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQWNoaWV2ZW1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSBBY2hpZXZlbWVudExpc3RbaV07XHJcblx0XHRcdFx0dmFyIGFjID0gbmV3IEFjaGlldmVTdHJ1Y3QoKTtcclxuXHRcdFx0XHRhYy5JZCA9IGRhdGEuSWQ7XHJcblx0XHRcdFx0YWMuaWNvbiA9IGRhdGEuaWNvbjtcclxuXHRcdFx0XHRhYy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdFx0XHRcdGFjLmRlc0lkID0gZGF0YS5kZXNJZDtcclxuXHRcdFx0XHRhYy5oYXNGaW5pc2ggPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLkFjaGlldmVtZW50TGlzdFtpXSA9IGFjO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVzZXJkYXRhLlNraWxsTGlzdCA9IHRoaXMuU2tpbGxMaXN0O1xyXG5cdFx0XHR1c2VyZGF0YS5BY2hpZXZlbWVudExpc3QgPSB0aGlzLkFjaGlldmVtZW50TGlzdDtcclxuXHJcblx0XHRcdHVzZXJkYXRhLlJlY29yZExpc3QgPSB0aGlzLlJlY29yZExpc3Q7XHJcblxyXG5cdFx0XHRjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1hNQl91c2VyZGF0YV8nICsgdGhpcy51c2VySWQsSlNPTi5zdHJpbmdpZnkodXNlcmRhdGEpKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vY2MubG9nKFwi5pyJ5LmL5YmN5L+d5a2Y55qE5oyB5LmF5pWw5o2u5a2Y5ZyoXCIpO1xyXG5cdFx0XHR2YXIgRGF0YSA9IEpTT04ucGFyc2UoU3RvcmFnZURhdGEpO1xyXG5cdFx0XHR0aGlzLnBsYXllck5hbWUgPSBEYXRhLnBsYXllck5hbWU7XHJcblx0XHRcdHRoaXMuU2V4ID0gRGF0YS5TZXg7XHJcblx0XHRcdHRoaXMucGxheVRpbWVzID0gRGF0YS5wbGF5VGltZXM7XHJcblx0XHRcdHRoaXMudHV0b3JpYWxJbkJ1cyA9IERhdGEudHV0b3JpYWxJbkJ1cztcclxuXHRcdFx0dGhpcy50dXRvcmlhbEluTWFya2V0ID0gRGF0YS50dXRvcmlhbEluTWFya2V0O1xyXG5cdFx0XHR0aGlzLnR1dG9yaWFsSW5EYXRlID0gRGF0YS50dXRvcmlhbEluRGF0ZTtcclxuXHRcdFx0dGhpcy50dXRvcmlhbFN0b2NrQm9udXMgPSBEYXRhLnR1dG9yaWFsU3RvY2tCb251cztcclxuXHRcdFx0dGhpcy50dXRvcmlhbE1hdGVQb2ludCA9IERhdGEudHV0b3JpYWxNYXRlUG9pbnQ7XHJcblxyXG5cdFx0XHR0aGlzLkhpc3RvcnlIaWdoQXNzZXRzID0gRGF0YS5IaXN0b3J5SGlnaEFzc2V0cztcclxuXHJcblx0XHRcdHRoaXMuU2tpbGxMaXN0ID0gRGF0YS5Ta2lsbExpc3Q7XHJcblx0XHRcdHRoaXMuU2tpbGxCb251c1BvaW50ID0gRGF0YS5Ta2lsbEJvbnVzUG9pbnQ7XHJcblx0XHRcdHRoaXMuQWNoaWV2ZW1lbnRMaXN0ID0gRGF0YS5BY2hpZXZlbWVudExpc3Q7XHJcblx0XHRcdHRoaXMuVmlkZW9MYXN0VGltZSA9IERhdGEuVmlkZW9MYXN0VGltZTtcclxuXHJcblx0XHRcdHZhciB0ZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdFx0XHQvL2NjLmxvZyhcIisrKysrKysrKysrKysrKysrKysrKysrKysrIFwiICsgdGVzdERhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG5cdFx0XHRpZihEYXRhLlZpZGVvTGFzdFRpbWUgIT0gdGVzdERhdGUudG9EYXRlU3RyaW5nKCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLlZpZGVvQWRzVGltZXMgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuVmlkZW9BZHNUaW1lcyA9IERhdGEuVmlkZW9BZHNUaW1lcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoRGF0YS5SZWNvcmRMaXN0ICE9IG51bGwpXHJcblx0XHRcdFx0dGhpcy5SZWNvcmRMaXN0ID0gRGF0YS5SZWNvcmRMaXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8v6I635Y+W5YW25a6e5aSp6LWL54K55Yqg5oiQXHJcblx0XHR0aGlzLkdldEluaXRTa2lsbEJvbnVzKHRoaXMuU2tpbGxMaXN0KTtcclxuXHJcblx0XHR0aGlzLk1hcnJ5QWdlID0gMDtcclxuXHRcdHRoaXMuTWFycnlSb2xlSWQgPSAwO1xyXG5cdFx0dGhpcy5EaXZvcmNlQWdlID0gMDtcclxuXHRcdHRoaXMuRnVuZGF0aW9uQWdlID0gMDtcclxuXHRcdHRoaXMuRnVuZGF0aW9uQ29tcGFueUlkID0gMDtcclxuXHRcdHRoaXMuQmFua3J1cHRBZ2UgPSAwO1xyXG5cdFx0dGhpcy5NaWxsaW9uQWdlID0gMDtcclxuXHRcdHRoaXMuVGVuTWlsbGlvbkFnZSA9IDA7XHJcblx0XHR0aGlzLkh1bmRyZWRNaWxsaW9uQWdlID0gMDtcclxuXHJcblxyXG5cdFx0Ly/liJ3lp4vljJYg546p5LiA5bGA55qE5pWw5o2uXHJcblx0XHR0aGlzLnJldGlyZUFnZSA9IGNjLk1nci5nbG9iYWwuUmV0aXJlSW5pdEFnZSArIHRoaXMuUmV0aXJlQm9udXM7XHJcblx0XHR0aGlzLkJldFdpblJhdGlvID0gY2MuTWdyLmdsb2JhbC5CZXRXaW5SYXRpbyArICh0aGlzLkJldEJvbnVzIC8gMTAwKTsgLy/lkI7pnaLov5jkvJropoHliqDkuIrliqDmiJBcclxuXHRcdHRoaXMuRGF0ZVN1Y2Nlc2NSYXRpbyA9IGNjLk1nci5nbG9iYWwuRGF0ZVN1Y2Nlc2NSYXRpbyArICh0aGlzLkRhdGVCb251cyAvIDEwMCk7XHJcblx0XHR0aGlzLkNhc2ggPSAwO1xyXG5cdFx0dGhpcy5IaWdoQXNzZXRzID0gMDtcclxuXHRcdHRoaXMuSHBQb2ludCA9IDEwMDtcclxuXHRcdHRoaXMuUmVjb3ZlclllYXIgPSAwO1xyXG5cdFx0dGhpcy51c2VyU3RhdGUgPSBVc2VyU3RhdGUuT0s7XHJcblx0XHR0aGlzLkFnZSA9IDIwO1xyXG5cdFx0dGhpcy5Ib25vciA9IDA7IC8v5rKh5pyJ5aS06KGUXHJcblx0XHR0aGlzLlJlcHV0YXRpb24gPSB0aGlzLlJlcHV0YXRpb25Jbml0Qm9udXM7IC8v5ZCN5aOwXHJcblx0XHR0aGlzLkFzc2V0c01vbmV5ID0gMDsvL+i1hOS6p1xyXG5cclxuXHRcdHRoaXMuV2FyZUhvdXNlQm9udXNFdmVyeVllYXIgPSAwO1xyXG5cclxuXHRcdHRoaXMuV2FyZUhvdXNlQ2FwY2l0eSA9IGNjLk1nci5nbG9iYWwuSW5pdFdhcmVIb3VzZUNhcGNpdHkgKyB0aGlzLldhcmVIb3VzZUNhcGNpdHlCb251czsvL+S7k+W6k+WuuemHj+WIneWni+WumjEwMCAg6L+Z5Liq5YC85Yiw5pe26KaB5qC55o2uIOaIkOWwseWumlxyXG5cdFx0dGhpcy5XYXJlSG91c2VBbGxDYXBjaXR5ID0gY2MuTWdyLmdsb2JhbC5Jbml0V2FyZUhvdXNlQ2FwY2l0eSArIHRoaXMuV2FyZUhvdXNlQ2FwY2l0eUJvbnVzO1xyXG5cdFx0dGhpcy5oYXNDb21wYW55ID0gZmFsc2U7Ly/msqHmnInlhazlj7hcclxuXHRcdHRoaXMuQ2FuR2V0U3RvY2tQcm9maXQgPSBmYWxzZTsvL+i/mOS4jeiDveiuoeeul+iCoeelqOaUtuebilxyXG5cclxuXHJcblx0XHR2YXIgR29vZHNMaXN0ID0gY2MuTWdyLk1hcERhdGFNZ3IuZ2V0RGF0YUxpc3RCeUl0ZW1UeXBlKEl0ZW1UeXBlLkdvb2RzKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgR29vZHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkYXRhID0gR29vZHNMaXN0W2ldO1xyXG5cdFx0XHR2YXIgYWMgPSBuZXcgR29vZHNTdHJ1Y3QoKTtcclxuXHRcdFx0YWMubmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdFx0YWMuSWQgPSBkYXRhLklkO1xyXG5cdFx0XHRhYy5pY29uID0gZGF0YS5pY29uO1xyXG5cdFx0XHRhYy5vd25OdW0gPSAwO1xyXG5cdFx0XHRhYy5idXlQcmljZSA9IDA7IC8v5Lmw5YWl5Lu35qC8XHJcblx0XHRcdGFjLm1hcmtldFByaWNlID0gMDsvL+W4guWcuuS7t+agvFxyXG5cdFx0XHR0aGlzLkdvb2RzTGlzdFtpXSA9IGFjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBDYXJMaXN0ID0gY2MuTWdyLk1hcERhdGFNZ3IuZ2V0RGF0YUxpc3RCeUl0ZW1UeXBlKEl0ZW1UeXBlLkNhcik7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IENhckxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBDYXJMaXN0W2ldO1xyXG5cdFx0XHR2YXIgYWMgPSBuZXcgQ2FyU3RydWN0KCk7XHJcblx0XHRcdGFjLklkID0gZGF0YS5JZDtcclxuXHRcdFx0YWMuaWNvbiA9IGRhdGEuaWNvbjtcclxuXHRcdFx0YWMubmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdFx0YWMub3duTnVtID0gMDtcclxuXHRcdFx0YWMucHJpY2UgPSBkYXRhLnByaWNlO1xyXG5cdFx0XHRhYy5hZGRCb251cyA9IGRhdGEuYWRkQm9udXM7XHJcblx0XHRcdGFjLmFkZEhwID0gZGF0YS5hZGRIcDtcclxuXHRcdFx0YWMuYWRkRGF0ZSA9IGRhdGEuYWRkRGF0ZTtcclxuXHRcdFx0dGhpcy5DYXJMaXN0W2ldID0gYWM7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIEhvdXNlTGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFMaXN0QnlJdGVtVHlwZShJdGVtVHlwZS5Ib3VzZSk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IEhvdXNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZGF0YSA9IEhvdXNlTGlzdFtpXTtcclxuXHRcdFx0dmFyIGFjID0gbmV3IEhvdXNlU3RydWN0KCk7XHJcblx0XHRcdGFjLklkID0gZGF0YS5JZDtcclxuXHRcdFx0YWMuaWNvbiA9IGRhdGEuaWNvbjtcclxuXHRcdFx0YWMubmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdFx0YWMub3duTnVtID0gMDtcclxuXHRcdFx0YWMucHJpY2UgPSBkYXRhLnByaWNlO1xyXG5cdFx0XHRhYy5hZGRCb251cyA9IGRhdGEuYWRkQm9udXM7XHJcblx0XHRcdGFjLmFkZEhwID0gZGF0YS5hZGRIcDtcclxuXHRcdFx0dGhpcy5Ib3VzZUxpc3RbaV0gPSBhYztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgQ29tcGFueUxpc3QgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXREYXRhTGlzdEJ5SXRlbVR5cGUoSXRlbVR5cGUuQ29tcGFueSk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IENvbXBhbnlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkYXRhID0gQ29tcGFueUxpc3RbaV07XHJcblx0XHRcdHZhciBhYyA9IG5ldyBDb21wYW55U3RydWN0KCk7XHJcblx0XHRcdGFjLklkID0gZGF0YS5JZDtcclxuXHRcdFx0YWMuaWNvbiA9IGRhdGEuaWNvbjtcclxuXHRcdFx0YWMubmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdFx0YWMuYm9udXNSYXRpbyA9IGRhdGEuYm9udXNSYXRpbztcclxuXHRcdFx0YWMuaXNPd25lZCA9IGZhbHNlO1xyXG5cdFx0XHRhYy5zdG9ja051bSA9IDA7XHJcblx0XHRcdGFjLnN0b2NrQ29zdCA9IDA7XHJcblx0XHRcdGFjLmJhbmtydXB0UHJpY2UgPSBkYXRhLm91dFByaWNlO1xyXG5cdFx0XHRhYy5zdG9ja1ByaWNlID0gZGF0YS5pblByaWNlO1xyXG5cdFx0XHRhYy5MaW1pdFllYXIgPSBkYXRhLkxpbWl0WWVhcjtcclxuXHRcdFx0dGhpcy5Db21wYW55TGlzdFtpXSA9IGFjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBNYXRlTGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFMaXN0QnlJdGVtVHlwZShJdGVtVHlwZS5NYXRlKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgTWF0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBNYXRlTGlzdFtpXTtcclxuXHRcdFx0dmFyIGFjID0gbmV3IE1hdGVTdHJ1Y3QoKTtcclxuXHRcdFx0YWMuSWQgPSBkYXRhLklkO1xyXG5cdFx0XHRhYy5pY29uID0gZGF0YS5pY29uO1xyXG5cdFx0XHRhYy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdFx0XHRhYy5zZXggPSBkYXRhLnNleDtcclxuXHRcdFx0YWMuTG92ZVBvaW50ID0gMDtcclxuXHRcdFx0YWMuY2FuRGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRhYy51bmxvY2tDb25kID0gZGF0YS51bmxvY2tDb25kO1xyXG5cdFx0XHRpZihkYXRhLnVubG9ja0NvbmQgPT0gTWF0ZVVuTG9ja1R5cGUuTlVMTClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjLmNhbkRhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vLy9jYy5sb2coZGF0YS5uYW1lICsgXCIg5piv5ZCm5Y+v5Lul55u05o6l57qm5LyaIFwiICsgZGF0YS51bmxvY2tDb25kKTtcclxuXHRcdFx0YWMuY3VyTGV2ZWwgPSAwOy8v562J57qnXHJcblx0XHRcdGFjLlVwTHYgPSBmYWxzZTsvL+ayoeaciea7oee6p1xyXG5cdFx0XHR0aGlzLk1hdGVMaXN0W2ldID0gYWM7XHJcblx0XHR9XHJcblx0XHQvL+S/neWtmOS4iyDkuovku7ZJZCDmr4/mrKHliLfkuIDmrKHkuovku7YgIOWwseS8muWJlOmZpOS4gOasoVxyXG5cdFx0dmFyIEV2ZW50TGlzdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFMaXN0QnlJdGVtVHlwZShJdGVtVHlwZS5FdmVudERhdGEpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBFdmVudExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBFdmVudExpc3RbaV07XHJcblx0XHRcdHRoaXMuRXZlbnREYXRhSWRMaXN0W2ldID0gZGF0YS5JZDtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL+WIneWniyDlpKnotYvmioDog73ojrflvpfliqDmiJDmlbDmja5cclxuXHRHZXRJbml0U2tpbGxCb251czpmdW5jdGlvbihza2lsbExpc3QpXHJcblx0e1xyXG5cdFx0dGhpcy5UcmVhdEJvbnVzID0gMDsgIC8v5rK755aX6Iqx6LS56ZmN5L2O55m+5YiG54K5XHJcblx0XHR0aGlzLldhcmVIb3VzZUNhcGNpdHlCb251cyA9IDA7ICAvL+S7k+WCqOWKoOaIkFxyXG5cdFx0dGhpcy5DYXNoQm9udXMgPSAwOyAgLy/ph5HpkrHliqDmiJAg5q+P5bm05Yqg5oiQXHJcblx0XHR0aGlzLkNhc2hSYXRpb25Cb251cyA9IDA7XHJcblx0XHR0aGlzLlJlcHV0YXRpb25Cb251cyA9IDA7ICAvL+WQjeWjsOWKoOaIkCDmr4/lubRcclxuXHRcdHRoaXMuSHBQb2ludEJvbnVzID0gMDsgIC8v5YGl5bq35Yqg5oiQXHJcblx0XHR0aGlzLlJldGlyZUJvbnVzID0gMDsgIC8v5aKe5Yqg6YCA5LyR5bm06ZmQXHJcblx0XHR0aGlzLkRhdGVCb251cyA9IDA7ICAvL+WinuWKoOe6puS8muaIkOWKn+amgueOh1xyXG5cdFx0dGhpcy5Jbml0TW9uZXlCb251cyA9IDA7IC8v5aKe5Yqg5Yid5aeL546w6YeRXHJcblx0XHR0aGlzLlN0b2NrQWRkQm9udXMgPSAwOyAgLy/lop7liqDlhazlj7jmlLbnm4pcclxuXHRcdHRoaXMuU3RvY2tVcEJvbnVzID0gMDsgIC8v6IKh56Wo5LiK5raoIOamgueOh+WinuWKoFxyXG5cdFx0dGhpcy5EYXRlTW9uZXlCb251cyA9IDA7ICAvL+e6puS8muiKsei0uemZjeS9jlxyXG5cdFx0dGhpcy5CZXRCb251cyA9IDA7ICAvL+i1jOWNmui1oumSseamgueOh+S4iuWNh1xyXG5cdFx0dGhpcy5Ta2lsbFBvaW50R2V0Qm9udXMgPSAwOyAgLy/nu5PnrpfmioDog73ngrnmj5DljYdcclxuXHRcdHRoaXMuUmVwdXRhdGlvbkluaXRCb251cyA9IDA7ICAvL+WIneWni+WQjeWjsOWKoOaIkFxyXG5cdFx0dGhpcy5DYXJCdXlCb251cyA9IDA7ICAvL+i0reS5sOaxvei9puS7t+agvOmZjeS9jlxyXG5cdFx0dGhpcy5FdmVudENvc3RCb251cyA9IDA7ICAvL+S6i+S7tua2iOiAl+mHkemSsemZjeS9jlxyXG5cdFx0dGhpcy5Ib3VzZUJ1eUJvbnVzZSA9IDA7IC8v6LSt5Lmw5oi/5bGLIOS7t+agvOmZjeS9jlxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2tpbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkYXRhID0gc2tpbGxMaXN0W2ldO1xyXG5cdFx0XHQvL+iOt+W+l+aVsOaNrlxyXG5cdFx0XHR2YXIgYm9udXMgPSBjYy5NZ3IuTWFwRGF0YU1nci5nZXRTa2lsbEFkZEJvbnVzQnlUd29JZEFuZEx2KGRhdGEuSWQsIGRhdGEuc3ViSWQsIGRhdGEubGV2ZWwpO1xyXG5cdFx0XHQvLy8vY2MubG9nKGRhdGEuc2tpbGxUeXBlICsgXCIrKysrKysrKysrKyvliJ3lp4vmioDog73liqDmiJArKysrKysrKysrK1wiK2JvbnVzKTtcclxuXHRcdFx0c3dpdGNoIChkYXRhLnNraWxsVHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLldMTlM6XHJcblx0XHRcdFx0XHR0aGlzLldhcmVIb3VzZUNhcGNpdHlCb251cyA9IGJvbnVzOyAvL+W3sue2k+ioiOeul1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTa2lsbFR5cGUuVEhZOlxyXG5cdFx0XHRcdFx0dGhpcy5EYXRlQm9udXMgPSBib251czsgLy/nmb7liIbmr5QgIOW3sue2k+ioiOeul1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTa2lsbFR5cGUuWFNKWTpcclxuXHRcdFx0XHRcdHRoaXMuQ2FzaFJhdGlvbkJvbnVzID0gYm9udXM7IC8v5bey57uP5Yqg5YWl6K6h566XXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNraWxsVHlwZS5GR1pKOlxyXG5cdFx0XHRcdFx0dGhpcy5Jbml0TW9uZXlCb251cyA9IGJvbnVzOyAvL+W3sue7j+iuoeeul1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTa2lsbFR5cGUuR1NHTDpcclxuXHRcdFx0XHRcdHRoaXMuU3RvY2tBZGRCb251cyA9IGJvbnVzOyAvL+eZvuWIhueZviDlt7Lnu4/orqHnrpdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLlRQR1M6XHJcblx0XHRcdFx0XHR0aGlzLlN0b2NrVXBCb251cyA9IGJvbnVzOyAvL+eZvuWIhuavlCDlt7Lnu4/orqHnrpdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLkpaQ0M6XHJcblx0XHRcdFx0XHR0aGlzLlNraWxsUG9pbnRHZXRCb251cyA9IGJvbnVzOyAvL+eZvuWIhuavlCAg5bey57aT6KiI566XXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNraWxsVHlwZS5NTFNaOlxyXG5cdFx0XHRcdFx0dGhpcy5EYXRlTW9uZXlCb251cyA9IGJvbnVzOyAvL+eZvuWIhuavlCDkuIDorqHnrpdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLkRTOlxyXG5cdFx0XHRcdFx0dGhpcy5CZXRCb251cyA9IGJvbnVzOyAvL+eZvuWIhuavlCDlt7LntpPoqIjnrpdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLkxEWVo6XHJcblx0XHRcdFx0XHR0aGlzLlJldGlyZUJvbnVzID0gYm9udXM7IC8v5bey57aT566X6YCy5Y67XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNraWxsVHlwZS5OU0NNOlxyXG5cdFx0XHRcdFx0dGhpcy5SZXB1dGF0aW9uSW5pdEJvbnVzID0gYm9udXM7IC8v5bey57aT6KiI566XXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNraWxsVHlwZS5RQ0RSOlxyXG5cdFx0XHRcdFx0dGhpcy5DYXJCdXlCb251cyA9IGJvbnVzOyAvL+eZvuWIhuavlCDkuIDoqIjnrpdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2tpbGxUeXBlLkhZTEw6XHJcblx0XHRcdFx0XHR0aGlzLkV2ZW50Q29zdEJvbnVzID0gYm9udXM7IC8v55m+5YiG5q+UIOS4gOiuoeeul1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTa2lsbFR5cGUuRENaSjpcclxuXHRcdFx0XHRcdHRoaXMuSG91c2VCdXlCb251c2UgPSBib251czsgIC8v55m+5YiG5q+UIOS4gOioiOeul1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL+iOt+WPluavj+W5tOmDveS8muiOt+W+l+eahOWKoOaIkOaVsOminVxyXG5cdEdldEJvbnVzUmV3YXJkRXZlcnlZZWFyOmZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIOWMheaLrCDph5HpkrEg5ZCN5aOwIOWBpeW6t+WAvFxyXG5cdFx0dGhpcy5DYXNoICs9IHRoaXMuQ2FzaEJvbnVzO1xyXG5cdFx0dGhpcy5DYXNoID0gTWF0aC5mbG9vcih0aGlzLkNhc2ggKiAoMSt0aGlzLkNhc2hSYXRpb25Cb251cykpO1xyXG5cdFx0aWYodGhpcy5DYXNoIDwgMTAwKVxyXG5cdFx0XHR0aGlzLkNhc2ggPSAwO1xyXG5cdFx0dGhpcy5SZXB1dGF0aW9uICs9IHRoaXMuUmVwdXRhdGlvbkJvbnVzO1xyXG5cdFx0aWYodGhpcy5SZXB1dGF0aW9uIDwgMClcclxuXHRcdFx0dGhpcy5SZXB1dGF0aW9uID0gMDtcclxuXHRcdHRoaXMuSHBQb2ludCArPSB0aGlzLkhwUG9pbnRCb251cztcclxuXHRcdGlmKHRoaXMuSHBQb2ludCA+IDEwMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5IcFBvaW50ID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuV2FyZUhvdXNlQ2FwY2l0eSArPSB0aGlzLldhcmVIb3VzZUJvbnVzRXZlcnlZZWFyO1xyXG5cdFx0dGhpcy5XYXJlSG91c2VBbGxDYXBjaXR5ICs9IHRoaXMuV2FyZUhvdXNlQm9udXNFdmVyeVllYXI7XHJcblx0XHRpZih0aGlzLldhcmVIb3VzZUNhcGNpdHkgPiAyMDApXHJcblx0XHRcdHRoaXMuV2FyZUhvdXNlQ2FwY2l0eSA9IDIwMDtcclxuXHRcdGlmKHRoaXMuV2FyZUhvdXNlQWxsQ2FwY2l0eSA+IDIwMClcclxuXHRcdFx0dGhpcy5XYXJlSG91c2VBbGxDYXBjaXR5ID0gMjAwO1xyXG5cdH0sXHJcblxyXG5cdC8v6I635Y+W5LiA5qyh5LqL5Lu2aWQgIOW5tuS7juaVsOWIl+S4reWJlOmZpOi/meS4qiBJZFxyXG5cdEdldEV2ZW50RGF0YUFuZFNwbGljZUlkOmZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgbGVuID0gdGhpcy5FdmVudERhdGFJZExpc3QubGVuZ3RoO1xyXG5cdFx0Ly9jYy5sb2coXCIxMSDkuovku7bmlbDmja7liankvZnkuKrmlbAgPSBcIiArIGxlbik7XHJcblx0XHR2YXIgc2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbik7XHJcblx0XHR2YXIgb3V0ID0gdGhpcy5FdmVudERhdGFJZExpc3Rbc2VlZF07XHJcblx0XHR0aGlzLkV2ZW50RGF0YUlkTGlzdC5zcGxpY2Uoc2VlZCwgMSk7XHJcblx0XHQvL2NjLmxvZyhvdXQgKyBcIiAg5LqL5Lu25pWw5o2u5Ymp5L2Z5Liq5pWwID0gXCIgKyB0aGlzLkV2ZW50RGF0YUlkTGlzdC5sZW5ndGgpO1xyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9LFxyXG5cclxuXHRSZWZyZXNoSGlzdG9yeUhpZ2hBc3NldDpmdW5jdGlvbihhc3NldCl7XHJcblx0XHR0aGlzLkhpc3RvcnlIaWdoQXNzZXRzID0gYXNzZXQ7XHJcblx0fSxcclxuXHJcblx0Ly/kv53lrZjmnKzlnLDmlbDmja5cclxuXHRTYXZlVXNlckRhdGE6ZnVuY3Rpb24oKXtcclxuXHRcdHZhciB1c2VyZGF0YSA9IHt9O1xyXG5cdFx0dXNlcmRhdGEucGxheWVyTmFtZSA9IHRoaXMucGxheWVyTmFtZTtcclxuXHRcdHVzZXJkYXRhLlNleCA9IHRoaXMuU2V4O1xyXG5cdFx0dXNlcmRhdGEuU2tpbGxMaXN0ID0gdGhpcy5Ta2lsbExpc3Q7XHJcblx0XHQvL+W8leWvvOatpemqpFxyXG5cdFx0dXNlcmRhdGEudHV0b3JpYWxJbk1hcmtldCA9IHRoaXMudHV0b3JpYWxJbk1hcmtldDtcclxuXHRcdHVzZXJkYXRhLnR1dG9yaWFsSW5EYXRlID0gdGhpcy50dXRvcmlhbEluRGF0ZTtcclxuXHRcdHVzZXJkYXRhLnR1dG9yaWFsSW5CdXMgPSB0aGlzLnR1dG9yaWFsSW5CdXM7XHJcblx0XHR1c2VyZGF0YS50dXRvcmlhbFN0b2NrQm9udXMgPSB0aGlzLnR1dG9yaWFsU3RvY2tCb251cztcclxuXHRcdHVzZXJkYXRhLnR1dG9yaWFsTWF0ZVBvaW50ID0gdGhpcy50dXRvcmlhbE1hdGVQb2ludDtcclxuXHJcblx0XHR1c2VyZGF0YS5IaXN0b3J5SGlnaEFzc2V0cyA9IHRoaXMuSGlzdG9yeUhpZ2hBc3NldHM7XHJcblxyXG5cdFx0dXNlcmRhdGEuVmlkZW9BZHNUaW1lcyA9IHRoaXMuVmlkZW9BZHNUaW1lcztcclxuXHRcdHVzZXJkYXRhLlZpZGVvTGFzdFRpbWUgPSB0aGlzLlZpZGVvTGFzdFRpbWU7XHJcblxyXG5cdFx0dXNlcmRhdGEucGxheVRpbWVzID0gdGhpcy5wbGF5VGltZXM7XHJcblx0XHR1c2VyZGF0YS5BY2hpZXZlbWVudExpc3QgPSB0aGlzLkFjaGlldmVtZW50TGlzdDtcclxuXHRcdHVzZXJkYXRhLlJlY29yZExpc3QgPSB0aGlzLlJlY29yZExpc3Q7XHJcblx0XHR1c2VyZGF0YS5Ta2lsbEJvbnVzUG9pbnQgPSB0aGlzLlNraWxsQm9udXNQb2ludDtcclxuXHRcdGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnWE1CX3VzZXJkYXRhXycgKyB0aGlzLnVzZXJJZCxKU09OLnN0cmluZ2lmeSh1c2VyZGF0YSkpO1xyXG5cdH0sXHJcblxyXG5cdENyZWF0ZVJlY29yZDpmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJlRCA9IG5ldyBSZWNvcmRTdHJ1Y3QoKTtcclxuXHRcdFxyXG5cdFx0dmFyIGFzTHYgPSAwO1xyXG5cdFx0dmFyIHRkID0gTWF0aC5mbG9vcih0aGlzLkFzc2V0c01vbmV5IC8gMTAwMDAwMCk7XHJcblx0XHRpZih0ZCA+IDAgJiYgdGQgPCAxMClcclxuXHRcdHtcclxuXHRcdFx0YXNMdiA9IDE7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHRkID4gMTAgJiYgdGQgPCAxMDApXHJcblx0XHR7XHJcblx0XHRcdGFzTHYgPSAyO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZih0ZCA+IDEwMClcclxuXHRcdHtcclxuXHRcdFx0YXNMdiA9IDM7XHJcblx0XHR9XHJcblx0XHRyZUQucmV0aXJlQWdlID0gdGhpcy5BZ2U7XHJcblx0XHRyZUQubGV2ZWwgPSBhc0x2O1xyXG5cdFx0cmVELmFzc2V0cyA9IHRoaXMuQXNzZXRzTW9uZXk7XHJcblx0XHRyZUQuaGlnaEFzc2V0cyA9IHRoaXMuSGlnaEFzc2V0cztcclxuXHRcdFxyXG5cdFx0dGhpcy5SZWNvcmRMaXN0LnB1c2gocmVEKTtcclxuXHRcdC8vdGhpcy5TYXZlVXNlckRhdGEoKTtcclxuXHR9LFxyXG5cclxuXHQvL+WNh+e6p+aKgOiDveeCuVxyXG5cdFVwR3JhZGVTa2lsbDpmdW5jdGlvbihJZCwgc3ViSWQsIHRvTHYpe1xyXG5cdFx0dmFyIGlzT2sgPSBmYWxzZTtcclxuXHRcdHZhciBOZWVkQ29zdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldFVwZ3JhZGVDb3N0QnlUd29JZChJZCwgc3ViSWQsIHRvTHYpO1xyXG4gICAgICAgIGlmKHRoaXMuU2tpbGxCb251c1BvaW50IDwgTmVlZENvc3QpXHJcbiAgICAgICAgXHRyZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5LiN6KaB5rGC5Y2H57qn5ruh5oqA6IO95Y2z5Y+v5Y2H57qn5LiL5LiA5Liq5oqA6IO9XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuU2tpbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLklkID09IElkICYmIHRoaXMuU2tpbGxMaXN0W2ldLnN1YklkICsgMSA9PSBzdWJJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLmxldmVsID09IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly9jYy5sb2coXCLkuIrkuIDkuKrmioDog73ov5jmsqHmnInljYfnuqfliLDmu6HnuqdcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vaWYodGhpcy5Ta2lsbExpc3RbaV0ubGV2ZWwgIT0gdGhpcy5Ta2lsbExpc3RbaV0uVXBsdilcclxuXHRcdFx0XHQvL3tcclxuXHRcdFx0XHRcdC8vY2MubG9nKFwi5LiK5LiA5Liq5oqA6IO96L+Y5rKh5pyJ5Y2H57qn5Yiw5ruh57qnXCIpO1xyXG5cdFx0XHRcdC8vXHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0Ly99XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Ta2lsbExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYodGhpcy5Ta2lsbExpc3RbaV0uSWQgPT1JZCAmJiB0aGlzLlNraWxsTGlzdFtpXS5zdWJJZCA9PSBzdWJJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLmxldmVsIDwgdGhpcy5Ta2lsbExpc3RbaV0uVXBsdilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLlNraWxsTGlzdFtpXS5sZXZlbCsrO1xyXG5cdFx0XHRcdFx0dGhpcy5Ta2lsbEJvbnVzUG9pbnQgLT0gTmVlZENvc3Q7XHJcblx0XHRcdFx0XHRpc09rID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlzT2sgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdFx0cmV0dXJuIGlzT2s7XHJcblx0fSxcclxuXHJcblx0Q2FuU2hvd1VwVGlwOmZ1bmN0aW9uKElkLCBzdWJJZCwgdG9Mdil7XHJcblx0XHR2YXIgaXNPayA9IGZhbHNlO1xyXG5cdFx0dmFyIE5lZWRDb3N0ID0gY2MuTWdyLk1hcERhdGFNZ3IuZ2V0VXBncmFkZUNvc3RCeVR3b0lkKElkLCBzdWJJZCwgdG9Mdik7XHJcbiAgICAgICAgaWYodGhpcy5Ta2lsbEJvbnVzUG9pbnQgPCBOZWVkQ29zdClcclxuICAgICAgICBcdHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuU2tpbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLklkID09IElkICYmIHRoaXMuU2tpbGxMaXN0W2ldLnN1YklkICsgMSA9PSBzdWJJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLmxldmVsID09IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly9jYy5sb2coXCLkuIrkuIDkuKrmioDog73ov5jmsqHmnInljYfnuqfliLDmu6HnuqdcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vaWYodGhpcy5Ta2lsbExpc3RbaV0ubGV2ZWwgIT0gdGhpcy5Ta2lsbExpc3RbaV0uVXBsdilcclxuXHRcdFx0XHQvL3tcclxuXHRcdFx0XHRcdC8vY2MubG9nKFwi5LiK5LiA5Liq5oqA6IO96L+Y5rKh5pyJ5Y2H57qn5Yiw5ruh57qnXCIpO1xyXG5cdFx0XHRcdC8vXHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0Ly99XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Ta2lsbExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYodGhpcy5Ta2lsbExpc3RbaV0uSWQgPT1JZCAmJiB0aGlzLlNraWxsTGlzdFtpXS5zdWJJZCA9PSBzdWJJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMuU2tpbGxMaXN0W2ldLmxldmVsIDwgdGhpcy5Ta2lsbExpc3RbaV0uVXBsdilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpc09rID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlzT2sgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdFx0cmV0dXJuIGlzT2s7XHJcblx0fSxcclxuXHJcblx0Ly/lrozmiJDmjIflrprmiJDlsLFcclxuXHRGaW5pc2hBY2hpZXZlbWVudDpmdW5jdGlvbihJZCl7XHJcblx0XHR2YXIgaXNPayA9IGZhbHNlO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkFjaGlldmVtZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZih0aGlzLkFjaGlldmVtZW50TGlzdFtpXS5JZCA9PSBJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuQWNoaWV2ZW1lbnRMaXN0W2ldLmhhc0ZpbmlzaCA9IHRydWU7XHJcblx0XHRcdFx0aXNPayA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBpc09rO1xyXG5cdH0sXHJcblx0Ly/kubDlhaXnianlk4FcclxuXHRCdXlHb29kczpmdW5jdGlvbihkYXRhKXsgLy9kYXRhIOWMheWQqyBJZCBidXlwcmlyZSBidXludW1cclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkdvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZihkYXRhLklkID09IHRoaXMuR29vZHNMaXN0W2ldLklkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuR29vZHNMaXN0W2ldLlJlZmVzaERhdGFBZnRlckJ1eShkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly/lh7rllK7nianlk4FcclxuXHRTYWxlR29vZHM6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRmb3IgKHZhciBpID0gdGhpcy5Hb29kc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYoZGF0YS5JZCA9PSB0aGlzLkdvb2RzTGlzdFtpXS5JZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLkdvb2RzTGlzdFtpXS5SZWZlc2hEYXRhQWZ0ZXJTYWxlKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/liJvlip7lhazlj7hcclxuXHRDcmVhdGVDb21wYW55OmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuQ29tcGFueUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYoZGF0YS5JZCA9PSB0aGlzLkNvbXBhbnlMaXN0W2ldLklkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuQ29tcGFueUxpc3RbaV0uUmVmcmVzaERhdGFBZnRlck9wZXIoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL+afpeeci+S4gOS4i+aYr+WQpuW3sue7j+aLpeacieS6lOeorueJqeWTgVxyXG5cdENoZWNrT3duZWRHb29kc051bTpmdW5jdGlvbigpe1xyXG5cdFx0dmFyIE51bSA9IDA7XHJcblx0XHRmb3IgKHZhciBpID0gdGhpcy5Hb29kc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYodGhpcy5Hb29kc0xpc3RbaV0ub3duTnVtID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdE51bSArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgSXNmdWxsID0gZmFsc2U7XHJcblx0XHRpZihOdW0gPT0gNSlcclxuXHRcdHtcclxuXHRcdFx0SXNmdWxsID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBJc2Z1bGw7XHJcblx0fSxcclxuXHJcblx0Ly/otK3kubDogqHnpahcclxuXHRCdXlTdG9ja3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRmb3IgKHZhciBpID0gdGhpcy5Db21wYW55TGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZihkYXRhLklkID09IHRoaXMuQ29tcGFueUxpc3RbaV0uSWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5Db21wYW55TGlzdFtpXS5SZWZyZXNoRGF0YUFmdGVyT3BlcihkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8v5Ye65ZSu6IKh56WoXHJcblx0U2FsZVN0b2NrczpmdW5jdGlvbihkYXRhKXtcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkNvbXBhbnlMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGlmKGRhdGEuSWQgPT0gdGhpcy5Db21wYW55TGlzdFtpXS5JZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLkNvbXBhbnlMaXN0W2ldLlJlZnJlc2hEYXRhQWZ0ZXJTYWxlKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0QnV5U2FsZUNvbW1vbkl0ZW06ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHQvL2NjLmxvZyhcIj09PT09PT09PT09PT1cIiArIGRhdGEuVHlwZSArIFwiICBJZCA9IFwiKyBkYXRhLklkKVxyXG5cdFx0aWYoZGF0YS5UeXBlID09IEl0ZW1UeXBlLkNhcilcclxuXHRcdHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IHRoaXMuQ2FyTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRcdGlmKHRoaXMuQ2FyTGlzdFtpXS5JZCA9PSBkYXRhLklkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuQ2FyTGlzdFtpXS5SZWZyZXNoRGF0YShkYXRhLmFkZE51bSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGRhdGEuVHlwZSA9PSBJdGVtVHlwZS5Ib3VzZSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IHRoaXMuSG91c2VMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdFx0aWYodGhpcy5Ib3VzZUxpc3RbaV0uSWQgPT0gZGF0YS5JZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLkhvdXNlTGlzdFtpXS5SZWZyZXNoRGF0YShkYXRhLmFkZE51bSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/liLfmlrDnuqbkvJrnmoTkurLlr4bluqZcclxuXHRSZWZyZXNoTWF0ZURhdGE6ZnVuY3Rpb24oSWQpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuTWF0ZUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYoSWQgPT0gdGhpcy5NYXRlTGlzdFtpXS5JZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLk1hdGVMaXN0W2ldLlJlZnJlc2hBZnRlckx2VXAoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8v5qC55pOaaWTop6PpmaTlqZrlp7tcclxuXHREaXN2b3JjZU1hdGVCeUlkOmZ1bmN0aW9uKElkKXtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5NYXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZih0aGlzLk1hdGVMaXN0W2ldLklkID09IElkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5NYXRlTGlzdFtpXS5SZXR1cm5Jbml0U3RhdGUoKTtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuTWF0ZSwgSWQpO1xyXG5cdFx0XHRcdHRoaXMuRGVsZXRlTWF0ZUJvbnVzUmV3YXJkKGRhdGEuYm9udXNMaXN0KTtcclxuXHRcdFx0XHQvL+eOsOmHkSDogqHnpajlh4/lsJEg5ZCN5aOwIOWBpeW6t+WPl+aNn1xyXG5cdFx0XHRcdHRoaXMuQ2FzaCA9IE1hdGguZmxvb3IodGhpcy5DYXNoICogMC44KTtcclxuXHRcdFx0XHR0aGlzLkhwUG9pbnQgPSBNYXRoLmZsb29yKHRoaXMuSHBQb2ludCAqIDAuOCk7XHJcblx0XHRcdFx0dGhpcy5SZXB1dGF0aW9uID0gTWF0aC5mbG9vcih0aGlzLlJlcHV0YXRpb24gKiAwLjgpO1xyXG5cdFx0XHRcdHRoaXMuRGlzdm9yY2VEZWxTdG9ja3MoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdERpc3ZvcmNlRGVsU3RvY2tzOmZ1bmN0aW9uKCl7XHJcblx0XHRmb3IgKHZhciBpID0gdGhpcy5Db21wYW55TGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZih0aGlzLkNvbXBhbnlMaXN0W2ldLnN0b2NrTnVtID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuQ29tcGFueUxpc3RbaV0uUmVmcmVzaERhdGFBZnRlckRpc3ZvcmNlKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/ojrflvpfkvLTkvqPliqDmiJAg57uT5ama5ZCO6I635b6XXHJcblx0Z2V0TWF0ZUJvbnVzUmV3YXJkOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkdCA9IGRhdGFbaV07XHJcblx0XHRcdC8vY2MubG9nKFwiKysrKysrKysrKysrKysrKysrKysrb29vb29vKysrKysrKysrKysrKysrKysrKysrKytcIiArIGR0LmJvbnVzTnVtKTtcclxuXHRcdFx0aWYoZHQuYm9udXNUeXBlID09IE1hdGVCb251c1R5cGUuTlVMTClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vY2MubG9nKFwi5Ly05L6j5Yqg5oiQ5LuA5LmI5Lmf5rKh5pyJXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoZHQuYm9udXNUeXBlID09IE1hdGVCb251c1R5cGUuSFApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLkhwUG9pbnRCb251cyArPSBkdC5ib251c051bTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGR0LmJvbnVzVHlwZSA9PSBNYXRlQm9udXNUeXBlLk1vbmV5KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5DYXNoQm9udXMgKz0gZHQuYm9udXNOdW07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihkdC5ib251c1R5cGUgPT0gTWF0ZUJvbnVzVHlwZS5SZXB1dGF0aW9uKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5SZXB1dGF0aW9uQm9udXMgKz0gZHQuYm9udXNOdW07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihkdC5ib251c1R5cGUgPT0gTWF0ZUJvbnVzVHlwZS5XYXJlSG91c2VDYXBjaXR5KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5XYXJlSG91c2VDYXBjaXR5ICs9IGR0LmJvbnVzTnVtO1xyXG5cdFx0XHRcdHRoaXMuV2FyZUhvdXNlQWxsQ2FwY2l0eSArPSBkdC5ib251c051bTtcclxuXHRcdFx0XHR0aGlzLldhcmVIb3VzZUJvbnVzRXZlcnlZZWFyICs9IGR0LmJvbnVzTnVtO1xyXG5cclxuXHRcdFx0XHRpZih0aGlzLldhcmVIb3VzZUFsbENhcGNpdHkgPiAyMDApXHJcblx0XHRcdFx0XHR0aGlzLldhcmVIb3VzZUFsbENhcGNpdHkgPSAyMDA7XHJcblx0XHRcdFx0aWYodGhpcy5XYXJlSG91c2VDYXBjaXR5ID4gMjAwKVxyXG5cdFx0XHRcdFx0dGhpcy5XYXJlSG91c2VDYXBjaXR5ID0gMjAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoZHQuYm9udXNUeXBlID09IE1hdGVCb251c1R5cGUuVHJlYXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLlRyZWF0Qm9udXMgKz0gZHQuYm9udXNOdW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL+enu+mZpOS8tOS+o+iOt+W+l+eahOWkqei1i+WKoOaIkFxyXG5cdERlbGV0ZU1hdGVCb251c1Jld2FyZDpmdW5jdGlvbihkYXRhKVxyXG5cdHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZHQgPSBkYXRhW2ldO1xyXG5cdFx0XHQvL2NjLmxvZyhcIisrKysrKysrKysrKysrKysrKysrK29vb29vbysrKysrKysrKysrKysrKysrKysrKysrXCIgKyBkdC5ib251c051bSk7XHJcblx0XHRcdGlmKGR0LmJvbnVzVHlwZSA9PSBNYXRlQm9udXNUeXBlLk5VTEwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL2NjLmxvZyhcIuS8tOS+o+WKoOaIkOS7gOS5iOS5n+ayoeaciVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGR0LmJvbnVzVHlwZSA9PSBNYXRlQm9udXNUeXBlLkhQKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5IcFBvaW50Qm9udXMgLT0gZHQuYm9udXNOdW07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihkdC5ib251c1R5cGUgPT0gTWF0ZUJvbnVzVHlwZS5Nb25leSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuQ2FzaEJvbnVzIC09IGR0LmJvbnVzTnVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoZHQuYm9udXNUeXBlID09IE1hdGVCb251c1R5cGUuUmVwdXRhdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuUmVwdXRhdGlvbkJvbnVzIC09IGR0LmJvbnVzTnVtO1xyXG5cdFx0XHRcdGlmKHRoaXMuUmVwdXRhdGlvbkJvbnVzIDwgMClcclxuXHRcdFx0XHRcdHRoaXMuUmVwdXRhdGlvbkJvbnVzID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGR0LmJvbnVzVHlwZSA9PSBNYXRlQm9udXNUeXBlLldhcmVIb3VzZUNhcGNpdHkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL3RoaXMuV2FyZUhvdXNlQ2FwY2l0eSAtPSBkdC5ib251c051bTtcclxuXHRcdFx0XHQvL3RoaXMuV2FyZUhvdXNlQWxsQ2FwY2l0eSAtPSBkdC5ib251c051bTtcclxuXHRcdFx0XHR0aGlzLldhcmVIb3VzZUJvbnVzRXZlcnlZZWFyIC09IGR0LmJvbnVzTnVtO1xyXG5cdFx0XHRcdGlmKHRoaXMuV2FyZUhvdXNlQm9udXNFdmVyeVllYXIgPCAwKVxyXG5cdFx0XHRcdFx0dGhpcy5XYXJlSG91c2VCb251c0V2ZXJ5WWVhciA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihkdC5ib251c1R5cGUgPT0gTWF0ZUJvbnVzVHlwZS5UcmVhdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuVHJlYXRCb251cyAtPSBkdC5ib251c051bTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGdldE93bkRhdGFMaXN0QnlUeXBlOmZ1bmN0aW9uKGl0ZW1UeXBlKXtcclxuXHRcdHZhciBkYXRhTGlzdCA9IG51bGw7XHJcblx0XHRzd2l0Y2ggKGl0ZW1UeXBlKSB7XHJcblx0XHRcdGNhc2UgSXRlbVR5cGUuR29vZHM6XHJcblx0XHRcdFx0ZGF0YUxpc3QgPSB0aGlzLkdvb2RzTGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5Ta2lsbDpcclxuXHRcdFx0XHRkYXRhTGlzdCA9IHRoaXMuU2tpbGxMaXN0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEl0ZW1UeXBlLkNhcjpcclxuXHRcdFx0XHRkYXRhTGlzdCA9IHRoaXMuQ2FyTGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5Ib3VzZTpcclxuXHRcdFx0XHRkYXRhTGlzdCA9IHRoaXMuSG91c2VMaXN0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEl0ZW1UeXBlLkFjaGlldmU6XHJcblx0XHRcdFx0ZGF0YUxpc3QgPSB0aGlzLkFjaGlldmVtZW50TGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5Db21wYW55OlxyXG5cdFx0XHRcdGRhdGFMaXN0ID0gdGhpcy5Db21wYW55TGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5NYXRlOlxyXG5cdFx0XHRcdGRhdGFMaXN0ID0gdGhpcy5NYXRlTGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBkYXRhTGlzdDtcclxuXHR9LFxyXG5cclxuXHQvL+iOt+WPluW3suacieaVsOaNriDmoLnmja4g57G75Z6L5ZKMSWRcclxuXHRnZXREYXRhQnlJdGVtVHlwZUFuZElkOmZ1bmN0aW9uKGl0ZW1UeXBlLCBJZCl7XHJcblx0XHR2YXIgZGF0YUxpc3QgPSBudWxsO1xyXG5cdFx0c3dpdGNoIChpdGVtVHlwZSkge1xyXG5cdFx0XHRjYXNlIEl0ZW1UeXBlLkdvb2RzOlxyXG5cdFx0XHRcdGRhdGFMaXN0ID0gdGhpcy5Hb29kc0xpc3Q7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVR5cGUuU2tpbGw6XHJcblx0XHRcdFx0ZGF0YUxpc3QgPSB0aGlzLlNraWxsTGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5DYXI6XHJcblx0XHRcdFx0ZGF0YUxpc3QgPSB0aGlzLkNhckxpc3Q7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVR5cGUuSG91c2U6XHJcblx0XHRcdFx0ZGF0YUxpc3QgPSB0aGlzLkhvdXNlTGlzdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBJdGVtVHlwZS5BY2hpZXZlOlxyXG5cdFx0XHRcdGRhdGFMaXN0ID0gdGhpcy5BY2hpZXZlbWVudExpc3Q7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVR5cGUuQ29tcGFueTpcclxuXHRcdFx0XHRkYXRhTGlzdCA9IHRoaXMuQ29tcGFueUxpc3Q7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgSXRlbVR5cGUuTWF0ZTpcclxuXHRcdFx0XHRkYXRhTGlzdCA9IHRoaXMuTWF0ZUxpc3Q7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRpZihkYXRhTGlzdCAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IgKHZhciBpID0gZGF0YUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZihJZCA9PSBkYXRhTGlzdFtpXS5JZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXR1cm4gZGF0YUxpc3RbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL+WmguaenOayoeacieaVsOaNriDkuLogbnVsbFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSxcclxuXHQvL+WIt+aWsOeJqeWTgeW4guWcuuS7t+agvFxyXG5cdFJlZnJlc2hHb29kc01hcktldFByaWNlOmZ1bmN0aW9uKElkLG1hcmtldFByaWNlKXtcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkdvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZihJZCA9PSB0aGlzLkdvb2RzTGlzdFtpXS5JZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuR29vZHNMaXN0W2ldLm1hcmtldFByaWNlID0gbWFya2V0UHJpY2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL+WIt+aWsOiCoeelqOWVhuWcuuS7t+agvOWSjOaIkOacrFxyXG5cdFJlZnJlc2hTdG9ja0RhdGE6ZnVuY3Rpb24oSWQsIHBhcmFtKXtcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkNvbXBhbnlMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGlmKElkID09IHRoaXMuQ29tcGFueUxpc3RbaV0uSWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLkNvbXBhbnlMaXN0W2ldLnN0b2NrUHJpY2UgPSBwYXJhbS5zdG9ja1ByaWNlO1xyXG5cdFx0XHRcdHRoaXMuQ29tcGFueUxpc3RbaV0uc3RvY2tDb3N0ID0gcGFyYW0uc3RvY2tDb3N0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/ojrflj5bmi6XmnInnmoTnianlk4Hlr7nlupTmlbDmja5cclxuXHRnZXRHb29kc0RhdGFCeUlkOmZ1bmN0aW9uKElkKXtcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkdvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZihJZCA9PSB0aGlzLkdvb2RzTGlzdFtpXS5JZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLkdvb2RzTGlzdFtpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8v5Yi35paw5Liq5Lq66LWE5LqnICAvL2NhY3VsYXRlU3RvY2sg5piv5ZCm6KiI566X6IKh56Wo5pS255uKXHJcblx0UmVmcmVzaFVzZXJBc3NldHM6ZnVuY3Rpb24oY2FjdWxhdGVTdG9jayl7XHJcblx0XHR2YXIgbGFzdEFzc2V0ID0gdGhpcy5Bc3NldHNNb25leTtcclxuXHRcdHZhciBhc3NldHMgPSAwO1xyXG5cdFx0Ly/orqHnrpfmiYDmi6XmnInnianlk4HmgLvku7dcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkdvb2RzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuR29vZHNMaXN0W2ldO1xyXG5cdFx0XHR2YXIgZmxhZyA9IHRoaXMuQ2hlY2tJZElzSW5TaG93TGlzdChkYXRhLklkKTtcclxuXHRcdFx0aWYoZmxhZyA9PSB0cnVlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXNzZXRzICs9IGRhdGEub3duTnVtICogZGF0YS5tYXJrZXRQcmljZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhc3NldHMgKz0gZGF0YS5vd25OdW0gKiBkYXRhLmJ1eVByaWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL+iuoeeul+aIv+Wxi+aLpeaciVxyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuSG91c2VMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdHZhciBkdCA9IHRoaXMuSG91c2VMaXN0W2ldO1xyXG5cdFx0XHRpZihkdC5vd25OdW0gPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8vL2NjLmxvZyhkdC5JZCArIFwiIOaIv+WtkOeahOaVsOmHj+WSjOS7t+agvCBcIiArIGR0Lm93bk51bSArIFwiIFwiICsgZHQucHJpY2UpO1xyXG5cdFx0XHRcdGFzc2V0cyArPSBkdC5vd25OdW0gKiBkdC5wcmljZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly/orqHnrpfovablrZDmiYDmnIlcclxuXHRcdGZvciAodmFyIGkgPSB0aGlzLkNhckxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0dmFyIGR0ID0gdGhpcy5DYXJMaXN0W2ldO1xyXG5cdFx0XHRpZihkdC5vd25OdW0gPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXNzZXRzICs9IGR0Lm93bk51bSAqIGR0LnByaWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly/lkI7pnaLlho3liqDkuIog6IKh56Wo5pS255uKXHJcblx0XHRmb3IgKHZhciBpID0gdGhpcy5Db21wYW55TGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHR2YXIgZGEgPSB0aGlzLkNvbXBhbnlMaXN0W2ldO1xyXG5cdFx0XHRpZihkYS5zdG9ja051bSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL3RoaXMuUmVwdXRhdGlvbiArPSBjYy5NZ3IuZ2xvYmFsLkhhc0NvbXBhbnlSZXB1dGF0aW9uQWRkO1xyXG5cdFx0XHRcdGFzc2V0cyArPSBNYXRoLmZsb29yKGRhLnN0b2NrTnVtICogZGEuc3RvY2tQcmljZSk7XHJcblx0XHRcdFx0aWYodGhpcy5DYW5HZXRTdG9ja1Byb2ZpdCA9PSB0cnVlICYmIGNhY3VsYXRlU3RvY2sgPT0gdHJ1ZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLkNhc2ggKz0gTWF0aC5mbG9vcihkYS5zdG9ja051bSAqIGRhLnN0b2NrUHJpY2UgKiAoZGEuYm9udXNSYXRpbyArICh0aGlzLlN0b2NrQWRkQm9udXMgLyAxMDApKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YXNzZXRzICs9IHRoaXMuQ2FzaDtcclxuXHRcdC8v6LWE5Lqn5pq05rao5pe25YCZ5YGl5bq36L+F6YCf5LiL6ZmNIOaatOa2qDXlgI3kuIvpmY0zMFxyXG5cdFx0dGhpcy5Bc3NldHNNb25leSA9IGFzc2V0cztcclxuXHJcblx0XHR0aGlzLkp1ZGVGaW5pc2hBbnlBY2hpZXZlbWVudCg1KTsgLy/miJDlsLEgSWQgPSA1IOi1hOS6p+ebuOWFs1xyXG5cdFx0dGhpcy5KdWRlRmluaXNoQW55QWNoaWV2ZW1lbnQoNCk7IC8v5oiQ5bCxIElkID0gNiAgXHJcblxyXG5cdFx0Y2MubG9nKGxhc3RBc3NldCArIFwiIEwgPT09PT09PT095LuW5aaI55qE6LWE5Lqn6Zeu6aKYPT09PT09PT0gTiBcIiArIGFzc2V0cyk7XHJcblx0XHRpZihhc3NldHMgPiB0aGlzLkhpZ2hBc3NldHMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuSGlnaEFzc2V0cyA9IGFzc2V0cztcclxuXHRcdH1cclxuXHJcblx0XHRpZihhc3NldHMgPiAxMDAwMDAwICYmIHRoaXMuTWlsbGlvbkFnZSA9PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLk1pbGxpb25BZ2UgPSB0aGlzLkFnZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihhc3NldHMgPiAxMDAwMDAwMCAmJiB0aGlzLlRlbk1pbGxpb25BZ2UgPT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5UZW5NaWxsaW9uQWdlID0gdGhpcy5BZ2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoYXNzZXRzID4gMTAwMDAwMDAwICYmIHRoaXMuSHVuZHJlZE1pbGxpb25BZ2UgPT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5IdW5kcmVkTWlsbGlvbkFnZSA9IHRoaXMuQWdlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKE1hdGguZmxvb3IoYXNzZXRzIC8gbGFzdEFzc2V0KSA+PSBjYy5NZ3IuZ2xvYmFsLkFzc2V0RXhwbG9yUmF0ZSB8fCAoYXNzZXRzIC8gbGFzdEFzc2V0KSA8PSBjYy5NZ3IuZ2xvYmFsLkFzc2V0RXhwbG9yRG93blJhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMudXNlclN0YXRlID09IFVzZXJTdGF0ZS5Ob3RPSylcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR0aGlzLkhwUG9pbnQgLT0gY2MuTWdyLmdsb2JhbC5Bc3NldEJ1cmRlbjtcclxuXHRcdFx0aWYodGhpcy5IcFBvaW50IDwgY2MuTWdyLmdsb2JhbC5IZWFsdGhMaW5lKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51c2VyU3RhdGUgPSBVc2VyU3RhdGUuTm90T0s7XHJcblx0XHRcdFx0Y2MuTWdyLmdsb2JhbC5nb1RvSG9zcGl0YWwgKz0gMTtcclxuXHRcdFx0XHR0aGlzLlJlY292ZXJZZWFyID0gY2MuTWdyLmdsb2JhbC5ZZWFyUmVjb3ZlcjtcclxuXHRcdFx0XHR2YXIgcGFyYW0gPSB7fTtcclxuXHRcdFx0XHRwYXJhbS5mb3JXaGF0ID0gXCJIZWFsdGhMaW5lXCI7XHJcblx0XHRcdFx0cGFyYW0udGV4dCA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJSZWNvdmVySGVhbHRoXCIpO1xyXG5cdFx0XHRcdGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoY2MuTWdyLkV2ZW50Lk9wZW5Db21tb25UaXAsIHBhcmFtKTtcclxuXHJcblx0XHRcdFx0Ly90aGlzLlVuTG9ja01hdGVCeUluSG9zcGl0YWwoTWF0ZVVuTG9ja1R5cGUuSW5Ib3NwaXRhbCwgdGhpcy5TZXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBwYXJhbSA9IHt9O1xyXG5cdFx0XHRcdHBhcmFtLmZvcldoYXQgPSBcIlwiO1xyXG5cdFx0XHRcdHBhcmFtLnRleHQgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiUmVjb3ZlckhlYWx0aERcIik7XHJcblx0XHRcdFx0Y2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuT3BlbkNvbW1vblRpcCwgcGFyYW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0SnVkZUZpbmlzaEFueUFjaGlldmVtZW50OmZ1bmN0aW9uIChJZCkge1xyXG5cdFx0Ly9jYy5sb2codGhpcy5BY2hpZXZlbWVudExpc3QubGVuZ3RoICsgXCI9PT09PT09PT09PT09PT09PT09PT095Yik5pat5oiQ5bCx5piv5ZCm5a6M5oiQXCIgKyBJZCk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQWNoaWV2ZW1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuQWNoaWV2ZW1lbnRMaXN0W2ldLklkID09IElkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYodGhpcy5BY2hpZXZlbWVudExpc3RbaV0uaGFzRmluaXNoID09IHRydWUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly9jYy5sb2coXCLor6XmiJDlsLHlt7Lnu4/lrozmiJDkuoZcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgYWNEID0gY2MuTWdyLk1hcERhdGFNZ3IuZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZChJdGVtVHlwZS5BY2hpZXZlLCBJZCk7XHJcblx0XHRjYy5sb2coXCI9PT09PT09PT09PT09PT09PT09PT095Yik5pat5oiQ5bCx5piv5ZCm5a6M5oiQID0gXCIgKyBhY0QubmFtZSk7XHJcblx0XHR2YXIgY29uZExpc3QgPSBhY0QuY29uZExpc3Q7XHJcblx0XHR2YXIgZmluaXNoZWQgPSB0aGlzLkp1ZGVDYW5GaW5pc2hBY2hpZXZlbWVudEJ5Q29uZChjb25kTGlzdCk7XHJcblx0XHRpZihmaW5pc2hlZClcclxuXHRcdHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkFjaGlldmVtZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmKHRoaXMuQWNoaWV2ZW1lbnRMaXN0W2ldLklkID09IElkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuQWNoaWV2ZW1lbnRMaXN0W2ldLmhhc0ZpbmlzaCA9IHRydWU7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Q2FjdWxhdGVSZXB1dGF0aW9uRnJvbUNvbXBhbnk6ZnVuY3Rpb24oKXtcclxuXHRcdC8v5ZCO6Z2i5YaN5Yqg5LiKIOiCoeelqOmAoOaIkOeahFxyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuQ29tcGFueUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0dmFyIGRhID0gdGhpcy5Db21wYW55TGlzdFtpXTtcclxuXHRcdFx0aWYoZGEuc3RvY2tOdW0gPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5SZXB1dGF0aW9uICs9IGNjLk1nci5nbG9iYWwuSGFzQ29tcGFueVJlcHV0YXRpb25BZGQ7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0SnVkZUNhbkZpbmlzaEFjaGlldmVtZW50QnlDb25kOmZ1bmN0aW9uKGNvbmRMaXN0KXtcclxuXHRcdHZhciBmaW5pc2hlZExpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25kID0gY29uZExpc3RbaV07XHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLnsbvlnovopoHmsYIgPSBcIiArIGNvbmQuY29uZFR5cGUgKyBcIiAg5pWw5YC86KaB5rGCID0gXCIgKyBjb25kLnZhbHVlKTtcclxuICAgICAgICAgICAgc3dpdGNoIChjb25kLmNvbmRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkFzc2V0TW9uZXlVcDpcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRoaXMuSnVkZUFzc2V0Q29uZChjb25kLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNoaWV2ZUNvbmQuSW5Ib3NwaXRhbDpcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRoaXMuSnVkZWdvVG9Ib3NUaW1lc0NvbmQoY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkJhbmtydXB0OlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdGhpcy5KdWRlQmFua3J1cHRUaW1lc0NvbmQoY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkNyZWF0ZUJ1c2luZXNzOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdGhpcy5KdWRlQ3JlYXRlQ29tcGFueUNvbmQoY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkFnZUNvbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0aGlzLkp1ZGVBZ2VDb25kKGNvbmQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBY2hpZXZlQ29uZC5IYXNNYXJyeUNvbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0aGlzLkp1ZGVIYXNNYXJyeUNvbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNoaWV2ZUNvbmQuTG92ZVBvaW50Q29uZDpcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRoaXMuSnVkZUxvdmVQb2ludENvbmQoY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkFzc2V0TW9uZXlEb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdGhpcy5KdWRlQXNzZXREb3duQ29uZChjb25kLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNoaWV2ZUNvbmQuTm9NYXJyeUNvbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0aGlzLkp1ZGVOb3RNYXJyeUNvbmQoY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjaGlldmVDb25kLkFnZUNvbmRVcDpcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRoaXMuSnVkZUFnZUNvbmRVcChjb25kLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCLmmK/lkKblrozmiJAgPSBcIiArIGZpbmlzaGVkKTtcclxuICAgICAgICAgICAgZmluaXNoZWRMaXN0LnB1c2goZmluaXNoZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmlzaGVkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFx0aWYoZmluaXNoZWRMaXN0W2ldID09IGZhbHNlKVxyXG4gICAgICAgIFx0XHRyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblxyXG5cdEp1ZGVBc3NldERvd25Db25kOmZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0aWYodGhpcy5Bc3NldHNNb25leSA8IHZhbHVlICogMTAwMDAwMClcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvL+aIkOWwseWujOaIkCDotYTkuqfpmZDliLZcclxuXHRKdWRlQXNzZXRDb25kOmZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0aWYodGhpcy5Bc3NldHNNb25leSA+PSB2YWx1ZSAqIDEwMDAwMDApXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0Ly/miJDlsLHlrozmiJAg5bm06b6E6ZmQ5Yi2IOWwj+S6jlxyXG5cdEp1ZGVBZ2VDb25kOmZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0aWYodGhpcy5BZ2UgPD0gdmFsdWUpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0SnVkZUFnZUNvbmRVcDpmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRpZih0aGlzLkFnZSA+PSB2YWx1ZSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9LCBcclxuXHJcblxyXG5cdC8v5oiQ5bCx5a6M5oiQIOi/m+WMu+mZouasoeaVsFxyXG5cdEp1ZGVnb1RvSG9zVGltZXNDb25kOmZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0aWYoY2MuTWdyLmdsb2JhbC5nb1RvSG9zcGl0YWwgPiB2YWx1ZSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvL+aIkOWwseWujOaIkCDnoLTkuqfmrKHmlbBcclxuXHRKdWRlQmFua3J1cHRUaW1lc0NvbmQ6ZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRpZihjYy5NZ3IuZ2xvYmFsLkJhbmtydXB0VGltZXMgPiB2YWx1ZSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvL+aIkOWwseWujOaIkCDliJvkuJrmrKHmlbBcclxuXHRKdWRlQ3JlYXRlQ29tcGFueUNvbmQ6ZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRpZihjYy5NZ3IuZ2xvYmFsLkNyZWF0ZUNvbXBhbnlUaW1lcyA+IHZhbHVlKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdC8v5oiQ5bCx5a6M5oiQIOaYr+WQpuW3suWpmlxyXG5cdEp1ZGVIYXNNYXJyeUNvbmQ6ZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLk1hdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuTWF0ZUxpc3RbaV0uTG92ZVBvaW50ID09IDEwMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0SnVkZUhhc0NhcjpmdW5jdGlvbigpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuQ2FyTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZih0aGlzLkNhckxpc3RbaV0ub3duTnVtID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0SnVkZUhhc0NhckJ5SWQ6ZnVuY3Rpb24oSWQpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuQ2FyTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZih0aGlzLkNhckxpc3RbaV0ub3duTnVtID4gMCAmJiB0aGlzLkNhckxpc3RbaV0uSWQgPT0gSWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdEp1ZGVIYXNIb3VzZTpmdW5jdGlvbigpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuSG91c2VMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGlmKHRoaXMuSG91c2VMaXN0W2ldLm93bk51bSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdEp1ZGVIYXNIb3VzZUJ5SWQ6ZnVuY3Rpb24oSWQpe1xyXG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuSG91c2VMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGlmKHRoaXMuSG91c2VMaXN0W2ldLm93bk51bSA+IDAgJiYgdGhpcy5Ib3VzZUxpc3RbaV0uSWQgPT0gSWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdC8v5oiQ5bCx5a6M5oiQIOaYr+WQpuacquWpmlxyXG5cdEp1ZGVOb3RNYXJyeUNvbmQ6ZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLk1hdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuTWF0ZUxpc3RbaV0uTG92ZVBvaW50ID09IDEwMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHJcblx0Ly/miJDlsLHlrozmiJAg5Lqy5a+G5bqm5Lq65pWwXHJcblx0SnVkZUxvdmVQb2ludENvbmQ6ZnVuY3Rpb24odmFsdWUpe1xyXG5cdFx0dmFyIG51bSA9IDA7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuTWF0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYodGhpcy5NYXRlTGlzdFtpXS5Mb3ZlUG9pbnQgPT0gOTkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRudW0gKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYobnVtID49IHZhbHVlKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdC8v5Yi35paw55So5oi35bm06b6EXHJcblx0UmVmcmVzaFVzZXJBZ2U6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuQWdlICs9IDE7XHJcblx0XHRpZih0aGlzLkFnZSA9PSAodGhpcy5yZXRpcmVBZ2UgKyAxKSAmJiBjYy5NZ3IuZ2xvYmFsLnVzZVJldGlyZUFkcyA9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0Y2MuZGlyZWN0b3IuR2xvYmFsRXZlbnQuZW1pdChjYy5NZ3IuRXZlbnQuVXNlUmV0aXJlQWRzU2tpbGwsIHt9KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodGhpcy5BZ2UgPiB0aGlzLnJldGlyZUFnZSAmJiBjYy5NZ3IuZ2xvYmFsLnVzZVJldGlyZUFkcyA9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHRjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5SZXRpcmUsIHt9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLkNhY3VsYXRlUmVwdXRhdGlvbkZyb21Db21wYW55KCk7XHJcblx0fSxcclxuXHJcblx0Ly/liLfmlrDkuKrkurrlgaXlurfmjIfmlbBcclxuXHRSZWZyZXNoSGVhbHRoSHA6ZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuUmVjb3ZlclllYXIgPiAwICYmIHRoaXMudXNlclN0YXRlID09IFVzZXJTdGF0ZS5Ob3RPSylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5SZWNvdmVyWWVhciAtPSAxO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHRoaXMuUmVjb3ZlclllYXIgPT0gMCAmJiB0aGlzLnVzZXJTdGF0ZSA9PSBVc2VyU3RhdGUuTm90T0spXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuUmVjb3ZlclllYXIgPSAwO1xyXG5cdFx0XHR0aGlzLnVzZXJTdGF0ZSA9IFVzZXJTdGF0ZS5PSztcclxuXHRcdFx0dGhpcy5IcFBvaW50ID0gMTAwO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5BZ2UgPj0gY2MuTWdyLmdsb2JhbC5IZWFsdGhTdWJBZ2UgJiYgdGhpcy5IcFBvaW50ID4gMClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlZWQgPSAyICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG5cdFx0XHR0aGlzLkhwUG9pbnQgLT0gc2VlZDtcclxuXHRcdFx0aWYodGhpcy5IcFBvaW50IDwgY2MuTWdyLmdsb2JhbC5IZWFsdGhMaW5lKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy51c2VyU3RhdGUgPSBVc2VyU3RhdGUuTm90T0s7XHJcblx0XHRcdFx0Y2MuTWdyLmdsb2JhbC5nb1RvSG9zcGl0YWwgKz0gMTtcclxuXHRcdFx0XHR0aGlzLlJlY292ZXJZZWFyID0gY2MuTWdyLmdsb2JhbC5ZZWFyUmVjb3ZlcjtcclxuXHJcblx0XHRcdFx0dmFyIHBhcmFtID0ge307XHJcblx0XHRcdFx0cGFyYW0uZm9yV2hhdCA9IFwiSGVhbHRoTGluZVwiO1xyXG5cdFx0XHRcdHBhcmFtLnRleHQgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiUmVjb3ZlckhlYWx0aFwiKTtcclxuXHRcdFx0XHRjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuQ29tbW9uVGlwLCBwYXJhbSk7XHJcblx0XHRcdFx0Ly90aGlzLlVuTG9ja01hdGVCeUluSG9zcGl0YWwoTWF0ZVVuTG9ja1R5cGUuSW5Ib3NwaXRhbCwgdGhpcy5TZXgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/mioDog73lpKnotYvmlbDmja7ojrflj5ZcclxuICAgIGdldFNraWxsRGF0YUJ5VHdvSWQ6ZnVuY3Rpb24oSWQsIHN1YklkKXtcclxuICAgICAgICB2YXIgZHQgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLlNraWxsTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuU2tpbGxMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihkYXRhLklkID09IElkICYmIGRhdGEuc3ViSWQgPT0gc3ViSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2tpbGxMaXN0QnlJZDpmdW5jdGlvbihJZCl7XHJcbiAgICAgICAgdmFyIHBhcmFtID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuU2tpbGxMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5Ta2lsbExpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGRhdGEuSWQgPT0gSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+iKsemUgOWSjOiOt+W+l+agueaNriBcclxuICAgIEdldE9yQ29zdERhdGFCeVJld2FyZFR5cGU6ZnVuY3Rpb24ocmV3YXJkVHlwZSwgbnVtLCBzdWJJZCkgLy/lr7nkuo7nianlk4EgIOS8muacieS4gOS4qnN1YklkXHJcbiAgICB7XHJcbiAgICBcdHZhciBQZGF0YSA9IHt9O1xyXG4gICAgXHRQZGF0YS5JZCA9IC0xO1xyXG4gICAgXHRQZGF0YS5jb21wYW55SWQgPSAtMTtcclxuICAgIFx0Ly9jYy5sb2coXCIrKysrKytyZXdhcmRUeXBlKysrKysrXCIgKyByZXdhcmRUeXBlKTtcclxuXHRcdGlmKHJld2FyZFR5cGUgPT0gUmV3YXJkVHlwZS5OVUxMKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0Ly9jYy5sb2coXCLllaXkuZ/msqHmnIlcIik7XHJcbiAgICBcdH1cclxuICAgIFx0ZWxzZSBpZihyZXdhcmRUeXBlID09IFJld2FyZFR5cGUuQ2FzaClcclxuICAgIFx0e1xyXG4gICAgXHRcdGlmKG51bSA8IDApIC8v5aW96L+Q6L+e6L+eXHJcbiAgICBcdFx0e1xyXG4gICAgXHRcdFx0bnVtID0gbnVtICsgTWF0aC5mbG9vcigoLW51bSkqIHRoaXMuRXZlbnRDb3N0Qm9udXMpO1xyXG4gICAgXHRcdH1cclxuICAgIFx0XHRlbHNlXHJcbiAgICBcdFx0e1xyXG4gICAgXHRcdFx0bnVtICsgTWF0aC5mbG9vcihudW0qIHRoaXMuRXZlbnRDb3N0Qm9udXMpO1xyXG4gICAgXHRcdH1cclxuICAgIFx0XHR0aGlzLkNhc2ggKz0gbnVtO1xyXG4gICAgXHRcdGlmKHRoaXMuQ2FzaCA8IDApXHJcbiAgICBcdFx0XHR0aGlzLkNhc2ggPSAwO1xyXG4gICAgXHR9XHJcbiAgICBcdGVsc2UgaWYocmV3YXJkVHlwZSA9PSBSZXdhcmRUeXBlLkhQKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0dGhpcy5IcFBvaW50ICs9IG51bTtcclxuICAgIFx0XHRpZih0aGlzLkhwUG9pbnQgPjEwMClcclxuICAgIFx0XHRcdHRoaXMuSHBQb2ludCA9MTAwO1xyXG4gICAgXHR9XHJcbiAgICBcdGVsc2UgaWYocmV3YXJkVHlwZSA9PSBSZXdhcmRUeXBlLlJlcHV0YXRpb24pXHJcbiAgICBcdHtcclxuICAgIFx0XHR0aGlzLlJlcHV0YXRpb24gKz0gbnVtO1xyXG4gICAgXHRcdGlmKHRoaXMuUmVwdXRhdGlvbiA8IDApXHJcbiAgICBcdFx0XHR0aGlzLlJlcHV0YXRpb24gPSAwO1xyXG4gICAgXHR9XHJcbiAgICBcdGVsc2UgaWYocmV3YXJkVHlwZSA9PSBSZXdhcmRUeXBlLkdvb2RzKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkdvb2RzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdFx0aWYodGhpcy5Hb29kc0xpc3RbaV0uSWQgPT0gc3ViSWQpXHJcbiAgICBcdFx0XHR7XHJcbiAgICBcdFx0XHRcdGlmKHRoaXMuV2FyZUhvdXNlQ2FwY2l0eSA+PSBudW0pXHJcbiAgICBcdFx0XHRcdHtcclxuICAgIFx0XHRcdFx0XHR2YXIgYXZlcmFnZVByaWNlID0gTWF0aC5mbG9vcigodGhpcy5Hb29kc0xpc3RbaV0uYnV5UHJpY2UgKiB0aGlzLkdvb2RzTGlzdFtpXS5vd25OdW0pIC8gKHRoaXMuR29vZHNMaXN0W2ldLm93bk51bSArIG51bSkpO1xyXG5cdCAgICBcdFx0XHRcdHRoaXMuR29vZHNMaXN0W2ldLm93bk51bSArPSBudW07XHJcblx0ICAgIFx0XHRcdFx0Ly/ku5PlupPlh4/lsJHmlbDlgLxcclxuXHQgICAgXHRcdFx0XHR0aGlzLldhcmVIb3VzZUNhcGNpdHkgLT0gbnVtO1xyXG5cclxuXHQgICAgXHRcdFx0XHRQZGF0YS5JZCA9IHN1YklkO1xyXG5cdCAgICBcdFx0XHRcdFBkYXRhLmJ1eVByaWNlID0gYXZlcmFnZVByaWNlOy8vdGhpcy5Hb29kc0xpc3RbaV0uYnV5UHJpY2U7XHJcblx0ICAgIFx0XHRcdFx0UGRhdGEub3duTnVtID0gdGhpcy5Hb29kc0xpc3RbaV0ub3duTnVtO1xyXG4gICAgXHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdGJyZWFrO1xyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG4gICAgXHRlbHNlIGlmKHJld2FyZFR5cGUgPT0gUmV3YXJkVHlwZS5DYXIpXHJcbiAgICBcdHtcclxuICAgIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2FyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdFx0aWYodGhpcy5DYXJMaXN0W2ldLklkID09IHN1YklkKVxyXG4gICAgXHRcdFx0e1xyXG4gICAgXHRcdFx0XHR0aGlzLkNhckxpc3RbaV0ub3duTnVtICs9IG51bTtcclxuICAgIFx0XHRcdFx0dGhpcy5SZXB1dGF0aW9uICs9IHRoaXMuQ2FyTGlzdFtpXS5hZGRCb251cztcclxuICAgIFx0XHRcdFx0dGhpcy5IcFBvaW50ICs9IHRoaXMuQ2FyTGlzdFtpXS5hZGRIcDtcclxuICAgIFx0XHRcdFx0aWYodGhpcy5IcFBvaW50ID4gMTAwKVxyXG4gICAgXHRcdFx0XHRcdHRoaXMuSHBQb2ludCA9IDEwMDtcclxuICAgIFx0XHRcdFx0YnJlYWs7XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcbiAgICBcdGVsc2UgaWYocmV3YXJkVHlwZSA9PSBSZXdhcmRUeXBlLkhvdXNlKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkhvdXNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdFx0aWYodGhpcy5Ib3VzZUxpc3RbaV0uSWQgPT0gc3ViSWQpXHJcbiAgICBcdFx0XHR7XHJcbiAgICBcdFx0XHRcdHRoaXMuSG91c2VMaXN0W2ldLm93bk51bSArPSBudW07XHJcbiAgICBcdFx0XHRcdHRoaXMuUmVwdXRhdGlvbiArPSB0aGlzLkhvdXNlTGlzdFtpXS5hZGRCb251cztcclxuICAgIFx0XHRcdFx0dGhpcy5IcFBvaW50ICs9IHRoaXMuSG91c2VMaXN0W2ldLmFkZEhwO1xyXG4gICAgXHRcdFx0XHRpZih0aGlzLkhwUG9pbnQgPiAxMDApXHJcbiAgICBcdFx0XHRcdFx0dGhpcy5IcFBvaW50ID0gMTAwO1xyXG4gICAgXHRcdFx0XHRicmVhaztcclxuICAgIFx0XHRcdH1cclxuICAgIFx0XHR9XHJcbiAgICBcdH1cclxuICAgIFx0ZWxzZSBpZihyZXdhcmRUeXBlID09IFJld2FyZFR5cGUuU3RvY2spXHJcbiAgICBcdHtcclxuICAgIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tcGFueUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0XHRcdGlmKHRoaXMuQ29tcGFueUxpc3RbaV0uSWQgPT0gc3ViSWQpXHJcbiAgICBcdFx0XHR7XHJcbiAgICBcdFx0XHRcdHRoaXMuQ29tcGFueUxpc3RbaV0uc3RvY2tOdW0gKz0gbnVtO1xyXG4gICAgXHRcdFx0XHRQZGF0YS5jb21wYW55SWQgPSBzdWJJZDtcclxuICAgIFx0XHRcdFx0YnJlYWs7XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcbiAgICBcdGVsc2UgaWYocmV3YXJkVHlwZSA9PSBSZXdhcmRUeXBlLlN0b2NrUHJpY2UpXHJcbiAgICBcdHtcclxuICAgIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ29tcGFueUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0XHRcdGlmKHRoaXMuQ29tcGFueUxpc3RbaV0uSWQgPT0gc3ViSWQpXHJcbiAgICBcdFx0XHR7XHJcbiAgICBcdFx0XHRcdGlmKHRoaXMuQ29tcGFueUxpc3RbaV0uc3RvY2tOdW0gPiAwKVxyXG4gICAgXHRcdFx0XHR7XHJcbiAgICBcdFx0XHRcdFx0dGhpcy5Db21wYW55TGlzdFtpXS5zdG9ja1ByaWNlICs9IG51bTtcclxuICAgIFx0XHRcdFx0XHRQZGF0YS5jb21wYW55SWQgPSBzdWJJZDtcclxuICAgIFx0XHRcdFx0XHRicmVhaztcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG5cdCAgICByZXR1cm4gUGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Yik5pat5piv5ZCm5pyJ5oi/XHJcbiAgICBKdWRlSGFzSG91c2U6ZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgXHR2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgXHRpZih2YWx1ZSA9PSAwKVxyXG4gICAgXHR7XHJcblx0ICAgIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkhvdXNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBcdFx0aWYodGhpcy5Ib3VzZUxpc3RbaV0ub3duTnVtID4gMClcclxuXHQgICAgXHRcdHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fVxyXG4gICAgXHR9XHJcbiAgICBcdGVsc2VcclxuICAgIFx0e1xyXG4gICAgXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5Ib3VzZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgXHRcdGlmKHRoaXMuSG91c2VMaXN0W2ldLm93bk51bSA+IDAgJiYgdmFsdWUgPT0gdGhpcy5Ib3VzZUxpc3RbaV0uSWQpXHJcblx0ICAgIFx0XHR7XHJcblx0ICAgIFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuICAgIFx0fVxyXG4gICAgXHRyZXR1cm4gZmxhZztcclxuICAgIH0sXHJcbiAgICAvL+WIpOaWreaYr+WQpuaciei9plxyXG4gICAgSnVkZUhhc0NhcjpmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICBcdHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICBcdGlmKHZhbHVlID09IDApXHJcbiAgICBcdHtcclxuXHQgICAgXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2FyTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBcdFx0aWYodGhpcy5DYXJMaXN0W2ldLm93bk51bSA+IDApXHJcblx0ICAgIFx0XHR7XHJcblx0ICAgIFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuICAgIFx0fVxyXG4gICAgXHRlbHNlXHJcbiAgICBcdHtcclxuICAgIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2FyTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBcdFx0aWYodGhpcy5DYXJMaXN0W2ldLm93bk51bSA+IDAgJiYgdGhpcy5DYXJMaXN0W2ldLklkID09IHZhbHVlKVxyXG5cdCAgICBcdFx0e1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9XHJcbiAgICBcdH1cclxuICAgIFx0cmV0dXJuIGZsYWc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Yik5pat6LWE5Lqn5piv5ZCm5ruh6Laz5LiA5a6a6KaB5rGCXHJcbiAgICBKdWRlQXNzZXQ6ZnVuY3Rpb24obmVlZE51bSlcclxuICAgIHtcclxuICAgIFx0dmFyIGZsYWcgPSBmYWxzZTtcclxuICAgIFx0aWYobmVlZE51bSA8PSB0aGlzLkFzc2V0c01vbmV5KVxyXG4gICAgXHR7XHJcbiAgICBcdFx0cmV0dXJuIHRydWU7XHJcbiAgICBcdH1cclxuICAgIFx0cmV0dXJuIGZsYWc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Yik5pat5ZCN5aOw5piv5ZCm5ruh6Laz6KaB5rGCXHJcbiAgICBKdWRlUmVwdXRhdGlvbjpmdW5jdGlvbihuZWVkTnVtKXtcclxuICAgIFx0dmFyIGZsYWcgPSBmYWxzZTtcclxuICAgIFx0aWYobmVlZE51bSA8PSB0aGlzLlJlcHV0YXRpb24pXHJcbiAgICBcdHtcclxuICAgIFx0XHRyZXR1cm4gdHJ1ZTtcclxuICAgIFx0fVxyXG4gICAgXHRyZXR1cm4gZmxhZztcclxuICAgIH0sXHJcblxyXG4gICAgLy/liKTmlq3lgaXlurfmmK/lkKbmu6HotrPopoHmsYJcclxuICAgIEp1ZGVIcFBvaW50OmZ1bmN0aW9uKG5lZWROdW0pe1xyXG4gICAgXHR2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgXHRpZihuZWVkTnVtIDw9IHRoaXMuSHBQb2ludClcclxuICAgIFx0e1xyXG4gICAgXHRcdHJldHVybiB0cnVlO1xyXG4gICAgXHR9XHJcbiAgICBcdHJldHVybiBmbGFnO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIpOaWreaYr+WQpuacieWFrOWPuFxyXG4gICAgSnVkZUhhc0NvbXBhbnk6ZnVuY3Rpb24oKXtcclxuICAgIFx0cmV0dXJuIHRoaXMuaGFzQ29tcGFueTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lvIDmlL7or6XmnaHku7bkuIvnmoTkuIDkuKog5Y+v57qm5Lya5a+56LGhXHJcbiAgICBVbkxvY2tPbmVNYXRlOmZ1bmN0aW9uKHVubG9ja0NvbmQsIG9mZlNleCl7XHJcbiAgICBcdHZhciBJZCA9IC0xO1xyXG4gICAgXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuTWF0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0XHQvL3ZhciBkdCA9IGNjLk1nci5NYXBEYXRhTWdyLmdldERhdGFCeUl0ZW1UeXBlQW5kSWQoSXRlbVR5cGUuTWF0ZSAsIHRoaXMuTWF0ZUxpc3RbaV0uSWQpO1xyXG4gICAgXHRcdGlmKHRoaXMuTWF0ZUxpc3RbaV0uc2V4ID09IG9mZlNleCAmJiB0aGlzLk1hdGVMaXN0W2ldLmNhbkRhdGUgPT0gZmFsc2UgJiYgdGhpcy5NYXRlTGlzdFtpXS51bmxvY2tDb25kID09IHVubG9ja0NvbmQpXHJcbiAgICBcdFx0e1xyXG4gICAgXHRcdFx0dGhpcy5NYXRlTGlzdFtpXS5jYW5EYXRlID0gdHJ1ZTtcclxuICAgIFx0XHRcdElkID0gdGhpcy5NYXRlTGlzdFtpXS5JZDtcclxuXHJcblx0XHRcdFx0dmFyIHBhcmFtID0ge307XHJcblx0XHRcdFx0cGFyYW0uaWNvbiA9IHRoaXMuTWF0ZUxpc3RbaV0uaWNvbjtcclxuXHRcdFx0XHRwYXJhbS5kZXMgPSBjYy5NZ3IuZ2xvYmFsLmdldFRyYW5zbGF0aW9uKFwiVW5Mb2NrTWF0ZV9cIiArIElkKTtcclxuXHRcdFx0XHRjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuVW5Mb2NrTWF0ZSwgcGFyYW0pO1xyXG4gICAgXHRcdFx0cmV0dXJuIElkO1xyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG4gICAgXHRyZXR1cm4gSWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFVuTG9ja01hdGVCeUluSG9zcGl0YWw6ZnVuY3Rpb24odW5sb2NrQ29uZCwgb2ZmU2V4KXtcclxuICAgIFx0dmFyIElkID0gLTE7XHJcbiAgICBcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5NYXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdC8vdmFyIGR0ID0gY2MuTWdyLk1hcERhdGFNZ3IuZ2V0RGF0YUJ5SXRlbVR5cGVBbmRJZChJdGVtVHlwZS5NYXRlICwgdGhpcy5NYXRlTGlzdFtpXS5JZCk7XHJcbiAgICBcdFx0aWYodGhpcy5NYXRlTGlzdFtpXS5zZXggPT0gb2ZmU2V4ICYmIHRoaXMuTWF0ZUxpc3RbaV0uY2FuRGF0ZSA9PSBmYWxzZSAmJiB0aGlzLk1hdGVMaXN0W2ldLnVubG9ja0NvbmQgPT0gdW5sb2NrQ29uZClcclxuICAgIFx0XHR7XHJcbiAgICBcdFx0XHR0aGlzLk1hdGVMaXN0W2ldLmNhbkRhdGUgPSB0cnVlO1xyXG4gICAgXHRcdFx0SWQgPSB0aGlzLk1hdGVMaXN0W2ldLklkO1xyXG5cclxuXHRcdFx0XHR2YXIgcGFyYW0gPSB7fTtcclxuXHRcdFx0XHRwYXJhbS5pY29uID0gdGhpcy5NYXRlTGlzdFtpXS5pY29uO1xyXG5cdFx0XHRcdHBhcmFtLmRlcyA9IGNjLk1nci5nbG9iYWwuZ2V0VHJhbnNsYXRpb24oXCJVbkxvY2tNYXRlQnlJbkhvc1wiKTtcclxuXHRcdFx0XHRjYy5kaXJlY3Rvci5HbG9iYWxFdmVudC5lbWl0KGNjLk1nci5FdmVudC5PcGVuVW5Mb2NrTWF0ZSwgcGFyYW0pO1xyXG4gICAgXHRcdFx0cmV0dXJuIElkO1xyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG4gICAgXHRyZXR1cm4gSWQ7XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq3mmK/lkKblt7Lnu4/mi6XmnInkuIDkuKrkvLTkvqNcclxuICAgIEp1ZGVIYXNBbnlNYXRlOmZ1bmN0aW9uKCl7XHJcbiAgICBcdHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICBcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5NYXRlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRcdC8vY2MubG9nKFwi5piv5ZCm5bey57uP57uT5ama5LqGIFwiKyB0aGlzLk1hdGVMaXN0W2ldLlVwbHYpO1xyXG4gICAgXHRcdGlmKHRoaXMuTWF0ZUxpc3RbaV0uVXBMdiA9PSB0cnVlKVxyXG4gICAgXHRcdHtcclxuICAgIFx0XHRcdGZsYWcgPSB0cnVlO1xyXG4gICAgXHRcdFx0cmV0dXJuIGZsYWc7XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcbiAgICBcdHJldHVybiBmbGFnO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVc2VyRGF0YU1nclxyXG4iXX0=