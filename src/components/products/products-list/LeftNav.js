import React from "react";

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

// import ProductsList from "./ProductsList";
import DiscountPage from "../products-pages/DiscountPage";
import FishPage from "../products-pages/FishPage";
import ShellPage from "../products-pages/ShellPage";
import ShrimpPage from "../products-pages/ShrimpPage";
import SquidPage from "../products-pages/SquidPage";




export default function LeftNav() {
    return (
      <>
        <Router>
          <div className="P-left-nav">
            <ul className="py-4">
                <Link to="/discount"><li>當月超值優惠</li></Link>
                <Link to="/fish"><li>魚類</li></Link>
                <Link to="/shrimp"><li>蝦類</li></Link>
                <Link to="/shell"><li>貝類</li></Link>
                <Link to="/squid"><li>軟足類</li></Link>
            </ul>
          </div>
          <Route path="/discount" component={DiscountPage} />
          <Route path="/fish" component={FishPage} />
          <Route path="/shrimp" component={ShrimpPage} />
          <Route path="/shell" component={ShellPage} />
          <Route path="/squid" component={SquidPage} />
        </Router>

       
      </>
    );
  }
  
