import { useNavigate } from 'react-router-dom';

import { Star } from '@mui/icons-material';

import defaultImage from 'assets/images/image-not-found.png';

import './style.scss';

export function List({ movies }) {
  const navigate = useNavigate()

  const movieInfo = (id) => {
    navigate(`../movie/${id}`);
  }

  return (
    <div id='list'>
      {
        movies && movies.map(movie => {
          return (
            <div className='movie-card' key={movie.id} onClick={() => movieInfo(movie.id)}>
              <div className='info-section'>
                <div className='movie-header'>
                  <img
                    className='movie-poster'
                    src={movie.poster_path ? ('https://image.tmdb.org/t/p/w200' + movie.poster_path) : (defaultImage)}
                    alt='Poster do filme'
                    loading='lazy'
                  />
                  <h1 className='movie-title'>{movie.title}</h1>
                  <div className='movie-data-row'>
                    {
                      movie.release_date && (
                        <div className='movie-data-row'>
                          <span className='movie-release-date'>{movie.release_date.substring(0, 4)}</span>
                          <span>-</span>
                        </div>
                      )
                    }
                    <div className='movie-vote-average' title={movie.vote_count && `${movie.vote_count} voto(s)`}>
                      {movie.vote_average} <Star className='star-icon' />
                    </div>
                  </div>
                </div>
                <div className='movie-desc'>
                  <span className='text'>{movie.overview}</span>
                </div>
              </div>

              {
                movie.backdrop_path && (
                  <img
                    className='blur-back'
                    src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
                    alt='Imagem do filme'
                    loading='lazy'
                  />
                )
              }
            </div>
          );
        })
      }
    </div >
  );
}
