import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({ title }) => {
  return (
    <li>
      <Link as="react-post" href={`/post?title=${title}`}>
        <a>{title} Blogs</a>
      </Link>
    </li>
  );
};

export default () => (
  <Layout title="Blog">
    <ul>
      <PostLink title="React" />
      <PostLink title="Next" />
      <PostLink title="CSS" />
      <PostLink title="NFTS" />
    </ul>
  </Layout>
);
