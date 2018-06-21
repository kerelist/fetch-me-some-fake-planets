import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {

    //only allow alpha a-z values, strip others from input
    const aZRegex = new RegExp(/[a-zA-Z]+/g);
    const simpleSanitizeInput = (val) => val.match(aZRegex).join(' ');
    
    return (
      <form className="search" role="search" onSubmit={evt => this.props.onSearchSubmit(evt, simpleSanitizeInput(evt.target.search.value))}>
        <label htmlFor="search-input" className="sr-only">Search:</label>
        <input type="text" id="search-input" name="search" placeholder="Search" className="search-input" aria-controls="Planets" />
      </form>
    );
  }
}

export default Search;
