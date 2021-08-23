import React, { useState } from "react";
import axios from "axios";
import "./MemberCSS/MemberCoupon.css";

//引入折價券圖片
import coupon from "../../../assets/img/member/membercoupon/coupon.png";

function MemberCoupon(props) {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://18.140.90.171:3000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const member = serverResponse.data.member;
        setData(member);
      });
  }, []);
  return (
    <>
      <div className="MCmemberBoard">
        <div className="MCmemberBoardTitle">
          <div className="MCmemberAcount">
            <h2 className="MChistoryTitle">優惠券</h2>
          </div>
          <hr />
        </div>
        <div className="MCcoupon">
          <img className="MCcouponPicture" src={coupon} alt="" />
          <div className="MCcouponQuantity">X{data.discount_count}</div>
        </div>
      </div>
    </>
  );
}

export default MemberCoupon;
