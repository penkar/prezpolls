import React from "react";
import { HichChart } from "./hc.tsx";

import type { PartyGraphData, GraphDataPoint } from "./types.ts";

interface Props {
  data: PartyGraphData;
  info: any;
}

export function PartyGraph({ data, info }: Props) {
  const republican: GraphDataPoint = [];
  const independent: GraphDataPoint = [];
  const democrat: GraphDataPoint = [];

  for (let i = data.length - 1; i > -1; i--) {
    const { rep, ind, dem, start } = data[i];
    republican.push([start.getTime(), rep]);
    independent.push([start.getTime(), ind]);
    democrat.push([start.getTime(), dem]);
  }
  const series = [
    {
      data: republican,
      name: `Republican`,
      type: "line",
    },
    {
      data: independent,
      name: `Independent`,
      type: "line",
    },
    {
      data: democrat,
      name: `Democrat`,
      type: "line",
    },
  ];

  return <HichChart series={series} info={info} key={info.president} />;
}
