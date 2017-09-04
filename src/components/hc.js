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
    info: {
      chart:{}
    },
  }

  componentDidMount() {
    let {series, info} = this.props;
    let chart = Highcharts.chart(this.chart, Object.assign({}, info.chart, {series}));
  }

  render() {
    return <div ref={(chart) => (this.chart = chart)}></div>
  }
}

export {HC}
