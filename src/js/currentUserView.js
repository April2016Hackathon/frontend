import React, { Component, PropTypes } from 'react';


export default class CurrentUserView extends Component {
	// static propTypes = {
	// 	user: PropTypes.shape ({
	// 		username: PropTypes.string.isRequired,
	// 		status: PropTypes.string.isRequired
	// 	}).isRequired
	// }

	render() {
		console.log(this.props.params)
		let { username } = this.props.params;
		return (
			<div className="myprofile">
				<div className="myprofile">
					<h1>{user.username}</h1>
					<div>{user.status}</div>

				</div>

			</div>
			)

	}

}
