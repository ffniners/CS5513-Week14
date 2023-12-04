// pages/dogs/index.js
import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedList } from '../../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList('dogs');
  return {
    props: {
      allData
    },
    revalidate: 10 
  };
}

export default function Dogs({ allData }) {
  return (
    <Layout>
      <h1>List of Dogs</h1>
      <div className="list-group">
        {allData.map(({ id, name }) => (
          <Link legacyBehavior key={id} href={`/dogs/${id}`}>
            <a className="list-group-item list-group-item-action">{name}</a>
          </Link>
      
        ))}
      </div>
    </Layout>
  );
}
