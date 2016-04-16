import React, { Component } from 'react';
import { ajax } from 'jquery';

export default class ResponseFeed extends Component {

  constructor(...args){
    super(...args);
    this.state = {
      responses: []
    }
  }

  componentWillMount(){
    let { post_id } = this.props.params;
      this.intervalID = setInterval(function () {
      ajax(`http://blooming-springs-29783.herokuapp.com/posts/${post_id}/response`)
      .then(responses => {
        this.setState({ responses })
      })
    }, 3000)

  }

  makeResponse(response){
    <li>{response.user} {response.words}</li>
  }

  componentWillUnmount(){
    clearInterval(this.intervalID)
  }

  render() {
    let { responses } = this.state;
    return (
      <div>
        <ul>
          {responses.map(::this.makeResponse)}
        </ul>
      </div>
    );
  }
}
