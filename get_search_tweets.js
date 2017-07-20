
// 關鍵字搜尋
//https://dev.twitter.com/rest/reference/get/search/tweets

console.log("the bot is starting");

var Twit = require('twit');
var config = require('./config/wowdy');
//  console.log(config);
var T = new Twit(config);
//  console.log(T);

var jsonfile = require('jsonfile')
var file = "./json/search_result.json"

//是用疊加資料的方式。執行之前，確保 file 要是空的
var fs = require('fs');
console.log("remove all content from " + file);
fs.truncate(file, 0, function () { console.log('done') });
//是用疊加資料的方式。執行之前，確保 file 要是空的

var parmas = {
    q: '林子偉',
    count: 10
}; //還有許多參數可用 https://dev.twitter.com/rest/reference/get/search/tweets


T.get('search/tweets', parmas, search);

function search(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        var tweets = data.statuses;
        jsonfile.writeFile(file, tweets, function (err) {
            console.error(err)
        })

        console.log("got " + data.statuses.length + " tweets "
            + " and save those to " + file);
    }
}

