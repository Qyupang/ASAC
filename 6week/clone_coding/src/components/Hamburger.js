import React, { useState } from 'react';
import HambergerMenus from './HambergerMenus';

const Hamburger = () => {
  const [mouseOn, setMouseOn] = useState(false);

  const showMenus = () => {
    setMouseOn(true);
    console.log('hi');
  };

  return (
    <>
      <i className="fa-solid fa-bars cursor" onMouseOver={showMenus}></i>
      {mouseOn && <HambergerMenus setMouseOn={setMouseOn} />}
    </>
  );
};

export default Hamburger;
