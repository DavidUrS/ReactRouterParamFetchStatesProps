import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';
import Nav from './nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/contact'} component={Contact}/>
            <Route path={'/home'} component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
