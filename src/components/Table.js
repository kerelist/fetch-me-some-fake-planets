import React, { Component } from 'react';
import uuid from 'uuid';
import './Table.css';
import TableCells from './TableCells';

class Table extends Component {
  render() {

    //labelling message for aria
    const getTableTitleText = () => this.props.loaded ? 'planet results have been loaded.' : 'planet results are loading.';

    return (
      <table id="Planets" className="table" aria-labelledby="TableTitle">
        <caption className="sr-only" id="TableTitle">{getTableTitleText()}</caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Populations</th>
            <th>Diameter</th>
            <th>Rotations</th>
            <th>Orbital Period</th>
            <th>Terrain</th>
            <th>Films</th>
          </tr>
          {
            !this.props.loaded &&
            !this.props.error.status &&
            <tr>
              <td className="single-cell">
                <div className="loadingContainer">
                  {/* animation courtesy of https://codepen.io/candrews/pen/KzJJmz ! (I did not make it but I like it) */}
                    <div className="loader">
                      <span className="dot dot_1"></span>
                      <span className="dot dot_2"></span>
                      <span className="dot dot_3"></span>
                      <span className="dot dot_4"></span>
                    </div>
                </div>
              </td>
            </tr>
          }
          {
            this.props.error.status &&
            <tr>
              <td className="single-cell">
                <p>{this.props.error.message}</p>
              </td>
            </tr>
          }
          {
            this.props.loaded &&
            !this.props.error.status &&
            this.props.planets &&
            this.props.planets.map((planet) => (
              <TableCells key={uuid.v4()} planet={planet} />
            ))
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
