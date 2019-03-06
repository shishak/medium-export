const CleanCSS = require("clean-css");
const postcss = require('postcss')
const precss = require('precss')



module.exports = function(eleventyConfig) {	


  eleventyConfig.addFilter("date", require("./filters/dates.js") );	


   return {	  return {
    dir: {	    dir: {
      input: "site",	      input: "site",
      output: "dist",	      output: "dist"
      data: "_data"	
    },	    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/multiverse-icon-set'	    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/multiverse-icon-set'
  };	  };
