import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Player extends PureComponent {
  render(){
    const { player, key } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    return <tr key={key}>
      <td>{player.id_player}</td>
      <td>{player.country}</td>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td>{player.age}</td>
      <td>{player.heigth / 100} m.</td>
      <td>{player.weight} Kg.</td>
      <td>{nf.format(player.salary)} </td>
      <td>{player.years}</td>
      <td>{nf.format(player.clause)}</td>
      <td>{player.canon / 100} %</td>
    </tr> 
  }
}

// Validation
Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player