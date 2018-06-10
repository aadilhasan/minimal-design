import React from 'react';

const Suffix = ({ el }) => {
  if (!el) return null;
  return <span className="_m-input-suffix"> {el} </span>;
};

export default Suffix;
