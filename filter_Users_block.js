

// 把 temp3.json 的資料，過濾之後，傳到 filter_Users_you_block.json

var jsonfile = require('jsonfile')
var JM = require('json-mapper');
//https://github.com/dregenor/jsonMapper#shut-up-and-show-me-a-simple-convertion


var import_from = "json/temp3.json"
var export_to = "json/filter_Users_you_block.json"

var b = require("./"+import_from)
            // 注意！ require 檔案進node.js 相對路徑要寫完整不要省略了
            // 如果沒有 ./ 代表要使用 node_modules 裡面的函式庫（npm 安裝的）
console.log(b.users.length);




var converter = JM.makeConverter({
    "users": ['users', JM.map({
        name: JM.helpers.templateStrong('{name}'),
        href: JM.helpers.templateStrong('https://twitter.com/{screen_name}'),
        screen_name: JM.helpers.templateStrong('{screen_name}')
    })]
});

var result = converter(b);


console.log(b.users.length + " blocked users have mapped to a json obj.")

jsonfile.writeFile(export_to, result, function (err) {
    console.error(err)
})

console.log("done!! write to " + export_to)
return result;