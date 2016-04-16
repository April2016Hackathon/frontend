import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';
import { ajax } from 'jquery'

export default class CurrentUserView extends Component {

componentWillMount(){
	ajax(`https://blooming-springs-29783.herokuapp.com/posts/${this.props.params.id}/responses`)
}
	render() {
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
