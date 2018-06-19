import React, { Component } from 'react';
import './TableCells.css';

class TableCells extends Component {
  render() {
    return (
      <tr className="table-row">
        <td>Name</td>
        <td>Populations</td>
        <td>Diameter</td>
        <td>Rotations</td>
        <td>Orbital Period</td>
        <td>Terrain</td>
        <td>Films</td>
      </tr>
    );
  }
}

export default TableCells;