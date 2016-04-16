import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import { Link, hashHistory } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import cookie from 'js-cookie';
import Paper from 'material-ui/lib/paper';

/* TODO: NAMES NEED TO BE CORRECTED, GET INFO FROM BACK END */

export default class LogIn extends Component {

  logIn(data){
    if (
       data.username !== ''
    && data.username.length > 2
    && data.username.length < 16 )
    {
      ajax({
        url: 'https://blooming-springs-29783.herokuapp.com/login',
        type: 'POST',
        data: data,
        cached: false,
        dataType: 'json',
        processData: false,
        contentType: false
      }).then(resp => {
        console.log(resp)
        ajaxSetup({
          headers: {
            'Auth_Token': resp.auth_token
          }
        })
        cookie.set(currentUser, {
          user: resp.user_name,
          auth_token: resp.auth_token
        })
        hashHistory.push('/')
      })
    }
  }

  render() {
    return (
      <div className='login-wrapper'>
      <Paper className="paper">
        <SSF onData={::this.logIn}>
          <input type='text' name='username' placeholder='Username'/>
          <input type='password' name='password' placeholder='Password'/>
          <button>Submit</button>
        </SSF>
        <Link to='/register'>Register</Link>
      </Paper>
      </div>
    );
  }
}
