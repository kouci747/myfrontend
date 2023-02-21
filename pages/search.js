import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Search() {
  return (
    <div>
      <Header />
      <h1>search page results : </h1>
      <main className="flex">
        <section>
          <p className="text-xs">
            résultats trouvés pour X invités dans la région Y pour lz dd/mm/yyyy
          </p>
          <h1>région : Tizi-Ouzou</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
