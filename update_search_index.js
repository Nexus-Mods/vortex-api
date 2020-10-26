const lunr = require('lunr');
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

function pad0(input) {
  return ('0' + input).slice(-2);
}

// 2020/09/05/Project-Management.html
// 2020-9-4-UI.md
function postId(input) {
  const segs = input.split('-');
  let fileName = segs.slice(3).join('-');
  fileName = path.basename(fileName, path.extname(fileName));
  return path.join(segs[0], pad0(segs[1]), pad0(segs[2]), fileName + '.html');
}

async function addPosts(idx) {
  const posts = await fs.readdir(path.join('docs', '_posts'));
  const res = [];
  for (const post of posts) {
    const dat = await fs.readFile(path.join('docs', '_posts', post), { encoding: 'utf8' });
    const gm = matter(dat);
    res.push({
      id: postId(post),
      title: gm.data.title,
      author: gm.data.author,
      content: gm.content,
    });
  }
  return res;
}

function refId(input)  {
  const segs = input.split(path.sep);
  segs[segs.length - 1] = path.basename(input, path.extname(input)) + '.html';
  return path.join(...segs.slice(1));
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
      id: refId(file),
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

