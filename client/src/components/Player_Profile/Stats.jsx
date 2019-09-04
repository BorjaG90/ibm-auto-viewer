import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import StatsAvg from './StatsAvg'
import StatsTotal from './StatsTotals'

import './style.css';

class Stats extends PureComponent {
  state = { averages: {}, totals:{}, avg_career:{}, tot_career:{} }

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

    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/average`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({avg_career: data});
    })
    .catch(console.log(`ERROR Stats AvgC: ${this.props.player_id}`))

    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/total`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({tot_career: data});
    })
    .catch(console.log(`ERROR Stats TotC: ${this.props.player_id}`))
  }

  render(){
    const { averages, totals, avg_career, tot_career } = this.state;
    
    // Averages
    let isAverages;
    if(averages !== undefined && averages.length > 0 &&
      avg_career !== undefined && avg_career.length){
      console.log(averages)
      isAverages = <StatsAvg averages={averages} avg_career={avg_career} />
    }else{ isAverages = <br/> }
    
    // Totals
    let isTotals;
    if(totals !== undefined && totals.length > 0&&
      tot_career !== undefined && tot_career.length){
      console.log(totals)
      isTotals = <StatsTotal totals={totals} tot_career={tot_career} />
    }else{ isTotals = <br/> }

    return <div className="col s12 stats">
      <h3>Estadísticas</h3>
      {isAverages}
      {isTotals}
    </div>
  }
}
  
// Validation
Stats.propTypes = { player_id: PropTypes.string.isRequired }

export default Stats