// pages/birds/[id].js
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticPaths() {
  const paths = await getAllIds('birds');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const itemData = await getData('birds', params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10, 
  };
}

export default function Cat_Breeds({ itemData }) {
  const wing_span_cm = itemData.acf && itemData.acf.wing_span_cm ? itemData.acf.wing_span_cm : 'N/A';
  const range_km = itemData.acf && itemData.acf.range_km ? itemData.acf.range_km : 'N/A';
  const lifespan_years = itemData.acf && itemData.acf.lifespan_years ? itemData.acf.lifespan_years : 'N/A';
  return (
    <Layout>
      <h1>{itemData.name}</h1>
      <h6 className="card-subtitle mb-2 text-muted">{itemData.post_title}</h6>
       <div>Wing Span (cm): {wing_span_cm}</div>
       <div>Range (km): {range_km}</div>
       <div>Lifespan (years): {lifespan_years}</div>
      <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
   
    </Layout>
  );
}