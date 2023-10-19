import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const AboutPage = ({ data }) => {
  const { title, colours, intro } = data.frontmatter;

  return (
    <div>
      <h1 style={{ color: colours.text }}>{title}</h1>
      <div style={{ backgroundColor: colours.main, color: colours.text }}>
        <h2>About Us</h2>
      </div>
      <div style={{ backgroundColor: colours.secondary, color: colours.text }}>
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