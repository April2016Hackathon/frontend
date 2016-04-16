import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Dashboard extends Component {

	render() {
		<div className="dashboard">
			<header>HEADER</header>

			<aside>FEED</aside>

			<div className="main">
				{this.props.children}
			</div>

			<footer>FOOTER</footer>


		</div>


	}
}