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

const YEAR = 31536000000;

export function Overlap({
  bidenApp,
  bushApp,
  clintonApp,
  obamaApp,
  trumpApp,
}: Props) {
  const arr = [
    { data: clintonApp, prez: "Clinton", offset: 0 },
    { data: bushApp, prez: "Bush", offset: 2 },
    { data: obamaApp, prez: "Obama", offset: 4 },
    { data: trumpApp, prez: "Trump", offset: 6 },
    { data: bidenApp, prez: "Biden", offset: 7 },
  ];
  const series: SeriesData = [];
  arr.forEach(({ data, offset, prez }, j) => {
    const app: GraphDataPoint = [];
    const dis: GraphDataPoint = [];
    const neu: GraphDataPoint = [];

    for (let i = 0; i < data.length; i++) {
      const date = data[i];
      app.push([date.start.getTime() - YEAR * offset * 4, date.app]);
      dis.push([date.start.getTime() - YEAR * offset * 4, date.dis]);
      neu.push([date.start.getTime() - YEAR * offset * 4, date.neu]);
    }

    series.push({
      name: `${prez} Approval`,
      type: "line",
      data: app,
    });
    series.push({
      name: `${prez} Dissapproval`,
      type: "line",
      data: dis,
    });
    series.push({
      name: `${prez} Neutral`,
      type: "line",
      data: neu,
    });
  });

  return (
    <HichChart series={series} info={{ chart: overlapGraph }} key="overlap" />
  );
}
