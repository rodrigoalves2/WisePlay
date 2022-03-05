import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard';
import { MovieCast } from 'components/MovieCast';
import { MovieVideos } from 'components/MovieVideos';
import { SimilarMovies } from 'components/SimilarMovies';
import { RecommendedMovies } from 'components/RecommendedMovies';

import { getMovieData } from 'services/movies';

export function Movie() {
  const params = useParams();
  const movieId = params.id;
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMovieData(movieId);

      setMovie(data);
    }

    getMovie();

    return () => {
      setMovie();
    }
  }, [movieId])

  return (
    <div id='movie-page'>
      {
        movie ? (
          <div className='movie'>
            <MovieCard movie={movie} movieId={movieId} />
            <MovieCast movieId={movieId} />
            <MovieVideos movieId={movieId} />
            <SimilarMovies movieId={movieId} />
            <RecommendedMovies movieId={movieId} />
          </div>
        ) : (
          <div className='loading'>
            <div className='loader'></div>
          </div>
        )
      }
    </div>
  );
}
