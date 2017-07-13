// https://dev.twitter.com/rest/reference/get/favorites/list
//找到某個人 fav 的 tweets ，把回傳的 json 資料儲存到 fav_list.json
// 最多200 則
console.log("the fav_list_bot is starting");

 var Twit = require('twit');
 var config = require('./config/rorotest');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

var params = {
    screen_name: 'teddy543',
    count: 100
}
// get the favs tweets of from someone
T.get('favorites/list', params, getSomeone_fav);

 //https://www.npmjs.com/package/jsonfile
 //https://github.com/jprichardson/node-jsonfile
 var jsonfile = require('jsonfile')
 var file = "./json/fav_list.json"

 function getSomeone_fav(err, data, response){
     if (err){
         console.log(err);
     } else {
         jsonfile.writeFile(file, data, function (err) {
             console.error(err)
         })
     }
    console.log("got " + data.length + " fav tweets from " + params.screen_name 
                                                                +" and save to "+ file);
}




 