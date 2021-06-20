import React, { useState, useEffect } from "react";

const UseEffect_demo3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize',handleResize);

    // Whenever component gets unmounted, the returned is called and cleanup code is run
    return () => {
        window.removeEventListener('resize',handleResize);
    }
  },[]);
  return <div>
      {windowWidth}
  </div>;
};

export default UseEffect_demo3;
