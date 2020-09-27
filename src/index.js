import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ReduxProvider from './redux/redux';
import GraphqlProvider from './graphql/graphql'

ReactDOM.render(
  <ReduxProvider>
    <GraphqlProvider>
      <App />
    </GraphqlProvider>
  </ReduxProvider>
  , document.getElementById('root'));