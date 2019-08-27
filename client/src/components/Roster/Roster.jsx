import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Player from './Player'

import './style.css';

class Roster extends PureComponent {

  state = { senior_roster: [], players: [] }

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/`, 
      {headers:{'team_id': this.props.team_id}}
    ) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({senior_roster: data, players: data.seniors});
      })
      .catch(console.log(`ERROR: ${this.props.team_id}`))
  }

  render(){
    return <React.Fragment>
      <h3 className="players-title">Plantilla Senior</h3>
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
        {this.state.players.map(player => 
          <Player player={player} key={player._id} />
        )}
        </tbody>
      </table>
    </React.Fragment>
  }
}

// Validation
Roster.propTypes = { team_id: PropTypes.string.isRequired }

export default Roster