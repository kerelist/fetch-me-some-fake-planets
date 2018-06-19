import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Pagination from './components/Pagination';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  };

  //from http://adrianroselli.com/2017/11/a-responsive-accessible-table.html
  ResponsiveCellHeaders(elmID) {
    try {
      var THarray = [];
      var table = document.getElementById(elmID);
      var ths = table.getElementsByTagName("th");
      for (var i = 0; i < ths.length; i++) {
        var headingText = ths[i].innerHTML;
        THarray.push(headingText);
      }
      var styleElm = document.createElement("style"),
        styleSheet;
      document.head.appendChild(styleElm);
      styleSheet = styleElm.sheet;
      for (var i = 0; i < THarray.length; i++) {
        styleSheet.insertRule(
          "#" +
            elmID +
            " td:nth-child(" +
            (i + 1) +
            ')::before {content:"' +
            THarray[i] +
            ': ";}',
          styleSheet.cssRules.length
        );
      }
    } catch (e) {
      console.log("ResponsiveCellHeaders(): " + e);
    }
  }

  componentDidMount() {
    this.ResponsiveCellHeaders("Planets");
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Fake Planets and Stuff</h1>
          <p>Insert Star Wars reference here</p>
          <p className="small strike">I've never seen Star Wars, please don't hold it against me</p>
        </header>
        <Search />
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
