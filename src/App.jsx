import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./components/Card";
import FormSearch from "./components/FormSearch";


function App() {

  const [dataMovie, setDataMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState("")

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
  }

  return (
    <>
      <div className="container">

        <FormSearch 
        search={searchMovie}
        handleSearch={setSearchMovie}
        sendData={handleSubmit}
        />

        <div className="row row-cols-3 g-3">
          {dataMovie.map(curMovie => (

            <div className="col" key={curMovie.id}>
             <Card movie={curMovie}/> 
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App





