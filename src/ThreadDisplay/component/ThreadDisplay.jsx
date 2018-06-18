import React, { Component } from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor'
import DefaultChirp from '../../DefaultChirp/component/DefaultChirp';

class ThreadDisplay extends Component {
    constructor(props) {
        super(props);


        this.state = {
            posts: [],

        }
    }
    addChirp = (newPostBody) => {
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
    }
    render() {
        return (
            <div>
            <DefaultChirp />
                {
                    this.state.posts.map((postBody, index) => {
                        return (
                            <Post key={index} postBody={postBody} />
                        )
                    })}

                <PostEditor addChirp={this.addChirp} />
            </div>
        )
    }
}

export default ThreadDisplay;