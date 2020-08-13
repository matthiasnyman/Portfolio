import React from 'react';

const DisplayComponent = (props) => {
  const {header, text, bgColor} = props.data;
  const {handleChange, index} = props;

  const sectionStyle = {
    backgroundImage: bgColor
  }


  return(
    <section className="sections" style={sectionStyle}>
      <h3> {header} </h3>

      <p>{text}</p>

    </section>
  )

};

export default DisplayComponent;