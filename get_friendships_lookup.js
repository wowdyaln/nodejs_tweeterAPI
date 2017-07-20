// 給 user 的 screen_name 或 id，回傳這些人跟自己的關係
// https://dev.twitter.com/rest/reference/get/friendships/lookup
console.log("starting to get your friendships");
var Twit = require('twit');
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

//https://www.npmjs.com/package/jsonfile
var jsonfile = require('jsonfile');
var file = "json/get_friendships_lookup.json";

//是用疊加資料的方式。執行之前，確保 file 要是空的
var fs = require('fs');
console.log("remove all content from " + file);
fs.truncate(file, 0, function () { console.log('done') });
//是用疊加資料的方式。執行之前，確保 file 要是空的

var screen_name_list = require("./json/mapped_screen_name.json")

// 用 array 放多個 user 名稱，手動輸入
// var params = { screen_name: [
//         'MicWazowski',  
//         '_superorgasm_',
//         'Ken'
//     ]};
// 用 array 放多個 user 名稱，手動輸入


// 從 screen_name_list 匯入 (最多100個 user)
var params = screen_name_list;
// 從 screen_name_list 匯入

// get the list of user id's that follow @xxxxx
T.get('friendships/lookup', params, my_friendships);


function my_friendships(err, data, response) {
    if (err) {
        console.log(err)
    } else {
        jsonfile.writeFile(file, data, function (err) {
            console.error(err)
        });
    }
}




