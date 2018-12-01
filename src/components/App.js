import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';
import Nav from './nav/Nav';
import Post from './home/Post';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      posts: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      return response.json()
    })
    .then(posts=>{
      this.setState({
        posts
      })
    })
  }
  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route exact path={'/'} component={(props)=>
                <Home {...this.props} posts={this.state.posts}/>
              }/>
            <Route path={'/about'} component={About}/>
            <Route path={'/contact'} component={Contact}/>
            <Route path={'/:post_id'} component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
