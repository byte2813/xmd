var ArtData = require("assets/Scripts/DataMap/Art/ArtData");
var CostData = require("CostData");
var ArtMapDecoder = cc.Class({
    extends: cc.Component,

    properties: {
        jsonName:"Art",
        ArtList:{
            default:[],
            type:[ArtData],
        },
    },

    //解析数据
    DecodeJson:function (event) {
        //cc.log("===解析技能数据===");
        var self = this;
        self.reCb = event;
        cc.loader.loadRes("json/"+self.jsonName, function (error, obj) {
            if(error)
            {
                //cc.log("+++解析出错，查下json+++" + error);
                self.reCb(false);
                return;
            }
            
            var jsonRoot = obj.json.Art;
            //cc.log("===数据长度===" + jsonRoot.length);
            for (var i = 0; i < jsonRoot.length; i++) {
                var ArtData = new ArtData();
                ArtData.Id = jsonRoot[i].Id;
                ArtData.subId = jsonRoot[i].subId;
                ArtData.icon = jsonRoot[i].icon;
                ArtData.desId = jsonRoot[i].desId;
                ArtData.name = jsonRoot[i].name;
                ArtData.ArtType = jsonRoot[i].ArtType;
                ArtData.upLevel = jsonRoot[i].upCostList.length;//jsonRoot[i].upLevel;
                for (var j = 0; j < jsonRoot[i].upCostList.length; j++) {
                    var costD = new CostData();
                    costD.cost = jsonRoot[i].upCostList[j][2];
                    costD.toLevel = jsonRoot[i].upCostList[j][0];
                    costD.addBonus = jsonRoot[i].upCostList[j][1];
                    ArtData.upCostList[j] = costD;
                }
                self.ArtList[i] = ArtData; 
            }
            self.reCb(true);
        });
    },

    //通过名字拿到当前的数据 不建议用，你要用我也没办法
    getDataByName:function (name) {
        var data = null;
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            if(name == this.ArtList[i].name)
            {
                data = this.ArtList[i];
                break;
            }
        }
        return data;
    },

    //通过itemid获取数据
    getDataByItemId:function(itemId){
        var data = null;
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            if(itemId == this.ArtList[i].Id)
            {
                data = this.ArtList[i];
                break;
            }
        }
        return data;
    },

    getJsonLength:function(){
        return this.ArtList.length
    },

    getDataList:function(){
        return this.ArtList;
    },

    //获取升级技能消费数据 需要提供两个 Id
    getUpgradeCostByTwoId:function(Id,subId,tolv){
        var Cost = 20;
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            var data = this.ArtList[i];
            if(data.Id == Id && data.subId == subId)
            {
                for (var i = data.upCostList.length - 1; i >= 0; i--) {
                    var dt = data.upCostList[i];
                    if(dt.toLevel == tolv)
                    {
                        //cc.log("Id subId toLv 花费技能点===================" + dt.cost + " " + tolv);
                        Cost = dt.cost;
                        return dt.cost;
                    }
                }
            }
        }
        return Cost;
    },

    getArtAddBonusByTwoIdAndLv:function(Id,subId,lv){
        var bonus = 0;
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            var data = this.ArtList[i];
            if(data.Id == Id && data.subId == subId)
            {
                for (var i = data.upCostList.length - 1; i >= 0; i--) {
                    var dt = data.upCostList[i];
                    if(dt.toLevel == lv)
                    {
                        bonus = dt.addBonus;
                        return dt.addBonus;
                    }
                }
            }
        }
        return bonus;
    },

    getArtDataByTwoId:function(Id, subId){
        var dt = null;
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            var data = this.ArtList[i];
            if(data.Id == Id && data.subId == subId)
            {
                dt = data;
                return data;
            }
        }
        return dt;
    },

    getArtListById:function(Id){
        var param = [];
        for (var i = this.ArtList.length - 1; i >= 0; i--) {
            var data = this.ArtList[i];
            if(data.Id == Id)
            {
                param.push(data);
            }
        }
        return param;
    },

});
module.exports = ArtMapDecoder;