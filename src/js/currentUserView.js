import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';
import { ajax } from 'jquery'

export default class CurrentUserView extends Component {
	constructor(...args){
		super(...args);
		this.state = {
			post: {}
		}
	}

componentWillMount(){
	ajax(`https://blooming-springs-29783.herokuapp.com/posts/${this.props.params.post_id}`)
	.then(post => {
		this.setState({post})
	})
}
	render() {
		let {post} = this.state
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{post.username}</h1>
					<h3>{post.title}</h3>
					<div>{post.text}</div>
					<ResponseFeed />

				</div>

			</div>
			)

	}

}
