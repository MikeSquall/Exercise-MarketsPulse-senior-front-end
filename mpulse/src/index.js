import React from 'react'
import { render } from 'react-dom'
import './assets/style/index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import assetsMiddleWare from './middleware'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = applyMiddleware(assetsMiddleWare)

const store = createStore(
    reducer,
    composeWithDevTools(middleware),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
