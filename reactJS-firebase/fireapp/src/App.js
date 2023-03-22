import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import RoutesApp from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}
