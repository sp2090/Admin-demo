import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './MainRouter.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Provider} from 'react-redux';
//redux store is starting point of redux 
import store from './store.jsx';
//redux
import './index.css'
import { DarkModeContextProvider } from './admin/contextAPI/DarkModeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// wraping whole application by provider
root.render(
  <DarkModeContextProvider>
  <Provider store={store}>
        <MainRouter />
  </Provider>
  </DarkModeContextProvider>
);

