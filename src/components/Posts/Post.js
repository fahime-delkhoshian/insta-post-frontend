import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    render() {

        const {object} = this.props;
        return (
            <li className="list-group-item">
                <div className="card">
                    <img src={object.image_path} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{object.sender_name}</h5>
                        <p className="card-text">{object.content}</p>
                        <Link className="card-text" to={`comments/${object.post_id}`}>
                            <small className="text-muted">
                                {object.comment_number} COMMENTS (CLICK TO SHOW)
                            </small>
                        </Link>
                    </div>
                </div>
            </li>
        )
    }
}