import React from 'react';
require('../style/app.scss');

import * as gallup from '../gallup';
import {ApprovalDisapproval, PartyGraph} from '../components';

const cycleData = [{
  president:'clintonApp',
  info:'clintonAppData',
  type:'appdis',
},{
  president:'bushApp',
  info:'bushAppData',
  type:'appdis',
},{
  president:'obamaApp',
  info:'obamaAppData',
  type:'appdis',
},{
  president:'trumpApp',
  info:'trumpAppData',
  type:'appdis',
},{
  president:'clintonParty',
  info:'clintonPartyData',
  type:'party',
},{
  president:'bushParty',
  info:'bushPartyData',
  type:'party',
},{
  president:'obamaParty',
  info:'obamaPartyData',
  type:'party',
},{
  president:'trumpParty',
  info:'trumpPartyData',
  type:'party',
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.state = {
      index: 0
    }
  }

  render() {
    let {index} = this.state;
    let prez = cycleData[index];
    let data = gallup[prez.president], info = gallup[prez.info], type = prez.type;
    console.log(55, type);

    return (
      <div id='app'>
        <div id='header'>
          <div onClick={this._prev} className='button'>Previous</div>
          <div id='title'></div>
          <div onClick={this._next} className='button'>Next</div>
        </div>

        { type === 'appdis' && ApprovalDisapproval(data, info) }
        { type === 'party' && PartyGraph(data, info) }

      </div>
    )
  }

  _next() {
    this.setState(prev => ({index: (prev.index + 1) % 8}));
  }

  _prev() {
    this.setState(prev => ({index: (prev.index + 7) % 8}));
  }
}

export {App}
