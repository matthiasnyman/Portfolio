import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Data from './data.json';
import DisplayComponent from './DisplayComponent'


function DemoSimple() {
  const [data, setData] = useState(Data.view);
  const layout = []
  data.forEach(item => {
    layout.push( <DisplayComponent key={`component_${item.id}`} data={item} /> )
  });
  console.log(layout)

  return (
    <SwipeableViews enableMouseEvents>
      {layout}
    </SwipeableViews>
  );
}

export default DemoSimple;
