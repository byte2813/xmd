export default class Native {

    /**
     * 开启、禁用下拉刷新
     * @param enablePullRefresh  true：开启 false：禁用
     */
    static enablePullRefresh(enablePullRefresh: boolean){
        this.js2android('refresh',enablePullRefresh?'1':'0');
    }

    /**
     * 游戏初始化完成
     */
    static onCreateSuccess(){
        this.js2android('home_loaded','游戏首页初始化完成');
    }

    /**
     * @param levele 开始某关
     */
    static beginLevel(levele: number){
        this.js2android('begin_level',levele+"");
    }

     /**
     * @param levele 结束某关
     */
    static passLevel(levele: number){
        this.js2android('pass_level',levele+"");
    }
    
     /**
     * @param levele 进入选关
     */
    static showInsertAd(){
        this.js2android('show_insert_ad',"1");
    }
   
     /**
     * @param levele 完成某关
     */
    static gamePass(levele: number){
        this.js2android('game_pass',levele+"");
    }

     /**
     * @param levele 某关失败
     */
    static gameFailed(levele: number){
        this.js2android('game_failed',levele+"");
    }

    static openAgreement(type: string) {
        this.js2android('openAgreement', type)
    }

    /**
     * @param 显示激励视频
     * 
     */
    static showRewardVideo() {
        this.js2android('show_reward_video', '1')
    }

    ///激励视频播放完成回调方法 continue_game
    /// Native.android2js("continue_game", ()=>{
    ///     //激励视频播放完成，原生端回调
    /// });
    static js2android(name: string, data: string){
        console.log(`name:${name}-data:${data}`);
        if(window.injectedObject && window.injectedObject.setJsContent){
            window.injectedObject.setJsContent(name, data);
        }
    }

    static android2js(name, fun){
        window[name] = fun;
    }
}