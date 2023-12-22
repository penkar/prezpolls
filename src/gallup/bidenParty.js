import { approvalChartDefault } from "./defaults.js";

const bidenarty = [
  { start: new Date(`2023 Nov 1`), rep: 5, ind: 27, dem: 83 },
  { start: new Date(`2023 Oct 2`), rep: 5, ind: 35, dem: 75 },
  { start: new Date(`2023 Sep 1`), rep: 5, ind: 39, dem: 86 },
  { start: new Date(`2023 Aug 1`), rep: 3, ind: 39, dem: 87 },
  { start: new Date(`2023 Jul 3`), rep: 2, ind: 38, dem: 86 },
  { start: new Date(`2023 Jun 1`), rep: 6, ind: 41, dem: 82 },
  { start: new Date(`2023 May 1`), rep: 4, ind: 33, dem: 84 },
  { start: new Date(`2023 Apr 3`), rep: 4, ind: 31, dem: 83 },
  { start: new Date(`2023 Mar 1`), rep: 3, ind: 35, dem: 87 },
  { start: new Date(`2023 Feb 1`), rep: 6, ind: 40, dem: 80 },
  { start: new Date(`2023 Jan 2`), rep: 4, ind: 36, dem: 81 },
  { start: new Date(`2022 Nov 9`), rep: 6, ind: 37, dem: 85 },
  { start: new Date(`2022 Oct 3`), rep: 4, ind: 39, dem: 85 },
  { start: new Date(`2022 Sep 1`), rep: 7, ind: 39, dem: 86 },
  { start: new Date(`2022 Aug 1`), rep: 4, ind: 40, dem: 81 },
  { start: new Date(`2022 Jul 5`), rep: 5, ind: 31, dem: 78 },
  { start: new Date(`2022 Jun 1`), rep: 3, ind: 36, dem: 85 },
  { start: new Date(`2022 May 2`), rep: 3, ind: 39, dem: 82 },
  { start: new Date(`2022 Apr 1`), rep: 5, ind: 35, dem: 84 },
  { start: new Date(`2022 Mar 1`), rep: 5, ind: 38, dem: 84 },
  { start: new Date(`2022 Feb 1`), rep: 7, ind: 35, dem: 79 },
  { start: new Date(`2022 Jan 3`), rep: 5, ind: 33, dem: 82 },
  { start: new Date(`2021 Dec 1`), rep: 5, ind: 40, dem: 78 },
  { start: new Date(`2021 Nov 1`), rep: 6, ind: 37, dem: 90 },
  { start: new Date(`2021 Oct 1`), rep: 4, ind: 34, dem: 92 },
  { start: new Date(`2021 Sep 1`), rep: 6, ind: 37, dem: 90 },
  { start: new Date(`2021 Aug 2`), rep: 7, ind: 43, dem: 93 },
  { start: new Date(`2021 Jul 6`), rep: 12, ind: 48, dem: 90 },
  { start: new Date(`2021 Jun 1`), rep: 11, ind: 55, dem: 95 },
  { start: new Date(`2021 May 3`), rep: 8, ind: 54, dem: 92 },
  { start: new Date(`2021 Apr 1`), rep: 11, ind: 58, dem: 94 },
  { start: new Date(`2021 Mar 1`), rep: 8, ind: 50, dem: 94 },
  { start: new Date(`2021 Feb 3`), rep: 12, ind: 53, dem: 96 },
  { start: new Date(`2021 Jan 21`), rep: 11, ind: 61, dem: 98 },
];

const bidenPartyData = {
  president: `Joe Biden`,
  party: `democrat`,
  chart: Object.assign({}, approvalChartDefault, {
    title: { text: `Presidential Approval Poll by party for Joe Biden` },
  }),
};

export { bidenParty, bidenPartyData };
