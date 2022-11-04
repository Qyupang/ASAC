import React from 'react';

const RegisterButton = ({ allowed }) => {
  const style = allowed ? { backgroundColor: 'blue', color: 'white' } : null;

  return (
    <button
      className="register-modal__body-button-register"
      disabled={!allowed}
      style={style}
    >
      회원가입하기
    </button>
  );
};

export default RegisterButton;
