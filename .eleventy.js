const CleanCSS = require("clean-css");
const postcss = require('postcss')
const precss = require('precss')



  return {
    dir: {
      input: "site",
      output: "dist"
    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/multiverse-icon-set'
  };

};
