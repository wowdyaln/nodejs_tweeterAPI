//找到某個人的所有 list  ,把回傳的 json 資料儲存到 collections_list.json
console.log("the post_bot is starting");



 var Twit = require('twit');
 var config = require('./config/wowdy');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

var params = {
    screen_name: 'poooo_chu',  // 要查詢的某個user
    count: 200
}
// get the list of user id's that follow @xxxxx
 T.get('collections/list', params, getSomeone_follower);

 //https://www.npmjs.com/package/jsonfile
 var jsonfile = require('jsonfile');
 var file = "json/get_collections_list.json";

 function getSomeone_follower(err, data, response){
     if (err){
         console.log(err)
     } else {
        jsonfile.writeFile(file, data, function (err) {
            console.error(err)
        });
        
        
     }
}
 



 