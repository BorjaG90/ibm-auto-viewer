import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Container from '../Team_Info/Container'
import PlayerProfile from '../Player_Profile/Profile'
import SeniorRoster from '../Roster/SeniorContainer'
import JuniorRoster from '../Roster/JuniorContainer'


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

          <Route path="/roster" render={props => 
            <SeniorRoster {...props} team_id={this.props.team_id} />
          }/>

          <Route path="/juniors" render={props => 
            <JuniorRoster {...props} team_id={this.props.team_id} />
          }/>
          
          <Route path="/players/:id" component={PlayerProfile}/>

        </Switch>
      </div>
    )
  }
}

// Validation
Dashboard.propTypes = { team_id: PropTypes.string.isRequired }

export default Dashboard