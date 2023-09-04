import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';

const getEventFile = (fileName: string) =>
  fs.readFileSync(path.resolve('content/writing', `${fileName}.md`), 'utf-8');

const getEvent = (event) => {
  // function that expose helpful callbacks
  // to manipulate the data before convert it into html
  const renderer = new marked.Renderer();

  // parse the md to get front matter
  // and the content without escaping characters
  const { data, content } = grayMatter(event);

  const html = marked(content, { renderer });

  if (html) {
    return { html, ...data };
  } else {
    return data;
  }
};

const getAllEvents = () =>
  fs.readdirSync('content/opps').map((fileName) => {
    const event = fs.readFileSync(
      path.resolve('content/opps', fileName),
      'utf-8'
    );
    return getEvent(event);
  });

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const posts = getAllEvents();
  res.end(JSON.stringify(posts));
}
