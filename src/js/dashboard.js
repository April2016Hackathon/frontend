import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Dashboard extends Component {

	render() {
		return (

			<div className="dashboard">
			<header>
				HEADER
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'
				/>
			</header>

			<aside>FEED</aside>

			<div className="main">
			{this.props.children}
			</div>

			<footer>FOOTER</footer>


			</div>
		)


	}
}
