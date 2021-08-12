import React from "react";
import RecommendCard from "./RecommendCard"



function Recommend() {
    return (
      <>
        <div className="P-detail-recommend">
          <h1>相關推薦產品</h1>
          <div className="d-flex justify-content-between">
            <RecommendCard />
          </div>
        </div>
      </>
    );
  }
  
  export default Recommend;