import React, { Component } from "react";
import db from "./CarouselDB";
import Slide from "./Slide";
import CarouselSets from "./CarouselSets";
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
          () => this.slideClickHndlr(true),
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
        () => this.slideClickHndlr(true),
        slideShowDelay * 1000
      ),
    });
  };

  render() {
    return (
      <div className={styles.carouselOuterWrapper}>
        <div className={styles.carouselInnerWrapper}>
          
          <Slide slideObj={this.state.imagesArr[this.state.currentSlideId]} slideClickHndlr={this.slideClickHndlr} />

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
