import React, { Component } from 'react';
// import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

  render () {
    let post;
    if (!this.props.id) {
      post = <p>Please select a Post!</p>;
    } else {
      let selected_post = this.props.posts.filter(post => post.id === this.props.id);
      post = (
          <div className="FullPost">
            <h1>{selected_post[0].title}</h1>
            <p>{selected_post[0].body}</p>
            <div className="Edit">
              <button className="Delete">Delete</button>
            </div>
        </div>
      )
    }
    return post;
  }
}

export default FullPost;
