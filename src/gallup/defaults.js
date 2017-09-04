export const approvalChartDefault = {
  chart: {
    type:`line`,
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
  plotOptions: {},
}
