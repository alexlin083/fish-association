import React, { useState } from "react";
import axios from "axios";
import "./MemberCSS/MemberHistory.css";
import productsAll from "../../../utils/likeProducts";
import { Link } from "react-router-dom";
const moment = require("moment");
const products = productsAll.myProducts;

function MemberHistory() {
  const [orderList, setOrderList] = useState([]);
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://18.140.90.171:3000/api/profile/order", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myOrder = serverResponse.data;
        myOrder.reverse();
        console.log(myOrder);
        setOrderList(myOrder);
      });
  }, []);
  return (
    <>
      {console.log(orderList)}
      {/* {console.log(productsAll.myProducts)} */}
      <div className="MHmemberBoard">
        <div>
          <div className="MHmemberAcount">
            <h2 className="MHhistoryTitle">購買紀錄</h2>
          </div>
          <hr />
        </div>
        <div className="MHhistoryAll">
          {/* --一組商品區塊頭-- */}
          {orderList.map((order) => {
            return (
              <div className="MHhistoryList">
                {order.order_items.map((item) => {
                  const findProduct = products.find((product) => {
                    return product.id === item.product_id;
                  });
                  return (
                    <>
                      <Link
                        to={`/detail/${findProduct.catalogName}/${findProduct.name}/${findProduct.id}`}
                      >
                        <div className="MHitem">
                          <img src={findProduct.image} alt="" />
                          <div className="MHquantity">
                            <div className="MHlist">
                              {findProduct.name}${findProduct.price}
                            </div>
                            <div className="MHnumber">X{item.buy_num}</div>
                          </div>
                          <div className="MHdollar">
                            ${item.buy_num * findProduct.price}
                          </div>
                        </div>
                      </Link>
                      <hr />
                    </>
                  );
                })}
                <div className="MHtotal">
                  <div className="MHdiscountDate">
                    {moment(order.created_at).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                  <div className="MHtotalPrice">${order.original_total}</div>
                  <div className="MHdiscount">${order.pay_total}</div>
                </div>
              </div>
            );
          })}
          {/* --一組商品區塊尾-- */}
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
