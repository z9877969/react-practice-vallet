import React from 'react';
const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
