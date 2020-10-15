import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styles from './Content.module.scss';

const Content = ({ body, title }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
    <div style={{ border: '1px solid red' }}>coucou</div>
      <MDXRenderer >{body}</MDXRenderer>
      </div>
  </div>
);

export default Content;
