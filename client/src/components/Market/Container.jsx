import React, { PureComponent } from 'react';

import Auctions from './Auctions'

import './style.css';


class Container extends PureComponent {
  render(){
    return ( <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <h1>Mercado General</h1>
            <div className="div-market-scroll">
              <Auctions />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h1>Mercado Pivot</h1>
            <div className="div-market-scroll">
              <Auctions position="center" />
            </div>
          </div>
          <div className="col-md-4">
            <h1>Mercado Ala-Pivot</h1>
            <div className="div-market-scroll">
              <Auctions position="powerforward" />
            </div>
          </div>
          <div className="col-md-4">
          <h1>Mercado Alero</h1>
            <div className="div-market-scroll">
              <Auctions position="smallforward" />>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1>Mercado Escolta</h1>
            <div className="div-market-scroll">
              <Auctions position="shootingguard" />
            </div>
          </div>
          <div className="col-md-6">
            <h1>Mercado Base</h1>
            <div className="div-market-scroll">
              <Auctions position="pointguard" />
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Container