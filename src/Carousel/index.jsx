import React, { Component } from "react";
import db from "./CarouselDB";
import Slide from "./Slide";
import lArr from "./img/left.svg";
import rArr from "./img/right.svg";
import styles from "./Carousel.module.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesArr: db,
      currentSlideId: 0,
    };
  }

  backClickHndlr = () => this.slideClickHndlr(false);

  forwardClickHndlr = () => this.slideClickHndlr(true);

  slideClickHndlr = (isForward) =>
    this.setState({
      currentSlideId: this.slideIdCalc(isForward),
    });

  slideIdCalc = (isForward) => {
    const { imagesArr, currentSlideId } = this.state;
    const length = imagesArr.length;
    return isForward
      ? (currentSlideId + 1) % length
      : (currentSlideId - 1 + length) % length;
  };

  render() {
    return (
      <div className={styles.carouselWrapper}>
        <img
          src={lArr}
          alt=""
          onClick={this.backClickHndlr}
          className={styles.carouselArrowL}
        />
        <Slide slideObj={this.state.imagesArr[this.state.currentSlideId]} />
        <img
          src={rArr}
          alt=""
          onClick={this.forwardClickHndlr}
          className={styles.carouselArrowR}
        />
      </div>
    );
  }
}

export default Carousel;
