import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Roster from '../Roster/Roster'
import Juniors from '../Roster/Juniors'
import Market from '../Market/Market';
import PlayerProfile from '../Player_Profile/Profile'

class Dashboard extends Component {
  componentDidMount() {
    this.forceUpdate()
  }
  
  render(){
    return(
      <div className="dashboard">
        <Switch>

          <Route path="/roster" render={props => 
            <Roster {...props} team_id={this.props.team_id} />
          }/>

          <Route path="/juniors" render={props => 
            <Juniors {...props} team_id={this.props.team_id} />
          }/>

          <Route path="/market" render={props => 
            <Market />
          }/>

          <Route path="/players/:id" component={PlayerProfile}/>

        </Switch>
      </div>
    )
  }
}

export default Dashboard