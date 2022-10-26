import React, { useState } from 'react';

const RegisterModal = ({ setRegisterModalOpen }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);

  const closeModal = () => {
    setRegisterModalOpen(false);
  };

  const onChange = (event) => {
    setCheckAll(event.target.checked);
    setFirstCheck(event.target.checked);
    setSecondCheck(event.target.checked);
  };

  const onChangeIndividual = (event) => {};

  return (
    <div className="register-modal">
      <div className="register-modal__header">
        <h1 className="register-modal__title">회원가입</h1>
        <i className="fa-solid fa-xmark" onClick={closeModal}></i>
      </div>
      <div className="login-modal__body">
        <div className="login-modal__name">
          <form action="" className="name-form">
            <label for="username">이름</label>
            <input
              type="text-box"
              id="username"
              placeholder="이름을 입력해 주세요."
            />
          </form>
        </div>
        <div className="login-modal__phone-number">
          <form action="" className="number-form">
            <label for="phone-number">휴대폰 번호</label>
            <select name="country" id="select-country">
              <option value="kor">대한민국 +82</option>
              <option value="jap">Japan +81</option>
              <option value="eng">Canada +1</option>
            </select>
            <div className="phone-number__box">
              <input
                type="tel"
                id="phone-number"
                placeholder="(예시)01034567890"
              />
              <button className="authentication-button">인증번호 받기</button>
              <input
                type="text"
                id="authentication"
                placeholder="인증번호를 입력해 주세요."
              />
            </div>
          </form>
          <div className="password">
            <form action="" className="password-form">
              <label for="password">비밀번호</label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력해 주세요."
              />
              <div className="password-guide">
                <span>
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자
                  이상 입력해주세요.
                </span>
              </div>
            </form>
          </div>
          <div className="password-confirmation">
            <label for="password-confirm">비밀번호 확인</label>
            <input
              type="password"
              id="password-confirm"
              placeholder="비밀번호를 다시 한번 입력해 주세요."
            />
          </div>
          <div className="agreements">
            <div className="check-all">
              <label>
                <input
                  type="checkbox"
                  name="agreeAll"
                  value="agree-all"
                  id="agree-all"
                  onChange={onChange}
                  checked={checkAll}
                />
                전체동의
              </label>
            </div>
            <div className="check-individual">
              <div className="essential">
                <label>
                  <input
                    type="checkbox"
                    name="agreeFirst"
                    checked={firstCheck}
                    // onChange={}
                  />{' '}
                  개인정보 수집 및 이용 동의 (필수)
                </label>
                <a href="https://help.wanted.co.kr/hc/ko/articles/360040127872">
                  자세히
                </a>
              </div>
              <div className="optional">
                <label>
                  <input
                    type="checkbox"
                    name="agreeSecond"
                    checked={secondCheck}
                  />{' '}
                  이벤트 소식 등 알림 정보 받기
                </label>
                <a href="https://help.wanted.co.kr/hc/ko/articles/360040540111">
                  자세히
                </a>
              </div>
            </div>
          </div>
          <div className="register-modal__body-button">
            <button className="register-modal__body-button-register">
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
