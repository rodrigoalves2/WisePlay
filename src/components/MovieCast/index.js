import { useEffect, useState } from 'react';

import { getMovieCast } from 'services/movies';

import defaultProfileImage from 'assets/images/default-profile.png';

import './style.scss';

export function MovieCast({ movieId }) {
  const [movieCast, setMovieCast] = useState({});

  useEffect(() => {
    const getCast = async () => {
      const data = await getMovieCast(movieId)

      setMovieCast(data);
    }

    getCast();

    return () => {
      setMovieCast({})
    }
  }, [movieId])

  return (
    <div id='movie-cast'>
      <h3>Elenco</h3>
      <div className='cast-scroller'>
        {
          movieCast.cast?.map(cast => {
            return (
              <div className='cast-card' key={cast.cast_id}>
                <img
                  className='cast-profile'
                  src={cast.profile_path ? ('https://image.tmdb.org/t/p/w185' + cast.profile_path) : (defaultProfileImage)}
                  alt='Foto do ator'
                  loading='lazy'
                />
                <p className='cast-name'>{cast.name}</p>
                <p className='character'>{cast.character}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
