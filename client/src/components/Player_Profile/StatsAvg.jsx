import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class StatsAvg extends PureComponent {
  /*state = { averages: {}, totals:{} }

  componentDidMount() {
    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/season_average`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({averages: data});
    })
    .catch(console.log(`ERROR: ${this.props.player_id}`))

    fetch(
      `http://localhost:4000/api/stats/player/${this.props.player_id}/season_total`
    ) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({totals: data});
    })
    .catch(console.log(`ERROR: ${this.props.player_id}`))
  }*/

  render(){
    const { averages } = this.props;
    console.log("avg")
    console.log(averages)
    return <React.Fragment>
      <h2>Medias</h2>

      <div className="div-player-scroll">
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
            {averages.map(average =>
              <tr key={average._id.game_type}>
                <td>{average._id.season}</td>
                <td>{average._id.game_type}</td>
                <td><b>{average.avgPoints.toFixed(2)}</b></td>
                <td>{average.avgT2c.toFixed(2)}</td>
                <td>{average.avgT2i.toFixed(2)}</td>
                <td>{average.avgT3c.toFixed(2)}</td>
                <td>{average.avgT3i.toFixed(2)}</td>
                <td>{average.avgTlc.toFixed(2)}</td>
                <td>{average.avgTli.toFixed(2)}</td>
                <td>{average.avgRebd.toFixed(2)}</td>
                <td>{average.avgRebo.toFixed(2)}</td>
                <td><b>{(average.avgRebd+average.avgRebo).toFixed(2)}</b></td>
                <td><b>{average.avgAss.toFixed(2)}</b></td>
                <td><b><i>{average.avgSte.toFixed(2)}</i></b></td>
                <td><b><i>{average.avgBlkf.toFixed(2)}</i></b></td>
                <td>{average.avgBlkc.toFixed(2)}</td>
                <td>{average.avgTurn.toFixed(2)}</td>
                <td>{average.avgFoulr.toFixed(2)}</td>
                <td>{average.avgFoulc.toFixed(2)}</td>
                <td>{average.avgMin.toFixed(0)}:{average.avgMin.toFixed(0)}</td>
                <td><b>{average.avgVal.toFixed(2)}</b></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  } 
}

// Validation
StatsAvg.propTypes = { averages: PropTypes.array.isRequired }

export default StatsAvg