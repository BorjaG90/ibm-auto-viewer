import React, { PureComponent } from 'react';

import Attributes from  './Attributes'
import ProfileData from './ProfileData'
import Progression from './Progression'
import Stats from './Stats'

import './style.css';
import Graph from './Graph';

class Profile extends PureComponent {

  state = { player: {}, progressions: [] , stats: []}

  componentDidMount() {
    fetch(`http://localhost:4000/api/players/${this.props.match.params.id}`
    ) // Petición GET
			.then(res => res.json())
			.then(data => {
        //console.log(data);
        this.setState({
          player: data,
          progressions: data.progressions,
          stats: data.stats
        });
      })
      .catch(console.log(`ERROR: ${this.props.match.params.id}`))
  }

  render(){
    const { player, progressions, stats } = this.state;

    let isProgression;
    if(progressions !== undefined && progressions.length > 0){
      isProgression = <Progression progressions={progressions} />
    }else{ isProgression = <br/> }

    let isStats;
    if(stats !== undefined && stats.length >0){
      isStats = <Stats stats={stats} />
    }else{ isStats = <br/> }

    

    return <div className="profile-container">
      <div className="row data">
        <div className="col s6 data-text">
          <ProfileData player={player} />
        </div>
        <div className="col s6 data-graph">
          <Graph />
        </div>
      </div>

      <div className="row">
        <Attributes player={player} />
      </div>

      <div className="row">
        {isProgression}
      </div>

      <div className="row">
        {isStats}
      </div>

    </div>
  }
}

export default Profile