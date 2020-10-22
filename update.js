const fs = require('fs-extra');
const path = require('path');
const request = require('request');

async function req(url, headers) {
  return new Promise((resolve, reject) => {
    request.get(
      url,
      { headers: { 'User-Agent': 'node-cli', ...(headers || {}) } },
      (err, response, body) => {
        console.log('err', err, 'response', response);
        if (err !== null) {
          return reject(err);
        }
        return resolve(JSON.parse(body));
      });
  });
}

function state(article) {
  return article.state === 'open'
    ? ' (WIP)'
    : '';
}

function time(article) {
  return new Date(article['updated_at']).toGMTString();
}

function makeTOC(articles) {
  const groups = articles.reduce((prev, article) => {
    const categories = article.labels.filter(label => label.name !== 'Article');
    categories.forEach(cat => {
      if (prev[cat.name] === undefined) {
        prev[cat.name] = [];
      }
      prev[cat.name].push(article);
    });
    return prev;
  }, {});

  let res = `---\nlayout: default\ntitle: Articles\n---\n` + '# Articles\n';

  Object.keys(groups).forEach(group => {
    res += `## ${group}\n`
        + groups[group].map(article =>
          `[${article.title}](articles/${article.title}.md)${state(article)} by ${article.user.login} (Last update: ${time(article)})`)
          .join('\n')
        + '\n\n'
        + '[API Reference](api.html)'
        + '\n\n'
    ;
  });

  return res;
}

function makeNav(articles) {
  return '<nav>'
    + articles.map(article => `<a href="articles/${article.title}.md">${article.title}</a>`).join('<br/>')
    + '</nav>';
}

function articleFrame(article) {
  return `---\nlayout: default\ntitle: ${article.title}\n---\n`
    + article.body
    + '\n\n'
    + `[Discuss this article](${article.html_url})`;
}

async function main() {
  const articles = await req('https://api.github.com/repos/Nexus-Mods/vortex-api/issues?labels=Article', {
    labels: 'Article',
  });
  await fs.writeFile(path.join('docs', 'articles.md'), makeTOC(articles));
  await fs.writeFile(path.join('docs', '_includes/navigation.html'), makeNav(articles));
  for (const article of articles) {
    await fs.writeFile(path.join('docs', 'articles', article.title + '.md'), articleFrame(article));
  }
  console.log(articles);
}

main();

