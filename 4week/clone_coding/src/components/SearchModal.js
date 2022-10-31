import { React, useState } from 'react';

const SearchModal = ({ setSearchTerm, setSearched }) => {
  const searchTarget = (e) => {
    setSearchTerm(e.target.value);
  };

  const isSearched = () => {
    setSearched(true);
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
              onChange={() => {
                searchTarget();
                isSearched();
              }}
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
