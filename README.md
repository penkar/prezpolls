# PrezPolls
Small site built using NPM, React.js and Highcharts primarily in order to display Gallup polling data for Presidents Clinton, Bush W., Obama, and Trump.

All information here in was gathered from the [Gallup.com](http://news.gallup.com/poll/203198/presidential-approval-ratings-donald-trump.aspx) public website. 

## Update

Gallup will be changing their polling data starting in 2019. Instead of weekly data points they will be switching to monthly data points. This will make lines for Trump far more orderly than other presidents.

### How to run?
1. Navigate to your development folder.
1. Clone the repository: `git clone https://github.com/penkar/prezpolls.git` .
1. Run `cd prezpolls` .
1. Run `npm install` .
1. Run `npm run dev` .
1. In your browser open `localhost:8000` .
1. Profit.

### Deploying to gh-pages (Needs Improvement).
1. Run `npm start` .
1. Run `cp index.html ./dist` .
1. Remove `dist/` from index.html .
1. Run `cp -r dist/ ../gh-pages-prez-polls` .
1. Run `cd ../gh-pages-prez-polls` . 
1. Run `git init` .
1. Run `git add .` .
1. Run `git commit -m "GH-Pages commit"` .
1. Run `git remote add gh-pages git@github.com:penkar/prezpolls.git` .
1. Run `git push origin gh-pages --force`

