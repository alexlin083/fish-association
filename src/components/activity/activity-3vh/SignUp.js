import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Calendardate from "./Calendar";
import StarRating from "./StarRating";
import { SignUpArea, SignUpDetail, SignUpPrice } from "./styled";
import { Button } from "react-bootstrap";
import { createBrowserHistory } from "history";

const axios = require("axios");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "活動",
      place: "",
      cost_adult: 1000,
      cost_children: 500,
      current_apply: 0,
      limit_num: 20,
      schedule: "",
      apply: [""],
      clickDate: [],
      dataArry: [],
      zhengbinArray: [],
      wanliArray: [],
      ruifangArray: [],
      longdongArray: [],
      keelungArray: [],
      msg: "請選擇日期",
      menuNum: 1,
    };
    this.chooseDate = this.chooseDate.bind(this);
  }

  history = createBrowserHistory();
  componentDidMount() {
    //從資料庫獲取活動產品資訊
    axios({
      method: "get",
      baseURL: "http://18.140.90.171:3000",
      url: "/api/activity",
      "Content-Type": "application/json",
    })
      .then((result) => {
        this.setState({ dataArry: result.data.ret });
        //console.log(this.state.dataArry);
        let zhengbinArray = [];
        let wanliArray = [];
        let ruifangArray = [];
        let longdongArray = [];
        let keelungArray = [];
        //轉換不同地點的資料進陣列
        result.data.ret.forEach((item, index) => {
          if (item.place === "正濱漁港") {
            zhengbinArray.push(item);
          }
          if (item.place === "龜吼漁港") {
            wanliArray.push(item);
          }
          if (item.place === "深澳漁港") {
            ruifangArray.push(item);
          }
          if (item.place === "龍洞") {
            longdongArray.push(item);
          }
          if (item.place === "基隆") {
            keelungArray.push(item);
          }
        });
        //設定在state當中，並給子層的日曆使用
        this.setState({ zhengbinArray: zhengbinArray });
        this.setState({ wanliArray: wanliArray });
        this.setState({ ruifangArray: ruifangArray });
        this.setState({ longdongArray: longdongArray });
        this.setState({ keelungArray: keelungArray });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //若當點選的日期有變換，將會呈現不同的活動資訊
  componentDidUpdate(prevProps, prevState) {
    if (prevState.clickDate !== this.state.clickDate) {
      this.state.dataArry.forEach((item) => {
        if (item.apply == this.state.clickDate) {
          this.handleClick(item.place);
          this.setState({
            id: item.id,
            name: item.activity_name,
            place: item.place,
            cost_adult: item.cost_adult,
            cost_children: item.cost_children,
            current_apply: item.current_apply,
            limit_num: item.limit_num,
            schedule: item.schedule,
            apply: item.apply,
            msg: null,
          });
          //當活動地點不同，相對應的menu nav樣式也不同
          switch (item.place) {
            case "正濱漁港":
              this.setState({ menuNum: 1 });
              break;
            case "龜吼漁港":
              this.setState({ menuNum: 2 });
              break;
            case "深澳漁港":
              this.setState({ menuNum: 3 });
              break;
            case "龍洞":
              this.setState({ menuNum: 4 });
              break;
            case "基隆":
              this.setState({ menuNum: 5 });
              break;
          }
        }
      });
    }
  }
  //將點選的日期存入state當中
  chooseDate = (e) => {
    this.setState({ clickDate: e });
  };
  //將點選的地點設定樣式
  handleClick = (num) => {
    this.setState({
      menuNum: num,
    });
  };
  render() {
    let chooserClass = this.state.isChoosen ? "" : "actacitve";
    //console.log(chooserClass);
    return (
      <>
        <SignUpArea>
          <ul className="d-flex">
            <li>
              <a
                href="#"
                onClick={() => this.handleClick(1)}
                className={this.state.menuNum === 1 ? "btn btn-choose " : "btn"}
                style={{ borderRadius: "20px 0 0 0" }}
              >
                正濱漁港
              </a>
            </li>
            <li>
              <a
                href="#"
                className={this.state.menuNum === 2 ? "btn btn-choose " : "btn"}
                onClick={() => this.handleClick(2)}
              >
                龜吼漁港
              </a>
            </li>
            <li>
              <a
                href="#"
                className={this.state.menuNum === 3 ? "btn btn-choose " : "btn"}
                onClick={() => this.handleClick(3)}
              >
                深澳漁港
              </a>
            </li>
            <li>
              <a
                href="#"
                className={this.state.menuNum === 4 ? "btn btn-choose " : "btn"}
                onClick={() => this.handleClick(4)}
              >
                龍洞
              </a>
            </li>
            <li>
              <a
                href="#"
                className={this.state.menuNum === 5 ? "btn btn-choose " : "btn"}
                onClick={() => this.handleClick(5)}
                style={{ borderRadius: "0 20px 0 0" }}
              >
                基隆
              </a>
            </li>
          </ul>
        </SignUpArea>
        <SignUpDetail>
          <Calendardate
            onChange={this.chooseDate}
            className="calendar"
            zhengbinArray={this.state.zhengbinArray}
            wanliArray={this.state.wanliArray}
            ruifangArray={this.state.ruifangArray}
            longdongArray={this.state.longdongArray}
            keelungArray={this.state.keelungArray}
            id="calendar"
          ></Calendardate>
          <SignUpPrice>
            <h3 className="mb-2">
              {this.state.name}報名{" "}
              <span style={{ color: "#E63946" }}>{this.state.msg}</span>
            </h3>
            <ul>
              <li>地點:{this.state.place}</li>
              <li>日期:{this.state.apply}</li>
              <li>魚種:{this.state.schedule}</li>
            </ul>
            <div className="d-flex">
              <ul>
                <li>
                  成人<span className="age">(18-64歲)</span>
                </li>
                <li>
                  兒童<span className="age">(04-11歲)</span>
                </li>
              </ul>
              <ul>
                <li>TWD{this.state.cost_adult}/每人</li>
                <li>TWD{this.state.cost_children}/每人</li>
              </ul>
            </div>
            <StarRating />

            <p style={{ color: " #1d3557", fontSize: "15px" }}>
              目前已有{this.state.current_apply}位報名 ， 最後剩下
              {this.state.limit_num}個名額
            </p>

            <Link to={`/order/activity/${this.state.id}/first`}>
              <Button
                style={{ background: "#457b9d", border: "#457b9d" }}
                className="sign-up-btn"
              >
                立即報名
              </Button>
            </Link>
          </SignUpPrice>
        </SignUpDetail>
      </>
    );
  }
}

export default SignUp;
