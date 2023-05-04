
function getTableIndexDetails(db){
  var tbs = db.getCollectionNames();
  for(var i=0;i<tbs.length;i++){
    var cname = tbs[i];
    var c = db.getCollection(cname);
    var statsObj = c.stats({"indexDetails":true});
    // Object.keys(statsObj.shards).forEach(function(key) {
    //   if(statsObj.shards.hasOwnProperty(key)){
    //     print(cname +" "+key+ ": " + statsObj.shards[key].wiredTiger.uri);
    //   };      
    // });
    Object.keys(statsObj.indexDetails).forEach(function(key) {
      if(statsObj.indexDetails.hasOwnProperty(key)){
        print(cname + ": " + statsObj.indexDetails[key].uri)
      };      
    });
  }
}

class TbInfo{
  constructor(conn){
    this.conn = conn;
  }
  _forEachTbsInDb(db, tbCallback){
    var tbs = db.getCollectionNames();
    for(var j=0;j<tbs.length;j++){
      var cname = tbs[j];
      var c = db.getCollection(cname);
      tbCallback(c);
    };
  }
  _forEachDbsTables(tbCallback){
    var dbs = this.conn.getMongo().getDBNames();
    for(var i=0;i<dbs.length;i++){
        var db = this.conn.getSiblingDB(dbs[i]);
        this._forEachTbsInDb(db, tbCallback);
    };
  }
  _getShardDistribution(tbObj) {
    print("=".repeat(10), tbObj, "=".repeat(10));
    tbObj.getShardDistribution();
  }

  get getTableFiles(){
    this._forEachDbsTables(function(tbObj){
      var statsObj = tbObj.stats({"indexDetails":true});
      if(typeof(statsObj.wiredTiger) != "undefined"){
        print(statsObj.ns + ": " + statsObj.wiredTiger.uri);
      };
    });
  }
  get getIndexFiles(){
    this._forEachDbsTables(function(tbObj){
      var statsObj = tbObj.stats({"indexDetails":true});
      if(typeof(statsObj.indexDetails) != "undefined"){
        Object.keys(statsObj.indexDetails).forEach(function(key) {
          if(statsObj.indexDetails.hasOwnProperty(key)){
            print(statsObj.ns + ": " + statsObj.indexDetails[key].uri)
          };      
        });
      };
    });
  }
  get getShardDistribution(){
    this._forEachDbsTables(function(tbObj){
      print("=".repeat(10), tbObj, "=".repeat(10));
      tbObj.getShardDistribution();
    })
  }
  getShardDistributionByTb(tb){
    if(typeof(tb.getShardDistribution) === 'function'){
      tb.getShardDistribution();
    }else if(typeof(tb) === 'string'){
      if(tb.indexOf(".") != -1){
        var ns = tb.split(".");
        this.conn.getSiblingDB(ns[0]).getCollection(ns[1]).getShardDistribution();
      }else{
        print("A table namespace string(e.g. db.tablename) is needed.")
      }
    }else{
      print("A parameter is needed which is a table object or table namespace string(e.g. db.tablename).")
    }
  }
  getShardDistributionByBb(db){
    var dbObj = db;
    if(typeof(db)==='string'){
      dbObj = this.conn.getSiblingDB(db);
    };
    this._forEachTbsInDb(dbObj, this._getShardDistribution);
  }
}

// Examples
conn = new Mongo("127.0.0.1:27017");
db = conn.getDB("dbName");
db.auth("dbUser","dbPwd");
var ti = new TbInfo(db)
// ti.getIndexFiles;
// ti.getTableFiles;
ti.getShardDistribution;
ti.getShardDistributionByTb("db.tableName");
ti.getShardDistributionByBb("dbName");

//db.getSiblingDB("gdc").uregion.getIndexes()
//db.adminCommand( { movePrimary: "gdc", to: "rs1" } )
