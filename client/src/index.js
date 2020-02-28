import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import RootRoutes from './routes/RootRoutes';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
//import {Provider} from 'react-redux';

import './index.css';
import { client } from './apolloClient'
//import store from './store';

ReactDOM.render(
   <ApolloProvider client={client}>
      <RootRoutes />
   </ApolloProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
