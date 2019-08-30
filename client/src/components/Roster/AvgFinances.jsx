import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class AvgFinances extends PureComponent {
  render(){
    const { players } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    let age, total, mental, clause, years, salary, canon, n_play;

    age = 0
    total = 0
    clause = 0
    years = 0
    salary = 0
    mental = 0
    canon = 0
    n_play = 0

    players.forEach(player => {
      age += player.age
      total += player.total
      mental += player.mental
      clause += player.clause
      years += player.years
      salary += player.salary
      canon += player.canon
      n_play +=1
    });
    
    return <React.Fragment>
      <tr className="table-primary">
        <th scope="row">Average</th>
        <td></td>
        <td>{(age / n_play).toFixed(2)}</td>
        <td><b>{(total / 100 / n_play).toFixed(2)}</b></td>
        <td><b>{(mental / 100 / n_play).toFixed(2)}</b></td>
        <td>{nf.format(clause/ n_play)}</td>
        <td>{(years / n_play).toFixed(2)}</td>
        <td>{nf.format(salary / n_play)}</td>
        <td>{(canon / 100 / n_play).toFixed(2)}%</td>
        <td>{nf.format((salary * 13)/ n_play)}</td>
        <td>{nf.format((salary  * 13 * (years/n_play)) / n_play)}</td>
      </tr>
    </React.Fragment>
  }
}

// Validation
AvgFinances.propTypes = { players: PropTypes.array.isRequired }

export default AvgFinances