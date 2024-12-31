var RealizeCondData = require("assets/Scripts/DataMap/Realize/RealizeCondData");
var RealizeData = cc.Class({
    name:"RealizeData",

    properties: {
    	name:"",
    	icon:"",
        Id:cc.Integer,
        desId:cc.Integer,
        condList:[RealizeCondData],
       //额外条件 
    },
});
module.exports = RealizeData;
