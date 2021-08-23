import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar, CheckOrder } from "./styled";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function ThirdOrder() {
  const { name } = useParams();
  const location = useLocation();
  const [orderName, setorderName] = useState(null);
  const [place, setPlace] = useState(null);
  const [apply, setApply] = useState(null);
  const [normalCost, setnormalCost] = useState(null);
  const [childCost, setchildCost] = useState(null);
  const [message, setMessage] = useState(null);
  const url = "http://18.140.90.171:3000/api/activity/order";
  const insertData = [];
  const history = useHistory();
  //引用彈跳視窗
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //檢查上一頁帶的值
  // console.log(
  //   "3page-paymentWay",
  //   location.state.payment,
  //   "3page-報名資料",
  //   location.state.data,
  //   "3page-大人人頭",
  //   location.state.normalNum,
  //   "3page-小孩人頭",
  //   location.state.childlNum
  // );

  function handleSubmit() {
    location.state.data.map((element) => {
      insertData.push({
        activity_id: name,
        name: element.name,
        phone: element.phone,
        email: element.email,
        member_id: null,
        remit: location.state.payment,
      });
    });
    //把資料統整後送回資料庫
    try {
      axios.post(url, insertData).then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        handleShow();
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    //獲取所選擇的活動訊息
    axios
      .get(`http://18.140.90.171:3000/api/activity/${name}`)
      .then((res) => {
        console.log(res.data.ret[0]);
        setorderName(res.data.ret[0].activity_name);
        setPlace(res.data.ret[0].place);
        setApply(res.data.ret[0].apply);
        setnormalCost(res.data.ret[0].cost_adult);
        setchildCost(res.data.ret[0].cost_children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Wrapper className=" mt-5">
        <Bg_blue>
          <div className="line">
            <svg
              className="circle circle1"
              style={{
                background: "#1D3557",
              }}
            >
              <circle cx="20" cy="20" r="15" />
            </svg>
            <hr className="progress-line" />
            <svg
              className="circle"
              style={{
                background: "#1D3557",
              }}
            >
              <circle cx="20" cy="20" r="15" />
            </svg>
            <svg
              className="circle"
              style={{
                background: "#AB20FD",
                boxShadow: "0 0 20px #AB20FD",
              }}
            >
              <circle cx="20" cy="20" r="15" />
            </svg>
          </div>
          <ProgressBar>
            <ul>
              <li>活動確認</li>
              <li>資料填寫</li>
              <li>報名完成</li>
            </ul>
          </ProgressBar>
          <CheckOrder className=" mt-5">
            <ul>
              <li>報名活動 {orderName}</li>
              <li>活動地點 {place}</li>
              <li>活動日期 {apply}</li>
              <li>
                付款：
                {(function () {
                  if (location.state.payment == "0") return "信用卡";
                  else if (location.state.payment == "1") return "電匯";
                  else if (location.state.payment == "2") return "現場付費";
                })()}
              </li>
              <li>
                總人數 大人{location.state.normalNum}名，小孩
                {location.state.childlNum}名
              </li>
              <li>
                總金額
                {location.state.normalNum * normalCost +
                  location.state.childlNum * childCost}
              </li>
              {location.state.data.map((value, index) => {
                return (
                  <>
                    <p className="mt-2">------------------------------</p>
                    <li>姓名{value.name}</li>
                    <li>聯絡電話{value.phone}</li>
                    <li>信箱 {value.email}</li>
                  </>
                );
              })}
            </ul>
          </CheckOrder>
          <div className="text-center">
            <Button
              variant="primary"
              className="mt-3 ml-5"
              onClick={handleSubmit}
              style={{ background: "#457b9d", border: "#457b9d" }}
            >
              送出訂單
            </Button>
          </div>
        </Bg_blue>
      </Wrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>通知</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="info" onClick={handleClose}>
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ThirdOrder;
