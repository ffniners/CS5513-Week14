// pages/dogs/[id].js
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticPaths() {
  const paths = await getAllIds('dogs');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const itemData = await getData('dogs', params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10, 
  };
}

export default function Dog({ itemData }) {
  const color = itemData.acf && itemData.acf.color ? itemData.acf.color : 'No color specified';
  const earSize = itemData.acf && itemData.acf.ear_size_ ? itemData.acf.ear_size_ : 'N/A';
  const noseSize = itemData.acf && itemData.acf.nose_size__copy ? itemData.acf.nose_size__copy : 'N/A';
  return (
    <Layout>
      <h1>{itemData.name}</h1>
      <h6 className="card-subtitle mb-2 text-muted">{itemData.post_title}</h6>
       <div>Color: {color}</div>
       <div>Ear Size: {earSize}</div>
       <div>Nose Size: {noseSize}</div>
      <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
    </Layout>
  );
}
