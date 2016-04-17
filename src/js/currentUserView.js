import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';
import { ajax } from 'jquery';
import cookie from 'js-cookie';

export default class CurrentUserView extends Component {
	constructor(...args){
		super(...args);
		this.state = {
			post: {}
		}
	}

componentWillMount(){
	// ajax(`https://blooming-springs-29783.herokuapp.com/posts/${this.props.params.post_id}`)
	// .then(post => {
	// 	this.setState({post})

	let { user_id } = this.props.params;
	ajax(`https://blooming-springs-29783.herokuapp.com/posts/${user_id}/newest`)

	.then (post => {
		console.log(post)
		this.setState({
			post: post.postings
			});
		}
	)
}
	render() {
		let {post} = this.state
		console.log(post)
		let currentUser = cookie.getJSON("currentUser");
		console.log(currentUser);
		console.log(this.state)
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{currentUser.username}</h1>
					<h3>{post.title}</h3>
					<div>{post.text}</div>
					<ResponseFeed post_id={post.id}/>

				</div>

			</div>
			)

	}

}
