// https://twitter.com/rorotest1
// 自己 --fav-> 他人的post ，自動 retweet 到自己頁面
// 他人 --fav-> 自己的post, 沒作用

console.log("the autoTweet_bot is starting");

 var Twit = require('twit');
 var config = require('./config/rorotest');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

//監聽事件
//https://dev.twitter.com/streaming/overview/messages-types#Events_event
// set up a user stream
var stream = T.stream('user')
// console.log(stream);

stream.on('favorite', retweet_fav);

function retweet_fav(data) {
    console.log("trigger the fav");
    console.log("fav_id: " + data.target_object.id_str);

    var params = {
        id: data.target_object.id_str
    };

    T.post('statuses/retweet/:id', params, retweet)

    function retweet(data) {
            console.log("retweet works !");
    }        
}