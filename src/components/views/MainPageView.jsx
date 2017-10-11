import React, { Component } from 'react';

import scrollToTop from 'Helpers/scroll-to-top';
import bgHero from './bg-hero.jpg';

class MainPageView extends Component {
  componentDidMount() {

    scrollToTop();
  }

  render() {

    return [
      <p>Hello world!</p>,
      <img src={ bgHero } alt="" />
    ];
  }
}

export default MainPageView;
