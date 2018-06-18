import React from 'react';

const Post = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card post-body">
                    <div className="card-header">
                        <h6>New Chirp</h6>
                    </div>
                    <div className="card-body">
                        {props.postBody}
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Post;