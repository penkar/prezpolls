import React from "react";
import { HC } from "./hc.tsx";

type DataType = {
  rep: number;
  ind: number;
  dem: number;
  start: Date;
}[];

type PartyType = number[][];

export function PartyGraph(dataSeries: DataType, info) {
  const republican: PartyType = [],
    independent: PartyType = [],
    democrat: PartyType = [];

  for (let i = dataSeries.length - 1; i > -1; i--) {
    const { rep, ind, dem, start } = dataSeries[i];
    republican.push([start.getTime(), rep]);
    independent.push([start.getTime(), ind]);
    democrat.push([start.getTime(), dem]);
  }
  const series = [
    {
      name: `Republican`,
      type: "line",
      data: republican,
    },
    {
      name: `Independent`,
      type: "line",
      data: independent,
    },
    {
      name: `Democrat`,
      type: "line",
      data: democrat,
    },
  ];

  return (
    <div id="main">
      <HC series={series} info={info} key={info.president} />
    </div>
  );
}
