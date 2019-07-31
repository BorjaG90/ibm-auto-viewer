import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Attributes from './Attributes'

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
        key={"play_tr_" + player._id} 
        onClick={this.showAttributes.bind(this)}>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td>{player.age}</td>
        <td>{player.heigth / 100} m.</td>
        <td>{player.weight} Kg.</td>
        <td>{nf.format(player.salary)} </td>
        <td>{player.years}</td>
        <td>{nf.format(player.clause)}</td>
        <td>{player.canon / 100} %</td>
        <td>{player.country}</td>
        <td>
          <Link to={`/players/${player._id}`}>
            <button className="btn waves-effect waves-ligh purple lighten-2">
              Perfil
            </button>
          </Link>
        </td>
      </tr>
      <Attributes 
        player={player} 
        show={this.state.isShown} 
        key={"attribute_" + player._id} />
    </React.Fragment>
  }
}

// Validation
Player.propTypes = { player: PropTypes.object.isRequired }

export default Player