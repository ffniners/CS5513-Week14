import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <h1>Welcome to My Site</h1>
      <p>This is a great place to start exploring our content.</p>
      <div>
        <h2>Categories</h2>
        <ul>
          <li>
            <Link legacyBehavior href="/cat_breeds">
              <a>Cat Breeds</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/dogs">
              <a>Dogs</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/birds">
              <a>Birds</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
