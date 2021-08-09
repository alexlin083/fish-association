import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/products/products-list/Banner";
import RankTable from "../components/products/products-list/RankTable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainFooter from "../components/footer/MainFooter";

import "../assets/css/styled.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import all block
import MainBlock from "../components/products/products-list/MainBlock";
import FishBlock from "../components/products/products-list/FishBlock";
import SchrimpBlock from "../components/products/products-list/SchrimpBlock";
import SellBlock from "../components/products/products-list/SellBlock";
import CehalopodBlock from "../components/products/products-list/CehalopodBlock";
import DetailBlock from "../components/products/products-detail/DetailBlock";

function ProductsListPage() {
  return (
    <>
      <Router>
        <div className="activity-wrapper  P-background">
          <nav style={{ height: "65px" }}></nav>
          <Banner />
          <Container className="mt-3 d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <div className="P-left-nav">
                <ul className="py-4">
                  <Link to="/discount">
                    <li>當月超值優惠</li>
                  </Link>
                  <Link to="/products">
                    <li>全部</li>
                  </Link>
                  <Link to="/fish">
                    <li>魚類</li>
                  </Link>
                  <Link to="/shrimp">
                    <li>蝦類</li>
                  </Link>
                  <Link to="/shell">
                    <li>貝類</li>
                  </Link>
                  <Link to="/squid">
                    <li>軟足類</li>
                  </Link>
                </ul>
              </div>
              <RankTable />
            </div>
            <div>
              <div className="P-main-block">
                <h1 className="py-3 P-main-title">最新上架</h1>
                <Route path="/products" component={MainBlock} />
                <Route path="/fish" component={FishBlock} />
                <Route path="/shrimp" component={SchrimpBlock} />
                <Route path="/shell" component={SellBlock} />
                <Route path="/squid" component={CehalopodBlock} />
                <Route path="/detail/:type/:name/:id" component={DetailBlock} />
              </div>
            </div>
          </Container>
          <MainFooter />
        </div>
      </Router>
    </>
  );
}

export default ProductsListPage;
