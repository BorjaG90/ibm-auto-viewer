import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import './style.css';

class Progression extends PureComponent {
  render(){
    const { progressions } = this.props;

    return <div className="col s12 progression">
      <h3>Progresión</h3>
      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th colSpan="5">Ataque</th>
            <th colSpan="4">Defensa</th>
            <th colSpan="3">Físico</th>
            <th colSpan="5">Nivel</th>
            <th colSpan="5">Media</th>
          </tr>
          <tr>
            <th>Fecha</th>
            <th>T2</th><th>T3</th><th>TL</th><th>Mate</th><th>Pase</th>
            <th>Rebote</th><th>Robo</th><th>Tapón</th><th>Marcaje</th>
            <th>Velocidad</th><th>Resistencia</th><th>Lucha</th>
            <th>Liderazgo</th><th>Lealtad</th><th>Ambición</th><th>Nivel</th><th>Exp.</th>
            <th>Ataque</th><th>Defensa</th><th>Físico</th><th>Mental</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {progressions.map(prog =>
          <tr key={prog._id}>
            <td>{moment.utc(
            prog._date
          ).format('DD-MM-YYYY')}</td>
            <td>{prog.two}</td>
            <td>{prog.three}</td>
            <td>{prog.free}</td>
            <td>{prog.dunk}</td>
            <td>{prog.assist}</td>
            <td>{prog.rebound}</td>
            <td>{prog.recover}</td>
            <td>{prog.block}</td>
            <td>{prog.marking}</td>
            <td>{prog.speed}</td>
            <td>{prog.endurance}</td>
            <td>{prog.fight}</td>
            <td>{prog.leadership}</td>
            <td>{prog.loyalty ? prog.loyalty  : ""}</td>
            <td>{prog.ambition}</td>
            <td>{prog.level}</td>
            <td>{prog.exp}</td>
            <td>{prog.offense / 100}</td>
            <td>{prog.defense / 100}</td>
            <td>{prog.physic / 100}</td>
            <td>{prog.mental / 100}</td>
            <td>{prog.total / 100}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  }
}

// Validation
Progression.propTypes = { progressions: PropTypes.array.isRequired }

export default Progression