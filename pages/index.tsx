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
      <Head>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-slate-700 py-1">
        <Prose>
          <h1 className="text-5xl text-slate-50 text-center font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          <p className="text-l">
          MadDog is a brand new collection of 3333 algorithmically generated NFTs stored on Emerald Blockchain.
          <br/><p className='text-slate-300'>
We will put 50% ROSE from sales to farm YUZU. 50% of farmed YUZU will reinvesting to gain more farm, the others will be distributed to MadDog NFTs holder through airdrops, giveaways, competitions, and more ...
          </p><br/>
          </p>
        </Prose>
      </div>

      <div className="text-center bg-slate-700 py-3" >
      <Prose>
        <p className='list-gift hover:text-fuchsia-400 text-slate-300'>
          <b className='text-black hover:text-fuchsia-500 '>Special Thanks To Our Community</b>
          <br/>We have total 113 winner (11,200 ROSE)<br/>
          Every 20% Sold, 5 lucky holder will be choosen each 300 $ROSE.<br/>
          50 $ROSE each for lucky Postman Hat minter, there are 88 NFTs Out There.
        </p>
      </Prose>
      </div>
      <div className="bg-slate-800 py-4">
        <Prose>
          <Minting />
        </Prose>
      </div>

      {/* <div className="bg-slate-700 py-4">
        <Prose>
          <Faq />
        </Prose>
      </div> */}

      <div className="bg-slate-800 py-4">
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
