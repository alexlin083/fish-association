import React from "react";

import TravelNotesList from "../components/travel-notes/travel-note-list/TravelNotesList";
import MainFooter from "../components/footer/MainFooter";
import TravelNotesShow from "../components/travel-notes/travel-note-show/TravelNotesShow";
import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router } from "react-router-dom";

function TravelNotesPage() {
  return (
    <>
      <div className="activity-wrapper">
        <TravelNotesList />
        <MainFooter />
      </div>
    </>
  );
}

export default TravelNotesPage;
