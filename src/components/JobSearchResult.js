import React from 'react';
import { useHistory } from 'react-router-dom';
import noImage from '../images/no-image-icon-15.png';

const JobSearchResult = ({
  companyLogo,
  companyName,
  jobTitle,
  jobType,
  jobLocation,
  daysAgo,
  id,
  searchWord,
}) => {
  const history = useHistory();
  const IMAGE = companyLogo === null ? noImage : companyLogo;

  const jobDetailsHandler = () => {
    history.push(`/job-details/${searchWord}/${id}`);
  };

  return (
    <>
      <div className='Job-Search-Result' onClick={jobDetailsHandler}>
        <div className='Result'>
          <div className='Job-Desc'>
            <div
              className='Company-Logo'
              style={{ backgroundImage: `url(${IMAGE})` }}
            ></div>
            <div className='Job-Details'>
              <small className='CompanyName'>{companyName}</small>
              <p className='Job-Title'>{jobTitle}</p>
              <p className='Job-Class'>{jobType}</p>
            </div>
          </div>
        </div>

        <div className='Time-Duration-Container'>
          <div className='Time-Duration Public-Location'>
            <span className='material-icons Duration'>public</span>
            <small className='Time-Duration-Text'>{jobLocation}</small>
          </div>

          <div className='Time-Duration'>
            <span className='material-icons Duration'>access_time</span>
            <small className='Time-Duration-Text'>{daysAgo}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearchResult;
