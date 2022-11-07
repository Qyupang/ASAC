import React from 'react';

const SearchNoMore = () => {
  return (
    <div className="search-content__more-info">
      <div className="search-content__empty">
        <h3 className="search-content__empty-title">
          바로 지원할 곳이 없다면?
          <br />
          <br />
          매치업에 등록하고 면접제안 받으세요!
        </h3>
        <button className="search-content__register-matchup">
          매치업 등록하기
        </button>
      </div>
    </div>
  );
};

export default SearchNoMore;
