import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import TNBoardSingle from "./TNBoardSingle";

import "./styles.css";
import { Form, Button } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class BoardBlock extends Component {
  state = {
    noteId: "",
    name: "",
    content: "",
  };

  componentDidMount() {
    const id = this.props.match.params.noteId;
    this.setState({ noteId: id });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      Swal.fire("請輸入留言名稱");
    } else if (this.state.content === "") {
      Swal.fire("請輸入留言內容");
    } else {
      Swal.fire({
        title: "確定送出?",
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: `取消`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(
              `http://18.140.90.171:3000/api/travelNotes/boardUpload/${this.state.noteId}`,
              {
                board_usename: this.state.name,
                board_content: this.state.content,
              }
            )
            .then(() => {
              window.location.reload();
            })

            .catch((error) => {
              throw error;
            });
        }
      });
    }
  };

  render() {
    return (
      <>
        <div className="TN-board-block">
          <div className="TN-board-wrapper">
            <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>留言板</h3>
            <div>
              <TNBoardSingle />
            </div>
            <div className="TN-board-editor">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>留言名稱</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>留言內容</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={this.state.content}
                    onChange={(e) => this.setState({ content: e.target.value })}
                  />
                </Form.Group>
                <Button
                  style={{ background: "var(--second-color)", border: "none" }}
                  type="submit"
                  onClick={this.onSubmit}
                >
                  送出留言
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BoardBlock);
