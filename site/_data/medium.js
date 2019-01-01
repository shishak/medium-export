var axios  = require('axios');
var toJSON = require('xml2js').parseString;

var url = process.env.MEDIUM_FEED ||'https://news.google.com/news/rss?ned=ru_ua&gl=UA&hl=ru&count=20';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {
          // create a path for each item based on Medium's guid URL
          result.rss.entry[0].title.forEach(element => {
            var url = element.link[0].split('/');
            element.path = url[url.length-1].split('?')[0];
          });
          resolve({'url': url, 'posts': result.rss.channel[0].item});
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
