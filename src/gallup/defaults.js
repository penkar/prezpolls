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
}

export const approvalChartDefault = Object.assign({}, defaults, {
  chart: {
    type:`area`,
  },

})

export const approvalByParty = Object.assign({}, defaults, {
  chart: {
    type:`line`,
  }
})
