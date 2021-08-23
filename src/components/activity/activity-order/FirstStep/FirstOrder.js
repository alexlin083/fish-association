import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  useHistory,
} from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar, OrderSchedule, Notice } from "./styled";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
import axios from "axios";

function FirstOrder(props) {
  const [data, setData] = useState(null);
  const [orderName, setorderName] = useState(null);
  const [place, setPlace] = useState(null);
  const [apply, setApply] = useState(null);
  const [normalCost, setnormalCost] = useState(null);
  const [childCost, setchildCost] = useState(null);
  const [clickValue, setclickValue] = useState(true);
  //讀取前台選取的活動ID，並導入react-router-dom的useParams
  const { name } = useParams();
  //從資料庫讀出點擊日期的活動資訊
  useEffect(() => {
    axios
      .get(`http://18.140.90.171:3000/api/activity/${name}`)
      .then((res) => {
        //console.log(res.data.ret[0]);
        setData(res.data.ret[0]);
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
  // {id: 1, activity_name: "海釣活動", place: "正濱漁港", schedule: "白帶魚、紅目鰱、鎖管", start_time: "2021-08-01", …}
  //設定總人數，小孩，大人的人數state
  const [normalNum, setNormalNum] = useState(1);
  const [childlNum, setChildNum] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const location = {
    pathname: `/order/activity/${name}/second`,
    state: { id: totalNum, normalNum: normalNum, childlNum: childlNum },
  };
  //設定給下一頁的值，包括總人數，小孩，大人數量
  let history = useHistory();
  const handleNormalSelect = (e) => {
    setNormalNum(Number(e));
  };
  const handleChildSelect = (e) => {
    setChildNum(Number(e));
  };
  const handleClickValue = (e) => {
    setclickValue(!clickValue);
  };
  //做總人數的計算
  useEffect(async () => {
    let total = await Number(normalNum + childlNum);
    await setTotalNum(total);
  }, [normalNum, childlNum]);
  //console.log(totalNum);
  return (
    <Wrapper className="justify-content-center mt-5">
      <Bg_blue>
        <ProgressBar>
          <div className="line">
            <svg
              className="circle circle1"
              style={{
                background: "#AB20FD",
                boxShadow: "0 0 20px #AB20FD",
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
                background: "#1D3557",
              }}
            >
              <circle cx="20" cy="20" r="15" />
            </svg>
          </div>
          <ul>
            <li>活動確認</li>
            <li>資料填寫</li>
            <li>報名完成</li>
          </ul>
        </ProgressBar>
        <OrderSchedule className="mt-5">
          <ul>
            <li>{place}</li>
            <li>{apply}</li>
            <li>成人</li>
            <li>{normalCost}</li>

            <li>
              <DropdownButton
                style={{ width: "100px" }}
                id="dropdown-basic-button"
                title={normalNum}
                className="format"
                onSelect={handleNormalSelect}
                required
                variant="info"
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
          <ul>
            <li>{orderName}</li>
            <li style={{ visibility: "hidden" }}>2021/08/10 </li>
            <li>兒童</li>
            <li>{childCost}</li>
            <li>
              <DropdownButton
                id="dropdown-basic-button"
                title={childlNum}
                className="format"
                onSelect={handleChildSelect}
                variant="info"
                required
              >
                <Dropdown.Item eventKey="0">0</Dropdown.Item>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </OrderSchedule>
        <Notice className="mt-5">
          <h3>注意事項&特別聲明</h3>
          <p>
            使用虛擬的身分證號碼進行報名，會構成刑法行使偽造準私文書罪。倘若使用虛擬身分證進行報名將排擠其他民眾報名的機會，破壞系統的公平性。
            <br />
            一經發現將取消報名紀錄。如果將取得的名額加價出售，或換取不正利益圖利，則有觸法的疑慮。刑法第三六○條：干擾電腦系統及相關設備罪。
            <br />
            無故以電腦程式或其他電磁方式干擾他人電腦或其相關設備，使公眾或他人因此遭受損害者，處以三年以下有期徒刑、拘役或科或併科十萬元以下罰金。
            <br />
            若因而造成本公司損害，應負完全之賠償責任。
            <br />
            若您未滿二十歲，應由您的法定代理人閱讀、瞭解並同意本聲明之所有內容後，方得使用本服務。若您選取同意本聲明，將視為您已取得法定代理人之同意。
            <br />
          </p>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="已詳細閱讀、瞭解並同意《特別聲明 》
            "
              onChange={handleClickValue}
            />
          </Form.Group>
        </Notice>
        <div className="text-center">
          <Button
            className="mt-3"
            type="submit"
            style={{ background: "#457b9d", border: "#457b9d" }}
          >
            <Link to={`/activity`} style={{ color: "white" }}>
              上一步
            </Link>
          </Button>
          <Button
            className="mt-3 ml-5"
            type="submit"
            onClick={() => history.push(location)}
            disabled={clickValue}
            style={{ background: "#457b9d", border: "#457b9d" }}
          >
            下一步
          </Button>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
export default FirstOrder;
