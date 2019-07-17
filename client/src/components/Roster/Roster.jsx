import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Player from './Roster'

import './style.css';

export default class Roster extends Component {

  state = {
    senior_roster: []
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/${this.props.id_team}`) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({senior_roster: data});
      })
      .catch(console.log("ERROR"))
  }

  render(){
    return this.state.senior_roster.map(player =>
      <Player
        player={player}
        key={player.id_player}
      />
    )
  }
}

// Validation
Roster.propTypes = {
  id_team: PropTypes.number.isRequired
}
