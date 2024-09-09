export type ChartType = {
  subtitle: {
    text: string;
  };
  xAxis: {
    title: {
      text: string;
    };
    type: string;
  };
  legend: {
    layout: string;
    align: string;
    verticalAlign: string;
    x: number;
    y: number;
  };
  yAxis: {
    title: {
      text: string;
    };
  };
  tooltip: {
    pointFormat: string;
    split: boolean;
  };
  plotOptions: {
    area: {
      stacking: string;
      lineColor: string;
      lineWidth: number;
      marker: {
        lineWidth: number;
        lineColor: string;
      };
    };
  };
  chart?: {
    height: number;
    type: string;
  };
  title?: {
    text: string;
  };
};
