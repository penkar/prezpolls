const defaults = {
  subtitle: {
    text: `Source: Gallup.com`,
  },
  xAxis: {
    title: {
      text: `Date`,
    },
    type: `datetime`,
  },
  legend: {
    layout: `vertical`,
    align: `center`,
    verticalAlign: `bottom`,
    x: 0,
    y: 0,
  },
  yAxis: {
    title: {
      text: `Approval Percentage`,
    }
  },
}

export const approvalChartDefault = Object.assign({}, defaults, {
  chart: {
    type:`area`,
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
    split: true
  },
  plotOptions: {
    area: {
      stacking: 'percent',
      lineColor: '#ffffff',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#ffffff'
      }
    }
  },
})
