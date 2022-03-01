import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="Blog">
    <ul>
      <li>
        <Link href="/post?title=React">
          <a>Blogs 1</a>
        </Link>
      </li>
      <li>
        <Link href="/post?title=Next">
          <a>Blogs 2</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
