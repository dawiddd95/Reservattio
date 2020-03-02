import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
//import {Provider} from 'react-redux';

import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import store from './store';
import { client } from './apolloClient'

import RootRoutes from './routes/RootRoutes';


ReactDOM.render(
   <ApolloProvider client={client}>
      <Router>
         <RootRoutes />
      </Router>
   </ApolloProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
