import React, { Component, PropTypes } from 'react';
import ResponseFeed from './response_feed';


export default class CurrentUserView extends Component {
	static propTypes = {
		user: PropTypes.shape ({
			username: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired
		}).isRequired
	}

	render() {
		let {user} = this.props;
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{user.username}</h1>
					<div>{user.status}</div>
					<ResponseFeed/>

				</div>

			</div>
			)

	}

}

