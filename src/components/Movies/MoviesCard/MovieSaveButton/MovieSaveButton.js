import "./MovieSaveButton.css";

function MovieSaveButton({ movie }) {
  return (
    <div className="movies-card__save-button-container">
        <input className="movies-card__save-button" type="checkbox" id={movie.movieId}/>
        <label className="movies-card__save-button-label" htmlFor={movie.movieId}></label>
    </div>
  )
}

export default MovieSaveButton;