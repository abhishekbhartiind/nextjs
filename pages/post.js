import Layout from "../components/Layout";

const Post = ({ props: postUrl }) => {
  return (
    <Layout title={postUrl}>
      <p style={{ width: "80vw" }}>
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
