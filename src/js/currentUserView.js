import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';
import { ajax } from 'jquery';

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
		console.log(this.state)
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{post.user_id}</h1>
					<h3>{post.title}</h3>
					<div>{post.text}</div>
					<ResponseFeed post_id={post.id}/>

				</div>

			</div>
			)

	}

}
