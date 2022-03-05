import { useEffect, useState } from 'react';

import { Star, OpenInNew } from '@mui/icons-material';

import { getMovieImages } from 'services/movies';

import defaultImage from 'assets/images/image-not-found.png';

import './style.scss';

export function MovieCard({ movie, movieId }) {
  const [movieImages, setMovieImages] = useState({});
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let movieRating;
  let movieHours;
  let movieMinutes;

  useEffect(() => {
    const getImages = async () => {
      const data = await getMovieImages(movieId)

      setMovieImages(data);
    }

    getImages();

    return () => {
      setMovieImages({});
    }
  }, [movieId])

  function switchImage() {
    if (currentImageIndex < movieImages.backdrops?.length) {
      setCurrentImage(movieImages.backdrops[currentImageIndex]?.file_path);
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImage(movieImages.backdrops[0]?.file_path);
      setCurrentImageIndex(0);
    }
  }

  if (movie) {
    const movieReleaseDatesBR = movie.release_dates?.results.find(result => result.iso_3166_1 === 'BR');
    movieRating = movieReleaseDatesBR?.release_dates.find(data => data.certification)?.certification;

    movieHours = Math.floor(movie.runtime / 60);
    movieMinutes = movie.runtime % 60;
  }

  if (movie && movieImages.backdrops) {
    setTimeout(() => {
      switchImage();
    }, 1000 * 5);
  }

  return (
    <div id='movie-card'>
      <div className='info-section'>
        <div className='movie-header'>
          <img
            className='movie-poster'
            src={movie.poster_path ? ('https://image.tmdb.org/t/p/w300' + movie.poster_path) : (defaultImage)}
            alt='Poster do filme'
          />
          <h1 className='movie-title'>
            {
              movie.homepage ? (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='movie-link'
                  href={movie.homepage}
                >
                  {movie.title} <OpenInNew className='icon-open-link' />
                </a>
              ) : (
                movie.title
              )
            }
          </h1>
          {
            movie.tagline && <span className='movie-tagline'>{movie.tagline}</span>
          }

          <div className='movie-data-row'>
            {
              movieRating && <div className={`movie-rating movie-rating-${movieRating}`}>{movieRating}</div>
            }
            <span className='movie-release-date'>{movie.release_date?.split('-').reverse().join('/')}</span>
            <span>-</span>
            <div className='movie-vote-average' title={movie.vote_count && `${movie.vote_count} voto(s)`}>
              {movie.vote_average} <Star className='star-icon' />
            </div>
          </div>

          <div className='movie-data-row'>
            <div className='movie-runtime'>{movieHours}h {movieMinutes}m</div>
            {
              movie.genres?.map(genre => {
                return (
                  <div className='movie-genre' key={genre.id}>{genre.name}</div>
                )
              })
            }
          </div>
        </div>

        <div className='movie-desc'>
          <span className='text'>Sinopse</span>
          <span className='movie-overview'>{movie.overview}</span>
        </div>
      </div>

      {
        currentImage ? (
          <img
            className='blur-back'
            src={'https://image.tmdb.org/t/p/original' + currentImage}
            alt='Imagem do filme'
          />
        ) : (
          movie.backdrop_path && (
            <img
              className='blur-back'
              src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
              alt='Imagem do filme'
            />
          )
        )
      }
    </div>
  );
}
