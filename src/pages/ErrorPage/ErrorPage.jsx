import React, { Component } from 'react';
import './ErrorPage.scss';

export class ErrorPage extends Component {
  render() {
    return (
      <div className='ErrorPage'>
        <h1>Page you looking for does not exist</h1>
      </div>
    );
  }
}

export default ErrorPage;
