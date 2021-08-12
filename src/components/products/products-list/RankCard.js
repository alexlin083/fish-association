import React from "react";
import {Card} from 'react-bootstrap';

/* img import */
import { FaShoppingCart } from "react-icons/fa";
import saira01 from "../../../assets/img/products/fish/saira01.jpg"
import eel from '../../../assets/img/products/fish/eel1.jpg'
import lobster1 from '../../../assets/img/products/shrimp/lobster1.jpg'


export default function RankTable() {
    return (
      <>
        <Card className="P-rank-card my-2" >
            <Card.Img variant="top" src={saira01}  className="P-rank-card-img"/>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>秋刀魚</Card.Title>
                    {/* <FaShoppingCart style={{width:"25px",height:"25px"}} /> */}
                </div>
                <Card.Text>
                    定價 $ 300
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="P-rank-card my-2" >
            <Card.Img variant="top" src={eel}  className="P-rank-card-img"/>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>蒲燒鰻</Card.Title>
                    {/* <FaShoppingCart style={{width:"25px",height:"25px"}} /> */}
                </div>
                <Card.Text>
                    定價 $ 500
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="P-rank-card my-2" >
            <Card.Img variant="top" src={lobster1}  className="P-rank-card-img"/>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>龍蝦</Card.Title>
                    {/* <FaShoppingCart style={{width:"25px",height:"25px"}} /> */}
                </div>
                <Card.Text>
                    定價 $ 600
                </Card.Text>
            </Card.Body>
        </Card>

      </>
    );
  }
  