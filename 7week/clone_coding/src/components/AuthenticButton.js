import React from 'react';

const AuthenticButton = ({
  setIsValidAuthenNum,
  authenticNum,
  isValidAuthenNum,
}) => {
  const handleOnclick = (event) => {
    event.preventDefault();
    if (authenticNum === '1111') {
      setIsValidAuthenNum(true);
    }
  };
  return (
    <button
      style={isValidAuthenNum ? { bottom: '42px', color: '#CCCCCC' } : null}
      className="authenticate-button"
      onClick={handleOnclick}
    >
      인증하기
    </button>
  );
};

export default AuthenticButton;
