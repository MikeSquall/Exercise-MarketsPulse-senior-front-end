import React from 'react';
import { render } from 'react-dom';
import './assets/style/index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import assetsMiddleWare from './middleware';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    applyMiddleware(assetsMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
