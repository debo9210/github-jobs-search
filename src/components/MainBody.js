import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobSearchResult from './JobSearchResult';
import AsideBody from './AsideBody';
import MainHeading from './MainHeading';
import Loader from './Loader';
import Pagination from './Pagination';
import { getJobs, getJobsByKeyword } from '../redux/actions/JobSearchActions';
import { differentInDays } from '../utils/DateDifference';

const MainBody = () => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const LocationInputRef = useRef(null);
  const checkFulltime = useRef(null);
  const nextPageRef = useRef(null);
  const prevPageRef = useRef(null);
  const pagesRef = useRef(null);

  const [allJob, setAllJob] = useState(true);
  const [keywordJob, setKeywordJob] = useState(false);
  const [clickFulltime, setClickFullTime] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [jobListPerPage] = useState(5);
  const [jobsLength, setJobsLength] = useState(0);
  const [jobPage, setJobPage] = useState(1);

  const { allJobs, loading } = useSelector((state) => state.jobsArray);

  const { keywordJobs, loading: keywordJobsLoading } = useSelector(
    (state) => state.keywordJobsArray
  );

  const searchHandler = () => {
    dispatch(getJobsByKeyword(inputRef.current.value, clickFulltime));
    inputRef.current.value = '';
    setAllJob(false);
    setKeywordJob(true);
  };

  const radioHandler = (e) => {
    if (LocationInputRef.current !== null) {
      LocationInputRef.current.value = e.target.value;
    }
    dispatch(getJobsByKeyword(e.target.value, clickFulltime));
    setAllJob(false);
    setKeywordJob(true);
    nextPageRef.current.classList.remove('DisableBtn');
  };

  const changeHandler = (e) => {
    dispatch(getJobsByKeyword(e.target.value, clickFulltime));
    e.target.value = '';
    setAllJob(false);
    setKeywordJob(true);
    nextPageRef.current.classList.remove('DisableBtn');
  };

  const fulltimeClick = () => {
    if (checkFulltime.current.checked) {
      setClickFullTime(true);
    } else {
      setClickFullTime(false);
    }
  };

  const indexOfLastPost = currentPage * jobListPerPage;
  const indexOfFirstPost = indexOfLastPost - jobListPerPage;

  const paginateHandler = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const nextPageHandler = () => {
    const btnLength = pagesRef.current.childNodes.length;

    if (btnLength === currentPage) {
      nextPageRef.current.classList.add('DisableBtn');
    }

    if (btnLength > currentPage) {
      setCurrentPage(currentPage + 1);
      prevPageRef.current.classList.remove('DisableBtn');
    }
  };

  const prevPageHandler = () => {
    if (currentPage === 1) {
      prevPageRef.current.classList.add('DisableBtn');
    } else {
      nextPageRef.current.classList.remove('DisableBtn');
      setCurrentPage(currentPage - 1);
    }
  };

  let allJobResult;
  if (allJobs) {
    allJobResult = allJobs
      .slice(indexOfFirstPost, indexOfLastPost)
      .map((job) => (
        <JobSearchResult
          key={job.id}
          companyName={job.company}
          companyLogo={job.company_logo}
          jobLocation={job.location}
          jobTitle={job.title}
          jobType={job.type}
          daysAgo={differentInDays(job.created_at)}
          id={job.id}
        />
      ));
  }

  let jobByKeyword;
  if (keywordJobs) {
    jobByKeyword = keywordJobs
      .slice(indexOfFirstPost, indexOfLastPost)
      .map((job) => (
        <JobSearchResult
          key={job.id}
          companyName={job.company}
          companyLogo={job.company_logo}
          jobLocation={job.location}
          jobTitle={job.title}
          jobType={job.type}
          daysAgo={differentInDays(job.created_at)}
          id={job.id}
        />
      ));
  }

  if (keywordJobs) {
    if (keywordJobs.length === 0) {
      jobByKeyword = <p>No Search Result</p>;
    }
  }

  if (allJobs) {
    if (allJobs.length === 0) {
      allJobResult = <p>No more listings to show. Go Back to previous page</p>;
    }
  }

  const nextJobListhandler = () => {
    setJobPage(jobPage + 1);
    dispatch(getJobs(jobPage));
  };

  const prevJobListhandler = () => {
    if (jobPage < 1) return;
    setJobPage(jobPage - 1);
    dispatch(getJobs(jobPage));
  };

  // console.log(getData);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    if (allJobs) {
      setJobsLength(allJobs.length);
    }

    if (keywordJobs) {
      setJobsLength(keywordJobs.length);
    }
  }, [allJobs, keywordJobs]);
  return (
    <div>
      <MainHeading searchBtnHandler={searchHandler} searchRef={inputRef} />
      <div className='MainBodyContainer'>
        <AsideBody
          radioBtnHandler={radioHandler}
          locationInputRef={LocationInputRef}
          onBlurHandler={changeHandler}
          fullTimeValue={checkFulltime}
          fulltimeClickHandler={fulltimeClick}
        />

        <main className='MainBody'>
          <div className='JobListPage'>
            <button className='JobListBtn' onClick={prevJobListhandler}>
              <i className='material-icons PageArrow'>first_page</i>
            </button>
            <button className='JobListBtn' onClick={nextJobListhandler}>
              <i className='material-icons PageArrow'>last_page</i>
            </button>
          </div>
          <small className='JobList'>More Job Listings</small>
          {loading || keywordJobsLoading ? (
            <Loader />
          ) : allJob ? (
            allJobResult
          ) : keywordJob ? (
            jobByKeyword
          ) : null}

          {!loading || !keywordJobsLoading ? (
            <Pagination
              jobsPerPage={jobListPerPage}
              totalPosts={jobsLength}
              paginate={paginateHandler}
              nextPage={nextPageHandler}
              prevPage={prevPageHandler}
              nextPageRef={nextPageRef}
              prevPageRef={prevPageRef}
              pagesRef={pagesRef}
            />
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default MainBody;
