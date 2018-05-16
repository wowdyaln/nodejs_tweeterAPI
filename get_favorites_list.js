// https://dev.twitter.com/rest/reference/get/favorites/list
//找到某個人 fav 的 tweets ，把回傳的 json 資料儲存到 get_favorites_list.json
// 最多200 則
console.log("the fav_list_bot is starting");

var Twit = require('twit');
// https://github.com/ttezel/twit
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

var file = './json/get_favorites_list.json'

//https://www.npmjs.com/package/jsonfile
//https://github.com/jprichardson/node-jsonfile
var jsonfile = require('jsonfile')


//是用疊加資料的方式。執行之前，確保 file 要是空的
var fs = require('fs');
console.log("remove all content from " + file);
fs.truncate(file, 0, function () { console.log('done') });
//是用疊加資料的方式。執行之前，確保 file 要是空的


var params = {
    screen_name: 'poppyzozo', //要搜尋的某 user
    count: 200,
    // max_id: 863970619129331716, //一般而言省略。依據情況調整
    include_entities: false
}

function getSomeone_fav(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        jsonfile.writeFile(file, data, { flag: 'a' }, function (err) {
            console.error(err);
        });
        console.log("got " + data.length + " fav tweets from " + params.screen_name + " and save to " + file);
        return update_max_id(data);
    }
}

function update_max_id(data) {
    var oldest_id = data[data.length - 1].id_str;
    console.log("the oldest id_str :" + oldest_id);
    params.max_id = oldest_id;
    console.log(oldest_id);
}

// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
(function myLoop(i) {
    setTimeout(function () {
        T.get('favorites/list', params, getSomeone_fav); // get the favs tweets of from someone
        i++
        if (i < 21) myLoop(i);  //更改此行： i < 要發幾次 request, i * 200 篇 tweet
    }, 2000)
})(0);

// 3200/200 = 16
