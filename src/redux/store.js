import {createStore, applyMiddleware} from 'redux';
import reducer from './mainReducer';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

export default createStore(reducer, 
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware()
    )
)