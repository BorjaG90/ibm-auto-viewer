import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Attributes extends PureComponent {
  render(){
    const { player, key } = this.props;
    
    
    return <tr id={"attr_" + player._id} key={key + "_2"} style={{display: 'none'}}>
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
              <td>{player.mental / 100}</td>
              <td>{player.physic / 100}</td>
              <td>{player.offense / 100}</td>
              <td>{player.defense / 100}</td>
              <td>{player.total / 100}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr> 
  }
}

// Validation
Attributes.propTypes = {
  player: PropTypes.object.isRequired
}

export default Attributes