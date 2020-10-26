const lunr = require('lunr');
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

async function addPosts(idx) {
  const posts = await fs.readdir(path.join('docs', '_posts'));
  const res = [];
  for (const post of posts) {
    const dat = await fs.readFile(path.join('docs', '_posts', post), { encoding: 'utf8' });
    const gm = matter(dat);
    res.push({
      id: post,
      title: gm.data.title,
      author: gm.data.author,
      content: gm.content,
    });
  }
  return res;
}

async function addReference(idx) {
  const files = [].concat(
    (await fs.readdir(path.join('docs', 'api', 'classes'))).map(name => path.join('docs', 'api', 'classes', name)),
    (await fs.readdir(path.join('docs', 'api', 'interfaces'))).map(name => path.join('docs', 'api', 'interfaces', name)),
    path.join('docs', 'api', 'globals.md'),
  );

  const res = [];
  for (const file of files) {
    const dat = await fs.readFile(file, { encoding: 'utf8' });
    res.push({
      id: file,
      title: path.basename(file, path.extname(file)),
      author: 'Reference',
      content: dat,
    });
  }
  return res;
}

async function main() {
  const entries = [].concat(
    await addPosts(this),
    await addReference(this),
  );
  console.log('# search entries', entries.length);
  const idx = lunr(function() {
    this.ref('id');
    this.field('author');
    this.field('title');
    this.field('content');

    entries.forEach(entry => this.add(entry));
  });


  const idxStr = JSON.stringify(idx);
  await fs.writeFile(path.join('docs', 'js', 'search_index.js'), '(function() { window.search_index = ' + idxStr + ' })()');
}

main();

