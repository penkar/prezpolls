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
  data: GraphDataPoint;
  name: string;
  type: string;
};

export type SeriesData = SeriesDataPoint[];

type PlotOptions = {
  area: {
    lineColor: string;
    lineWidth: number;
    stacking: string;
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
  x?: number;
  y?: number;
};

export type ChartType = {
  legend: Legend;
  plotOptions: PlotOptions;
  subtitle: {
    text: string;
  };
  tooltip: {
    pointFormat: string;
    split: boolean;
  };
  xAxis: {
    title: {
      text: string;
    };
    type: string;
  };
  yAxis: {
    title: {
      text: string;
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
