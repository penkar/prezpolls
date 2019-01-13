import React from 'react'
import {HC} from './hc'

export function PartyGraph(data, info) {
  const republican = [], independent = [], democrat = [];
  const {president} = info;
  for(let i = data.length -1; i > -1; i--) {
    let date = data[i]
    republican.push([date.start.getTime(), date.rep]);
    independent.push([date.start.getTime(), date.ind]);
    democrat.push([date.start.getTime(), date.dem]);
  }
  const series = [{
    name: `Republican`,
    type:'line',
    data: republican
  },{
    name: `Independent`,
    type:'line',
    data: independent,
  },{
    name: `Democrat`,
    type:'line',
    data: democrat,
  }];

  return (
    <div id='main'>
      <HC series={series} info={info} key={info.president}/>
    </div>
  )
}
