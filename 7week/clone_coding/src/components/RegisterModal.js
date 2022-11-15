import React, { useState } from 'react';
import WarningMessage from './WarningMessage';
import AuthenticMessage from './AuthenticMessage';
import PasswordGuide from './PasswordGuide';
import RegisterButton from './RegisterButton';
import useInput from '../hooks/useInput';
import AuthenticButton from './AuthenticButton';
import ModalInput from '../styles/ModalInput';

const RegisterModal = ({ setModalOpen, setModalMode, checkedEmail }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [newClassName, setNewClassName] = useState('authentication-button');
  const [authenticText, setAuthenticText] = useState('인증번호 받기');
  const [authenticNum, setAuthenticNum] = useState('');
  const [isValidAuthenNum, setIsValidAuthenNum] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setModalMode(0);
  };

  const nameValidation = (name) => {
    const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (!regex.test(name)) {
      return false;
    } else {
      return true;
    }
  };

  const phoneNumValidation = (phoneNum) => {
    const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

    if (phoneNum) {
      if (!regex.test(phoneNum)) {
        setNewClassName('authentication-button');
        return false;
      } else {
        setNewClassName('authenticated-button');
        return true;
      }
    }
  };

  const passwordValidation = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!regex.test(password)) {
      return false;
    } else {
      return true;
    }
  };

  const confirmValidation = (pwConfirm) => {
    if (pwConfirm !== password) {
      return 'confirm false';
    } else {
      return 'confirm true';
    }
  };

  const {
    value: name,
    onChange: nameChange,
    isValid: isValidName,
  } = useInput('', nameValidation);

  const {
    value: phoneNum,
    onChange: phoneNumChange,
    isValid: isValidPhoneNum,
  } = useInput('', phoneNumValidation);

  const {
    value: password,
    onChange: passwordChange,
    isValid: isValidPw,
  } = useInput('', passwordValidation, 'start');

  const {
    value: passwordConfirm,
    onChange: pwConfirmChange,
    isValid: isValidConfirm,
  } = useInput('', confirmValidation, 'confirm start');

  const authenticButtonClicked = (e) => {
    e.preventDefault();
    setAuthenticText('인증번호 재전송');
    setNewClassName('authentication-button');
  };

  const authenticNumCheck = (e) => {
    setAuthenticNum(e.target.value);
  };

  const onChange = (event) => {
    setCheckAll(event.target.checked);
    setFirstCheck(event.target.checked);
    setSecondCheck(event.target.checked);
  };

  const onChangeIndividual = (event) => {
    if (!event.target.checked) {
      if (checkAll) {
        setCheckAll(false);
        if (event.target.name === 'agreeFirst') {
          setFirstCheck(event.target.checked);
        } else {
          setSecondCheck(event.target.checked);
        }
      } else {
        if (event.target.name === 'agreeFirst') {
          setFirstCheck(event.target.checked);
        } else {
          setSecondCheck(event.target.checked);
        }
      }
    } else {
      if (event.target.name === 'agreeFirst') {
        setFirstCheck(true);
        if (secondCheck) {
          setCheckAll(true);
          console.log(firstCheck, secondCheck);
        }
      } else {
        setSecondCheck(true);
        if (firstCheck) {
          setCheckAll(true);
          console.log(firstCheck, secondCheck);
        }
      }
    }
  };

  return (
    <div className="register-modal">
      <div className="register-modal__header">
        <h1 className="register-modal__title">회원가입</h1>
        <i className="fa-solid fa-xmark" onClick={closeModal}></i>
      </div>
      <div className="login-modal__body">
        <div className="login-modal__email">
          <form action="" className="email-form">
            <label for="email">이메일</label>
            {/* <input
              type="text-box"
              id="email"
              className="email-disabled"
              placeholder={checkedEmail}
              disabled={true}
            /> */}
            <ModalInput.EmailInput
              type="text-box"
              id="email"
              className="email-disabled"
              placeholder={checkedEmail}
              disabled={true}
            />
          </form>
        </div>
        <div className="login-modal__name">
          <form
            action=""
            className="name-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label for="username">이름</label>
            <input
              id="username"
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={nameChange}
              required
            />
          </form>
        </div>
        <div className="login-modal__phone-number">
          <form
            action=""
            className="number-form"
            onSubmit={(event) => event.preventDefault()}
          >
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
                value={phoneNum}
                onChange={phoneNumChange}
                required
              />
              <button
                className={newClassName}
                disabled={!isValidPhoneNum}
                onClick={authenticButtonClicked}
              >
                {authenticText}
              </button>
              {!isValidPhoneNum && phoneNum && (
                <WarningMessage warn={'전화번호'} />
              )}
              <input
                type="text"
                id="authentication"
                placeholder="인증번호를 입력해 주세요."
                disabled={
                  authenticText !== '인증번호 재전송' || isValidAuthenNum
                }
                style={
                  isValidAuthenNum
                    ? {
                        backgroundColor: '#f2f4f7',
                        color: '#CCCCCC',
                      }
                    : null
                }
                onChange={authenticNumCheck}
              />
              {authenticText === '인증번호 재전송' && (
                <AuthenticButton
                  setIsValidAuthenNum={setIsValidAuthenNum}
                  authenticNum={authenticNum}
                  isValidAuthenNum={isValidAuthenNum}
                />
              )}
            </div>
            {authenticText === '인증번호 재전송' && (
              <AuthenticMessage isValidAuthenNum={isValidAuthenNum} />
            )}
          </form>
        </div>
        <div className="password">
          <form
            action=""
            className="password-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label for="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={passwordChange}
              value={password}
              required
            />
            <PasswordGuide condition={isValidPw} />
          </form>
        </div>
        <div className="password-confirmation">
          <label for="password-confirm">비밀번호 확인</label>
          <input
            type="password"
            id="password-confirm"
            placeholder="비밀번호를 다시 한번 입력해 주세요."
            onChange={pwConfirmChange}
            value={passwordConfirm}
            required
          />
          {<PasswordGuide condition={isValidConfirm} />}
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
                  onChange={onChangeIndividual}
                />
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
                  onChange={onChangeIndividual}
                />
                이벤트 소식 등 알림 정보 받기
              </label>
              <a href="https://help.wanted.co.kr/hc/ko/articles/360040540111">
                자세히
              </a>
            </div>
          </div>
        </div>
        <div className="register-modal__body-button">
          <RegisterButton
            allowed={
              isValidPhoneNum &&
              isValidPw &&
              isValidAuthenNum &&
              isValidConfirm &&
              isValidName &&
              checkAll
            }
            setModalOpen={setModalOpen}
            setModalMode={setModalMode}
            email={checkedEmail}
            password={password}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
