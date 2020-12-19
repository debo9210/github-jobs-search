import React from 'react';

const Pagination = ({
  jobsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
  nextPageRef,
  prevPageRef,
  pagesRef,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='PaginationNav'>
      <button className='BtnSkip' onClick={prevPage} ref={prevPageRef}>
        <i className='material-icons'>keyboard_arrow_left</i>
      </button>
      <ul className='Pagination' ref={pagesRef}>
        {pageNumbers.map((num) => (
          <li key={num} className='pageItem'>
            <button className='PaginationBtn' onClick={() => paginate(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
      <button className='BtnSkip Prev' onClick={nextPage} ref={nextPageRef}>
        <i className='material-icons'>keyboard_arrow_right</i>
      </button>
    </nav>
  );
};

export default Pagination;
