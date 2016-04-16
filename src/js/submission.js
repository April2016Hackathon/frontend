import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';
import cookie from 'js-cookie';

export default class Submission extends Component {
    // constructor () {
    //     super ();
    //     this.state = { status: null}
    // }

	dataHandler(subData){
				let currentUser = cookie.getJSON('currentUser')
				ajax({
					url: 'https://blooming-springs-29783.herokuapp.com/posts/create',
					type: 'POST',
					data: subData,
					dataType: 'json',
					headers: {
							'X-Auth-Token': currentUser.auth_token
					}
				}).then((resp =>{
					console.log(resp)
					hashHistory.push(`/${resp.post.user_id}/${resp.post.id}/mood`)
				}))
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
							{/*<Link to={`/${currentUser.username}/mood`}>My Mood</Link>*/}


              <button>Submit</button>
    		</SSF>
    	</div>
   ) }

}
                // <button  type="button" onClick={() => this.state.status=false}>Mild</button>
                // <button type="button" onClick={() =>this.state.status=true}>Wild</button>
