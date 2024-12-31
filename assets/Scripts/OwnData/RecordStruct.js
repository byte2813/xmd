
//游戏记录
var RecordStruct = cc.Class({
	name:"RecordStruct",
	properties:{
		retireAge:cc.Integer,
		level:cc.Integer,  // 1 表示百万富翁 2 表示千万 3 表示亿   0 表示低于百万 
		assets:cc.Integer, //达到的资产数额
		highAssets:cc.Integer,
	},
});
module.exports = RecordStruct;
