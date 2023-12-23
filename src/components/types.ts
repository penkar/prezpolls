export type PartyGraphData = {
  rep: number;
  ind: number;
  dem: number;
  start: Date;
}[];

export type ApprovalDisprovalData = {
  app: number;
  dis: number;
  neu: number;
  start: Date;
}[];

export type GraphDataPoint = number[][];

export type SeriesData = {
  name: string;
  type: string;
  data: GraphDataPoint;
}[];
