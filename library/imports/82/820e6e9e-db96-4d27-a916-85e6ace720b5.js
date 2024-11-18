"use strict";
cc._RF.push(module, '820e66e25ZNJ6kWheas5yC1', 'TempBonus');
// Scripts/UI/TempBonus.js

"use strict";

//临时加成类型
var TempBonus = cc.Enum({
  NULL: 0,
  BetBonus: 1,
  LoveBonus: 2,
  StockBonus: 3,
  AssetBonus: 4 //财神
});

module.exports = TempBonus;

cc._RF.pop();