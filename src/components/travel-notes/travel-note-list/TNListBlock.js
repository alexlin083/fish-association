import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import TNBlock from "./TNBlock";
import TNSearch from "./TNSearch";
import TNWriteBtn from "./TNWriteBtn";
import "./styles.css";

export default function TNListBlock(props) {
  const [notes, setNotes] = useState([]);

  //抓取後端來的API
  useEffect(() => {
    // const token = localStorage.getItem("token");
    axios
      .get("http://18.140.90.171:3000/api/travelNotes")
      .then((serverResponse) => {
        const notesRes = serverResponse.data.notes;
        // console.log(notesRes);
        notesRes.reverse();
        setNotes(notesRes);
        // console.log(notes);
      });
  }, []);

  return (
    <>
      <div className="list-top d-flex justify-content-between align-items-center mx-5">
        {/* <TNSearch /> */}
        <div
          style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}
          className="ml-1"
        >
          文章列表
        </div>
        <TNWriteBtn />
      </div>
      <TNBlock data={notes} />
      {/* <TNBlock /> */}
    </>
  );
}
