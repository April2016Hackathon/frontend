import React, {PropTypes, Component } from 'react';
import { ajax } from 'jquery';

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
    return (

      <li>{response.user} {response.text}</li>
    )
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
      </div>
    );
  }
}
