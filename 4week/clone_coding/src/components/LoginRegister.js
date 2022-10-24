import React from 'react';
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../styles/modal.css';

const LoginRegister = ({ setModalOpen }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalopen] = useState(true);

  // const showRegisterModal = () => {
  //   console.log('clicked');
  //   setRegisterModalOpen(true);
  // };

  return (
    <div className="modal">
      {!registerModalOpen && (
        <LoginModal
          setLoginModalopen={setLoginModalopen}
          setRegisterModalOpen={setRegisterModalOpen}
        />
      )}
      {registerModalOpen && (
        <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />
      )}
      {!registerModalOpen && !loginModalOpen && setModalOpen(false)}
    </div>
  );
};

export default LoginRegister;
