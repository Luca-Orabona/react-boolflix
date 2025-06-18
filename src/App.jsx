import axios from "axios";
import { useState } from "react"
import CardTv from "./components/CardTv";
import CardMovie from "./components/CardMovie";
import FormSearch from "./components/FormSearch";
import AppHeader from "./components/AppHeader";


function App() {

  const [dataMovie, setDataMovie] = useState([]);
  const [dataTv, setDataTv] = useState([]);
  const [searchMovie, setSearchMovie] = useState("")
  const [hasSearched, setHasSearched] = useState(false);



  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const query = searchMovie.trim();

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`)
      .then((resp) => {

        setDataMovie(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });

    axios
      .get(`${apiUrl}/search/tv?api_key=${apiKey}&query=${query}`)
      .then((resp) => {

        setDataTv(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });

    setHasSearched(true);
  }

  return (
    <>

      <AppHeader
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        sendData={handleSubmit}
      />

      <main className="bg-secondary">
        <div className="container">


          {hasSearched && (
            <>
              <section className="py-4">
                <h1>Film</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 text-center">
                  {dataMovie.map(curMovie => (
                    <div className="col" key={curMovie.id}>
                      <CardMovie movie={curMovie} />
                    </div>
                  ))}
                </div>
              </section>

              <hr />

              <section className="py-3">
                <h1>Serie TV</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 text-center">
                  {dataTv.map(curTv => (
                    <div className="col" key={curTv.id}>
                      <CardTv tv={curTv} />
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

        </div>
      </main>
    </>

  )
}

export default App





