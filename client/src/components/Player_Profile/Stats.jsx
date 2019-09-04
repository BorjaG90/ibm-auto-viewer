import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import StatsAvg from './StatsAvg'
import StatsTotal from './StatsTotals'

import './style.css';

class Stats extends PureComponent {
  state = { averages: {}, totals:{} }

  componentDidMount() {
    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/season_average`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({averages: data});
    })
    .catch(console.log(`ERROR Stats Avg: ${this.props.player_id}`))

    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/season_total`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({totals: data});
    })
    .catch(console.log(`ERROR Stats Tot: ${this.props.player_id}`))
  }

  render(){
    const { averages, totals } = this.state;
    // Averages
    let isAverages;
    if(averages !== undefined && averages.length > 0){
      console.log(averages)
      isAverages = <StatsAvg averages={averages} />
    }else{ isAverages = <br/> }

    return <div className="col s12 stats">
      <h1>!!!- Estadísticas -</h1>
      {isAverages}
      <p>Stats</p>
    </div>
  }
}
  
// Validation
Stats.propTypes = { player_id: PropTypes.string.isRequired }

export default Stats