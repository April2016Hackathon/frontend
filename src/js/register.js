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
          <div className='signup'>
            <h1>Sign Up</h1>
            <SSF onData={::this.dataHandler}>
              <input type='text'     name='username' placeholder='Username' className='register-input'/>
              <br/>
              <input type='password' name='password' placeholder='Password' className='register-input'/>
              <br/>
              <input type='email'    name='email'    placeholder='Email' className='register-input'/>
              <br/>
              <button>Register</button>
            </SSF>
          </div>
          <div className='image'>
              <img
                src='../images/mild_wild.png'
                alt='Mild or Wild Logo'
                width="150"
              /> 
          </div>     
        </Paper>
      </div>

      );
  }
}
