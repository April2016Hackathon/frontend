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
		let {user_id , post_id} = this.props.params;
		let currentUser = cookie.getJSON('currentUser')
		return (

			<div className="dashboard">
			<header>
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'
					height="75"
				/>

				<span><i className="fa fa-user" id="person-icon">  {currentUser.username}</i>
					<button onClick={this.logOut}>Log Out</button>
					<br/>
					<br/>				
				    <div className="nav">
						<Link to={`/${currentUser.id}/${post_id}/responses`}> Responses   </Link>
						<Link to={`/${currentUser.username}`}> Submission   </Link>
						<Link to={`/${currentUser.id}/mood`}> My Mood   </Link>
					</div>
				 </span>
			</header>
			<div className='main-wrapper'>
				<aside>
					<Paper className="aside-paper">

						<PostFeed/>
					</Paper>

				</aside>
				<div className="main-content">
					<Paper className="right-main-content">

						{this.props.children}

					</Paper>
				</div>
			</div>






			</div>
		)

				 // <Link>Submission</Link>
				// <Link>Elevate</Link>
				// <Link>Log out</Link>
	}
}
