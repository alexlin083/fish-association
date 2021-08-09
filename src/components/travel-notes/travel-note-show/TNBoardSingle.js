import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

import arupaka from "../../../assets/img/footer/01.jpg"

import "./styles.css"

const moment = require("moment")


function TNBoardSingle(props) {

  const [board,setBoard] = useState([])
  let { noteId } = useParams();
  

  useEffect(() => {
      axios
      .get(`http://localhost:3000/api/travelNotes/boardview/${noteId}`)
      .then((serverResponse) => {
        const boardRes = serverResponse.data.board;
        // console.log(boardRes); 
        setBoard(boardRes)
      });
        
    }, []);

  return (
    <>
        {board.map((boardData) => {
        return(
          <>
            <div className="d-flex my-3 align-items-center">
              <div className="TN-board-content d-flex justify-content-between align-items-end">
                <div>
                  <p style={{fontSize:"20px"}} className="mb-1">{boardData.board_usename}</p>
                  <p style={{fontSize:"16px"}} >{boardData.board_content}</p>
                </div>
                <p style={{fontSize:"12px",opacity:".6",textAlign:"end"}}>{moment(boardData.board_update_time).format("YYYY-MM-DD HH:mm:ss")}</p>
              </div>
            </div>
            <hr style={{background:"white"}}></hr>
        </>
        )
        })}
    </>

  );
}

export default TNBoardSingle;