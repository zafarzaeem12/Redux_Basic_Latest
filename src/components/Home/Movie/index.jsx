import MovieForm from "./MovieForm";
import React,{useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { AddMovies ,DeleteMovie } from '../../../redux/Reducers/MovieReducers'
function Movie() {
  const moviePlaylist =  useSelector((state) => state.Movies)
    const [name,Setname ] = useState('');
    const [fee , Setfee] = useState(0);
    const dispatch = useDispatch();



    const handleChange = (e) => {
        try{
            e.preventDefault();
            const movies = {
                name : name,
                fee : fee
            }
            dispatch(AddMovies(movies))
        }catch(err){
            console.log('error is coming')
        }
    }
  // To Do:
  // Get list of movies
//   const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    dispatch(DeleteMovie(movie))
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie.name}
        {" : "}
        {movie.fee}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
        <MovieForm name={name} fee={fee} Setname={Setname} Setfee={Setfee} handleChange={handleChange} />
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
       
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default Movie;
