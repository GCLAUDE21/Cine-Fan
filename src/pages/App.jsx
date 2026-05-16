import { useEffect, useState } from 'react'
import  Header  from "../components/Header";
import axios from 'axios';
import Card from '../components/Card';

function App() {
  const [Movies, SetMovies] = useState([]);
  const [InputSearch, setInputSearch] = useState("harry");
  const [sortMovies, setSortMovies] = useState("");

  const SearchMovie = (() => {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" + InputSearch + "&language=fr-FR").then((res) => SetMovies(res.data.results))

  });

  // Au lancement de la page
  useEffect(() => {
    SearchMovie();
  }, []);


  // Tri à chaque changement de sortMovies ou movies
  if (sortMovies == "top") {
    Movies.sort((a, b) =>  b.vote_average - a.vote_average)} else if (sortMovies == "flop") {
      Movies.sort((a,b) => a.vote_average - b.vote_average)
    };



  return (
    <>
      <Header />
      <div className="searchpanel">
      <div className="searchmovie">
        <input onKeyDown={(e) => e.key === "Enter" && SearchMovie()} onChange={(e) => setInputSearch(e.target.value)} placeholder="Entrer le nom d'un film" type="text"  />
        <button onClick={SearchMovie}>Rechercher</button>
      </div>

      <div className="tri">
        <button onClick={() => setSortMovies("top")} id='top'>Top</button>
        <button onClick={() => setSortMovies("flop")} id='flop'>Flop</button>
      </div>
      </div>


      <div className="mapping">
      {Movies
      .map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}

      </div>


    </>
  )
};

export default App
