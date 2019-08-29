import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Finance from './Finance'

import './style.css';


class Finances extends PureComponent {
  render(){
    return <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
            <th colSpan="3">Info</th>
            <th colSpan="2">Media</th>
            <th colSpan="6">Financiero</th>
          </tr>
          <tr>
            <th>Nombre</th><th>Pos.</th><th>Edad</th><th>Total</th><th>Mental</th>
            <th>Clausula</th><th>Años C.</th><th>Ficha</th><th>Cánon</th>
            <th>Anual</th><th>Comprometido</th>
            
          </tr>
      </thead>
      <tbody className="table-striped">
      {this.props.players.map(player => 
        <Finance player={player} key={player._id} />
      )}
      </tbody>
    </table>
  }
}

// Validation
Finances.propTypes = { players: PropTypes.array.isRequired }

export default Finances