import { useState, useEffect } from 'react';

import { usePersistedState } from 'utils/usePersistedState';

import { Grid } from 'components/Grid';
import { List } from 'components/List';
import { Pagination } from 'components/Pagination';
import { ToggleDisplay } from 'components/ToggleDisplay';

import { listPopularMovies } from 'services/movies';

export function Home() {
  const [movies, setMovies] = useState({});
  const [page, setPage] = usePersistedState('page', 1);
  const [display, setDisplay] = usePersistedState('display', 'list');

  useEffect(() => {
    const getMovies = async () => {
      const data = await listPopularMovies(page)

      setMovies(data);
    }

    getMovies();

    return () => {
      setMovies({});
    }
  }, [page, setMovies])

  function toggleDisplay(newDisplay) {
    setDisplay(newDisplay);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div id='home-page'>
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
