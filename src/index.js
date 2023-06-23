import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PrismicProvider} from '@prismicio/react';
import { client } from './services/prismic.ts';

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client = {client}>
    <App />
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
