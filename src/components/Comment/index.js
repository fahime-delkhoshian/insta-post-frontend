import React from 'react';
import Comment from './../Comment/Comment';
import axios from 'axios';

export default class Comments extends React.Component {
    
    constructor(props) {
        super(props);
        const { params } = this.props.match;
        console.log(params);

        this.state = {
            comments : [],
            postId : params.id,
        }
    }
    componentDidMount() {
        //api
       
        axios.get(`http://localhost:8000/api/v1/comment/${this.state.postId}`)
            .then(response => {
                console.log(response);
                this.setState({
                    comments : response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const {comments} = this.state;
        return (
            <ul className="list-group">
                {comments.map((comment, index) => <Comment object={comment} key={index}/>)}
            </ul>
        )
    }
}