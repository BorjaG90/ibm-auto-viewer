import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class SumFinances extends PureComponent {
  render(){
    const { players } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    let clause, years, salary, n_play;

    clause = 0
    years = 0
    salary = 0
    n_play = 0

    players.forEach(player => {
      clause += player.clause
      years += player.years
      salary += player.salary
      n_play +=1
    });

    return <React.Fragment>
      <tr className="table-warning">
        <th scope="row">Total</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{nf.format(clause)}</td>
        <td></td>
        <td>{nf.format(salary)}</td>
        <td></td>
        <td>{nf.format((salary * 13))}</td>
        <td>{nf.format(salary  * 13 * (years/n_play))}</td>
      </tr>
    </React.Fragment>
  }
}

// Validation
SumFinances.propTypes = { players: PropTypes.array.isRequired }

export default SumFinances