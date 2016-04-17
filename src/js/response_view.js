import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import ResponseFeed from './response_feed';

export default class ResponseView extends Component {
	constructor (...args) {
		super (...args);
		this.state = {
			post: {}
		}
	}

	componentWillMount () {
		let { user_id } = this.props.params;
		ajax(`http://blooming-springs-29783.herokuapp.com/posts/${user_id}/newest`)
		.then(response => {
			this.setState({post: response.post})
		})
	}

	dataHandler(comment){
		let { post } = this.state;
      ajax({
        url: `https://blooming-springs-29783.herokuapp.com/posts/${post.id}/responses`,
        type: 'POST',
        data: comment,
        cached: false,
        dataType: 'json'
      })
    }



	render() {
		let { post} = this.state;
		return (
			<div className="add_a_comment">
				<h1> Elevate Others' Moods!</h1>
					<div>
						<span>{post.user_id} </span>
						<span>{post.text}</span>
						<span>{post.title}</span>
					</div>
					<ResponseFeed/>
				<SSF onData={::this.dataHandler}>
					<input type="text" name="responses" placeholder="Elevate my mood.."/>
					<button>Submit</button>
				</SSF>

			</div>


		)
	}

}