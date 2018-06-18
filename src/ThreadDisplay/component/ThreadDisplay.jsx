import React, { Component } from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor'

class ThreadDisplay extends Component {
    constructor(props) {
        super(props);


        this.state = {
            posts: [
                {
                    text: 'This is a new chirp'
                },
                {
                    text: 'I like to chirp way more than you'
                },
                {
                    text: 'Im the chirpiest chirp youve ever seen'
                }
            ],

        }
    }
    addChirp = (newPostBody) => {

        this.setState({ posts: this.state.posts.concat(newPostBody) });
    }
    render() {
        return (
            <div>
                <PostEditor addChirp={this.addChirp} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.posts.map((post, index) => {
                                return (
                                    <Post key={index} postBody={post.text} />
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreadDisplay;