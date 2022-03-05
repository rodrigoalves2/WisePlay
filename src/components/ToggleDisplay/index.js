import { GridOn, FormatListBulleted } from '@mui/icons-material';

import './style.scss';

export function ToggleDisplay({ display, toggleDisplay }) {
  return (
    <div id='toggle-display'>
      <button
        className={`icon-button ${display === 'grid' ? 'active' : ''}`}
        disabled={display === 'grid'}
        onClick={() => toggleDisplay('grid')}>
        <GridOn />
      </button>

      <button
        className={`icon-button ${display === 'list' ? 'active' : ''}`}
        disabled={display === 'list'}
        onClick={() => toggleDisplay('list')}>
        <FormatListBulleted />
      </button>
    </div>
  );
}
