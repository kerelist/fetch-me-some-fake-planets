import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Pagination from './components/Pagination';
import ResponsiveCellHeaders from './vendor/ResponsiveCellHeaders';
import fetchData from './fetchData';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      search: '',
      currentPage: 1,
      error: {
        status: false,
        message: ''
      }
    };
  };

  componentDidMount() {
    //setup responsive tables
    ResponsiveCellHeaders("Planets");
    //initial data set
    fetchData(config.swapiUrl, this.giveStatePageData);
  };

  giveStatePageData = (data) => {
    const state = this.state;
    this.setState({
      ...state,
      ...data,
      loaded: true,
    });
  };

  onSearchSubmit = (event, search) => {
    //prevent form submit
    event.preventDefault();
    const state = this.state;

    //set loading screen and give state reset search params
    this.setState({
      ...state,
      search: search,
      currentPage: 1,
      loaded: false
    });

    //fetch data based on search param
    fetchData(`${config.swapiUrl}?search=${search}`, this.giveStatePageData)
  };

  paginationClickHandler = (type, pages, num = 1) => {
    //add defaults in case switch fails
    let page = this.state.currentPage;
    let url = config.swapiUrl;
    const state = this.state;

    //build URL to take search param into account if exists
    const buildUrl = (num) => {
      if (this.state.search.length > 0) {
        return `${config.swapiUrl}?page=${num}&search=${this.state.search}`;
      } else {
        return `${config.swapiUrl}?page=${num}`;
      }
    }

    //show load screen
    this.setState({
      ...state,
      loaded: false
    });

    //pick handler for click based on type
    switch (type) {
      case 'prev':
        if (this.state.previous === null) {
          break;
        }
        url = this.state.previous;
        page = this.state.currentPage -= 1;
        break;
      case 'next':
        if (this.state.next === null) {
          break;
        }
        url = this.state.next;
        page = this.state.currentPage += 1;
        break;
      case 'num':
        url = buildUrl(num);
        page = num;
        break;
      case 'first':
        url = buildUrl(1);
        page = 1;
        break;
      case 'last': 
        url = buildUrl(pages);
        page = pages;
        break;
      default: 
        console.log("no cases matched");
    }

    //fetch data based on switch parameters
    fetchData(url, this.giveStatePageData).then(function() {
      this.setState({
        currentPage: page
      });
      //bind to be able to use {this}
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Fake Planets and Stuff</h1>
          <p>Insert Star Wars reference here</p>
          <p className="small strike">I've never seen Star Wars, please don't hold it against me</p>
        </header>
        <Search 
          onSearchSubmit={this.onSearchSubmit} 
        />
        <h2 className="sr-only">Planets of Star Wars</h2>
        <Table 
          loaded={this.state.loaded} 
          error={this.state.error} 
          planets={this.state.results}
        />
        {
          //only show pagination if data loaded and no erros
          this.state.loaded &&
          !this.state.error.status &&
            <Pagination 
              pages={Math.ceil(this.state.count / 10)}
              next={this.state.next}
              previous={this.state.previous}
              current={this.state.currentPage}
              paginationClickHandler={this.paginationClickHandler}
            />
        }
        <footer>
          <p>Search icon used under Creative Commons, made by Cris Wong at <a href="https://thenounproject.com/search/?q=search&i=1783934" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
          <p>Saturn favicon made by Aha-Soft, retrievable at <a href="http://www.iconarchive.com/show/space-icons-by-aha-soft/Saturn-icon.html" target="_blank" rel="noopener noreferrer">Icon Archive</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
