---
title: 'Client-side Rendering & SWR'
date: '2020-04-24'
---

Client-side rendering for statically generating parts of the page that do no require external data. When the page loads, fetch external dat from the client using JavaScript and populat the remaining parts
![alt diagram](https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png)

Works well for use dashboard pages because a dashboard is private, user-specific, and is not relevant to SEO. Data is frequently updated, which requires request-time data fetching


### SWR
React hook for data fetching on the client side which handles caching, revalidation, focus tracking, refetching on interval, and more