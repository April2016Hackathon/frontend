import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';

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
			this.setState({post: response.post})
		})
	}

	dataHandler(comment){
      ajax({
        url: 'https://blooming-springs-29783.herokuapp.com/',
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
						<span>{post.username} </span>
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