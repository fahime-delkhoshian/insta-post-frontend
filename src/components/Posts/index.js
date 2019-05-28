import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {
    render() {
        return (
            <div>
                <h2>Posts</h2>
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount() {
        //api
        axios.get('http://localhost:8000/api/v1/post',)
            .then(response => {
                console.log(response);
                this.setState({
                    posts : response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    render() {

        const {posts} = this.state;
        return (
            <ul className="list-group list-group-flush">
                {posts.map((post, index) => <Post object={post} key={index}/>)}
            </ul>
        )
    }
}

export default Posts;
