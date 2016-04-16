import React, {PropTypes, Component} from 'react';
import { Link, hashHistory } from 'react-router';
import CurrentUserView from './currentUserView';
import ResponseView from './response_view';
import Submission from './submission';
import PostFeed from './feed';
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
<<<<<<< HEAD
			<aside><</aside>
=======
			<aside>
				<Link to={`/${currentUser.username}`}>Submission</Link>
				<Link to={`/${currentUser.username}/mood`}>My Mood</Link>
				<Link to={`/${currentUser.username}/respond`}>Elevate Moods</Link>
			</aside>
>>>>>>> fe5b6b45f1ed7cfaf3435f1d20674647d6151dc3
			<div className="main">
				
			</div>
			<button onClick={this.logOut}>Log Out</button>
			<footer>FOOTER</footer>


			</div>
		)


	}
}
