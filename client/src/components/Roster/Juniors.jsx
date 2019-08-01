import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Player from './Player'

import './style.css';

class Juniors extends PureComponent {

  state = { junior_roster: [] }

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/juniors`, 
      {headers:{'team_id': this.props.team_id}}
    ) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({junior_roster: data});
      })
      .catch(console.log(`ERROR: ${this.props.team_id}`))
  }

  render(){
    return <React.Fragment>
      <h3 className="players-title">Plantilla Junior</h3>
      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Pos.</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Ficha</th>
            <th>Años C.</th>
            <th>Cláusula</th>
            <th>Canon</th>
            <th>País</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.state.junior_roster.map(player => 
          <Player player={player} key={"player_" + player._id} />
        )}
        </tbody>
      </table>
    </React.Fragment>
  }
}

// Validation
Juniors.propTypes = { team_id: PropTypes.string.isRequired }

export default Juniors