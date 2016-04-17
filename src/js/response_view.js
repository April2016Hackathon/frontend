import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import ResponseFeed from './response_feed';
import cookie from 'js-cookie';

export default class ResponseView extends Component {
	constructor (...args) {
		super (...args);
		this.state = {
			post: {}
		}
	}

	componentWillMount () {
		let { post_id } = this.props.params;
		ajax(`http://blooming-springs-29783.herokuapp.com/posts/${post_id}`)
		.then(response => {
			console.log(response.postings)
			this.setState({post: response.postings})
		})
	}

	dataHandler(comment){
		let currentUser = cookie.getJSON('currentUser')
		console.log(currentUser.auth_token)
		let { post } = this.state;
      ajax({
        url: `https://blooming-springs-29783.herokuapp.com/posts/${post.id}/responses`,
        type: 'POST',
        data: comment,
        cached: false,
        dataType: 'json',
				headers: {
					'X-Auth-Token': currentUser.auth_token
				}
      })
    }



	render() {
		let { post } = this.state;
		return (
			<div className="add_a_comment">
				<h1 className="elevate-title"> Make me feel better...</h1>
					<div>
						<span>{post.user_id} </span>
						<span>{post.text}</span>
						<span>{post.title}</span>
					</div>
					{/*<ResponseFeed/>*/}
				<SSF onData={::this.dataHandler}>
					<input type="text" name="text" placeholder="Elevate my mood.."/>
					<button>Submit</button>
				</SSF>

			</div>


		)
	}

}
