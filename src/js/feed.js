import React, { Component } from 'react';
import { ajax } from 'jquery';

export default class PostFeed extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    let this.pollingInt = setInterval(
      ajax('https://blooming-springs-29783.herokuapp.com/posts/index').then(newPosts => {
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
    <Link><div className='post'>{post.user} {post.title}</div></Link>
  }

  render() {
    let { posts } = this.state;
    return (
      <div>
          {posts.map(::this.makePost)}
      </div>);
  }
}
