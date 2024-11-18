"use strict";
cc._RF.push(module, '3aeadbC8Q9Ke6gBVyyYRv+I', 'MateUnLockType');
// Scripts/Core/MateUnLockType.js

"use strict";

//伴侣解锁方式
var MateUnLockType = cc.Enum({
  NULL: 0,
  //直接初始解锁
  InHospital: 1,
  //住院了
  ToDate: 2 //去约会
});

module.exports = MateUnLockType;

cc._RF.pop();