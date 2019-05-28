import React from 'react';

export default class Comment extends React.Component {
    render() {

        const {object} = this.props;
        return (
            <li className="list-group-item"> 
                <div className="card-body">
                        <h6 className="card-title">
                            <small className="text-muted">
                                {object.username} :
                            </small>
                        </h6>
                        <h4>{object.content}</h4>
                    </div>
            </li>
        )
    }
}