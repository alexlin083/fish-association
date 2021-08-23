import React, { Component, useState, useEffect } from "react";
import { TopRankBlock } from "./styled";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

export default function TopRank() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    axios
      .get("http://18.140.90.171:3000/api/travelNotes/top")
      .then((serverResponse) => {
        const notesRes = serverResponse.data.notes;
        // console.log(notesRes);
        setNotes(notesRes);
      });
  }, []);

  return (
    <>
      <TopRankBlock className="TopRankBlock">
        <h1 style={{ margin: "30px auto" }}>推薦札記 Top 5</h1>
        <ul>
          {notes.map((notes, index) => {
            return (
              <>
                <li className="d-flex align-items-center justify-content-between">
                  <Link to={`/travelNotesShow/${notes.id}`}>
                    {index + 1}. {notes.note_name}
                  </Link>
                  <div>
                    <BsHeartFill
                      style={{ color: "var(--fifth-color)", opacity: "0.7" }}
                    />{" "}
                    {notes.favorite}
                  </div>
                </li>
                <hr></hr>
              </>
            );
          })}
        </ul>
      </TopRankBlock>
    </>
  );
}
