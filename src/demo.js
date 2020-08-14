import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Data from './data.json';
import DisplayComponent from './DisplayComponent';

import arrow from './img/arrow.svg';

function DemoSimple() {
  const [data, setData] = useState(Data.view);
  const [index, setIndex] = useState(0);
  const layout = [];
  data.forEach((item) => {
    layout.push(<DisplayComponent key={`component_${item.id}`} data={item} />);
  });

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handleClick = (i) => {
    if (i && index < (data.length - 1) ) {
      setIndex(index + 1);
    } else if (!i && index !== 0) {
      setIndex(index - 1);
    } else if (!i && index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <>
      <SwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={handleChangeIndex}
      >
        {layout}
      </SwipeableViews>
      <div className="arrow-group">
        <span
          className="arrow"
          id="back"
          onClick={() => handleClick(false)}
        ></span>

        <span
          className="arrow"
          id="next"
          onClick={() => handleClick(true)}
        ></span>

      </div>
      {
        index === 0 ? <img src={arrow} className='swipe-arror' alt="swipe arrow" /> : null
      }
    </>
  );
}

export default DemoSimple;
