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

export const refreshCheck = (data) => ({
  type: actionTypes.MEMBER_REFRESH_CHECK,
  data,
});

export const checkTokenProfile = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get("http://18.140.90.171:3000/api/profile").then((res) => {
      //isLogin = true
      const action = refreshCheck({
        token,
        name: res.data.member.name,
        image: res.data.member.image,
        isLogin: true,
      });
      dispatch(action);
    });
  };
};

export const handleGoogleLogin = (token) => {
  return (dispatch) => {
    axios
      .post("http://18.140.90.171:3000/api/member/login/google", token, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((serverResponse) => {
        console.log(serverResponse);
        const memberName = serverResponse.data.member.name;
        const memberImage = serverResponse.data.member.image;
        const memberToken = serverResponse.data.member.token;
        const action = changeLoginState({
          token: memberToken,
          name: memberName,
          image: memberImage,
          isLogin: true,
        });
        dispatch(action);
      });
  };
};

export const handleAxiosLogin = (account, password) => {
  return (dispatch) => {
    axios
      .post("http://18.140.90.171:3000/api/member/login", {
        member: {
          account: account,
          password: password,
        },
      })
      .then((serverResponse) => {
        const token = serverResponse.data.member.token;
        const memberName = serverResponse.data.member.name;
        const memberImage = serverResponse.data.member.image;
        if (token) {
          // set header
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          //action
          const action = changeLoginState({
            token: token,
            name: memberName,
            image: memberImage,
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
