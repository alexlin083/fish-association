import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import {Container} from "react-bootstrap";
import AuthorBlock from "./AuthorBlock";
import TNContent from "./TNContent";
import TNBoard from "./TNBoard";
import MainFooter from "../../footer/MainFooter";

function NoteShow(props) {

  const [notes,setNotes] = useState([])
  let { noteId } = useParams();
  

  useEffect(() => {
      axios
        .get(`http://localhost:3000/api/travelNotes/single/${noteId}`)
        .then((serverResponse) => {
          const notesRes = serverResponse.data.notes;
          // console.log(typeof notesRes); 
          setNotes(notesRes)
        });
        
    }, []);

      return (
        <>
      <div className="activity-wrapper">
        <nav style={{ height: "65px"}}></nav>
          <Container>
              <AuthorBlock data={notes} />
              <TNContent data={notes} />
            <TNBoard />
          </Container>
          <MainFooter />
      </div>
    </>
  );
}

export default NoteShow;