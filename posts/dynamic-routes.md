---
title: "Dynamic Routes"
date: "2020-04-24"
---

Next.js allows you to statically generate pages with paths that depend on external data which enables **dynamic URLs** in Next.js
![alt diagram](https://nextjs.org/static/images/learn/dynamic-routes/page-path-external-data.png)


### How to Statically Generate Pages with Dynamic Routes
- Create a page that begins with `[` and ends with `]`. These pages are considered dynamic pages in Next.js
- Write code that will render a page
- Create and export a function called `getStaticPaths` from the dynamic page
- Implement and export a `getStaticProps` method to fetch necessary data for the dynamic page
![alt dynamic routes diagram](https://nextjs.org/static/images/learn/dynamic-routes/how-to-dynamic-routes.png)