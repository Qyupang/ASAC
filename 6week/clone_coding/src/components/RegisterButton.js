import React from 'react';

const RegisterButton = ({ allowed, setModalMode }) => {
  const style = allowed ? { backgroundColor: 'blue', color: 'white' } : null;

  const onClick = (event) => {
    event.preventDefault();
    setModalMode(3);
  };

  return (
    <button
      className="register-modal__body-button-register"
      disabled={!allowed}
      onClick={allowed ? onClick : null}
      style={style}
    >
      회원가입하기
    </button>
  );
};

export default RegisterButton;
