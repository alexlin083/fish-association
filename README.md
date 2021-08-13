# react 漁會專題(fish-association)

其宗旨是推廣北海岸在地觀光和新鮮魚貨，並提供活動報名、札記分享、魚產販售的服務喚醒大家對於海洋的熱愛。

# 首頁 UI

![image](https://github.com/KAO-TZU-WEI/fish-association/blob/develop/src/assets/img/Activity/READMEpic.png)

## 安裝

此專案使用[Node.js](https://nodejs.org/en/)與[npm](https://www.npmjs.com/)進行安裝，請確認環境是否準備完成

```
npm install
```

## 使用

```
npm start
```

## 本專題使用 react 技術

### 專案樹狀架構圖

此為本組的網頁架構

```
├─src
|  ├─assets                //項目 :圖片、CSS
|  │  ├─css
|  │  └─img
|  ├─components
|  │  ├─activity           //活動頁
|  │  │  ├─activity-1vh
|  │  │  ├─activity-2vh
|  │  │  ├─activity-3vh
|  │  │  ├─activity-4vh
|  │  │  ├─activity-5vh
|  │  │  └─activity-order
|  │  ├─auth               //登入註冊頁
|  │  │  ├─board
|  │  │  └─bubbles
|  │  ├─footer             //頁尾
|  │  ├─home               //首頁
|  │  │  ├─home-1vh
|  │  │  ├─home-2vh
|  │  │  ├─home-3vh
|  │  │  ├─home-4vh
|  │  │  └─home-5vh
|  │  ├─main-navbar         //上方Nav
|  │  ├─MemberAccount       //會員中心頁面
|  │  │  └─MemberBoard      //會員中心各個component
|  │  │      ├─Activity
|  │  │      ├─Favorite
|  │  │      ├─MemberCSS
|  │  │      └─MemberLevel
|  │  ├─order-item          //訂單流程
|  │  │  ├─check
|  │  │  ├─detail
|  │  │  └─overCheck
|  │  ├─products            //商品頁
|  │  │  ├─products-detail
|  │  │  └─products-list
|  │  │      └─items-group
|  │  └─travel-notes        //札記頁
|  │      ├─travel-note-editor
|  │      ├─travel-note-list
|  │      └─travel-note-show
|  ├─pages                  //各頁面進入點
|  │  ├─ActivityOrder
|  │  ├─ActivityPage
|  │  ├─AuthPage
|  │  ├─IndexPage
|  │  ├─MemberPage
|  │  ├─ProductsListPage
|  │  └─TravelNotesPage
|  ├─redux
|  │  ├─actions
|  │  └─reducers
|  ├─utils                  //工具
|  ├─App.js
|  ├─App.test.js
|  └─index.css
├─package-lock.json
├─package.json
└─.gitignore


```

### 使用的套件

```
"dependencies": {
    "@ckeditor/ckeditor5-build-classic": "^29.1.0",
    "@ckeditor/ckeditor5-react": "^3.0.2",
    "@emotion/core": "^11.0.0",
    "@emotion/react": "^11.4.0",
    "@emotion/styled": "^11.3.0",
    "@react-spring/web": "^9.2.3",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "chart.js": "^3.4.0",
    "dayjs": "^1.10.6",
    "moment": "^2.29.1",
    "normalize.css": "^8.0.1",
    "react": "^17.0.2",
    "react-bootstrap": "^1.6.1",
    "react-calendar": "^3.4.0",
    "react-chartjs-2": "^3.0.4",
    "react-dom": "^17.0.2",
    "react-google-login": "^5.2.2",
    "react-icons": "^4.2.0",
    "react-onepage-scroll": "^1.0.1",
    "react-redux": "^7.2.4",
    "react-router-bootstrap": "^0.25.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-spring": "^9.2.3",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0",
    "resize-observer-polyfill": "^1.5.1",
    "sweetalert2": "^11.1.2",
    "swiper": "^6.7.5",
    "use-tw-zipcode": "^2.0.1",
    "web-vitals": "^1.1.2"
}
```

### components function

#### home

- 手繪風的插圖設計，並搭配 full-page 技術帶領使用者有更沈浸式的享受
- 中央氣象局的即時天氣和 chart.js 圖表呈現
- 使用 react spring 做動畫操作

#### activity

- svg 地圖的地區切換
- react calendar 顯示串接後台資料庫的日期和活動詳情
- Open Data 的七天天氣和潮浪 API 串接圖表和地區切換
- 活動報名系統（需連資料庫）

#### auth & member

- 使用 JWT 和 Restful API 規範進行資料庫的串接
- 使用 axios 進行與後端 API 的連接
- 使用 google 第三方登入

#### products

- 商品分類切換
- 商品收藏和加入購物車
- 購物車系統（需會員）

#### travel-notes

- 旅遊札記發表功能(需會員)
- 札記喜歡、收藏、分享功能
- 札記留言板撰寫

### 專案圖片使用聲明

本專案所使用之素材圖片皆非商業用途，純屬練習用，如有侵權，煩請告知，謝謝。
首頁及會員登入插畫版權所有。
