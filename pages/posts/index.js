import Head from "next/head";
//import Link from 'next/link'
//import dynamic from "next/dynamic";
import styles from "./posts.module.scss";
import Post from "./components/Post/Post";
import Layout from "../../components/Layout";

/**
 *
 * @param {Static Import} and {Dynamic Import}
 * @returns
 *
 * Page/Components imported directly from 'Import keyword'
 */
// const Header = dynamic(
//   () => import("./components/Header").then((mod) => mod.PostHeader),
//   {
//     loading: () => <p>Loading Header...</p>,
//     ssr: false,
//   }
// );

export default function Posts({ posts }) {
  return (
    <Layout title="Posts">
      <Head>
        <title>Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-fluid">
        <ul className={`row ${styles.posts}`}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={"col-md-3 " + styles.post}>
                <Post {...post} />
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BASE_URL}${process.env.POST_URL}`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

/**
 *
 * @returns If you want to render server side content
 * use "getServerSideProps"
 */
// export async function getServerSideProps(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()
//   return {
//     props: {
//       posts
//     }
//   }
// }
