import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({poster_path, title, overview, id}){
  return(
  <div>
    <img src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : null} alt={title}/>
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{overview.length > 200 ? `${overview.slice(0, 200)}...` : overview}</p>
    
  </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

export default Movie;