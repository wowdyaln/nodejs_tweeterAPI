// mapping User 物件裡面的 screen_name 屬性
var jsonfile = require('jsonfile')
var JM = require('json-mapper');
//https://github.com/dregenor/jsonMapper#shut-up-and-show-me-a-simple-convertion


var import_from = "./json/filter_Users_you_block.json"  // 填入要mapping 的 json 檔案
var export_to = "json/mapped_screen_name.json" //

var converter = JM.makeConverter({
    screen_name: ['users', JM.map('screen_name')]
    }
);


var b = require(import_from)
            // 注意！ require 檔案進node.js 相對路徑要寫完整不要省略了
            // 如果沒有 ./ 代表要使用 node_modules 裡面的函式庫（npm 安裝的）
var result = converter(b);


console.log(b.users.length + " users have mapped to a json obj.")

jsonfile.writeFile(export_to, result, function (err) {
    console.error(err)
})

console.log("done!! write to " + export_to)
return result;