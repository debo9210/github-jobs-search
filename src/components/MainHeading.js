import React from 'react';
import HeadingImg from '../images/backgroundImg.png';

const MainHeading = ({ searchBtnHandler, searchRef }) => {
  return (
    <>
      <div
        className='HeadingBackground'
        style={{ background: `url(${HeadingImg})` }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='InputGroup'>
            <i className='material-icons WorkOutline'>work_outline</i>
            <input
              className='SearchJobs'
              type='text'
              placeholder='Title, companies, expertise or benefits'
              ref={searchRef}
            />
            <button onClick={searchBtnHandler} className='SearchBtn'>
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainHeading;
