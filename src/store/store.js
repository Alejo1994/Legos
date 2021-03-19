import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { legoReducer } from '../reducers/legoReducer';
import { scoreReducer } from '../reducers/scoreReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    brick: legoReducer,
    score: scoreReducer
})

export const store = createStore(
    reducers
    , composeEnhancers(
        applyMiddleware(thunk)
    ));

