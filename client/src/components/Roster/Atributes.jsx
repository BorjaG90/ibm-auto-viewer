import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Attribute from './Attribute'

import './style.css';
import AvgAttributes from './AvgAttributes';


class Attributes extends PureComponent {
  render(){
    return <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
            <th colSpan="3">Info</th>
            <th colSpan="5">Media</th>
            <th colSpan="5">Ataque</th>
            <th colSpan="4">Defensa</th>
            <th colSpan="3">Físico</th>
            <th colSpan="5">Nivel</th>
          </tr>
          <tr>
            <th>Nombre</th><th>Pos.</th><th>Edad</th><th>Total</th>
            <th>Ataque</th><th>Defensa</th><th>Físico</th><th>Mental</th>
            <th>T2</th><th>T3</th><th>TL</th><th>Mate</th><th>Pase</th>
            <th>Rebote</th><th>Robo</th><th>Tapón</th><th>Marcaje</th>
            <th>Velocidad</th><th>Resistencia</th><th>Lucha</th>
            <th>Liderazgo</th><th>Lealtad</th><th>Ambición</th><th>Nivel</th><th>Exp.</th>
            
          </tr>
      </thead>
      <tbody className="table-striped">
      {this.props.players.map(player => 
        <Attribute player={player} key={player._id} />
      )}
        <AvgAttributes players={this.props.players} />
      </tbody>
    </table>
  }
}

// Validation
Attributes.propTypes = { players: PropTypes.array.isRequired }

export default Attributes