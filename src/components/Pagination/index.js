import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowRight, KeyboardDoubleArrowLeft } from '@mui/icons-material';

import './style.scss';

export function Pagination({ page, totalPages, changePage }) {
  return (
    <div id="pagination">
      <button
        className='icon-button icon-pagination'
        disabled={page === 1 || !totalPages}
        onClick={() => changePage(1)}
      >
        <KeyboardDoubleArrowLeft />
      </button>

      <button
        className='icon-button icon-pagination'
        disabled={page === 1 || !totalPages}
        onClick={() => changePage(page - 1)}
      >
        <KeyboardArrowLeft />
      </button>

      <div>{page}</div>

      <button
        className='icon-button icon-pagination'
        disabled={page === 500 || page === totalPages || !totalPages}
        onClick={() => changePage(page + 1)}
      >
        <KeyboardArrowRight />
      </button>

      <button
        className='icon-button icon-pagination'
        disabled={page === 500 || page === totalPages || !totalPages}
        onClick={() => changePage(totalPages < 500 ? totalPages : 500)}
      >
        <KeyboardDoubleArrowRight />
      </button>
    </div>
  );
}
