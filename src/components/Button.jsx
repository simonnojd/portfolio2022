import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.disabled}
          onClick={() => this.props.clickHandler(this.props.component)}
          className="btn btn-primary btn-outline-primary m-3"
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}