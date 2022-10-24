import React from 'react';
import LoginModal from './LoginModal';
// import RegisterModal from './RegisterModal';
import '../styles/modal.css';

const LoginRegister = ({ setLoginModalOpen }) => {
  return <LoginModal setLoginModalOpen={setLoginModalOpen} />;
};

export default LoginRegister;
