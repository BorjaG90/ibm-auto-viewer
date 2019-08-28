import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.css';

class Player extends PureComponent {
  state = {
    isShown: false
  }

  showAttributes(e){
    this.setState({isShown: !this.state.isShown});
  }

  render(){
    const { player } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    return <React.Fragment>
      <tr id={"play_" + player._id} 
        onClick={this.showAttributes.bind(this)}>
        <td>{player.country}</td>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td><i>{player.age}</i></td>
        <td><b>{player.total/ 100}</b></td>
        <td><b><i>{player.mental/ 100}</i></b></td>
        <td>{nf.format(player.clause)}</td>
        <td>{nf.format(player.salary)}</td>
        <td>{player.years}</td>
        <td>
          <Link to={`/players/${player._id}`}>
            <button className="btn btn-secondary btn-sm btn-block">
              Perfil
            </button>
          </Link>
        </td>
      </tr>
    </React.Fragment>
  }
}

// Validation
Player.propTypes = { player: PropTypes.object.isRequired }

export default Player