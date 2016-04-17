import React, { Component } from 'react';
import { ajax } from 'jquery';
import { Link } from 'react-router';

export default class PostFeed extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      posts: [],
      loading: true
    }
  }
getLatestPosts(){
  ajax('https://blooming-springs-29783.herokuapp.com/posts/index')
    .then(newPosts => {
      this.setState({
        posts: newPosts,
        loading: false
      })
    })
}
  componentWillMount(){
    this.getLatestPosts()
    this.pollingInt = setInterval( () => {
      ajax('https://blooming-springs-29783.herokuapp.com/posts/index')
        .then(newPosts => {
          this.setState({
            posts: newPosts,
            loading: false
          })
        })
    }, 3000)
  }

  componentWillUnmount(){
    clearInterval(this.pollingInt);
  }

  makePost(post){
    return (
      <Link to={`/posts/${post.id}`}><div className='post'>{post.user} {post.title}</div></Link>

    )
  }

  render() {
    let { posts } = this.state;
    return (
      <div>
          {posts.map(::this.makePost)}
      </div>);
  }
  renderLoading(){
    return (
      <h1>Loading...</h1>
    )
  }
  loading(){
    let { loading } = this.state
    loading
    ? this.render()
    : this.renderLoading()

  }
}
