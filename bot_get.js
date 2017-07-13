// 關鍵字搜尋，回傳
//https://dev.twitter.com/rest/reference/get/search/tweets

console.log("the bot is starting");

 var Twit = require('twit');
 var config = require('./config');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

var parmas = { 
    q: '林子偉',
    count: 10
 }; //還有許多參數可用 https://dev.twitter.com/rest/reference/get/search/tweets

 T.get('search/tweets', parmas, gotData );

 function gotData(err, data, response ){
    console.log(data.statuses[0]);
     var tweets = data.statuses;
     tweets.forEach(function(ele) {
        console.log(ele.text+"\n");
     });
 }