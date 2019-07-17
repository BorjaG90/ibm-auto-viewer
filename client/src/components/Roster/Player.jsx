import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Player extends PureComponent {
  render(){
    
    const { player, key } = this.props;

    return <tr key={key}>
      <td>{player.id_player}</td>
      <td>{player.country}</td>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td>{player.age}</td>
      <td>{player.height}</td>
      <td>{player.weigth}</td>
      <td>{player.salary}</td>
      <td>{player.years}</td>
      <td>{player.clause}</td>
      <td>{player.canon}</td>
    </tr> 
  }
}

// Validation
/*Player.propTypes = {
  player: PropTypes.object.isRequired
}*/

export default Player