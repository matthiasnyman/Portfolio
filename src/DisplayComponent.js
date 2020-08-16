import React from 'react';

const DisplayComponent = (props) => {
  const { header, Paragraf, bgColor, list } = props.data;

  console.log(props.data);

  const sectionStyle = {
    backgroundImage: bgColor,
  };

  const textSection = [];
  const listItems = [];

  Paragraf.forEach((item) => {
    if(item.style === "center") {
      textSection.push(<p className='text-fild center'>{item.text}</p>);
    }else if(item.style == "button") {
      textSection.push(<a href={item.text} className='text-fild-button'>See more</a>);
    }else {
      textSection.push(<p className='text-fild'>{item.text}</p>);
    }
  });

  if (list) {
    list.forEach((item) => {
      listItems.push(<li>{item}</li>);
    });
  }

  return (
    <section className="sections" style={sectionStyle}>
      <h3> {header} </h3>

      {textSection}

      <ul className='list-fild'> {listItems} </ul>
    </section>
  );
};

export default DisplayComponent;
