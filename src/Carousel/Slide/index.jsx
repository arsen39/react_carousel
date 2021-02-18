import React from "react";
import styles from "./Slide.module.css";
import lArr from ".././img/left.svg";
import rArr from ".././img/right.svg";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Slide = (props) => {
  const {
    slideObj: { src, header, desc },
    slideClickHndlr
  } = props;

  const backClickHndlr = () => slideClickHndlr(false);
  const forwardClickHndlr = () => slideClickHndlr(true);
  const handle = useFullScreenHandle();

  return (
    <div className={styles.slideWrapper}>
      <FullScreen handle={handle}>
      <img
        src={lArr}
        alt=""
        onClick={backClickHndlr}
        className={styles.carouselArrowL}
      />
      <img
        src={rArr}
        alt=""
        onClick={forwardClickHndlr}
        className={styles.carouselArrowR}
      />
      <img className={styles.slideImg} src={src} alt={header} onDoubleClick={handle.enter}/>
      <article className={styles.slideArticle}>
        <h1 className={styles.slideHeader}>{header}</h1>
        <p className={styles.slideDesc}>{desc}</p>
      </article>
      </FullScreen>
    </div>
  );
};

export default Slide;
