import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,

  // Modo desarrollo para que se vea verde:
  composeWithDevTools(applyMiddleware(...middleware))
  // Modo produccion y si no quieres que se vea la cosa verde:
  // applyMiddleware(...middleware)
);

export default store;
