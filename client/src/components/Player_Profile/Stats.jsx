import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Stats extends PureComponent {

  state = { team_info: {}, players: [] , isLoading: true}

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/${this.props.team_id}`) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(this.props.type)
      this.setState({team_info: data, players: data.seniors, isLoading: false});
      this.forceUpdate();
    })
    .catch(console.log(`ERROR: ${this.props.team_id}`))
  }
  render(){
    //const { stats } = this.props;

    return <div className="col s12 stats">
      <h1>!!!- Estadísticas -</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Temp.</th>
            <th>Comp.</th>
            <th>Pts</th>
            <th>T2C</th>
            <th>T2I</th>
            <th>T3C</th>
            <th>T3I</th>
            <th>TLC</th>
            <th>TLI</th>
            <th>RebD</th>
            <th>RebO</th>
            <th>RebT</th>
            <th>Asi</th>
            <th>Rob</th>
            <th>TapF</th>
            <th>TapC</th>
            <th>Pér</th>
            <th>FalC</th>
            <th>FalR</th>
            <th>Min</th>
            <th>Val</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
        </table>
    </div>
  }
}
  
// Validation
Stats.propTypes = { stats: PropTypes.array.isRequired }

export default Stats