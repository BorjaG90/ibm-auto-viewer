import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class StatsAvg extends PureComponent {
  render(){
    const { averages } = this.props;

    return <React.Fragment>
      <h2>Medias</h2>

      <div className="div-player-scroll">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Temp.</th>
              <th>Comp.</th>
              <th>Part.</th>
              <th>Pts</th>
              <th>T2</th>
              <th>T2%</th>
              <th>T3</th>
              <th>T3%</th>
              <th>TL</th>
              <th>TL%</th>
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
                <td>{average.countGames}</td>
                <td><b>{average.avgPoints.toFixed(2)}</b></td>
                <td>{average.avgT2c.toFixed(2)}/{average.avgT2i.toFixed(2)}</td>
                <td>{
                  (average.avgT2i !== 0 ?(average.avgT2c/average.avgT2i)*100: 0)
                  .toFixed(2) }%</td>
                <td>{average.avgT3c.toFixed(2)}/{average.avgT3i.toFixed(2)}</td>
                <td>{
                  (average.avgT3i !== 0 ?(average.avgT3c/average.avgT3i)*100: 0)
                  .toFixed(2) }%</td>
                <td>{average.avgTlc.toFixed(2)}/{average.avgTli.toFixed(2)}</td>
                <td>{
                  (average.avgTli !== 0 ?(average.avgTlc/average.avgTli)*100: 0)
                  .toFixed(2) }%</td>
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
                <td>{average.avgMin.toFixed(0)}:{average.avgSeg.toFixed(0)}</td>
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