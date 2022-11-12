import React from 'react';

const ProfileMenuModal = () => {
  return (
    <div className="profile">
      <div className="bubble-point"></div>
      <ul className="profile-modal">
        <li>
          <span>MY 원티드</span>
        </li>
        <li>
          <span>프로필</span>
        </li>
        <div />
        <li>
          <span>지원현황</span>
        </li>
        <li>
          <span>제안받기 현황</span>
        </li>
        <li>
          <span>좋아요</span>
        </li>
        <li>
          <span>북마크</span>
        </li>
        <div />
        <li>
          <span>추천</span>
        </li>
        <li>
          <span>포인트</span>
        </li>
        <div className="last-div" />
        <li className="logout">
          <span className="logout-span">로그아웃</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenuModal;
