import React from "react";

import { Col, Row } from "react-bootstrap";

import "./styles.css"


function ContentBlock(props) {

    const notesData = props.data;
  return (
    <>
        <div className="TN-content-block">
            <div className="TN-content-wrapper">
                <h1 className="TN-content-title">{notesData.note_name}</h1>
                <p dangerouslySetInnerHTML={{ __html: `${notesData.note_content}` }}></p>
            </div>
        </div>
    </>

  );
}

export default ContentBlock;