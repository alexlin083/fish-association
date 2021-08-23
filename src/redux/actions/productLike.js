import * as actionTypes from "../constant";
import axios from "axios";

export const handleMemberLike = (data) => ({
  type: actionTypes.PRODUCTS_LIKE_ACTION,
  data,
});

export const axiosAddProductLike = (id) => {
  console.log(id);
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`http://18.140.90.171:3000/api/profile/loveProducts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      });
  };
};
