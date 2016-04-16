import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';

export default class Submission extends Component {

	dataHandler(newUser){
      ajax({
        url: 'http://',
        type: 'POST',
        cached: false,
        dataType: 'json',
        processData: false,
        contentType: false
      }).then(hashHistory.push('/login'))
    }

    render () {

    	<div className="submission">
    		<h1>My Moods</h1>
    		<SSF dataHandler={::this.dataHandler}>
    			<button>Mild</button>
    			<button>Wild</button>
    			<imput type="text" name="status" placeholder="status"/>
    		</SSF>
    	</div>
    }

}
