import React from 'react';

const SearchMoreInfo = () => {
  return (
    <div className="search-content__more-info">
      <h2 className="search-content__more-info-title">
        원티드 이외의 채용공고를 더 확인해 보세요
        <i class="fa-solid fa-circle-info" />
      </h2>
      <div className="search-content__empty">
        <h3 className="search-content__empty-title">
          아쉽지만 수집된 채용공고가 충분하지 않습니다.
          <br />
          <br />
          매치업에 등록하고 기업에게 먼저 면접제안을 받아보세요.
        </h3>
        <button className="search-content__register-matchup">
          매치업 등록하기
        </button>
      </div>
    </div>
  );
};

export default SearchMoreInfo;
