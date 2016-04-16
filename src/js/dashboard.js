import React, {PropTypes, Component} from 'react';
import { Link, hashHistory } from 'react-router';
import CurrentUserView from './currentUserView';
import ResponseView from './response_view';
import Submission from './submission';
import cookie from 'js-cookie';

export default class Dashboard extends Component {

	logOut(){
		cookie.remove('currentUser');
		hashHistory.push('/login');
	}

	render() {
		let currentUser = cookie.getJSON('currentUser')
		console.log(cookie.getJSON('currentUser'))
		return (

			<div className="dashboard">
			<header>
				HEADER
				<span>{currentUser.username}</span>
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'
				/>
			</header>
			<aside>
				<Link to={`${username}/new`}/>



			</aside>
			<div className="main">
			</div>
			<button onClick={this.logOut}>Log Out</button>
			<footer>FOOTER</footer>


			</div>
		)


	}
}
