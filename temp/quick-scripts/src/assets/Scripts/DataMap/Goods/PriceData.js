"use strict";
cc._RF.push(module, 'b1ae83pxnVFQpySv+2WQ5Oz', 'PriceData');
// Scripts/DataMap/Goods/PriceData.js

"use strict";

var PriceData = cc.Class({
  name: "PriceData",
  properties: {
    lowprice: cc.Integer,
    highprice: cc.Integer,
    probability: 0.25
  }
});
module.exports = PriceData;

cc._RF.pop();