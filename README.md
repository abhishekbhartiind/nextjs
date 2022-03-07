## Next JS

1. _Server Side Rendering_

- SEO Crawlers can read the site content easily
- Prerendered from Server Side or Static Site Configuration
- Easy Concept for Page Creation
- No Configuration for routing
- No Setup for SSR

2. _Pages_
3. _Routings_
4. _getInitialProps_
5. _Pre-rendering_
6. _getStaticProps_
7. _getServerSideProps_
8. _getStaticPaths_

## _getInitialProps_

- getInitialProps is an async function that can be added to any page as a static method.
- getInitialProps is used to asynchronously fetch some data, which then populates props.
- Data returned from getInitialProps is serialized when server rendering, similar to what JSON.stringify does. Make sure the returned object from getInitialProps is a plain Object and not using Date, Map or Set.
- getInitialProps receives a single argument called context, it's an object with the following properties:

```bash

function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

## _Pre-rendering_

Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

_Static Generation_ and _Server-side Rendering_.
The difference is in when it generates the HTML for a page.

- Static Generation (Recommended): The HTML is generated at build time and will be reused on each request.
- Server-side Rendering: The HTML is generated on each request.

## _getStaticProps_

It needs to define a list of paths that have to be rendered to HTML at build time.
If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

```bash
export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}
```

### learning nextjs

steps:

- project setup
- nprogress
- \_document file
- \_error file
- getInitialProps
- dynamic routes
