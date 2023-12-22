import React from "react";
import { HC } from "./hc";

export function ApprovalDisapproval(data, info) {
  const approval = [],
    disapproval = [],
    neutral = [];

  for (let i = data.length - 1; i > -1; i--) {
    let date = data[i];
    approval.push([date.start.getTime(), date.app]);
    disapproval.push([date.start.getTime(), date.dis]);
    neutral.push([date.start.getTime(), date.neu]);
  }
  const series = [
    {
      name: `Approval`,
      type: "area",
      data: approval,
    },
    {
      name: `Disapproval`,
      type: "area",
      data: disapproval,
    },
    {
      name: `Neutral`,
      type: "area",
      data: neutral,
    },
  ];
  return (
    <div id="main">
      <HC series={series} info={info} key={info.president} />
    </div>
  );
}
