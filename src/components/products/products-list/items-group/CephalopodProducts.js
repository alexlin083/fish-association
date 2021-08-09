import React, { Component } from "react";
// import ProductCard2 from "./ProductCard2";
import { Card } from "react-bootstrap";
/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
/*items json*/
import allProducts from "../../../../utils/products.json";
import { Link } from "react-router-dom";
//connect store
import { connect } from "react-redux";
//action creator
import { addShoppingCartItems } from "../../../../redux/actions/shoppingCart";
import { axiosAddProductLike } from "../../../../redux/actions/productLike";
//
import Swal from "sweetalert2";

class CephalopodProducts extends Component {
  addCart(id) {
    let itemObj = {
      product_id: id,
      buy_num: 1,
    };
    this.props.addShoppingCart(itemObj);
  }

  render() {
    return (
      <>
        {allProducts.cephalopodProducts.map((item) => {
          return (
            <div key={item.id}>
              <Card
                className="P-product-card my-3"
                style={{ marginRight: "20px" }}
              >
                <figure className="P-product-card-pic">
                  <img
                    src={
                      require(`../../../../assets/img/products/cephalopod/${item.image}.jpg`)
                        .default
                    }
                    alt=""
                  />
                </figure>
                <div className="d-flex justify-content-end align-items-center mr-3">
                  <BsHeartFill
                    style={{ width: "25px", height: "25px" }}
                    className="mx-2 heart"
                    onClick={() => {
                      this.props.productLike(item.id);
                    }}
                  />
                  <FaShoppingCart
                    style={{ width: "25px", height: "25px" }}
                    className="shopping-cart"
                    onClick={() => {
                      this.addCart(item.id);
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/detail/cephalopodProducts/${item.name}/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>定價 ${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCartContent: state.shoppingCartContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShoppingCart(item) {
      const action = addShoppingCartItems(item);
      dispatch(action);
    },
    productLike(id) {
      const action = axiosAddProductLike(id);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CephalopodProducts);
