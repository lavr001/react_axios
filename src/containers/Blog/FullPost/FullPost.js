import React, { Component } from 'react';
import axios from '../../../axios';
import './FullPost.css';

class FullPost extends Component {

  state = {
    loaded_post: null
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get('/posts/' + this.props.match.params.id)
        .then(response => {
          this.setState({loaded_post: response.data})
        })
    }
  }

  render () {
    let post;
    if (!this.state.loaded_post) {
      post = <p>Please select a Post!</p>;
    } else {
      post = (
          <div className="FullPost">
            <h1>{this.state.loaded_post.title}</h1>
            <p>{this.state.loaded_post.body}</p>
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
