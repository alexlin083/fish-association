import React, { useState, useEffect, initialFormData, useRef } from "react";
import { Wrapper, Bg_blue, ProgressBar } from "./styled";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
const FormData = require("form-data");
function SecondOrder() {
  const [values, setValues] = useState({
    num: "",
    name: "",
    phone: "",
    email: "",
    member: "",
    remit: "",
  });

  const saveFormData = async () => {
    const response = await fetch(
      "http://18.140.90.171:3000/api/activity/order",
      {
        method: "POST",
        body: JSON.stringify(values),
      }
    );
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        num: 2,
        name: "lulu",
        phone: "09222222",
        email: "ee@yahoo.com",
        member: 1,
        remit: 0,
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <>
      <div className="mt-5 flex-wrap">
        <form onSubmit={onSubmit}>
          <Row className="mb-10" noValidate>
            <Form.Group as={Col} md="10" controlId={`validationCustom `}>
              <Form.Label>姓名</Form.Label>
              <Form.Control
                type="text"
                placeholder="請輸入姓名"
                defaultValue=""
                key={`name`}
                name={`name`}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationCustom02">
              <Form.Label>電話</Form.Label>
              <Form.Control
                type="tel"
                placeholder="請輸入電話"
                defaultValue=""
                key={`phone`}
                name={`phone`}
                minLength="9"
                maxLength="14"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationCustomUsername">
              <Form.Label>信箱</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="請輸入信箱"
                  aria-describedby="email"
                  key={`email`}
                  name={`email`}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Button type="submit">資料確認</Button>
          </Row>
        </form>
      </div>
      //0731
    </>
  );
}
export default SecondOrder;
