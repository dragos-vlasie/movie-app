import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Search from './components/SearchMovie/Search';
import VoteMovieCard from './components/VoteMovie/VoteMovieCard';
import Home from './components/Dashboard/Home';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path='/' component={Home} />
            <Route path='/Vote' component={VoteMovieCard} />
            <Route path='/search' component={Search} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
// https://api.themoviedb.org/3/movie/550?api_key=e99043e1b44f1a6d68049b97f2e11003