import React from 'react';
import { useState } from 'react';
import LoginRegister from './LoginRegister';

const LoginButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <span className="cursor login-button" onClick={showModal}>
        회원가입/로그인
      </span>
      {modalOpen && <LoginRegister setModalOpen={setModalOpen} />}
    </>
  );
};

export default LoginButton;
