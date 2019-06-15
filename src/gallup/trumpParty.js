import {approvalChartDefault} from './defaults.js'

const trumpParty = [
  {start:new Date(`2019 May 15`), rep:87, ind:33, dem:8},
  {start:new Date(`2019 May 1`), rep:90, ind:33, dem:9},
  {start:new Date(`2019 Apr 17`), rep:91, ind:37, dem:12},
  {start:new Date(`2019 Apr 1`), rep:89, ind:39, dem:8},
  {start:new Date(`2019 Mar 1`), rep:90, ind:33, dem:4},
  {start:new Date(`2019 Feb 12`), rep:90, ind:35, dem:6},
  {start:new Date(`2019 Feb 1`), rep:89, ind:38, dem:5},
  {start:new Date(`2019 Jan 21`), rep:88, ind:32, dem:5},
  {start:new Date(`2019 Jan 2`), rep:88, ind:31, dem:6},
  {start:new Date(`2018 Dec 17`), rep:89, ind:39, dem:8},
  {start:new Date(`2018 Dec 10`), rep:86, ind:37, dem:7},
  {start:new Date(`2018 Dec 3`), rep:89, ind:38, dem:7},
  {start:new Date(`2018 Nov 26`), rep:89, ind:39, dem:6},
  {start:new Date(`2018 Nov 19`), rep:86, ind:34, dem:9},
  {start:new Date(`2018 Nov 12`), rep:90, ind:37, dem:6},
  {start:new Date(`2018 Nov 5`), rep:91, ind:34, dem:5},
  {start:new Date(`2018 Oct 29`), rep:88, ind:39, dem:6},
  {start:new Date(`2018 Oct 22`), rep:89, ind:37, dem:6},
  {start:new Date(`2018 Oct 15`), rep:91, ind:39, dem:8},
  {start:new Date(`2018 Oct 8`), rep:88, ind:36, dem:9},
  {start:new Date(`2018 Oct 1`), rep:86, ind:39, dem:7},
  {start:new Date(`2018 Sep 24`), rep:87, ind:37, dem:6},
  {start:new Date(`2018 Sep 17`), rep:87, ind:34, dem:8},
  {start:new Date(`2018 Sep 10`), rep:88, ind:33, dem:6},
  {start:new Date(`2018 Sep 3`), rep:85, ind:36, dem:8},
  {start:new Date(`2018 Aug 27`), rep:85, ind:36, dem:9},
  {start:new Date(`2018 Aug 20`), rep:85, ind:35, dem:10},
  {start:new Date(`2018 Aug 13`), rep:87, ind:39, dem:7},
  {start:new Date(`2018 Aug 6`), rep:82, ind:34, dem:7},
  {start:new Date(`2018 Jul 30`), rep:89, ind:33, dem:7},
  {start:new Date(`2018 Jul 23`), rep:87, ind:34, dem:8},
  {start:new Date(`2018 Jul 16`), rep:85, ind:37, dem:11},
  {start:new Date(`2018 Jul 9`), rep:90, ind:38, dem:8},
  {start:new Date(`2018 Jul 2`), rep:87, ind:36, dem:9},
  {start:new Date(`2018 Jun 25`), rep:87, ind:36, dem:10},
  {start:new Date(`2018 Jun 18`), rep:87, ind:38, dem:5},
  {start:new Date(`2018 Jun 11`), rep:90, ind:42, dem:10},
  {start:new Date(`2018 Jun 4`), rep:90, ind:35, dem:8},
  {start:new Date(`2018 May 28`), rep:87, ind:34, dem:11},
  {start:new Date(`2018 May 21`), rep:85, ind:35, dem:8},
  {start:new Date(`2018 May 14`), rep:89, ind:38, dem:9},
  {start:new Date(`2018 May 7`), rep:84, ind:35, dem:12},
  {start:new Date(`2018 Apr 30`), rep:88, ind:37, dem:13},
  {start:new Date(`2018 Apr 23`), rep:89, ind:35, dem:9},
  {start:new Date(`2018 Apr 16`), rep:82, ind:32, dem:10},
  {start:new Date(`2018 Apr 9`), rep:85, ind:33, dem:7},
  {start:new Date(`2018 Apr 2`), rep:89, ind:35, dem:8},
  {start:new Date(`2018 Mar 26`), rep:86, ind:33, dem:8},
  {start:new Date(`2018 Mar 19`), rep:85, ind:34, dem:7},
  {start:new Date(`2018 Mar 12`), rep:82, ind:32, dem:7},
  {start:new Date(`2018 Mar 5`), rep:87, ind:34, dem:8},
  {start:new Date(`2018 Feb 26`), rep:85, ind:34, dem:8},
  {start:new Date(`2018 Feb 19`), rep:85, ind:35, dem:9},
  {start:new Date(`2018 Feb 12`), rep:86, ind:30, dem:6},
  {start:new Date(`2018 Feb 5`), rep:86, ind:36, dem:7},
  {start:new Date(`2018 Jan 29`), rep:90, ind:33, dem:6},
  {start:new Date(`2018 Jan 22`), rep:87, ind:33, dem:7},
  {start:new Date(`2018 Jan 15`), rep:81, ind:31, dem:5},
  {start:new Date(`2018 Jan 8`), rep:81, ind:35, dem:5},
  {start:new Date(`2018 Jan 1`), rep:87, ind:32, dem:5},
  {start:new Date(`2017 Dec 25`), rep:82, ind:34, dem:9},
  {start:new Date(`2017 Dec 18`), rep:80, ind:33, dem:7},
  {start:new Date(`2017 Dec 11`), rep:77, ind:31, dem:7},
  {start:new Date(`2017 Dec 4`), rep:82, ind:32, dem:5},
  {start:new Date(`2017 Nov 27`), rep:78, ind:32, dem:7},
  {start:new Date(`2017 Nov 20`), rep:81, ind:34, dem:7},
  {start:new Date(`2017 Nov 13`), rep:81, ind:34, dem:8},
  {start:new Date(`2017 Nov 6`), rep:82, ind:33, dem:8},
  {start:new Date(`2017 Oct 30`), rep:83, ind:35, dem:6},
  {start:new Date(`2017 Oct 23`), rep:78, ind:33, dem:7},
  {start:new Date(`2017 Oct 16`), rep:80, ind:33, dem:8},
  {start:new Date(`2017 Oct 9`), rep:79, ind:33, dem:8},
  {start:new Date(`2017 Oct 2`), rep:81, ind:33, dem:9},
  {start:new Date(`2017 Sep 25`), rep:80, ind:31, dem:7},
  {start:new Date(`2017 Sep 18`), rep:82, ind:35, dem:8},
  {start: new Date(`2017 Sep 11`), rep:81, ind:35, dem:9},
  {start: new Date(`2017 Sep 4`), rep:80, ind:31, dem:9},
  {start: new Date(`2017 Aug 28`), rep:79, ind:32, dem:8},
  {start: new Date(`2017 Aug 21`), rep:78, ind:30, dem:7},
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
