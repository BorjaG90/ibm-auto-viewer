import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class StatsTotals extends PureComponent {
  render(){
    const { totals } = this.props;
    
    return <React.Fragment>
      <h2>Totales</h2>

      <div className="div-player-scroll">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Temp.</th>
              <th>Comp.</th>
              <th>Part.</th>
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
            </tr>
          </thead>
          <tbody>
            {totals.map(total =>
              <tr key={total._id.game_type}>
                <td>{total._id.season}</td>
                <td>{total._id.game_type}</td>
                <td>{total.countGames}</td>
                <td><b>{total.sumPoints}</b></td>
                <td>{total.sumT2c}</td>
                <td>{total.sumT2i}</td>
                <td>{total.sumT3c}</td>
                <td>{total.sumT3i}</td>
                <td>{total.sumTlc}</td>
                <td>{total.sumTli}</td>
                <td>{total.sumRebd}</td>
                <td>{total.sumRebo}</td>
                <td><b>{(total.sumRebd+total.sumRebo)}</b></td>
                <td><b>{total.sumAss}</b></td>
                <td><b><i>{total.sumSte}</i></b></td>
                <td><b><i>{total.sumBlkf}</i></b></td>
                <td>{total.sumBlkc}</td>
                <td>{total.sumTurn}</td>
                <td>{total.sumFoulr}</td>
                <td>{total.sumFoulc}</td>
                <td>{(total.sumMin + total.sumSeg / 60).toFixed(0)}:{String(total.sumSeg % 60).padStart(2, '0')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  }
};

// Validation
StatsTotals.propTypes = { totals: PropTypes.array.isRequired }

export default StatsTotals