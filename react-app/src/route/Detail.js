import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    const getMovie = async () =>{
      const json = await (
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=55b6627f7256bd45709f7e5bea0da7e3`)
      ).json();
  
      setMovie(json);
      setLoading(false);
    }

    getMovie();
  }, [id]);

  console.log(movie)

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        <h1>Detail</h1>
        {movie && (
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : null} alt={movie.title}/>
          </div>
        )}
      </div>
      }
    </div>
  )
}

export default Detail;