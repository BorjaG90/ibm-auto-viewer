import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Attributes extends PureComponent {
  render(){
    const { player, show } = this.props;

    let showStyle
    showStyle = show ? {} : { display: 'none'}

    return <tr 
      id={"attr_" + player._id} 
      key={"attr_tr_" + player._id} 
      style={showStyle}>
      <td colSpan="11" >
        <table className="responsive-table centered striped">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Mental</th>
              <th>Físico</th>
              <th>Ataque</th>
              <th>Defensa</th>
              <th><b>Total</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player.level}</td>
              <td><b>{player.mental / 100}</b></td>
              <td>{player.physic / 100}</td>
              <td>{player.offense / 100}</td>
              <td>{player.defense / 100}</td>
              <td><b>{player.total / 100}</b></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr> 
  }
}

// Validation
Attributes.propTypes = { player: PropTypes.object.isRequired }

export default Attributes