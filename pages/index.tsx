import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>AirBnb by Kouci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>let's build airbnb front !</h1>
      <Banner />
    </div>
  );
};

export default Home;
