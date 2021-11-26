# NextJS structure vs MERN stack architecture

## Dynamic Routing
`/pages/members/[names].js`
## Directory based routing
> file-system based router built on the concept of pages.
> API Routes as an independent service, which is enabled through defining them as [Serverless Functions] (https://vercel.com/docs/concepts/functions/introduction#serverless-functions)


When you hit that route it only loads that "js", rather than servingup the entire client side bundle on frontend, in nextJS, each one of these serverless functions are independent and smaller sizes.



### This repo is specifically built to showcase the structural advantages nextJS provides over MERN stack