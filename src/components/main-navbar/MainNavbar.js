import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import IndexPage from "../../pages/IndexPage";
import ActivityPage from "../../pages/ActivityPage";
import TravelNotesPage from "../../pages/TravelNotesPage";
import TravelNotesShow from "../../components/travel-notes/travel-note-show/TravelNotesShow"
import TravelNotesUpload from "../../components/travel-notes/travel-note-editor/TravelNotesUpload"
import AuthPage from "../../pages/AuthPage";
import ProductsListPage from "../../pages/ProductsListPage";
import memberPage from "../../pages/MemberPage";
import ActivityOrder from "../../pages/ActivityOrder";
import Cart from "../order-item/cart";
import { Component } from "react";
/* css import */
import "../../assets/css/styled.css";
import "./styles.css";
/* img import */
import logo from "../../assets/img/logo.png";
//icons
import { FaUserTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

//login image
//import user from "../../assets/img/footer/user.jpg"
//../../assets/img/userimage/people-1627149411393.jpg

//reduc & action creator
import { connect } from "react-redux";
import {
  changeLogoutState,
  checkTokenProfile,
} from "../../redux/actions/memberLogin";
import { axiosGetShoppingCartList } from "../../redux/actions/shoppingCart";
import { axiosWeather, axiosWeatherInfo } from "../../redux/actions/weather";
//axios
import axios from "axios";

//popovers
import PopoverShopping from "./popover";

class MainNavbar extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      //axios
      this.props.checkToken(token);
      this.props.handleGetCartItemsList(token);
    } else {
      this.props.handleLogout();
    }
  }

  render() {
    return (
      <>
        <Router>
          <Navbar
            collapseOnSelect
            expand="md"
            fixed="top"
            variant="dark"
            className="nav-bar"
          >
            {/*logo*/}
            <LinkContainer
              to="/"
              onClick={() => {
                axiosWeather();
                axiosWeatherInfo();
              }}
            >
              <Navbar.Brand className="font-weight-bold ml-5">
                <img
                  src={logo}
                  width="25"
                  height="25"
                  className="d-inline-block mr-2"
                  alt="React Bootstrap logo"
                />
                跳躍吧漁會
              </Navbar.Brand>
            </LinkContainer>

            {/*navigation 網頁連結*/}
            <Navbar.Collapse className="justify-content-end">
              <Nav activeKey={window.location.pathname} className="mr-5">
                <LinkContainer to="/activity" className="mx-2">
                  <Nav.Link>地方活動</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/travelNotes" className="mx-2">
                  <Nav.Link>札記分享</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products" className="mx-2">
                  <Nav.Link>生鮮水產</Nav.Link>
                </LinkContainer>
                <LinkContainer
                  to={this.props.isLogin === true ? "/member" : "/auth"}
                  className="mx-2"
                >
                  <Nav.Link>會員中心</Nav.Link>
                </LinkContainer>

                {/*金色分割線*/}
                <table className="mx-3">
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: `var(--sixth-color)`,
                          borderRightStyle: "solid",
                        }}
                      ></td>
                    </tr>
                  </tbody>
                </table>

                {/*購物車*/}
                <div className="d-flex align-items-center mx-3">
                  <PopoverShopping />
                  <Badge
                    pill
                    style={{
                      width: "50px",
                      backgroundColor: "#E63946",
                      marginLeft: "5px",
                    }}
                  >
                    {this.props.buyNum.length}
                  </Badge>{" "}
                </div>

                {/* 判斷會員下拉的呈現 */}
                {this.props.isLogin === false ? (
                  <NavDropdown
                    title={
                      <FaUserTimes style={{ width: "30px", height: "30px" }} />
                    }
                    id="collasible-nav-down"
                  >
                    <NavDropdown.Item>
                      {/* 會員登錄 */}
                      <LinkContainer to="/auth">
                        <Nav.Link className="text-center">會員登入</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/auth">
                        <Nav.Link className="text-center">會員註冊</Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown
                    title={
                      <FaUserCheck
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#5CFC4B",
                        }}
                      />
                    }
                    id="collasible-nav-down"
                  >
                    <NavDropdown.Item>
                      <LinkContainer to="/auth" className="mr-0">
                        <Navbar.Brand>
                          <img
                            // src={
                            //   localStorage.getItem("image") === "null"
                            //     ? require(`../../assets/img/userimage/user.jpg`)
                            //         .default
                            //     : "http://localhost:3000/" + localStorage.image
                            // }
                            src={
                              require(`../../assets/img/userimage/user.jpg`)
                                .default
                            }
                            width="35"
                            height="35"
                            style={{ borderRadius: "50%" }}
                            className="d-inline-block mr-2"
                            alt="React Bootstrap logo"
                          />
                          <span style={{ fontSize: "16px" }}>
                            {localStorage.getItem("name")}
                          </span>
                        </Navbar.Brand>
                      </LinkContainer>
                      <LinkContainer to="/auth">
                        <Nav.Link
                          onClick={this.props.handleLogout}
                          className="text-center"
                        >
                          會員登出
                        </Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                {/* 判斷會員下拉的呈現 結束*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/activity" component={ActivityPage} />
            <Route
              path="/order/activity/:name/:step"
              component={ActivityOrder}
            />
            <Route path="/travelNotes" component={TravelNotesPage} />
            <Route path="/travelNotesShow/:noteId" component={TravelNotesShow} />
            <Route path="/travelNotesUpload" component={TravelNotesUpload} />
            <Route path="/member" component={memberPage}/>
            <Route path="/auth" component={AuthPage} />
            <Route path="/products/order" component={Cart} />
            <Route path="/products" component={ProductsListPage} />
            <Route path="/:itemType" component={ProductsListPage} />
            <Route
              path="/detail/:type/:name/:id"
              component={ProductsListPage}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.memberLogin.isLogin,
    buyNum: state.shoppingCartContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("image");
      delete axios.defaults.headers.common["Authorization"];
      const action = changeLogoutState();
      dispatch(action);
    },
    checkToken(token) {
      const action = checkTokenProfile(token);
      dispatch(action);
    },
    handleGetCartItemsList(token) {
      const action = axiosGetShoppingCartList(token);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
