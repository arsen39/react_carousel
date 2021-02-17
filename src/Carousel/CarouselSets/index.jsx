import React from "react";
import styles from "./CarouselSets.module.css";
import playImg from "./img/play.svg";
import stopImg from "./img/stop.svg";

const CarouselSets = (props) => {
  const { isSlideShowOn, slideShowHandler, slideShowDelayChange, slideShowDelay } = props;

  const slideshowBtnClick = () => slideShowHandler();

  const slideShowDelayChangeHndl = (e) => slideShowDelayChange(e.target.value);

  return (
    <div className={styles.carouselSetsWrapper}>
      <img
        src={isSlideShowOn ? stopImg : playImg}
        alt={isSlideShowOn ? "Stop show" : "Start show"}
        className={styles.carouselSetsSlideshowBtn}
        onClick={slideshowBtnClick}
      />
      <input type="number" onChange={slideShowDelayChangeHndl} value={slideShowDelay}/>
    </div>
  );
};

export default CarouselSets;
