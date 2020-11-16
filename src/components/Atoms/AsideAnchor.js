import React from 'react';

function AsideAnchor({ children }) {
  console.log(children);
  return (
    <span style={{ outline: '1px solid red' }}>
      {children}
    </span>
  );
}

export default AsideAnchor;
