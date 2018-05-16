// 把 temp1.json 的資料，過濾之後，傳到 filter_Tweets_fav.json

var jsonfile = require('jsonfile')
var JM = require('json-mapper');
//https://github.com/dregenor/jsonMapper#shut-up-and-show-me-a-simple-convertion

var import_from = "json/temp4.json"
var export_to = "json/filter_Tweets_timeline.json"

var b = require("./"+import_from)
            // 注意！ require 檔案進node.js 相對路徑要寫完整不要省略了
            // 如果沒有 ./ 代表要使用 node_modules 裡面的函式庫（npm 安裝的）
console.log(b.length)

var converter = JM.makeConverter(
    {
    "id_str": JM.helpers.templateStrong('https://twitter.com/statuses/{id_str}'),
    "文章": 'text',
    "screen_name": 'user.screen_name',
    "匿稱": 'user.name'
    }
);
var result = b.map(function(ele){
    var input = ele;
    return converter(input);
})

console.log(result.length + " tweets have mapped to a json obj.")

jsonfile.writeFile(export_to, result, function (err) {
    console.error(err)
})

console.log("done!! write to " + export_to + "\n the oldest tweet: \n" + result[result.length - 1]["文章"] )