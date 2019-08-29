import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Attributes extends PureComponent {
  render(){
    const { player } = this.props;
    return <div className="col-md-12">
      <h3>Atributos</h3>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th colSpan="5">Ataque</th>
            <th colSpan="4">Defensa</th>
            <th colSpan="3">Físico</th>
            <th colSpan="5">Nivel</th>
            <th colSpan="5">Media</th>
          </tr>
          <tr>
            <th>T2</th><th>T3</th><th>TL</th><th>Mate</th><th>Pase</th>
            <th>Rebote</th><th>Robo</th><th>Tapón</th><th>Marcaje</th>
            <th>Velocidad</th><th>Resistencia</th><th>Lucha</th>
            <th>Liderazgo</th><th>Lealtad</th><th>Ambición</th><th>Nivel</th><th>Exp.</th>
            <th>Ataque</th><th>Defensa</th><th>Físico</th><th>Mental</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{player.two}</td>
            <td>{player.three}</td>
            <td>{player.free}</td>
            <td>{player.dunk}</td>
            <td>{player.assist}</td>
            <td>{player.rebound}</td>
            <td>{player.recover}</td>
            <td>{player.block}</td>
            <td>{player.marking}</td>
            <td>{player.speed}</td>
            <td>{player.endurance}</td>
            <td>{player.fight}</td>
            <td>{player.leadership}</td>
            <td>{player.loyalty ? player.loyalty  : ""}</td>
            <td>{player.ambition}</td>
            <td>{player.level}</td>
            <td>{player.exp}</td>
            <td>{player.offense / 100}</td>
            <td>{player.defense / 100}</td>
            <td>{player.physic / 100}</td>
            <td>{player.mental / 100}</td>
            <td>{player.total / 100}</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}
  
// Validation
Attributes.propTypes = { player: PropTypes.object.isRequired }

export default Attributes