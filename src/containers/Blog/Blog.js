import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: [],
      selected_post_id: null,
      error: false
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
          .catch(err => {
            this.setState({error: true})
          })
    }

    post_selected = id => {
      this.setState({ selected_post_id: id} );
    }

    render () {
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
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost
                      id={this.state.selected_post_id}
                      posts={this.state.posts}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
