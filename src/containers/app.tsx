import React from "react";

import {
  ApprovalDisapproval,
  PartyGraph,
  Overlap,
} from "../components/index.ts";

import {
  bidenApp,
  bidenAppData,
  bidenParty,
  bidenPartyData,
  bushApp,
  bushAppData,
  bushParty,
  bushPartyData,
  clintonApp,
  clintonAppData,
  clintonParty,
  clintonPartyData,
  obamaApp,
  obamaAppData,
  obamaParty,
  obamaPartyData,
  trumpApp,
  trumpAppData,
  trumpParty,
  trumpPartyData,
} from "../gallup/index.ts";

import type {
  ChartType,
  PartyGraphData,
  ApprovalDisprovalData,
} from "../types.ts";

import styles from "./app.module.scss";

type CycleData = {
  president: ApprovalDisprovalData | PartyGraphData;
  info: {
    party: string;
    president: string;
    chart: ChartType;
  };
}[];

const cycleData: CycleData = [
  {
    president: clintonApp,
    info: clintonAppData,
  },
  {
    president: bushApp,
    info: bushAppData,
  },
  {
    president: obamaApp,
    info: obamaAppData,
  },
  {
    president: trumpApp,
    info: trumpAppData,
  },
  {
    president: bidenApp,
    info: bidenAppData,
  },
  {
    president: clintonParty,
    info: clintonPartyData,
  },
  {
    president: bushParty,
    info: bushPartyData,
  },
  {
    president: obamaParty,
    info: obamaPartyData,
  },
  {
    president: trumpParty,
    info: trumpPartyData,
  },
  {
    president: bidenParty,
    info: bidenPartyData,
  },
];

export const App = () => {
  const [index, setIndex] = React.useState(0);
  const nextEvent = () => setIndex((index) => (index + 1) % 11);
  const prevEvent = () => setIndex((index) => (index + 10) % 11);

  const { president, info } = cycleData[index] || {};

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <button onClick={prevEvent} className={styles.button}>
          Previous
        </button>
        <div>Historical Presidential Gallup Polls</div>
        <button onClick={nextEvent} className={styles.button}>
          Next
        </button>
      </header>
      {index < 5 && (
        <ApprovalDisapproval
          key={index}
          data={president as ApprovalDisprovalData}
          info={info}
        />
      )}
      {index > 4 && index < 10 && (
        <PartyGraph
          key={index}
          data={president as PartyGraphData}
          info={info}
        />
      )}
      {index === 10 && (
        <Overlap
          bidenApp={bidenApp}
          bushApp={bushApp}
          clintonApp={clintonApp}
          obamaApp={obamaApp}
          trumpApp={trumpApp}
        />
      )}
    </div>
  );
};
