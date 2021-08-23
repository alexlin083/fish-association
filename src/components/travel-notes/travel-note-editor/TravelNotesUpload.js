import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "./MyUploadAdapter";

import { Container, Form, Button, Modal } from "react-bootstrap";
import MainFooter from "../../footer/MainFooter";

import "./styles.css";

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // 第二个参数设置上传图片的地址
    return new MyUploadAdapter(
      loader,
      "http://18.140.90.171:3000/api/travelNotes/upload"
    );
  };
}
export default class TravelNotesUpload extends Component {
  state = {
    title: "",
    content: "",
  };

  onSubmit = () => {
    const token = localStorage.getItem("token");
    let header = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (this.state.title === "") {
      Swal.fire("請輸入文章標題");
    } else if (this.state.content === "") {
      Swal.fire("請輸入文章內容");
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
              "http://18.140.90.171:3000/api/travelNotes/upload",
              {
                note_name: this.state.title,
                note_content: this.state.content,
              },
              {
                headers: header,
              }
            )
            .then(() => {
              this.props.history.push("/travelNotes");
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
      <div className="activity-wrapper">
        <nav style={{ height: "65px" }}></nav>
        <Container>
          <div className="TN-editor-block">
            <div className="TN-editor-wrapper">
              <h1 style={{ color: "white" }}>發表文章</h1>
              <Form>
                <Form.Group className="mb-3" controlId="TN-title">
                  <Form.Label style={{ color: "white" }}>文章標題</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="TN-content">
                  <Form.Label style={{ color: "white" }}>文章內容</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      ckfinder: {
                        uploadUrl: `./ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images`,
                      },
                      // extraPlugins: [ MyCustomUploadAdapterPlugin]
                    }}
                    // data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      // console.log( 'Editor is ready to use!', editor );
                    }}
                    onChange={(event, editor) => {
                      this.setState({ content: editor.getData() });
                      // console.log( { event, editor, CKdata } );
                    }}
                    onBlur={(event, editor) => {
                      // console.log( 'Blur.', editor );
                    }}
                    onFocus={(event, editor) => {
                      // console.log( 'Focus.', editor );
                    }}
                  />
                </Form.Group>
                <Button
                  style={{ background: "var(--second-color)", border: "none" }}
                  onClick={this.onSubmit}
                >
                  送出文章
                </Button>
              </Form>
            </div>
          </div>
        </Container>
        <MainFooter />
      </div>
    );
  }
}
