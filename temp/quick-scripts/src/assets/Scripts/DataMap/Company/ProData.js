"use strict";
cc._RF.push(module, '4e1b05PteZAdI9Ijj7OZHcm', 'ProData');
// Scripts/DataMap/Company/ProData.js

"use strict";

var ProData = cc.Class({
  name: "ProData",
  properties: {
    lowRatio: 0.8,
    //盈利亏损比例
    upRatio: 0.9,
    weight: 0.5 //权值
  }
});

module.exports = ProData;

cc._RF.pop();