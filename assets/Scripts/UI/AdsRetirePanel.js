var AdsParam = require("AdsParam");
var AdsRetirePanel = cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    ShowPanel:function(){

    },
    showRewardVideo() {
        this.js2android('show_reward_video', '1')
    },

    ///激励视频播放完成回调方法 continue_game
    /// Native.android2js("continue_game", ()=>{
    ///     //激励视频播放完成，原生端回调
    /// });
    js2android(name, data){
        console.log(`name:${name}-data:${data}`);
        if(window.injectedObject && window.injectedObject.setJsContent){
            window.injectedObject.setJsContent(name, data);
        }
    },
    ConfirmUseAds:function () {
        cc.Mgr.AudioMgr.playSFX("click");
        var self = this;
        self.showRewardVideo();
        cc.Mgr.AdsMgr.ShowVideoAds(AdsParam.PointD, function(out){
            if(out == 0)
            {
                cc.Mgr.UserDataMgr.retireAge += cc.Mgr.global.tmpRetireAgeBonues;
                cc.director.GlobalEvent.emit(cc.Mgr.Event.RefreshAllUIShow, {});
                
                cc.Mgr.global.useRetireAds = true;
                self.node.active = false;
            }
        });
    },

    ShareToFriend:function(){
        cc.Mgr.PlatformController.ShareToFriend(2);
    },

    ClosePanel:function(){
        cc.Mgr.AudioMgr.playSFX("click");
        this.node.active = false;
        cc.director.GlobalEvent.emit(cc.Mgr.Event.Retire, {});
    },
});
module.exports = AdsRetirePanel;
