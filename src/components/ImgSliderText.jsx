
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import "./ImgSliderText.css";

import img1 from "../assets/Images/building management system2.jpg";
import img2 from "../assets/Images/value engineering.jpg";
import img3 from "../assets/Images/value engineering2.jpg";

export default class ImgSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={img1} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={img2} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={img3} alt="3" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="slider-wrapper">
        <div className="slider-container">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
          />
        </div>
        <div className="text-section">
          <h2 className="title">Value Engineering</h2>
          <hr className="divider" />
          <p className="content">
            We specialize in value engineering, optimizing your electrical designs to minimize costs without compromising quality or safety. Our team of experts identifies cost-effective alternatives and innovative solutions to maximize the value of your investment.
          </p>
        </div>
      </div>
    );
  }
}