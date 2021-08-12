import { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";
//redux
import { connect } from "react-redux";
//action creator
import {
  prevStep,
  registerAxios,
} from "../../../../redux/actions/memberRegister";

class Join2 extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="MJ2memberEnter">
            <Form.Group className="MJ2item mb-0">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                姓名
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="name"
                required
                ref={(input) => (this.name = input)}
              />
            </Form.Group>
            <Form.Group className="MJ2item mt-2">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                性別
              </Form.Text>
              <Form.Group className="MJ2itemContent mt-0 mb-1">
                <Form.Check type="radio" className="MJ2gender">
                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label="男"
                    id="男"
                    required
                    style={{ fontSize: "20px" }}
                    ref={(input) => (this.gender = input)}
                    value="1"
                  ></Form.Check>
                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label="女"
                    id="女"
                    required
                    style={{ fontSize: "20px", paddingLeft: "20px" }}
                    value="2"
                  ></Form.Check>
                </Form.Check>
              </Form.Group>
            </Form.Group>
            <Form.Group className="MJ2item mt-2 mb-3" controlId="dob">
              <Form.Label className="MJ2itemLabel">出生日期</Form.Label>
              <Form.Group className="MJ2itemContent">
                <Form.Control
                  type="date"
                  name="dob"
                  required
                  placeholder="Date of Birth"
                  ref={(input) => (this.birth = input)}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="MJ2item m-0">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                連絡電話
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="phone"
                ref={(input) => (this.phone = input)}
              />
            </Form.Group>
            <Form.Group className="MJ2item mt-4 mb-2">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                地址
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="address"
                required
                ref={(input) => (this.address = input)}
              />
            </Form.Group>
            <Form.Text
              className="MJ2itemLabel mb-3 mx-auto"
              htmlFor=""
              style={{ color: "#fff579", fontSize: "16px", width: "200px" }}
            >
              {this.props.msg}
            </Form.Text>
            <Row>
              <Col>
                <Button
                  onClick={() => {
                    this.props.handlerPrev();
                  }}
                  className="MJ2btn"
                  type="button"
                >
                  上一步
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    this.props.handleSuccess(
                      this.props.account,
                      this.props.email,
                      this.props.password,
                      this.props.repassword,
                      this.name,
                      this.gender,
                      this.birth,
                      this.phone,
                      this.address,
                    );
                  }}
                  className="MJ2btn"
                  type="button"
                >
                  確認送出
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.memberRegister.accountRegister,
    email: state.memberRegister.emailRegister,
    password: state.memberRegister.passwordRegister,
    repassword: state.memberRegister.comfirmPasswordRegister,
    msg: state.memberRegister.msg,
    registerSuccess: state.memberRegister.registerSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerPrev() {
      const action = prevStep(false);
      dispatch(action);
    },
    handleSuccess(
      account,
      email,
      password,
      repassword,
      name,
      gender,
      birth,
      phone,
      address
    ) {
      let genderValue = gender.checked === true ? 1 : 2;
      const inputValue = {
        account,
        email,
        password,
        repassword,
        name: name.value,
        gender: genderValue,
        birth: birth.value,
        phone: phone.value,
        address: address.value,
      };
      const action = registerAxios(inputValue);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Join2);
