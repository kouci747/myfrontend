//import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PlaceCard from '../components/PlaceCard';
import TypePlaceCard from '../components/TypePlaceCard';
import Image from 'next/image';

export default function Home({ exploreData, explorePlaces }) {
  //avoir {exploreData} en param de Home() a comme avantage que je n'ai plus à mettre props.exploreData partout
  return (
    <div className="">
      <Head>
        <title>AirBnb by Kouci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner />
      <main className="max-w-7xl  mx-auto px-8 sm:px-16">
        <section>
          <div className="flex p-2 overflow-scroll scrollbar-hide">
            {explorePlaces?.map((itemz) => (
              <TypePlaceCard
                key={itemz._id}
                thumbnail={itemz.thumbnail}
                name={itemz.name}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2>Les logements les plus récents</h2>
          {/**it's mobile first, then small screens, then larger ones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <PlaceCard
                key={item._id}
                address={item.address.city}
                images={item.images[1]}
                pricing={item.pricing.perDay}
                capacity={item.capacity}
              />
            ))}
          </div>
        </section>
        <section className=""></section>
      </main>
    </div>
  );
}

//can't have two or more getStaticProps separately
// export async function getStaticProps() {
//   const exploreData = await fetch(
//     'http://localhost:4000/api/v1/place/getPlaces'
//   ).then((res) => res.json());

//   return {
//     props: {
//       exploreData: exploreData,
//     },
//   };
// }
export async function getServerSideProps() {
  const [exploreDataRes, explorePlacesRes] = await Promise.all([
    fetch('http://localhost:4000/api/v1/place/getPlaces'),
    fetch('http://localhost:4000/api/v1/type-place/getTypesPlaces'),
  ]);
  const [exploreData, explorePlaces] = await Promise.all([
    exploreDataRes.json(),
    explorePlacesRes.json(),
  ]);
  return { props: { exploreData, explorePlaces } };
}

//export default Home;
