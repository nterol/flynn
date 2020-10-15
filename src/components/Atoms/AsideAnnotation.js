import React from 'react';
import { AnnotationLabel } from 'react-annotation';

function AsideAnnotations({ children }) {
  return (
        <svg>
            <AnnotationLabel note={{ label: children }} />
        </svg>
  );
}

export default AsideAnnotations;