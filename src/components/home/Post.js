import React from 'react';

class Post extends React.Component{
    state={
        post:[]
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response=>{return response.json()})
        .then(post=>{
            this.setState({
                post
            })
        })
        
    }
    render(){
        const post = this.state.post ? (
            <div className={'post container'}>
                <h4 className={'center'}>{this.state.post.title}</h4>
                <p className={'center'}>{this.state.post.body}</p>
            </div>
        ):(
            <div className={'center'}><p>Loading post....</p></div>
        )
    return(
        <div className={'container'}>{post}</div>
    )

    }
}

export default Post;