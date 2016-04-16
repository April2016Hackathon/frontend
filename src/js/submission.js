import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';

export default class Submission extends Component {
    // constructor () {
    //     super ();
    //     this.state = { status: null}
    // }

	dataHandler(subData){
        console.log(subData);
				let currentUser = cookie.getJSON('currentUser')
				ajax({
					url: 'https://blooming-springs-29783.herokuapp.com/posts/create',
					type: 'POST',
					data: subData,
					dataType: 'json'
				}).then(hashHistory.push(`/${currentUser.username}/mood`))
    }

    render () {
        return (

    	<div className="submission">
    		<h1>My Moods</h1>
            <SSF onData={::this.dataHandler}>
              <label>MILD
                <input type="radio" name="mood" value={true} />
              </label>
              <label>WILD
                <input type="radio" name="mood" value={false} />
              </label>
              <label>
                <input type="text" 	name="text"  placeholder="Tell us why..." />
              </label>
							<label>
								<input type="text" 	name="title" placeholder="Title your post..." />
							</label>
              <button>Submit</button>
    		</SSF>
    	</div>
   ) }

}
                // <button  type="button" onClick={() => this.state.status=false}>Mild</button>
                // <button type="button" onClick={() =>this.state.status=true}>Wild</button>
