import { React, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import dummyForRecruitment from '../db/JobList/recruitmentCompany.json';

const SearchModal = ({ setModalOpen }) => {
  const navigate = useNavigate();

  let [query, setQuery] = useSearchParams();
  const [inputQuery, setInputQuery] = useState('');
  const [inputs, setInputs] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handelOnChange = (e) => {
    setInputs(e.target.value);
  };

  const handleResult = (keyword) => {
    const companies = dummyForRecruitment.companies.filter(
      (company) => company.companyName === keyword
    );
    console.log(companies);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputs === '') {
        alert('❗️검색어를 입력하세요');
      } else {
        setInputQuery(inputs);
        console.log(inputs);
        handleResult(inputs);
        setModalOpen(false);
        navigate(`/search?query=${inputs}`);
      }
    }
  };

  return (
    <>
      <div className="search-modal">
        <div className="search-modal__header">
          <form action="" className="search-form">
            <input
              type="text"
              id="search"
              placeholder="#태그, 회사, 포지션 검색"
              autoComplete="off"
              onKeyPress={handleEnter}
              onChange={handelOnChange}
              ref={inputRef}
            ></input>
          </form>
        </div>
        <div className="search-modal__body">
          <div className="search-modal__body-head">
            <span className="search-modal__recommand">
              추천태그로 검색해보세요
            </span>
            <a className="company-tag__link">기업태그 홈 이동하기 &gt;</a>
          </div>
          <ul className="company-tags">
            <li className="company-tag">
              <button className="company-tag__button">#어린이집</button>
            </li>
            <li className="company-tag">
              <button className="company-tag__button">#반려동물</button>
            </li>
            <li className="company-tag">
              <button className="company-tag__button">#상려금</button>
            </li>
            <li className="company-tag">
              <button className="company-tag__button">#퇴사율5%이하</button>
            </li>
            <li className="company-tag">
              <button className="company-tag__button">#연봉상위2~5%</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
