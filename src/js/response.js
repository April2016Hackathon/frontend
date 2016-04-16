import React, { Component } from 'react';
import { ajax } from 'jquery';
import SSF from 'react-simple-serial-form';

export default class Response extends Component {

  dataHandler(newResponse){
    ajax({
      url: 'https://blooming-springs-29783.herokuapp.com/response',
      type: 'POST',
      data: newResponse,
      cached: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then()
  }

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
