import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.css';

class Attribute extends PureComponent {
  state = {
    isShown: false
  }

  showAttributes(e){
    this.setState({isShown: !this.state.isShown});
  }

  render(){
    const { player } = this.props;

    return <React.Fragment>
      <tr id={"play_" + player._id}>
        <td>
          <Link to={`/players/${player._id}`}>
            <button className="btn btn-secondary btn-sm btn-block">
            {player.name}
            </button>
          </Link>
        </td>
        <td>{player.position}</td>
        <td>{player.age}</td>
        <td><b>{player.total / 100}</b></td>
        <td>{player.offense / 100}</td>
        <td>{player.defense / 100}</td>
        <td>{player.physic / 100}</td>
        <td><b>{player.mental / 100}</b></td>
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
      </tr>
    </React.Fragment>
  }
}

// Validation
Attribute.propTypes = { player: PropTypes.object.isRequired }

export default Attribute