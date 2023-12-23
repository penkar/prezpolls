import React from "react";
import * as gallup from "../gallup/index.ts";
import {
  ApprovalDisapproval,
  PartyGraph,
  Overlap,
} from "../components/index.ts";

import styles from "./app.module.scss";

const cycleData = [
  {
    president: "clintonApp",
    info: "clintonAppData",
  },
  {
    president: "bushApp",
    info: "bushAppData",
  },
  {
    president: "obamaApp",
    info: "obamaAppData",
  },
  {
    president: "trumpApp",
    info: "trumpAppData",
  },
  {
    president: "bidenApp",
    info: "bidenAppData",
  },
  {
    president: "clintonParty",
    info: "clintonPartyData",
  },
  {
    president: "bushParty",
    info: "bushPartyData",
  },
  {
    president: "obamaParty",
    info: "obamaPartyData",
  },
  {
    president: "trumpParty",
    info: "trumpPartyData",
  },
  {
    president: "bidenParty",
    info: "bidenPartyData",
  },
  {
    president: "overlap",
    info: "overlap",
  },
];

export const App = () => {
  const [index, setIndex] = React.useState(0);
  const nextEvent = () => setIndex((index) => (index + 1) % 11);
  const prevEvent = () => setIndex((index) => (index + 10) % 11);

  const prez = cycleData[index];
  const data = gallup[prez.president],
    info = gallup[prez.info];

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div onClick={prevEvent} className={styles.button}>
          Previous
        </div>
        <div className={styles.title}></div>
        <div onClick={nextEvent} className={styles.button}>
          Next
        </div>
      </div>
      {index < 5 && <ApprovalDisapproval data={data} info={info} />}
      {index > 4 && index < 10 && <PartyGraph data={data} info={info} />}
      {index === 10 && <Overlap {...gallup} />}
    </div>
  );
};
