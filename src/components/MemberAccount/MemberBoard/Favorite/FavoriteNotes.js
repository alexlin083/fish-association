import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import likeNote from "../../../../utils/likeNote";
import { animated, useTransition } from "react-spring";
import Swal from "sweetalert2";
import "./MemberFavoriteNotes.css";
const writers = likeNote.noteMember;

function FavoriteNotes() {
  const [favoriteN, setFavoriteN] = useState([]);
  const token = localStorage.getItem("token");

  //淡入淡出動畫設定
  const transtions = useTransition(favoriteN, {
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

  React.useEffect(() => {
    axios
      .get("http://18.140.90.171:3000/api/profile/noteLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const noteLike = serverResponse.data;
        // console.log(noteLike);
        setFavoriteN(noteLike);
      });
  }, []);

  return (
    <>
      <div className="MFNcommodityFavorites">
        {transtions((style, article) => {
          const noteWriter = writers.find((writer) => {
            return writer.id === article.note_model.member_id;
          });
          return (
            <animated.div style={style}>
              <div>
                <div className="MFNcommodityFavoritesList">
                  <div className="MFNarticle-block">
                    <div className="MFNarticle-content">
                      <Link to={`/travelNotesShow/${article.note_id}`}>
                        {article.note_model.note_name}
                      </Link>
                      <p style={{ opacity: 0.5 }}>作者：{noteWriter.name}</p>
                    </div>
                  </div>
                  <Button
                    className="MFNbtn"
                    onClick={() => {
                      const newWriter = favoriteN.filter((v, i) => {
                        return v.note_id !== article.note_id;
                      });
                      setFavoriteN(newWriter);
                      axios.delete(
                        `http://18.140.90.171:3000/api/profile/noteLike/${article.note_id}`,
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );
                      // console.log(article.note_id);
                      Swal.fire(
                        `您刪除了 ${article.note_model.note_name} 的札記收藏`
                      );
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

        {/* {favoriteN.map((article) => {
          const noteWriter = writers.find((writer) => {
            return writer.id === article.note_model.member_id;
          });
          return (
            <>
              <div>
                <div className="MFNcommodityFavoritesList">
                  <div className="MFNarticle-block">
                    <div className="MFNarticle-content">
                      <a href="">{article.note_model.note_name}</a>
                      <p style={{ opacity: 0.5 }}>作者：{noteWriter.name}</p>
                    </div>
                  </div>
                  <Button
                    className="MFNbtn"
                    onClick={() => {
                      const newWriter = favoriteN.filter((v, i) => {
                        return v.note_id !== article.note_id;
                      });
                      setFavoriteN(newWriter);
                      axios.delete(
                        `http://18.140.90.171:3000/api/profile/noteLike/${article.note_id}`,
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );
                      // console.log(article.note_id);
                    }}
                  >
                    刪除
                  </Button>
                </div>
                <hr />
              </div>
            </>
          );
        })} */}
        {/* <div>
          <div className="MFNcommodityFavoritesList">
            <div className="MFNarticle-block">
              <div className="MFNarticle-content">
                <a href="">GO！化身美人魚的台灣秘境</a>
                <p style={{ opacity: 0.5 }}>作者：優尼 Mrs. Yuny</p>
              </div>
            </div>
            <Button className="MFNbtn">刪除</Button>
          </div>
          <hr />
        </div> */}
      </div>
    </>
  );
}

export default FavoriteNotes;
