import React from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'

class HC extends React.Component {
  static propTypes = {
    series: PropTypes.array,
    info: PropTypes.object,
  }

  static defaultTypes = {
    series: [],
    info: {},
  }

  constructor(props) {
    super(props);
    this.state = {chart:null}
  }
  componentDidMount() {
    let {series, info} = this.props;

    let chart = Highcharts.chart(this.chart, {
      chart: {
        type:`line`
      },
      title: {
        text: `Presidential Approval Poll for ${info.president}`
      },
      subtitle: {
        text: `Source: Gallup.com`
      },
      yAxis: {
        title: {
          text: `Approval %`
        }
      },
      xAxis: {
        type: `datetime`
      },
      legend: {
        layout: `vertical`,
        align: `center`,
        verticalAlign: `bottom`,
        x: 0,
        y: 0
      },
      plotOptions: {},
      series: series
    });
    this.setState({chart});
  }

  // componentWillReceiveProps(next) {
  //   if(this.props.info.president !== next.info.presient) {
  //     let series = this.state.chart.series;
  //     // this.state.chart.series = this.props.series;
  //     // this.state.chart.update();
  //
  //     series[0].setData(next.series[0].data)
  //     series[1].setData(next.series[1].data)
  //     series[2].setData(next.series[2].data)
  //   }
  // }

  render() {
    return (
      <div ref={(chart) => (this.chart = chart)}></div>
    )
  }
}

export {HC}
