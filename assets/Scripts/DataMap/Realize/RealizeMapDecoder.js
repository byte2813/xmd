var RealizeCondData = require("assets/Scripts/DataMap/Realize/RealizeCondData");
var RealizeData = require("assets/Scripts/DataMap/Realize/RealizeData");
var RealizeMapDecoder = cc.Class({
    extends: cc.Component,

    properties: {
        jsonName:"Realize",
        RealizeList:{
            default:[],
            type:[RealizeData],
        },
    },

    //解析数据
    DecodeJson:function (event) {
        //cc.log("===解析成就数据===");
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/"+self.jsonName, function (error, obj) {
            if(error)
            {
                //cc.log("+++解析出错，查下json+++" + error);
                self.reCb(false);
                return;
            }
            
            var jsonRoot = obj.json.Realize;
            //cc.log("===数据长度===" + jsonRoot.length);
            for (var i = 0; i < jsonRoot.length; i++) {
                var comData = new RealizeData();
                comData.Id = jsonRoot[i].Id;
                comData.name = jsonRoot[i].name;
                comData.icon = jsonRoot[i].icon;
                comData.desId = jsonRoot[i].desId;
                //完成条件
                for (var j = 0; j < jsonRoot[i].condList.length; j++) {
                    var condData = new RealizeCondData();
                    var dt = jsonRoot[i].condList[j];
                    condData.condType = dt[0];
                    condData.value = dt[1];
                    comData.condList[j] = condData;
                }
                
                self.RealizeList[i] = comData; 
            }
            self.reCb(true);
        });
    },

    //通过名字拿到当前的数据 不建议用，你要用我也没办法
    getDataByName:function (name) {
        var data = null;
        for (var i = this.RealizeList.length - 1; i >= 0; i--) {
            if(name == this.RealizeList[i].name)
            {
                data = this.RealizeList[i];
                break;
            }
        }
        return data;
    },

    //通过itemid获取数据
    getDataByItemId:function(itemId){
        var data = null;
        for (var i = this.RealizeList.length - 1; i >= 0; i--) {
            if(itemId == this.RealizeList[i].Id)
            {
                data = this.RealizeList[i];
                break;
            }
        }
        return data;
    },

    getJsonLength:function(){
        return this.RealizeList.length
    },

    getDataList:function(){
        return this.RealizeList;
    },
});
module.exports = RealizeMapDecoder;
