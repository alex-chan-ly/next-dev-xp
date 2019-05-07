import React from 'react';
import { Notes, Heading, Markdown } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import example from './code-examples/example.md';
const input = '# This is a header\n\nAnd this is a paragraph'
const mdContent = `
# HEADING
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
* Add some \`inline code\` to your sldes!
`
console.log(example)
const one = [
<Heading caps fit size={1} textColor="primary">
Inline Markdown
</Heading>,
<Markdown>{example}</Markdown>
];

export default { one } ;