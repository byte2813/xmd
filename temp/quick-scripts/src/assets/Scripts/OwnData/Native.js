"use strict";
cc._RF.push(module, '980c6Te8dRJ9ZzsyyX+1Tva', 'Native');
// Scripts/OwnData/Native.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Native = /** @class */ (function () {
    function Native() {
    }
    /**
     * 开启、禁用下拉刷新
     * @param enablePullRefresh  true：开启 false：禁用
     */
    Native.enablePullRefresh = function (enablePullRefresh) {
        this.js2android('refresh', enablePullRefresh ? '1' : '0');
    };
    /**
     * 游戏初始化完成
     */
    Native.onCreateSuccess = function () {
        this.js2android('home_loaded', '游戏首页初始化完成');
    };
    /**
     * @param levele 开始某关
     */
    Native.beginLevel = function (levele) {
        this.js2android('begin_level', levele + "");
    };
    /**
    * @param levele 结束某关
    */
    Native.passLevel = function (levele) {
        this.js2android('pass_level', levele + "");
    };
    /**
    * @param levele 进入选关
    */
    Native.showInsertAd = function () {
        this.js2android('show_insert_ad', "1");
    };
    /**
    * @param levele 完成某关
    */
    Native.gamePass = function (levele) {
        this.js2android('game_pass', levele + "");
    };
    /**
    * @param levele 某关失败
    */
    Native.gameFailed = function (levele) {
        this.js2android('game_failed', levele + "");
    };
    Native.openAgreement = function (type) {
        this.js2android('openAgreement', type);
    };
    /**
     * @param 显示激励视频
     *
     */
    Native.showRewardVideo = function () {
        this.js2android('show_reward_video', '1');
    };
    ///激励视频播放完成回调方法 continue_game
    /// Native.android2js("continue_game", ()=>{
    ///     //激励视频播放完成，原生端回调
    /// });
    Native.js2android = function (name, data) {
        console.log("name:" + name + "-data:" + data);
        if (window.injectedObject && window.injectedObject.setJsContent) {
            window.injectedObject.setJsContent(name, data);
        }
    };
    Native.android2js = function (name, fun) {
        window[name] = fun;
    };
    return Native;
}());
exports.default = Native;

cc._RF.pop();