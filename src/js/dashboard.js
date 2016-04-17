import React, {PropTypes, Component} from 'react';
import { Link, hashHistory } from 'react-router';
import CurrentUserView from './currentUserView';
import ResponseView from './response_view';
import Submission from './submission';
import PostFeed from './feed';
import cookie from 'js-cookie';
import Paper from 'material-ui/lib/paper';
import { ajax } from 'jquery';

export default class Dashboard extends Component {
	constructor(...args){
		super(...args);
		// this.state = {
		// 	view: <Submission/>
		// }
		this.state = { post_id: null }
	}

	logOut(){
		cookie.remove('currentUser');
		hashHistory.push('/login');
	}

	componentWillMount() {
		let { user_id } = this.props.params;
		ajax(`https://blooming-springs-29783.herokuapp.com/posts/${user_id}/newest`)
			.then (data => {
				this.setState({post_id: data.postings.id});

			})
	}

	render() {
		let {user_id } = this.props.params;
		let { post_id } = this.state;
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
						<h2> Elevate A Mood </h2>
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
