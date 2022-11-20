import React, { useState } from 'react';
import HambergerMenus from './HambergerMenus';

const Hamburger = () => {
  const [mouseOn, setMouseOn] = useState(false);

  const showMenu = () => {
    setMouseOn(true);
  };

  const closeMenu = () => {
    setMouseOn(false);
  };

  const handleOnclick = () => {
    setMouseOn(!mouseOn);
  };

  return (
    <>
      <i
        className="fa-solid fa-bars cursor"
        onMouseOver={showMenu}
        onClick={handleOnclick}
      ></i>
      {mouseOn && (
        <HambergerMenus setMouseOn={setMouseOn} onMouseLeave={closeMenu} />
      )}
    </>
  );
};

export default Hamburger;
