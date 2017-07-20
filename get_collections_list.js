//找到某個人的所有 list  ,把回傳的 json 資料儲存到 collections_list.json
console.log("the post_bot is starting");
var Twit = require('twit');
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

//https://www.npmjs.com/package/jsonfile
var jsonfile = require('jsonfile');
var file = "json/get_collections_list.json";

//是用疊加資料的方式。執行之前，確保 file 要是空的
var fs = require('fs');
console.log("remove all content from " + file);
fs.truncate(file, 0, function () { console.log('done') });
//是用疊加資料的方式。執行之前，確保 file 要是空的


var params = {
    screen_name: 'MicWazowski',  // 要查詢的某個user
    count: 200
}
// get the list of user id's that follow @xxxxx
T.get('collections/list', params, getSomeone_follower);


function getSomeone_follower(err, data, response) {
    if (err) {
        console.log(err)
    } else {
        jsonfile.writeFile(file, data, function (err) {
            console.error(err)
        });


    }
}




