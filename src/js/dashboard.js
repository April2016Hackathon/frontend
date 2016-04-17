import React, {PropTypes, Component} from 'react';
import { Link, hashHistory } from 'react-router';
import CurrentUserView from './currentUserView';
import ResponseView from './response_view';
import Submission from './submission';
import PostFeed from './feed';
import cookie from 'js-cookie';

export default class Dashboard extends Component {
	constructor(...args){
		super(...args);
		// this.state = {
		// 	view: <Submission/>
		// }
	}

	logOut(){
		cookie.remove('currentUser');
		hashHistory.push('/login');
	}

	render() {
		let currentUser = cookie.getJSON('currentUser')
		return (

			<div className="dashboard">
			<header>
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'
					width="75"
					height="75"
				/>
				<span>{currentUser.username}</span>
			</header>
			<div className='main-wrapper'>
				<aside>
				{/*<Link to={`/${currentUser.username}`}>Submission</Link>*/}
				{/*<Link to={`/${currentUser.username}/respond`}>Elevate Moods</Link>*/}
				<PostFeed/>
				</aside>
				<div className="main">
				{this.props.children}
				</div>
			</div>
			<button onClick={this.logOut}>Log Out</button>
			<footer>FOOTER</footer>


			</div>
		)


	}
}
