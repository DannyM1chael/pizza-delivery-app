import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollBtn() {
  const scrollHandler = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="mouse">
      <Link to="#" onClick={scrollHandler} className="mouse-icon">
        <div className="mouse-wheel">
          <span className="ion-ios-arrow-up"></span>
        </div>
      </Link>
    </div>
  );
}
