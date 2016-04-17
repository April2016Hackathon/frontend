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
        dataType: 'json'
      }).then(resp => {
        console.log('resp', resp)
        ajaxSetup({
          headers: {
            'X-Auth-Token': resp.user.auth_token
          }
        })
        cookie.set('currentUser', resp.user, { expires: 7 });
        hashHistory.push(`/${resp.user.id}`)
      })
    }
  }

  render() {
    return (
      <div className='login-wrapper'>
      <Paper className="login-paper">
        <img
          src='../images/mild_wild.png'
          alt='Mild or Wild Logo'
          width="150"
        />
        <br/>
        <div className='login-left'>
        <SSF onData={::this.logIn}>
          <input type='text' name='username' placeholder='Username' className='login-input'/>
          <br/>
          <input type='password' name='password' placeholder='Password' className='login-input'/>
          <br/>
          <button>Submit</button>
        </SSF>
        </div>
        <div className='login-right'>
        <Link to='/' className='register-link'>Register</Link>
        </div>
        <div className="instructions">
          <p> Are you <span className='logo-mild'>mild</span> or <span className='logo-wild'>wild</span>?
            <br/>
          Choose your mood and elevate others' moods.</p>
        </div>
      </Paper>
      </div>
    );
  }
}
