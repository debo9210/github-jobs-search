import React from 'react';

const JobDetailsMainComponent = ({
  jobTitle,
  jobType,
  jobListDuration,
  image,
  companyName,
  jobLocation,
  jobDescription,
}) => {
  return (
    <div>
      <main className='Job-Details-Main'>
        <div className='Job-Details-Heading'>
          <h2 className='Job-Details-Heading-Text'>{jobTitle}</h2>
          <p className='Job-Class'>{jobType}</p>
        </div>

        <div className='Job-Details-Duration'>
          <span className='material-icons Duration'>access_time</span>
          <small className='Time-Duration-Text'>{jobListDuration}</small>
        </div>

        <div className='Job-Desc'>
          <div
            className='Job-Details-Company-Logo'
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className='Job-Details'>
            <small className='Job-Details-CompanyName'>{companyName}</small>
            <div className='Job-Details-Public'>
              <span className='material-icons Duration'>public</span>
              <small className='Time-Duration-Text'>{jobLocation}</small>
            </div>
          </div>
        </div>

        <div
          className='Job-Details-Content'
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        ></div>
      </main>
    </div>
  );
};

export default JobDetailsMainComponent;
