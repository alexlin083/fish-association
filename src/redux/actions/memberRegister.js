import * as actionTypes from "../constant";
import axios from "axios";

export const saveInput = (data) => ({
  type: actionTypes.MEMBER_REGISTER_ACTION,
  data,
});

export const prevStep = (data) => ({
  type: actionTypes.MEMBER_PREVSTEP_ACTION,
  data,
});

export const saveInputValueStepTwo = (data) => ({
  type: actionTypes.MEMBER_REGISTERSTEPTWO_ACTION,
  data,
});

export const registerAxios = (data) => {
  return (dispatch) => {
    axios
      .post("http://18.140.90.171:3000/api/member/register", {
        member: {
          account: data.account,
          email: data.email,
          password: data.password,
          comfirmPassword: data.repassword,
          name: data.name,
          gender: data.gender,
          birthday: data.birth,
          phone: data.phone,
          address: data.address,
        },
      })
      .then((res) => {
        console.log(res.data);
        const action = saveInputValueStepTwo({
          msg: res.data.message,
          registerSuccess: true,
        });
        dispatch(action);
      })
      .catch((error) => {
        if (error.response) {
          const action = saveInputValueStepTwo({
            msg: error.response.data.errors[0].msg,
          });
          dispatch(action);
        }
      });
  };
};

export const registerStepOneAxios = (inputDate) => {
  return (dispatch) => {
    axios
      .post("http://18.140.90.171:3000/api/member/register", {
        member: {
          account: inputDate.account,
          email: inputDate.email,
          password: inputDate.password,
          comfirmPassword: inputDate.comfirmPassword,
        },
      })
      .then((res) => {});
  };
};
