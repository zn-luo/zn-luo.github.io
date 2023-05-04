
function countActiveUsers(db,tableName){
  var distinctField = "uid"
  var query = {"date":{"$gte":"20220101","$lte":"20220131"}}
  var countries = ["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK","US","CA","RU"];
  for(var i=0;i<countries.length; i++){
    query["country"] = countries[i];
    // print(JSON.stringify(query));
    var res  = db.getCollection(tableName).distinct(distinctField, query);
    print(countries[i], res.length)
  }
}
