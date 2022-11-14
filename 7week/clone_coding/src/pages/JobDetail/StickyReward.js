import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setBookmark, removeBookmark } from '../../modules/Bookmark';

const StickyReward = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const checkBookmark = (id) => dispatch(setBookmark(id));
  const uncheckBookmark = (id) => dispatch(removeBookmark(id));

  const bookmarkList = useSelector((state) => state);
  const listOfBookmark = bookmarkList?.bookmark?.bookmarkList;
  const [isBookMarked, setIsBookMarked] = useState(
    listOfBookmark ? listOfBookmark.includes(Number(id)) : false
  );

  const handleUncheck = () => {
    uncheckBookmark(Number(id));
    setIsBookMarked(!isBookMarked);
  };

  const handleCheck = () => {
    checkBookmark(Number(id));
    setIsBookMarked(!isBookMarked);
  };

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
      <button
        className="sticky-reward__bookmark sticky-btn"
        onClick={() => {
          isBookMarked ? handleUncheck() : handleCheck();
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
          className="sticky-reward__bookmark-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
            fill="#3366FF"
          ></path>
          <path
            d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
            fill={isBookMarked ? '#3366FF' : 'white'}
          ></path>
        </svg>
        <span>{isBookMarked ? '북마크 완료' : '북마크하기'}</span>
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
