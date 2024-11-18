"use strict";
cc._RF.push(module, '56bc61URDlPyZpfSEmHzgw+', 'UserState');
// Scripts/Core/UserState.js

"use strict";

//玩家状态
var UserState = cc.Enum({
  OK: 1,
  //健康状态
  NotOK: 2 //非健康状态
});

module.exports = UserState;

cc._RF.pop();