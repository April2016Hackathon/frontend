// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import LogIn from './login';
import Register from './register';
import Dashboard from '/.dashboard';

render ((

	<Router history={hashHistory}>
    <Route path='/login' component={LogIn}/>
    <Route path='/register' component={Register}/>
    <Route path='/' component={Dashboard}>
      <IndexRoute component={StuffInDasboard}/>
    </Route>
	</Router>


	))
