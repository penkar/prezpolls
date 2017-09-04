import React from 'react';
import * as gallup from '../gallup';
import {Main} from '../components'

require('../style/app.scss');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='app'>
        <div id='header'></div>
        
        { Main(gallup) }
      </div>
    )
  }
}

export {App}
