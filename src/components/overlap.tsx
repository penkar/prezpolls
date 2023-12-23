import React from "react";
import { HC } from "./hc.tsx";
import { overlapGraph } from "../gallup/index.ts";

type AppData = {
  app: number;
  dis: number;
  neu: number;
  start: Date;
}[];

interface Props {
  bushApp: AppData;
  clintonApp: AppData;
  obamaApp: AppData;
  trumpApp: AppData;
  bidenApp: AppData;
}

type GraphData = number[][];
type SeriesData = {
  name: string;
  type: string;
  data: GraphData;
}[];

export function Overlap({
  bushApp,
  clintonApp,
  obamaApp,
  trumpApp,
  bidenApp,
}: Props) {
  const arr = [
    { data: clintonApp, prez: "Clinton" },
    { data: bushApp, prez: "Bush" },
    { data: obamaApp, prez: "Obama" },
    { data: trumpApp, prez: "Trump" },
    { data: bidenApp, prez: "Biden" },
  ];
  const series: SeriesData = [];
  for (let j = 0; j < 4; j++) {
    const app: GraphData = [],
      dis: GraphData = [],
      neu: GraphData = [];
    const data = arr[j],
      info = arr[j].data;

    for (let i = info.length - 1; i > -1; i--) {
      const date = info[i];
      app.push([date.start.getTime() - 252460800000 * j, date.app]);
      dis.push([date.start.getTime() - 252460800000 * j, date.dis]);
      neu.push([date.start.getTime() - 252460800000 * j, date.neu]);
    }

    series.push({
      name: `${data.prez} Approval`,
      type: "line",
      data: app,
    });
    series.push({
      name: `${data.prez} Dissapproval`,
      type: "line",
      data: dis,
    });
    series.push({
      name: `${data.prez} Neutral`,
      type: "line",
      data: neu,
    });
  }

  return (
    <div id="main">
      <HC series={series} info={{ chart: overlapGraph }} key="overlap" />
    </div>
  );
}
