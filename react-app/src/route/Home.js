import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=55b6627f7256bd45709f7e5bea0da7e3`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <ul>
          {movies.map((item, index) => (
            <li key={item.id}>
              <Movie
                id={item.id}
                index={index}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}
export default Home;