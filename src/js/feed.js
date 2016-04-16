import React, { Component } from 'react';
import { ajax } from 'jquery';
import { Link } from 'react-router';

export default class PostFeed extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    this.pollingInt = setInterval( () => {
      ajax('https://blooming-springs-29783.herokuapp.com/posts/index')
        .then(newPosts => {
          console.log("B recieving req")
          this.setState({
            posts: newPosts
          })
        })
    }, 3000)
  }

  componentWillUnmount(){
    clearInterval(this.pollingInt);
  }

  makePost(post){
    return (
      <Link to="/fixme"><div className='post'>{post.user} {post.title}</div></Link>

    )
  }

  render() {
    let { posts } = this.state;
    return (
      <div>
          {posts.map(::this.makePost)}
      </div>);
  }
}
