import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import MovieSearch from './components/SearchMovie/MovieSearch';
import VoteMovieCard from './components/VoteMovie/VoteMovieCard';
import Home from './components/Dashboard/Home';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path='/' component={Home} />
            <Route path='/Vote' component={VoteMovieCard} />
            <Route path='/search' component={MovieSearch} />
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
          <Footer />
        </div>
        
      </HashRouter>
    );

  }
}

export default App;
// https://api.themoviedb.org/3/movie/550?api_key=e99043e1b44f1a6d68049b97f2e11003