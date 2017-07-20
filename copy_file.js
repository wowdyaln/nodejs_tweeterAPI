// 把  search_result.json 的檔案 copy 到 temp1.json
// var import_from = "json/search_result.json"
// var export_to = "json/temp1.json"


// 把 get_favorites_list.json 的檔案 copy 到 temp2.json
var import_from = "json/get_favorites_list.json"
var export_to = "json/temp2.json"

// 把 block_list.json 的檔案 copy 到 temp3.json
// var import_from = "json/block_list.json"
// var export_to = "json/temp3.json"

// 把 get_someones_timeline.json 的檔案 copy 到 temp4.json
// var import_from = "json/get_someones_timeline.json"
// var export_to = "json/temp4.json"





//// 主要程式碼
var fs = require('fs');

console.log("copy " + import_from + " to " + export_to);
fs.createReadStream(import_from).pipe(fs.createWriteStream(export_to));
//https://stackoverflow.com/questions/11293857/fastest-way-to-copy-file-in-node-js

console.log("done");