---
title: 'Rendering Markdown'
date: '2020-04-24'
---

To render Markdown content, we use the `remark` library. To install:
`npm install remark remark-html`

Use remark like this:
```
import remark from 'remark'
import html from 'remark-html'

...

const matterResult = matter(<Name of Markdown file>)

const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
```