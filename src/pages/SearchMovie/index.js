import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePersistedState } from 'utils/usePersistedState';

import { Grid } from 'components/Grid';
import { List } from 'components/List';
import { Pagination } from 'components/Pagination';
import { ToggleDisplay } from 'components/ToggleDisplay';

import { searchMovie } from 'services/movies';

export function SearchMovie() {
  const params = useParams();
  const movie = params.movie;

  const [movies, setMovies] = useState({});
  const [searchPage, setSearchPage] = useState(1);
  const [display, setDisplay] = usePersistedState('display', 'list');

  useEffect(() => {
    const getMovie = async () => {
      const data = await searchMovie(movie, searchPage);

      setMovies(data);
    }

    getMovie();

    return () => {
      setMovies({});
    }
  }, [movie, searchPage])

  function toggleDisplay(newDisplay) {
    setDisplay(newDisplay);
  }

  function changePage(page) {
    setSearchPage(page);
  }

  return (
    <div id='search-page'>
      <div className='popular-movies'>
        <div className="row">
          <Pagination page={searchPage} totalPages={movies.total_pages} changePage={changePage} />

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
