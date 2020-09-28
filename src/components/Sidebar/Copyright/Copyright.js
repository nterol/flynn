import React from 'react';
import styles from './Copyright.module.scss';

// type Props = {
//   copyright: string
// };

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
    {copyright}
  </div>
);

export default Copyright;
