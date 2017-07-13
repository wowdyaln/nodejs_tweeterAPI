
// 關鍵字搜尋
//https://dev.twitter.com/rest/reference/get/search/tweets

console.log("the bot is starting");

 var Twit = require('twit');
 var config = require('./config/rorotest');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

var parmas = { 
    q: '林子偉',
    count: 10
 }; //還有許多參數可用 https://dev.twitter.com/rest/reference/get/search/tweets


 T.get('search/tweets', parmas, search);

 var jsonfile = require('jsonfile')
 var file = "./json/search_result.json"

 function search(err, data, response){
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

