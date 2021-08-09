import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import {Button} from "react-bootstrap";



export default function TNWriteBtn() {
  return (
    <>
      <Link to="/travelNotesUpload">
        <Button className="TN-write-btn">
          <BsPencilSquare className="mr-1" />發表文章
        </Button>
      </Link>
       
    </>
  );
}