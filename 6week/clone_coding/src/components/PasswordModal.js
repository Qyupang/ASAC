import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const PasswordModal = ({ checkedEmail, setModalOpen, setModalMode }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [buttonChange, setButtonChange] = useState(false);
  const [checkPassword, setCheckPassword] = useState(true);
  const inputRef = useRef();
  const localStorage = window.localStorage;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = (event) => {
    setInputPassword(event.target.value);
    setCheckPassword(true);
    if (event.target.value) {
      setButtonChange(true);
    } else {
      setButtonChange(false);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const password = localStorage.getItem(checkedEmail);
    console.log(inputPassword);
    if (password === inputPassword) {
      setCheckPassword(true);
      setModalMode(0);
      setModalOpen(false);
    } else {
      setButtonChange(false);
      setCheckPassword(false);
    }
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
          <form action="" className="password-form" onSubmit={handleOnSubmit}>
            <label for="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              required
              ref={inputRef}
              onChange={onChange}
              style={!checkPassword ? { borderColor: '#f1415c' } : null}
            ></input>
            {!checkPassword ? (
              <div style={{ color: '#f1415c', marginTop: '5px' }}>
                비밀번호가 일치하지 않습니다.
              </div>
            ) : null}
          </form>
        </div>
        <button
          disabled={buttonChange}
          style={
            buttonChange ? { color: 'white', backgroundColor: '#36f' } : null
          }
          onClick={handleOnSubmit}
        >
          다음
        </button>

        <span>비밀번호 초기화/변경</span>
      </div>
    </div>
  );
};

export default PasswordModal;
