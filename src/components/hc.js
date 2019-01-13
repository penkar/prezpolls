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
    }
  }

  constructor(props) {
    super(props);
    this.state = {chart:null};
  }

  componentDidMount() {
    const {series, info} = this.props;
    const chart = Highcharts.chart(this.chart, Object.assign({}, info.chart, {series}));
    window.addEventListener('resize', this._resize);
    this.setState({chart});
  }

  componentWillUnMount() {
    this.removeEventListener('resize', this._resize);
  }

  render() {
    return <div ref={(chart) => (this.chart = chart)}></div>
  }
  _resize = () => this.state.chart.setSize(window.innerWidth, window.innerHeight - 64)
}
export {HC}
