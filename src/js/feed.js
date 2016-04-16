import React, { Component } from 'react';
import { ajax } from 'jquery';

export default class MyComponent extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    let this.pollingInt = setInterval(
      ajax('http://').then(newPosts => {
        this.setState({
          posts: newPosts
        })
      })
    )
  }

  componentWillUnmount(){
    clearInterval(this.pollingInt);
  }

  makePost(post){
    <Link><div className='post'>{post.status}</div></Link>
  }

  render() {
    let { posts } = this.state;
    return (
      <div>
          {posts.map(::this.makePost)}
      </div>);
  }
}
