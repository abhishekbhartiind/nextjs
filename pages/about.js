import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
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
