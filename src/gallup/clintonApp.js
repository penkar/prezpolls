const clintonApp = [
  {start: new Date(`2001 Jan 10`), app:66, dis:29, neu:5},
  {start: new Date(`2001 Jan 5`), app:65, dis:31, neu:4},
  {start: new Date(`2000 Dec 15`), app:66, dis:32, neu:2},
  {start: new Date(`2000 Dec 2`), app:60, dis:35, neu:5},
  {start: new Date(`2000 Nov 13`), app:63, dis:33, neu:4},
  {start: new Date(`2000 Oct 25`), app:57, dis:38, neu:5},
  {start: new Date(`2000 Oct 6`), app:58, dis:37, neu:5},
  {start: new Date(`2000 Sep 11`), app:60, dis:34, neu:6},
  {start: new Date(`2000 Aug 29`), app:62, dis:35, neu:3},
  {start: new Date(`2000 Aug 18`), app:62, dis:35, neu:3},
  {start: new Date(`2000 Aug 11`), app:58, dis:39, neu:3},
  {start: new Date(`2000 Aug 4`), app:57, dis:40, neu:3},
  {start: new Date(`2000 Jul 25`), app:57, dis:39, neu:4},
  {start: new Date(`2000 Jul 14`), app:59, dis:37, neu:4},
  {start: new Date(`2000 Jul 6`), app:59, dis:36, neu:5},
  {start: new Date(`2000 Jun 22`), app:55, dis:40, neu:5},
  {start: new Date(`2000 Jun 6`), app:60, dis:36, neu:4},
  {start: new Date(`2000 May 18`), app:57, dis:37, neu:6},
  {start: new Date(`2000 May 5`), app:57, dis:36, neu:7},
  {start: new Date(`2000 Apr 28`), app:59, dis:39, neu:2},
  {start: new Date(`2000 Mar 30`), app:62, dis:34, neu:4},
  {start: new Date(`2000 Mar 17`), app:56, dis:39, neu:5},
  {start: new Date(`2000 Mar 10`), app:63, dis:34, neu:3},
  {start: new Date(`2000 Feb 25`), app:57, dis:39, neu:4},
  {start: new Date(`2000 Feb 14`), app:62, dis:34, neu:4},
  {start: new Date(`2000 Feb 4`), app:63, dis:33, neu:4},
  {start: new Date(`2000 Jan 25`), app:64, dis:32, neu:4},
  {start: new Date(`2000 Jan 17`), app:62, dis:35, neu:3},
  {start: new Date(`2000 Jan 13`), app:59, dis:37, neu:4},
  {start: new Date(`2000 Jan 7`), app:63, dis:35, neu:2},
  {start: new Date(`1999 Dec 20`), app:57, dis:36, neu:7},
  {start: new Date(`1999 Dec 9`), app:56, dis:41, neu:3},
  {start: new Date(`1999 Nov 18`), app:59, dis:36, neu:5},
  {start: new Date(`1999 Nov 4`), app:58, dis:38, neu:4},
  {start: new Date(`1999 Oct 21`), app:59, dis:36, neu:5},
  {start: new Date(`1999 Oct 8`), app:56, dis:39, neu:5},
  {start: new Date(`1999 Sep 23`), app:59, dis:38, neu:3},
  {start: new Date(`1999 Sep 10`), app:60, dis:38, neu:2},
  {start: new Date(`1999 August`), app:60, dis:35, neu:5},
  {start: new Date(`1999 Aug 16`), app:59, dis:36, neu:5},
  {start: new Date(`1999 Aug 3`), app:60, dis:35, neu:5},
  {start: new Date(`1999 Jul 22`), app:64, dis:31, neu:5},
  {start: new Date(`1999 Jul 16`), app:58, dis:38, neu:4},
  {start: new Date(`1999 Jul 13`), app:59, dis:37, neu:4},
  {start: new Date(`1999 Jun 25`), app:57, dis:41, neu:2},
  {start: new Date(`1999 Jun 11`), app:60, dis:37, neu:3},
  {start: new Date(`1999 Jun 4`), app:60, dis:35, neu:5},
  {start: new Date(`1999 May 23`), app:53, dis:42, neu:5},
  {start: new Date(`1999 May 7`), app:60, dis:35, neu:5},
  {start: new Date(`1999 Apr 30`), app:60, dis:36, neu:4},
  {start: new Date(`1999 Apr 26`), app:60, dis:35, neu:5},
  {start: new Date(`1999 Apr 13`), app:60, dis:36, neu:4},
  {start: new Date(`1999 Apr 6`), app:59, dis:35, neu:6},
  {start: new Date(`1999 Mar 30`), app:64, dis:32, neu:4},
  {start: new Date(`1999 Mar 19`), app:64, dis:33, neu:3},
  {start: new Date(`1999 Mar 12`), app:62, dis:35, neu:3},
  {start: new Date(`1999 Mar 5`), app:68, dis:28, neu:4},
  {start: new Date(`1999 Feb 26`), app:66, dis:31, neu:3},
  {start: new Date(`1999 Feb 19`), app:66, dis:30, neu:4},
  {start: new Date(`1999 Feb 12`), app:68, dis:30, neu:2},
  {start: new Date(`1999 Feb 4`), app:65, dis:33, neu:2},
  {start: new Date(`1999 Jan 22`), app:69, dis:29, neu:2},
  {start: new Date(`1999 Jan 15`), app:69, dis:29, neu:2},
  {start: new Date(`1999 Jan 8`), app:67, dis:30, neu:3},
  {start: new Date(`1998 Dec 19`), app:73, dis:25, neu:2},
  {start: new Date(`1998 Dec 15`), app:63, dis:33, neu:4},
  {start: new Date(`1998 Dec 12`), app:64, dis:34, neu:2},
  {start: new Date(`1998 Dec 4`), app:66, dis:30, neu:4},
  {start: new Date(`1998 Nov 20`), app:66, dis:30, neu:4},
  {start: new Date(`1998 Nov 13`), app:66, dis:31, neu:3},
  {start: new Date(`1998 Oct 29`), app:66, dis:30, neu:4},
  {start: new Date(`1998 Oct 23`), app:65, dis:32, neu:3},
  {start: new Date(`1998 Oct 9`), app:65, dis:32, neu:3},
  {start: new Date(`1998 Oct 6`), app:63, dis:34, neu:3},
  {start: new Date(`1998 Sep 23`), app:66, dis:31, neu:3},
  {start: new Date(`1998 Sep 14`), app:63, dis:35, neu:2},
  {start: new Date(`1998 Sep 11`), app:63, dis:34, neu:3},
  {start: new Date(`1998 Aug 21`), app:62, dis:35, neu:3},
  {start: new Date(`1998 Aug 10`), app:65, dis:30, neu:5},
  {start: new Date(`1998 Aug 7`), app:64, dis:32, neu:4},
  {start: new Date(`1998 Jul 13`), app:63, dis:31, neu:6},
  {start: new Date(`1998 Jul 7`), app:61, dis:34, neu:5},
  {start: new Date(`1998 Jun 22`), app:60, dis:34, neu:6},
  {start: new Date(`1998 Jun 5`), app:60, dis:34, neu:6},
  {start: new Date(`1998 May 8`), app:64, dis:31, neu:5},
  {start: new Date(`1998 Apr 17`), app:63, dis:31, neu:6},
  {start: new Date(`1998 Mar 20`), app:66, dis:28, neu:6},
  {start: new Date(`1998 Mar 6`), app:63, dis:31, neu:6},
  {start: new Date(`1998 Feb 20`), app:66, dis:29, neu:5},
  {start: new Date(`1998 Feb 13`), app:66, dis:30, neu:4},
  {start: new Date(`1998 Jan 30`), app:69, dis:28, neu:3},
  {start: new Date(`1998 Jan 25`), app:59, dis:37, neu:4},
  {start: new Date(`1998 Jan 24`), app:60, dis:35, neu:5},
  {start: new Date(`1998 Jan 23`), app:58, dis:36, neu:6},
  {start: new Date(`1998 Jan 16`), app:60, dis:30, neu:10},
  {start: new Date(`1998 Jan 6`), app:59, dis:32, neu:9},
  {start: new Date(`1997 Dec 18`), app:56, dis:36, neu:8},
  {start: new Date(`1997 Nov 21`), app:61, dis:30, neu:9},
  {start: new Date(`1997 Nov 6`), app:59, dis:31, neu:10},
  {start: new Date(`1997 Oct 27`), app:59, dis:32, neu:9},
  {start: new Date(`1997 Oct 3`), app:55, dis:36, neu:9},
  {start: new Date(`1997 Sep 25`), app:58, dis:33, neu:9},
  {start: new Date(`1997 Sep 6`), app:61, dis:28, neu:11},
  {start: new Date(`1997 Aug 22`), app:60, dis:34, neu:6},
  {start: new Date(`1997 Aug 12`), app:61, dis:32, neu:7},
  {start: new Date(`1997 Jul 25`), app:58, dis:34, neu:8},
  {start: new Date(`1997 Jun 26`), app:55, dis:36, neu:9},
  {start: new Date(`1997 May 30`), app:57, dis:35, neu:8},
  {start: new Date(`1997 May 6`), app:57, dis:35, neu:8},
  {start: new Date(`1997 Apr 18`), app:54, dis:37, neu:9},
  {start: new Date(`1997 Mar 24`), app:59, dis:35, neu:6},
  {start: new Date(`1997 Feb 24`), app:57, dis:33, neu:10},
  {start: new Date(`1997 Jan 30`), app:60, dis:31, neu:9},
  {start: new Date(`1997 Jan 10`), app:62, dis:31, neu:7},
  {start: new Date(`1997 Jan 3`), app:58, dis:35, neu:7},
  {start: new Date(`1996 Dec 9`), app:58, dis:34, neu:8},
  {start: new Date(`1996 Nov 21`), app:58, dis:35, neu:7},
  {start: new Date(`1996 Oct 26`), app:54, dis:36, neu:10},
  {start: new Date(`1996 Oct 2`), app:57, dis:36, neu:7},
  {start: new Date(`1996 Oct 1`), app:58, dis:34, neu:8},
  {start: new Date(`1996 Sep 7`), app:60, dis:31, neu:9},
  {start: new Date(`1996 Aug 30`), app:60, dis:33, neu:7},
  {start: new Date(`1996 Aug 23`), app:53, dis:39, neu:8},
  {start: new Date(`1996 Aug 16`), app:52, dis:39, neu:9},
  {start: new Date(`1996 Aug 5`), app:57, dis:36, neu:7},
  {start: new Date(`1996 Jul 25`), app:58, dis:35, neu:7},
  {start: new Date(`1996 Jul 18`), app:57, dis:35, neu:8},
  {start: new Date(`1996 Jun 27`), app:52, dis:42, neu:6},
  {start: new Date(`1996 Jun 18`), app:58, dis:37, neu:5},
  {start: new Date(`1996 May 28`), app:53, dis:38, neu:9},
  {start: new Date(`1996 May 9`), app:55, dis:39, neu:6},
  {start: new Date(`1996 Apr 25`), app:56, dis:37, neu:7},
  {start: new Date(`1996 Apr 9`), app:54, dis:40, neu:6},
  {start: new Date(`1996 Mar 15`), app:52, dis:39, neu:9},
  {start: new Date(`1996 Mar 8`), app:54, dis:37, neu:9},
  {start: new Date(`1996 Feb 23`), app:53, dis:40, neu:7},
  {start: new Date(`1996 Jan 26`), app:52, dis:42, neu:6},
  {start: new Date(`1996 Jan 12`), app:46, dis:47, neu:7},
  {start: new Date(`1996 Jan 5`), app:42, dis:49, neu:9},
  {start: new Date(`1995 Dec 15`), app:51, dis:44, neu:5},
  {start: new Date(`1995 Nov 17`), app:53, dis:38, neu:9},
  {start: new Date(`1995 Nov 6`), app:52, dis:41, neu:7},
  {start: new Date(`1995 Oct 19`), app:49, dis:40, neu:11},
  {start: new Date(`1995 Oct 5`), app:46, dis:42, neu:12},
  {start: new Date(`1995 Sep 22`), app:48, dis:44, neu:8},
  {start: new Date(`1995 Sep 14`), app:44, dis:44, neu:12},
  {start: new Date(`1995 Aug 28`), app:46, dis:43, neu:11},
  {start: new Date(`1995 Aug 11`), app:46, dis:44, neu:10},
  {start: new Date(`1995 Aug 4`), app:46, dis:42, neu:12},
  {start: new Date(`1995 Jul 20`), app:46, dis:44, neu:10},
  {start: new Date(`1995 Jul 7`), app:48, dis:42, neu:10},
  {start: new Date(`1995 Jun 5`), app:47, dis:42, neu:11},
  {start: new Date(`1995 May 11`), app:51, dis:42, neu:7},
  {start: new Date(`1995 Apr 21`), app:51, dis:39, neu:10},
  {start: new Date(`1995 Apr 17`), app:46, dis:45, neu:9},
  {start: new Date(`1995 Apr 5`), app:47, dis:45, neu:8},
  {start: new Date(`1995 Mar 27`), app:44, dis:47, neu:9},
  {start: new Date(`1995 Mar 17`), app:46, dis:45, neu:9},
  {start: new Date(`1995 Feb 24`), app:42, dis:48, neu:10},
  {start: new Date(`1995 Feb 3`), app:49, dis:44, neu:7},
  {start: new Date(`1995 Jan 16`), app:47, dis:45, neu:8},
  {start: new Date(`1994 Dec 28`), app:40, dis:52, neu:8},
  {start: new Date(`1994 Dec 16`), app:42, dis:53, neu:5},
  {start: new Date(`1994 Dec 2`), app:42, dis:50, neu:8},
  {start: new Date(`1994 Nov 28`), app:43, dis:49, neu:8},
  {start: new Date(`1994 Nov 2`), app:46, dis:46, neu:8},
  {start: new Date(`1994 Oct 22`), app:48, dis:46, neu:6},
  {start: new Date(`1994 Oct 18`), app:41, dis:52, neu:7},
  {start: new Date(`1994 Oct 7`), app:42, dis:52, neu:6},
  {start: new Date(`1994 Sep 23`), app:44, dis:51, neu:5},
  {start: new Date(`1994 Sep 16`), app:42, dis:50, neu:8},
  {start: new Date(`1994 Sep 6`), app:39, dis:54, neu:7},
  {start: new Date(`1994 Aug 15`), app:39, dis:52, neu:9},
  {start: new Date(`1994 Aug 8`), app:43, dis:48, neu:9},
  {start: new Date(`1994 Jul 15`), app:42, dis:49, neu:9},
  {start: new Date(`1994 Jul 1`), app:43, dis:48, neu:9},
  {start: new Date(`1994 Jun 25`), app:44, dis:47, neu:9},
  {start: new Date(`1994 Jun 11`), app:49, dis:44, neu:7},
  {start: new Date(`1994 Jun 3`), app:46, dis:47, neu:7},
  {start: new Date(`1994 May 20`), app:51, dis:42, neu:7},
  {start: new Date(`1994 Apr 22`), app:48, dis:44, neu:8},
  {start: new Date(`1994 Apr 16`), app:51, dis:41, neu:8},
  {start: new Date(`1994 Mar 28`), app:51, dis:42, neu:7},
  {start: new Date(`1994 Mar 25`), app:52, dis:41, neu:7},
  {start: new Date(`1994 Mar 11`), app:50, dis:41, neu:9},
  {start: new Date(`1994 Mar 7`), app:50, dis:42, neu:8},
  {start: new Date(`1994 Feb 26`), app:53, dis:41, neu:6},
  {start: new Date(`1994 Jan 28`), app:58, dis:35, neu:7},
  {start: new Date(`1994 Jan 15`), app:54, dis:38, neu:8},
  {start: new Date(`1994 Jan 6`), app:54, dis:38, neu:8},
  {start: new Date(`1993 Dec 17`), app:54, dis:40, neu:6},
  {start: new Date(`1993 Dec 4`), app:52, dis:38, neu:10},
  {start: new Date(`1993 Nov 19`), app:48, dis:43, neu:9},
  {start: new Date(`1993 Nov 15`), app:50, dis:43, neu:7},
  {start: new Date(`1993 Nov 2`), app:48, dis:45, neu:7},
  {start: new Date(`1993 Oct 28`), app:48, dis:45, neu:7},
  {start: new Date(`1993 Oct 13`), app:47, dis:44, neu:9},
  {start: new Date(`1993 Oct 8`), app:50, dis:42, neu:8},
  {start: new Date(`1993 Sep 24`), app:56, dis:36, neu:8},
  {start: new Date(`1993 Sep 13`), app:46, dis:43, neu:11},
  {start: new Date(`1993 Sep 10`), app:47, dis:42, neu:11},
  {start: new Date(`1993 Aug 23`), app:44, dis:47, neu:9},
  {start: new Date(`1993 Aug 8`), app:44, dis:48, neu:8},
  {start: new Date(`1993 Jul 19`), app:41, dis:49, neu:10},
  {start: new Date(`1993 Jul 9`), app:45, dis:48, neu:7},
  {start: new Date(`1993 Jun 29`), app:46, dis:47, neu:7},
  {start: new Date(`1993 Jun 18`), app:39, dis:50, neu:11},
  {start: new Date(`1993 Jun 5`), app:37, dis:49, neu:14},
  {start: new Date(`1993 May 21`), app:44, dis:46, neu:10},
  {start: new Date(`1993 May 10`), app:45, dis:44, neu:11},
  {start: new Date(`1993 Apr 22`), app:55, dis:37, neu:8},
  {start: new Date(`1993 Mar 29`), app:52, dis:37, neu:11},
  {start: new Date(`1993 Mar 12`), app:53, dis:34, neu:13},
  {start: new Date(`1993 Feb 26`), app:59, dis:29, neu:12},
  {start: new Date(`1993 Feb 12`), app:51, dis:34, neu:15},
  {start: new Date(`1993 Jan 29`), app:54, dis:30, neu:16},
  {start: new Date(`1993 Jan 24`), app:58, dis:20, neu:22},
]

const clintonAppData = {
  president: `Bill Clinton`,
  party: `Democrat`,
}

export {clintonApp, clintonAppData}
