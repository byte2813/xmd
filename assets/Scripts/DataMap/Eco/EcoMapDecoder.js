var EcoData = require("assets/Scripts/DataMap/Eco/EcoData");
var EcoMapDecoder = cc.Class({
    extends: cc.Component,

    properties: {
        jsonName:"Eco",
        EcoList:{
            default:[],
            type:[EcoData],
        },
    },

    //解析数据
    DecodeJson:function (event) {
        //cc.log("===解析房屋数据===");
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/"+self.jsonName, function (error, obj) {
            if(error)
            {
                //cc.log("+++解析出错，查下json+++" + error);
                self.reCb(false);
                return;
            }
            
            var jsonRoot = obj.json.Eco;
            //cc.log("===数据长度===" + jsonRoot.length);
            for (var i = 0; i < jsonRoot.length; i++) {
                var EcoD = new EcoData();
                EcoD.Id = jsonRoot[i].Id;
                EcoD.icon = jsonRoot[i].icon;
                EcoD.name = jsonRoot[i].name;
                EcoD.price = jsonRoot[i].price;
                EcoD.addBonus = jsonRoot[i].addBonus;
                EcoD.addHp = jsonRoot[i].addHp;
                
                self.EcoList[i] = EcoD; 
            }
            self.reCb(true);
        });
    },

    //通过名字拿到当前的数据 不建议用，你要用我也没办法
    getDataByName:function (name) {
        var data = null;
        for (var i = this.EcoList.length - 1; i >= 0; i--) {
            if(name == this.EcoList[i].name)
            {
                data = this.EcoList[i];
                break;
            }
        }
        return data;
    },

    //通过itemid获取数据
    getDataByItemId:function(itemId){
        var data = null;
        for (var i = this.EcoList.length - 1; i >= 0; i--) {
            if(itemId == this.EcoList[i].Id)
            {
                data = this.EcoList[i];
                break;
            }
        }
        return data;
    },

    getJsonLength:function(){
        return this.EcoList.length
    },

    getDataList:function(){
        return this.EcoList;
    },

});
module.exports = EcoMapDecoder;