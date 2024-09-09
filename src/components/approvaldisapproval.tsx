import React from "react";
import { HichChart } from "./hc.tsx";

import type { ApprovalDisprovalData, GraphDataPoint } from "./types.ts";

import type { ChartType } from "../gallup/types.ts";

interface Props {
  data: ApprovalDisprovalData;
  info: {
    party: string;
    president: string;
    chart: ChartType;
  };
}

export function ApprovalDisapproval({ data, info }: Props) {
  const [appData, setAppData] = React.useState<GraphDataPoint>([]);
  const [disData, setDisData] = React.useState<GraphDataPoint>([]);
  const [neuData, setNeuData] = React.useState<GraphDataPoint>([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const app: GraphDataPoint = [];
    const dis: GraphDataPoint = [];
    const neu: GraphDataPoint = [];

    for (let i = 0; i < data.length; i++) {
      const { start, app: approval, dis: disapproval, neu: neutral } = data[i];
      app.push([start.getTime(), approval]);
      dis.push([start.getTime(), disapproval]);
      neu.push([start.getTime(), neutral]);
    }

    setAppData(app);
    setDisData(dis);
    setNeuData(neu);
    setLoaded(true);
  }, [data.length]);

  const series = [
    {
      data: appData,
      name: `Approval`,
      type: "area",
    },
    {
      data: disData,
      name: `Disapproval`,
      type: "area",
    },
    {
      data: neuData,
      name: `Neutral`,
      type: "area",
    },
  ];

  return (
    loaded && <HichChart series={series} info={info} key={info.president} />
  );
}
