import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Next learning</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hire">
        <a>Hire</a>
      </Link>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-size: 110%;
        background: #f0f0f0;
      }
      h1,
      p {
        text-align: center;
        font-family: "Roboto", sans-serif;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);
