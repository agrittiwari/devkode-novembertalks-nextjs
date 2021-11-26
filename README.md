# NextJS structure vs MERN stack architecture

## Dynamic Routing
`/pages/members/[names].js`
## Directory based routing
> file-system based router built on the concept of pages.
> API Routes as an independent service, which is enabled through defining them as [Serverless Functions](https://vercel.com/docs/concepts/functions/introduction#serverless-functions)

## Serververless Function
`/api/members.js`
`/api/members/[member].js`
> When we compile our code, its gonna make a js bundle; for each individual API route and when it gets deployed via [vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 
When you hit that route it only loads that "js", rather than servingup the entire client side bundle on frontend, in nextJS, each one of these serverless functions are independent and smaller sizes.



### This repo is specifically built to showcase the structural advantages nextJS provides over MERN stack