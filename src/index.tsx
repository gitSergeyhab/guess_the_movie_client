import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { store } from './store/store';

import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';
import './index.scss';
import { serverApi } from './api/server-api';
import { setUser } from './store/user-slice/user-slice';
import { deleteUserDataFromLS, readUserFromLS } from './utils/storage-utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const unauthorize = () => {
  store.dispatch(setUser(null));
  deleteUserDataFromLS();
}

export const api = serverApi(unauthorize);
const user = readUserFromLS();
store.dispatch(setUser(user));

root.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);



