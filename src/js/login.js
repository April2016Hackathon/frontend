import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import { Link, hashHistory } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import cookie from 'js-cookie';

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
        dataType: 'json'
      }).then(resp => {
        console.log('resp', resp)
        ajaxSetup({
          headers: {
            'X-Auth-Token': resp.user.auth_token
          }
        })
        cookie.set('currentUser', resp.user, { expires: 7 });
        hashHistory.push(`/${resp.user.username}`)
      })
    }
  }

  render() {
    return (
      <div className='login-wrapper'>
        <SSF onData={::this.logIn}>
          <input type='text' name='username' placeholder='Username'/>
          <input type='password' name='password' placeholder='Password'/>
          <button>Submit</button>
        </SSF>
        <Link to='/register'>Register</Link>
      </div>
    );
  }
}
