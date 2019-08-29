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

    // Graph
    let graphData = {
      labels: ['Total', 'Mental', 'Ataque', 'Defensa', 'Físico'],
      datasets: [
        {
          fontColor: "white",
          label:"Medias del Jugador",
          backgroundColor: "rgba(200,50,200,0.3)",
          pointBackgroundColor: "rgba(200,50,200,1)",
          hoverPointBackgroundColor: "#fff",
          pointHighlightStroke: "rgba(200,50,200,1)",
          data: [
            player.total / 100,
            player.mental / 100,
            player.offense / 100,
            player.defense / 100,
            player.physic / 100
          ]
        }
      ]
    }

    let options = {
      responsive: true,
      aspectRatio: 1,
      maintainAspectRatio: true,
      legend: { position: 'bottom' },
      title: { display: false, text: 'Media del jugador' },
      scale: {
        reverse: false,
        gridLines: {
          color: ['black', 'black', 'black', 'red', 'red', 
            'orange', 'yellow', 'limegreen', 'blue', 'violet' ]
        },
        ticks: { beginAtZero: true, stepSize: 10 }
      }
    }

    // Progression
    let isProgression;
    if(progressions !== undefined && progressions.length > 0){
      isProgression = <Progression progressions={progressions} />
    }else{ isProgression = <br/> }

    // Stats
    let isStats;
    if(stats !== undefined && stats.length >0){
      isStats = <Stats stats={stats} />
    }else{ isStats = <br/> }

    return <div className="profile-container">
      <div className="row data">
        <div className="col-md-6 data-text">
          <ProfileData player={player} />
        </div>
        <div className="col-md-6 data-graph">
          <Graph data={graphData} options={options} />
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