import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const PasswordModal = ({ checkedEmail, setModalOpen, setModalMode }) => {
  const [inputPassword, setInputPassword] = useState('');
  const inputRef = useRef();
  const localStorage = window.localStorage;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <div className="password-modal">
      <div className="password-modal__header">
        <span
          onClick={() => {
            setModalMode(1);
          }}
        >
          &lt;
        </span>
        <h1 className="password-modal__title">이메일로 로그인</h1>
        <div> </div>
      </div>
      <div className="password-modal__body">
        <div className="password">
          <form
            action=""
            className="password-form"
            onSubmit={(event) => {
              event.preventDefault();
              const password = localStorage.getItem(checkedEmail);
              console.log(inputPassword);
              if (password === inputPassword) {
                console.log('hello');
                setModalMode(0);
                setModalOpen(false);
              } else {
                console.log('wrong');
              }
            }}
          >
            <label for="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              required
              ref={inputRef}
              onChange={onChange}
            ></input>
          </form>
        </div>
        <button>다음</button>
        <span>비밀번호 초기화/변경</span>
      </div>
    </div>
  );
};

export default PasswordModal;
