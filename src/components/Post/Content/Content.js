import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styles from './Content.module.scss';

// type Props = {
//   body: string,
//   title: string,
// }

const Content = ({ body, title }) => {
  console.log('🗑', body);
  return (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <MDXRenderer>{body}</MDXRenderer>
      </div>
  </div>
  );
};

export default Content;
