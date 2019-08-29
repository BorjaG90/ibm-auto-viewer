import React, { PureComponent } from 'react';

import General from './General'
import Pivot from './Pivot'
import AlaPivot from './AlaPivot'
import Alero from './Alero'
import Escolta from './Escolta'
import Base from './Base'

import './style.css';


class Container extends PureComponent {
  render(){
    return ( <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <h1>Mercado General</h1>
            <div className="div-scroll">
              <General />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h1>Mercado Pivot</h1>
            <div className="div-scroll">
              <Pivot/>
            </div>
          </div>
          <div className="col-md-4">
            <h1>Mercado Ala-Pivot</h1>
            <div className="div-scroll">
              <AlaPivot/>
            </div>
          </div>
          <div className="col-md-4">
          <h1>Mercado Alero</h1>
            <div className="div-scroll">
              <Alero/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1>Mercado Escolta</h1>
            <div className="div-scroll">
              <Escolta/>
            </div>
          </div>
          <div className="col-md-6">
            <h1>Mercado Base</h1>
            <div className="div-scroll">
              <Base/>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Container