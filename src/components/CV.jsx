import React, { Component } from "react";
import CVpdf from "../images/CV.pdf";

export default class CV extends Component {
  render() {
    return (
      <div className="container p-10">
        <div className="row">
          <div className="col-md-5">
            <h2 className="aboutMeHeader">Mitt CV</h2>
            <a href={CVpdf} target="_blank">
              Klicka här
            </a>
          </div>
        </div>
      </div>
    );
  }
}
