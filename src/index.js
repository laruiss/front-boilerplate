import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import '@babel/polyfill'
import 'normalize.css'
import './index.css'
import App from './App'
import store from './store'

const rootElement = document.getElementById('root')

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', renderApp)
}
