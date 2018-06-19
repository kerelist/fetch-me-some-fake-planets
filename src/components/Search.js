import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form className="search" role="search">
        <label htmlFor="search-input" className="sr-only">Search:</label>
        <input type="text" id="search-input" placeholder="Search" className="search-input"/>
      </form>
    );
  }
}

export default Search;
