import React, {PropTypes, Component} from 'react';
import { Link, hashHistory } from 'react-router';
import CurrentUserView from './currentUserView';
import ResponseView from './response_view';
import Submission from './submission';
import PostFeed from './feed';
import cookie from 'js-cookie';
import Paper from 'material-ui/lib/paper';

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
		console.log(currentUser)
		return (

			<div className="dashboard">
			<header>
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'
					height="75"
				/>

				<span><i className="fa fa-user" >{currentUser.username}</i></span>
			</header>
			<div className='main-wrapper'>
				<aside>
				<Paper className="aside-paper">
					{/*<Link to={`/${currentUser.username}`}>Submission</Link>*/}
					{/*<Link to={`/${currentUser.id}/${post_id}/mood`}>My Mood</Link>*/}
					<PostFeed/>
				</Paper>
				</aside>
				<div className="main">
				{this.props.children}
				</div>
			</div>

			<footer>			
				<button onClick={this.logOut}>Log Out</button>
			</footer>


			</div>
		)

				 // <Link>Submission</Link>
				// <Link>Elevate</Link>
				// <Link>Log out</Link>
	}
}
