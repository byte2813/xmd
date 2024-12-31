var EcoData = cc.Class({
	name:"EcoData",
    properties: {
        Id:cc.Integer,
        price:cc.Integer,
        icon:"",
        name:"",
        addBonus:cc.Integer, //增加名声
		addHp:cc.Integer,//增加健康值
    },

});
module.exports = EcoData;
