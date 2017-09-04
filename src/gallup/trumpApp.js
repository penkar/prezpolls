import {approvalChartDefault} from './defaults.js'

const trumpApp = [
  {start: new Date(`2017 Aug 14`), app:37, dis:58, neu:6},
  {start: new Date(`2017 Aug 7`), app:36, dis:58, neu:6},
  {start: new Date(`2017 Jul 31`), app:37, dis:58, neu:5},
  {start: new Date(`2017 Jul 24`), app:38, dis:57, neu:5},
  {start: new Date(`2017 Jul 17`), app:37, dis:58, neu:5},
  {start: new Date(`2017 Jul 10`), app:39, dis:56, neu:6},
  {start: new Date(`2017 Jul 3`), app:38, dis:57, neu:5},
  {start: new Date(`2017 Jun 26`), app:39, dis:56, neu:5},
  {start: new Date(`2017 Jun 19`), app:39, dis:56, neu:5},
  {start: new Date(`2017 Jun 12`), app:38, dis:57, neu:6},
  {start: new Date(`2017 Jun 5`), app:37, dis:58, neu:5},
  {start: new Date(`2017 May 29`), app:38, dis:56, neu:6},
  {start: new Date(`2017 May 22`), app:41, dis:54, neu:5},
  {start: new Date(`2017 May 15`), app:38, dis:56, neu:6},
  {start: new Date(`2017 May 8`), app:38, dis:56, neu:6},
  {start: new Date(`2017 May 1`), app:42, dis:53, neu:6},
  {start: new Date(`2017 Apr 24`), app:41, dis:54, neu:5},
  {start: new Date(`2017 Apr 17`), app:41, dis:52, neu:7},
  {start: new Date(`2017 Apr 10`), app:40, dis:54, neu:6},
  {start: new Date(`2017 Apr 3`), app:40, dis:53, neu:7},
  {start: new Date(`2017 Mar 27`), app:38, dis:57, neu:5},
  {start: new Date(`2017 Mar 20`), app:39, dis:56, neu:6},
  {start: new Date(`2017 Mar 13`), app:40, dis:55, neu:5},
  {start: new Date(`2017 Mar 6`), app:42, dis:52, neu:6},
  {start: new Date(`2017 Feb 27`), app:43, dis:51, neu:6},
  {start: new Date(`2017 Feb 20`), app:42, dis:53, neu:5},
  {start: new Date(`2017 Feb 13`), app:40, dis:54, neu:5},
  {start: new Date(`2017 Feb 6`), app:41, dis:53, neu:6},
  {start: new Date(`2017 Jan 30`), app:43, dis:52, neu:5},
  {start: new Date(`2017 Jan 20`), app:45, dis:47, neu:8},
]

const trumpAppData = {
  president: `Donald J. Trump`,
  party: `republican`,
  chart: Object.assign({}, approvalChartDefault, {title: {text: `Presidential Approval Poll for Donald Trump`,}}),
}

export {trumpApp, trumpAppData}
