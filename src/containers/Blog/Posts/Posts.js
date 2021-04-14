import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import axios from '../../../axios';


class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
        .then(response => {
          const posts = response.data.slice(0, 4);
          const updated_posts = posts.map(post => {
            return {
              ...post,
              author: 'Roman'
            }
          })
          this.setState({posts: updated_posts})
        })
        .catch(err => console.log(err))
  }

  post_selected = id => {
    this.setState({ selected_post_id: id} );
  }

  render() {
    let posts;
    if (this.state.error) {
      posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    } else {
      posts = this.state.posts.map(post => {
        return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.post_selected(post.id)} />
      })
    }
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;
