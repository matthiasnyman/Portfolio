import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
// import Pagination from 'docs/src/modules/components/Pagination';

import Data from './data.json';
import DisplayComponent from './DisplayComponent'



function DemoSimple() {
  const [data, setData] = useState(Data.view);
  const [index, setIndex] = useState(1);
  const layout = []
  data.forEach(item => {
    layout.push( <DisplayComponent key={`component_${item.id}`} data={item} /> )
  });

  const handleChangeIndex = index => {
    setIndex(index)
  };
  // const handleChange = () => {
  //   setIndex(0)
  // };

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <>
    {/* <button onClick={handleChange} /> */}
    <SwipeableViews enableMouseEvents index={index} onChangeIndex={handleChangeIndex}>
      {layout}
    </SwipeableViews>
    </>
  );
}

export default DemoSimple;
