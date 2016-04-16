import React, { Component } from 'react';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router'
import SSF from 'react-simple-serial-form';

export default class Register extends Component {

    dataHandler(newUser){
      ajax({
        url: 'http://',
        type: 'POST',
        cached: false,
        dataType: 'json',
        processData: false,
        contentType: false
      }).then(hashHistory.push('/login'))
    }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SSF onData={::this.dataHandler}>
          <input type='text' name='username' placeholder='Username'/>
          <input type='password' name='password' placeholder='Password'/>
          <input type='email' name='email' placeholder='Email'/>
          <button>Register</button>
        </SSF>
      </div>);
  }
}

Register.propTypes = {
};
