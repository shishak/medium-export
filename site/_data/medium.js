
var axios  = require('axios');
var toJSON = require('xml2js').parseString;

var url = process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
      var url = this; 
    parseString(response.data, function (err, result) {
      url.events = result
    });     
      })
      .catch((error) => {
        reject(error);
      });
  });
};
