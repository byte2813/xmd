var CostData = require("CostData");
var ArtData = cc.Class({
	name:"ArtData",
    properties: {
       icon:"",
       name:"",
       Id:cc.Integer,
       subId:cc.Integer,
       upLevel:cc.Integer,
       desId:cc.Integer,
       upCostList:[CostData],// 升级消耗
       skillType:cc.Integer,
    },
});
module.exports = ArtData;
