import React from 'react';
import './ClientComment.css';

const ClientComment = ({comment}) => {
    return (

        <div className="col-md-4 ">
        <div className="commentBox">
        <div className="d-flex">
        <div>
            <img src={comment.img} alt=""/>
        </div>
        <div>
           <h2>{comment.name}</h2>
           <h4>{comment.title}</h4>
        </div>
        </div>
            <p>{comment.description}</p>
        </div>
        </div>
    );
};

export default ClientComment;