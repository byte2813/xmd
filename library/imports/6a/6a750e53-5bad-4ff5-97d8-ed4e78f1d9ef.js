"use strict";
cc._RF.push(module, '6a7505TW61P9ZfY7U548dnv', 'GoodsData');
// Scripts/DataMap/Goods/GoodsData.js

"use strict";

var PriceData = require("PriceData");
var GoodsData = cc.Class({
  name: "GoodsData",
  properties: {
    icon: "",
    name: "",
    Id: cc.Integer,
    priceList: [PriceData]
  }
});
module.exports = GoodsData;

cc._RF.pop();