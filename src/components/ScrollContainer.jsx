import React, { Children, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContainer = ({children}) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.06,
    });

    return () => {
      scroll.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollContainer;
