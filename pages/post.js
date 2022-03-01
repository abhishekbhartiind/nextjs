import Layout from "../components/Layout";
import Link from "next/link";

const Post = ({ props: postUrl }) => {
  return (
    <Layout title={postUrl}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip Lorem, Lorem ipsum dolor
        sit amet, consectetur adip Lorem, Lorem ipsum dolor sit amet,
        consectetur adip Lorem, Lorem ipsum dolor sit amet, consectetur adip
        Lorem
      </p>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  return {
    props: query.title,
  };
};

export default Post;
