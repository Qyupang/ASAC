import React from 'react';

const EnrollTerm = ({ setModalOpen, setModalMode, checkedEmail }) => {
  const onClick = (event) => {
    event.preventDefault();
    setModalOpen(false);
    setModalMode(0);
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
          <span className="useterm-modal__wanted-name">원티드</span>
        </div>
        <div className="useTerm-modal__checkboxes">
          <label>
            <input
              type="checkbox"
              name="agreeAll"
              value="agree-all"
              id="agree-all"
            />
            전체동의
          </label>
          <hr />
          <label>
            <input type="checkbox" name="agreeFirst" id="first" />
            원티드 이용 약관 동의(필수)
          </label>
          <label>
            <input type="checkbox" name="agreeSecond" id="second" />
            개인정보 수집 및 이용 동의(필수)
          </label>
          <label>
            <input type="checkbox" name="agreeLast" id="third" />
            채용 소식, 커리어 콘텐츠, 이벤트 등 맞춤 정보 받기
          </label>
        </div>
      </div>
    </div>
  );
};

export default EnrollTerm;
