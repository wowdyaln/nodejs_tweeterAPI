//找到某個人的所有 followers ，每個follower 有完整的資訊 ,把回傳的 json 資料儲存到 get_follower_listOrid.json
console.log("the post_bot is starting");
var Twit = require('twit');
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

//https://www.npmjs.com/package/jsonfile
var jsonfile = require('jsonfile');
var file = "json/get_follower_listOrid.json";

var params = {
    screen_name: 'poooo_chu',
    count: 200
}

//是用疊加資料的方式。執行之前，確保 file 要是空的
var fs = require('fs');
console.log("remove all content from " + file);
fs.truncate(file, 0, function () { console.log('done') });
//是用疊加資料的方式。執行之前，確保 file 要是空的

// get the list of user id's that follow @xxxxx
T.get('followers/list', params, getSomeone_follower);

function getSomeone_follower(err, data, response) {
    if (err) {
        console.log(err)
    } else {
        jsonfile.writeFile(file, data, function (err) {
            console.error(err)
        });
        console.log("got " + data.users.length + " users "
            + " and save those to " + file);
    }
}




