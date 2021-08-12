import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import vacation from "../../../../assets/img/member/memberVacation/vacation.jpg";

function JoinActivity() {
  const [activity, setActivity] = useState([]);
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/activity", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myActivity = serverResponse.data;
        // console.log(myActivity);
        setActivity(myActivity);
      });
  }, []);
  return (
    <>
      <div className="MVcommodityVacation">
        {activity.map((singUP) => {
          return (
            <>
              <div className="MVcommodityVacationList">
                <img className="MVvacationPicture" src={vacation} alt="" />
                <div className="MVinformation">
                  <div className="MVlistMargin MVlocation">
                    {singUP.activity_info_model.activity_name} (
                    {singUP.activity_info_model.place})
                  </div>
                  <div className="MVlistMargin MVvacationDate">
                    <div className="MVvacationTitle">日期:</div>
                    <div className="MVvacationTime">
                      {singUP.activity_info_model.apply}
                    </div>
                  </div>
                  <div className="MVlistMargin MVvacationJoin">
                    <div className="MVjoinPeople">成人X2</div>
                    <div className="MVjoinPay">
                      共$
                      {singUP.activity_info_model.cost_adult * 2}元
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}

        {/* <div className="MVcommodityVacationList">
          <img className="MVvacationPicture" src={vacation} alt="" />
          <div className="MVinformation">
            <div className="MVlistMargin MVlocation">活動名稱 (地點)</div>
            <div className="MVlistMargin MVvacationDate">
              <div className="MVvacationTitle">日期:</div>
              <div className="MVvacationTime">2021/07/30 18:00:00</div>
            </div>
            <div className="MVlistMargin MVvacationJoin">
              <div className="MVjoinPeople">成人X{activity.length}</div>
              <div className="MVjoinPay">共4000元</div>
            </div>
          </div>
        </div>
        <hr /> */}
      </div>
    </>
  );
}

export default JoinActivity;
