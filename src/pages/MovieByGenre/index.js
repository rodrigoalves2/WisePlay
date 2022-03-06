import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePersistedState } from 'utils/usePersistedState';

import { Grid } from 'components/Grid';
import { List } from 'components/List';
import { Pagination } from 'components/Pagination';
import { ToggleDisplay } from 'components/ToggleDisplay';

import { listMoviesByGenre } from 'services/movies';

export function MovieByGenre() {
  const params = useParams();
  const movieGenre = params.genre;

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState({});
  const [display, setDisplay] = usePersistedState('display', 'list');

  useEffect(() => {
    const getMoviesByGenre = async () => {
      const data = await listMoviesByGenre(page, movieGenre)

      setMovies(data);
    }

    getMoviesByGenre();

    return () => {
      setMovies({});
    }
  }, [movieGenre, page])

  function toggleDisplay(newDisplay) {
    setDisplay(newDisplay);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div id='movie-by-genre-page'>
      <div className='popular-movies'>
        <div className="row">
          <Pagination page={page} totalPages={movies.total_pages} changePage={changePage} />

          <ToggleDisplay display={display} toggleDisplay={toggleDisplay} />
        </div >

        <div className='movies'>
          {
            movies.results ? (
              display === 'grid' ? <Grid movies={movies.results} /> : <List movies={movies.results} />
            ) : (
              <div className='loading'>
                <div className='loader'></div>
              </div>
            )
          }
        </div>
      </div>
    </div >
  );
}
