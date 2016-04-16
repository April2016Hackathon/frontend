import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import cookie from 'js-cookie';

/* TODO: NAMES NEED TO BE CORRECTED, GET INFO FROM BACK END */

export default class LogIn extends Component {

  logIn(data){
    ajax({
      url: 'http://',
      type: 'POST',
      data: data,
      cached: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(resp => {
      ajaxSetup({
        headers: {
          'X-auth_token': resp.auth_token
        }
      })
      cookie.set(currentUser, {
        user: resp.user_name,
        auth_token: resp.auth_token
      })
    })
  }

  render() {
    return (
      <div className='login-wrapper'>
        <SSF onData={::this.logIn}>
          <input type='text' name={/*user name goes here*/}/>
          <input type='password' name={/*password goes here*/}/>
          <button>Submit</button>
        </SSF>
      </div>
    );
  }
}
