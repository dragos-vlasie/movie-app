import React, { Component } from 'react'
import axios from 'axios';

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    performSearch = (target) => {
        const apiKey = "e99043e1b44f1a6d68049b97f2e11003"
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${target}&page=1&include_adult=false`)
        .then(res => {
          this.setState({
            data: res.data.results
          });
        })
      }

    handleChange = (e) => {
        let searchTerm = e.target.value;

        this.setState({
        [e.target.id]: e.target.value
        })

        this.performSearch(searchTerm);
    }
    
  render() {
    return (
        <div className="container">
            <i className="material-icons">search</i>
            <input type="text" id='search' onChange={this.handleChange} />
        </div>
    )
  }
}

export default SearchBar
