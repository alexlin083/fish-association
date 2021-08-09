import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Firstpage from "../components/activity/activity-1vh/Firstpage";
import Secondpage from "../components/activity/activity-2vh/Secondpage";
import Threepage from "../components/activity/activity-3vh/Threepage";
import Forthpage from "../components/activity/activity-4vh/Forthpage";
import Fifthpage from "../components/activity/activity-5vh/Fifthpage";
import ActivityFooter from "../components/footer/ActivityFooter";

import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

//order page
//import FirstOrder from "../components/activity/activity-order/FirstStep/FirstOrder";

function ActivityPage() {
  const cardStyles = "marginTop: 0px !important";
  return (
    <>
      <div className="activity-wrapper activity-bg-green">
        <Firstpage />
        <Secondpage />
        <Threepage />
        <Forthpage />
        <Fifthpage />
        <ActivityFooter />
      </div>
    </>
  );
}

export default ActivityPage;
