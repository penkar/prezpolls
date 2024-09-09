type PartyGraphDataPoint = {
  rep: number;
  ind: number;
  dem: number;
  start: Date;
};

export type PartyGraphData = PartyGraphDataPoint[];

type ApprovalDisprovalDataPoint = {
  app: number;
  dis: number;
  neu: number;
  start: Date;
};

export type ApprovalDisprovalData = ApprovalDisprovalDataPoint[];

export type GraphDataPoint = number[][];

type SeriesDataPoint = {
  name: string;
  type: string;
  data: GraphDataPoint;
};

export type SeriesData = SeriesDataPoint[];

type PlotOptions = {
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

type Legend = {
  layout: string;
  align: string;
  verticalAlign: string;
  x: number;
  y: number;
};

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
  legend: Legend;
  yAxis: {
    title: {
      text: string;
    };
  };
  tooltip: {
    pointFormat: string;
    split: boolean;
  };
  plotOptions: PlotOptions;
  chart?: {
    height: number;
    type: string;
  };
  title?: {
    text: string;
  };
};
