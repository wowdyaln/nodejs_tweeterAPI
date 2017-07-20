//https://dev.twitter.com/rest/reference/get/blocks/list
//找到自己的 block 名單  ,把回傳的 json 資料儲存到 block_list.json
// 如果要知道自己是否被某人 block ，請用 GET followers/ids. 間接查詢，自己沒有在裡面代表被 block
console.log("the block_list_bot is starting");



var Twit = require('twit');
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

var params = {
    screen_name: 'poooo_chu',
    count: 200,
    include_entities: false
}
// get the blocked list by @xxxxx
T.get('blocks/list', params, getSomeone_block);

//https://www.npmjs.com/package/jsonfile
var jsonfile = require('jsonfile');
var file = "json/block_list.json";

function getSomeone_block(err, data, response) {
    if (err) {
        console.log(err)
    } else {
        jsonfile.writeFile(file, data, function (err) {
            console.error(err);
        });
        console.log("got " + data.users.length + " blocked person from " + params.screen_name + " and save to " + file);
    }
}
