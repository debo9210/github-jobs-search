import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { differentInDays } from '../utils/DateDifference';
import Loader from './Loader';
import noImage from '../images/no-image-icon-15.png';
import JobDetailsMainComponent from './JobDetailsMainComponent';
import { getJobs } from '../redux/actions/JobSearchActions';

const JobDetailsPage = ({ match }) => {
  const ID = match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();

  // console.log({ match });

  const [companyLogo, setCompanyLogo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [howToApply, setHowToApply] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobListDuration, setJobListDuration] = useState('');
  const [jobDescription, setJobDescription] = useState();

  const { allJobs, loading } = useSelector((state) => state.jobsArray);

  // console.log(allJobs);

  const { keywordJobs } = useSelector((state) => state.keywordJobsArray);

  // console.log(keywordJobs);

  // console.log(keywordJobs.map((job) => job.id === ID));
  // console.log(keywordJobs);

  let listJobs;
  if (allJobs) {
    listJobs = allJobs.filter((list) => list.id === ID);
  }

  if (keywordJobs) {
    listJobs = keywordJobs.filter((list) => list.id === ID);
  }

  // console.log(listJobs);

  if (listJobs === []) {
    history.push('/');
  }

  const IMAGE = companyLogo === null ? noImage : companyLogo;

  useEffect(() => {
    if (listJobs) {
      setCompanyLogo(listJobs[0].company_logo);
      setHowToApply(listJobs[0].how_to_apply);
      setJobTitle(listJobs[0].title);
      setJobType(listJobs[0].type);
      setJobListDuration(differentInDays(listJobs[0].created_at));
      setCompanyName(listJobs[0].company);
      setJobLocation(listJobs[0].location);
      setJobDescription(listJobs[0].description);
    }
  }, [listJobs]);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className='Job-Details-Container'>
      <aside className='Job-Details-Aside'>
        <div className='Link-Home'>
          <span className='material-icons Link-Arrow'>trending_flat</span>
          <Link to='/'>
            <p className='Link-Text'>Back to search</p>
          </Link>
        </div>

        <p className='Apply-Text'>HOw to Apply</p>

        {loading ? (
          <Loader />
        ) : (
          <div
            className='Apply-Contact'
            dangerouslySetInnerHTML={{ __html: howToApply }}
          ></div>
        )}
      </aside>

      {loading ? (
        <Loader />
      ) : (
        <JobDetailsMainComponent
          jobTitle={jobTitle}
          jobType={jobType}
          jobListDuration={jobListDuration}
          image={IMAGE}
          companyName={companyName}
          jobLocation={jobLocation}
          jobDescription={jobDescription}
        />
      )}
    </div>
  );
};

export default JobDetailsPage;
