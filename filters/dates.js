/*
  A date formatter filter for Nunjucks
*/
module.exports = function(date) {
  var ordinal = {
    1 : "st",
    2 : "nd",
    3 : "rd",
    21 : "st",
    22 : "nd",
    23 : "rd",
    31 : "st"
  };
  var d = new Date(date);
  return d.getDate() + (ordinal[d.getDate()] || "th") + " " +d.getHours();
}
