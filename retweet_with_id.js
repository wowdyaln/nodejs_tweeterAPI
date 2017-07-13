 console.log("the post_bot is starting");

 var Twit = require('twit');

 // 個人的 key, token 放在 config.js 檔案裡面
 var config = require('./config');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);


//  retweet a tweet with id ''
//  是 id_str 這個屬性 ，不是 id
var params = { 
    id: '881100345199312898'
             };

T.post('statuses/retweet/:id', params, retweet)

function retweet(err, data, response) {
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
}