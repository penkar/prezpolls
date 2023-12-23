import React from "react";
import * as gallup from "../gallup/index.ts";
import { ApprovalDisapproval } from "../components/approvaldisapproval.tsx";
import { PartyGraph } from "../components/partygraph.tsx";
import { Overlap } from "../components/overlap.tsx";

require("../style/app.scss");

const cycleData = [
  {
    president: "clintonApp",
    info: "clintonAppData",
    type: "appdis",
  },
  {
    president: "bushApp",
    info: "bushAppData",
    type: "appdis",
  },
  {
    president: "obamaApp",
    info: "obamaAppData",
    type: "appdis",
  },
  {
    president: "trumpApp",
    info: "trumpAppData",
    type: "appdis",
  },
  {
    president: "clintonParty",
    info: "clintonPartyData",
    type: "party",
  },
  {
    president: "bushParty",
    info: "bushPartyData",
    type: "party",
  },
  {
    president: "obamaParty",
    info: "obamaPartyData",
    type: "party",
  },
  {
    president: "trumpParty",
    info: "trumpPartyData",
    type: "party",
  },
  {
    president: "bidenParty",
    info: "bidenPartyData",
    type: "party",
  },
  {
    president: "overlap",
    info: "overlap",
    type: "overlap",
  },
];

export const App = () => {
  const [index, setIndex] = React.useState(0);
  const nextEvent = () => setIndex((index) => (index + 1) % 10);
  const prevEvent = () => setIndex((index) => (index + 8) % 10);

  const prez = cycleData[index];
  const data = gallup[prez.president],
    info = gallup[prez.info],
    type = prez.type;

  return (
    <div id="app">
      <div id="header">
        <div onClick={prevEvent} className="button">
          Previous
        </div>
        <div id="title"></div>
        <div onClick={nextEvent} className="button">
          Next
        </div>
      </div>

      {type === "appdis" && ApprovalDisapproval(data, info)}
      {type === "party" && PartyGraph(data, info)}
      {type === "overlap" && Overlap(gallup)}
    </div>
  );
};
