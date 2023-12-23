# PrezPolls

Small site built using NPM, React.js and Highcharts primarily in order to display Gallup polling data for Presidents Clinton, Bush W., Obama, and Trump.

All information here in was gathered from the [Gallup.com](http://news.gallup.com/poll/203198/presidential-approval-ratings-donald-trump.aspx) public website.

## Update

Gallup will be changing their polling data starting in 2019. Instead of weekly data points they will be switching to monthly data points. This will make lines for Trump far more orderly than other presidents.

### How to run?

1. Navigate to your development folder.
1. Clone the repository: `git clone git@github.com:penkar/prezpolls.git` .
1. Run `cd prezpolls` .
1. Run `yarn install` .
1. Run `yarn start` .
1. In your browser open `localhost:8000` .
1. Profit.

### Deploying to gh-pages (Needs Improvement).

1. Run `yarn build` .
1. Run `cd build` .
1. Links need to be updated to /prezpolls in index.html.
1. Run `git init` .
1. Run `git checkout -b gh-pages`
1. Run `git add .` .
1. Run `git commit -m "GH-Pages commit"` .
1. Run `git remote add gh-pages git@github.com:penkar/prezpolls.git` .
1. Run `git push gh-pages --force`
