// 自己 retweet 某篇 tweet 
console.log("the post_bot is starting");

 var Twit = require('twit');

 var config = require('./config/wowdy');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);


//  retweet a tweet with id ''
//  是 id_str 這個屬性 ，不是 id
var params = { 
    id: '881100345199312898'
             };

T.post('statuses/retweet/:id', params, retweet)
//https://dev.twitter.com/rest/reference/get/statuses/retweets/id

function retweet(err, data, response) {
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
}