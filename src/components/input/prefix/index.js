import React from 'react';

const Prefix = ({ el }) => {
  if (!el) return null;
  return <span className="_m-input-prefix"> {el} </span>;
};

export default Prefix;
