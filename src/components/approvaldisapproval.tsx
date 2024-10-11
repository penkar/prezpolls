import React from "react";
import { CustomHighChart } from "./CustomHighChart.tsx";

import type {
  ApprovalDisprovalData,
  ChartType,
  GraphDataPoint,
} from "../types.ts";

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
  const [loaded, setLoaded] = React.useState<Boolean>(false);

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
  }, [data]);

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
    loaded && (
      <CustomHighChart series={series} info={info} key={info.president} />
    )
  );
}
