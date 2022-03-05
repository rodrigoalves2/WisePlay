import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Search } from '@mui/icons-material';

import logo from 'assets/images/logo-removebg2.png';

import './style.scss';

export function Header() {
  const navigate = useNavigate()
  const [movieToSearch, setMovieToSearch] = useState('');

  async function getMovie() {
    if (movieToSearch.trim() === '') {
      return;
    }

    navigate(`search/${movieToSearch}`);
    setMovieToSearch('');
  }

  return (
    <div id='header' className='row'>
      <Link to='/'>
        <img className='logo' src={logo} alt='logo' />
      </Link>

      <form onSubmit={getMovie}>
        <input
          type="text"
          placeholder='Pesquisar Filme'
          onChange={event => setMovieToSearch(event.target.value)}
          value={movieToSearch}
        />
        <button type='submit'>
          <Search className='search-icon' /> Buscar
        </button>
      </form>
    </div>
  );
}
