import React from 'react';
import { Link } from 'gatsby';

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <p>This is my about page</p>
      <Link to="/">&larr; back to home</Link>
    </>
  );
};

export default About;
