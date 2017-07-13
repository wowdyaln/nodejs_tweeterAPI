//找到某個人的所有 followers ，用 id呈現 ,把回傳的 json 資料儲存到 follower_list.json
console.log("the post_bot is starting");



 var Twit = require('twit');
 var config = require('./config');
//  console.log(config);
 var T = new Twit(config);
//  console.log(T);

var params = {
    screen_name: 'exam22',
    count: 100
}
// get the list of user id's that follow @xxxxx
 T.get('followers/ids', params, getSomeone_follower);

 //https://www.npmjs.com/package/jsonfile
 var jsonfile = require('jsonfile')
 var file = "json/follower_list.json"

 function getSomeone_follower(err, data, response){
     if (err){
         console.log(err)
     } else {
        console.log(data.ids.length);
        jsonfile.writeFile(file, data, function (err) {
            console.error(err)
        });
     }
 }



 