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
    align: `right`,
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
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
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

export const overlapGraph = Object.assign({}, defaults, {
  chart: {
    height:window.innerHeight - 64,
    type:'line',
  },
  title: {
    text: `Presidential approval and disapproval for the prior four presidents.`,
  },
  legend: {
    layout:`horizontal`,
    align:`center`,
    verticalAlign:`bottom`,
  }
});

export const approvalChartDefault = Object.assign({}, defaults, {
  chart: {
    height:window.innerHeight - 64,
    type:`area`,
  },
});

export const approvalByParty = Object.assign({}, defaults, {
  chart: {
    height:window.innerHeight - 64,
    type:`line`,
  }
});
