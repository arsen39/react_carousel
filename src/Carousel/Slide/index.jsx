import React from 'react';
import styles from './Slide.module.css';

const Slide = (props) => {
  const {slideObj:{src, header, desc}} = props
  return (
    <div className={styles.slideWrapper}>
      <img className={styles.slideImg} src={src} alt=""/>
      <article className={styles.slideArticle}>
        <h1 className={styles.slideHeader}>{header}</h1>
        <p className={styles.slideDesc}>{desc}</p>
      </article>
    </div>
  );
}

export default Slide;
