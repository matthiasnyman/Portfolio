import React from 'react';

const DisplayComponent = (props) => {
  const { header, text, bgColor, list } = props.data;

  const sectionStyle = {
    backgroundImage: bgColor,
  };

  const textSection = [];
  const listItems = [];

  text.forEach((text) => {
    textSection.push(<p className='text-fild'>{text}</p>);
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
