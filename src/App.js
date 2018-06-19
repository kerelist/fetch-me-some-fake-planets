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
      planets: {}
    };
  };

  onSearchSubmit = (event, url) => {
    event.preventDefault();
    console.log(url);
    fetchData(url, this.giveStatePageData)
  };

  componentDidMount() {
    ResponsiveCellHeaders("Planets");
    fetchData(config.swapiUrl, this.giveStatePageData);
  };

  giveStatePageData = (data) => {
    this.setState({
      planets: data
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Fake Planets and Stuff</h1>
          <p>Insert Star Wars reference here</p>
          <p className="small strike">I've never seen Star Wars, please don't hold it against me</p>
        </header>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <h2 className="sr-only">Planets of Star Wars</h2>
        <Table />
        <Pagination />
        <footer>
          <p>Search icon used under Creative Commons, made by Cris Wong at <a href="https://thenounproject.com/search/?q=search&i=1783934" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
