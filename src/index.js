import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
