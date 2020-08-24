import React from 'react';

const DisplayComponent = (props) => {
  const { header, Paragraf, bgColor, list } = props.data;

  const sectionStyle = {
    background: bgColor
  };

  const textSection = [];
  const listItems = [];

  Paragraf.forEach((item) => {
    if(item.style === "center") {
      textSection.push(<p key={`text_${item.key}`} className='text-fild center'>{item.text}</p>);
    }else if(item.style === "button") {
      textSection.push(<a key={`text_${item.key}`} target="_blank" rel="noopener noreferrer" href={item.text} className='text-fild-button'>See more</a>);
    }else {
      textSection.push(<p key={`text_${item.key}`} className='text-fild'>{item.text}</p>);
    }
  });

  if (list) {
    list.forEach((item) => {
      listItems.push(<li key={`list_${item}`}>{item}</li>);
    });
  }

  return (
    <section className="sections" style={sectionStyle}>
      <h3 className='section-header'> {header} </h3>

      {textSection}

      <ul className='list-fild'> {listItems} </ul>
    </section>
  );
};

export default DisplayComponent;
