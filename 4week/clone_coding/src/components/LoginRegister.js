import React from 'react';
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../styles/modal.css';

const LoginRegister = ({ setModalOpen }) => {
  // 버튼이 눌렸다면 로그인 모달이 화면에 보여져야하기에 초기값을 true로 준다.
  const [loginModalOpen, setLoginModalopen] = useState(true);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const onClick = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal">
      {!registerModalOpen && (
        // 로그인 모달에서 이메일 버튼이 눌리면 로그인 모달을 끄고 회원가입 모달을 띄워줘야해서
        //setLoginModalopen과 setRegisterModalOpen를 props로 보내준다.
        <LoginModal
          setLoginModalopen={setLoginModalopen}
          setRegisterModalOpen={setRegisterModalOpen}
        />
      )}
      {registerModalOpen && (
        <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />
      )}
      {/*registerModalOpen와 loginModalOpen 모두 false면 모달창을 꺼줘야 한다.  */}
      {!registerModalOpen && !loginModalOpen && setModalOpen(false)}
      <div className="modal-black" onClick={onClick}></div>
    </div>
  );
};

export default LoginRegister;
