var axios  = require('axios');
var toJSON = require('xml2js').parseString;

var url = process.env.GOOGLE_FEED ||'https://news.google.com/news/rss/local/section/geo/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0%20%28Odessa,%20Odessa%20Oblast,%20Ukraine%29?ned=ru_ua&hl=ru&gl=UA';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {
          // create a path for each item based on Medium's guid URL
          result.rss.channel[0].item.forEach(element => {
            var url = element.link[0].split('/');
            element.path = url[url.length-1].split('?')[0];
          });
          resolve({'url': url, 'post': result.rss.channel[0].item});
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
