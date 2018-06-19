import React, { Component } from 'react';
import './Search.css';
import config from '../config';

class Search extends Component {
  render() {

    return (
      <form className="search" role="search" onSubmit={evt => this.props.onSearchSubmit(evt, `${config.swapiUrl}?search=${evt.target.search.value}`)}>
        <label htmlFor="search-input" className="sr-only">Search:</label>
        <input type="text" id="search-input" name="search" placeholder="Search" className="search-input" />
      </form>
    );
  }
}

export default Search;
