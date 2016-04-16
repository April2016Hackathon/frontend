import React, {Component} from 'react';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';

export default class Submission extends Component {
    // constructor () {
    //     super ();
    //     this.state = { status: null} 
    // }

	dataHandler(moodstatus){
        console.log(moodstatus);

      // ajax({
      //   url: 'http://',
      //   type: 'POST',
      //   cached: false,
      //   dataType: 'json',
      //   processData: false,
      //   contentType: false
      // }).then(hashHistory.push('/'))
    }

    render () {
        return (

    	<div className="submission">
    		<h1>My Moods</h1>

            <SSF onData={::this.dataHandler}> 
              <label>MILD 			
                <input type="radio" name="status" value={true} />
              </label>    
              <label>WILD
                <input type="radio" name="status" value={false} /> 
              </label> 
              <label>
                <input type="text" name="description" placeholder="description" />
              </label>          
                <button>Submit</button>
    		</SSF>
    	</div>
   ) }

}
                // <button  type="button" onClick={() => this.state.status=false}>Mild</button>
                // <button type="button" onClick={() =>this.state.status=true}>Wild</button>