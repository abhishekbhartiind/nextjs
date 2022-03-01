import Link from "next/link";
import Layout from "../components/Layout";

const About = (props) => {
  console.log(props);
  return (
    <Layout title="About">
      <p>About: A javascript programming</p>
      <Link href="/">
        <a className="container">Go to the homepage</a>
      </Link>
      <div className="container">
        <img src="/images/night.jpg" alt="..." width="1200px" height="600px" />
      </div>
    </Layout>
  );
};

About.getInitialProps = async (props) => {
  const data = await fetch("https://api.github.com/users/abhishekbhartiind");
  const response = await data.json();

  return {
    props: {
      user: response,
    },
  };
};

export default About;
