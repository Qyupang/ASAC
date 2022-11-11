import React from 'react';

const RegisterButton = ({
  allowed,
  setModalOpen,
  setModalMode,
  email,
  password,
}) => {
  const style = allowed ? { backgroundColor: 'blue', color: 'white' } : null;
  const localStorage = window.localStorage;

  const onClick = (event) => {
    event.preventDefault();
    setModalMode(3);
    localStorage.setItem('email', email);
    localStorage.setItem(`${email}`, password);
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
