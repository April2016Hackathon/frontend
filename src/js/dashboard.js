import React, {Component} from 'react';
import {Link} from 'react-router';
import cookie from 'js-cookie';

export default class Dashboard extends Component {

	render() {
		return (

			<div className="dashboard">
			<header>
				HEADER
				<span></span>
				<img
					src='../images/mild_wild.png'
					alt='Mild or Wild Logo'

				/>
			</header>

			<aside>FEED</aside>

			<div className="main">
			{this.props.children}
			</div>
			<button onClick={cookie.remove('currentUser')}>Log Out</button>
			<footer>FOOTER</footer>


			</div>
		)


	}
}
