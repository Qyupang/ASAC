import React from 'react';

const PasswordGuide = ({ condition }) => {
  return (
    <div className="password-guide">
      {condition === 'start' && (
        <span>
          영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
          입력해주세요.
        </span>
      )}
      {condition === false && (
        <span style={{ color: 'red' }}>올바르지 않은 비밀번호입니다.</span>
      )}
      {condition === 'confirm false' && (
        <span style={{ color: 'red' }}>비밀번호가 서로 일치하지 않습니다.</span>
      )}
      {condition === 'confirm true' && (
        <span style={{ color: '#08ba9c' }}>사용 가능한 비밀번호입니다.</span>
      )}
    </div>
  );
};

export default PasswordGuide;
