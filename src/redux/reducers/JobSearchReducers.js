import {
  GET_ALL_JOBS_FAIL,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_JOBS_BY_LOCATION_FAIL,
  GET_JOBS_BY_LOCATION_REQUEST,
  GET_JOBS_BY_LOCATION_SUCCESS,
  JOB_SEARCH_BY_KEYWORD_FAIL,
  JOB_SEARCH_BY_KEYWORD_REQUEST,
  JOB_SEARCH_BY_KEYWORD_SUCCESS,
} from '../constants';

export const allJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        allJobs: action.payload,
      };
    case GET_ALL_JOBS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const searchJobByKeywordsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_SEARCH_BY_KEYWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case JOB_SEARCH_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        keywordJobs: action.payload,
      };
    case JOB_SEARCH_BY_KEYWORD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const jobsByLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_JOBS_BY_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_JOBS_BY_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        jobsByLocation: action.payload,
      };
    case GET_JOBS_BY_LOCATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
