import React from 'react';
import * as gallup from '../gallup';
import {ApprovalDisapproval} from '../components'

require('../style/app.scss');

const cycleData = [{
  president:'obamaApp',
  info:'obamaAppData',
},{
  president:'bushApp',
  info:'bushAppData',
},{
  president:'clintonApp',
  info:'clintonAppData',
},{
  president:'trumpApp',
  info:'trumpAppData',
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
    let data = gallup[cycleData[index].president], info = gallup[cycleData[index].info];
    return (
      <div id='app'>
        <div id='header'>
          <div onClick={this._prev} className='button'>Previous</div>
          <div id='title'></div>
          <div onClick={this._next} className='button'>Next</div>
        </div>

        { ApprovalDisapproval( data, info ) }

      </div>
    )
  }

  _next() {
    this.setState(prev => ({index: (prev.index + 1) % 4}))
  }

  _prev() {
    this.setState(prev => ({index: (prev.index + 3) % 4}))
  }
}

export {App}
