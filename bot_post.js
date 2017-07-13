 console.log("the post_bot is starting");

 var Twit = require('twit');
 var config = require('./config');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

//監聽事件
//https://dev.twitter.com/streaming/overview/messages-types#Events_event
var stream = T.stream('user')
console.log(stream);

stream.on('favorite', favs);

function favs(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}


function fav_autoTweet(txt){
    var txt = 'I fav a tweet : '
    var tweet = { 
        status: 'txt'
        };
    T.post('statuses/update', tweet , postTweet)
    
    function postTweet(err, data, response) {
        if (err){
            console.log("something worng");
        } else {
            console.log(data);
        }
    }

}