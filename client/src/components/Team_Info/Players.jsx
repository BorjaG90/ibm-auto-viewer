import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Player from './Player'
import './style.css';


class Players extends PureComponent {
  render(){
    return <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>País</th>
          <th>Nombre</th>
          <th>Pos.</th>
          <th>Edad</th>
          <th>Total</th>
          <th>Mental</th>
          <th>Cláusula</th>
          <th>Ficha</th>
          <th>Años C.</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table-striped">
      {this.props.players.map(player => 
        <Player player={player} key={player._id} />
      )}
      </tbody>
    </table>
  }
}

// Validation
Players.propTypes = { players: PropTypes.array.isRequired }

export default Players