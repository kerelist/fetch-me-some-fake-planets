import React, { Component } from 'react';
import './TableCells.css';

class TableCells extends Component {
  render() {
    
    const planet = this.props.planet;
    
    return (
      <tr className="table-row">
        <td>{planet.name}</td>
        <td>{planet.population}</td>
        <td>{planet.diameter}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.terrain}</td>
        <td>
          {
            planet.films.map((film) => (
              <a className="film-link" href={film.url}>{film.title}</a>
            ))
          }
        </td>
      </tr>
    );
  }
}

export default TableCells;