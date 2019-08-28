import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Container from '../Team_Info/Container';


class Dashboard extends Component {
  componentDidMount() {
    this.forceUpdate()
    console.log(this.props.team_id)
  }
  
  render(){
    return(
      <div className="dashboard">
        <Switch>
          <Route path="/team_info" render={props => 
            <Container {...props} team_id={this.props.team_id} />
          }/>

        </Switch>
      </div>
    )
  }
}

// Validation
Dashboard.propTypes = { team_id: PropTypes.string.isRequired }

export default Dashboard