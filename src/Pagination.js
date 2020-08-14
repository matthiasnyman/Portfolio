import React from 'react';

const Pagination = (props) => {
  const { page, handleChange } = props;
  const dots = [];

  for(let i = 0; i < 3; i++){
    dots.push(<input type='radio' class='pagination-box' id={i} active />)
  }

  console.log(props);
  return (
    <div className='pagination'>
      {dots}
    </div>
  );
};

export default Pagination;
