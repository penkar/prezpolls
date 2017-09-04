import React from 'react'
import Highcharts from 'highcharts'

class HC extends React.Component {
  componentDidMount() {
    let {data} = this.props;
    let approval = [], disapproval = [], neutral = [];
    let president = 'Barak Obama';
    for(let i = data.length -1; i > -1; i--) {
      let date = data[i]
      approval.push( [date.start.getTime(), date.app]);
      disapproval.push( [date.start.getTime(), date.dis]);
      neutral.push( [date.start.getTime(), date.neu]);
    }

    Highcharts.chart(this.chart, {
      chart: {
        type:'line'
      },
      title: {
        text: 'Presidential Approval Poll for Barak Obama'
      },
      subtitle: {
        text: 'Source: Gallup.com'
      },
      yAxis: {
        title: {
          text: 'Approval %'
        }
      },
      xAxis: {
        type: 'datetime'
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'bottom',
        x: 0,
        y: 0
      },
      plotOptions: {
      },
      series: [{
        name: `${president} Approval Rating`,
        type:'area',
        data: approval
      },{
        name: `${president} Disapproval Rating`,
        type:'area',
        data: disapproval,
      },{
        name: `${president} Neutral Rating`,
        type:'area',
        data: neutral,
      }]
    })
  }

  render() {
    return (
      <div ref={(chart) => (this.chart = chart)}></div>
    )
  }
}

export {HC}
