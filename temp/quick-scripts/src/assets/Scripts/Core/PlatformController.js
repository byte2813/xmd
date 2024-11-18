"use strict";
cc._RF.push(module, 'df981lfZ3ZDuI2YfqwwH8kx', 'PlatformController');
// Scripts/Core/PlatformController.js

"use strict";

var PlatformController = cc.Class({
  statics: {
    wxSubContextViewLock: 0,
    //微信 wx
    //头条 tt
    //百度 baidu
    nickName: "校长王",
    Init: function Init() {
      this.InitRandNickName();

      // this.CreateGameClub();
    },

    //百度 头条等先判定是否登陆了
    IsLoginSync: function IsLoginSync() {
      if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        var result = swan.isLoginSync();
        if (result.isLogin) {
          console.log("已经有登陆了");
          return true;
        }
        return false;
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {}
      return true;
    },
    Login: function Login() {
      var self = this;
      if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        swan.login({
          success: function success() {
            self.setUserCloudStorage(cc.Mgr.UserDataMgr.HistoryHighAssets);
          },
          fail: function fail() {
            swan.showModal({
              title: "登录失败",
              content: "是否重新登录？",
              cancelText: "退出游戏",
              success: function success(res) {
                if (res.confirm) {
                  console.log("点击了确定");
                  self.Login();
                } else if (res.cancel) {
                  console.log("点击了取消");
                  swan.exit();
                }
              }
            });
          }
        });
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {}
      return true;
    },
    //游戏圈按钮
    CreateGameClub: function CreateGameClub() {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        var winSize = cc.view.getVisibleSize();
        var leftRatio = 68 / winSize.width;
        var topRatio = 275 / winSize.height;
        var sysInfo = wx.getSystemInfoSync();
        this.leftPos = sysInfo.windowWidth * leftRatio;
        this.topPos = sysInfo.windowHeight * topRatio;
        console.log(this.topPos + "  ================创建游戏圈按钮===============" + this.leftPos);
        var self = this;
        this.gameClubBtn = wx.createGameClubButton({
          icon: 'green',
          text: "游戏圈",
          style: {
            left: self.leftPos - 20,
            top: self.topPos - 20,
            width: 45,
            height: 45
          }
        });
      }
    },
    ShowClubButton: function ShowClubButton(flag) {
      if (flag === void 0) {
        flag = false;
      }
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && this.gameClubBtn != null && !isKuaiShou) {
        if (flag == true) this.gameClubBtn.show();else this.gameClubBtn.hide();
      }
    },
    //随机一个名字
    InitRandNickName: function InitRandNickName() {
      var seed = Math.floor(Math.random() * 24) + 1;
      this.nickName = cc.Mgr.global.getTranslation("Name" + seed);
      cc.log("================================ " + this.nickName);
    },
    //右上角的转发按钮
    ShareTopNav: function ShareTopNav() {
      var index = Math.floor(Math.random() * 6);
      var info = cc.Mgr.ShareInfos.getShareInfos(index);
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        wx.showShareMenu({
          withShareTicket: true
        });
        wx.onShareAppMessage(function () {
          // 用户点击了“转发”按钮
          return {
            title: "【有人@你】我在这个游戏里面挣了一个亿",
            imageUrlId: 'dwMg-qBPS8S7MIWk4VRHxw',
            imageUrl: "https://paopao.talkyun.com.cn/yiyi/1.jpg"
          };
        });
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
        tt.showShareMenu(false);
        tt.onShareAppMessage(function () {
          // 用户点击了“转发”按钮
          return {
            title: info.text,
            //imageUrlId: 'Ik14RZj7SV2BtigrtE3d1g',
            imageUrl: info.url
          };
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        swan.showShareMenu(false);
        swan.onShareAppMessage(function () {
          // 用户点击了“转发”按钮
          return {
            title: info.text,
            imageUrl: info.url
          };
        });
      }
    },
    //转发一段文本
    ShareToFriendTxt: function ShareToFriendTxt(str) {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        console.log("点击了分享啊");
        wx.shareAppMessage({
          title: str
        });
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
        tt.shareAppMessage({
          title: str
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        console.log("点击了分享啊");
        swan.shareAppMessage({
          title: str
        });
      } else if (isKuaiShou) {
        ks.shareAppMessage({});
      }
    },
    //自定义转发
    ShareToFriend: function ShareToFriend(index) {
      var info = cc.Mgr.ShareInfos.getShareInfos(index);
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        console.log("点击了分享啊");
        wx.shareAppMessage({
          title: info.text,
          imageUrl: info.url
        });
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
        tt.shareAppMessage({
          title: info.text,
          imageUrl: info.url
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        console.log("点击了分享啊");
        swan.shareAppMessage({
          title: info.text,
          imageUrl: info.url
        });
      } else if (isKuaiShou) {
        ks.shareAppMessage({});
      }
    },
    //显示平台的小弹窗 回调用
    showToast: function showToast(text) {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      cc.log(text);
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        wx.showToast({
          title: text,
          icon: 'success',
          duration: 2000
        });
      } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
        tt.showToast({
          title: text,
          icon: 'success',
          duration: 2000
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        swan.showToast({
          title: text,
          icon: 'success',
          duration: 2000
        });
      } else if (isKuaiShou) {
        ks.showToast({
          title: text,
          icon: 'success',
          duration: 2000
        });
      }
    },
    //微信开放数据存储 score 代表当前要保存的东西
    setUserCloudStorage: function setUserCloudStorage(socre) {
      if (!this.IsLoginSync()) {
        return;
      }
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      cc.log("setUserCloudStorage socre = " + socre);
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        var kvData = {};
        kvData.wxgame = {};
        kvData.wxgame.score = socre;
        kvData.wxgame.update_time = new Date().getTime();
        console.log(JSON.stringify(kvData));
        var kvDataList = new Array();
        kvDataList.push({
          key: "xmbScore",
          value: JSON.stringify(kvData)
        });
        wx.setUserCloudStorage({
          KVDataList: kvDataList,
          success: function success(res) {
            console.log("success:" + JSON.stringify(res));
          },
          fail: function fail(res) {
            console.log("fail : " + res);
          }
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        var kvData = {};
        kvData.wxgame = {};
        kvData.wxgame.score = socre;
        kvData.wxgame.update_time = new Date().getTime();
        console.log(JSON.stringify(kvData));
        var kvDataList = new Array();
        kvDataList.push({
          key: "xmbScore",
          value: JSON.stringify(kvData)
        });
        swan.setUserCloudStorage({
          KVDataList: kvDataList,
          success: function success(res) {
            return console.log("success " + res);
          },
          fail: function fail(res) {
            return console.log("fail " + res);
          },
          complete: function complete(res) {
            return console.log("complete " + res);
          }
        });
      }
    },
    //是否支持排行功能
    IsSupportRank: function IsSupportRank() {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou || cc.sys.platform === cc.sys.BAIDU_GAME) return true;
      return false;
    },
    //显示子域
    showSubContentView: function showSubContentView() {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou || cc.sys.platform === cc.sys.BAIDU_GAME) {
        var param = {};
        param.flag = true;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, param);
      }
    },
    hideSubContentView: function hideSubContentView() {
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou || cc.sys.platform === cc.sys.BAIDU_GAME) {
        var param = {};
        param.flag = false;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, param);
      }
    },
    SendMessageToSubView: function SendMessageToSubView(code, curScore) {
      if (curScore === void 0) {
        curScore = 0;
      }
      var msg = {};
      msg.code = code;
      msg.curScore = curScore;
      var isKuaiShou = false;
      if (typeof ks !== 'undefined') {
        //运行在快手平台
        isKuaiShou = true;
      }
      if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
        wx.getOpenDataContext().postMessage({
          message: msg
        });
      } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
        swan.getOpenDataContext().postMessage({
          message: msg
        });
      }
    },
    //整理数据
    CollateData: function CollateData(data) {
      this.userInfo = [];
      var j = 0;
      for (var _i = 0; _i < data.length; ++_i) {
        if (data[_i].KVDataList.length == 0) {
          console.log("combData 没有此项数据");
          continue;
        }
        //{"openid":"o0OhZ5Kn2xO9b5FVR8TE0YXOl3Wc","nickname":"杨彬","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/FcRibGPkicSKhn6LA1OWfL7ictiaKiajzibzW8zwQibkGKdCJmmiasvibcRasI2KytcVtW8ClH5IQTsOs3CB8vyMSUAOarA/132","KVDataList":[{"key":"\belsfkScore","value":"{\"wxgame\":{\"score\":1889,\"update_time\":1553824369920}}"}]}
        this.userInfo[j] = {};
        this.userInfo[j].openid = data[_i].openid;
        this.userInfo[j].nickname = data[_i].nickname;
        this.userInfo[j].avatarUrl = data[_i].avatarUrl;
        var kVDataListValuestr = data[_i].KVDataList[0].value;
        kVDataListValuestr = kVDataListValuestr.substr(1); //删除第一个字符
        kVDataListValuestr = kVDataListValuestr.substr(0, kVDataListValuestr.length - 1);
        kVDataListValuestr = "{" + kVDataListValuestr + "}";
        var gameScore = JSON.parse(kVDataListValuestr).wxgame;
        this.userInfo[j].score = gameScore.score;
        j++;
      }
      //给用户数据进行排序
      this.userInfo.sort(function (a, b) {
        if (a.score < b.score) return 1;else if (a.score > b.score) return -1;else return 0;
      });
      console.log("CollateData--- " + JSON.stringify(this.userInfo));
      for (var i = 0; i < this.userInfo.length; i++) {
        //挑出自己的排名
        if (this.userInfo[i].avatarUrl == this.avatarUrl) {
          this.mySordId = i;
        }
      }
    }
  }
});
module.exports = PlatformController;

cc._RF.pop();