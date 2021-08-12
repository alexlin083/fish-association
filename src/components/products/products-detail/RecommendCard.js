import React from "react";
import { Card } from "react-bootstrap";

/* img import */
import salmon02 from "../../../assets/img/products/fish/salmon02.jpg";
import saira01 from "../../../assets/img/products/fish/saira01.jpg";
import tuna from "../../../assets/img/products/fish/tuna2.jpg";
import mackerel3 from "../../../assets/img/products/fish/mackerel3.jpg";

function Recommend() {
  return (
    <>
      <Card className="P-recommend-card mt-3">
        <Card.Img variant="top" src={salmon02} className="P-recommend-img" />
        <Card.Body>
          <Card.Title>鮭魚</Card.Title>
          <Card.Text>NT $250</Card.Text>
        </Card.Body>
      </Card>
      <Card className="P-recommend-card mt-3">
        <Card.Img variant="top" src={saira01} className="P-recommend-img" />
        <Card.Body>
          <Card.Title>秋刀魚</Card.Title>
          <Card.Text>NT $300</Card.Text>
        </Card.Body>
      </Card>
      <Card className="P-recommend-card mt-3">
        <Card.Img variant="top" src={tuna} className="P-recommend-img" />
        <Card.Body>
          <Card.Title>鮪魚</Card.Title>
          <Card.Text>NT $500</Card.Text>
        </Card.Body>
      </Card>
      <Card className="P-recommend-card mt-3">
        <Card.Img variant="top" src={mackerel3} className="P-recommend-img" />
        <Card.Body>
          <Card.Title>鯖魚</Card.Title>
          <Card.Text>NT $350</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Recommend;
