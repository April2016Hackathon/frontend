import React, {PropTypes, Component } from 'react';
import { ajax } from 'jquery';
import cookie from 'js-cookie';
import SSF from 'react-simple-serial-form';

export default class ResponseFeed extends Component {

  constructor(...args){
    super(...args);
    this.state = {
      responses: []
    }
  }

  // componentWillMount(){
  //   console.log(this.props.params)
  //   let { post_id } = this.props.params;
  //     this.intervalID = setInterval(function () {
  //       ajax(`https://blooming-springs-29783.herokuapp.com/posts/${post_id}/responses`)
  //     .then(responses => {
  //       console.log(responses)
  //       this.setState( {responses: responses} )
  //     })
  //   }, 3000)
  // }

  clickHandler(){
    ajax(`https://blooming-springs-29783.herokuapp.com/posts/${post_id}/responses`)
  }
  componentWillMount(){
    let { post_id } = this.props.params;
    this.intervalID = setInterval( () => {
      ajax(`https://blooming-springs-29783.herokuapp.com/posts/${post_id}/responses`)
        .then(newResps => {
          this.setState({
            responses: newResps,
          })
        })
    }, 3000)
  }

  makeResponse(response){
    console.log(response)
    return (

      <li key={response.id} onClick={::this.clickHandler}>{response.user} {response.text}</li>
    )
  }

  dataHandler(comment){
    let currentUser = cookie.getJSON('currentUser')
    console.log(currentUser.auth_token)
    let {post_id} = this.props.params;
      ajax({
        url: `https://blooming-springs-29783.herokuapp.com/posts/${post_id}/responses`,
        type: 'POST',
        data: comment,
        cached: false,
        dataType: 'json',
        headers: {
          'X-Auth-Token': currentUser.auth_token
        }
      })
    }

  componentWillUnmount(){
    clearInterval(this.intervalID)
  }

  render() {
    let { responses } = this.state;
    console.log(responses)
    return (
      <div>
        <ul>
          {responses.map(::this.makeResponse)}
        </ul>
        <SSF onData={::this.dataHandler}>
          <input type="text" name="text" placeholder="Elevate my mood.."/>
          <button>Submit</button>
        </SSF>
      </div>
    );
  }
}
