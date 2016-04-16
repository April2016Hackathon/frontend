// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import LogIn from './login';
import Register from './register';
import Dashboard from './dashboard';
import Submission from './submission';
// import CurrentUserView from './currentUserView';
import cookie from 'js-cookie';

render ((
	<Router history={hashHistory}>
    <Route path='/login' component={LogIn}/>
    <Route path='/register' component={Register}/>
    <Route path='/:username' component={Dashboard}>
      <IndexRoute component={Submission}/>
			{/*<Route path='/:username/mood' component={CurrentUserView}/>*/}
    </Route>
	</Router>

), document.querySelector('.app'))
