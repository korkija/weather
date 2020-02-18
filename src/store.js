import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {weather} from './reducers/weather';
const reducers=combineReducers({weather});

export const store=createStore(reducers,applyMiddleware(thunk));
