import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

  render() {
    
    return (
      <div className="Pagination">
        {
          //show if there is a previous page
          this.props.previous !== null &&
          <button type="button" className="first" onClick={() => this.props.paginationClickHandler('first', this.props.pages)}>First</button>
        }
        {
          //show if there is a previous page
          this.props.previous !== null &&
          <button type="button" className="previous arrow" onClick={() => this.props.paginationClickHandler('prev', this.props.pages)}><span className="sr-only">Previous</span></button>
        }
        {
          //show if the page number is more than one and the total pages are more than one
          this.props.current > 1 && this.props.pages > 1 &&
            <span>...</span>
        }
        {
        //show if the page number is more than two and the total pages are more than two
        this.props.current > 2 && this.props.pages > 2 &&
          <button type="button" className="number" onClick={() => this.props.paginationClickHandler('num', this.props.pages, this.props.current - 1)}>{this.props.current - 1}</button>
        }
          {/* ACTIVE BUTTON
          always visible but disabled */}
            <button type="button" className="number active" disabled onClick={() => this.props.paginationClickHandler('num', this.props.pages, this.props.pages.current)}>{this.props.current}</button>
        {
          //show if the page number is less than the total pages
          this.props.pages > this.props.current &&
            <button type="button" className="number" onClick={() => this.props.paginationClickHandler('num', this.props.pages, this.props.current + 1)}>{this.props.current + 1}</button>
        }
        {
          //show if the page number is less than the total pages plus one extra
          this.props.pages > this.props.current + 1 &&
            <span>...</span>
        }
        {
          //show if there is a next page
          this.props.next !== null &&
            <button type="button" className="next arrow" onClick={() => this.props.paginationClickHandler('next', this.props.pages)}><span className="sr-only">Next</span></button>
        }
        {
          //show if there is a next page
          this.props.next !== null &&
            <button type="button" className="last" onClick={() => this.props.paginationClickHandler('last', this.props.pages)}>Last</button>
        }
      </div>
    );
  }
}

export default Pagination;