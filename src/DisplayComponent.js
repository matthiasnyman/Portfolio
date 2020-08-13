import React from 'react';

const DisplayComponent = (props) => {
  const {header, text, bgColor} = props.data;
  const {handleChange, index} = props;

  const sectionStyle = {
    backgroundImage: bgColor
  }

  const textSection = [];

  text.forEach(text => {
    textSection.push(<p>{text}</p>)
  });


  return(
    <section className="sections" style={sectionStyle}>
      <h3> {header} </h3>

      {textSection}

    </section>
  )

};

export default DisplayComponent;