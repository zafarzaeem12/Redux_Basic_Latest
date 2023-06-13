import SongsForm from "./SongsForm";
import React,{useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { DeleteSong ,AddSongs } from '../../../redux/Reducers/SongReducers'
function Movie() {
  const moviePlaylist =  useSelector((state) => state.Songs)
    const [name,Setname ] = useState('');
    const [time , Settime] = useState(0);
    const dispatch = useDispatch();



    const handleChange = (e) => {
        try{
            e.preventDefault();
            const movies = {
                name : name,
                time : time
            }
            dispatch(AddSongs(movies))
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
    dispatch(DeleteSong(movie))
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie.name}
        {" : "}
        {`${(movie.time / 60000 ).toFixed(1) } minutes`}
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
        <SongsForm name={name} time={time} Setname={Setname} Settime={Settime} handleChange={handleChange} />
      <div className="table-header">
        <h3 className="subtitle is-3">Songs Playlist</h3>
       
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default Movie;
