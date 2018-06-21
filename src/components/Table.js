import React, { Component } from 'react';
import './Table.css';
import TableCells from './TableCells';

class Table extends Component {
  render() {
    console.log(this.props.loaded);
    return (
      <table id="Planets" className="table">
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
            this.props.loaded &&
            this.props.planets &&
            this.props.planets.map((planet) => (
              <TableCells planet={planet} />
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
