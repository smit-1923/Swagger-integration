import React, { Component } from 'react';
import { render } from 'react-dom';
import SwaggerUI from "swagger-ui-react"
// import "swagger-ui-react/swagger-ui.css"

export default class Swagger extends Component {
  render() {
    return (
      <div>
        < SwaggerUI url={this.props.url} />
      </div>
    );
  }
}