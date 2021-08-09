import React, { Component, useState,useEffect } from 'react';
import { Col, Row , Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import { BsHeartFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";


import arupaka from "../../../assets/img/footer/01.jpg"

import "./styles.css"
import { Link } from 'react-router-dom';

const moment = require("moment")


function AuthorBlock(props) {
    const notesData = props.data;
    function heartClick(e){
        e.target.style.color = "var( --fifth-color)"
    }
    function bookClick(e) { 
        Swal.fire("已加入收藏")
     }
    function shareClick(e) { 
        Swal.fire({
            title: '分享此篇文章',
            input:"text",
            inputValue: `${window.location.href}`
            })
     }
  return (
    <>
        {Array.isArray(notesData)==false ?
        (
        <div className="TN-author-block">
            <Row>
                <Col sm={3} className="TN-author-pic d-flex align-items-center">
                    <img src={arupaka} alt=""></img>
                </Col>
                <Col sm={5} className="d-flex flex-column justify-content-center">
                    <p style={{fontSize:"28px"}}>作者 : {notesData.members_model.name}</p>
                    <p>上傳日期 : {moment(notesData.note_update_time).format("YYYY-MM-DD")}</p>
                </Col>
                <Col sm={4} className="d-flex align-items-center justify-content-end">
                    <div className="mr-4"><BsHeartFill onClick={heartClick} className="mr-2" style={{width:"25px",height:"25px",cursor:"pointer"}} />喜歡</div>
                    <div className="mr-4"><BsBookmark onClick={bookClick} className="mr-1" style={{width:"27px",height:"27px",cursor:"pointer"}}/>收藏</div>
                    <div className="mr-4"><BiShareAlt onClick={shareClick} className="mr-1" style={{width:"25px",height:"25px",cursor:"pointer"}}/>分享</div>
                </Col>
            </Row>
        </div>
        ):(
            <div></div>
        )
        }
    </>

  );
}

export default AuthorBlock;