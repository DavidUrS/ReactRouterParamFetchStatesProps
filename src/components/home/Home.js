import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Home.css';

const Home = ({posts})=>{
    const listPosts = posts.map(post=>{
        return(
            <div key={post.id} className="row">
                <div className="col s12 m12 center-align">
                <div className="card">
                    <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                    </div>
                    <div className="card-action">
                    <NavLink to={`/${post.id}`}>Se more...</NavLink>
                    </div>
                </div>
                </div>
            </div>
        )
    })
    return(
        <div className={'container'}>
            <ul className="collection center-align">
                {listPosts}
            </ul>
        </div>
    )
}

export default Home;