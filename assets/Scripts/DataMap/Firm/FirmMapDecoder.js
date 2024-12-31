var FirmData = require("assets/Scripts/DataMap/Firm/FirmData");
var ProData = require("ProData");
var FirmMapDecoder = cc.Class({
    extends: cc.Component,

    properties: {
        jsonName:"Firm",
        FirmList:{
            default:[],
            type:[FirmData],
        },
    },

    //解析数据
    DecodeJson:function (event) {
        //cc.log("===解析公司数据===");
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/"+self.jsonName, function (error, obj) {
            if(error)
            {
                //cc.log("+++解析出错，查下json+++" + error);
                self.reCb(false);
                return;
            }
            
            var jsonRoot = obj.json.Firm;
            //cc.log("===数据长度===" + jsonRoot.length);
            for (var i = 0; i < jsonRoot.length; i++) {
                var comData = new FirmData();
                comData.Id = jsonRoot[i].Id;
                comData.icon = jsonRoot[i].icon;
                comData.name = jsonRoot[i].name;
                comData.inPrice = jsonRoot[i].inPrice;
                comData.outPrice = jsonRoot[i].outPrice; //破产点
                comData.LimitYear = jsonRoot[i].LimitYear;
                comData.bonusRatio = jsonRoot[i].bonusRatio;
                //买到后刷这个比例
                for (var j = 0; j < jsonRoot[i].proList.length; j++) {
                    var proD = new ProData();
                    proD.lowRatio = jsonRoot[i].proList[j][0];
                    proD.upRatio = jsonRoot[i].proList[j][1];
                    proD.weight = jsonRoot[i].proList[j][2];
                    comData.proList[j] = proD;
                }
                //没有买时候刷这个比例
                for (var j = 0; j < jsonRoot[i].unList.length; j++) {
                    var proD = new ProData();
                    proD.lowRatio = jsonRoot[i].unList[j][0];
                    proD.upRatio = jsonRoot[i].unList[j][1];
                    proD.weight = jsonRoot[i].unList[j][2];
                    comData.unList[j] = proD;
                }
                self.FirmList[i] = comData; 
            }
            self.reCb(true);
        });
    },

    //通过名字拿到当前的数据 不建议用，你要用我也没办法
    getDataByName:function (name) {
        var data = null;
        for (var i = this.FirmList.length - 1; i >= 0; i--) {
            if(name == this.FirmList[i].name)
            {
                data = this.FirmList[i];
                break;
            }
        }
        return data;
    },

    //通过itemid获取数据
    getDataByItemId:function(itemId){
        var data = null;
        for (var i = this.FirmList.length - 1; i >= 0; i--) {
            if(itemId == this.FirmList[i].Id)
            {
                data = this.FirmList[i];
                break;
            }
        }
        return data;
    },

    getJsonLength:function(){
        return this.FirmList.length
    },

    getDataList:function(){
        return this.FirmList;
    },

});
module.exports = FirmMapDecoder;
