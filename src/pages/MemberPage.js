import React from "react";

// authNAV 吃到MemberJoin.css
// CSS style
import "../components/MemberAccount/MemberAccount.css";
//元件
import MemberAside from "../components/MemberAccount/MemberAside";
import RWDTitle from "../components/MemberAccount/RWDTitle";
import MainFooter from "../components/footer/MainFooter";

function Member(props) {
  return (
    <>
      <div className="MAactivity-wrapper">
        <nav style={{ height: "65px" }}></nav>
        {/* <RWDTitle /> */}
        {console.log(props.something)}
        <MemberAside />
        <MainFooter />
        {/* <footer></footer> */}
      </div>
    </>
  );
}

export default Member;
