import React, { Component } from 'react';
import { ajax } from 'jquery';
import SSF from 'react-simple-serial-form';

export default class Response extends React.Component {
  render() {
    return (
      <div>
        <SSF onData={::this.dataHandler}>
          <input type='text' name='response' placeholder='Type a response...'/>
          <button>Submit</button>
        </SSF>
      </div>
    );
  }
}
