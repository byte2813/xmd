
(function () {
var scripts = [{"deps":{"./assets/Scripts/Core/AdsParam":16,"./assets/Scripts/Core/AudioMgr":14,"./assets/Scripts/Core/Event":3,"./assets/Scripts/Core/Global":19,"./assets/Scripts/Core/GlobalEvent":17,"./assets/Scripts/Core/ItemType":20,"./assets/Scripts/Core/MateBonusType":22,"./assets/Scripts/Core/MateGetType":23,"./assets/Scripts/Core/MateUnLockType":21,"./assets/Scripts/Core/NoticeText":26,"./assets/Scripts/Core/PlatformController":27,"./assets/Scripts/Core/RewardType":24,"./assets/Scripts/Core/ShareInfos":28,"./assets/Scripts/Core/SkillType":25,"./assets/Scripts/Core/TutorialStep":31,"./assets/Scripts/Core/UserDataMgr":32,"./assets/Scripts/Core/UserState":29,"./assets/Scripts/Core/AchieveCond":35,"./assets/Scripts/DataMap/MapDataMgr":30,"./assets/Scripts/DataMap/Achieve/AchieveData":36,"./assets/Scripts/DataMap/Achieve/AchieveMapDecoder":2,"./assets/Scripts/DataMap/Achieve/AchieveCondData":33,"./assets/Scripts/DataMap/Car/CarMapDecoder":4,"./assets/Scripts/DataMap/Car/CarData":34,"./assets/Scripts/DataMap/Company/CompanyMapDecoder":37,"./assets/Scripts/DataMap/Company/ProData":41,"./assets/Scripts/DataMap/Company/CompanyData":5,"./assets/Scripts/DataMap/EventData/EventMapDecoder":6,"./assets/Scripts/DataMap/EventData/EventResult":44,"./assets/Scripts/DataMap/EventData/EventTipData":38,"./assets/Scripts/DataMap/EventData/EventCost":43,"./assets/Scripts/DataMap/ExtraData":39,"./assets/Scripts/DataMap/Goods/GoodsData":8,"./assets/Scripts/DataMap/Goods/PriceData":42,"./assets/Scripts/DataMap/Goods/GoodMapDecoder":40,"./assets/Scripts/DataMap/House/HouseMapDecoder":7,"./assets/Scripts/DataMap/House/HouseData":46,"./assets/Scripts/DataMap/InitCash/CashMapDecoder":9,"./assets/Scripts/DataMap/InitCash/CashData":45,"./assets/Scripts/DataMap/Mate/MateBonus":55,"./assets/Scripts/DataMap/Mate/MateData":48,"./assets/Scripts/DataMap/Mate/MateGetCond":10,"./assets/Scripts/DataMap/Mate/MateMapDecoder":47,"./assets/Scripts/DataMap/Mate/LovePointCost":51,"./assets/Scripts/DataMap/Skill/SkillData":52,"./assets/Scripts/DataMap/Skill/SkillMapDecoder":11,"./assets/Scripts/DataMap/Skill/CostData":49,"./assets/Scripts/OwnData/CarStruct":12,"./assets/Scripts/OwnData/CompanyStruct":53,"./assets/Scripts/OwnData/GoodsStruct":50,"./assets/Scripts/OwnData/HouseStruct":54,"./assets/Scripts/OwnData/MateStruct":57,"./assets/Scripts/OwnData/Native":58,"./assets/Scripts/OwnData/RecordStruct":56,"./assets/Scripts/OwnData/SkillStruct":61,"./assets/Scripts/OwnData/AchieveStruct":59,"./assets/Scripts/UI/AdsRetirePanel":13,"./assets/Scripts/UI/AppStart":60,"./assets/Scripts/UI/BelongItem":62,"./assets/Scripts/UI/BelongMateItem":65,"./assets/Scripts/UI/BetPanel":63,"./assets/Scripts/UI/BuyTipPanel":66,"./assets/Scripts/UI/CarItem":64,"./assets/Scripts/UI/CarPanel":70,"./assets/Scripts/UI/CommonBuyPanel":67,"./assets/Scripts/UI/CommonTipPanel":68,"./assets/Scripts/UI/CompanyBuyTipPanel":74,"./assets/Scripts/UI/CompanyCreateTipPanel":69,"./assets/Scripts/UI/CompanyItem":73,"./assets/Scripts/UI/CompanySaleTipPanel":71,"./assets/Scripts/UI/EnjoyPanel":72,"./assets/Scripts/UI/EventPanel":78,"./assets/Scripts/UI/EventResultPanel":77,"./assets/Scripts/UI/GameScene":84,"./assets/Scripts/UI/GoodsItem":75,"./assets/Scripts/UI/HistoryPanel":80,"./assets/Scripts/UI/HonorItem":76,"./assets/Scripts/UI/HonorPanel":81,"./assets/Scripts/UI/HouseItem":79,"./assets/Scripts/UI/HousePanel":89,"./assets/Scripts/UI/JoyPanel":82,"./assets/Scripts/UI/JoyTipPanel":83,"./assets/Scripts/UI/MarketTipItem":86,"./assets/Scripts/UI/MarketTipPanel":85,"./assets/Scripts/UI/MarryPanel":88,"./assets/Scripts/UI/MateItem":87,"./assets/Scripts/UI/MateItemPanel":91,"./assets/Scripts/UI/MateTipPanel":90,"./assets/Scripts/UI/OwnItem":96,"./assets/Scripts/UI/OwnedCarPanel":92,"./assets/Scripts/UI/OwnedHousePanel":93,"./assets/Scripts/UI/OwnedMatePanel":95,"./assets/Scripts/UI/OwnedPanel":102,"./assets/Scripts/UI/RankPanel":98,"./assets/Scripts/UI/RetirePanel":94,"./assets/Scripts/UI/RotationLoading":99,"./assets/Scripts/UI/SaleTipPanel":97,"./assets/Scripts/UI/SettingPanel":100,"./assets/Scripts/UI/SkillItem":101,"./assets/Scripts/UI/SkillPanel":105,"./assets/Scripts/UI/SkillUpPanel":104,"./assets/Scripts/UI/StartUpPanel":103,"./assets/Scripts/UI/TempBonus":107,"./assets/Scripts/UI/TimePanel":106,"./assets/Scripts/UI/TreatPanel":109,"./assets/Scripts/UI/TutorialPanel":108,"./assets/Scripts/UI/UnlockMatePanel":112,"./assets/Scripts/UI/WatchAdsPanel":110,"./assets/Scripts/UI/AddCapacity":111,"./assets/Scripts/sdk/EyouClientTiktok":15,"./assets/Scripts/sdk/eyouClient":113,"./assets/Scripts/sdk/EyouClientKs":114,"./assets/Scripts/utils/httpUtil":18,"./assets/Scripts/Core/AdsMgr":115,"./assets/migration/use_v2.0.x_cc.Toggle_event":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"AchieveCondData":33,"AchieveData":36},"path":"preview-scripts/assets/Scripts/DataMap/Achieve/AchieveMapDecoder.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/Event.js"},{"deps":{"CarData":34},"path":"preview-scripts/assets/Scripts/DataMap/Car/CarMapDecoder.js"},{"deps":{"ProData":41},"path":"preview-scripts/assets/Scripts/DataMap/Company/CompanyData.js"},{"deps":{"EventTipData":38,"EventCost":43,"EventResult":44},"path":"preview-scripts/assets/Scripts/DataMap/EventData/EventMapDecoder.js"},{"deps":{"HouseData":46},"path":"preview-scripts/assets/Scripts/DataMap/House/HouseMapDecoder.js"},{"deps":{"PriceData":42},"path":"preview-scripts/assets/Scripts/DataMap/Goods/GoodsData.js"},{"deps":{"CashData":45},"path":"preview-scripts/assets/Scripts/DataMap/InitCash/CashMapDecoder.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Mate/MateGetCond.js"},{"deps":{"SkillData":52,"CostData":49},"path":"preview-scripts/assets/Scripts/DataMap/Skill/SkillMapDecoder.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/CarStruct.js"},{"deps":{"AdsParam":16},"path":"preview-scripts/assets/Scripts/UI/AdsRetirePanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/sdk/EyouClientTiktok.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/AdsParam.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/GlobalEvent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/httpUtil.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/Global.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/ItemType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/MateUnLockType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/MateBonusType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/MateGetType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/RewardType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/SkillType.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/NoticeText.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/PlatformController.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/ShareInfos.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/UserState.js"},{"deps":{"CarMapDecoder":4,"CompanyMapDecoder":37,"GoodMapDecoder":40,"HouseMapDecoder":7,"MateMapDecoder":47,"SkillMapDecoder":11,"CashMapDecoder":9,"AchieveMapDecoder":2,"EventMapDecoder":6,"ItemType":20},"path":"preview-scripts/assets/Scripts/DataMap/MapDataMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/TutorialStep.js"},{"deps":{"ItemType":20,"RewardType":24,"MateBonusType":22,"SkillType":25,"MateUnLockType":21,"MateGetType":23,"UserState":29,"AchieveCond":35,"AchieveStruct":59,"RecordStruct":56,"GoodsStruct":50,"CarStruct":12,"HouseStruct":54,"CompanyStruct":53,"MateStruct":57,"SkillStruct":61,"EyouClientKs":114,"eyouClient":113,"EyouClientTiktok":15,"httpUtil":18,"AchieveCondData":33,"crypto":116},"path":"preview-scripts/assets/Scripts/Core/UserDataMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Achieve/AchieveCondData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Car/CarData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Core/AchieveCond.js"},{"deps":{"AchieveCondData":33},"path":"preview-scripts/assets/Scripts/DataMap/Achieve/AchieveData.js"},{"deps":{"ProData":41,"CompanyData":5},"path":"preview-scripts/assets/Scripts/DataMap/Company/CompanyMapDecoder.js"},{"deps":{"EventCost":43,"EventResult":44},"path":"preview-scripts/assets/Scripts/DataMap/EventData/EventTipData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/ExtraData.js"},{"deps":{"PriceData":42,"GoodsData":8},"path":"preview-scripts/assets/Scripts/DataMap/Goods/GoodMapDecoder.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Company/ProData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Goods/PriceData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/EventData/EventCost.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/EventData/EventResult.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/InitCash/CashData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/House/HouseData.js"},{"deps":{"LovePointCost":51,"MateData":48,"MateBonus":55,"MateGetCond":10},"path":"preview-scripts/assets/Scripts/DataMap/Mate/MateMapDecoder.js"},{"deps":{"LovePointCost":51,"MateGetCond":10,"MateBonus":55},"path":"preview-scripts/assets/Scripts/DataMap/Mate/MateData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Skill/CostData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/GoodsStruct.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Mate/LovePointCost.js"},{"deps":{"CostData":49},"path":"preview-scripts/assets/Scripts/DataMap/Skill/SkillData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/CompanyStruct.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/HouseStruct.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/DataMap/Mate/MateBonus.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/RecordStruct.js"},{"deps":{"ItemType":20,"MateUnLockType":21},"path":"preview-scripts/assets/Scripts/OwnData/MateStruct.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/Native.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/AchieveStruct.js"},{"deps":{"Global":19,"Event":3,"ShareInfos":28,"PlatformController":27,"AdsMgr":115,"AudioMgr":14,"MapDataMgr":30,"UserDataMgr":32,"RankPanel":98,"HistoryPanel":80,"HonorPanel":81,"SkillPanel":105,"SkillUpPanel":104,"SettingPanel":100,"CommonTipPanel":68},"path":"preview-scripts/assets/Scripts/UI/AppStart.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/OwnData/SkillStruct.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/BelongItem.js"},{"deps":{"TempBonus":107},"path":"preview-scripts/assets/Scripts/UI/BetPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/CarItem.js"},{"deps":{"ItemType":20,"MateBonusType":22},"path":"preview-scripts/assets/Scripts/UI/BelongMateItem.js"},{"deps":{"Event":3},"path":"preview-scripts/assets/Scripts/UI/BuyTipPanel.js"},{"deps":{"ItemType":20,"UserState":29},"path":"preview-scripts/assets/Scripts/UI/CommonBuyPanel.js"},{"deps":{"Event":3,"MateUnLockType":21},"path":"preview-scripts/assets/Scripts/UI/CommonTipPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/CompanyCreateTipPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/CarPanel.js"},{"deps":{"ItemType":20,"TempBonus":107},"path":"preview-scripts/assets/Scripts/UI/CompanySaleTipPanel.js"},{"deps":{"JoyPanel":82,"HousePanel":89,"TreatPanel":109,"CarPanel":70},"path":"preview-scripts/assets/Scripts/UI/EnjoyPanel.js"},{"deps":{"ItemType":20,"UserState":29},"path":"preview-scripts/assets/Scripts/UI/CompanyItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/CompanyBuyTipPanel.js"},{"deps":{"Event":3,"UserState":29},"path":"preview-scripts/assets/Scripts/UI/GoodsItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/HonorItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/EventResultPanel.js"},{"deps":{"ItemType":20,"RewardType":24,"UserState":29},"path":"preview-scripts/assets/Scripts/UI/EventPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/HouseItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/HistoryPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/HonorPanel.js"},{"deps":{"MateUnLockType":21,"JoyTipPanel":83},"path":"preview-scripts/assets/Scripts/UI/JoyPanel.js"},{"deps":{"MateUnLockType":21},"path":"preview-scripts/assets/Scripts/UI/JoyTipPanel.js"},{"deps":{"ItemType":20,"UserState":29,"CommonTipPanel":68,"TreatPanel":109,"RankPanel":98,"EyouClientTiktok":15,"EyouClientKs":114,"GoodsItem":75,"BuyTipPanel":66,"SaleTipPanel":97,"CompanyCreateTipPanel":69,"CompanyBuyTipPanel":74,"CompanySaleTipPanel":71,"MateTipPanel":90,"MateItemPanel":91,"EnjoyPanel":72,"CommonBuyPanel":67,"OwnedPanel":102,"BetPanel":63,"RetirePanel":94,"AddCapacity":111,"MarketTipPanel":85,"EventPanel":78,"EventResultPanel":77,"WatchAdsPanel":110,"MarryPanel":88,"TutorialPanel":108,"TimePanel":106,"AdsRetirePanel":13,"UnlockMatePanel":112,"TutorialStep":31},"path":"preview-scripts/assets/Scripts/UI/GameScene.js"},{"deps":{"MarketTipItem":86},"path":"preview-scripts/assets/Scripts/UI/MarketTipPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/MarketTipItem.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/MateItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/MarryPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/HousePanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/MateTipPanel.js"},{"deps":{"ItemType":20,"MateGetType":23,"MateBonusType":22},"path":"preview-scripts/assets/Scripts/UI/MateItemPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/OwnedCarPanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/OwnedHousePanel.js"},{"deps":{"AchieveCond":35,"RecordStruct":56,"AdsParam":16},"path":"preview-scripts/assets/Scripts/UI/RetirePanel.js"},{"deps":{"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/OwnedMatePanel.js"},{"deps":{"Event":3,"UserState":29,"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/OwnItem.js"},{"deps":{"Event":3,"AdsParam":16,"TempBonus":107},"path":"preview-scripts/assets/Scripts/UI/SaleTipPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/RankPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/RotationLoading.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/SettingPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/SkillItem.js"},{"deps":{"ItemType":20,"OwnedMatePanel":95,"OwnedCarPanel":92,"OwnedHousePanel":93},"path":"preview-scripts/assets/Scripts/UI/OwnedPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/StartUpPanel.js"},{"deps":{"SkillPanel":105,"ItemType":20},"path":"preview-scripts/assets/Scripts/UI/SkillUpPanel.js"},{"deps":{"AdsParam":16,"CommonTipPanel":68},"path":"preview-scripts/assets/Scripts/UI/SkillPanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/TimePanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/TempBonus.js"},{"deps":{"TutorialStep":31},"path":"preview-scripts/assets/Scripts/UI/TutorialPanel.js"},{"deps":{"AdsParam":16},"path":"preview-scripts/assets/Scripts/UI/TreatPanel.js"},{"deps":{"TempBonus":107,"AdsParam":16,"MateUnLockType":21},"path":"preview-scripts/assets/Scripts/UI/WatchAdsPanel.js"},{"deps":{"AdsParam":16},"path":"preview-scripts/assets/Scripts/UI/AddCapacity.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/UI/UnlockMatePanel.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/sdk/eyouClient.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/sdk/EyouClientKs.js"},{"deps":{"AdsParam":16,"EyouClientTiktok":15,"EyouClientKs":114,"eyouClient":113},"path":"preview-scripts/assets/Scripts/Core/AdsMgr.js"},{"deps":{"randomfill":124,"randombytes":119,"pbkdf2":120,"create-hash":117,"diffie-hellman":121,"create-ecdh":122,"browserify-sign/algos":142,"create-hmac":118,"public-encrypt":123,"browserify-cipher":144,"browserify-sign":143},"path":"preview-scripts/__node_modules/crypto-browserify/index.js"},{"deps":{"inherits":128,"md5.js":127,"ripemd160":129,"sha.js":130,"cipher-base":131},"path":"preview-scripts/__node_modules/create-hash/browser.js"},{"deps":{"inherits":128,"sha.js":130,"./legacy":133,"safe-buffer":134,"create-hash/md5":132,"ripemd160":129,"cipher-base":131},"path":"preview-scripts/__node_modules/create-hmac/browser.js"},{"deps":{"safe-buffer":134,"../process/browser.js":136},"path":"preview-scripts/__node_modules/randombytes/browser.js"},{"deps":{"./lib/async":135,"./lib/sync":125},"path":"preview-scripts/__node_modules/pbkdf2/browser.js"},{"deps":{"./lib/primes.json":126,"buffer":141,"./lib/generatePrime":139,"./lib/dh":140},"path":"preview-scripts/__node_modules/diffie-hellman/browser.js"},{"deps":{"buffer":141,"bn.js":146,"elliptic":145},"path":"preview-scripts/__node_modules/create-ecdh/browser.js"},{"deps":{"./publicEncrypt":137,"./privateDecrypt":138},"path":"preview-scripts/__node_modules/public-encrypt/browser.js"},{"deps":{"randombytes":119,"safe-buffer":134,"../process/browser.js":136},"path":"preview-scripts/__node_modules/randomfill/browser.js"},{"deps":{"create-hash/md5":132,"./precondition":147,"safe-buffer":134,"./to-buffer":149,"./default-encoding":148,"ripemd160":129,"sha.js":130},"path":"preview-scripts/__node_modules/pbkdf2/lib/sync-browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/diffie-hellman/lib/primes.js"},{"deps":{"inherits":128,"safe-buffer":134,"hash-base":150},"path":"preview-scripts/__node_modules/md5.js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/inherits/inherits_browser.js"},{"deps":{"inherits":128,"buffer":141,"hash-base":150},"path":"preview-scripts/__node_modules/ripemd160/index.js"},{"deps":{"./sha1":156,"./sha224":158,"./sha256":152,"./sha384":153,"./sha512":154,"./sha":151},"path":"preview-scripts/__node_modules/sha.js/index.js"},{"deps":{"safe-buffer":134,"inherits":128,"string_decoder":157,"stream":155},"path":"preview-scripts/__node_modules/cipher-base/index.js"},{"deps":{"md5.js":127},"path":"preview-scripts/__node_modules/create-hash/md5.js"},{"deps":{"safe-buffer":134,"inherits":128,"cipher-base":131},"path":"preview-scripts/__node_modules/create-hmac/legacy.js"},{"deps":{"buffer":141},"path":"preview-scripts/__node_modules/safe-buffer/index.js"},{"deps":{"./precondition":147,"./default-encoding":148,"./sync":125,"./to-buffer":149,"safe-buffer":134},"path":"preview-scripts/__node_modules/pbkdf2/lib/async.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"randombytes":119,"create-hash":117,"./xor":160,"safe-buffer":134,"./mgf":162,"parse-asn1":159,"./withPublic":161,"bn.js":180,"browserify-rsa":190},"path":"preview-scripts/__node_modules/public-encrypt/publicEncrypt.js"},{"deps":{"./mgf":162,"./xor":160,"create-hash":117,"./withPublic":161,"safe-buffer":134,"bn.js":180,"browserify-rsa":190,"parse-asn1":159},"path":"preview-scripts/__node_modules/public-encrypt/privateDecrypt.js"},{"deps":{"randombytes":119,"bn.js":178,"miller-rabin":170},"path":"preview-scripts/__node_modules/diffie-hellman/lib/generatePrime.js"},{"deps":{"./generatePrime":139,"randombytes":119,"buffer":141,"bn.js":178,"miller-rabin":170},"path":"preview-scripts/__node_modules/diffie-hellman/lib/dh.js"},{"deps":{"base64-js":163,"ieee754":164,"isarray":174},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"./browser/algorithms.json":176},"path":"preview-scripts/__node_modules/browserify-sign/algos.js"},{"deps":{"safe-buffer":134,"create-hash":117,"inherits":128,"./algorithms.json":176,"./verify":179,"./sign":177,"readable-stream":206},"path":"preview-scripts/__node_modules/browserify-sign/browser/index.js"},{"deps":{"evp_bytestokey":165,"browserify-aes/browser":205,"browserify-aes/modes":209,"browserify-des/modes":193,"browserify-des":203},"path":"preview-scripts/__node_modules/browserify-cipher/browser.js"},{"deps":{"../package.json":173,"brorand":171,"./elliptic/curves":166,"./elliptic/curve":168,"./elliptic/eddsa":169,"./elliptic/utils":172,"./elliptic/ec":167},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/create-ecdh/node_modules/bn.js/lib/bn.js"},{"deps":{},"path":"preview-scripts/__node_modules/pbkdf2/lib/precondition.js"},{"deps":{"../../process/browser.js":136},"path":"preview-scripts/__node_modules/pbkdf2/lib/default-encoding.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/pbkdf2/lib/to-buffer.js"},{"deps":{"safe-buffer":134,"inherits":128,"readable-stream":195},"path":"preview-scripts/__node_modules/hash-base/index.js"},{"deps":{"inherits":128,"safe-buffer":134,"./hash":181},"path":"preview-scripts/__node_modules/sha.js/sha.js"},{"deps":{"inherits":128,"./hash":181,"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/sha256.js"},{"deps":{"inherits":128,"./sha512":154,"./hash":181,"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/sha384.js"},{"deps":{"inherits":128,"./hash":181,"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/sha512.js"},{"deps":{"inherits":128,"events":182,"readable-stream/transform.js":188,"readable-stream/passthrough.js":189,"readable-stream/writable.js":184,"readable-stream/duplex.js":191,"readable-stream/readable.js":192},"path":"preview-scripts/__node_modules/stream-browserify/index.js"},{"deps":{"inherits":128,"./hash":181,"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/sha1.js"},{"deps":{"buffer":141},"path":"preview-scripts/__node_modules/string_decoder/index.js"},{"deps":{"inherits":128,"./sha256":152,"./hash":181,"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/sha224.js"},{"deps":{"pbkdf2":120,"safe-buffer":134,"./aesid.json":185,"./asn1":183,"browserify-aes":205,"./fixProc":186},"path":"preview-scripts/__node_modules/parse-asn1/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/public-encrypt/xor.js"},{"deps":{"safe-buffer":134,"bn.js":180},"path":"preview-scripts/__node_modules/public-encrypt/withPublic.js"},{"deps":{"create-hash":117,"safe-buffer":134},"path":"preview-scripts/__node_modules/public-encrypt/mgf.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"safe-buffer":134,"md5.js":127},"path":"preview-scripts/__node_modules/evp_bytestokey/index.js"},{"deps":{"./curve":168,"./utils":172,"./precomputed/secp256k1":187,"hash.js":207},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curves.js"},{"deps":{"../utils":172,"../curves":166,"brorand":171,"./key":194,"./signature":197,"bn.js":212,"hmac-drbg":208},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/index.js"},{"deps":{"./base":196,"./short":198,"./mont":199,"./edwards":200},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/index.js"},{"deps":{"../curves":166,"../utils":172,"./key":201,"hash.js":207,"./signature":202},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/index.js"},{"deps":{"brorand":171,"bn.js":214},"path":"preview-scripts/__node_modules/miller-rabin/lib/mr.js"},{"deps":{"crypto":175},"path":"preview-scripts/__node_modules/brorand/index.js"},{"deps":{"minimalistic-assert":204,"bn.js":212,"minimalistic-crypto-utils":210},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/elliptic/package.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/browser/algorithms.js"},{"deps":{"safe-buffer":134,"create-hmac":118,"elliptic":145,"parse-asn1":159,"./curves.json":220,"bn.js":215,"browserify-rsa":190},"path":"preview-scripts/__node_modules/browserify-sign/browser/sign.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js"},{"deps":{"safe-buffer":134,"elliptic":145,"parse-asn1":159,"./curves.json":220,"bn.js":215},"path":"preview-scripts/__node_modules/browserify-sign/browser/verify.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/public-encrypt/node_modules/bn.js/lib/bn.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/sha.js/hash.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"},{"deps":{"asn1.js":227,"./certificate":213},"path":"preview-scripts/__node_modules/parse-asn1/asn1.js"},{"deps":{"stream":155,"../process/browser.js":136,"./lib/_stream_writable.js":211},"path":"preview-scripts/__node_modules/readable-stream/writable.js"},{"deps":{},"path":"preview-scripts/__node_modules/parse-asn1/aesid.js"},{"deps":{"safe-buffer":134,"evp_bytestokey":165,"browserify-aes":205},"path":"preview-scripts/__node_modules/parse-asn1/fixProc.js"},{"deps":{},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"},{"deps":{"./readable":217},"path":"preview-scripts/__node_modules/readable-stream/transform.js"},{"deps":{"./readable":217},"path":"preview-scripts/__node_modules/readable-stream/passthrough.js"},{"deps":{"bn.js":215,"randombytes":119,"buffer":141},"path":"preview-scripts/__node_modules/browserify-rsa/index.js"},{"deps":{"./readable":217},"path":"preview-scripts/__node_modules/readable-stream/duplex.js"},{"deps":{"stream":155,"../process/browser.js":136,"./lib/_stream_transform.js":218,"./lib/_stream_passthrough.js":221,"./lib/_stream_writable.js":211,"./lib/_stream_duplex.js":219,"./lib/_stream_readable.js":222},"path":"preview-scripts/__node_modules/readable-stream/readable.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-des/modes.js"},{"deps":{"../utils":172,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/key.js"},{"deps":{"./lib/_stream_duplex.js":225,"./lib/_stream_transform.js":226,"./lib/_stream_passthrough.js":224,"./lib/internal/streams/end-of-stream.js":235,"./lib/internal/streams/pipeline.js":229,"./lib/_stream_writable.js":216,"./lib/_stream_readable.js":223},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/readable-browser.js"},{"deps":{"../utils":172,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/base.js"},{"deps":{"../utils":172,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/signature.js"},{"deps":{"../utils":172,"inherits":128,"./base":196,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/short.js"},{"deps":{"inherits":128,"./base":196,"../utils":172,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/mont.js"},{"deps":{"../utils":172,"inherits":128,"./base":196,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/edwards.js"},{"deps":{"../utils":172},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/key.js"},{"deps":{"../utils":172,"bn.js":212},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/signature.js"},{"deps":{"cipher-base":131,"inherits":128,"safe-buffer":134,"des.js":234},"path":"preview-scripts/__node_modules/browserify-des/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/minimalistic-assert/index.js"},{"deps":{"./modes/list.json":241,"./decrypter":240,"./encrypter":242},"path":"preview-scripts/__node_modules/browserify-aes/browser.js"},{"deps":{"./lib/_stream_duplex.js":238,"./lib/_stream_transform.js":244,"./lib/_stream_passthrough.js":243,"./lib/internal/streams/end-of-stream.js":262,"./lib/internal/streams/pipeline.js":273,"./lib/_stream_writable.js":245,"./lib/_stream_readable.js":246},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js"},{"deps":{"./hash/common":228,"./hash/ripemd":231,"./hash/hmac":233,"./hash/utils":232,"./hash/sha":230},"path":"preview-scripts/__node_modules/hash.js/lib/hash.js"},{"deps":{"hash.js":207,"minimalistic-crypto-utils":210,"minimalistic-assert":204},"path":"preview-scripts/__node_modules/hmac-drbg/lib/hmac-drbg.js"},{"deps":{"./list.json":241,"./ecb":257,"./cfb8":259,"./cfb1":269,"./ofb":272,"./ctr":271,"./cbc":260,"./cfb":261},"path":"preview-scripts/__node_modules/browserify-aes/modes/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/minimalistic-crypto-utils/lib/utils.js"},{"deps":{"inherits":128,"./_stream_duplex":219,"../../process/browser.js":136,"./internal/streams/destroy":268,"./internal/streams/stream":239,"util-deprecate":237,"process-nextick-args":236,"safe-buffer":258,"core-util-is":256},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_writable.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/elliptic/node_modules/bn.js/lib/bn.js"},{"deps":{"asn1.js":227},"path":"preview-scripts/__node_modules/parse-asn1/certificate.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/miller-rabin/node_modules/bn.js/lib/bn.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/bn.js/lib/bn.js"},{"deps":{"buffer":141,"inherits":128,"./_stream_duplex":225,"../../../../process/browser.js":136,"../errors":248,"./internal/streams/destroy":251,"./internal/streams/state":250,"./internal/streams/stream":247,"util-deprecate":237},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/_stream_writable.js"},{"deps":{"./lib/_stream_readable.js":222,"./lib/_stream_writable.js":211,"./lib/_stream_duplex.js":219,"./lib/_stream_transform.js":218,"./lib/_stream_passthrough.js":221},"path":"preview-scripts/__node_modules/readable-stream/readable-browser.js"},{"deps":{"./_stream_duplex":219,"inherits":128,"core-util-is":256},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_transform.js"},{"deps":{"inherits":128,"./_stream_readable":222,"./_stream_writable":211,"process-nextick-args":236,"core-util-is":256},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_duplex.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/browser/curves.js"},{"deps":{"./_stream_transform":218,"inherits":128,"core-util-is":256},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_passthrough.js"},{"deps":{"events":182,"inherits":128,"util":175,"./_stream_duplex":219,"../../process/browser.js":136,"./internal/streams/stream":239,"./internal/streams/destroy":268,"process-nextick-args":236,"isarray":263,"./internal/streams/BufferList":264,"safe-buffer":258,"core-util-is":256,"string_decoder/":279},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_readable.js"},{"deps":{"./internal/streams/stream":247,"buffer":141,"util":175,"./internal/streams/destroy":251,"./internal/streams/state":250,"../errors":248,"inherits":128,"./_stream_duplex":225,"../../../../process/browser.js":136,"./internal/streams/from":266,"./internal/streams/buffer_list":265,"./internal/streams/async_iterator":267,"events":182,"string_decoder/":274},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/_stream_readable.js"},{"deps":{"./_stream_transform":226,"inherits":128},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/_stream_passthrough.js"},{"deps":{"./_stream_readable":223,"./_stream_writable":216,"inherits":128,"../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/_stream_duplex.js"},{"deps":{"../errors":248,"./_stream_duplex":225,"inherits":128},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/_stream_transform.js"},{"deps":{"./asn1/api":249,"./asn1/constants":254,"bn.js":285,"./asn1/encoders":253,"./asn1/base":252,"./asn1/decoders":255},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1.js"},{"deps":{"./utils":232,"minimalistic-assert":204},"path":"preview-scripts/__node_modules/hash.js/lib/hash/common.js"},{"deps":{"../../../errors":248,"./end-of-stream":235},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/pipeline.js"},{"deps":{"./sha/224":270,"./sha/384":277,"./sha/512":280,"./sha/1":278,"./sha/256":276},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha.js"},{"deps":{"./utils":232,"./common":228},"path":"preview-scripts/__node_modules/hash.js/lib/hash/ripemd.js"},{"deps":{"minimalistic-assert":204,"inherits":128},"path":"preview-scripts/__node_modules/hash.js/lib/hash/utils.js"},{"deps":{"./utils":232,"minimalistic-assert":204},"path":"preview-scripts/__node_modules/hash.js/lib/hash/hmac.js"},{"deps":{"./des/utils":282,"./des/cipher":275,"./des/des":281,"./des/cbc":284,"./des/ede":283},"path":"preview-scripts/__node_modules/des.js/lib/des.js"},{"deps":{"../../../errors":248},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/end-of-stream.js"},{"deps":{"../process/browser.js":136},"path":"preview-scripts/__node_modules/process-nextick-args/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/util-deprecate/browser.js"},{"deps":{"./_stream_readable":246,"./_stream_writable":245,"inherits":128,"../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js"},{"deps":{"events":182},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/stream-browser.js"},{"deps":{"./authCipher":300,"safe-buffer":134,"./modes":209,"./streamCipher":304,"cipher-base":131,"./aes":301,"evp_bytestokey":165,"inherits":128},"path":"preview-scripts/__node_modules/browserify-aes/decrypter.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/modes/list.js"},{"deps":{"./modes":209,"safe-buffer":134,"cipher-base":131,"evp_bytestokey":165,"inherits":128,"./streamCipher":304,"./aes":301,"./authCipher":300},"path":"preview-scripts/__node_modules/browserify-aes/encrypter.js"},{"deps":{"./_stream_transform":244,"inherits":128},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js"},{"deps":{"../errors":302,"./_stream_duplex":238,"inherits":128},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js"},{"deps":{"util-deprecate":237,"buffer":141,"inherits":128,"./_stream_duplex":238,"../../../../process/browser.js":136,"../errors":302,"./internal/streams/stream":296,"./internal/streams/destroy":295,"./internal/streams/state":297},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js"},{"deps":{"events":182,"./internal/streams/stream":296,"buffer":141,"util":175,"./internal/streams/destroy":295,"./internal/streams/state":297,"../errors":302,"inherits":128,"./_stream_duplex":238,"../../../../process/browser.js":136,"./internal/streams/from":298,"./internal/streams/buffer_list":305,"./internal/streams/async_iterator":303,"string_decoder/":308},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js"},{"deps":{"events":182},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/stream-browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/errors-browser.js"},{"deps":{"./encoders":253,"./decoders":255,"inherits":128},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/api.js"},{"deps":{"../../../errors":248},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/state.js"},{"deps":{"../../../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/destroy.js"},{"deps":{"./reporter":286,"./node":287,"./buffer":292},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/index.js"},{"deps":{"./pem":291,"./der":289},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/index.js"},{"deps":{"./der":288},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/constants/index.js"},{"deps":{"./der":290,"./pem":293},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/index.js"},{"deps":{"buffer":141},"path":"preview-scripts/__node_modules/core-util-is/lib/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/modes/ecb.js"},{"deps":{"buffer":141},"path":"preview-scripts/__node_modules/readable-stream/node_modules/safe-buffer/index.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb8.js"},{"deps":{"buffer-xor":294},"path":"preview-scripts/__node_modules/browserify-aes/modes/cbc.js"},{"deps":{"safe-buffer":134,"buffer-xor":294},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb.js"},{"deps":{"../../../errors":302},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/end-of-stream.js"},{"deps":{},"path":"preview-scripts/__node_modules/readable-stream/node_modules/isarray/index.js"},{"deps":{"util":175,"safe-buffer":258},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/BufferList.js"},{"deps":{"buffer":141,"util":175},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/buffer_list.js"},{"deps":{},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/from-browser.js"},{"deps":{"./end-of-stream":235,"../../../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/async_iterator.js"},{"deps":{"process-nextick-args":236},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/destroy.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb1.js"},{"deps":{"../utils":232,"./256":276},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/224.js"},{"deps":{"safe-buffer":134,"../incr32":307,"buffer-xor":294},"path":"preview-scripts/__node_modules/browserify-aes/modes/ctr.js"},{"deps":{"buffer":141,"buffer-xor":294},"path":"preview-scripts/__node_modules/browserify-aes/modes/ofb.js"},{"deps":{"../../../errors":302,"./end-of-stream":262},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/pipeline.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/hash-base/node_modules/string_decoder/lib/string_decoder.js"},{"deps":{"minimalistic-assert":204},"path":"preview-scripts/__node_modules/des.js/lib/des/cipher.js"},{"deps":{"../utils":232,"../common":228,"minimalistic-assert":204,"./common":299},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/256.js"},{"deps":{"../utils":232,"./512":280},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/384.js"},{"deps":{"../utils":232,"../common":228,"./common":299},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/1.js"},{"deps":{"safe-buffer":258},"path":"preview-scripts/__node_modules/readable-stream/node_modules/string_decoder/lib/string_decoder.js"},{"deps":{"../utils":232,"../common":228,"minimalistic-assert":204},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/512.js"},{"deps":{"minimalistic-assert":204,"inherits":128,"./utils":282,"./cipher":275},"path":"preview-scripts/__node_modules/des.js/lib/des/des.js"},{"deps":{},"path":"preview-scripts/__node_modules/des.js/lib/des/utils.js"},{"deps":{"minimalistic-assert":204,"inherits":128,"./cipher":275,"./des":281},"path":"preview-scripts/__node_modules/des.js/lib/des/ede.js"},{"deps":{"minimalistic-assert":204,"inherits":128},"path":"preview-scripts/__node_modules/des.js/lib/des/cbc.js"},{"deps":{"buffer":175},"path":"preview-scripts/__node_modules/asn1.js/node_modules/bn.js/lib/bn.js"},{"deps":{"inherits":128},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/reporter.js"},{"deps":{"../base/reporter":286,"../base/buffer":292,"minimalistic-assert":204},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/node.js"},{"deps":{},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/constants/der.js"},{"deps":{"inherits":128,"../base/node":287,"../constants/der":288,"safer-buffer":306},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/der.js"},{"deps":{"inherits":128,"../base/buffer":292,"../base/node":287,"../constants/der":288,"bn.js":285},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/der.js"},{"deps":{"inherits":128,"./der":289},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/pem.js"},{"deps":{"inherits":128,"../base/reporter":286,"safer-buffer":306},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/buffer.js"},{"deps":{"inherits":128,"./der":290,"safer-buffer":306},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/pem.js"},{"deps":{"buffer":141},"path":"preview-scripts/__node_modules/buffer-xor/index.js"},{"deps":{"../../../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js"},{"deps":{"events":182},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js"},{"deps":{"../../../errors":302},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/state.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/from-browser.js"},{"deps":{"../utils":232},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/common.js"},{"deps":{"./aes":301,"safe-buffer":134,"cipher-base":131,"inherits":128,"./incr32":307,"./ghash":309,"buffer-xor":294},"path":"preview-scripts/__node_modules/browserify-aes/authCipher.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/browserify-aes/aes.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/errors-browser.js"},{"deps":{"./end-of-stream":262,"../../../../../../process/browser.js":136},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/async_iterator.js"},{"deps":{"./aes":301,"safe-buffer":134,"cipher-base":131,"inherits":128},"path":"preview-scripts/__node_modules/browserify-aes/streamCipher.js"},{"deps":{"buffer":141,"util":175},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/buffer_list.js"},{"deps":{"buffer":141,"../process/browser.js":136},"path":"preview-scripts/__node_modules/safer-buffer/safer.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/incr32.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/browserify-sign/node_modules/string_decoder/lib/string_decoder.js"},{"deps":{"safe-buffer":134},"path":"preview-scripts/__node_modules/browserify-aes/ghash.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    