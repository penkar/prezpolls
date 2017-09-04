export const approvalChartDefault = {
  chart: {
    type:`area`,
  },
  title: {
    text: `Presidential Approval Poll for George W. Bush`,
  },
  subtitle: {
    text: `Source: Gallup.com`,
  },
  yAxis: {
    title: {
      text: `Approval %`,
    }
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
