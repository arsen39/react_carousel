import React, { Component } from "react";
import db from "./CarouselDB";
import Slide from "./Slide";
import CarouselSets from "./CarouselSets";
import lArr from "./img/left.svg";
import rArr from "./img/right.svg";
import styles from "./Carousel.module.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesArr: db,
      currentSlideId: 0,
      isSlideShowOn: false,
      slideShowKey: null,
      slideShowDelay: 5,
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

  slideShowHandler = () => {
    const { isSlideShowOn, slideShowKey, slideShowDelay } = this.state;
    if (isSlideShowOn) {
      clearInterval(slideShowKey);
    } else {
      this.setState({
        slideShowKey: setInterval(
          () => this.forwardClickHndlr(),
          slideShowDelay * 1000
        ),
      });
    }
    this.setState({
      isSlideShowOn: !isSlideShowOn,
    });
  };

  slideShowDelayChange = (v) => {
    const { slideShowKey, slideShowDelay } = this.state;
    this.setState({
      slideShowDelay: isNaN(v) || v <= 0 ? 1 : v,
    });
    clearInterval(slideShowKey);
    this.setState({
      slideShowKey: setInterval(
        () => this.forwardClickHndlr(),
        slideShowDelay * 1000
      ),
    });
  };

  render() {
    return (
      <div className={styles.carouselOuterWrapper}>
        <div className={styles.carouselInnerWrapper}>
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

          <CarouselSets
            isSlideShowOn={this.state.isSlideShowOn}
            slideShowHandler={this.slideShowHandler}
            slideShowDelayChange={this.slideShowDelayChange}
            slideShowDelay={this.state.slideShowDelay}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
