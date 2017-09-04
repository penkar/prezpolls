import React from 'react';
import * as gallup from '../gallup';
import {Main} from '../components'

require('../style/app.scss');

const cycleData = ['obamaApp','bushApp','clintonApp','trumpApp'];

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
    let data = gallup[cycleData[index]], info = gallup[`${cycleData[index]}Data`];
    return (
      <div id='app'>
        <div id='header'>
          <div onClick={this._prev} className='button'>Previous</div>
          <div id='title'></div>
          <div onClick={this._next} className='button'>Next</div>
        </div>

        { Main( data, info ) }

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
