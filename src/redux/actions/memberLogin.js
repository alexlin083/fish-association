import * as actionTypes from "../constant";
import axios from "axios";

export const changeLogoutState = () => ({
  type: actionTypes.MEMBER_LOGOUT_ACTION,
  isLogin: false,
});

export const changeLoginState = (data) => ({
  type: actionTypes.MEMBER_LOGIN_ACTION,
  data,
});

export const handleAxiosLogin = (account, password) => {
  //e.preventDefault();
  return (dispatch) => {
    axios
      .post("http://localhost:3000/api/member/login", {
        member: {
          account: account,
          password: password,
        },
      })
      .then((serverResponse) => {
        console.log(serverResponse.data)
        const token = serverResponse.data.member.token;
        const memberName = serverResponse.data.member.name;
        if (token) {
          // set header
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          //set localstorage
          localStorage.setItem('token', token);
          localStorage.setItem('name', memberName)
          //action
          const action = changeLoginState({
            errorMsg: "",
            isLogin: true,
          });
          dispatch(action);
        } else {
          delete axios.defaults.headers.common["Authorization"];
          //clear localstorage
        }
      })
      .catch((error) => {
        if (error.response) {
          const action = changeLoginState({
            errorMsg: error.response.data.errors[0].msg,
            isLogin: false,
          });
          dispatch(action);
        }
      });
  };
};
