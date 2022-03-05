import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getSimilarMovies } from 'services/movies';

import defaultImage from 'assets/images/image-not-found.png';

import './style.scss';

export function SimilarMovies({ movieId }) {
  const [similarMovies, setSimilarMovies] = useState({});

  useEffect(() => {
    const getSimilar = async () => {
      const data = await getSimilarMovies(movieId)

      setSimilarMovies(data);
    }

    getSimilar();

    return () => {
      setSimilarMovies({})
    }
  }, [movieId])


  return (
    <div id='similar-movies'>
      <h3>Filmes parecidos</h3>
      <div className='movies-scroller'>
        {
          similarMovies.results?.map(movie => {
            return (
              <Link
                to={`/movie/${movie.id}`}
                className='similar-movie-card'
                key={movie.id}
              >
                <img
                  className='similar-movie-poster'
                  src={movie.poster_path ? ('https://image.tmdb.org/t/p/w185' + movie.poster_path) : (defaultImage)}
                  alt='Poster do filme'
                  loading='lazy'
                />
                <p className='similar-movie-title'>{movie.title}</p>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
