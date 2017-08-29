import React from 'react'
import Highcharts from 'highcharts'

class HC extends React.Component {
  componentDidMount() {
    Highcharts.chart(this.chart, {
      title: {
        text: 'Presidential Approval Polls'
      },
      subtitle: {
        text: 'Source: Gallup.com'
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
      },
      series: [{
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
