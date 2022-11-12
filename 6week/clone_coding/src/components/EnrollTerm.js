import React, { useState, useEffect } from 'react';

const EnrollTerm = ({ setModalOpen, setModalMode, checkedEmail }) => {
  const checks = ['first', 'second', 'third'];
  const [checkAll, setCheckAll] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [nextStep, setNextStep] = useState(false);
  const [checkColor, setCheckColor] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
    setModalOpen(false);
    setModalMode(0);
  };

  const checkAllList = (event) => {
    setCheckAll(event.target.checked);
    if (event.target.checked) {
      setCheckList(checks);
    } else {
      setCheckList([]);
    }
  };

  useEffect(() => {
    if (checkList.length === 3) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
    if (checkList.includes('first') && checkList.includes('second')) {
      setNextStep(true);
    } else {
      setNextStep(false);
    }
    if (checkList.includes('third')) {
      setCheckColor(true);
    } else {
      setCheckColor(false);
    }
  }, [checkList]);

  const handleOnclick = () => {
    checkColor ? setCheckColor(!checkColor) : setCheckColor(!checkColor);
  };

  return (
    <div className="useterm-modal">
      <div className="useterm-modal__header">
        <button onClick={onClick} className="useterm-modal__cancel">
          취소
        </button>
        <h1 className="useTerm-modal__title">원티드 이용 약관</h1>
      </div>
      <div className="useterm-modal__body">
        <div className="useterm-modal__wanted">
          <img
            className="useterm-modal__wanted-logo"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
            alt=""
          ></img>
          <span
            className="useterm-modal__wanted-name"
            onClick={() => console.log(nextStep)}
          >
            원티드
          </span>
        </div>
        <div className="useterm-modal__account-info">
          <div className="useterm-modal__left">
            <img
              src="https://static.wanted.co.kr/oneid-user/profile_default.png"
              alt=""
              className="useterm-modal__icon"
            />
            <span className="useterm-modal__email">{checkedEmail}</span>
          </div>
          <span>계정 설정 &gt;</span>
        </div>
        <div className="useTerm-modal__checkboxes">
          <label>
            <input
              type="checkbox"
              name="agreeAll"
              value="agree-all"
              id="agree-all"
              onChange={checkAllList}
              checked={checkAll}
            />
            <span>전체 동의</span>
          </label>
          <hr />
          <div className="detail-checkboxes">
            <div className="detail-checkbox__first">
              <label>
                <input
                  type="checkbox"
                  name="agreeFirst"
                  id="first"
                  checked={checkList.includes('first') ? true : false}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setCheckList((prev) => [...prev, 'first']);
                    } else {
                      setCheckList(checkList.filter((id) => id !== 'first'));
                    }
                  }}
                />
                <span>원티드 이용 약관 동의(필수)</span>
              </label>
              <span>자세히</span>
            </div>
            <div className="detail-checkbox__second">
              <label>
                <input
                  type="checkbox"
                  name="agreeSecond"
                  id="second"
                  checked={checkList.includes('second') ? true : false}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setCheckList((prev) => [...prev, 'second']);
                    } else {
                      setCheckList(checkList.filter((id) => id !== 'second'));
                    }
                  }}
                />
                <span>개인정보 수집 및 이용 동의(필수)</span>
              </label>
              <span>자세히</span>
            </div>
            <label>
              <input
                type="checkbox"
                name="agreeLast"
                id="third"
                checked={checkList.includes('third') ? true : false}
                onChange={(event) => {
                  if (event.target.checked) {
                    setCheckList((prev) => [...prev, 'third']);
                  } else {
                    setCheckList(checkList.filter((id) => id !== 'third'));
                  }
                }}
              />
              <span>
                채용 소식, 커리어 콘텐츠, 이벤트 등 맞춤 정보 <br /> <p>받기</p>
              </span>
            </label>
            <div className="checks-for__detail">
              <div onClick={handleOnclick}>
                <i
                  className="fa-solid fa-check"
                  style={checkColor ? { color: 'black' } : null}
                ></i>
                <span>이메일</span>
              </div>
              <div onClick={handleOnclick}>
                <i
                  className="fa-solid fa-check"
                  style={checkColor ? { color: 'black' } : null}
                ></i>
                <span>문자 메시지</span>
              </div>
              <div onClick={handleOnclick}>
                <i
                  className="fa-solid fa-check"
                  style={checkColor ? { color: 'black' } : null}
                ></i>
                <span>앱 푸시</span>
              </div>
            </div>
          </div>
          <button
            className="useterm-modal__button"
            style={
              nextStep ? { backgroundColor: 'black', color: 'white' } : null
            }
            onClick={() => {
              setModalOpen(false);
              setModalMode(0);
            }}
          >
            동의하고 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollTerm;
