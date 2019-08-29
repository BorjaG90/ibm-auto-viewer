import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.css';

class Finance extends PureComponent {
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
      <tr id={"play_" + player._id}>
        <td><b>{player.name}</b></td>
        <td>{player.position}</td>
        <td>{player.age}</td>
        <td><b>{player.total / 100}</b></td>
        <td><b>{player.mental / 100}</b></td>
        <td>{nf.format(player.clause)}</td>
        <td>{player.years}</td>
        <td>{nf.format(player.salary)}</td>
        <td>{player.canon / 100}%</td>
        <td>{nf.format(player.salary * 13)}</td>
        <td>{nf.format(player.salary * 13 * player.years)}</td>
      </tr>
    </React.Fragment>
  }
}

// Validation
Finance.propTypes = { player: PropTypes.object.isRequired }

export default Finance