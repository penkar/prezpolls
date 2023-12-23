import React from "react";
import { HichChart } from "./hc.tsx";
import { overlapGraph } from "../gallup/index.ts";

import type {
  ApprovalDisprovalData,
  GraphDataPoint,
  SeriesData,
} from "./types.ts";

interface Props {
  bidenApp: ApprovalDisprovalData;
  bushApp: ApprovalDisprovalData;
  clintonApp: ApprovalDisprovalData;
  obamaApp: ApprovalDisprovalData;
  trumpApp: ApprovalDisprovalData;
}

export function Overlap({
  bidenApp,
  bushApp,
  clintonApp,
  obamaApp,
  trumpApp,
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
    const app: GraphDataPoint = [];
    const dis: GraphDataPoint = [];
    const neu: GraphDataPoint = [];
    const data = arr[j];
    const info = arr[j].data;

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
    <HichChart series={series} info={{ chart: overlapGraph }} key="overlap" />
  );
}
