import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

function Search({ searchResults }) {
  /* note à moi-meme : 
    la fonction search dans Header.js envoie des params dans l'URL (location, startDate, endDate, nbOfGuests )
    il faut maintenant les récupérer pour les utliser ici/les afficher
    Pour ce faire, on utilise useRouter()
    */
  const router = useRouter();
  console.log(searchResults);
  //console.log(router.query); //returns an object with all query fields inside

  //maintenant, j'ai besoin de déstructurer le résultat de query pour récupérer les élements qui y sont stockés
  const { location, startDate, endDate, nbOfGuests } = router.query;

  //formatter la date pour qu'elle soit lisible
  const formattedStartDate = format(new Date(startDate), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yyyy');
  // const range = `${formattedStartDate}-${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} ${formattedStartDate} ${formattedEndDate} ${nbOfGuests} guests`}
      />
      <h1>search page results : </h1>
      <main className="flex">
        <section>
          <p className="text-xs">
            résultats trouvés pour {nbOfGuests} invités à {location} du
            {formattedStartDate} au {formattedEndDate}
          </p>
          <h1>région : {location}</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const searchResults = await fetch(
    'http://localhost:4000/api/v1/place/getPlaces'
  ).then((res) => res.json());
  return {
    props: {
      searchResults: searchResults,
    },
  };
}

export default Search;
