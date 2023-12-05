import React from 'react'

function Card () {
    return ( 
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        );
}
  

export default Card 