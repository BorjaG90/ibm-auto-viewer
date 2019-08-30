import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class AvgAttributes extends PureComponent {
  render(){
    const { players } = this.props;
    let age, total, off, def, phy, mental, t2, t3, ft, dunk, ass, reb, ste, blk;
    let mark, speed, resistance, fight, lead, loyal, ambition, level, exp, n_play;
    
    age = 0
    total = 0
    off = 0
    def = 0
    phy = 0
    mental = 0
    t2 = 0
    t3 = 0
    ft = 0
    dunk = 0
    ass = 0
    reb = 0
    ste = 0
    blk = 0
    mark = 0
    speed = 0
    resistance = 0
    fight = 0
    lead = 0
    loyal = 0
    ambition = 0
    level = 0
    exp = 0
    n_play = 0

    players.forEach(player => {
      age += player.age
      total += player.total
      off += player.offense
      def += player.defense
      phy += player.physic
      mental += player.mental
      t2 += player.two
      t3 += player.three
      ft += player.free
      dunk += player.dunk
      ass += player.assist
      reb += player.rebound
      ste += player.recover
      blk += player.block
      mark += player.marking
      speed += player.speed
      resistance += player.endurance
      fight += player.fight
      lead += player.leadership
      loyal += player.loyalty
      ambition += player.ambition
      level += player.level
      exp += player.exp
      n_play +=1
    });
    

    return <React.Fragment>
      <tr className="table-primary">
        <th scope="row">Media</th>
        <td className="bg-warning"><b><i>{n_play} J.</i></b></td>
        <td>{(age / n_play).toFixed(2)}</td>
        <td><b>{(total / 100 / n_play).toFixed(2)}</b></td>
        <td>{(off / 100 / n_play).toFixed(2)}</td>
        <td>{(def / 100 / n_play).toFixed(2)}</td>
        <td>{(phy / 100 / n_play).toFixed(2)}</td>
        <td><b>{(mental / 100 / n_play).toFixed(2)}</b></td>
        <td className="bg-primary">
          <b>{((mental/100/n_play)+(3.20*(19-age/n_play))).toFixed(2)}</b>
        </td>
        <td>{(t2 / n_play).toFixed(2)}</td>
        <td>{(t3 / n_play).toFixed(2)}</td>
        <td>{(ft / n_play).toFixed(2)}</td>
        <td>{(dunk / n_play).toFixed(2)}</td>
        <td>{(ass / n_play).toFixed(2)}</td>
        <td>{(reb / n_play).toFixed(2)}</td>
        <td>{(ste / n_play).toFixed(2)}</td>
        <td>{(blk / n_play).toFixed(2)}</td>
        <td>{(mark / n_play).toFixed(2)}</td>
        <td>{(speed / n_play).toFixed(2)}</td>
        <td>{(resistance / n_play).toFixed(2)}</td>
        <td>{(fight / n_play).toFixed(2)}</td>
        <td>{(lead / n_play).toFixed(2)}</td>
        <td>{(loyal / n_play).toFixed(2)}</td>
        <td>{(ambition / n_play).toFixed(2)}</td>
        <td>{(level / n_play).toFixed(2)}</td>
        <td>{(exp / n_play).toFixed(2)}</td>
      </tr>
    </React.Fragment>
  }
}

// Validation
AvgAttributes.propTypes = { players: PropTypes.array.isRequired }

export default AvgAttributes