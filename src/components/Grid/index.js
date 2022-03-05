import { useNavigate } from 'react-router-dom';

import defaultImage from 'assets/images/image-not-found.png';

import './style.scss';

export function Grid({ movies }) {
  const navigate = useNavigate()

  const movieInfo = (id) => {
    navigate(`../movie/${id}`);
  }

  return (
    <div id="grid">
      {
        movies && movies.map(movie => {
          return (
            <div className='movie-card' key={movie.id} onClick={() => movieInfo(movie.id)}>
              <img
                className='movie-poster'
                src={movie.poster_path ? ('https://image.tmdb.org/t/p/w500' + movie.poster_path) : (defaultImage)}
                alt="Poster do filme"
                loading='lazy'
              />
              <div className="text">
                <span className='movie-title'>{movie.title}</span>
                <span className='movie-desc'>{movie.overview}</span>
              </div>
            </div>
          );
        })
      }
    </div >
  );
}
