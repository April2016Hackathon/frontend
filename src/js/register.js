import React, { Component } from 'react';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import Paper from 'material-ui/lib/paper';

export default class Register extends Component {

    dataHandler(newUser){
      ajax({
        url: 'https://blooming-springs-29783.herokuapp.com/signup',
        type: 'POST',
        data: newUser,
        cached: false,
        dataType: 'json'
      }).then(hashHistory.push('/login'))
    }

  render() {
    return (
      <div className="register-wrapper">
        <Paper className="register-paper">

        <h1>Sign Up</h1>
        <SSF onData={::this.dataHandler}>
          <input type='text'     name='username' placeholder='Username'/>
          <input type='password' name='password' placeholder='Password'/>
          <input type='email'    name='email'    placeholder='Email'/>
          <button>Register</button>
        </SSF>
        </Paper>
      </div>

      );
  }
}
