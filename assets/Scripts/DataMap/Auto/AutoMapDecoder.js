var AutoData = require("assets/Scripts/DataMap/Auto/AutoData");
var AutoMapDecoder = cc.Class({
    extends: cc.Component,

    properties: {
        jsonName:"Auto",
        AutoList:{
            default:[],
            type:[AutoData],
        },
    },

    //解析数据
    DecodeJson:function (event) {
        //cc.log("===解析汽车数据===");
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/"+self.jsonName, function (error, obj) {
            if(error)
            {
                //cc.log("+++解析出错，查下json+++" + error);
                self.reCb(false);
                return;
            }
            
            var jsonRoot = obj.json.Auto;
            //cc.log("===数据长度===" + jsonRoot.length);
            for (var i = 0; i < jsonRoot.length; i++) {
                var AutoD = new AutoData();
                AutoD.Id = jsonRoot[i].Id;
                AutoD.icon = jsonRoot[i].icon;
                AutoD.name = jsonRoot[i].name;
                AutoD.price = jsonRoot[i].price;
                AutoD.addBonus = jsonRoot[i].addBonus;
                AutoD.addHp = jsonRoot[i].addHp;
                AutoD.addDate = jsonRoot[i].addDate;
                self.AutoList[i] = AutoD; 
            }
            self.reCb(true);
        });
    },

    //通过名字拿到当前的数据 不建议用，你要用我也没办法
    getDataByName:function (name) {
        var data = null;
        for (var i = this.AutoList.length - 1; i >= 0; i--) {
            if(name == this.AutoList[i].name)
            {
                data = this.AutoList[i];
                break;
            }
        }
        return data;
    },

    //通过itemid获取数据
    getDataByItemId:function(itemId){
        var data = null;
        for (var i = this.AutoList.length - 1; i >= 0; i--) {
            if(itemId == this.AutoList[i].Id)
            {
                data = this.AutoList[i];
                break;
            }
        }
        return data;
    },

    getJsonLength:function(){
        return this.AutoList.length
    },

    getDataList:function(){
        return this.AutoList;
    },
});
module.exports = AutoMapDecoder;
