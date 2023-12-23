import React from "react";
import { HichChart } from "./hc.tsx";

import type { ApprovalDisprovalData, GraphDataPoint } from "./types.ts";

interface Props {
  data: ApprovalDisprovalData;
  info: any;
}

export function ApprovalDisapproval({ data, info }: Props) {
  const approval: GraphDataPoint = [];
  const disapproval: GraphDataPoint = [];
  const neutral: GraphDataPoint = [];

  for (let i = data.length - 1; i > -1; i--) {
    const { start, app, dis, neu } = data[i];
    approval.push([start.getTime(), app]);
    disapproval.push([start.getTime(), dis]);
    neutral.push([start.getTime(), neu]);
  }
  const series = [
    {
      data: approval,
      name: `Approval`,
      type: "area",
    },
    {
      data: disapproval,
      name: `Disapproval`,
      type: "area",
    },
    {
      data: neutral,
      name: `Neutral`,
      type: "area",
    },
  ];

  return <HichChart series={series} info={info} key={info.president} />;
}
