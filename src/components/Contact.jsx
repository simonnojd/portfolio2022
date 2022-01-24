import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container p-10">
        <div className="row">
          <div className="col-md-5">
            <h2 className="aboutMeHeader">Kontakta mig</h2>
            <li>Mail: simon.nojd.jobb@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/simon-birgersson-n%C3%B6jd-7b086a171/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/simonnojd" target="_blank">
                Github
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
