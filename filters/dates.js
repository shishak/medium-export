/*
  A date formatter filter for Nunjucks
*/
module.exports = function(date) {

  var d = new Date(date);
  return month[d.getMonth()] + " " + d.getDate() + (ordinal[d.getDate()] || "th");
}
