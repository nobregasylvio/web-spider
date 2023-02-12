const rp = require('request-promise');
const cheerio = require('cheerio')

const url = 'https://devgo.com.br';

const options = {
  uri: url,
  transform: function(body) {
    return cheerio.load(body)
  }
}

rp(options).then(($) => {
  $('.blog-article-card-title').each((i, item) => {
    const base = $(item).find('a');
    const title = base.text();
    let link = base.attr().href;
    if (!link.includes(url)) link = url + link
    console.log({title, link})
  })
})