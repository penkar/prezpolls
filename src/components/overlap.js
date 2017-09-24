import React from 'react'
import {HC} from './hc'
import {overlapGraph} from '../gallup'

export function Overlap({bushApp, clintonApp, obamaApp, trumpApp}) {
  let arr = [{data:clintonApp, prez:'Clinton'}, {data:bushApp, prez:'Bush'}, {data:obamaApp, prez:'Obama'}, {data:trumpApp, prez: 'Trump'}];
  let series = [];

  for(let j = 0; j < 4; j++) {
    let app = [], dis = [], neu = [];
    let data = arr[j], info = arr[j].data;

    for(let i = info.length -1; i > -1; i--) {
      let date = info[i]
      app.push([date.start.getTime() - (252460800000 * j), date.app]);
      dis.push([date.start.getTime() - (252460800000 * j), date.dis]);
      neu.push([date.start.getTime() - (252460800000 * j), date.neu]);
    }

    series.push({
      name:`${data.prez} Approval`,
      type:'line',
      data:app,
    });
    series.push({
      name:`${data.prez} Dissapproval`,
      type:'line',
      data:dis,
    });
    series.push({
      name:`${data.prez} Neutral`,
      type:'line',
      data:neu,
    });
  }

  let info = {
    chart: overlapGraph
  }

  return (
    <div id='main'>
      <HC series={series} info={info} key={'overlap'}/>
    </div>
  )
}
