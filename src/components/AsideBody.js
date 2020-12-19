import React from 'react';
import RadioBtn from './RadioBtn';

const AsideBody = ({
  radioBtnHandler,
  locationInputRef,
  onBlurHandler,
  fullTimeValue,
  fulltimeClickHandler,
}) => {
  return (
    <>
      <aside className='AsideMain'>
        <form>
          <div className='Input-Check'>
            <input
              type='checkbox'
              name='Full Time'
              id='FullTime'
              ref={fullTimeValue}
              onClick={fulltimeClickHandler}
            />
            <label className='FullTime-Label' htmlFor='FullTime'>
              Full time
            </label>
          </div>

          <div className='Input-Search-Location'>
            <label className='Location-Label' htmlFor='SearchLocation'>
              Location
            </label>
            <i className='material-icons Public'>public</i>
            <input
              type='text'
              className='SearchLocation'
              placeholder='City, state, zip code or country'
              ref={locationInputRef}
              onBlur={onBlurHandler}
            />
          </div>

          <div className='Location-Select'>
            <RadioBtn
              id='London'
              value='London'
              radioBtnValue={radioBtnHandler}
            />
            <RadioBtn
              id='Amsterdam'
              value='Amsterdam'
              radioBtnValue={radioBtnHandler}
            />
            <RadioBtn
              id='New-York'
              value='New York'
              radioBtnValue={radioBtnHandler}
            />
            <RadioBtn
              id='Berlin'
              value='Berlin'
              radioBtnValue={radioBtnHandler}
            />
          </div>
        </form>
      </aside>
    </>
  );
};

export default AsideBody;
