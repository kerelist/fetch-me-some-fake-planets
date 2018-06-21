import React, { Component } from 'react';
import abbreviate from 'number-abbreviate';
import './TableCells.css';

class TableCells extends Component {
  render() {
    
    const planet = this.props.planet;
    const abbrev = new abbreviate([' thousand', ' million', ' billion', ' trillion']);
    
    return (
      <tr className="table-row">
        <td>
          <a className="table-link" href={planet.url}>{planet.name}</a>
        </td>
        <td>
          {
            (isNaN(planet.population)) ? (
              planet.population
            ) : (
              abbrev.abbreviate(planet.population, 3)
            )
          }
        </td>
        <td>{planet.diameter}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.terrain}</td>
        <td>
          <div>
          {
            planet.films.map((film) => (
              <a className="table-link" href={film.url}>{film.title}</a>
            ))
          }
          </div>
        </td>
      </tr>
    );
  }
}

export default TableCells;