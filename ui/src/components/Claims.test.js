import React from 'react';
import ReactDOM from 'react-dom';
import Claims from './Claims';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Claims />, div);
  ReactDOM.unmountComponentAtNode(div);
});
