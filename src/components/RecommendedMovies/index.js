import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMovieRecommendations } from 'services/movies';

import defaultImage from 'assets/images/image-not-found.png';

import './style.scss';

export function RecommendedMovies({ movieId }) {
  const [recommendedMovies, setRecommendedMovies] = useState({});

  useEffect(() => {
    const getRecommended = async () => {
      const data = await getMovieRecommendations(movieId)

      setRecommendedMovies(data);
    }

    getRecommended();

    return () => {
      setRecommendedMovies({})
    }
  }, [movieId])

  return (
    recommendedMovies.results?.length !== 0 && (
      <div id='movie-recommendations'>
        <h3>Filmes recomendados</h3>
        <div className='movies-scroller'>
          {
            recommendedMovies.results?.map(movie => {
              return (
                <Link
                  to={`/movie/${movie.id}`}
                  className='recommendation-card'
                  key={movie.id}
                >
                  <img
                    className='recommendation-poster'
                    src={movie.poster_path ? ('https://image.tmdb.org/t/p/w185' + movie.poster_path) : (defaultImage)}
                    alt='Poster do filme'
                    loading='lazy'
                  />
                  <p className='recommendation-title'>{movie.title}</p>
                </Link>
              );
            })
          }
        </div>
      </div>
    )
  );
}
