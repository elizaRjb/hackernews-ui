import React from 'react';

const Pagination = props => {
  const { totalPages, page, onButtonClick } = props;

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={() => onButtonClick('prev')} disabled={page === 1}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button className="pagination__btn" onClick={() => onButtonClick('next')} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
