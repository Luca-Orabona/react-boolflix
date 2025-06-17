import axios from "axios";
import { useEffect, useState } from "react"
import CardTv from "./components/CardTv";
import CardMovie from "./components/CardMovie";
import FormSearch from "./components/FormSearch";


function App() {

  const [dataMovie, setDataMovie] = useState([]);
  const [dataTv, setDataTv] = useState([]);
  const [searchMovie, setSearchMovie] = useState("")
  const [hasSearched, setHasSearched] = useState(false);



  const apiKey = "?api_key=c50b26832948de6befcd40acdab64c84";
  const query = searchMovie;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.themoviedb.org/3/search/movie${apiKey}&query=${query}`)
      .then((resp) => {
        setDataMovie(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });

    axios
      .get(`https://api.themoviedb.org/3/search/tv${apiKey}&query=${query}`)
      .then((resp) => {
        setDataTv(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });

    setHasSearched(true);
  }

  return (


    <div className="container">

      <FormSearch
        search={searchMovie}
        handleSearch={setSearchMovie}
        sendData={handleSubmit}
      />

      {hasSearched && (
        <>
          <section className="py-4">
            <h1>Film</h1>
            <div className="row row-cols-3 g-3 text-center">
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
            <div className="row row-cols-3 g-3 text-center">
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

  )
}

export default App





