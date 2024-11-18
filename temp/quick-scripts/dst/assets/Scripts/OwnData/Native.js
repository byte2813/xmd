
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/OwnData/Native.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT3duRGF0YVxcTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBOEVBLENBQUM7SUE1RUc7OztPQUdHO0lBQ0ksd0JBQWlCLEdBQXhCLFVBQXlCLGlCQUEwQjtRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBQyxpQkFBaUIsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxzQkFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFQTs7TUFFRTtJQUNJLGdCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFQTs7TUFFRTtJQUNJLG1CQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUE7O01BRUU7SUFDSSxlQUFRLEdBQWYsVUFBZ0IsTUFBYztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVBOztNQUVFO0lBQ0ksaUJBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9CQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1Qyx3QkFBd0I7SUFDeEIsT0FBTztJQUNBLGlCQUFVLEdBQWpCLFVBQWtCLElBQVksRUFBRSxJQUFZO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUSxJQUFJLGNBQVMsSUFBTSxDQUFDLENBQUM7UUFDekMsSUFBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFDO1lBQzNELE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFTSxpQkFBVSxHQUFqQixVQUFrQixJQUFJLEVBQUUsR0FBRztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdGl2ZSB7XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/jgIHnpoHnlKjkuIvmi4nliLfmlrBcbiAgICAgKiBAcGFyYW0gZW5hYmxlUHVsbFJlZnJlc2ggIHRydWXvvJrlvIDlkK8gZmFsc2XvvJrnpoHnlKhcbiAgICAgKi9cbiAgICBzdGF0aWMgZW5hYmxlUHVsbFJlZnJlc2goZW5hYmxlUHVsbFJlZnJlc2g6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ3JlZnJlc2gnLGVuYWJsZVB1bGxSZWZyZXNoPycxJzonMCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+WIneWni+WMluWujOaIkFxuICAgICAqL1xuICAgIHN0YXRpYyBvbkNyZWF0ZVN1Y2Nlc3MoKXtcbiAgICAgICAgdGhpcy5qczJhbmRyb2lkKCdob21lX2xvYWRlZCcsJ+a4uOaIj+mmlumhteWIneWni+WMluWujOaIkCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsZXZlbGUg5byA5aeL5p+Q5YWzXG4gICAgICovXG4gICAgc3RhdGljIGJlZ2luTGV2ZWwobGV2ZWxlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ2JlZ2luX2xldmVsJyxsZXZlbGUrXCJcIik7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIEBwYXJhbSBsZXZlbGUg57uT5p2f5p+Q5YWzXG4gICAgICovXG4gICAgc3RhdGljIHBhc3NMZXZlbChsZXZlbGU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuanMyYW5kcm9pZCgncGFzc19sZXZlbCcsbGV2ZWxlK1wiXCIpO1xuICAgIH1cbiAgICBcbiAgICAgLyoqXG4gICAgICogQHBhcmFtIGxldmVsZSDov5vlhaXpgInlhbNcbiAgICAgKi9cbiAgICBzdGF0aWMgc2hvd0luc2VydEFkKCl7XG4gICAgICAgIHRoaXMuanMyYW5kcm9pZCgnc2hvd19pbnNlcnRfYWQnLFwiMVwiKTtcbiAgICB9XG4gICBcbiAgICAgLyoqXG4gICAgICogQHBhcmFtIGxldmVsZSDlrozmiJDmn5DlhbNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2FtZVBhc3MobGV2ZWxlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ2dhbWVfcGFzcycsbGV2ZWxlK1wiXCIpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBAcGFyYW0gbGV2ZWxlIOafkOWFs+Wksei0pVxuICAgICAqL1xuICAgIHN0YXRpYyBnYW1lRmFpbGVkKGxldmVsZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5qczJhbmRyb2lkKCdnYW1lX2ZhaWxlZCcsbGV2ZWxlK1wiXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuQWdyZWVtZW50KHR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ29wZW5BZ3JlZW1lbnQnLCB0eXBlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSDmmL7npLrmv4DlirHop4bpopFcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgc2hvd1Jld2FyZFZpZGVvKCkge1xuICAgICAgICB0aGlzLmpzMmFuZHJvaWQoJ3Nob3dfcmV3YXJkX3ZpZGVvJywgJzEnKVxuICAgIH1cblxuICAgIC8vL+a/gOWKseinhumikeaSreaUvuWujOaIkOWbnuiwg+aWueazlSBjb250aW51ZV9nYW1lXG4gICAgLy8vIE5hdGl2ZS5hbmRyb2lkMmpzKFwiY29udGludWVfZ2FtZVwiLCAoKT0+e1xuICAgIC8vLyAgICAgLy/mv4DlirHop4bpopHmkq3mlL7lrozmiJDvvIzljp/nlJ/nq6/lm57osINcbiAgICAvLy8gfSk7XG4gICAgc3RhdGljIGpzMmFuZHJvaWQobmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpe1xuICAgICAgICBjb25zb2xlLmxvZyhgbmFtZToke25hbWV9LWRhdGE6JHtkYXRhfWApO1xuICAgICAgICBpZih3aW5kb3cuaW5qZWN0ZWRPYmplY3QgJiYgd2luZG93LmluamVjdGVkT2JqZWN0LnNldEpzQ29udGVudCl7XG4gICAgICAgICAgICB3aW5kb3cuaW5qZWN0ZWRPYmplY3Quc2V0SnNDb250ZW50KG5hbWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFuZHJvaWQyanMobmFtZSwgZnVuKXtcbiAgICAgICAgd2luZG93W25hbWVdID0gZnVuO1xuICAgIH1cbn0iXX0=