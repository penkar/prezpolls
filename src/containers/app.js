import React from 'react';
import * as gallup from '../gallup';
import {Header} from '../components'

require('../style/app.scss');

const App = () => {
  return (
    <div id='app'>
      { Header() }
    </div>
  )
};

export {App}
