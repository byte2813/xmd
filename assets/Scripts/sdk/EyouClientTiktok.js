const BASE_URL='https://games.hndibei.com';export default class EyouClientTiktok{constructor(){let x=null,y=0x2,F=null,I=null,X='-1',w='-1',U='4',j=null,K=null,z=null,A=null,t=null,P=null;const Q=new Map();let h=null;const E=(H,f)=>{H['gameId']=x,(H['platformId']=y,H['sys']=U),J(H)['then'](W=>{if(W['payType']==0x4)tt['previewImage']({'urls':[W['payUrl']],'showmenu':!![]});else{if(W['payType']==0x8)W['balance']>0x0?G('充值提示','账户余额:'+W['balance']+'元,\x20还需充值:'+W['needPay']+'元',()=>Z(W,f)):Z(W,f);else throw new Error('非法支付类型');}});},Z=(H,f)=>{if(H['needPay']==0x0){T(H,f);return;}tt['requestGamePayment']({'mode':'game','env':0x0,'currencyType':'CNY','platform':'android','buyQuantity':H['needPay']*H['rate'],'zoneId':H['zoneId'],'customId':H['orderId'],'extraInfo':H['orderId'],'success':W=>{T(H,f);}});},V=BASE_URL+'/market-multi-game-server/tiktokClient/deduct',T=async(H,f)=>{try{const W={'orderId':H['orderId'],'gameId':x,'platformId':y,'userId':H['userId']};let a=await q(V,W);a['code']===CodeStatus['SUCCESS']&&f(a);}catch(S){console['error']('[扣款失败]异常:>',S);}},d=BASE_URL+'/market-multi-game-server/tiktokClient/pullPay',J=async H=>{const f=0x3;let W=0x0,a=![],S=![];while(W<f&&!a){try{const g=await q(d,H);if(g['code']===CodeStatus['SUCCESS'])return g['data'];else!S&&(G('支付拉起失败',g['message']),S=!![]);}catch(Y){!S&&(G('支付拉起失败','网络超时'),S=!![]);}W++;}throw new Error('支付拉起失败');},k=()=>{return new Promise((H,f)=>{tt['login']({'force':!![],'success':({code:W})=>{W?(console['log']('code:>',W),H(W)):f(new Error('获取code失败'));},'fail':f});});},B=H=>{x=H;const f=tt['getSystemInfoSync']();U=f['platform']==='android'?'4':f['platform']==='ios'?'5':'6';const W=tt['getLaunchOptionsSync']()['query'];F=W['channel'],I=W['sub_channel'];const a={'10919':['promotionid','clickid']};if(a['hasOwnProperty'](F)){const [S,g]=a[F];X=W[S],w=W[g];}else F='10906',I=''+x+y+F+U+'0';},p=BASE_URL+'/market-multi-game-server/tiktokClient/adAction',o=(H,f,W)=>{let a={'gameId':x,'platformId':y,'channelId':F,'subChannelId':I,'aid':X,'traceId':w,'sys':U,'userId':K,'adType':H,'adUnitId':f,'adActionType':W};q(p,a)['catch'](S=>{console['log']('发送广告行为失败:>',S);});},L=H=>{let f=Q['get'](H);if(!f)throw new Error('未创建编号为'+H+'的客服按钮');return f;},C=()=>{if(!h)throw new Error('未创建录屏管理器');},G=(H,f,W,a)=>{tt['showModal']({'title':H,'content':f,'success':function(S){if(S['confirm']&&W)W();else S['cancel']&&a&&a();}});},q=(H,f)=>{return new Promise((W,a)=>{tt['request']({'url':H,'method':'POST','header':{'Content-Type':'application/json;charset=UTF-8'},'data':JSON['stringify'](f),'fail':a,'success':function(S){W(S['data']);},'complete':function(S){console['log']('---------------------------------请求\x20BEGIN--------------------------------'),console['log']('Url:>',H),console['log']('请求参数:>',f),console['log']('响应:>',S['data']||S['errMsg']),console['log']('---------------------------------请求\x20END--------------------------------');}});});},i=BASE_URL+'/market-multi-game-server/tiktokClient/initGame';this['init']=async(H,f)=>{try{tt['onShareAppMessage'](S=>{return{'templateId':A,'query':'','success':()=>{console['log']('分享成功');},'fail':g=>{console['log']('分享失败',g);}};}),j=await k(),B(H);const W={'code':j,'gameId':x,'platformId':y,'channelId':F,'subChannelId':I,'aid':X,'traceId':w,'sys':U},a=await q(i,W);a['code']===CodeStatus['SUCCESS']&&(K=a['data']['userId'],z=a['data']['unionId'],A=a['data']['shareTemplateId'],a['data']=null),f(a);}catch(S){console['error']('[初始化游戏]异常:>',S);}},this['login']=async H=>{H({'code':CodeStatus['SUCCESS'],'message':'操作成功','data':{'code':j}});},this['pay']=async(H,f)=>{tt['checkSession']({'success':W=>{try{E(H,f);}catch(a){console['error']('[支付拉起]异常:>',a);}},'fail':W=>{tt['login']({'success':a=>{try{E(H,f);}catch(S){console['error']('[支付拉起]异常:>',S);}}});}});};const c=BASE_URL+'/market-multi-game-server/tiktokClient/uploadRoleInfo';this['uploadRoleInfo']=async(H,f)=>{try{H['gameId']=x,H['platformId']=y;const W=await q(c,H);f(W);}catch(a){console['error']('上报角色数据异常:>',a);}};const M=BASE_URL+'/market-multi-game-server/tiktokClient/antidirt';this['antidirt']=async(H,f)=>{try{let W={'gameId':x,'platformId':y,'contents':H};const a=await q(M,W);f(a);}catch(S){console['error']('[内容安全检测]异常:>',S);}},this['createRewardedVideoAd']=(H,f)=>{let W={'adUnitId':H['adUnitId']};H['multiton']&&(W['multiton']=H['multiton'],W['multitonRewardMsg']=H['multitonRewardMsg'],W['multitonRewardTimes']=H['multitonRewardTimes']),H['progressTip']&&(W['progressTip']=H['progressTip']),P=tt['createRewardedVideoAd'](W),P['onClose'](a=>{o(AdType['REWARDED_VIDEO_AD'],t,AdActionType['FINISHED']),H['onClose']&&H['onClose'](a),P['destroy']();}),H['onError']&&P['onError'](a=>{H['onError']&&H['onError'](a),P['destroy']();}),t=H['adUnitId'],f({'code':CodeStatus['SUCCESS'],'message':'操作成功','data':null});},this['showRewardedVideoAd']=()=>{P&&(P['load'](),P['show']()['then'](()=>o(AdType['REWARDED_VIDEO_AD'],t,AdActionType['SHOW']))['catch'](H=>{P['load']()['then'](()=>{P['show']()['then'](()=>o(AdType['REWARDED_VIDEO_AD'],t,AdActionType['SHOW']));})['catch'](f=>console['log']('激励视频\x20广告显示失败'));}));},this['createContactButton']=(H,f)=>{const W=tt['createContactButton'](H);Q['set'](Q['size'],W),f({'code':CodeStatus['SUCCESS'],'message':'操作成功','data':{'contactBtnNo':Q['size']-0x1}});},this['contactBtnDestory']=H=>{let f=L(H);f['destory'](),Q['set'](H,null);},this['contactBtnShow']=H=>{let f=L(H);f['show']();},this['contactBtnHide']=H=>{let f=L(H);f['hide']();},this['createGameRecorder']=(H,f)=>{h=tt['getGameRecorderManager'](),H['onStart']&&h['onStart'](H['onStart']),H['onResume']&&h['onResume'](H['onResume']),H['onPause']&&h['onPause'](H['onPause']),H['onStop']&&h['onStop'](H['onStop']),H['onError']&&h['onError'](H['onError']),H['onInterruptionBegin']&&h['onInterruptionBegin'](H['onInterruptionBegin']),H['onInterruptionEnd']&&h['onInterruptionEnd'](H['onInterruptionEnd']),f({'code':CodeStatus['SUCCESS'],'message':'操作成功','data':null});},this['gameRecorderStart']=H=>{C(),h['start'](H);},this['gameRecorderPause']=()=>{C(),h['pause']();},this['gameRecorderResume']=()=>{C(),h['resume']();},this['gameRecorderStop']=()=>{C(),h['stop']();},this['shareAppMessage']=(H,f)=>{tt['shareAppMessage']({...H,'templateId':A,'success':()=>{f({'code':CodeStatus['SUCCESS'],'message':'操作成功','data':null});},'fail':W=>{console['log']('[分享失败]:>',W),f({'code':CodeStatus['FAIL'],'message':'操作失败','data':null});}});},this['addShortcut']=H=>{tt['addShortcut']({'complete':H});};}static['getIns'](){return!this['ins']&&(this['ins']=new EyouClientTiktok()),this['ins'];}}class CodeStatus{static ['SUCCESS']=0x0;static ['FAIL']=-0x1;}class AdType{static ['REWARDED_VIDEO_AD']=0x1;static ['BANNER_AD']=0x2;}class AdActionType{static ['SHOW']=0x1;static ['FINISHED']=0x2;}