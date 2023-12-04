/*
import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';
//pages/index.js 

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
    revalidate: 10, // ISR: revalidate the data every 10 seconds
  };
}



// pages/dog.js

export async function getStaticDogPaths() {
  const paths = await getAllIds('dogs');

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticDogProps({ params }) {
  const itemData = await getData('dogs', params.id);

  return {
    props: {
      itemData,
    },
    revalidate: 10, // ISR: revalidate the data every 10 seconds
  };
}


// pages/birds.js

export async function getStaticBirdPaths() {
  const paths = await getAllIds('birds');

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticBirdProps({ params }) {
  const itemData = await getData('birds', params.id);

  return {
    props: {
      itemData,
    },
    revalidate: 10, // ISR: revalidate the data every 10 seconds
  };
}



import Layout from '../../components/layout';

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: itemData.post_content }} />
         
        </div>
      </article>
    </Layout>
  );
}



*/

/*
<a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a> */ 

