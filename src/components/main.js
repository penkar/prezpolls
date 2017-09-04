import React from 'react'
import {HC} from './hc'

const Main = ({obamaApp, obamaParty, bushApp, bushParty, clintonApp, clintonParty, trumpApp, trumpParty}) => {
  return (
    <div id='main'>
      <HC data={obamaApp} />
    </div>
  )
}

export {Main}
