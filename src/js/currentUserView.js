import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';
import { ajax } from 'jquery';

export default class CurrentUserView extends Component {
	constructor(...args){
		super(...args);
		this.state = {
			post: {},
			loading: true
		}
	}

	getPostID(){
		let { user_id, post_id } = this.props.params;
		ajax(`https://blooming-springs-29783.herokuapp.com/posts/${user_id}/newest`)

		.then (post => {
			console.log(post)
			this.setState({
				post: post.postings,
				loading: false
				});
				console.log(post.postings)
			}
		)
	}

componentWillMount(){
	// ajax(`https://blooming-springs-29783.herokuapp.com/posts/${this.props.params.post_id}`)
	// .then(post => {
	// 	this.setState({post})
	this.getPostID()
	let { user_id, post_id } = this.props.params;
	ajax(`https://blooming-springs-29783.herokuapp.com/posts/${user_id}/newest`)

	.then (post => {
		console.log(post)
		this.setState({
			post: post.postings,
			loading: false
			});
			console.log(post.postings)
		}
	)
}
	render() {
		let {post} = this.state
		let {user_id, post_id} = this.props.params;
		console.log(post.id)
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{post.user_id}</h1>
					<h3>{post.title}</h3>
					<div>{post.text}</div>
					<ResponseFeed post_id={post_id}/>
				</div>
			</div>
			)

	}

	renderLoading(){
		return (
			<h1>Loading...</h1>
		)
	}
	loading(){
		let { loading } = this.state;
		loading
		? this.renderLoading()
		: this.render()
	}
}
