import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./MemberFavoritesProducts.css";
import productsAll from "../../../../utils/likeProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring";
const products = productsAll.myProducts;

function FavoriteProducts(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [favoriteP, setFavoriteP] = useState([]);
  const token = localStorage.getItem("token");

  //
  const transtions = useTransition(favoriteP, {
    trail: 300,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  //
  // const listShrinkRef = useSpringRef();
  // const listShrink = useSpring({
  //   ref: listShrinkRef,
  //   from: {
  //     width: "0%",
  //     height: "0%",
  //   },
  //   to: {
  //     width: "100%",
  //     height: "30%",
  //   },
  // });
  // useChain([listShrinkRef]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/productLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myProductsLike = serverResponse.data;
        console.log(myProductsLike);
        setFavoriteP(myProductsLike);
      });
  }, []);

  return (
    <>
      <div className="MFPcommodityFavorites">
        {/* {淡入淡出} */}
        {transtions((style, likeProducts) => {
          const findProduct = products.find((product) => {
            return product.id === likeProducts.product_id;
          });
          return (
            <animated.div style={style}>
              <div>
                <div className="MFPcommodityFavoritesList">
                  <img
                    className="MFPcommodityPicture"
                    src={findProduct.image}
                    alt=""
                  />
                  <Link
                    to={`/detail/${findProduct.catalogName}/${findProduct.name}/${findProduct.id}`}
                  >
                    {findProduct.name}
                  </Link>
                  <Button
                    className="MFPbtn"
                    onClick={() => {
                      const newFavProducts = favoriteP.filter((v, i) => {
                        return v.product_id !== likeProducts.product_id;
                      });
                      setFavoriteP(newFavProducts);
                      axios.delete(
                        `http://localhost:3000/api/profile/productLike/${findProduct.id}`,
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );
                      // console.log(findProduct.id);
                      Swal.fire(`您刪除了 ${findProduct.name} 收藏項目`);
                    }}
                  >
                    刪除
                  </Button>
                </div>
                <hr />
              </div>
            </animated.div>
          );
        })}
      </div>
    </>
  );
}

export default FavoriteProducts;
