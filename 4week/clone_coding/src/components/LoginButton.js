import React from 'react';
import { useState } from 'react';
import LoginRegister from './LoginRegister';

const LoginButton = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const showLoginModal = () => {
    setLoginModalOpen(true);
  };

  return (
    <div>
      <span className="cursor login-button" onClick={showLoginModal}>
        회원가입/로그인
      </span>
      {loginModalOpen && (
        <LoginRegister setLoginModalOpen={setLoginModalOpen} />
      )}
    </div>
  );
};

export default LoginButton;
