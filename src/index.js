import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import reducers from './reducers/index.js'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/fbConfig'
const config = {
    attachAuthIsReady: true, // attaches auth is ready promise to store
    firebaseStateName: 'firebase', // should match the reducer name ('firebase' is default)
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions'
  }
  // During store creation
const store = createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, config)
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  })

