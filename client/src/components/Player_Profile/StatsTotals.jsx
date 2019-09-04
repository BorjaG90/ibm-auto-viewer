import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class StatsTotals extends PureComponent {
  state = { averages: {}, totals:{} }
  render(){
    return <React.Fragment> Totales</React.Fragment>
  }
};

// Validation
StatsTotals.propTypes = { player_id: PropTypes.string.isRequired }

export default StatsTotals