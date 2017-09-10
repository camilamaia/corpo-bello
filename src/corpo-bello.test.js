import React from 'react';
import ReactDOM from 'react-dom';
import CorpoBello from './corpo-bello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CorpoBello />, div);
});
