import React from 'react';
import * as gallup from '../gallup';
import {Header, Main} from '../components'

require('../style/app.scss');

const App = () => {
  return (
    <div id='app'>
      { Header() }
      { Main(gallup) }
    </div>
  )
};

export {App}
