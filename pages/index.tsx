import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
// import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head full-width>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-slate-700 py-1 full-width">
        <Prose>
          <h1 className="text-5xl text-slate-50 text-center font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          <p className="text-l">
          Introducing DIGIERA, a groundbreaking collection of 3333 algorithmically generated NFTs that will redefine the very essence of digital art. Immerse yourself in a world where art and technology collide, as each piece within this collection is meticulously crafted through cutting-edge algorithms and stored securely on the revolutionary Zksync era.
          <br/>
          </p>
        </Prose>
      </div>

      <div className="bg-slate-800 py-4 full-width">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="text-center bg-slate-700 py-3" >
      <Prose>
        <p className='list-gift hover:text-fuchsia-400 text-slate-300 full-width'>
          <b className='text-black hover:text-fuchsia-500 full-width'>Special Thanks To Our Community</b>
          <br/>Don't miss your chance to own a piece of this groundbreaking collection. Immerse yourself in the revolutionary blend of algorithmic creativity and secure blockchain technology that DIGIERA represents. Whether you're an art connoisseur or a tech enthusiast, these NFTs are an opportunity to own a slice of digital history while embracing the future of artistic expression. Welcome to the world of DIGIERA
          where artistry, innovation, and individuality intertwine.
        </p>
      </Prose>
      </div>

      {/* <div className="bg-slate-700 py-4">
        <Prose>
          <Faq />
        </Prose>
      </div> */}

      <div className="bg-slate-800 py-4 full-width">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      {/* <div className="bg-gray-700 py-4">
        <Prose>
          <Team />
        </Prose>
      </div> */}
    </Layout>
  );
};

export default Home;
