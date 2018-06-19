import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <button className="first">First</button>
        <button className="previous arrow"><span className="sr-only">Previous</span></button>
        <button className="number active" disabled>1</button>
        <button className="number">2</button>
        <span>...</span>
        <button className="next arrow"><span className="sr-only">Next</span></button>
        <button className="last">Last</button>
      </div>
    );
  }
}

export default Pagination;