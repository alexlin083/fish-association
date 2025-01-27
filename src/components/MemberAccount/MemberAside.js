import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { MdAccountCircle } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDirectionsBoat } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { RiCouponFill } from "react-icons/ri";
//CSS
import "./MemberAccount.css";

//List Icon
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

//切換各頁面
import MemberBoard from "./MemberBoard/MemberBoard";
import MemberFavorite from "./MemberBoard/MemberFavorite";
import MemberNotes from "./MemberBoard/MemberNotes";
import MemberActivity from "./MemberBoard/MemberActivity";
import MemberHistory from "./MemberBoard/MemberHistory";
import MemberCoupon from "./MemberBoard/MemberCoupon";

const tagSwitch = (change) => {};

function MemberAside(props) {
  const [change, setChange] = useState(0);
  // const change = 5;
  return (
    <>
      {/* <aside className="MAmemberAside"> */}
      <div className="MAmemberPage">
        <div className="MAcontainerList">
          <div className="MAmemberCentreTitle">
            <h1 className="MACentreTitle">會員中心</h1>
          </div>
          <Container className="MAmemberCentreList">
            <ul>
              <li
                className={`${change == 0 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(0);
                }}
              >
                <MdAccountCircle />
                <div>我的檔案</div>
              </li>
              <li
                className={`${change == 1 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(1);
                }}
              >
                <MdFavorite />
                <div>收藏清單</div>
              </li>
              <li
                className={`${change == 2 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(2);
                }}
              >
                <RiEditBoxFill />
                <div>我的札記</div>
              </li>
              <li
                className={`${change == 3 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(3);
                }}
              >
                <MdDirectionsBoat />
                <div>我的活動</div>
              </li>
              <li
                className={`${change == 4 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(4);
                }}
              >
                <FaClipboardList />
                <div>購買紀錄</div>
              </li>
              <li
                className={`${change == 5 ? "MAactiveList" : ""}`}
                onClick={() => {
                  setChange(5);
                }}
              >
                <RiCouponFill />
                <div>優惠券專區</div>
              </li>
            </ul>
          </Container>
        </div>

        {/* <MemberBoard /> */}
        {(() => {
          switch (change) {
            case 0:
              return <MemberBoard />;
              break;
            case 1:
              return <MemberFavorite />;
              break;
            case 2:
              return <MemberNotes />;
              break;
            case 3:
              return <MemberActivity />;
              break;
            case 4:
              return <MemberHistory />;
              break;
            case 5:
              return <MemberCoupon />;
              break;
          }
        })()}

        {/* <UnderList /> */}
        {/* <div className="MAmemberCentreList MAList1240">
            <ul>
              <li>
                <a
                  className={`${change == 0 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(0);
                  }}
                >
                  <img src={accountIcon} alt="" />
                  檔案
                </a>
              </li>
              <li className="">
                <a
                  className={`${change == 1 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(1);
                  }}
                >
                  <img src={favoriteIcon} alt="" />
                  收藏
                </a>
              </li>
              <li className="">
                <a
                  className={`${change == 2 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(2);
                  }}
                >
                  <img src={noteIcon} alt="" /> 札記
                </a>
              </li>
              <li className="">
                <a
                  className={`${change == 3 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(3);
                  }}
                >
                  <img src={activeIcon} alt="" /> 活動
                </a>
              </li>
              <li className="">
                <a
                  className={`${change == 4 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(4);
                  }}
                >
                  <img src={clipboardIcon} alt="" />
                  歷史
                </a>
              </li>
              <li className="">
                <a
                  className={`${change == 5 ? "MAactiveList" : ""}`}
                  onClick={() => {
                    setChange(5);
                  }}
                >
                  <img src={dollarIcon} alt="" />
                  優惠券
                </a>
              </li>
            </ul>
          </div> */}
      </div>
      {/* </aside> */}
    </>
  );
}

export default MemberAside;
