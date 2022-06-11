import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import {applyMiddleware, compose, createStore} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { spamWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/saga';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(thunk, spamWordsMiddleware, saga) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
saga.run(sagaWatcher)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
