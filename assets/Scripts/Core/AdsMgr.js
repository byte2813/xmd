var AdsParam = require("AdsParam");
var eyouClientTiktok = require("EyouClientTiktok");
var eyouClientKs = require("EyouClientKs");
var eyouClient = require('eyouClient');
var AdsMgr = cc.Class({
    statics:{
    	//微信 wx
        //头条 tt
        //百度 baidu

        //对应的平台的  bannerId  采用加后缀的方式
        bannerId_baidu:"6191742",
        bannerId_wx:"adunit-42bcaae6cafaa7c6",
        bannerId_tt:"6152042",

        //百度广告id  激励视频
        bdVideoId_1:"6191756",
        bdVideoId_2:"6191755",
        bdVideoId_3:"6191754",
        bdVideoId_4:"6191753",
        bdVideoId_5:"6191752",
        bdVideoId_6:"6191751",
        bdVideoId_7:"6191749",
        bdVideoId_8:"6191748",
        bdVideoId_9:"6191747",
        bdVideoId_10:"6191744",
        //微信广告id  激励视频
        wxVideoId_1:"",
        wxVideoId_2:"",
        wxVideoId_3:"",
        wxVideoId_4:"",
        wxVideoId_5:"",
        wxVideoId_6:"",
        wxVideoId_7:"",
        wxVideoId_8:"",
        wxVideoId_9:"",
        wxVideoId_10:"",

        allScreen:false,

    	//首先确定使用的平台
    	Init:function () {
            this.allScreen = false;
        },

    	//获取广告点ID
	    getBannerAdId:function()
	    {
			let isKuaiShou = false;
			if (typeof ks !== 'undefined') {
				//运行在快手平台
				isKuaiShou = true;
			}
			if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
				return this.bannerId_wx;
			} else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
				return this.bannerId_baidu;
			} else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
				return this.bannerId_tt;
			}
			return null;
	    },

	    //获取广告点ID  这里配置 视频奖励广告 Id 由于会有多个广告点  根据后台设置来顶
	    getVideoAdId:function(adName)
	    {
			let isKuaiShou = false;
			if (typeof ks !== 'undefined') {
				//运行在快手平台
				isKuaiShou = true;
			}
	        var adId;
	        if(cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou)
	        {
	            switch(adName)
	            {
	                case AdsParam.PointA:
	                    adId = this.wxVideoId_1;
	                    break;
	                case AdsParam.PointB:
	                    adId = this.wxVideoId_2;
	                    break;
	                case AdsParam.PointC:
	                    adId = this.wxVideoId_3;
	                    break;
	                case AdsParam.PointD:
	                    adId = this.wxVideoId_4;
	                    break;
	                case AdsParam.PointE:
	                    adId = this.wxVideoId_5;
	                    break;
	                case AdsParam.PointF:
	                    adId = this.wxVideoId_6;
	                    break;
	                case AdsParam.PointG:
	                    adId = this.wxVideoId_7;
	                    break;
	                case AdsParam.PointH:
	                    adId = this.wxVideoId_8;
	                    break;
	                case AdsParam.PointI:
	                    adId = this.wxVideoId_9;
	                    break;
	                case AdsParam.PointJ:
	                    adId = this.wxVideoId_10;
	                    break;
	            }
	        }
	        else if(cc.sys.platform === cc.sys.BAIDU_GAME)
	        {
	            switch(adName)
	            {
	                case AdsParam.PointA:
	                    adId = this.bdVideoId_1;
	                    break;
	                case AdsParam.PointB:
	                    adId = this.bdVideoId_2;
	                    break;
	                case AdsParam.PointC:
	                    adId = this.bdVideoId_3;
	                    break;
	                case AdsParam.PointD:
	                    adId = this.bdVideoId_4;
	                    break;
	                case AdsParam.PointE:
	                    adId = this.bdVideoId_5;
	                    break;
	                case AdsParam.PointF:
	                    adId = this.bdVideoId_6;
	                    break;
	                case AdsParam.PointG:
	                    adId = this.bdVideoId_7;
	                    break;
	                case AdsParam.PointH:
	                    adId = this.bdVideoId_8;
	                    break;
	                case AdsParam.PointI:
	                    adId = this.bdVideoId_9;
	                    break;
	                case AdsParam.PointJ:
	                    adId = this.bdVideoId_10;
	                    break;
	            }
	        }
	        return adId;
	    },

	    ShowBannerAds:function()
	    {
	        var self = this;
			let isKuaiShou = false;
			if (typeof ks !== 'undefined') {
				//运行在快手平台
				isKuaiShou = true;
			}
	        if(this.bannerAdShowNum == null)
	            this.bannerAdShowNum = 0;
	        this.bannerAdShowNum ++;
	        if(cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou)
	        {
	            if(this.bannerAdCtrl !=null && this.bannerAdShowNum%5!=0)
	            {
	                return;
	            }
	            this.bannerAdShowNum = 0;

	            if(this.bannerAdCtrl !=null)
	                this.bannerAdCtrl.destroy();
	            let WXAD={};
	            WXAD.W = wx.getSystemInfoSync().windowWidth;
	            WXAD.H = wx.getSystemInfoSync().windowHeight;

	            let adWidth = 0;
	            if(this.allScreen)
	                adWidth = WXAD.W;
	            else
	                adWidth = 300;
	            this.bannerAdCtrl = wx.createBannerAd({
	                adUnitId: this.getBannerAdId(),
	                style: { 
	                    left: 0,
	                    top: 0/*/(WXAD.H/10)*8*/,
	                    width: adWidth,
	                }
	            });
	            this.bannerAdCtrl.onResize(res=>{
	    
	                console.log("重置广告宽度 " + WXAD.H + " , " + self.bannerAdCtrl.style.realHeight);
	                self.bannerAdCtrl.style.top = WXAD.H-self.bannerAdCtrl.style.realHeight;
	                self.bannerAdCtrl.style.left = (WXAD.W-self.bannerAdCtrl.style.realWidth)/2;
	                self.bannerAdCtrl.show();
	                
	            }); 
	            this.bannerAdCtrl.onError(err => { console.log(err) }); 
	            console.log("显示广告");
	        }
	        else if(cc.sys.platform === cc.sys.BAIDU_GAME)
	        {
	            if(swan.getSystemInfoSync().platform == 'ios') //目前 ios 不支持视频广告
	            {
	                return;
	            }
	            if(this.bannerAdCtrl !=null)
	                this.bannerAdCtrl.destroy();
	            let WXAD={};

	            WXAD.W = swan.getSystemInfoSync().windowWidth;
	            WXAD.H = swan.getSystemInfoSync().windowHeight;

	            console.log("百度的 bannerId = " + this.getBannerAdId());
	            this.bannerAdCtrl = swan.createBannerAd({
	                adUnitId: this.getBannerAdId(),
	                appSid:'c0fb407f',
	                style: { 
	                    left: 0,
	                    top: 0,
	                    width: 321,
	                }
	            });

	            if(this.allScreen)
	                self.bannerAdCtrl.style.width = WXAD.H;
	            else
	                self.bannerAdCtrl.style.width = 300;
	           
	            this.bannerAdCtrl.onResize(res=>{
	                console.log("重置广告宽度 ");
	                self.bannerAdCtrl.style.top = WXAD.H-res.height;
	                self.bannerAdCtrl.style.left = (WXAD.W-res.width)/2;
	                self.bannerAdCtrl.show();
	                
	            }); 

	            this.bannerAdCtrl.onLoad(() => {
	                console.log(' banner 加载完成');
	                self.bannerAdCtrl.show();
	            });
	            
	            this.bannerAdCtrl.onError(err => { console.log(err) }); 
	            console.log("显示广告");
	        }
	    },

	    HideBannerAd:function(){
	    	if(this.bannerAdCtrl != null)
	    		this.bannerAdCtrl.hide();
	    },

	    RecoverShowBanner:function(){
	    	if(this.bannerAdCtrl != null)
	    		this.bannerAdCtrl.show();
	    	else
	    		this.ShowBannerAds();
	    },

	    DestroyBanner:function(){
	    	if(this.bannerAdCtrl !=null)
	            this.bannerAdCtrl.destroy();
	    },

	    //cb 回调参数 0 播放完成，1 不放未完成 ，-1 视频加载出错
	    // ShowVideoAds:function(adName,cb)
	    // {
	    //     this.cb = cb
	    //     if(cc.sys.platform === cc.sys.WECHAT_GAME)
	    //     {
	    //         let videoAd = wx.createRewardedVideoAd({
	    //             adUnitId: this.getVideoAdId(adName)
	    //         })
	    //
	    //         videoAd.load()
	    //         .then(() => videoAd.show())
	    //         .catch(err => console.log(err.errMsg))
		//
	    //         videoAd.onError(err => {
	    //             console.log("广告加载出错 " + err.errMsg)
	    //             this.cb(-1);
	    //         });
		//
	    //         videoAd.onLoad(()=>{ console.log("加载事件回调") });
		//
	    //         videoAd.onClose(res =>{
	    //             console.log("是否观看完整了 " + res.isEnded)
	    //             this.cb(res.isEnded?0:1);
	    //             videoAd.offLoad();
	    //             videoAd.offError();
	    //             videoAd.offClose();
		//
	    //         });
		//
	    //     }
	    //     else if(cc.sys.platform === cc.sys.BAIDU_GAME)
	    //     {
	    //         console.log("百度的视频广告  " + this.getVideoAdId(adName));
		//
	    //         let videoAd = swan.createRewardedVideoAd({
	    //             adUnitId: this.getVideoAdId(adName),
	    //             appSid: 'c0fb407f',
	    //         })
	    //
	    //         videoAd.load()
	    //         .then(() => videoAd.show())
	    //         .catch(err => console.log(err.errMsg))
		//
	    //         videoAd.onError(err => {
	    //             console.log("广告加载出错 " + err.errMsg)
	    //             this.cb(-1);
	    //         });
		//
	    //         videoAd.onLoad(()=>{ console.log("加载事件回调") });
		//
	    //         videoAd.onClose(res =>{
	    //             console.log("是否观看完整了 " + res.isEnded)
	    //             this.cb(res.isEnded?0:1);
	    //             videoAd.offLoad();
	    //             videoAd.offError();
	    //             videoAd.offClose();
		//
	    //         });
		//
	    //     }
	    //     else
	    //     {
	    //         this.cb(0);
	    //     }
	    // },

		//cb 回调参数 0 播放完成，1 不放未完成 ，-1 视频加载出错
		ShowVideoAds:function(adName,cb) {
			this.cb = cb
			let isKuaiShou = false;
			if (typeof ks !== 'undefined') {
				//运行在快手平台
				isKuaiShou = true;
			}
			if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
				let rewardedVideoAdInfo = {
					adUnitId: '1135h0gc8ciah182j2',
					onClose: onCloseRes => {
						this.cb(onCloseRes && onCloseRes.isEnded ? 0 : 1)
					},
					onError: error => this.cb(-1)
				}
				eyouClientTiktok.getIns().createRewardedVideoAd(rewardedVideoAdInfo, createRewardedVideoAdRes => {
					if (createRewardedVideoAdRes.code === 0) {
						eyouClientTiktok.getIns().showRewardedVideoAd()
					} else {
						this.cb(-1)
					}
				})
			} else if (cc.sys.platform === cc.sys.WECHAT_GAME && !isKuaiShou) {
				let rewardedVideoAdInfo = {
					adUnitId: 'adunit-3cf372fd7487fd87',
					onClose: onCloseRes => {
						this.cb(onCloseRes && onCloseRes.code === 0 ? 0 : 1)
					}
				}
				eyouClient.getIns().createRewardedVideoAd(rewardedVideoAdInfo, createRewardedVideoAdRes => {
					if (createRewardedVideoAdRes.code === 0) {
						eyouClient.getIns().showRewardedVideoAd()
					}
				})
			}else if (isKuaiShou){
				console.log("快手广告")
				let rewardedVideoAdInfo = {
					adUnitId: '2300009525_01',
					onClose: onCloseRes => {
						this.cb(onCloseRes && onCloseRes.isEnded ? 0 : 1)
					},
					onError: error => this.cb(-1)
				}
				eyouClientKs.getIns().createRewardedVideoAd(rewardedVideoAdInfo, createRewardedVideoAdRes => {
					console.log("创建激励视频组件回调:>", createRewardedVideoAdRes);
					if (createRewardedVideoAdRes.code === 0) {
						eyouClientKs.getIns().showRewardedVideoAd()
					} else {
						this.cb(-1)
					}
				})
			}
		},
    }, 
});
module.exports = AdsMgr;
