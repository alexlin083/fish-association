import React from "react";
import {Container} from "react-bootstrap";
import Slide from "./Slide";
import TopRank from "./TopRank";
import TNListBlock from "./TNListBlock";
import { WebPageTop} from "./styled";


function ListPage() {
  return (
    <>
      <nav style={{ height: "65px"}}></nav>
        <WebPageTop className="d-flex justify-content-between">
        <Slide />
        <TopRank />
        </WebPageTop>
          <Container className="list-container">
            <TNListBlock className="pb-5" />
          </Container>
      
    </>
  );
}

export default ListPage;