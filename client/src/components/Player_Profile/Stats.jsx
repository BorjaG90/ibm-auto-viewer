import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Stats extends PureComponent {
  render(){
    //const { stats } = this.props;

    return <div className="col s12 stats">
      <h1>!!!- Estadísticas -</h1>
      <table className="responsive-table centered striped">
        <thead>
          <tr></tr>
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