import React, { Component } from "react";
import { Wrapper, DivingPic, BgSea, BlogList } from "./styled";
import Diving from "../../../assets/img/Activity/diving.png";
import BlogShare from "./BlogShare";
import Pagination from "./Pagination";

class Fifthpage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="activity-bg-deepgreen" style={{paddingBottom:"100px"}}>
          <BgSea>
            <DivingPic src={Diving} alt="diving" />
          </BgSea>
          <Wrapper>
            <BlogList className="activity-bg-blue">
              <h2>札記分享</h2>
              <BlogShare></BlogShare>
              <Pagination style={{ marginTop: "10px" }} />
            </BlogList>
          </Wrapper>
        </div>
      </>
    );
  }
}

export default Fifthpage;
