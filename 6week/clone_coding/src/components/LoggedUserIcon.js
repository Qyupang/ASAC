import React, { useState } from 'react';

const LoggedUserIcon = () => {
  const [avatarClicked, setAvatarClicked] = useState(false);
  const showMenu = () => {
    avatarClicked
      ? setAvatarClicked(!avatarClicked)
      : setAvatarClicked(!avatarClicked);
  };
  return (
    <div className="header__loggedin-icon">
      <i className="header__loggedin-icon__bell fa-regular fa-bell" />
      <img
        src="https://static.wanted.co.kr/oneid-user/profile_default.png"
        alt=""
        className="header__loggedin-icon__avatar"
        onClick={showMenu}
        style={avatarClicked ? { border: '1px solid #5688ff' } : null}
      />
    </div>
  );
};

export default LoggedUserIcon;
