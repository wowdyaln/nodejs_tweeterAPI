## 某篇特定 tweet
https://twitter.com/statuses/id_str


## 關鍵字搜尋
- command
```
node get_search_tweets.js

node copy_file.js
注意調整檔案路徑

node filter_Tweets_search.js
```

## 要爬出某個人的 timeline （最多3200 則）
1.
```
注意！是用疊加資料的方式。執行之前，確保 get_someones_timeline.json 要是空的

node get_statuses_usertimeline.js

檔案中要調整的參數：
:60 screen_name: <--- 要找的人
:50 i <--- 要打幾次 request

```

### append data 到 json 檔案後，中間有多餘中括號的問題
2. 
打開 `get_someones_timeline.json`
使用 vscode 搜尋功能，在 regex 模式，搜尋框中輸入
 `\]\n\[`
就可以快速找出，用 `,` replace 掉。記得存檔

3.
```
node copy_file.js
注意調整檔案路徑
```
4.
```
node filter_Tweets_timeline.js
```

5. 最終成果在 filter_Tweets_timeline.json 裡面,使用 vscode 的自動 format 功能。 done! enjoy!



## 要爬出某個人的 fav （最多3200 則）
1.
```
注意！是用疊加資料的方式。執行之前，確保 get_favorites_list.json 要是空的

node get_favorites_list.js

檔案中要調整的參數：
:60 screen_name: <--- 要找的人
:50 i <--- 要打幾次 request

```

### append data 到 json 檔案後，中間有多餘中括號的問題
2. 
打開 `get_favorites_list.json`
使用 vscode 搜尋功能，在 regex 模式，搜尋框中輸入
 `\]\n\[`
就可以快速找出，用 `,` replace 掉。記得存檔

3.
```
node copy_file.js
注意調整檔案路徑
```
4.
```
node filter_Tweets_fav.js
```

5. 最終成果在 filter_fav_tweets.json 裡面,使用 vscode 的自動 format 功能。 done! enjoy!

 

## 找出某個人的 followers
- command
```
node get_favorites_list.js

node copy_file.js

node filter_Tweets_fav.js
```



## 找出自己的 block 名單
- command
1. 
```
node get_blocks_list.js
```
2. 
```
node copy_file.js
注意調整檔案路徑
```
3. 
```
node filter_Users_block.js
```

4. 最終成果在 filter_Users_you_block.json 裡面,使用 vscode 的自動 format 功能。 done!