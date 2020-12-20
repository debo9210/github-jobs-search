import axios from 'axios';
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

const CORS = 'https://cors-anywhere.herokuapp.com/';

export const getJobs = (num) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_JOBS_REQUEST });

    const { data } = await axios.get(
      `${CORS}https://jobs.github.com/positions.json?page=${num}`
    );

    dispatch({
      type: GET_ALL_JOBS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_JOBS_FAIL,
      payload: error.message,
    });
  }
};

export const getJobsByKeyword = (keyword, bool) => async (dispatch) => {
  try {
    dispatch({ type: JOB_SEARCH_BY_KEYWORD_REQUEST });

    const { data } = await axios.get(
      `${CORS}https://jobs.github.com/positions.json?page=1&search=${keyword}&full_time=${bool}`
    );

    dispatch({
      type: JOB_SEARCH_BY_KEYWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_SEARCH_BY_KEYWORD_FAIL,
      payload: error.message,
    });
  }
};

export const getJobsByLocation = (location, bool) => async (dispatch) => {
  try {
    dispatch({ type: GET_JOBS_BY_LOCATION_REQUEST });

    const { data } = await axios.get(
      `${CORS}https://jobs.github.com/positions.json?full_time=${bool}&location=${location}`
    );

    dispatch({
      type: GET_JOBS_BY_LOCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_JOBS_BY_LOCATION_FAIL,
      payload: error.message,
    });
  }
};
