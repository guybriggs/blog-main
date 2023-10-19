import React from 'react';
import PropTypes from 'prop-types';

const AboutPage = ({ data }) => {
  const { 
    title,
    mainColour, 
    secondaryColour,
    textColour,
    intro
  } = data.frontmatter;

  return (
    <div className='border-4' style={{ backgroundColor: mainColour, borderColor: secondaryColour, color: textColour }}>
      <h1>{title}</h1>
      <div className='flex flex-row'>
        {intro.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;