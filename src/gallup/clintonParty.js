import {approvalChartDefault} from './defaults.js'

const clintonParty = [
  {start: new Date(`2001 Jan 10`), rep:39, ind:66, dem:93},
  {start: new Date(`2001 Jan 5`), rep:34, ind:67, dem:91},
  {start: new Date(`2000 Dec 15`), rep:33, ind:67, dem:92},
  {start: new Date(`2000 Dec 2`), rep:29, ind:59, dem:87},
  {start: new Date(`2000 Nov 13`), rep:25, ind:70, dem:91},
  {start: new Date(`2000 Oct 25`), rep:23, ind:56, dem:84},
  {start: new Date(`2000 Oct 6`), rep:23, ind:55, dem:91},
  {start: new Date(`2000 Sep 11`), rep:26, ind:58, dem:89},
  {start: new Date(`2000 Aug 29`), rep:32, ind:60, dem:90},
  {start: new Date(`2000 Aug 18`), rep:27, ind:61, dem:89},
  {start: new Date(`2000 Aug 11`), rep:26, ind:60, dem:88},
  {start: new Date(`2000 Aug 4`), rep:30, ind:54, dem:88},
  {start: new Date(`2000 Jul 25`), rep:29, ind:50, dem:88},
  {start: new Date(`2000 Jul 14`), rep:27, ind:65, dem:85},
  {start: new Date(`2000 Jul 6`), rep:28, ind:59, dem:87},
  {start: new Date(`2000 Jun 22`), rep:25, ind:55, dem:82},
  {start: new Date(`2000 Jun 6`), rep:32, ind:63, dem:83},
  {start: new Date(`2000 May 18`), rep:26, ind:51, dem:91},
  {start: new Date(`2000 May 5`), rep:27, ind:58, dem:83},
  {start: new Date(`2000 Apr 28`), rep:25, ind:62, dem:86},
  {start: new Date(`2000 Mar 30`), rep:39, ind:56, dem:91},
  {start: new Date(`2000 Mar 17`), rep:25, ind:57, dem:83},
  {start: new Date(`2000 Mar 10`), rep:31, ind:65, dem:89},
  {start: new Date(`2000 Feb 25`), rep:29, ind:55, dem:88},
  {start: new Date(`2000 Feb 14`), rep:32, ind:60, dem:87},
  {start: new Date(`2000 Feb 4`), rep:36, ind:61, dem:89},
  {start: new Date(`2000 Jan 25`), rep:33, ind:64, dem:91},
  {start: new Date(`2000 Jan 17`), rep:34, ind:62, dem:89},
  {start: new Date(`2000 Jan 13`), rep:30, ind:62, dem:85},
  {start: new Date(`2000 Jan 7`), rep:35, ind:63, dem:87},
  {start: new Date(`1999 Dec 20`), rep:29, ind:55, dem:83},
  {start: new Date(`1999 Dec 9`), rep:28, ind:55, dem:83},
  {start: new Date(`1999 Nov 18`), rep:31, ind:61, dem:84},
  {start: new Date(`1999 Nov 4`), rep:28, ind:59, dem:82},
  {start: new Date(`1999 Oct 21`), rep:28, ind:60, dem:83},
  {start: new Date(`1999 Oct 8`), rep:27, ind:55, dem:85},
  {start: new Date(`1999 Sep 23`), rep:32, ind:60, dem:85},
  {start: new Date(`1999 Sep 10`), rep:30, ind:61, dem:86},
  {start: new Date(`1999 August`), rep:33, ind:60, dem:87},
  {start: new Date(`1999 Aug 16`), rep:26, ind:57, dem:87},
  {start: new Date(`1999 Aug 3`), rep:31, ind:59, dem:89},
  {start: new Date(`1999 Jul 22`), rep:34, ind:57, dem:93},
  {start: new Date(`1999 Jul 16`), rep:26, ind:60, dem:87},
  {start: new Date(`1999 Jul 13`), rep:33, ind:60, dem:84},
  {start: new Date(`1999 Jun 25`), rep:26, ind:53, dem:90},
  {start: new Date(`1999 Jun 11`), rep:32, ind:59, dem:85},
  {start: new Date(`1999 Jun 4`), rep:29, ind:58, dem:86},
  {start: new Date(`1999 May 23`), rep:26, ind:50, dem:82},
  {start: new Date(`1999 May 7`), rep:33, ind:59, dem:85},
  {start: new Date(`1999 Apr 30`), rep:25, ind:62, dem:87},
  {start: new Date(`1999 Apr 26`), rep:34, ind:56, dem:85},
  {start: new Date(`1999 Apr 13`), rep:32, ind:57, dem:89},
  {start: new Date(`1999 Apr 6`), rep:27, ind:57, dem:89},
  {start: new Date(`1999 Mar 30`), rep:34, ind:63, dem:88},
  {start: new Date(`1999 Mar 19`), rep:32, ind:64, dem:89},
  {start: new Date(`1999 Mar 12`), rep:32, ind:62, dem:87},
  {start: new Date(`1999 Mar 5`), rep:35, ind:70, dem:94},
  {start: new Date(`1999 Feb 26`), rep:38, ind:64, dem:89},
  {start: new Date(`1999 Feb 19`), rep:34, ind:67, dem:91},
  {start: new Date(`1999 Feb 12`), rep:35, ind:69, dem:91},
  {start: new Date(`1999 Feb 4`), rep:34, ind:63, dem:90},
  {start: new Date(`1999 Jan 22`), rep:36, ind:66, dem:94},
  {start: new Date(`1999 Jan 15`), rep:35, ind:70, dem:94},
  {start: new Date(`1999 Jan 8`), rep:37, ind:66, dem:90},
  {start: new Date(`1998 Dec 19`), rep:41, ind:69, dem:91},
  {start: new Date(`1998 Dec 15`), rep:33, ind:61, dem:88},
  {start: new Date(`1998 Dec 12`), rep:33, ind:65, dem:88},
  {start: new Date(`1998 Dec 4`), rep:39, ind:66, dem:89},
  {start: new Date(`1998 Nov 20`), rep:33, ind:65, dem:91},
  {start: new Date(`1998 Nov 13`), rep:38, ind:65, dem:89},
  {start: new Date(`1998 Oct 29`), rep:35, ind:67, dem:90},
  {start: new Date(`1998 Oct 23`), rep:33, ind:67, dem:93},
  {start: new Date(`1998 Oct 9`), rep:36, ind:67, dem:89},
  {start: new Date(`1998 Oct 6`), rep:32, ind:64, dem:86},
  {start: new Date(`1998 Sep 23`), rep:37, ind:66, dem:88},
  {start: new Date(`1998 Sep 14`), rep:36, ind:66, dem:84},
  {start: new Date(`1998 Sep 11`), rep:35, ind:64, dem:85},
  {start: new Date(`1998 Aug 21`), rep:32, ind:60, dem:89},
  {start: new Date(`1998 Aug 10`), rep:45, ind:62, dem:85},
  {start: new Date(`1998 Aug 7`), rep:43, ind:60, dem:86},
  {start: new Date(`1998 Jul 13`), rep:32, ind:61, dem:92},
  {start: new Date(`1998 Jul 7`), rep:26, ind:64, dem:88},
  {start: new Date(`1998 Jun 22`), rep:31, ind:62, dem:84},
  {start: new Date(`1998 Jun 5`), rep:32, ind:58, dem:88},
  {start: new Date(`1998 May 8`), rep:37, ind:65, dem:86},
  {start: new Date(`1998 Apr 17`), rep:40, ind:63, dem:89},
  {start: new Date(`1998 Mar 20`), rep:39, ind:65, dem:91},
  {start: new Date(`1998 Mar 6`), rep:37, ind:60, dem:89},
  {start: new Date(`1998 Feb 20`), rep:40, ind:63, dem:88},
  {start: new Date(`1998 Feb 13`), rep:40, ind:67, dem:90},
  {start: new Date(`1998 Jan 30`), rep:40, ind:68, dem:92},
  {start: new Date(`1998 Jan 25`), rep:33, ind:51, dem:90},
  {start: new Date(`1998 Jan 24`), rep:31, ind:55, dem:87},
  {start: new Date(`1998 Jan 23`), rep:30, ind:55, dem:86},
  {start: new Date(`1998 Jan 16`), rep:32, ind:55, dem:84},
  {start: new Date(`1998 Jan 6`), rep:32, ind:60, dem:85},
  {start: new Date(`1997 Dec 18`), rep:31, ind:52, dem:83},
  {start: new Date(`1997 Nov 21`), rep:34, ind:57, dem:85},
  {start: new Date(`1997 Nov 6`), rep:34, ind:59, dem:81},
  {start: new Date(`1997 Oct 27`), rep:31, ind:49, dem:84},
  {start: new Date(`1997 Oct 3`), rep:31, ind:50, dem:81},
  {start: new Date(`1997 Sep 25`), rep:29, ind:57, dem:86},
  {start: new Date(`1997 Sep 6`), rep:35, ind:58, dem:82},
  {start: new Date(`1997 Aug 22`), rep:31, ind:56, dem:84},
  {start: new Date(`1997 Aug 12`), rep:37, ind:58, dem:82},
  {start: new Date(`1997 Jul 25`), rep:27, ind:57, dem:86},
  {start: new Date(`1997 Jun 26`), rep:23, ind:48, dem:87},
  {start: new Date(`1997 May 30`), rep:29, ind:54, dem:82},
  {start: new Date(`1997 May 6`), rep:28, ind:54, dem:84},
  {start: new Date(`1997 Apr 18`), rep:26, ind:52, dem:82},
  {start: new Date(`1997 Mar 24`), rep:35, ind:51, dem:86},
  {start: new Date(`1997 Feb 24`), rep:29, ind:54, dem:85},
  {start: new Date(`1997 Jan 30`), rep:27, ind:63, dem:84},
  {start: new Date(`1997 Jan 10`), rep:31, ind:57, dem:89},
  {start: new Date(`1997 Jan 3`), rep:32, ind:55, dem:85},
  {start: new Date(`1996 Dec 9`), rep:26, ind:51, dem:91},
  {start: new Date(`1996 Nov 21`), rep:20, ind:58, dem:87},
  {start: new Date(`1996 Oct 26`), rep:19, ind:46, dem:86},
  {start: new Date(`1996 Oct 2`), rep:26, ind:55, dem:86},
  {start: new Date(`1996 Oct 1`), rep:24, ind:55, dem:86},
  {start: new Date(`1996 Sep 7`), rep:23, ind:59, dem:91},
  {start: new Date(`1996 Aug 30`), rep:27, ind:58, dem:87},
  {start: new Date(`1996 Aug 23`), rep:18, ind:49, dem:85},
  {start: new Date(`1996 Aug 16`), rep:19, ind:49, dem:85},
  {start: new Date(`1996 Aug 5`), rep:26, ind:52, dem:86},
  {start: new Date(`1996 Jul 25`), rep:25, ind:57, dem:88},
  {start: new Date(`1996 Jul 18`), rep:29, ind:56, dem:84},
  {start: new Date(`1996 Jun 27`), rep:26, ind:50, dem:76},
  {start: new Date(`1996 Jun 18`), rep:23, ind:55, dem:88},
  {start: new Date(`1996 May 28`), rep:21, ind:52, dem:87},
  {start: new Date(`1996 May 9`), rep:25, ind:46, dem:85},
  {start: new Date(`1996 Apr 25`), rep:24, ind:56, dem:84},
  {start: new Date(`1996 Apr 9`), rep:21, ind:50, dem:86},
  {start: new Date(`1996 Mar 15`), rep:23, ind:55, dem:79},
  {start: new Date(`1996 Mar 8`), rep:21, ind:54, dem:83},
  {start: new Date(`1996 Feb 23`), rep:17, ind:60, dem:81},
  {start: new Date(`1996 Jan 26`), rep:24, ind:49, dem:83},
  {start: new Date(`1996 Jan 12`), rep:15, ind:43, dem:82},
  {start: new Date(`1996 Jan 5`), rep:17, ind:39, dem:72},
  {start: new Date(`1995 Dec 15`), rep:18, ind:51, dem:81},
  {start: new Date(`1995 Nov 17`), rep:22, ind:52, dem:78},
  {start: new Date(`1995 Nov 6`), rep:28, ind:46, dem:78},
  {start: new Date(`1995 Oct 19`), rep:22, ind:48, dem:77},
  {start: new Date(`1995 Oct 5`), rep:18, ind:42, dem:79},
  {start: new Date(`1995 Sep 22`), rep:22, ind:44, dem:74},
  {start: new Date(`1995 Sep 14`), rep:21, ind:41, dem:78},
  {start: new Date(`1995 Aug 28`), rep:17, ind:47, dem:74},
  {start: new Date(`1995 Aug 11`), rep:22, ind:41, dem:75},
  {start: new Date(`1995 Aug 4`), rep:23, ind:43, dem:76},
  {start: new Date(`1995 Jul 20`), rep:23, ind:47, dem:77},
  {start: new Date(`1995 Jul 7`), rep:21, ind:45, dem:75},
  {start: new Date(`1995 Jun 5`), rep:21, ind:52, dem:78},
  {start: new Date(`1995 May 11`), rep:20, ind:56, dem:77},
  {start: new Date(`1995 Apr 21`), rep:16, ind:42, dem:77},
  {start: new Date(`1995 Apr 17`), rep:18, ind:47, dem:76},
  {start: new Date(`1995 Apr 5`), rep:18, ind:43, dem:73},
  {start: new Date(`1995 Mar 27`), rep:17, ind:47, dem:79},
  {start: new Date(`1995 Mar 17`), rep:21, ind:39, dem:72},
  {start: new Date(`1995 Feb 24`), rep:21, ind:50, dem:78},
  {start: new Date(`1995 Feb 3`), rep:22, ind:44, dem:74},
  {start: new Date(`1995 Jan 16`), rep:19, ind:41, dem:66},
  {start: new Date(`1994 Dec 28`), rep:16, ind:44, dem:75},
  {start: new Date(`1994 Dec 16`), rep:16, ind:41, dem:71},
  {start: new Date(`1994 Dec 2`), rep:21, ind:48, dem:72},
  {start: new Date(`1994 Nov 28`), rep:16, ind:44, dem:74},
  {start: new Date(`1994 Nov 2`), rep:14, ind:44, dem:75},
  {start: new Date(`1994 Oct 22`), rep:17, ind:46, dem:75},
  {start: new Date(`1994 Oct 18`), rep:12, ind:40, dem:68},
  {start: new Date(`1994 Oct 7`), rep:16, ind:43, dem:69},
  {start: new Date(`1994 Sep 23`), rep:17, ind:46, dem:70},
  {start: new Date(`1994 Sep 16`), rep:13, ind:44, dem:72},
  {start: new Date(`1994 Sep 6`), rep:14, ind:37, dem:66},
  {start: new Date(`1994 Aug 15`), rep:13, ind:37, dem:69},
  {start: new Date(`1994 Aug 8`), rep:17, ind:41, dem:69},
  {start: new Date(`1994 Jul 15`), rep:15, ind:41, dem:73},
  {start: new Date(`1994 Jul 1`), rep:18, ind:38, dem:67},
  {start: new Date(`1994 Jun 25`), rep:22, ind:36, dem:70},
  {start: new Date(`1994 Jun 11`), rep:23, ind:47, dem:72},
  {start: new Date(`1994 Jun 3`), rep:17, ind:42, dem:74},
  {start: new Date(`1994 May 20`), rep:26, ind:49, dem:75},
  {start: new Date(`1994 Apr 22`), rep:24, ind:43, dem:74},
  {start: new Date(`1994 Apr 16`), rep:26, ind:51, dem:74},
  {start: new Date(`1994 Mar 28`), rep:26, ind:49, dem:76},
  {start: new Date(`1994 Mar 25`), rep:25, ind:49, dem:80},
  {start: new Date(`1994 Mar 11`), rep:19, ind:50, dem:75},
  {start: new Date(`1994 Mar 7`), rep:22, ind:45, dem:81},
  {start: new Date(`1994 Feb 26`), rep:28, ind:55, dem:77},
  {start: new Date(`1994 Jan 28`), rep:29, ind:58, dem:80},
  {start: new Date(`1994 Jan 15`), rep:25, ind:50, dem:79},
  {start: new Date(`1994 Jan 6`), rep:28, ind:55, dem:78},
  {start: new Date(`1993 Dec 17`), rep:29, ind:49, dem:79},
  {start: new Date(`1993 Dec 4`), rep:24, ind:53, dem:76},
  {start: new Date(`1993 Nov 19`), rep:23, ind:44, dem:78},
  {start: new Date(`1993 Nov 15`), rep:23, ind:47, dem:77},
  {start: new Date(`1993 Nov 2`), rep:19, ind:42, dem:74},
  {start: new Date(`1993 Oct 28`), rep:21, ind:45, dem:74},
  {start: new Date(`1993 Oct 13`), rep:21, ind:42, dem:77},
  {start: new Date(`1993 Oct 8`), rep:26, ind:49, dem:73},
  {start: new Date(`1993 Sep 24`), rep:29, ind:52, dem:81},
  {start: new Date(`1993 Sep 13`), rep:21, ind:45, dem:71},
  {start: new Date(`1993 Sep 10`), rep:16, ind:43, dem:75},
  {start: new Date(`1993 Aug 23`), rep:20, ind:42, dem:70},
  {start: new Date(`1993 Aug 8`), rep:14, ind:37, dem:73},
  {start: new Date(`1993 Jul 19`), rep:22, ind:34, dem:67},
  {start: new Date(`1993 Jul 9`), rep:19, ind:41, dem:77},
  {start: new Date(`1993 Jun 29`), rep:23, ind:39, dem:74},
  {start: new Date(`1993 Jun 18`), rep:15, ind:31, dem:65},
  {start: new Date(`1993 Jun 5`), rep:18, ind:28, dem:63},
  {start: new Date(`1993 May 21`), rep:20, ind:39, dem:69},
  {start: new Date(`1993 May 10`), rep:22, ind:42, dem:71},
  {start: new Date(`1993 Apr 22`), rep:25, ind:53, dem:82},
  {start: new Date(`1993 Mar 29`), rep:23, ind:47, dem:80},
  {start: new Date(`1993 Mar 12`), rep:27, ind:49, dem:80},
  {start: new Date(`1993 Feb 26`), rep:33, ind:55, dem:84},
  {start: new Date(`1993 Feb 12`), rep:24, ind:49, dem:74},
  {start: new Date(`1993 Jan 29`), rep:29, ind:51, dem:73},
  {start: new Date(`1993 Jan 24`), rep:33, ind:54, dem:79},
]

const clintonPartyData = {
  president: `Bill Clinton`,
  party: `Democrat`,
  chart: Object.assign({}, approvalChartDefault, {title: {text: `Presidential Approval Poll by party for Bill Clinton`,}}),
}

export {clintonParty, clintonPartyData}
