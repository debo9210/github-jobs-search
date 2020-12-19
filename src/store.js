import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  allJobsReducer,
  searchJobByKeywordsReducer,
  jobsByLocationReducer,
} from './redux/reducers/JobSearchReducers';

const reducers = combineReducers({
  jobsArray: allJobsReducer,
  keywordJobsArray: searchJobByKeywordsReducer,
  jobByLocationArray: jobsByLocationReducer,
});

const initialState = {};

const middleware = [thunk];

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, devTools);

export default store;
