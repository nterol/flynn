import React, { useRef } from 'react';

import AsideAnchor from '../Atoms/AsideAnchor';

function Aside({ children }) {
  const textRef = useRef(null);

  return <AsideAnchor textRef={textRef}>{children}</AsideAnchor>;
}

export default Aside;
