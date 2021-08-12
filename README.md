# react 漁會專題(fish-association)

其宗旨是推廣北海岸在地觀光和魚貨，並透過活動報名、札記分享、魚產販售的服務來達到此目的。



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

## 活動頁-高子薇

- Open Data 的天氣和潮浪 API 串接。
- svg 地圖的地區切換。
- 插件 Chart.js 、react calendar 、Moment.js、React Icons 的使用。
- 路徑 components/activity/activity-1vh~activity-5vh。

### 活動產品上架

- 連結後台資料庫路由路徑，並透過 react calendar 顯示日期和活動詳情。

```javascript
axios({
  method: "get",
  baseURL: "http://localhost:3000",
  url: "/api/activity",
  "Content-Type": "application/json",
});
```

### 活動報名系統

- 使用 React Router 路由設定活動 ID 和訂單三步驟的切換。
- ReactJS Forms 動態展現相對應人數的表格數量。
- 透過 JS 來檢查使用者是否完整填寫資料。
- 連結後台資料庫路由路徑獲取活動資訊後，再透過路由 insert 回資料庫。

```js
try {
      axios.post(url, insertData).then((response) => {
        setMessage(response.data.message);
      });
    }
```

### 地區天氣切換

- 中央氣象局開放資料平臺之資料擷取 API(臺灣各縣市鄉鎮未來 1 週逐 12 小時天氣預報)。
- 閱讀 API 文件做新北市和基隆市設定。
- 完成 svg 圖像顯示和地區的切換。
- 使用 ReactJS components 和 Events 觀念。

```json
{
  "result": {
    "fields": [
      {
        "id": "contentDescription",
        "type": "String"
      },
      {
        "id": "datasetDescription",
        "type": "String"
      },
      {
        "id": "locationsName",
        "type": "String"
      },
      {
        "id": "dataid",
        "type": "String"
      },
      {
        "id": "locationName",
        "type": "String"
      },
      {
        "id": "geocode",
        "type": "Double"
      },
      {
        "id": "lat",
        "type": "Double"
      },
      {
        "id": "lon",
        "type": "Double"
      },
      {
        "id": "elementName",
        "type": "String"
      },
      {
        "id": "description",
        "type": "String"
      },
      {
        "id": "startTime",
        "type": "Timestamp"
      },
      {
        "id": "endTime",
        "type": "Timestamp"
      },
      {
        "id": "dataTime",
        "type": "Timestamp"
      },
      {
        "id": "value",
        "type": "String"
      },
      {
        "id": "measures",
        "type": "String"
      }
    ]
  }
}
```

### 地區潮浪切換

- 中央氣象局開放資料平臺之資料擷取 API(潮汐預報-未來 1 個月潮汐預報)。
- 閱讀 API 文件做萬里區、貢寮區、瑞芳區、中正區、氣象因子、排序順序的設定。
- 完成下拉式選單觸及後地區的切換。
- 使用 ReactJS components 和 Events 觀念。

```json
{
  "result": {
    "resource_id": "F-A0021-001",
    "fields": [
      {
        "id": "locationName",
        "type": "String"
      },
      {
        "id": "elementName",
        "type": "String"
      },
      {
        "id": "elementValue",
        "type": "String"
      },
      {
        "id": "stationId",
        "type": "String"
      },
      {
        "id": "parameterName",
        "type": "String"
      },
      {
        "id": "parameterValue",
        "type": "String"
      },
      {
        "id": "parameterUnit",
        "type": "String"
      },
      {
        "id": "parameterMeasure",
        "type": "String"
      },
      {
        "id": "dataTime",
        "type": "Timestamp"
      },
      {
        "id": "startTime",
        "type": "Timestamp"
      },
      {
        "id": "endTime",
        "type": "Timestamp"
      }
    ]
  }
}
```

### member & auth

- 使用 JWT 和 Restful API 規範進行資料庫的串接
- 收藏頁面使用 react-spring 動畫套件
- 使用 axios 進行與後端 API 的連接
- 使用 google 第三方登入

```javascript
const token = localStorage.getItem("token");

axios.get("http://localhost:3000/api/profile", {
  headers: { Authorization: `Bearer ${token}` },
});
```

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

### 專案圖片使用聲明

本專案所使用之素材圖片皆非商業用途，純屬練習用，如有侵權，煩請告知，謝謝。
