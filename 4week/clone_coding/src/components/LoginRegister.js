import React from 'react';
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../styles/modal.css';

const LoginRegister = ({ setModalOpen }) => {
  // 버튼이 눌렸다면 로그인 모달이 화면에 보여져야하기에 초기값을 true로 준다.
  const [modalMode, setModalMode] = useState(1);

  const onClick = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal">
      {modalMode === 1 && (
        <LoginModal setModalOpen={setModalOpen} setModalMode={setModalMode} />
      )}
      {modalMode === 2 && (
        <RegisterModal
          setModalOpen={setModalOpen}
          setModalMode={setModalMode}
        />
      )}
      {/*registerModalOpen와 loginModalOpen 모두 false면 모달창을 꺼줘야 한다.  */}
      <div className="modal-black" onClick={onClick}></div>
    </div>
  );
};

export default LoginRegister;
