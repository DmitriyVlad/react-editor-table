import React, { Component } from 'react';

import scrollToTop from 'Helpers/scroll-to-top';

class MainPageView extends Component {
  componentDidMount() {

    scrollToTop();
  }

  render() {

    return <p>Hello world!</p>;
  }
}

export default MainPageView;
