import { createStore, combineReducers } from 'redux';
import { complaint } from './reducers';


const reducers = {
    complaint
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);