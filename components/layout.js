
import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>My Next.js Site</title>
        <meta name="description" content="A Next.js site" />
      </Head>
      <header>
        <nav>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
          <Link legacyBehavior href="/dogs">
            <a>Dogs</a>
          </Link>
          <Link legacyBehavior href="/birds">
            <a>Birds</a>
          </Link>
          <Link legacyBehavior href="/cat_breeds">
            <a>Cat Breeds</a>
          </Link>
          {/* Add additional navigation links as needed */}
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <Link legacyBehavior href="/">
          <a className="btn btn-primary mt-3">← Back to Home</a>
        </Link>
      )}
      <footer>
        <p>© 2023 My Next.js Site</p>
      </footer>
    </div>
  );
}



