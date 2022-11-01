import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const StickyReward = () => {
  return (
    <div className="sticky-reward">
      <div className="sticky-reward__container">
        <div className="sticky-reward__header">
          <span className="sticky-reward__container-title">채용보상금</span>
          <div className="sticky-reward__header-icon">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
        <ul className="sticky-reward__people">
          <li className="sitck-reward__person">
            <span className="person">추천인</span>
            <span className="reward-money">500,000원</span>
          </li>
          <li className="sitck-reward__person">
            <span className="person">추천인</span>
            <span className="reward-money">500,000원</span>
          </li>
        </ul>
      </div>
      <button className="sticky-reward__bookmark sticky-btn">
        <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        북마크하기
      </button>
      <button className="sticky-reward__apply sticky-btn">지원하기</button>
      <div className="sticky-reward__footer">
        <button className="sticky-reward__like">
          <i className="fa-solid fa-heart"></i>9
        </button>
        <ul className="sticky-reward__people-liked">
          <li className="first"></li>
          <li className="second"></li>
          <li className="third"></li>
        </ul>
      </div>
    </div>
  );
};

export default StickyReward;
