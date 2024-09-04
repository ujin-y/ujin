import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await (fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"))).json();
    //https://api.themoviedb.org/3/movie/changes?api_key=55b6627f7256bd45709f7e5bea0da7e3
    
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

   return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map((movie) => (
          <Movie
          key={movie.id} 
          id={movie.id}
          coverImage={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary}
          genres={movie.genres}
          />
        ))}
      </div>
      }
    </div>
  );
}
export default Home;