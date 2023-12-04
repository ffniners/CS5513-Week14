// pages/cat_breeds/[id].js
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticPaths() {
  const paths = await getAllIds('cat_breeds');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const itemData = await getData('cat_breeds', params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10, 
  };
}

export default function Cat_Breeds({ itemData }) {
  const height_at_shoulder = itemData.acf && itemData.acf.height_at_shoulder_ ? itemData.acf.height_at_shoulder_ : 'N/A';
  const vertical_jump_cm = itemData.acf && itemData.acf.vertical_jump_cm ? itemData.acf.vertical_jump_cm : 'N/A';
  const Striped = itemData.acf && itemData.acf.Striped ? itemData.acf.Striped : 'N/A';
  return (
    <Layout>
      <h1>{itemData.name}</h1>
      <h6 className="card-subtitle mb-2 text-muted">{itemData.post_title}</h6>
       <div>Height at Shoulder : {height_at_shoulder}</div>
       <div>Vertical Jump (cm): {vertical_jump_cm}</div>
       <div>Striped: {Striped}</div>
      <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />

    </Layout>
  );
}