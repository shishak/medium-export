/*
  A date formatter filter for Nunjucks
*/
module.exports = function(date) {
  var month = [
    "January",
    "February",
    "Березня",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
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
  return d.getDate() + " " + (month[d.getMonth()]);
}
