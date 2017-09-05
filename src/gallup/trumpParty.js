import {approvalChartDefault} from './defaults.js'

const trumpParty = [
  {start: new Date(`2017 Aug 14`), rep:79, ind:31, dem:8},
  {start: new Date(`2017 Aug 7`), rep:79, ind:29, dem:7},
  {start: new Date(`2017 Jul 31`), rep:82, ind:30, dem:7},
  {start: new Date(`2017 Jul 24`), rep:82, ind:32, dem:7},
  {start: new Date(`2017 Jul 17`), rep:86, ind:31, dem:8},
  {start: new Date(`2017 Jul 10`), rep:87, ind:33, dem:8},
  {start: new Date(`2017 Jul 3`), rep:85, ind:35, dem:8},
  {start: new Date(`2017 Jun 26`), rep:85, ind:36, dem:8},
  {start: new Date(`2017 Jun 19`), rep:85, ind:34, dem:6},
  {start: new Date(`2017 Jun 12`), rep:84, ind:32, dem:6},
  {start: new Date(`2017 Jun 5`), rep:83, ind:31, dem:8},
  {start: new Date(`2017 May 29`), rep:82, ind:34, dem:7},
  {start: new Date(`2017 May 22`), rep:87, ind:37, dem:8},
  {start: new Date(`2017 May 15`), rep:84, ind:31, dem:7},
  {start: new Date(`2017 May 8`), rep:84, ind:35, dem:8},
  {start: new Date(`2017 May 1`), rep:84, ind:40, dem:9},
  {start: new Date(`2017 Apr 24`), rep:87, ind:36, dem:12},
  {start: new Date(`2017 Apr 17`), rep:86, ind:36, dem:9},
  {start: new Date(`2017 Apr 10`), rep:87, ind:36, dem:10},
  {start: new Date(`2017 Apr 3`), rep:87, ind:34, dem:6},
  {start: new Date(`2017 Mar 27`), rep:81, ind:36, dem:6},
  {start: new Date(`2017 Mar 20`), rep:84, ind:33, dem:8},
  {start: new Date(`2017 Mar 13`), rep:86, ind:35, dem:10},
  {start: new Date(`2017 Mar 6`), rep:88, ind:36, dem:9},
  {start: new Date(`2017 Feb 27`), rep:88, ind:39, dem:10},
  {start: new Date(`2017 Feb 20`), rep:88, ind:38, dem:10},
  {start: new Date(`2017 Feb 13`), rep:86, ind:37, dem:7},
  {start: new Date(`2017 Feb 6`), rep:87, ind:35, dem:11},
  {start: new Date(`2017 Jan 30`), rep:86, ind:41, dem:8},
  {start: new Date(`2017 Jan 20`), rep:89, ind:42, dem:13},
]

const trumpPartyData = {
  president: `Donald J. Trump`,
  party: `republican`,
  chart: Object.assign({}, approvalChartDefault, {title: {text: `Presidential Approval Poll by party for Donald Trump`,}}),
}

export {trumpParty, trumpPartyData}
