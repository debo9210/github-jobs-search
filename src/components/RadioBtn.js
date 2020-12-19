import React from 'react';

const RadioBtn = ({ id, value, radioBtnValue }) => {
  return (
    <>
      <div className='Input-Radio'>
        <input
          type='radio'
          name='location'
          id={id}
          value={value}
          onClick={radioBtnValue}
        />
        <label className='Radio-Label' htmlFor={value}>
          {value}
        </label>
      </div>
    </>
  );
};

export default RadioBtn;
