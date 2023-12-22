import { approvalChartDefault } from "./defaults.js";

const bidenApp = [
  { start: new Date(`2023 Nov 1`), app: 37, dis: 59, neu: 4 },
  { start: new Date(`2023 Oct 2`), app: 37, dis: 59, neu: 4 },
  { start: new Date(`2023 Sep 1`), app: 41, dis: 58, neu: 1 },
  { start: new Date(`2023 Aug 1`), app: 42, dis: 53, neu: 5 },
  { start: new Date(`2023 Jul 3`), app: 40, dis: 55, neu: 4 },
  { start: new Date(`2023 Jun 1`), app: 43, dis: 54, neu: 3 },
  { start: new Date(`2023 May 1`), app: 39, dis: 57, neu: 5 },
  { start: new Date(`2023 Apr 3`), app: 37, dis: 59, neu: 4 },
  { start: new Date(`2023 Mar 1`), app: 40, dis: 56, neu: 4 },
  { start: new Date(`2023 Feb 1`), app: 42, dis: 54, neu: 5 },
  { start: new Date(`2023 Jan 2`), app: 41, dis: 54, neu: 4 },
  { start: new Date(`2022 Nov 9`), app: 40, dis: 55, neu: 5 },
  { start: new Date(`2022 Oct 3`), app: 40, dis: 56, neu: 4 },
  { start: new Date(`2022 Sep 1`), app: 42, dis: 56, neu: 2 },
  { start: new Date(`2022 Aug 1`), app: 44, dis: 53, neu: 3 },
  { start: new Date(`2022 Jul 5`), app: 38, dis: 59, neu: 3 },
  { start: new Date(`2022 Jun 1`), app: 41, dis: 57, neu: 3 },
  { start: new Date(`2022 May 2`), app: 41, dis: 54, neu: 5 },
  { start: new Date(`2022 Apr 1`), app: 41, dis: 56, neu: 3 },
  { start: new Date(`2022 Mar 1`), app: 42, dis: 54, neu: 4 },
  { start: new Date(`2022 Feb 1`), app: 41, dis: 55, neu: 4 },
  { start: new Date(`2022 Jan 3`), app: 40, dis: 54, neu: 6 },
  { start: new Date(`2021 Dec 1`), app: 43, dis: 51, neu: 6 },
  { start: new Date(`2021 Nov 1`), app: 42, dis: 55, neu: 3 },
  { start: new Date(`2021 Oct 1`), app: 42, dis: 52, neu: 6 },
  { start: new Date(`2021 Sep 1`), app: 43, dis: 53, neu: 4 },
  { start: new Date(`2021 Aug 2`), app: 49, dis: 48, neu: 3 },
  { start: new Date(`2021 Jul 6`), app: 50, dis: 45, neu: 5 },
  { start: new Date(`2021 Jun 1`), app: 56, dis: 42, neu: 2 },
  { start: new Date(`2021 May 3`), app: 54, dis: 40, neu: 6 },
  { start: new Date(`2021 Apr 1`), app: 57, dis: 40, neu: 3 },
  { start: new Date(`2021 Mar 1`), app: 54, dis: 42, neu: 6 },
  { start: new Date(`2021 Feb 3`), app: 56, dis: 40, neu: 5 },
  { start: new Date(`2021 Jan 21`), app: 57, dis: 37, neu: 6 },
];

const bidenAppData = {
  president: `Joe Biden`,
  party: `democrat`,
  chart: Object.assign({}, approvalChartDefault, {
    title: { text: `Presidential Approval Poll for Joe Biden` },
  }),
};

export { bidenApp, bidenAppData };
